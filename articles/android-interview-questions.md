---
id: 195
title: Android Interview Question Answers For Freshers
slug: android-interview-questions
excerpt: Here in this post, you will find compiled set of android interview questions and answers. These questions are…
difficulty: beginners
publishedDate: "2014-09-21T11:43:00.000Z"
updatedDate: "2025-09-16T23:05:29.817Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - interview-questions
  - activity-lifecycle
  - android-data-persistence
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Interview Questions for Freshers"
  metaDescription: "A compiled set of Android interview questions and answers for freshers, covering activity lifecycle, ANR, context types, nine-patch images, and data storage."
  metaKeywords: null
---

Here in this post, you will find compiled set of android interview questions and answers. These questions are intended for freshers and android learners. I am on my way publishing the more advance interview questions sets.

### 1\. When does onResume() method called?

onResume() method is an activity lifecycle method. This is called when the activity come to foreground. You can override this method in your activity to execute code when activity is started, restarted or comes to foreground.

### 2\. How to launch an activity in your application?

For launching an activity, we need to create an explicit intent that defines the activity that we wish to start. In the below code snippet, the first parameter to Intent constructor is the current activity context and the second parameter is your new activity `class.startActivity()` method can be called on Activity context.

```java
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

If you want to start an activity from fragment

```java
Intent intent = new Intent(getActivity(), SecondActivity.class);
getActivity().startActivity(intent);
```

### 3\. How to define an Activity as launcher activity in application Manifest file?

All the activities used in the application should be defined in application manifest file. For launcher activity you need to define intent filter as shown in the below code snippets.

```xml
<activity android:name=".MyActivity"
              android:label="@string/app_name">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
    </activity>
```

### 4\. What is a ANR ?

ANR is short for Application Not Responding. Android systems shows this dialog, if application is performing too much of task on main thread and been unresponsive for a long period of time.

### 5\. What are the measures to avoid application ANR?

ANR in application is annoying to user. It can be caused due to various reasons. Below are some of the tips to avoid ANR

-   Perform all you long running network or database operation in separate thread
-   If you have too much of background tasks, then take it off the UI thread. You may use IntentService
-   Server not responding for longer period can be guilt for ANR. To avoid always define HTTP time out for your all your webs service calls.
-   Be watchful of infinite loops during your complex calculations

### 6\. What is the difference between a regular .png and a nine-patch image?

The nine patch images are extension with `.9.png`. Nine-patch image allows resizing that can be used as background or other image size requirements for the target device. The Nine-patch refers to the way you can resize the image: 4 corners that are unscaled, 4 edges that are scaled in 1 axis, and the middle one that can be scaled into both axes.

### 7\. How to share text using android share Intent ?

Share intent is an easy and convenient way of sharing content of your application with other apps.

```java
Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, "This is my text to send.");
sendIntent.setType("text/plain");
startActivity(sendIntent);
```

### 8\. What is the use of WebView in android?

A WebView is an android UI component that displays webpages. It can either display a remote webpage or can also load static HTML data. This encompasses the functionality of a browser that can be integrated to application. WebView uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backward through a history, zoom in and out, etc.

### 9\. Define different kind of context in android

Context defines the current state of application or object. Context provides access to things such as creating new activity instance, access databases, start a service, etc. You can get the context by invoking `getApplicationContext()`, `getContext()`, `getBaseContext()` or `this` when in the activity class.

```java
//Creating ui instance
ImageButton button = new ImageButton(getContext());

//creating adapter
ListAdapter adapter = new SimpleCursorAdapter(getApplicationContext(), ...);

//querying content provider
getApplicationContext().getContentResolver().query(uri, ...);

//start activity. Here this means activity context
Intent intent = new Intent(this, SecondActivity.class);
```

### 10\. What are the different storage methods in android

Android offers several different options for data persistence.

1.  **Shared Preferences** – Store private primitive data in key-value pairs. This sometimes gets limited as it offers only key value pairs. You cannot save your own java types.
2.  **Internal Storage** – Store private data on the device memory
3.  **External Storage** – Store public data on the shared external storage
4.  **SQLite Databases** – Store structured data in a private database. You can define many number of tables and can store data like other RDBMS.
