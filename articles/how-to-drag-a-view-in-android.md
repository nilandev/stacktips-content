---
id: 258
title: How to Drag a View in Android
slug: how-to-drag-a-view-in-android
excerpt: In this example we will see how to drag and ImageView in android on touch drag event.
difficulty: beginners
publishedDate: "2014-01-16T22:20:25.000Z"
updatedDate: "2025-09-16T23:05:33.292Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we will see how to drag and ImageView in android on touch drag event.

**Creating View layout**

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/root"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="@dimen/activity_vertical_margin" >

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentTop="true"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="124dp"
        android:src="@drawable/ic_launcher" />

</RelativeLayout>
```

**Activity Java code**

```java
package com.javatechig;

import android.app.Activity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;

public class MainActivity extends Activity implements View.OnTouchListener {

    private ImageView mImageView;
    private ViewGroup mRrootLayout;
    private int _xDelta;
    private int _yDelta;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mRrootLayout = (ViewGroup) findViewById(R.id.root);
        mImageView = (ImageView) mRrootLayout.findViewById(R.id.imageView);

        RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(150, 150);
        mImageView.setLayoutParams(layoutParams);
        mImageView.setOnTouchListener(this);
    }

    public boolean onTouch(View view, MotionEvent event) {
        final int X = (int) event.getRawX();
        final int Y = (int) event.getRawY();
        switch (event.getAction() & MotionEvent.ACTION_MASK) {
        case MotionEvent.ACTION_DOWN:
            RelativeLayout.LayoutParams lParams = (RelativeLayout.LayoutParams) view.getLayoutParams();
            _xDelta = X - lParams.leftMargin;
            _yDelta = Y - lParams.topMargin;
            break;
        case MotionEvent.ACTION_UP:
            break;
        case MotionEvent.ACTION_POINTER_DOWN:
            break;
        case MotionEvent.ACTION_POINTER_UP:
            break;
        case MotionEvent.ACTION_MOVE:
            RelativeLayout.LayoutParams layoutParams = (RelativeLayout.LayoutParams) view
                    .getLayoutParams();
            layoutParams.leftMargin = X - _xDelta;
            layoutParams.topMargin = Y - _yDelta;
            layoutParams.rightMargin = -250;
            layoutParams.bottomMargin = -250;
            view.setLayoutParams(layoutParams);
            break;
        }
        mRrootLayout.invalidate();
        return true;
    }
}
```

**Output**

[![Drag a View in Android](/media/articles/342/Drag-a-View-in-Android.png)](http://stacktips.com)
