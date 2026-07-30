---
id: 151
title: LinearLayout Manager Tutorial in Xamarin Android
slug: linearlayout-manager-tutorial-in-xamarin-android
excerpt: A LinearLayout manager is a most basic type of layout manager, that organizes its child views either horizontally or…
difficulty: beginners
publishedDate: "2015-06-08T22:07:36.000Z"
updatedDate: "2025-09-16T23:05:27.707Z"
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

A `LinearLayout` manager is a most basic type of layout manager, that organizes its child views either `horizontally` or `vertically` based on the value provided in android:orientation property.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="horizontal"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content">
    <!-- add children here-->
</LinearLayout>
```

Notice in the above code snippet, the orientation property access two possible values such as `vertical` or `horizontal`. This defines the whether the views to be organized vertically or horizontally. We had enough talk about linear layouts; let us move a bit towards the practical implementation of it. To began with let us design a login page layout as shown in the screenshot below. [![Linear Layout Manager Android](/media/articles/195/Linear-Layout-Manager-Android.png)](http://stacktips.com) We would add two edit text for the user to enter the username and password and two buttons for Login and Register action. **ActivityMain.axml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent">

    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/password"
        android:padding="10dp"
        android:hint="@string/username_hint" />

    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/password"
        android:padding="10dp"
        android:hint="@string/password_hint" />
    <Button
        android:id="@+id/submit"
        android:layout_width="200dp"
        android:layout_height="wrap_content"
        android:padding="10dp"
        android:text="@string/login" />
    <Button
        android:id="@+id/register"
        android:layout_width="200dp "
        android:layout_height="wrap_content"
        android:padding="10dp"
        android:text="@string/register" />
</LinearLayout>
```

As you see in the above layout XML;

1.  Linear Layout has two properties as `layout_height` and `layout_width`. In android each layout manager/view must supply these two properties to define the height and width of the view in view hierarchy.
2.  `wrap_ontent` – Wraps with the maximum allowed (Parent’s) width or height
3.  `fill_parent` or match\_parent –fits the view size to the available size of its parent
4.  If you want to specify a static height or width for any view you can supply values in dp. For example in the above snippet, both the submit and register button has a static width of 200dp.
5.  `DP` – Density independent Pixels, based on physical density of the screen.

# Understanding the weight and gravity

Apart from the orientation attribute, the `weight` and gravity attribute can affect size and position of child views in a LinearLayout manager.

## android:weight

You use weight to assign size importance to a control relative to the other controls in the container. Suppose a container has three controls: one has a weight of 1, whereas the others have a weight of 0. In this case, the control whose weight equals 1 will consume the empty space in the container.

## android:gravity

Gravity is used to specify the alignment of view. For example, if you want to align a TextView’s text to the right, you would set its gravity to right. There are quite a few possible values for gravity, including left, center, right, top, bottom, center\_vertical, clip\_horizontal, and others.

The above screenshot shows that the Login and Register button is aligned one below other. It would be nicer, if we can align both the buttons horizontally and distribute equal space to each (as shown in the following screenshot).

[![LinearLayout Manager Gravity Weight Xamarin](/media/articles/195/LinearLayout-Manager-Gravity-Weight-Xamarin.png)](http://stacktips.com)

To do so, we have to add another LinearLayout with horizontal orientation and add both the buttons to it. The following code blocks can be used to achieve the result as shown in the above screenshot.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent">
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/password"
        android:hint="@string/username_hint" />
    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/password"
        android:hint="@string/password_hint" />
    <LinearLayout
        android:orientation="horizontal"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent">
        <Button
            android:id="@+id/submit"
            android:layout_width="200dp"
            android:layout_height="wrap_content"
            android:padding="10dp"
            android:text="@string/login" />
        <Button
            android:id="@+id/register"
            android:layout_width="200dp"
            android:layout_height="wrap_content"
            android:padding="10dp"
            android:text="@string/register"
            android:layout_weight="1" />
    </LinearLayout>
</LinearLayout>
```

## android:gravity vs. android:layout\_gravity

Note that Android defines two similar gravity attributes: `android:gravity` and `android:layout_gravity`. Here’s the difference: android:gravity is a setting used by the view, whereas android:layout\_gravity is used by the container.
