---
id: 238
title: Universal Image Loader Library in Android
slug: universal-image-loader-library-in-android
excerpt: Universal Image Loader is an smart and powerful library that helps in loading, caching and displaying images on Android. This means, using this library you can download remote images and display on ImageView.
difficulty: beginners
publishedDate: "2014-05-14T04:48:51.000Z"
updatedDate: "2025-09-16T23:05:31.934Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - universal-image-loader-android
  - android-imageview-caching
  - async-image-loading-android
  - android-image-cache-library
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we’ll show you how to use Universal Image Loader library in your android project.

## What is Universal Image Loader?

Universal Image Loader is an smart and powerful library that helps in loading, caching and displaying images on Android. This means, using this library you can download remote images and display on ImageView.

## Universal Image Loader Features

-   Asynchronous and multi-threaded image loading. This allows you to download multiple images Asynchronously.
-   Supports various configurations that helps to tune for your requirement. With this you can control memory, cache type, decoder, display image options, etc.
-   Possibility of image caching in memory and/or on device’s file system (or SD card)
-   Possibility to “listen” loading process. Allows various callback methods using which you will get to know the progress/state of your download request.

[![UniversalImageLoader](/media/articles/309/UniversalImageLoader-620x405.png)](http://stacktips.com)

## Integrating Universal Image Loader in Android

Integrating this library is quite easy. Here we’ll show you steps to download and integrate this library in Android application.

#### 1\. Download Universal Image Loader

**[Download Universal Image Loader JAR](https://github.com/nostra13/Android-Universal-Image-Loader/raw/master/downloads/universal-image-loader-1.9.1-with-sources.jar)** and put the JAR in the **libs** folder of your Android project. You can also fork the library on [GitHub](https://github.com/nostra13/Android-Universal-Image-Loader)

#### 2\. Mainfest permissions

Add below required permission in your application Manifest file.

```xml
<manifest>
    <uses-permission android:name="android.permission.INTERNET" />
    <!-- Include next permission if you want to allow UIL to cache images on SD card -->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    ...
    <application android:name="MyApplication">
        ...
    </application>
</manifest>
```

#### 3\. Library setup in your Application class

```java
import android.app.Application;
import com.nostra13.universalimageloader.cache.memory.impl.WeakMemoryCache;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.nostra13.universalimageloader.core.assist.ImageScaleType;
import com.nostra13.universalimageloader.core.display.FadeInBitmapDisplayer;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        // UNIVERSAL IMAGE LOADER SETUP
        DisplayImageOptions defaultOptions = new DisplayImageOptions.Builder()
                .cacheOnDisc(true).cacheInMemory(true)
                .imageScaleType(ImageScaleType.EXACTLY)
                .displayer(new FadeInBitmapDisplayer(300)).build();

        ImageLoaderConfiguration config = new ImageLoaderConfiguration.Builder(
                getApplicationContext())
                .defaultDisplayImageOptions(defaultOptions)
                .memoryCache(new WeakMemoryCache())
                .discCacheSize(100 * 1024 * 1024).build();

        ImageLoader.getInstance().init(config);
        // END - UNIVERSAL IMAGE LOADER SETUP
    }
}
```

#### 4\. Download and display bitmap on ImageView

```java
//your image url
String url = "http://stacktips.com/wp-content/uploads/2014/05/UniversalImageLoader-620x405.png";

ImageLoader imageLoader = ImageLoader.getInstance();
DisplayImageOptions options = new DisplayImageOptions.Builder().cacheInMemory(true)
                .cacheOnDisc(true).resetViewBeforeLoading(true)
                .showImageForEmptyUri(fallback)
                .showImageOnFail(fallback)
                .showImageOnLoading(fallback).build();

//initialize image view
ImageView imageView = (ImageView) findViewById(R.id.imageView1)

//download and display image from url
imageLoader.displayImage(url, imageView, options);
```
