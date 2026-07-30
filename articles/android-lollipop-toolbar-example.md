---
id: 164
title: Android Lollipop Toolbar Example
slug: android-lollipop-toolbar-example
excerpt: Toolbar is a complete replacement to Android ActionBar. It provides greater control to customize its appearance unlike old ActionBar. Using Toolbar, application developer can now, show multiple toolbars on the screen, spanning only part of the width, etc.
difficulty: beginners
publishedDate: "2015-01-25T13:14:34.000Z"
updatedDate: "2025-09-16T23:05:28.443Z"
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

## Introduction

Android’s new operating system named Android Lollipop is highly focused on rich user experience and what they called it as material design. In this example, we will take a look at the new Actionbar replacement called Toolbar.

## What is Toolbar?

The toolbar is a complete replacement to Android ActionBar. It provides greater control to customize its appearance, unlike old ActionBar. Using the Toolbar, the application developer can now, show multiple toolbars on the screen, spanning only part of the width, etc.

[![Android Toolbar Example](/media/articles/220/Android-Toolbar-Example-620x331.png)](http://stacktips.com)

Screenshot showing simple toolbar in android tablet and phone.

It is introduced in Android Lollipop, API level 21 release, and hence it is available to use, out of the box for the application that is targeted to 21 and above. However, as always Google provides fully supported Toolbar features to lower android os devices via AppCompact support library. In AppCompat, Toolbar is implemented in the `android.support.v7.widget.Toolbar` class.

A Toolbar can be used in two ways.

1.  Use a Toolbar as an replacement to ActionBar. In this you can still continued to use the ActionBar features such as menus, selections, etc.
2.  Use a standalone Toolbar, where ever you want to place in your application.

## Using Toolbar as ActionBar

Following are simple steps you need to follow for implementing Toolbar as ActionBar replacement.

First of all, you need to disable ActionBar. To do this, you need to extend your application theme from `Theme.AppCompat.NoActionBar` or if you are already using `Theme.AppCompact` theme, then just add below lines of code snippet

```xml
<!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat">
        <item name="android:windowNoTitle">true</item>
        <item name="windowActionBar">false</item>
    </style>
```

Secondly, add the App Compact V7 support support library. In this example, I am using Android Studio as the development IDE. You can add the V7 support library dependency to your application build.gradle file.

```groovy
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile "com.android.support:appcompat-v7:21.0.+"
}
```

Now you need to add Toolbar to your Activity layout. Find the code snippet below for simple Toolbar Layout.

```xml
<android.support.v7.widget.Toolbar
        android:id="@+id/toolbar"
        android:minHeight="?attr/actionBarSize"
        android:background="#2196F3"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">
    </android.support.v7.widget.Toolbar>
```

Apply the theme to Activity. Here in this step you need to apply the theme which we have created in step-1 to your activity. This can be done, by using `android:theme` attribute in your application AndroidManifest.xml.

```xml
<activity
            android:name="com.javatechig.sample.MyActivity"
            android:label="@string/app_name"
            android:theme="@style/AppTheme" >
</activity>
```

Now you are almost ready. You just need to instantiate the Toolbar and add it to your activity by using `setSupportActionBar(Toolbar)` method.

```java
import android.support.v7.app.ActionBarActivity;
import android.support.v7.widget.Toolbar;

public class MyActivity extends ActionBarActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);

        // Set a toolbar to replace the action bar.
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
    }
}
```
