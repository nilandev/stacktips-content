---
id: 81
title: Android ScrollView Example
slug: android-scrollview-example
excerpt: In this tutorial we will show you, how to use Android ScrollView component and create a simple example using various ScrollView properties. ScrollView is a special kind of layout, designed to hold view larger than its actual size. When the Views size goes beyond the ScrollView size, it automatically adds scroll bars and can be scrolled vertically.
difficulty: beginners
publishedDate: "2015-02-12T22:59:56.000Z"
updatedDate: "2025-09-16T23:05:28.046Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-scrollview
  - fillviewport
  - vertical-scrolling-android
course: null
displayOrder: 0
seo: 
  metaTitle: "Android ScrollView Example: Vertical Scrolling Layout"
  metaDescription: "Learn how to use Android ScrollView to display content larger than the screen, including fillViewport, layout rules, and a complete XML example."
  metaKeywords: null
---

In this tutorial, we will show you, how to use Android ScrollView component and create a simple example using various ScrollView properties.

Most Android application will likely to have the contents that’s doesn’t fit the screen. Think a bit about displaying the news details, the contents are dynamic and can grow beyond your screen size. If we design our screen layout using standard layout managers like [LinearLayout](http://stacktips.com/android/android-linearlayout-example "Android LinearLayout Example"), [RelativeLayout](http://stacktips.com/android/android-relativelayout-example "Android RelativeLayout Example"), [FrameLayout](http://stacktips.com/android/android-framelayout-example "Android FrameLayout Example") or [TableLayout](http://stacktips.com/android/android-table-layout-example "Android Table Layout Example"); when the content grows, and data goes beyond screen size, and user won’t be able scroll and view the content.

**ScrollView** is a special kind of layout, designed to hold view larger than its actual size. When the Views size goes beyond the ScrollView size, it automatically adds scroll bars and can be scrolled vertically.

1.  ScrollView can hold only one direct child. This means that, if you have complex layout with more view controls, you must enclose them inside another standard layout like [LinearLayout](http://stacktips.com/android/android-linearlayout-example "Android LinearLayout Example"), [TableLayout](http://stacktips.com/android/android-table-layout-example "Android Table Layout Example") or [RelativeLayout](http://stacktips.com/android/android-relativelayout-example "Android RelativeLayout Example").
2.  You can specify `layout_height` and `layout_width` to adjust height and width of screen.
3.  Scrollview is ideal for screens where scrolling is required, but it is an overhead when scroll view is used to render a larger list of data. Android provides specialized adapter views like [ListView](http://stacktips.com/android/android-listview-tutorial "Android ListView Example"), [GridView](http://stacktips.com/android/android-gridview-example-building-image-gallery-in-android "Android Gridview Example- Building Image Gallery in android") and [Recycler View](http://stacktips.com/android/android-recyclerview-example "Android RecyclerView Example") (Introduced in Android Lollipop) are recommended for long lists.
4.  You should never use a ScrollView with a ListView or GridView, because they both takes care of their own vertical scrolling.
5.  ScrollView only supports vertical scrolling. Use `HorizontalScrollView` for horizontal scrolling.
6.  The `android:fillViewport` property defines whether the scrollview should stretch its content to fill the viewport. You can set the same property by calling `setFillViewport(boolean)` method.

# Android ScrollView Example

Let us create an example that displays the layout as shown in the below screenshot. Notice that the blue like indicates the outline of textView2 is gone beyond the scren.

**[![Android ScrollView Example](/media/articles/211/Android-ScrollView-Example.png)](http://stacktips.com)**

# Scrollbar Layout

```xml
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="10dp"
    android:fillViewport="false">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical">
        <ImageView
            android:id="@+id/imageView"
            android:layout_width="wrap_content"
            android:layout_height="200dp"
            android:scaleType="centerCrop"
            android:src="@drawable/image" />

        <Button
            android:id="@+id/button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="KNOW MORE" />

        <TextView
            android:id="@+id/textView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/title"
            android:textAppearance="?android:attr/textAppearanceLarge" />

        <TextView
            android:id="@+id/textView2"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/description"
            android:textAppearance="?android:attr/textAppearanceSmall" />
    </LinearLayout>
</ScrollView>
```
