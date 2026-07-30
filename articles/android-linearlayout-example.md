---
id: 158
title: Android LinearLayout Example
slug: android-linearlayout-example
excerpt: The LinearLayout is the most basic layout manager provided by Android. The LinearLayout organizes the child views either horizontally or vertically based on the specified orientation property. The value for orientation property can be either horizontal or vertical.
difficulty: beginners
publishedDate: "2015-01-27T22:50:20.000Z"
updatedDate: "2025-09-16T23:05:28.193Z"
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

The LinearLayout is the most basic layout manager provided by Android. The LinearLayout organizes the child views either horizontally or vertically based on the specified orientation property. The value for orientation property can be either `horizontal` or `vertical`.

Here is how the LinearLayout declaration looks like in Android layout

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:orientation="horizontal"
       android:layout_width="fill_parent"
       android:layout_height="wrap_content">

<!-- add children here-->

</LinearLayout>

```

Notice that in the above code snippets, we have specified orientation as horizontal, this aligns all its child layout/views horizontally.

All of the layout managers can be nested. This means that you can put a RelativeLayout or FrameLayout as a child to LinearLayout.

For example, if you want to create a layout as shown in the picture below, you need to construct a vertical layout manager that contained horizontal layout managers, where each row owns its own horizontal layout.

[![LinearLayout Example](/media/articles/214/LinearLayout-Example.png)](http://stacktips.com)

**Example**

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="5dp">

        <TextView
            android:id="@+id/textView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Label1"
            android:textAppearance="?android:attr/textAppearanceMedium" />

        <EditText
            android:id="@+id/editText"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Edit text1" />

    </LinearLayout>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="5dp">

        <TextView
            android:id="@+id/textView1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Label2"
            android:textAppearance="?android:attr/textAppearanceMedium" />

        <EditText
            android:id="@+id/editText1"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="Edit text2" />

    </LinearLayout>

</LinearLayout>
```

### Understanding Weight

The weight property is used to assign a size importance of child views in a container. For example, if you want to place two buttons distributed horizontally by occupying each half of the screen width, you can define `layout_weight` as 0.5 for each of the buttons inside LinearLayout. Following screenshot depicts the views distributed  
equally using weight property.

[![LinearLayout Weight Property](/media/articles/214/LinearLayout-Weight-Property.png)](http://stacktips.com/android/android-linearlayout-example/attachment/linearlayout-weight-property)  
**Example**

Following code snippets implements the same as shown in the above image.

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="10dp"
    android:orientation="horizontal">

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="0.5"
        android:text="Button1" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="0.5"
        android:text="Button2" />

</LinearLayout>
```

### Key Points

-   If a LinearLayout is set to vertical orientation and contains a number of views than the screen space, it will not be scrollable by default. You have to explicitly put the LinearLayout inside a `ScrollView`.
-   you must be careful about over-using the LinearLayout. If your application design demands the nesting of multiple LinearLayouts, you may want to consider using a RelativeLayout instead.
