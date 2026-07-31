---
id: 105
title: Upload Bitmap Image Using HTTP Multipart in Xamarin Android
slug: upload-bitmap-image-to-server-using-http-multipart-in-xamarin-android
excerpt: In this post, we will take a look at what are the API’s Xamarin Android facilitates to support multi part upload. For the sake of simplicity, in this example we will upload an bitmap image to server.
difficulty: beginners
publishedDate: "2015-12-01T11:25:39.000Z"
updatedDate: "2025-09-16T23:05:25.110Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this post, we will take a look at what are the API’s Xamarin Android facilitates to support multipart upload. For the sake of simplicity, in this example, we will upload a bitmap image to the server.

The Multipart upload is a mechanism that enables you to upload large objects in chunks. In a mobile application context, it is useful when you capture a video or a photo using the device camera and want to upload it to your server.

In a multi-part request, each chunk/parts are separated by a delimiter. A delimiter is also known as a boundary that separates each part of a multi-part message. Each part of the message can define its own standard headers such as Content-Type and content disposition providing the name of the file whose value it contains. The multi-part delimiters and header fields are always 7-bit ASCII in any case.

For more detailed information on multi part content type search for RFC1341(MIME) or visit [http://www.w3.org/](http://www.w3.org/Protocols/rfc1341/7_2_Multipart.html)

## 1\. Convert the Bitmap to stream

Let us first convert the bitmap image into byte array to send it as ByteArrayContent via multi part form upload.

```csharp
public async Task<String> UploadBitmapAsync(Bitmap bitmap)
{
    //converting bitmap into byte stream
    byte[] bitmapData;
    var stream = new MemoryStream();
    bitmap.Compress(Bitmap.CompressFormat.Jpeg, 0, stream);
    bitmapData = stream.ToArray();
    var fileContent = new ByteArrayContent(bitmapData);
}
```

Notice that the `bitmap.Compress()` write a compressed version of the bitmap to the specified stream. The second integer argument indicates the compress quality ranging from 0 being low quality and to 100 maximum.

## 2\. Add request headers

Add the following additional content header such as media content type and content disposition. The `"my_uploaded_image.jpg"` is the name of image sent to server.

```csharp
fileContent.Headers.ContentType = MediaTypeHeaderValue.Parse ("application/octet-stream");
fileContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
{
    Name = "file",
    FileName = "my_uploaded_image.jpg"
};
```

## 3\. Add content chunks

Now let us initialize `MultipartFormDataContent` and add the chunks. The boundary is a random string used as a delimiter to separate each part of the message body.

```csharp
string boundary = "---8d0f01e6b3b5dafaaadaada";
MultipartFormDataContent multipartContent= new MultipartFormDataContent (boundary);
multipartContent.Add (fileContent);
//multipartContent.Add(fileContent2);
//multipartContent.Add(fileContent3);
```

Declare a string constant that represents the web service endpoint to upload the poi image using multi part.

## 4\. Upload Bitmap using HttpClient

Let us now proceed to upload the form content to server using HttpClient class PostAsync() method. The following code snippet demonstrates using HttpClient class for posting data to server.

```csharp
HttpClient httpClient = new HttpClient ();
HttpResponseMessage response = await httpClient.PostAsync (UPLOAD_IMAGE, multipartContent);
if (response.IsSuccessStatusCode) {
      string content = await response.Content.ReadAsStringAsync();
     return content;
}
return null;
```

## 5\. Complete example code

```csharp
private const string UPLOAD_IMAGE = “http://YOUR_SERVER/api/poi/upload”
public async Task<String> UploadBitmapAsync (Bitmap bitmap){
    byte[] bitmapData;
    var stream = new MemoryStream();
    bitmap.Compress(Bitmap.CompressFormat.Jpeg, 0, stream);
    bitmapData = stream.ToArray();
    var fileContent = new ByteArrayContent(bitmapData);

    fileContent.Headers.ContentType = MediaTypeHeaderValue.Parse ("application/octet-stream");
    fileContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
    {
        Name = "file",
        FileName = "my_uploaded_image.jpg"
    };

    string boundary = "---8d0f01e6b3b5dafaaadaad";
    MultipartFormDataContent multipartContent= new MultipartFormDataContent (boundary);
    multipartContent.Add (fileContent);

    HttpClient httpClient = new HttpClient ();
    HttpResponseMessage response = await httpClient.PostAsync (UPLOAD_IMAGE, multipartContent);
    if (response.IsSuccessStatusCode) {
        string content = await response.Content.ReadAsStringAsync ();
        return content;
    }
    return null;
}
```
