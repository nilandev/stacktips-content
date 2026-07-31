---
id: 336
title: Android WebView Example
slug: android-webview-example
excerpt: In the course of this tutorial, we will teach you how to use Android WebView and answer to some of the most common questions on android WebView. Android WebView is an embedded browser that can render static HTML data or even remote URL. A WebView is an android UI component that displays webpages.
difficulty: beginners
publishedDate: "2013-05-10T12:14:55.000Z"
updatedDate: "2025-09-16T23:05:36.706Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-webview
  - webviewclient
course: null
displayOrder: 0
seo: 
  metaTitle: "Android WebView Example: Load HTML and URLs In-App"
  metaDescription: "Learn how to use Android WebView to load static HTML or remote URLs, override link handling with WebViewClient, and keep browsing inside your app."
  metaKeywords: null
---

# 1\. Introduction to Android WebView

In the course of this tutorial, we will teach you how to use Android WebView and answer to some of the most common questions on android WebView.

1.  Android WebView is an embedded browser that can render static HTML data or even remote URL. A WebView is an android UI component that displays webpages.
2.  WebView encompasses the functionality of a browser that can be integrated to Android application.
3.  It uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, and perform text searches and more.
4.  Most of the android applications like WordPress, Flipboard, fiddly; Google Reader, etc. do integrate WebView, in order to display certain piece of online contents.

Android WebView use WebKit rendering engine to display web pages. If you see the android underlying platform architecture, the WebKit core resides in library layer, and the source is developed in C/C++. From Android application framework layer, the WebView can connect to WebKit using JNI (Java native Interface).

[![Android-system-architecture](/media/articles/430/Android-system-architecture.jpg)](http://elinux.org/images/c/c2/Android-system-architecture.jpg)

Android-system-architecture

If you are interested in taking a look into the Android platform source code, you may visit the following links  
[Webkit JNI code](https://android.googlesource.com/platform/external/webkit/+/f10585d69aaccf4c1b021df143ee0f08e338cf31/WebKit/android/jni)  
[BrowserWebView.Java](http://grepcode.com/file/repository.grepcode.com/java/ext/com.google.android/android-apps/4.1.1_r1/com/android/browser/BrowserWebView.java?av=f)

# 2\. Open Link on Android Device Browser

At times, you may require to invoke the device browser, when an external link is clicked from app. For example, in most of the mobile advertising platform, when user click on a banner, it redirect user to the ad publisher website to show more info on specific ad. For such similar requirement, you need to open device browser with a URL.

Following code show how to invoke device browser using Android Intent method.

```java
Uri uri = Uri.parse("http://stacktips.com");
Intent intent = new Intent(Intent.ACTION_VIEW, uri);
startActivity(intent);
```

The ACTION\_VIEW intent action is used to invoke the application based on the specified data. Here in this example, we are using URL as bundle data so it will invoke the specified url in the application that can take such action, eg. browser. If you provide the data type as phone number, it will automatically open phone dialer.

# 3\. Android WebView Example

Following section of the tutorial, will drive you with step by step approach to create a simple WebView with different configuration params and load stacktips.com home page.

# 4\. Declare WebView Layout

Like any other UI controls in android, you can include the WebView in your xml layout. Below is my xml layout

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/urlContainer"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal" >

    <WebView
        android:id="@+id/webView"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"/>
</LinearLayout>
```

# 5\. Load Static Html Data on WebView

Following activity class snippet will show you how to initialize WebView instance and load static Html string onto it. Just call loadData() It takes html string data, mime-type and encoding param as three parameters.

```java
//Instantiating WebView instance
WebView webView = (WebView) findViewById(R.id.webView);
String customHtml = "<html><body><h1>Hello, WebView</h1>" +
           "<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>" +
           "<p>This is a sample paragraph.</p>" +
           "</body></html>";
webView.loadData(customHtml, "text/html", "UTF-8");
```

Output of the above code is  
[![Load Static HTML Data on WebView](/media/articles/430/Load-Static-HTML-Data-on-WebView-300x294.png)](http://stacktips.com)

# 6\. Load Remote URL on WebView

1.  The default behavior of Android is to open device browser, when links are clicked. But as our WebView should work like a embedded browser, we must override to always open the links in the WebView instead redirecting it to the default browser.
2.  We can do this using android `WebViewClient`. WebViewClient helps to monitor events in a WebView. We have to override the `shouldOverrideUrlLoading()` method. This method allows performing your own action when a particular URL is selected. Once we are ready with the WebViewClient, we can set the WebViewClient of your WebView using the `setWebViewClient()` method.
3.  The WebViewClient class has some other useful methods such as `onPageStarted()`, `onPageFinished()` and `onReceivedError()` that helps you to show loading progress of WebView content, or handle error.

Checkout my Android tutorial that explains [How to show loading progress in Android WebView](http://stacktips.com/android/progressbar-while-loading-webview "ProgressBar while Loading WebView in Android").

Now let us go back to our example, and take a look into how our activity class looks like.

```java
public class WebViewActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_webview);

        webView = (WebView) findViewById(R.id.webView);
        webView.setWebViewClient(new MyWebViewClient());

        String url = "http://stacktips.com";
                webView.getSettings().setJavaScriptEnabled(true);
        webView.loadUrl(url);
    }

    private class MyWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }
}

```

Output of the above code is here

[![Load Remote URL on WebView](/media/articles/430/Load-Remote-URL-on-WebView-300x416.png)](http://stacktips.com)

# 7\. Display HTML Text in TextView

Android TextView is also capable of rendering the HTML text. Checkout my post [How to Display HTML in Android TextView](http://stacktips.com/android/display-html-in-android-textview "How to Display HTML in Android TextView").
