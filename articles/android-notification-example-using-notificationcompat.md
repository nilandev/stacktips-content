---
id: 207
title: Android Notification Example Using NotificationCompat
slug: android-notification-example-using-notificationcompat
excerpt: In this example, we will learn how to create Android notification using NotificationCompat class available in the Android Support library. This class supports big style notification with backward compatibility.
difficulty: beginners
publishedDate: "2014-08-10T15:47:40.000Z"
updatedDate: "2025-09-16T23:05:30.598Z"
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

In this example, we will learn how to create Android notification using NotificationCompat class available in the Android Support library. This class supports big style notification with backward compatibility. Big style notification was introduced on Android version 4.1.x. If you are building app that supports older android phones like android 2.3 or above, in such cases you may like to go for NotificationCompat.Builder for showing notifications.

If you are using this library, then your newer version of android phone will show big styled notification, while older android phones will show old style notification.

# Example using NotificationCompat

```java

package com.javatechig.notification;

import android.app.Activity;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.view.View;

public class MainActivity extends Activity {

    // A integer, that identifies each notification uniquely
    public static final int NOTIFICATION_ID = 1;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Your application layout file
        setContentView(R.layout.sample_layout);
    }

    /**
     * Send simple notification using the NotificationCompat API.
     */
    public void sendNotification(View view) {

        // Use NotificationCompat.Builder to set up our notification.
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this);

        //icon appears in device notification bar and right hand corner of notification
        builder.setSmallIcon(R.drawable.ic_stat_notification);

        // This intent is fired when notification is clicked
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://stacktips.com/"));
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);

        // Set the intent that will fire when the user taps the notification.
        builder.setContentIntent(pendingIntent);

        // Large icon appears on the left of the notification
        builder.setLargeIcon(BitmapFactory.decodeResource(getResources(), R.drawable.ic_launcher));

        // Content title, which appears in large type at the top of the notification
        builder.setContentTitle("Notifications Title");

        // Content text, which appears in smaller text below the title
        builder.setContentText("Your notification content here.");

        // The subtext, which appears under the text on newer devices.
        // This will show-up in the devices with Android 4.2 and above only
        builder.setSubText("Tap to view documentation about notifications.");

        NotificationManager notificationManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);

        // Will display the notification in the notification bar
        notificationManager.notify(NOTIFICATION_ID, builder.build());
    }
}
```
