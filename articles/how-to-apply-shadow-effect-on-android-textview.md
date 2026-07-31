---
id: 245
title: How to Apply Shadow Effect on Android TextView
slug: how-to-apply-shadow-effect-on-android-textview
excerpt: This example explains how to apply Shadow Effect on Android TextView. You can apply Shadow Effect on Android TextView in two ways. Either we do it pragmatically or we can change in the xml layout.
difficulty: beginners
publishedDate: "2014-04-09T09:03:55.000Z"
updatedDate: "2025-09-16T23:05:32.234Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-textview-shadow
  - setshadowlayer
  - android-textview-styling
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Apply Shadow Effect on Android TextView"
  metaDescription: "Learn two ways to apply a shadow effect on Android TextView: via XML layout attributes or programmatically using the setShadowLayer() method."
  metaKeywords: null
---

This example explains how to apply Shadow Effect on Android TextView. You can apply Shadow Effect on Android TextView in two ways. Either we do it pragmatically or we can change in the xml layout.

## Shadow Effect on Android TextView using XML Layout

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical"
    android:padding="20dp" >

    <TextView
        android:id="@+id/textview"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:shadowColor="#000"
        android:shadowDx="0"
        android:shadowDy="0"
        android:shadowRadius="50"
        android:text="Text Shadow Example1"
        android:textColor="#FBFBFB"
        android:textSize="28dp"
        android:textStyle="bold" />

    <TextView
        android:id="@+id/textview2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:text="Text Shadow Example2"
        android:textColor="#FBFBFB"
        android:textSize="28dp"
        android:textStyle="bold" />

</LinearLayout>
```

In the above XML layout code, the textview1 is given with Shadow effect in the layout. below are the configuration items are

-   **android:shadowDx** – specifies the X-axis offset of shadow. You can give -/+ values, where -Dx draws a shadow on the left of text and +Dx on the right
-   **android:shadowDy** – it specifies the Y-axis offset of shadow. -Dy specifies a shadow above the text and +Dy specifies below the text.
-   **android:shadowRadius** – specifies how much the shadow should be blurred at the edges. Provide a small value if shadow needs to be prominent.
-   **android:shadowColor** – specifies the shadow color

## Shadow Effect on Android TextView pragmatically

Use below code snippet to get the shadow effect on the second TextView pragmatically.

```java
TextView textv = (TextView) findViewById(R.id.textview2);
textv.setShadowLayer(30, 0, 0, Color.RED);

```

## Output

[![Shadow Effect on Android TextView](/media/articles/315/Shadow-Effect-on-Android-TextView-300x533.png)](http://stacktips.com)

### Download Source Code

Download complete source code from [**Github**](https://github.com/javatechig/Android-User-Interface-Tutorials/tree/master/AndroidTextShadow)
