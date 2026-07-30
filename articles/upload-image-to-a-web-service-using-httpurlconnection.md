---
id: 137
title: Upload image to a web service using HttpURLConnection
slug: upload-image-to-a-web-service-using-httpurlconnection
excerpt: The following code snippet can be used to upload an image to web service in Android. After getting a Bitmap object from the camera or other source, you can compress the create an HttpURLConnection and attach the image to the request body.
difficulty: beginners
publishedDate: "2015-07-30T21:53:33.000Z"
updatedDate: "2025-09-16T23:05:27.044Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet can be used to upload an image to web service in Android. After getting a Bitmap object from the camera or other source, you can compress the create an HttpURLConnection and attach the image to the request body.

```java
try {
    URL url = new URL(SERVER_POST_URL);
    HttpURLConnection c = (HttpURLConnection) url.openConnection();
    c.setDoInput(true);
    c.setRequestMethod("POST");
    c.setDoOutput(true);
    c.connect();

    OutputStream output = c.getOutputStream();
    bitmap.compress(CompressFormat.JPEG, 50, output);
    output.close();

    Scanner result = new Scanner(c.getInputStream());
    String response = result.nextLine();
    Log.e("ImageUploader", "Error uploading image: " + response);

    result.close();
} catch (IOException e) {
        Log.e("ImageUploader", "Error uploading image", e);
}
```
