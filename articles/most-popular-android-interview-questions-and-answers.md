---
id: 350
title: Most Popular Android Interview Questions and Answers
slug: most-popular-android-interview-questions-and-answers
excerpt: A comprehensive list of the most important and commonly asked Android interview questions and answers with detailed explanations.
difficulty: intermediate
publishedDate: "2023-04-02T06:53:28.000Z"
updatedDate: "2025-09-16T23:05:37.359Z"
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

### 1\. What are the key differences between a service and IntentService in Android?

| Service | IntentService |
| --- | --- |
| Service can be used in tasks with no UI, but shouldn't be too long. If you need to perform long tasks, you must create a new thread with in Service | IntentService can be used in long running tasks usually with no communication to Main Thread. If communication is required, can use Main Thread handler or broadcast intents. |
| Service can be started using startService() method | IntentService can be started using the startService() method and it triggers onHandleIntent() method. |
| Service can be triggered from any thread | IntentService must be triggered from Main Thread |
| Service runs in background but it runs on the Main Thread of the application. | IntentService runs on a separate worker thread |
| The Service may block the Main Thread of the application. | The IntentService cannot run tasks in parallel. Hence all the consecutive intents will go into the message queue for the worker thread and will execute sequentially. |
| You must call stopSelf() or stopService() to stop a service once your its job is done. | IntentService stops itself when it finishes its job so you never have to call stopSelf() |

### 2\. What is an alarm service and explain the purpose with real-world examples.

Alarm service is used to run tasks periodically at a given interval. You can design applications like Alarm, birthday reminder, or AlarmManager can be used to initiate long-running operations such as syncing data from the server once a day. Once an Alarm is Started, this will execute until it is stopped explicitly or until the device reboots.

### 3\. How to pass data to an IntentService?

You can pass data as a bundle to IntentService before you start.

```java

Intent intent = new Intent(Intent.ACTION_SYNC, null, this, DownloadService.class);

/* Send optional extras to Download IntentService */
intent.putExtra("url", url);
intent.putExtra("receiver", mReceiver);
intent.putExtra("requestId", 101);

startService(intent);
```

### 4\. How to define a service in an Android manifest file?

All the services used in the app need to be registered in the application Manifest. Services are declared as shown below

```xml

<!--Service declared in manifest -->
<service android:name=".HelloService"
android:exported="false"/>
```

### 5\. What are the different clock types supported for AlarmService?

Android supports two clock types for alarm service. Once is elapsed in real time and the other is a real-time clock (RTC). Elapsed real time uses the time since the device last booted. Real-time clock (RTC) uses UTC for alarm service clock. RTC is most commonly used for setting alarm services in Android.

### 6\. What is the difference between bound and unbounded service in Android?

1.  **Bound Service -** Service which calls indefinitely in between activities. An Android component may bind itself to a Service using bindservice (). A bound service would run as long as the other application components are bound to it. As soon as they unbind, the service destroys itself.
2.  **Unbound Service -** Service which calls at the life span of calling activity. In this case, an application component starts the service, and it would continue to run in the background, even if the original component that initiated it is destroyed. For instance, when started, a service would continue to play music in the background indefinitely.

### 7\. Explain service lifecycle methods in Android.

A service can be run by the system, If someone calls Context.startService() or bindService() method.

1.  **onStartCommand()** - This method is called when the service is started by calling startService(). Once this method executes, the service is started and can run in the background indefinitely. If you implement this, it is your responsibility to stop the service when its work is done, by calling stopSelf() or stopService(). If you are defining your service as, a bounded service then you don't need to implement this method.
2.  **onBind()** - You need to override this method, only if you are defining your service as a bounded service. This method is called when another component wants to bind with the service by calling bindService(). In your implementation of this method, you must provide an interface that clients use to communicate with the service, by returning an IBinder. You must always implement this method, but if you don't want to allow binding, then you should return null.
3.  **onCreate()**\- This method is called while the service is first created. Here all the service initialization is done. This method is never called again.
4.  **onDestroy()** - The system calls this method when the service is no longer used and is being destroyed. This method is used to, clean up any resources such as threads, registered listeners, receivers, etc. This is the last call the service receives.

### 8\. What is the purpose of Service in Android?

Android Service is used to perform long-running jobs off the UI thread. Typical long-running tasks can be periodic downloading of data from the internet, saving multiple records into the database, performing file I/O, fetching your phone contacts list, etc. For such long-running tasks, Service is used to avoid UI lags and make the user experience better.

### 9\. How to Pass Data Between Activities in Android?

We can pass values between the activities, by using Bundles. Use the below code to send data from ActivityA

```java

String name="Javatechig";
String url="http://stacktips.com"
Intent intent=new Intent(ActivityA.this, ActivityB.class);
intent.putExtra("name", name);
intent.putExtra("url", url);
startActivity(intent);
```

Now, you can retrieve the data in ActivityB using the below code

```java

Bundle bundle = new Bundle();
bundle = getIntent().getExtras();
String name = bundle.getString("name");
String url = bundle.getString("url");
```

### 10\. How to display Android Toast?

Toast is a notification message that pops up, displays a certain amount of time, and automatically fades in and out, most people just use it for debugging purposes. Below are the code snippets to create a Toast message

```java

//display in a short period of time
Toast.makeText(getApplicationContext(), "msg msg", Toast.LENGTH_SHORT).show();

//display over a long period of time
Toast.makeText(getApplicationContext(), "msg msg", Toast.LENGTH_LONG).show();
```

[Android custom toast example](http://stacktips.com/android/android-toast-example/)

### 11\. How to Display HTML in Android TextView?

In Android, there is a lovely class `android.text.HTML` that processes HTML strings into displayable styled text. Currently android doesn't support all HTML tags.

`Html.formHtml()` method takes an `Html.TagHandler` and an `Html.ImageGetter` as arguments as well as the text to parse. We can parse null as for the `Html.TagHandler` but you'd need to implement your own `Html.ImageGetter` as there isn't a default implementation. The Html.ImageGetter needs to run synchronously and if you're downloading images from the web you?ll probably want to do that asynchronously.

But in my example, I am using the images from resources to make my ImageGetter implementation simpler.

```java

String htmlText = "<html><body>....</body></html>";
TextView htmlTextView = (TextView)findViewById(R.id.html_text);
htmlTextView.setText(Html.fromHtml(htmlText, new ImageGetter(), null));
```

### 12\. How to open a link in Android Browser?

```java

Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://stacktips.com"));
startActivity(browserIntent);
```

### 13\. When is the onResume() method called in the activity lifecycle?

The onResume() method is an activity lifecycle method. This is called when the activity comes to the foreground. You can override this method in your activity to execute code when the activity is started, restarted or comes to the foreground.

### 14\. How to launch an activity in your application?

For launching an activity, we need to create an explicit intent that defines the activity that we wish to start. In the below code snippet, the first parameter to the Intent constructor is the current activity context and the second parameter is your new activity `class.startActivity()` method can be called on Activity context.

```java

Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

If you want to start an activity from a fragment

```java

Intent intent = new Intent(getActivity(), SecondActivity.class);
getActivity().startActivity(intent);
```

### 15\. How to define an Activity as a launcher activity in the application Manifest file?

All the activities used in the application should be defined in the application manifest file. For the launcher activity, you need to define the intent filter as shown in the below code snippets.

```xml

<activity android:name=".MyActivity"
          android:label="@string/app_name">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>
```

### 16\. What is an ANR? What measures you can take to avoid application ANR?

ANR is short for Application Not Responding. Android systems show this dialog if the application is performing too much of a task on the main thread and has been unresponsive for a long period.

**Measures to avoid application ANR:** ANR in the application is annoying to the users. It can be caused due to various reasons. Below are some of the tips to avoid ANR

-   Perform all your long-running network or database operations in a separate thread
-   If you have too much of background tasks, then take it off the UI thread. You may use IntentService
-   The server not responding for a longer period can be guilty of ANR. To avoid always defining HTTP time out for all your web service calls.
-   Be watchful of infinite loops during your complex calculations

### 17\. How to share text using android share Intent?

Share intent is an easy and convenient way of sharing the content of your application with other apps.

```java

Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, "This is my text to send.");
sendIntent.setType("text/plain");
startActivity(sendIntent);
```

### 18\. What is the use of WebView in Android?

A WebView is an Android UI component that displays webpages. It can either display a remote webpage or can also load static HTML data. This encompasses the functionality of a browser that can be integrated into an application.

WebView uses the WebKit rendering engine to display web pages and includes methods to navigate forward and backwards through a history, zoom in and out, etc.

### 19\. Define different kinds of context in android

Context defines the current state of the application or object. Context provides access to things such as creating new activity instances, accessing databases, starting a service, etc. You can get the context by invoking `getApplicationContext()`, `getContext()`, `getBaseContext()` or `this` when in the activity class.

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

### 20\. What are the different data storage options available in Android?

Android offers several different options for data persistence.

1.  **Shared Preferences** - Used to store private primitive data in key-value pairs. This sometimes gets limited as it offers only key-value pairs. You cannot save your own Java types.
2.  **Internal Storage** - Used to store private data on the device's memory
3.  **External Storage** - Used to store public data on the shared external storage
4.  **SQLite Databases** - Used to store structured data in a private database. You can define many tables and can store data like other RDBMS.

### 21\. How to send SMS in Android?

You may send SMS either using SmsManager or by invoking the Built-in SMS application

**Sending SMS using SmsManager API**

```java

SmsManager smsManager = SmsManager.getDefault();
smsManager.sendTextMessage("", null, "< message body>", null, null);
```

SmsManager requires **SMS\_SEND** permission in your Android manifest.

**Sending SMS by invoking the Built-in SMS application**

```java

Intent sendIntent = new Intent(Intent.ACTION_VIEW);
sendIntent.putExtra("sms_body", ?");
sendIntent.setType("vnd.android-dir/mms-sms");
startActivity(sendIntent);
```

### 22\. How to Make a Call in Android?

```java

Intent callIntent = new Intent(Intent.ACTION_CALL);
callIntent.setData(Uri.parse("tel:03777788"));
startActivity(callIntent);
```

### 23\. How to send Email from Android application?

Android Intent is a handy way to send Email using your app.

```java

String to = toEmail.getText().toString();
String subject = emailSubject.getText().toString();
String message = emailBody.getText().toString();
Intent email = new Intent(Intent.ACTION_SEND);
email.putExtra(Intent.EXTRA_EMAIL, new String[] { to });
email.putExtra(Intent.EXTRA_SUBJECT, subject);
email.putExtra(Intent.EXTRA_TEXT, message);

// need this to prompt email client-only
email.setType("message/rfc822");
startActivity(Intent.createChooser(email, "Choose an Email client"));
```
