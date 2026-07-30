---
id: 270
title: Android Handler Example
slug: android-handler-example
excerpt: In this example we will see how to use Handler in android. This example downloads image from server and using Handler it is communicating back with UI thread.
difficulty: beginners
publishedDate: "2013-11-05T11:26:47.000Z"
updatedDate: "2025-09-16T23:05:33.878Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - sencha-touch
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we will see how to use Handler in android. This example downloads image from server and using Handler it is communicating back with UI thread.

A Handler allows you communicate back with the UI thread from other background thread. This is useful in android as android doesn’t allow other threads to communicate directly with UI thread. Handler can send and process Message and Runnable objects associated with a thread’s MessageQueue. Each Handler instance is associated with a single thread and that thread’s message queue. When a new Handler is created, it is bound to the thread/message queue of the thread that is creating it.

The example explained in this tutorial is using below configurations

-   JDK 1.6
-   Eclipse 4.2 Juno
-   Android SKD 4.0
-   And tested over HTC OneX (Android 4.2)

#### Android Activity Layout (activity\_main.xml)

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity" >

    <Button
        android:id="@+id/button1"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="15dp"
        android:text="Download Image" />

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:scaleType="centerInside"
        android:src="@drawable/ic_launcher" />

</LinearLayout>
```

#### Android Activity (MainActivity.java)

```java
package com.javatechig.handlerexample;
import java.io.InputStream;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import com.javatechige.handlerexample.R;

import android.app.Activity;
import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;
public class MainActivity extends Activity {
    private ProgressDialog progressDialog;
    private ImageView imageView;
    private String url = "http://www.9ori.com/store/media/images/8ab579a656.jpg";
    private Bitmap bitmap = null;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        imageView = (ImageView) findViewById(R.id.imageView);

        Button start = (Button) findViewById(R.id.button1);
        start.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View arg0) {
                progressDialog = ProgressDialog.show(MainActivity.this, "", "Loading..");
                new Thread() {
                    public void run() {
                        bitmap = downloadBitmap(url);
                        messageHandler.sendEmptyMessage(0);
                    }
                }.start();
            }
        });
    }

    private Handler messageHandler = new Handler() {
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            imageView.setImageBitmap(bitmap);
                progressDialog.dismiss();
        }
    };

    private Bitmap downloadBitmap(String url) {
        // Initialize the default HTTP client object
        final DefaultHttpClient client = new DefaultHttpClient();

        //forming a HttpGet request
        final HttpGet getRequest = new HttpGet(url);
        try {
            HttpResponse response = client.execute(getRequest);
            //check 200 OK for success
            final int statusCode = response.getStatusLine().getStatusCode();
            if (statusCode != HttpStatus.SC_OK) {
                Log.w("ImageDownloader", "Error " + statusCode + " while retrieving bitmap from " + url);
                return null;
            }

            final HttpEntity entity = response.getEntity();
            if (entity != null) {
                InputStream inputStream = null;
                try {
                    // getting contents from the stream
                    inputStream = entity.getContent();
                    // decoding stream data back into image Bitmap
                    Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
                    return bitmap;
                } finally {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                    entity.consumeContent();
                }
            }
        } catch (Exception e) {
            getRequest.abort();
            Log.e(getString(R.string.app_name), "Error "+ e.toString());
        }
        return null;
    }
}
```

#### Output

[![Android Handler Example](/media/articles/357/Android-Handler-Example.gif)](http://stacktips.com)

#### Download Complete Source

Download complete source code from [GitHub](https://github.com/javatechig/javatechig-android-advanced/tree/master/HandlerExample)
