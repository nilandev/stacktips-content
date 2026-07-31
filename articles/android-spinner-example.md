---
id: 315
title: Creating Drop Down List Using Android Spinner
slug: android-spinner-example
excerpt: This tutorial explains creating spinner in android and attaching event to spinner in android. Here in this tutorial, you’ll create a Simple spinner widget that displays a list of countries and shows appropriate flag as per selected country from the spinner.
difficulty: beginners
publishedDate: "2013-07-26T03:18:13.000Z"
updatedDate: "2025-09-16T23:05:35.937Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-spinner
  - spinner-dropdown-list
  - onItemSelectedListener
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Spinner Example: Dropdown List with Images"
  metaDescription: "Learn how to create an Android Spinner dropdown list of countries that updates an ImageView with the matching flag using OnItemSelectedListener."
  metaKeywords: null
---

This tutorial explains creating spinner in android and attaching event to spinner in android. Here in this tutorial, you’ll create a Simple spinner widget that displays a list of countries and shows appropriate flag as per selected country from the spinner.

1\. Create a new new project. In this example we named it as **SpinnerExample.**

### Declare Your Activity Layout (layout\_main.xml)

Add a new layout file in \\layout\\layout\_main.xml and insert the following code.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical"
    android:padding="10dip" >

    <TextView
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="10dip"
        android:text="@string/country_label"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <Spinner
        android:id="@+id/country_spinner"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:prompt="@string/country_label" />

    <ImageView
        android:id="@+id/country_image"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_gravity="center_vertical"
        android:scaleType="centerInside"
        android:src="@drawable/ic_launcher" />

</LinearLayout>
```

In the above example, we have declared TextView, Spinner and a ImageView. The text behaves as a title for the spinner. When you select the Spinner, the ImageView to display the flag for selected country in Spinner.

### 3\. Declaring String Arrays inside strings.xml

Below are the strings used in the application. Declare all of them in strings.xml file

```xml
<string-array name="countries_list">
        <item>Afghanistan</item>
        <item>Albania</item>
        <item>Australia</item>
        <item>Bangladesh</item>
        <item>Bhutan</item>
        <item>England</item>
        <item>Finland</item>
        <item>India</item>
        <item>Saudi Arabia</item>
        <item>Nepal</item>
    </string-array>

    <integer-array name="countries_flag_list">
        <item>@drawable/afghanistan</item>
        <item>@drawable/albania</item>
        <item>@drawable/australia</item>
        <item>@drawable/bangladesh</item>
        <item>@drawable/bhutan</item>
        <item>@drawable/england</item>
        <item>@drawable/finland</item>
        <item>@drawable/india</item>
        <item>@drawable/saudi_arabia</item>
        <item>@drawable/nepal</item>
    </integer-array>
```

### 4\. Activity Java Class (MainActivity.java)

Now create a java class and name it as MainActivity.java. And paste the following code.

```java
package com.example.spinnerexample;

import android.app.Activity;
import android.content.res.TypedArray;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.Spinner;

public class MainActivity extends Activity {

    private ImageView image;
    private String[] states;
    private Spinner spinner;
    private TypedArray imgs;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        states = getResources().getStringArray(R.array.countries_list);
        imgs = getResources().obtainTypedArray(R.array.countries_flag_list);

        image = (ImageView) findViewById(R.id.country_image);
        spinner = (Spinner) findViewById(R.id.country_spinner);

        ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(this,
                android.R.layout.simple_spinner_item, states);
        dataAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(dataAdapter);

        spinner.setOnItemSelectedListener(new OnItemSelectedListener() {

            @Override
            public void onItemSelected(AdapterView<?> parent, View view,
                    int position, long id) {
                image.setImageResource(imgs.getResourceId(
                        spinner.getSelectedItemPosition(), -1));
            }

            @Override
            public void onNothingSelected(AdapterView<?> arg0) {

            }
        });
    }
}
```

First we are initializing `Spinner` object by getting reference from the xml layout file using `findViewById()` method. Then creates a new `ArrayAdapter`, which binds each item in the string array to the initial appearance for the Spinner (which is how each item will appear in the spinner when selected). `setOnItemSelectedListener()` callback is registered to Spinner to handle the spinner event.

### 5\. Output

[![Android Spinner Example](/media/articles/407/Android-Spinner-Example.png)](http://stacktips.com)
