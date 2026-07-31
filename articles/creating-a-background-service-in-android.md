---
id: 199
title: Creating a Background Service in Android Using IntentService
slug: creating-a-background-service-in-android
excerpt: In this tutorial we will take a look into one of most important and commonly used Android concept called IntentService. This post explains steps involved in creating a background service in Android using IntentService.
difficulty: beginners
publishedDate: "2014-09-15T00:30:28.000Z"
updatedDate: "2025-09-16T23:05:30.057Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-intentservice
  - background-service-android
  - resultreceiver-android
  - android-networking-tutorial
course: null
displayOrder: 0
seo: 
  metaTitle: "Android IntentService Tutorial: Background Service Guide"
  metaDescription: "Learn how to create a background service in Android using IntentService, pass data with ResultReceiver, and update your activity UI with real examples."
  metaKeywords: null
---

In this tutorial we will take a look into one of most important and commonly used Android concept called IntentService. This post explains steps involved in creating a background service in Android using IntentService. Before you start with this post, we recommend you to have a glance at below posts

**\* [Checkout Android Service Tutorial](http://stacktips.com/android/android-service-example "Android Service Example")**

**\* [Android Networking Tutorial](http://stacktips.com/android/android-networking-tutorial "Android Networking Tutorial")**

# 1\. What is IntentService?

IntentService is a subclass of `android.app.Service` class. A stated intent service allows to handle long running tasks without effecting the application UI thread. This is not bound to any activity so, it is not getting effected for any change in activity lifecycle. Once IntentService is started, it handles each Intent using a worker thread and stops itself when it runs out of work.

IntentService would be an best solution, If you have an work queue to process. For example, if your application using analytics you will likely to send event name and related parameter to your tracking server for each user generated event. Although each event means a tiny piece of data, creating networking request on each click will result an overhead to your application. Instead, you can use work queue processor design pattern and process the events in a batch.

# 2\. IntentService Limitations

1.  No easy or direct way to interact with user interface directly from IntentService. Later in this example, we will explain to pass result back from IntentService to
2.  With IntentService, there can only be one request processed at any single point of time. If you request for another task, then the new job will wait until the previous one is completed. This means that IntentService process the request
3.  An tasks stated using IntentService cannot be interrupted

# 3\. Why do we need IntentService?

Android design guidelines strongly suggests to perform all the long running tasks off the UI thread. For example, if you have to periodically download the largest chunk of data from server, you must use IntentService to avoid ANR. ANR (Application not responding) message often occurs, if your main thread is doing too much of work. In this course of this tutorial, we will learn the below concepts

1.  How to create and use IntentService
2.  How to pass data from activity to service as parameter
3.  How to pass result back to activity
4.  Update activity based on the result

#### Case Study

To make this tutorial easy to understand we will extend our previous tutorial ([Android Networking Tutorial](http://stacktips.com/android/android-networking-tutorial "Android Networking Tutorial")) to use Intent Service for downloading the data from server. We suggest you to checkout **[Android Networking Example](http://stacktips.com/android/android-networking-tutorial)** to get familiar with downloading data from server using different http clients available in Android.

**Feed Url : [http://stacktips.com/api/get\_category\_posts/?dev=1&slug=android](http://stacktips.com/api/get_category_posts/?dev=1&slug=android)**

**Expected Result** Start service to download the data when application is started. Once download is complete, update ListView present in your activity.

**Feed Response Object**

[![JSON Feed Response](/media/articles/264/JSON-Feed-Response.png)](http://stacktips.com)

# 4\. Create an IntentService

In the context of our example, we will create an IntentService to download the data from server. Once download is completed, the response will be sent back to activity. Lets create a new class `DownloadService.java` and extend it from `android.app.IntentService`. Now let us override `onHandleIntent()` method.

When service is started the onHandleIntent() method is called on the worker thread.Unlike Service, IntentService stops itself once it completes its task, so you don’t need to call stopSelf() for stoping the IntentService.

```java
package com.javatechig.intentserviceexample;

import android.app.IntentService;
import android.content.Intent;
import android.os.Bundle;
import android.os.ResultReceiver;
import android.text.TextUtils;
import android.util.Log;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class DownloadService extends IntentService {

    public static final int STATUS_RUNNING = 0;
    public static final int STATUS_FINISHED = 1;
    public static final int STATUS_ERROR = 2;

    private static final String TAG = "DownloadService";

    public DownloadService() {
        super(DownloadService.class.getName());
    }

    @Override
    protected void onHandleIntent(Intent intent) {

        Log.d(TAG, "Service Started!");

        final ResultReceiver receiver = intent.getParcelableExtra("receiver");
        String url = intent.getStringExtra("url");

        Bundle bundle = new Bundle();

        if (!TextUtils.isEmpty(url)) {
            /* Update UI: Download Service is Running */
            receiver.send(STATUS_RUNNING, Bundle.EMPTY);

            try {
                String[] results = downloadData(url);

                /* Sending result back to activity */
                if (null != results && results.length > 0) {
                    bundle.putStringArray("result", results);
                    receiver.send(STATUS_FINISHED, bundle);
                }
            } catch (Exception e) {

                /* Sending error message back to activity */
                bundle.putString(Intent.EXTRA_TEXT, e.toString());
                receiver.send(STATUS_ERROR, bundle);
            }
        }
        Log.d(TAG, "Service Stopping!");
        this.stopSelf();
    }

    private String[] downloadData(String requestUrl) throws IOException, DownloadException {
        InputStream inputStream = null;
        HttpURLConnection urlConnection = null;

        /* forming th java.net.URL object */
        URL url = new URL(requestUrl);
        urlConnection = (HttpURLConnection) url.openConnection();

        /* optional request header */
        urlConnection.setRequestProperty("Content-Type", "application/json");

        /* optional request header */
        urlConnection.setRequestProperty("Accept", "application/json");

        /* for Get request */
        urlConnection.setRequestMethod("GET");
        int statusCode = urlConnection.getResponseCode();

        /* 200 represents HTTP OK */
        if (statusCode == 200) {
            inputStream = new BufferedInputStream(urlConnection.getInputStream());
            String response = convertInputStreamToString(inputStream);
            String[] results = parseResult(response);
            return results;
        } else {
            throw new DownloadException("Failed to fetch data!!");
        }
    }

    private String convertInputStreamToString(InputStream inputStream) throws IOException {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String line = "";
        String result = "";

        while ((line = bufferedReader.readLine()) != null) {
            result += line;
        }

            /* Close Stream */
        if (null != inputStream) {
            inputStream.close();
        }

        return result;
    }

    private String[] parseResult(String result) {

        String[] blogTitles = null;
        try {
            JSONObject response = new JSONObject(result);
            JSONArray posts = response.optJSONArray("posts");
            blogTitles = new String[posts.length()];

            for (int i = 0; i < posts.length(); i++) {
                JSONObject post = posts.optJSONObject(i);
                String title = post.optString("title");
                blogTitles[i] = title;
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return blogTitles;
    }

    public class DownloadException extends Exception {

        public DownloadException(String message) {
            super(message);
        }

        public DownloadException(String message, Throwable cause) {
            super(message, cause);
        }
    }
}
```

#### How it works

1.  DownloadService class extending `IntentService` and overriding `onHandleIntent()` method. In onHandleIntent() method we will perform our network request to download data from server
2.  Before it downloads the data from server, the request is being fetched from bundle. Our Activity will send this data as extras while starting the
3.  Once Download is successful we will send the response back to activity via `ResultReceiver`
4.  For any exceptions or error, we will pass the error response back to activity via ResultReceiver.
5.  We have declared custom exception class `DownloadException` for handling all our custom error messages. You may do this

# 5\. Declaring Service in the Manifest

Like `Service`, an IntentService also needs an entry in your application manifest. Provide the element entry and declare all your IntentServices you using. Additionally as we are performing operation to download data from internet, we will request for `android.permission.INTERNET` permission.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatechig.intentserviceexample">

    <!-- Internet permission, as we are accessing data from server -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        <activity
            android:name=".MyActivity"
            android:label="@string/app_name">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- Declaring Service in Manifest -->
        <service
            android:name=".DownloadService"
            android:exported="false" />

    </application>

</manifest>
```

# 6\. Sending Work Requests to the IntentService

To start the DownloadService to download data, you must create an explicit Intent and add all the request parameters to it. A service can be started by calling `startService()` method. You can start an IntentService either form an `Activity` or a `Fragment`.

What is the additional `DownloadResultReceiver` here, huh?. Remember that we have to pass the result of download request from service to activity. This will be done through `ResultReceiver`.

```java
/* Starting Download Service */
mReceiver = new DownloadResultReceiver(new Handler());
mReceiver.setReceiver(this);
Intent intent = new Intent(Intent.ACTION_SYNC, null, this, DownloadService.class);

/* Send optional extras to Download IntentService */
intent.putExtra("url", url);
intent.putExtra("receiver", mReceiver);
intent.putExtra("requestId", 101);

startService(intent);
```

# 7\. Report Status From IntentService to Activity

To send the status of a work request in an IntentService to other components, get the instance of ResultReceiver. Send the status by calling send() method.

```java
final ResultReceiver receiver = intent.getParcelableExtra("receiver");
Bundle bundle = new Bundle();

/* Service Started */
receiver.send(STATUS_RUNNING, Bundle.EMPTY);

/* Status Finished */
bundle.putStringArray("result", results);
receiver.send(STATUS_FINISHED, bundle);

/* Sending error message back to activity */
bundle.putString(Intent.EXTRA_TEXT, "Error message here..");
receiver.send(STATUS_ERROR, bundle);
```

# 8\. Receive Status Broadcasts from an IntentService

To receive results back from IntentService, we can use subclass of `ResultReciever`. Once results are sent from Service the `onReceiveResult()` method will be called. Your activity handles this response and fetches the results from the Bundle. Once results are recieved, accordingly the activity instance updates the UI.

#### DownloadResultReceiver.java

```java
package com.javatechig.intentserviceexample;

import android.os.Bundle;
import android.os.Handler;
import android.os.ResultReceiver;

public class DownloadResultReceiver extends ResultReceiver {
    private Receiver mReceiver;

    public DownloadResultReceiver(Handler handler) {
        super(handler);
    }

    public void setReceiver(Receiver receiver) {
        mReceiver = receiver;
    }

    public interface Receiver {
        public void onReceiveResult(int resultCode, Bundle resultData);
    }

    @Override
    protected void onReceiveResult(int resultCode, Bundle resultData) {
        if (mReceiver != null) {
            mReceiver.onReceiveResult(resultCode, resultData);
        }
    }
}
```

#### MainActivity.java

```java
@Override
    public void onReceiveResult(int resultCode, Bundle resultData) {
        switch (resultCode) {
            case DownloadService.STATUS_RUNNING:
                setProgressBarIndeterminateVisibility(true);
                break;
            case DownloadService.STATUS_FINISHED:
                /* Hide progress & extract result from bundle */
                setProgressBarIndeterminateVisibility(false);
                String[] results = resultData.getStringArray("result");

                /* Update ListView with result */
                arrayAdapter = new ArrayAdapter(MyActivity.this, android.R.layout.simple_list_item_2, results);
                listView.setAdapter(arrayAdapter);
                break;
            case DownloadService.STATUS_ERROR:
                /* Handle the error */
                String error = resultData.getString(Intent.EXTRA_TEXT);
                Toast.makeText(this, error, Toast.LENGTH_LONG).show();
                break;
        }
    }
```

# 9\. Output

[![Android Networking Example](/media/articles/264/Android-Networking-Example-620x1048.png)](http://stacktips.com)

# 11\. Download Source Code

Download complete example source code from [**GitHub**](https://github.com/javatechig/Android-IntentService-Example)
