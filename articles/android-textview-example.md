---
id: 159
title: Android TextView Example
slug: android-textview-example
excerpt: "In this tutorial, we will take a look into the Android TextView widget and various TextView properties. TextView is used to display text on an Android screen. TextView is like a dummy label and doesn't allow editing text input."
difficulty: beginners
publishedDate: "2015-01-27T22:45:56.000Z"
updatedDate: "2025-09-16T23:05:28.221Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the course of this tutorial, we will take a look into Android TextView widget and various TextView properties.

TextView is one of the most fundamental Android user interface widget, which is used to display text on an Android screen. TextView is like a dummy label, doesn’t allow to edit text input.

Following are some of the most used TextView properties.

| Attribute Name | Related Method | Description |
| --- | --- | --- |
| android:autoLink | setAutoLinkMask(int) | Automatically convert the links such as web url or email. |
| android:autoText | setKeyListener(KeyListener) | Auto spelling correction for text. |
| android:ellipsize | setEllipsize(TextUtils.TruncateAt) | If the width required by text is longer than the View itself, it ellipsized text. |
| android:ems | setEms(int) | Makes the TextView be exactly this many ems wide. |
| android:gravity | setGravity(int) | Specifies how to align the text by the view’s x- and/or y-axis when the text is smaller than the view. |
| android:lineSpacingMultiplier | setLineSpacing(float,float) |  |
| android:lines | setLines(int) | Makes the TextView be exactly this many lines tall. |
| android:maxLines | setMaxLines(int) | Makes the TextView be at most this many lines tall. |
| android:minLines | setMinLines(int) | Makes the TextView be at least this many lines tall. |
| android:minWidth | setMinWidth(int) | Makes the TextView be at least this many pixels wide. |
| android:shadowColor | setShadowLayer(float, float, float,int) | Place a blurred shadow of text underneath the text, drawn with the specified color. |
| android:shadowDx | setShadowLayer(float, float, float, int) | Horizontal offset of the text shadow. |
| android:shadowDy | setShadowLayer(float, float, float, int) | Vertical offset of the text shadow. |
| android:shadowRadius | setShadowLayer(float, float, float, int) | Blur radius of the text shadow. |
| android:text | setText(CharSequence, TextView.BufferType) | Text to display. |
| android:textAllCaps | setAllCaps(boolean) | Present the text in ALL CAPS. |
| android:textAppearance |  | Base text color, typeface, size, and style. |
| android:textColor | setTextColor(int) | Text color. |
| android:textSize | setTextSize(int, float) | Size of the text. |
| android:typeface | setTypeface(Typeface) | Typeface (normal, sans, serif, monospace) for the text. |

For all TextView properties and attributes follow official [TextView documentation](http://developer.android.com/reference/android/widget/TextView.html).

Also refer the following tutorials to learn more on Android TextView  

[How to apply shadow effect on Android TextView](http://stacktips.com/android/how-to-apply-shadow-effect-on-android-textview)  
[How to use external fonts in Android TextView](http://stacktips.com/android/using-external-fonts-in-android-view "Using External Fonts in Android View")  
[How to Display HTML in Android TextView](http://stacktips.com/android/display-html-in-android-textview "How to Display HTML in Android TextView")

## TextView Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="10dp"
    android:orientation="vertical"
    android:padding="10dp">

    <TextView
        android:id="@+id/textView1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="10dp"
        android:gravity="center_horizontal"
        android:text="stacktips.com"
        android:textAllCaps="true"
        android:textColor="#86AD33"
        android:textSize="25dp"
        android:textStyle="bold" />

    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:layout_marginBottom="20dp"
        android:ellipsize="end"
        android:letterSpacing="1.5"
        android:maxLines="2"
        android:text="Free programming tutorials on Java, Android development, Xamarin, Java Design Pattern, Data Structure Algorithm and examples on related technologies."
        android:textAppearance="?android:attr/textAppearanceMedium" />

    <TextView
        android:id="@+id/textView3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:autoLink="email|web"
        android:lineSpacingMultiplier="1.5"
        android:text="Have questions about stacktips.com or just want to chat? Contact us at javatechig@gmail.com" />

</LinearLayout>
```
