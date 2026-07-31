---
id: 224
title: Progress Notification in Android Example
slug: progress-notification-in-android-example
excerpt: In this example we’ll show you how to display progress notification in android using NotificationManager class. For the sake of simplicity the below example shows an simple AsyncTask that does the background operation and update the progress bar displayed on android notification area.
difficulty: beginners
publishedDate: "2014-05-30T02:24:47.000Z"
updatedDate: "2025-09-16T23:05:31.331Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-progress-notification
  - notificationmanager-android
  - android-asynctask-example
  - android-notification-progressbar
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we’ll show you how to display progress notification in Android using `NotificationManager` class. For the sake of simplicity the below example shows an simple `AsyncTask` that does the background operation and update the progress bar displayed on android notification area.

As described above this example, using an simple layout with an single button. While user clicking on the button the `AsyncTask` starts and the it displays the progress notification.

## Application Layout

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/container"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical" >

    <Button
        android:id="@+id/button1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="20dp"
        android:text="Start Download" />

</LinearLayout>
```

## Activity Class

```java
import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationCompat.Builder;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {
    private NotificationManager mNotifyManager;
    private Builder mBuilder;
    int id = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button b1 = (Button) findViewById(R.id.button1);
        b1.setOnClickListener(new View.OnClickListener() {

            public void onClick(View arg0) {
                mNotifyManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                mBuilder = new NotificationCompat.Builder(MainActivity.this);
                mBuilder.setContentTitle("Download")
                        .setContentText("Download in progress")
                        .setSmallIcon(R.drawable.ic_download);

                new Downloader().execute();
            }
        });
    }

    private class Downloader extends AsyncTask<Void, Integer, Integer> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();

            // Displays the progress bar for the first time.
            mBuilder.setProgress(100, 0, false);
            mNotifyManager.notify(id, mBuilder.build());
        }

        @Override
        protected void onProgressUpdate(Integer... values) {
            // Update progress
            mBuilder.setProgress(100, values[0], false);
            mNotifyManager.notify(id, mBuilder.build());
            super.onProgressUpdate(values);
        }

        @Override
        protected Integer doInBackground(Void... params) {
            int i;
            for (i = 0; i <= 100; i += 5) {
                // Sets the progress indicator completion percentage
                publishProgress(Math.min(i, 100));
                try {
                    // Sleep for 5 seconds
                    Thread.sleep(2 * 1000);
                } catch (InterruptedException e) {
                    Log.d("TAG", "sleep failure");
                }
            }
            return null;
        }

        @Override
        protected void onPostExecute(Integer result) {
            super.onPostExecute(result);
            mBuilder.setContentText("Download complete");
            // Removes the progress bar
            mBuilder.setProgress(0, 0, false);
            mNotifyManager.notify(id, mBuilder.build());
        }
    }
}
```

## Download Source Code

#### Download Source Code from **[GitHub.](https://github.com/javatechig/Progress-Notification-Example-Android)**

## Output

[![Displaying Progress Notification in Android Example](/media/articles/296/Displaying-Progress-Notification-in-Android-Example.png)](http://stacktips.com)
