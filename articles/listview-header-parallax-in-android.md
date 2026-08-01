---
id: 144
title: ListView Header Parallax in Android
slug: listview-header-parallax-in-android
excerpt: A quick Android example with code snippet to demonstrate ListView header with parallax effect. You need to follow…
difficulty: beginners
publishedDate: "2015-06-17T17:42:32.000Z"
updatedDate: "2025-09-16T23:05:27.335Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - listview-parallax-header
  - android-onscrolllistener
  - listview-addheaderview
  - parallax-scroll-effect-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A quick Android example with code snippet to demonstrate `[ListView](http://stacktips.com/android/android-listview-tutorial)` header with parallax effect. You need to follow few steps as described below to create the list view parallax effect.  

The output of this example in the following attached video.

{{< youtube rcDWjRdYaSM >}}

## Declare Activity Layout

To begin with let us start declaring a simple layout for our example activity. We are adding just a simple ListView that covers the total width of screen.

```xml
<ListView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/list"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:dividerHeight="1dp"
    android:divider="#9E9E9E"/>
```

## Declare List Header Layout

Now declare the layout for list header. In this example, I have declared an [ImageView](/articles/android-imageview-example) inside [FrameLayout](/articles/android-framelayout-example).

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="250dp"
    android:orientation="vertical">

    <ImageView
        android:id="@+id/listHeaderImage"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:scaleType="centerCrop"
        android:src="@drawable/wallpaper" />
</FrameLayout>
```

## 3. Declare List Row Layout

Declare another layout for your list view row. In this example, for sake of simplicity I have declared a simple `TextView`. You may design fancy list of your choice by declaring your own custom adapter.

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#FAFAFA"
    android:gravity="center_vertical"
    android:text="List Item"
    android:padding="8dp"
    android:minHeight="40dp"
    android:textColor="#222"/>
```

## 4. Handle ListView Scroll Events

Following step will guide you with the necessary things required in your activity to create list view, add list header and implement parallax effect.

-   Let us now create an activity and set the layout by calling `setContentView()` method inside `onCreate()` lifecycle callback.
-   Initialize list view and create an array adapter, which will be used for the list view.
-   Inflate list header layout and set to list view by calling `listView.addHeaderView()` method.
-   Handle user scroll events for list view and change the position Y of list header.
-   For handling the user scroll event, you need to implement `AbsListView.OnScrollListener` interface to your activity or fragment class and override the `onScrollStateChanged` and `onScroll` method. The onScroll method will be called when user scrolls the list view up or downwards.

```java
package com.javatechig.parallaxlistview;

import android.graphics.Rect;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends ActionBarActivity implements AbsListView.OnScrollListener {

    private static final int MAX_ROWS = 50;
    private int lastTopValue = 0;

    private List<String> modelList = new ArrayList<>();
    private ListView listView;
    private ImageView backgroundImage;
    private ArrayAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listView = (ListView) findViewById(R.id.list);

        for (int i = 0; i < MAX_ROWS; i++) {
            modelList.add("List item " + i);
        }

        adapter = new ArrayAdapter(this, R.layout.list_row, modelList);
        listView.setAdapter(adapter);

        // inflate custom header and attach it to the list
        LayoutInflater inflater = getLayoutInflater();
        ViewGroup header = (ViewGroup) inflater.inflate(R.layout.custom_header, listView, false);
        listView.addHeaderView(header, null, false);

        // we take the background image and button reference from the header
        backgroundImage = (ImageView) header.findViewById(R.id.listHeaderImage);
        listView.setOnScrollListener(this);
    }

    @Override
    public void onScrollStateChanged(AbsListView view, int scrollState) {

    }

    @Override
    public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {
        Rect rect = new Rect();
        backgroundImage.getLocalVisibleRect(rect);
        if (lastTopValue != rect.top) {
            lastTopValue = rect.top;
            backgroundImage.setY((float) (rect.top / 2.0));
        }
    }
}
```

## Download Complete Source Code

https://github.com/javatechig/Parallax-List-View-Header
