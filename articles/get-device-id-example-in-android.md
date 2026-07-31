---
id: 271
title: Get Device ID Example in Android
slug: get-device-id-example-in-android
excerpt: This example explains how to get device unique id in android. The device unique id is needed when we want user registration for a specific device. This way we can achieve security. Most of the banking applications today are using such approach.
difficulty: beginners
publishedDate: "2013-11-01T09:08:32.000Z"
updatedDate: "2025-09-16T23:05:33.904Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-device-id
  - android-secure-android-id
  - unique-device-identifier-android
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Get a Unique Device ID in Android"
  metaDescription: "Learn how to retrieve a unique device ID in Android using Settings.Secure.ANDROID_ID, useful for device-based user registration and security."
  metaKeywords: null
---

This example explains how to get device unique id in android. The device unique id is needed when we want user registration for a specific device. This way we can achieve security. Most of the banking applications today are using such approach.

#### Android Activity Layout (activity\_main.xml)

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity" >

    <TextView
        android:id="@+id/textView1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:textColor="#cc0000"
        android:textSize="32sp" />

</RelativeLayout>
```

#### Android Activity (MainActivity.java)

```java
package com.javatechig.getdeviceid;

import android.app.Activity;
import android.os.Bundle;
import android.provider.Settings.Secure;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //getting unique id for device
        String id = Secure.getString(getContentResolver(), Secure.ANDROID_ID);

        //displaying id in textview
        TextView tv = (TextView) findViewById(R.id.textView1);
        tv.setText(id);

    }

}
```

#### Output

#### [![Get Device ID Example in Android](/media/articles/358/Get-Device-ID-Example-in-Android-300x438.png)](http://stacktips.com)
