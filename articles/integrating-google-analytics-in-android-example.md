---
id: 269
title: Integrating Google Analytics in Android Example
slug: integrating-google-analytics-in-android-example
excerpt: "Analytics is one of the major parts in applications that drive revenue. Mobile App Analytics help you set and track the goal conversions you want most: purchases, clicks, or simply time spent on your app. It is required to make business inclined towards user’s interest."
difficulty: beginners
publishedDate: "2013-11-10T20:30:47.000Z"
updatedDate: "2025-09-16T23:05:33.851Z"
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

# 1\. Why Analytics in Mobile app ?

Analytics is one of the major parts in applications that drive revenue. Mobile App Analytics help you set and track the goal conversions you want most: purchases, clicks, or simply time spent on your app. It is required to make business inclined towards user’s interest. For example, if you developing an application for Mobile Shopper app, it is important to track the below things.

1.  Number of users/active users from across the world
2.  Most viewed products, categories, brands, etc.
3.  Number of users placing request, etc.

The above information is required in order to improve the product and make the service is better.

# 2\. Introduction to Google Analytics

The Google Analytics Platform lets you measure user interactions with your business across various devices and environments. The platform provides all the computing resources to collect, store, process, and report on these user-interactions.

# 3\. Supported Features

Below are the currently supported features. Read more

**[http://www.google.co.in/analytics/mobile/](http://www.google.co.in/analytics/mobile/)**

1.  Google Play Integration
2.  Crash and Exception Reporting
3.  Custom Reports
4.  Event Tracking
5.  Flow Visualization
6.  Real-Time Reporting

# 4\. How to use Google Analytics in android

This section of tutorial we will see detailed steps to install Google Analytics for your android application. Before begin with Analytics integration we need the following items

1.  Android developer SDK and required configurations. I assume you have it already, if not you can follow Android official documentation **[http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html)**
2.  Google Analytics SDK for Android v3, with `libGoogleAnalyticsServices.jar` file. Copy this file in your project’s /libs directory.
3.  Codebase of an Android app that you like to implement the Google Analytics
4.  Create a Google Analytics account (Requires Gmail), and then create a new app property and view in the Analytics console.

# 5\. Using Google Analytics Detailed Steps

Before starting with section, I assume you already have Codebase of an Android app that you like to implement the Google Analytics. But to simplify my example, I am creating an simple Android App and integrating with Google Analytics.

## 5.1. Creating Google Analytics Account and App Property

1.  Login to your Google Analytics Account. Then press “Admin” button on the right side of your screen.
2.  Create a new Account, if you don’t have one and then create a new property. While creating a new property choose Mobile App.
3.  After property is created, you will get the `tracking Id`. This tracking id will be used as configuration in android app.

## 5.2. Add analytics.xml configuration file

Add `analytics.xml` configuration file in your application values folder

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <!-- Replace placeholder ID with your tracking ID -->
    <string name="ga_trackingId">UA-xxxxxxxxxx</string>

    <!-- Enable automatic activity tracking -->
    <bool name="ga_autoActivityTracking">true</bool>

    <!-- Enable automatic exception tracking -->
    <bool name="ga_reportUncaughtExceptions">true</bool>

</resources>
```

## 5.3. Android Activity Layout (activity\_main.xml)

For this example, I have created an sample Activity with two buttons for tracking event and exceptions.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="@dimen/activity_vertical_margin"
    tools:context=".MainActivity" >

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/info" />

    <Button
        android:id="@+id/trackEvent"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Track Event" />

    <Button
        android:id="@+id/trackCrash"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Track Crash" />

</LinearLayout>
```

## 5.4. Android Activity (MainActivity.java)

Now, you need to write the tracking code in your activity class. For that simply add the `activiyStart()` and `activityStop()` methods to the `onStart()` and `onStop()` methods of each of your Activities as in the following example. This two method enables basic activity tracking.

```java
package com.javatechig.ganalytics;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import com.google.analytics.tracking.android.EasyTracker;
import com.google.analytics.tracking.android.MapBuilder;
import com.google.analytics.tracking.android.StandardExceptionParser;

public class MainActivity extends Activity {

    private EasyTracker easyTracker = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        easyTracker = EasyTracker.getInstance(MainActivity.this);

        findViewById(R.id.trackEvent).setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                easyTracker.send(MapBuilder.createEvent("your_action",
                        "envet_name", "button_name/id", null).build());
            }
        });

        findViewById(R.id.trackCrash).setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {

                try {
                    int a[] = new int[2];
                    int num = a[4];
                } catch (ArrayIndexOutOfBoundsException e) {
                    easyTracker.send(MapBuilder.createException(
                                    new StandardExceptionParser(MainActivity.this, null)
                                            .getDescription(Thread.currentThread().getName(), e), false).build());
                }

            }
        });
    }

    @Override
    public void onStart() {
        super.onStart();
        EasyTracker.getInstance(this).activityStart(this);
    }

    @Override
    public void onStop() {
        super.onStop();
        EasyTracker.getInstance(this).activityStop(this);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

}
```

In this above activity code sample, we are tracking event an crashes on two button clicks. Just for demonstation purpose I am creating sample exception and tracking it.

# 6\. Google Analytics Output

[![Google Analytics Report](/media/articles/356/Google-Analytics-Report-940x623.png)](http://stacktips.com)

# 7\. Download Complete Example

[Download source](https://github.com/javatechig/javatechig-android-advanced/tree/master/GoogleAnalyticsDemo)
