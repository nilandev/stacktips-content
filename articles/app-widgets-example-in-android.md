---
id: 325
title: Homescreen App Widgets Example in Android
slug: app-widgets-example-in-android
excerpt: In this example we will learn about creating a simple 4×2 home screen App widget using an App…
difficulty: beginners
publishedDate: "2013-06-23T12:41:23.000Z"
updatedDate: "2025-09-16T23:05:36.291Z"
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

In this example we will learn about creating a simple 4×2 home screen App widget using an App Widget provider. It shall show two text view and a button. and clicking on the button will change the widget text contents.

## 1\. Introduction

App widget is a simple way to enhance your application by having a view on android HomeScreen. This helps to inform user about some important update about the application also this is help user to use the application over and often. App Widgets I available since API Level 3 (Android 1.5). To create an App Widget we need the following classes.

## 2\. Creating View layout for Widget

Widget layout can be defined in XML and can be saved in project’s res/layout/ directory. Currently App Widget layouts are based on RemoteViews and android currently supports limited View widget. Creating layout for the widget is same as creating the layout for other activity type. But to make a good widget we need to follow the android widget guidelines.

A RemoteViews object or App Widget currently supports the following layout classes

-   FrameLayout
-   LinearLayout
-   RelativeLayout
-   GridLayout

Supported widget classes are

-   AnalogClock
-   Button
-   Chronometer
-   ImageButton
-   ImageView
-   ProgressBar
-   TextView
-   ViewFlipper
-   ListView
-   GridView
-   StackView
-   AdapterViewFlipper

For our example we will take a simple layout with two TextField and a button. Pressing on the button it will change the content on the widget. below is my widget-layout

```xml

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:layout_margin="5sp"
    android:background="@drawable/appwidget_dark_bg"
    android:orientation="vertical" >

    <RelativeLayout
        android:id="@+id/buttonContainer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true" >

        <Button
            android:id="@+id/sync_button"
            android:layout_width="30dp"
            android:layout_height="30dp"
            android:layout_centerInParent="true"
            android:background="@drawable/ic_sync_button"
            android:text="" />
    </RelativeLayout>

    <LinearLayout
        android:id="@+id/contentContainer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_above="@id/buttonContainer"
        android:layout_alignParentTop="true"
        android:orientation="vertical"
        android:padding="8dp" >

        <TextView
            android:id="@+id/title"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:maxLines="2"
            android:paddingBottom="5dp"
            android:text=""
            android:textColor="#fcfcfc"
            android:textSize="16sp"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/desc"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:maxLines="5"
            android:text=""
            android:textColor="#fcfcfc"
            android:textSize="13sp"
            android:textStyle="normal" />
    </LinearLayout>

</RelativeLayout>
```

## 3\. Creating AppWidgetProviderInfo in XML

This is used to describe the metadata for an App Widget, such as the App Widget’s layout, update frequency, and the AppWidgetProvider class. This is always defined as XML file.

Below is my AppWidgetProvider xml configuration file

```xml

<?xml version="1.0" encoding="utf-8"?>
<appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
    android:initialLayout="@layout/widget_layout"
    android:minHeight="146dp"
    android:minWidth="292dp"
    android:previewImage="@drawable/widget"
    android:updatePeriodMillis="1000000" >
</appwidget-provider>
```

The minWidth and minHeight attribute is used to specify the minimum amount of space the App Widget consumes by default. The default Home screen positions App Widgets in its window based on a grid of cells that have a defined height and width. If the values for an App Widget’s minimum width or height don’t match the dimensions of the cells, then the App Widget dimensions round up to the nearest cell size.

To make your app widget portable across devices, your app widget’s minimum size should never be larger than 4 x 4 cells. Check out the below link for the App Widget Design Guidelines

[http://developer.android.com/guide/practices/ui\_guidelines/widget\_design.html](http://developer.android.com/guide/practices/ui_guidelines/widget_design.html "Android App Widget Design Guidelines")

The updatePeriodMillis attribute defines the update timer for the App Widget framework. It calls AppWidgetProvider by calling the onUpdate() callback method. This update timer is not guaranteed to refresh exactly on the same time.  
Note: The lesser the refresh timer, consumes more battery. It is better to always provide user an option to select the refresh timer frequency.

The initialLayout attribute points to the layout resource that defines the App Widget layout.

### 3.1 Setting preview image to Android App Widget

You can set a preview image to specify what the app widget will look like on the widgets list screen. This help users to know about the widget while configuration. This is optional configuration, if not provided then the application icon will be displayed as default widget preview image.

**Note: This attribute is introduced from Android 3.0**

You can set the preview image using the following code

```xml

<?xml version="1.0" encoding="utf-8"?>
<appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
    ...................
    ...................
    android:previewImage="@drawable/widget"
</appwidget-provider>
```

### 3.2 How to make Android App Widget re sizable

The resizeMode attribute is used to specify whether the widget can be resizable on the home screen. Android home screen widget can be resized horizontally, vertically, or on both axes. We can resize a widget by touch-holding a widget on home screen. resizeMode attribute can be configured to either “horizontal”, “vertical”, and “none”. We can also define a widget resizable to both directions by specifying “horizontal|vertical”.

**Note: This attribute is introduced from Android 3.1**

## 4\. Implementing AppWidgetProvider class

Now we need to add a class extending AppWidgetProvider which will be used to control the behavior of the widget. The onUpdate() call back method is used to change the text view text at runtime. This class is used to interface with the App Widget, based on broadcast events. Using AppWidgetProvider we can receive broadcast events while the App Widget state has been updated, enabled, disabled or deleted.

```java

package com.javatechig.widgetdemo;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.widget.RemoteViews;

public class MyWidgetProvider extends AppWidgetProvider {
    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager,
            int[] appWidgetIds) {

        // initializing widget layout
        RemoteViews remoteViews = new RemoteViews(context.getPackageName(),
                R.layout.widget_layout);

        // register for button event
        remoteViews.setOnClickPendingIntent(R.id.sync_button,
                buildButtonPendingIntent(context));

        // updating view with initial data
        remoteViews.setTextViewText(R.id.title, getTitle());
        remoteViews.setTextViewText(R.id.desc, getDesc());

        // request for widget update
        pushWidgetUpdate(context, remoteViews);
    }

    public static PendingIntent buildButtonPendingIntent(Context context) {
        ++MyWidgetIntentReceiver.clickCount;

        // initiate widget update request
        Intent intent = new Intent();
        intent.setAction(WidgetUtils.WIDGET_UPDATE_ACTION);
        return PendingIntent.getBroadcast(context, 0, intent,
                PendingIntent.FLAG_UPDATE_CURRENT);
    }

    private static CharSequence getDesc() {
        return "Sync to see some of our funniest joke collections";
    }

    private static CharSequence getTitle() {
        return "Funny Jokes";
    }

    public static void pushWidgetUpdate(Context context, RemoteViews remoteViews) {
        ComponentName myWidget = new ComponentName(context,
                MyWidgetProvider.class);
        AppWidgetManager manager = AppWidgetManager.getInstance(context);
        manager.updateAppWidget(myWidget, remoteViews);
    }
}
```

## 5\. Writing BroadcastReceiver for your widget

Now, we will write a BroadcastReciever to perform action on the button click. This implementation is pretty straight forward. The onReceive() method is requesting the app widget provider for updating the widget.

```java

package com.javatechig.widgetdemo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.RemoteViews;

public class MyWidgetIntentReceiver extends BroadcastReceiver {
    public static int clickCount = 0;
    private String msg[] = null;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals(WidgetUtils.WIDGET_UPDATE_ACTION)) {
            updateWidgetPictureAndButtonListener(context);
        }
    }

    private void updateWidgetPictureAndButtonListener(Context context) {
        RemoteViews remoteViews = new RemoteViews(context.getPackageName(),
                R.layout.widget_layout);

        // updating view
        remoteViews.setTextViewText(R.id.title, getTitle());
        remoteViews.setTextViewText(R.id.desc, getDesc(context));

        // re-registering for click listener
        remoteViews.setOnClickPendingIntent(R.id.sync_button,
                MyWidgetProvider.buildButtonPendingIntent(context));

        MyWidgetProvider.pushWidgetUpdate(context.getApplicationContext(),
                remoteViews);
    }

    private String getDesc(Context context) {
        // some static jokes from xml
        msg = context.getResources().getStringArray(R.array.news_headlines);
        if (clickCount >= msg.length) {
            clickCount = 0;
        }
        return msg[clickCount];
    }

    private String getTitle() {
        return "Funny Jokes";
    }
}
```

## 6\. Registering receiver in in Android Manifest

Finally, we need to register the app widget in your application Manifest file. To do this, you will use the tag. This block of XML should be placed inside the application tag in application Manifest.

```xml

<receiver android:name=".MyWidgetProvider" >
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE" />
            </intent-filter>

            <meta-data
                android:name="android.appwidget.provider"
                android:resource="@xml/demo_widget_provider" />
        </receiver>

        <receiver
            android:name=".MyWidgetIntentReceiver"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="com.javatechig.intent.action.UPDATE_WIDGET" />
            </intent-filter>

            <meta-data
                android:name="android.appwidget.provider"
                android:resource="@xml/demo_widget_provider" />
        </receiver>
```

Note that the receiver name is the name of your app widget provider class implementation. We add an intent filter for the UPDATE\_WIDGET event such that your widget will update at regular intervals.

## 7\. Working Demo

Now we have an app widget! From the Home screen, press and hold an empty space to get list if widgets instlled, then choose “WidgetDemo” from the list. The app widget will then be added to your Home screen. You can watch a live video of the tutorial below

{{< youtube AguqhQHHrcs >}}

## 8\. Download Complete Source Code

[![dl_github](/media/articles/419/dl_github.png)](https://github.com/javatechig/Advance-Android-Tutorials/tree/master/WidgetDemo)

## 9\. References

[http://developer.android.com/guide/topics/appwidgets/index.html](http://developer.android.com/guide/topics/appwidgets/index.html)  
[http://developer.android.com/guide/practices/ui\_guidelines/widget\_design.html](http://developer.android.com/guide/practices/ui_guidelines/widget_design.html)
