---
id: 196
title: Repeat Alarm Example In Android Using AlarmManager
slug: repeat-alarm-example-in-android
excerpt: In this tutorial we will learn how to create a repeat alarm example in android using AlarmManager class. AlarmManager is a class in Android which is used access device alarm service. This allow your application to execute certain piece of code on a given scheduled time. This can run outside the lifetime of your application.
difficulty: beginners
publishedDate: "2014-09-17T00:08:00.000Z"
updatedDate: "2025-09-16T23:05:29.847Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-alarmmanager
  - repeating-alarm-android
  - android-scheduled-tasks
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Scheduling and repeating alarms are generally used as a local reminder to notify user about some event. For example, a mobile live TV streaming application can use local reminder to notify users when a specific program starts. Note that, this is different form Server push notification, mainly because it is purely managed by mobile client.

## 1. AlarmManager in Android

`AlarmManager` is a class in Android allows you to access device system alarm service. Using AlarmManager, you can schedule to execute certain piece of code a particular time. Let us dive into details of AlarmManager specifics:

-   AlarmManager runs outside the lifetime of your application. Once an alarm is scheduled, it will invoke even when your application is not running or in sleep mode.
-   An scheduled alarm will execute unless it is stopped explicitly by calling cancel() method, or until device reboots.
-   All scheduled alarms will be stopped when device reboots. This means, you need to re-schedule them explicitly when device boot completes.
-   AlarmManger fires an `Intent` at given intervals. This can be used along with broadcast receivers to start a service to perform network operations.
-   AlarmManager is different form java `Timer` and `TimerTask.`

Note, You need to take extra care while working with AlarmManager. A poorly designed AlarmManager can drain your device battery.

## 2. Setting Repeat Alarm

Android supports two clock types for alarm service; elapsed real time and real time clock (RTC). Elapsed real time uses the time since device last booted. Real time clock (RTC) uses UTC time for alarm service clock. RTC is most commonly used for setting alarm service in android. The following example, using RTC to schedule alarm.

The application using a single activity containing three buttons. One button is for starting an alarm service, another to cancel scheduled alarm. The third button is to start the alarm at specified calendar time. For example, if you have set a time for your birthday reminder. It will invoke at 10:30 PM and will repeat on every 30 mins.

Let us have a look into our activity layout file (my\_activity.xml)

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context=".MyActivity">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginBottom="20dp"
        android:text="@string/hint"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <Button
        android:id="@+id/startAlarm"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:layout_below="@+id/textView"
        android:layout_marginBottom="20dp"
        android:text="Start Alarm Service" />

    <Button
        android:id="@+id/stopAlarm"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/startAlarm"
        android:layout_marginBottom="20dp"
        android:text="Stop Alarm" />

    <Button
        android:id="@+id/stopAlarmAt10"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/stopAlarm"
        android:text="Stop Alarm at 10:30" />

</RelativeLayout>
```

[![AlarmManager Example in Android](/media/articles/261/AlarmManager-Example-in-Android-620x433.png)](http://stacktips.com)

## 3. Defining Alarm BroadcastReceiver

In this example, we are associating alarm service with broadcast receiver. Alarm service will invoke this receiver on scheduled time. For the sake of simplicity we are just showing an toast to user for each time the alarm is invoked. You may write your logic to start a service or download task.

**Note:** If your alarm has to perform network task, then start a download service inside `onRecieve()` method of your alarm broadcast.

```java
package com.javatechig.alarmservice;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class AlarmReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        // For our recurring task, we'll just display a message
        Toast.makeText(context, "I'm running", Toast.LENGTH_SHORT).show();
    }
}
```

## 4. Schedule & Cancel Alarm

In the above two steps we have defined activity layout and alarm broadcast receiver. Let us have a look into MainActivity.java file. Inside MyActivity class, we have defined three simple methods start(), stop() and startAt10(). The start() method schedule the alarm, cancel() method cancel the scheduled alarm, and startAt!0() method will start the alarm at 10:30 PM with a fixed 20 minutes interval.

```java
package com.javatechig.alarmservice;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;
import java.util.Calendar;

public class MyActivity extends Activity {

    private PendingIntent pendingIntent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);

        /* Retrieve a PendingIntent that will perform a broadcast */
        Intent alarmIntent = new Intent(MyActivity.this, AlarmReceiver.class);
        pendingIntent = PendingIntent.getBroadcast(MyActivity.this, 0, alarmIntent, 0);

        findViewById(R.id.startAlarm).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                start();
            }
        });

        findViewById(R.id.stopAlarm).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cancel();
            }
        });

        findViewById(R.id.stopAlarmAt10).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startAt10();
            }
        });
    }

    public void start() {
        AlarmManager manager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
        int interval = 8000;

        manager.setInexactRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), interval, pendingIntent);
        Toast.makeText(this, "Alarm Set", Toast.LENGTH_SHORT).show();
    }

    public void cancel() {
        AlarmManager manager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
        manager.cancel(pendingIntent);
        Toast.makeText(this, "Alarm Canceled", Toast.LENGTH_SHORT).show();
    }

    public void startAt10() {
        AlarmManager manager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
        int interval = 1000 * 60 * 20;

        /* Set the alarm to start at 10:30 AM */
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(System.currentTimeMillis());
        calendar.set(Calendar.HOUR_OF_DAY, 10);
        calendar.set(Calendar.MINUTE, 30);

        /* Repeating on every 20 minutes interval */
        manager.setRepeating(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(),
                1000 * 60 * 20, pendingIntent);
    }

}
```

## 5. Re-Starting Alarm Service on Device Reboot

As discussed earlier, once an alarm service is started, it execute until it is explicitly stopped or until device reboots. This means that, if your device is restarted then your alarm is stopped. To avoid such situation, you have to restart your alarm service as soon as device boot completes. Below code snippet will help you to start alarm service once device reboots.

```java
package com.javatechig.alarmservice;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

/**
 * @author Nilanchala
 *         <p/>
 *         Broadcast reciever, starts when the device gets starts.
 *         Start your repeating alarm here.
 */
public class DeviceBootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals("android.intent.action.BOOT_COMPLETED")) {
            /* Setting the alarm here */
            Intent alarmIntent = new Intent(context, AlarmReceiver.class);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, alarmIntent, 0);

            AlarmManager manager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
            int interval = 8000;
            manager.setInexactRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), interval, pendingIntent);

            Toast.makeText(context, "Alarm Set", Toast.LENGTH_SHORT).show();
        }
    }
}
```

## 6. Declaring Application Manifest

To start your alarm on device reboot, you have to register your above declared `DeviceBootReciever` class in your application manifest. This also need `android.permission.RECEIVE_BOOT_COMPLETED`

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatechig.alarmservice" >

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >

        <!-- Permission to start Alarm on device reboot -->
        <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>

        <activity
            android:name=".MyActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <receiver android:name=".AlarmReceiver">
          <intent-filter>
               <action android:name="android.intent.action.BOOT_COMPLETED"/>
          </intent-filter>
        </receiver>

        <!-- Will not be called unless the application explicitly enables it -->
        <receiver android:name=".DeviceBootReceiver"
            android:enabled="false">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>

    </application>
</manifest>
```

## 7. Download Source Code

Download Complete source code from [**GitHub**](https://github.com/javatechig/Android-Alarm-Service-Example)
