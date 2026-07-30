---
id: 146
title: Consuming REST Web Service and Deserializing Response Using Json.NET in Xamarin Android
slug: consuming-rest-web-service-in-xamarin-android
excerpt: Consuming data from web services is the most common task and very integral part to most of the full-fledged mobile application. In this tutorial we will take a look into various key concepts and steps for consuming web service methods from Xamarin Android application.
difficulty: beginners
publishedDate: "2015-03-10T13:09:45.000Z"
updatedDate: "2025-09-16T23:05:27.957Z"
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

Consuming data from web services is the most common task and very integral part to most of the full-fledged mobile application. In this tutorial we will take a look into various key concepts and steps for consuming web service methods from Xamarin Android application. This tutorial explains the following key concepts.

# 1\. Understanding web service basics

Web services are the server side applications that are meant to serve data or logic to various client applications. REST and SOAP are the industry standard web service architecture widely used. The data shared to client can be of various media formats, it can be plain text data, XML, JSON, audio, video or other supporting formats.

Android application doesn’t care of which language the web service is developed in. All you need to know is the specification of the API Application Programming Interface). The specification includes, request method such as (GET, POST, PUT, DELETE), header metadata such as accept-type, content-type, etc.

In this example, we will be consuming the following API to fetch list of latest posts from JavaTechig.

**URL Endpoint:** [http://stacktips.com/api/get\_category\_posts/?dev=1&slug=android](http://stacktips.com/api/get_category_posts/?dev=1&slug=android)  
**Request Method:** GET  
**Accept-Type:** “application/json”  
**Response:**  
[![JSON Feed Response](/media/articles/208/JSON-Feed-Response-940x838.png)](http://stacktips.com)

# 2\. Declare entity class

Now that we have fair understanding of the structure of response, lets us go ahead with declaring an entity class that holds the repose received. Notice that the response is quite big and structure looks complex.

From the above response, we will use only the list of recent posts from the above response and ignore the other data. Let us create an entity class “Post” with the following attributes.

```cs
public class Post
{
     public int Id { get; set;}
     public string Url { get; set; }
     public string Title { get; set; }
}
```

# 3\. Asynchronous programming with async await

Downloading data from server is a long running task, and hence we must create a new thread to perform such operations. We can make use of `System.Threading` namespace classes to create a new thread or simply use `async`, `await` keywords. The async and await are two keywords introduced since .NET 4.5 helps programmers to execute code asynchronously without writing your own thread. All you have to do is to define async keyword in your method declaration and use await keyword for any long running tasks.

```cs
public async void DownloadDataAsync() {
    string url = "http://stacktips.com/api/get_category_posts/?dev=1&slug=android"

    var httpClient = new HttpClient();
    Task<string> downloadTask = httpClient.GetStringAsync(url);
    string content = await downloadTask;
    Console.Out.WriteLine("Response: \r\n {0}", content);
}
```

# 4\. Deserializing response using Json.NET

So far we have downloaded data from server and printing the JSON response on console. Now let us de-serialize the JSON response into Post list collection. In this example, I am using **Json.NET** component for parsing JSON data. You can add it to your project it from Xamarin component store.

Once you have added Json.NET component to your solution, add the following code snippet to `DownloadDataAsync()` method.

```cs
// de-serializing json response into list
var posts = new List <Post> ();
JObject jsonResponse = JObject.Parse (content);
IList<JToken> results = jsonResponse ["posts"].ToList ();
foreach (JToken token in results) {
    PointOfInterest poi = JsonConvert.DeserializeObject<Post> (token.ToString ());
    posts.Add (poi);
}

// Write your logic here to display posts list on ui
```

In this example, we are not writing any code to explain the user interface and hence, I have just a comment. You can follow [Xamarin Android ListView Example](http://stacktips.com/xamarin/listview-example-in-xamarin-android "ListView Example in Xamarin.Android") to learn more about creating list UI.

# 5\. Adding INTERNET permission

Downloading data from server requires special permission to be granted in `AndroidManifest.xml`. Open AndroidManifest.xml and add the following code before `<application>` element.

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```
