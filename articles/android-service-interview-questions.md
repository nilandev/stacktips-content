---
id: 194
title: Android Service Interview Questions
slug: android-service-interview-questions
excerpt: In this post you will find set of interview questions and answers on Android Service, IntentService and AlarmService
difficulty: beginners
publishedDate: "2014-09-23T01:30:53.000Z"
updatedDate: "2025-09-16T23:05:29.785Z"
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

### 1\. What is the purposes of Service in Android?

Android Service is used to perform long running jobs off the UI thread. A typical long running tasks can be periodic downloading of data from internet, saving multiple records into database, perform file I/O, fetching your phone contacts list, etc. For such long running tasks, Service is used to avoid UI lags and makes user experience better.

### 2\. Explain service lifecycle methods?

A service can be run by the system, If someone calls Context.startService() or bindService() method.

1.  **onStartCommand()** – This method is called when the service be started by calling startService(). Once this method executes, the service is started and can run in the background indefinitely. If you implement this, it is your responsibility to stop the service when its work is done, by calling stopSelf() or stopService(). If you are defining your service as, bounded service then you don’t need to implement this method.
2.  **onBind()** – You need to override this method, only if you are defining your service as bounded service. This method is called, when another component wants to bind with the service by calling bindService(). In your implementation of this method, you must provide an interface that clients use to communicate with the service, by returning an IBinder. You must always implement this method, but if you don’t want to allow binding, then you should return null.
3.  **onCreate()**– This method is called while the service is first created. Here all the service initialization is done. This method is never called again.
4.  **onDestroy()** – The system calls this method when the service is no longer used and is being destroyed. This method is used to, clean up any resources such as threads, registered listeners, receivers, etc. This is the last call the service receives.

### 3\. What is the difference between bound and unbounded service?

1.  **Bound Service –** Service which call indefinitely in between activity. An Android component may bind itself to a Service using bindservice (). A bound service would run as long as the other application components are bound to it. As soon as they unbind, the service destroys itself.
2.  **Unbound Service –** Service which call at the life span of calling activity. In this case, an application component starts the service, and it would continue to run in the background, even if the original component that initiated it is destroyed. For instance, when started, a service would continue to play music in the background indefinitely.

### 4\. What are the different clock types supported for AlarmService?

Android supports two clock types for alarm service. Once is elapsed real time and other is real time clock (RTC). Elapsed real time uses the time since device last booted. Real time clock (RTC) uses UTC time for alarm service clock. RTC is most commonly used for setting alarm service in android.

### 5\. How to define a service in manifest

All the services used in the app need to be registered in application Manifest. Services are declared as shown below

```xml
<!--Service declared in manifest -->
<service android:name=".HelloService"
android:exported="false"/>
```

### 6\. How to pass data to an IntentService ?

You can pass data as bundle to IntentService before you start.

```java
Intent intent = new Intent(Intent.ACTION_SYNC, null, this, DownloadService.class);

/* Send optional extras to Download IntentService */
intent.putExtra("url", url);
intent.putExtra("receiver", mReceiver);
intent.putExtra("requestId", 101);

startService(intent);
```

### 7\. What is an alarm service and explain it’s need with real-world example

Alarm service is used to run tasks periodically at given interval. You can design application like alrm, birthday reminder, or AlarmManager can be used to initiate long running operations such as syncing data from server once a day. Once an Alarm Started, this will execute until it is stopped explicitly or until device reboots.

### 8\. How to stop service?

Bounded service stops itself once it finishes its tasks. But for unbounded service we need to call stopSelf() or stopService() method.

### 9\. Can an IntentService execute multiple tasks sequentially?

No. Intent Services are designed to perform one task at single point of time. However tasks can be queued.

### 10\. How can we make the AlarmService run forever even after device reboot

Once you start an AlarmService, it runs forever until your device restarts. Once your device restart, you have to start the service explicitly to run it forever again. You have to register BroadcastReceiver to handle boot event.

### 11\. What are the key differences between a service and IntentService in Android?

| Service | IntentService |
| --- | --- |
| Service can be used in tasks with no UI, but shouldn’t be too long. If you need to perform long tasks, you must create a new thread with in Service | IntentService can be used in long running tasks usually with no communication to Main Thread. If communication is required, can use Main Thread handler or broadcast intents. |
| Service can be started using startService() method | IntentService can be started using startService() method and it triggers onHandleIntent() method. |
| Service can be triggered from any thread | IntentService must be triggered from Main Thread |
| Service runs in background but it runs on the Main Thread of the application. | IntentService runs on a separate worker thread |
| The Service may block the Main Thread of the application. | The IntentService cannot run tasks in parallel. Hence all the consecutive intents will go into the message queue for the worker thread and will execute sequentially. |
| You must call stopSelf() or stopService() to stop a service once your its job is done. | IntentService stops itself when it finishes its job so you never have to call stopSelf() |
