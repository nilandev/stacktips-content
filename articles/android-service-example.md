---
id: 206
title: Android Service Example
slug: android-service-example
excerpt: In this tutorial we will learn how to create a service, and service lifecycle methods. A service is a application component used to perform long running tasks in background. A service can run in the background indefinitely, even if component that started the service is destroyed
difficulty: beginners
publishedDate: "2014-08-25T04:10:17.000Z"
updatedDate: "2025-09-16T23:05:30.534Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-service-lifecycle
  - bound-vs-unbound-service
  - startservice-onstartcommand
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Service Example: Lifecycle and Implementation"
  metaDescription: "Learn how Android Service works, including bound vs unbound services, lifecycle methods like onStartCommand, and a complete working code example."
  metaKeywords: null
---

# 1\. Introduction to Service

Android user interface is restricted to perform long running jobs to make user experience smoother. A typical long running tasks can be periodic downloading of data from internet, saving multiple records into database, perform file I/O, fetching your phone contacts list, etc. For such long running tasks, Service is the alternative.

1.  A service is a application component used to perform long running tasks in background.
2.  A service doesn’t have any user interface and neither can directly communicate to an activity.
3.  A service can run in the background indefinitely, even if component that started the service is destroyed.
4.  Usually a service always performs a single operation and stops itself once intended task is complete.
5.  A service runs in the main thread of the application instance. It doesn’t create its own thread. If your service is going to do any long running blocking operation, it might cause Application Not Responding (ANR). And hence, you should create a new thread within the service.

# 2\. Bound and Unbound Service

#### Bound Service

Service which call indefinitely in between activity. An Android component may bind itself to a Service using bindservice (). A bound service would run as long as the other application components are bound to it. As soon as they unbind, the service destroys itself.

#### Unbound Service

Service which call at the life span of calling activity. In this case, an application component starts the service, and it would continue to run in the background, even if the original component that initiated it is destroyed. For instance, when started, a service would continue to play music in the background indefinitely.

# 3\. Android Service Lifecycle

A service can be run by the system, If someone calls Context.startService() or bindService() method.

#### onStartCommand()

This method is called when the service be started, by calling `startService()`. Once this method executes, the service is started and can run in the background indefinitely. If you implement this, it is your responsibility to stop the service when its work is done, by calling `stopSelf()` or `stopService()`. If you are defining your service as, bounded service then you don’t need to implement this method.

#### onBind()

You need to override this method, only if you are defining your service as bounded service. This method is called, when another component wants to bind with the service by calling `bindService()`. In your implementation of this method, you must provide an interface that clients use to communicate with the service, by returning an IBinder. You must always implement this method, but if you don’t want to allow binding, then you should return null.

#### onCreate()

This method is called while the service is first created. Here all the service initialization is done. This method is never called again.

#### onDestroy()

The system calls this method when the service is no longer used and is being destroyed. This method is used to, clean up any resources such as threads, registered listeners, receivers, etc. This is the last call the service receives.

# 4\. Creating a Android Service

Create a new class and extend it from `android.app.Service`. You need to override `onStartCommand()`, `onBind()`, `onCreate()` and `onDestroy()` method to handle the service lifecycle.

```java
package com.javatechig.serviceexample;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

public class HelloService extends Service {

    private static final String TAG = "HelloService";

    private boolean isRunning  = false;

    @Override
    public void onCreate() {
        Log.i(TAG, "Service onCreate");

        isRunning = true;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        Log.i(TAG, "Service onStartCommand");

        //Creating new thread for my service
        //Always write your long running tasks in a separate thread, to avoid ANR
        new Thread(new Runnable() {
            @Override
            public void run() {

                //Your logic that service will perform will be placed here
                //In this example we are just looping and waits for 1000 milliseconds in each loop.
                for (int i = 0; i < 5; i++) {
                    try {
                        Thread.sleep(1000);
                    } catch (Exception e) {
                    }

                    if(isRunning){
                        Log.i(TAG, "Service running");
                    }
                }

                //Stop service once it finishes its task
                stopSelf();
            }
        }).start();

        return Service.START_STICKY;
    }

    @Override
    public IBinder onBind(Intent arg0) {
        Log.i(TAG, "Service onBind");
        return null;
    }

    @Override
    public void onDestroy() {

        isRunning = false;

        Log.i(TAG, "Service onDestroy");
    }
}
```

# 5\. Service Manifest Declaration

In theory, A service can be called from other application unless it is restricted. You can ensure that your service is available to only your app by including the `android:exported` attribute and setting it to “false”. This effectively stops other apps from starting your service, even when using an explicit intent.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatechig.serviceexample" >

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".HelloActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!--Service declared in manifest -->
        <service android:name=".HelloService"
            android:exported="false"/>
    </application>

</manifest>
```

# 6\. Starting Android Service

You can start a service from an activity or other application component by passing an Intent to `startService()`. The Android system calls the service’s `onStartCommand()` method and passes it the Intent.

In our example, we will start service by calling `startService()` method while start service button is clicked.

```java
Intent intent = new Intent(this, HelloService.class);
startService(intent);
```

# 7\. Stop Running Android Service

-   A service must be stopped itself by calling `stopSelf()` method, once it is finishes execution. However, you can also stop a service yourself by calling `stopService()` method.
-   A call to stopService method will call `onDestroy()` callback in your service. You have to manually stop your operation being performed by your application. To do this in the above example, we have taken a boolean variable to control the execution of service.

# 8\. Output

[![Android Service Example](/media/articles/274/Android-Service-Example-300x533.png)](http://stacktips.com)

Android Service Example

# 9\. Download Source Code

[Download Android Service Example](https://github.com/javatechig/Android-Service-Example "Download Android Service Example")
