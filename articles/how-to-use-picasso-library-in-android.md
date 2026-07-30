---
id: 186
title: How to Use Picasso Image Loader Library in Android
slug: how-to-use-picasso-library-in-android
excerpt: This this tutorial, we will take a look into how to use Picasso library in android. Picasso is open source and one of the widely used image downloader library in Android. It is created and maintained by Square. It is among the powerful image download and caching library for android.
difficulty: beginners
publishedDate: "2014-11-05T13:00:57.000Z"
updatedDate: "2025-09-16T23:05:29.405Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

[![Picasso Image Downloader](/media/articles/247/Picasso-Image-Downloader.png)](http://stacktips.com)This this guide, we will see how to use Picasso library in android. Picasso is open source and one of the widely used image downloader library in Android. It is created and maintained by [Square](http://square.github.io/). It is among the powerful image download and caching [library for Android.](/articles/android-third-party-libraries-sdks "Android third party libraries and SDK’s")

## Why Use Picasso?

1.  It simplifies the process of loading images from external URLs and displays on your application. For example, downloading an image from the server is one of the most common tasks in any application. And it needs quite a larger amount of code to achieve this via android networking API’s. By using Picasso, you can achieve this with few lines of code.
2.  It is always not about downloading the image from a remote location. You also have to think of implementing image caching logic in order to provide a seamless user experience. Picasso provides automatic image caching.
3.  Image transformation is a costly affair. If your application need deal with such runtime image transformation, you must be watchful about OutOfMemoryException. Picasso deals with it, so you don’t have to do it yourself.

### How to Use Picasso Android Library?

[Download the Picasso JAR file](http://square.github.io/picasso/), If you haven’t done it already. If you are using eclipse as your development IDE, then just copy the downloaded `picasso-2.4.0.jar` file into your application lib folder. If you are using Android Studio IDE, then you have to add below dependency in `build.gradle` file.

```java
dependencies {
   ...
   compile "com.squareup.picasso:picasso:2.4.0"
   ...
}
```

### **Loading Image from URL ImageView**

We are done with configuration, let us see how to use this library to download images from remote server and display in ImageView. I assume you have your activity layout file already with ImageView declared on it.

```xml
<ImageView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/imageView"
    android:layout_alignParentTop="true"
    android:layout_centerHorizontal="true">
</ImageView>
```

For Picasso download image from server, you need to add below internet permissions to your project’s manifest.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

Now let us download the image and display on imageView

```java
//Initialize ImageView
ImageView imageView = (ImageView) findViewById(R.id.imageView);
//Loading image from below URL into imageView
Picasso.with(this)
   .load("YOUR IMAGE URL HERE")
   .into(imageView);
```

In the first line we are getting ImageView instance from the layout. And then load the image from the above remote URL using the Picasso library.

### Placeholder and Error Fallback

In the above code snippet, we have just downloaded the image and displayed on ImageView. But that is not enough always. For any real-time application, you must think of all possible cases. Now we need a placeholder and error fallback for our ImageView. Placeholder image will be shown before the image is loaded. Error fallback will be shown if, there is an error while downloading image. However both fallback and placeholder are optional.

```java
Picasso.with(this)
    .load("YOUR IMAGE URL HERE")
    .placeholder(R.drawable.ic_placeholder)
    .error(R.drawable.ic_error_fallback)
    .into(imageView);
```

### Image Resize and Transformation

Picasso offers much more than just downloading image. It can resize the image, transform before it is displayed in ImageView.

```java
Picasso.with(this)
     .load("YOUR IMAGE URL HERE")
     .placeholder(R.drawable.ic_placeholder)
     .error(R.drawable.ic_error_fallback)
     .resize(250, 200)
     .rotate(90)
     .into(imageView);
```

### Alternative options:

Some of the other alternative contenders of Picasso are:

-   [Universal Image Loader](/articles/universal-image-loader-library-in-android)
-   [Volley from Google](http://developer.android.com/training/volley/index.html)
