---
id: 157
title: Xamarin Android WebView Tutorial
slug: xamarin-android-webview-tutorial
excerpt: In the course of this tutorial, we will take a look into using WebView in Xamarin.Android. This tutorial loads simple webpage on WebView and using WebViewClient.WebView is an android UI component that displays webpages.
difficulty: beginners
publishedDate: "2015-01-30T11:38:59.000Z"
updatedDate: "2025-09-16T23:05:28.123Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - xamarin-webview
  - webviewclient-example
  - load-html-in-webview
  - xamarin-android-tutorial
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the course of this tutorial, we will take a look into using WebView in Xamarin.Android. This tutorial loads simple webpage on `WebView` and using `WebViewClient`.

## Introduction to WebView

1.  WebView is an android UI component that displays webpages. It can either display a remote webpage or can also load static HTML data.
2.  This encompasses the functionality of a browser that can be integrated to application. Most of the android applications like WordPress, Flipboard, fiddly; Google Reader, etc. are integrated with WebView in order to display certain piece of online contents.
3.  It uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, and perform text searches and more.
4.  The implementation of WebView is quite simple like any other views, all you have to do is declare the WebView layout on your Activity or Fragment, instantiate and load the data on WebView.

Following section of the tutorial, will drive you with step by step approach to create a simple WebView with different configuration params and load stacktips.com home page.

## Declare WebView Layout

As discussed, let us create a simple WebView layout that covers the full screen space.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <WebView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/webView" />

</LinearLayout>
```

## Load Static HTML Data on WebView

Following activity class snippet will show you how to initialize WebView instance and load static Html string onto it.

```csharp
[Activity (Label = "WebViewExample", MainLauncher = true, Icon = "@drawable/icon")]
public class MainActivity : Activity
{
    protected override void OnCreate (Bundle bundle)
    {
        base.OnCreate (bundle);

        // Set our view from the "main" layout resource
        SetContentView (Resource.Layout.Main);

        // Get WebView from the layout resource,
        // and load html text data on it
        WebView mWebView = FindViewById<WebView>(Resource.Id.webView);

        string customHtml = "<html><body><h1>Hello, WebView</h1>" +
            "<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>" +
            "<p>This is a sample paragraph.</p>" +
            "</body></html>";
        mWebView.LoadData(customHtml, "text/html", "UTF-8");
    }
}
```

### How it works?

1.  Like any other view controller, let us first instantiate WebView in your Activity by calling FindViewById() method. This requires you to import `Android.Webkit` package.
2.  Call `LoadData()` method that accepts your static Html string, mime type and the encoding format.

The output of the above code is below

[![Load Static HTML Data on WebView](/media/articles/213/Load-Static-HTML-Data-on-WebView-300x294.png)](#)

## Load Remote URL on WebView

1.  The default behavior of Android is to open device browser, when links are clicked. But as our WebView should work like a embedded browser, we must override to always open the links in the WebView instead redirecting it to the default browser.
2.  We can do this using android `WebViewClient`. WebViewClient helps to monitor events in a WebView. We have to override the `shouldOverrideUrlLoading()` method. This method allows performing your own action when a particular URL is selected. Once we are ready with the WebViewClient, we can set the WebViewClient of your WebView using the `setWebViewClient()` method.
3.  The WebViewClient class has some other useful methods such as `OnPageStarted()`, `OnPageFinished()` and `OnReceivedError()` that helps you to show loading progress of WebView content, or handle error.

Checkout my Android tutorial that explains [How to show loading progress in Android WebView](http://stacktips.com/android/progressbar-while-loading-webview "ProgressBar while Loading WebView in Android"). Bear with me, this tutorial is written in Java. You need to take the pain to make it compatible for C#.

Now let us go back to our example, and take a look into how our activity class looks like.

```csharp
[Activity (Label = "WebViewExample", MainLauncher = true, Icon = "@drawable/icon")]
public class MainActivity : Activity
{
    protected override void OnCreate (Bundle bundle)
    {
        base.OnCreate (bundle);

        // Set our view from the "main" layout resource
        SetContentView (Resource.Layout.Main);

        WebView mWebView = FindViewById<WebView>(Resource.Id.webView);
        mWebView.Settings.JavaScriptEnabled = true;

        mWebView.SetWebViewClient (new MyWebViewClient());

        //Load url to be randered on WebView
        mWebView.LoadUrl("http://www.stacktips.com");
    }

    public class MyWebViewClient : WebViewClient
    {
      public override bool ShouldOverrideUrlLoading (WebView view, string url)
        {
            view.LoadUrl (url);
            return true;
        }

        public override void OnPageStarted (WebView view, string url, Android.Graphics.Bitmap favicon)
        {
            base.OnPageStarted (view, url, favicon);
        }

        public override void OnPageFinished (WebView view, string url)
        {
            base.OnPageFinished (view, url);
        }

        public override void OnReceivedError (WebView view, ClientError errorCode, string description, string failingUrl)
        {
            base.OnReceivedError (view, errorCode, description, failingUrl);
        }
    }
}
```

Output of the above code is shown below  
![Load Remote URL on WebView](/media/articles/213/Load-Remote-URL-on-WebView-300x416.png)
