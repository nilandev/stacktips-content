---
id: 319
title: Using External Fonts in Android View
slug: using-external-fonts-in-android-view
excerpt: This tutorial explains example for using external fonts in Android View. Android applications are capable of loading the external font files with .ttf extension.
difficulty: beginners
publishedDate: "2013-07-19T08:51:33.000Z"
updatedDate: "2025-09-16T23:05:36.102Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - custom-font-android-textview
  - typeface-createfromasset
  - android-ttf-font-assets
  - custom-textview-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial explains example for using external fonts in Android View. Android applications are capable of loading the external font files with .ttf extension. Follow below simple steps to create an example that uses custom font on TextView.

1.  At first, download a font of your choice. Note that android supports .ttf extension. Here I have downloaded `Maximum.ttf` file.
2.  Create a new folder `font` in your assets folder and paste your recently downloaded font file.  
    We can change the font settings for a view simply by adding two lines of code

```java
TextView textview = (TextView) findViewById(R.id.textView);
Typeface font = Typeface.createFromAsset(getContext().getAssets(), "fonts/Maximum.ttf");
textView. setTypeface(font);
```

3.  This solution will work for you, but sometimes you may have to maintain the theme font across the application for each of the text view you use. You can do that by just extending your class from android TextView. Below is the code to my customized TextView.

```java
import android.content.Context;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.widget.TextView;

public class CustomTextView extends TextView {
    public CustomTextView(Context context) {
        super(context);
        setFont();
    }
    public CustomTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
        setFont();
    }
    public CustomTextView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        setFont();
    }

    private void setFont() {
        Typeface font = Typeface.createFromAsset(getContext().getAssets(), "fonts/Maximum.ttf");
        setTypeface(font, Typeface.NORMAL);
    }
}
```

5.  Now change the following in your android layout xml file

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#0F0F0F">

    <com.javatechig.droid.ui.CustomTextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/font_sample_text"
        android:textSize="18dp"
        android:textColor="#AAD4DE" />

    <com.javatechig.droid.ui.CustomTextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/font_sample_text"
        android:textColor="#FFDE46"
        android:textSize="24dp"/>

    <com.javatechig.droid.ui.CustomTextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/font_sample_text"
        android:textSize="30dp"
        android:textColor="#7FBA00"/>
</LinearLayout>
```

Here is the output of the above code

[![](/media/articles/411/custom-font-android.png)](http://stacktips.com)

\[download src=”https://github.com/javatechig/Android-UI-Tutorials/tree/master/AndroidCustomFont”\]
