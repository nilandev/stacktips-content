---
id: 339
title: Download Image using AsyncTask in Android
slug: download-image-using-asynctask-in-android
excerpt: This tutorial explains how to download Image using AsyncTask in Android. The example below download image while showing progress bar while during download.
difficulty: beginners
publishedDate: "2013-03-19T07:06:09.000Z"
updatedDate: "2025-09-16T23:05:36.850Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-asynctask-example
  - download-image-android
  - android-progressdialog
  - httpclient-bitmap-download
course: null
displayOrder: 0
seo: 
  metaTitle: "Download Image Using AsyncTask in Android (with Code)"
  metaDescription: "Learn how to download an image in Android using AsyncTask while showing a progress dialog, with a step-by-step explanation of the AsyncTask lifecycle."
  metaKeywords: null
---

This tutorial explains how to download Image using AsyncTask in Android. The example below download image while showing progress bar while during download.

## Understanding Android AsynkTask

Async task enables you to implement MultiThreading without get Hands dirty into threads. AsyncTask enables proper and easy use of the UI thread. It allows performing background operations and passing the results on the UI thread. If you are doing something isolated related to UI, for example downloading data to present in a list, go ahead and use AsyncTask.

-   AsyncTasks should ideally be used for short operations (a few seconds at the most.)
-   An asynchronous task is defined by 3 generic types, called Params, Progress and Result, and 4 steps, called onPreExecute, doInBackground, onProgressUpdate and onPostExecute.
-   In onPreExecute you can define code, which need to be executed before background processing starts.
-   doInBackground have code which needs to be executed in background, here in doInBackground we can send results to multiple times to event thread by publishProgress() method, to notify background processing has been completed we can return results simply.
-   onProgressUpdate() method receives progress updates from doInBackground method, which is published via publishProgress method, and this method can use this progress update to update event thread
-   onPostExecute() method handles results returned by doInBackground method.
-   The generic types used are
    -   Params, the type of the parameters sent to the task upon execution
    -   Progress, the type of the progress units published during the background computation.
    -   Result, the type of the result of the background computation.
-   If an async task not using any types, then it can be marked as Void type.
-   An running async task can be cancelled by calling cancel(boolean) method.

## Downloading image using Android AsyncTask

```xml
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout_width="fill_parent"
android:layout_height="fill_parent"
android:orientation="vertical" >

<Button
android:id="@+id/downloadButton"
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:text="Click Here to Download" />

<ImageView
android:id="@+id/imageView"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:contentDescription="Your image will appear here" >
</ImageView>

</LinearLayout>
```

.java class

```java
package com.javatechig.droid;

import java.io.InputStream;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import android.app.Activity;
import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;

public class ImageDownladerActivity extends Activity {

    private ImageView downloadedImg;
    private ProgressDialog simpleWaitDialog;
    private String downloadUrl = "http://www.9ori.com/store/media/images/8ab579a656.jpg";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.asynch);
        Button imageDownloaderBtn = (Button) findViewById(R.id.downloadButton);

        downloadedImg = (ImageView) findViewById(R.id.imageView);

        imageDownloaderBtn.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                new ImageDownloader().execute(downloadUrl);
            }

        });
    }

    private class ImageDownloader extends AsyncTask {

        @Override
        protected Bitmap doInBackground(String... param) {
            // TODO Auto-generated method stub
            return downloadBitmap(param[0]);
        }

        @Override
        protected void onPreExecute() {
            Log.i("Async-Example", "onPreExecute Called");
            simpleWaitDialog = ProgressDialog.show(ImageDownladerActivity.this,
                    "Wait", "Downloading Image");

        }

        @Override
        protected void onPostExecute(Bitmap result) {
            Log.i("Async-Example", "onPostExecute Called");
            downloadedImg.setImageBitmap(result);
            simpleWaitDialog.dismiss();

        }

        private Bitmap downloadBitmap(String url) {
            // initilize the default HTTP client object
            final DefaultHttpClient client = new DefaultHttpClient();

            //forming a HttoGet request
            final HttpGet getRequest = new HttpGet(url);
            try {

                HttpResponse response = client.execute(getRequest);

                //check 200 OK for success
                final int statusCode = response.getStatusLine().getStatusCode();

                if (statusCode != HttpStatus.SC_OK) {
                    Log.w("ImageDownloader", "Error " + statusCode +
                            " while retrieving bitmap from " + url);
                    return null;

                }

                final HttpEntity entity = response.getEntity();
                if (entity != null) {
                    InputStream inputStream = null;
                    try {
                        // getting contents from the stream
                        inputStream = entity.getContent();

                        // decoding stream data back into image Bitmap that android understands
                        final Bitmap bitmap = BitmapFactory.decodeStream(inputStream);

                        return bitmap;
                    } finally {
                        if (inputStream != null) {
                            inputStream.close();
                        }
                        entity.consumeContent();
                    }
                }
            } catch (Exception e) {
                // You Could provide a more explicit error message for IOException
                getRequest.abort();
                Log.e("ImageDownloader", "Something went wrong while" +
                        " retrieving bitmap from " + url + e.toString());
            }

            return null;
        }
    }
}
```

Output of the above code is  
[![](/media/articles/433/image-downloader-thumb.png)](http://stacktips.com)

**[Download Complete eclipse project from GitHub](https://github.com/javatechig/javatechig-android-advanced/tree/master/com.javatechig.imagedownloader)**
