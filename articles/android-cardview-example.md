---
id: 140
title: Android CardView Example
slug: android-cardview-example
excerpt: "The recent release of Android support library (v7:21.0.+) has introduced two new user interface widget: RecyclerView and CardView…"
difficulty: beginners
publishedDate: "2015-07-01T13:30:50.000Z"
updatedDate: "2025-09-16T23:05:27.135Z"
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

The recent release of Android support library `(v7:21.0.+)` has introduced two new user interface widget: `RecyclerView` and `CardView` that helps in building rich Android apps.

The `RecyclerView` is more advanced and flexible and efficient version of ListView. RecyclerView ViewGroup is a container for larger data set of views that can be recycled and scrolled very efficiently.

RecyclerView can be used for larger datasets to be rendered on the UI like a list. RecyclerView provides maximum flexibility to design a different kind of views.

Click here to read more about [Android RecyclerView](/articles/android-recyclerview-example) example.

In the other hand the `CardView` widget, is an extension of existing FrameLayout class. This helps to wrap other UI elements as Google style cards. CardView widgets can have shadows and rounded corners. The following image shows example Google card design used Google Now application.  
[![Google Now Cards](/media/articles/184/Googe-Now-Cards.jpg)](http://stacktips.com)

### Add CardView Support Library

Android SDK doesn’t includes the CardView class, and hence for using CardView in your project you need to add the following dependency in your `build.graddle` file.

```java
dependencies {
   compile 'com.android.support:cardview-v7:21.0.+'
}
```

### Declare CardView Layout

Now that we have added the build dependencies to project, let us go ahead to declare the CardView layout. In this example, we will add an ImageView and two TextViews as shown in the following screenshot.

```xml
<android.support.v7.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/card_view"
    android:layout_width="match_parent"
    android:layout_height="380dp"
    android:layout_margin="8dp">

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <ImageView
            android:id="@+id/thumbnail"
            android:layout_width="match_parent"
            android:layout_height="250dp"
            android:layout_alignParentTop="true"
            android:scaleType="centerCrop"
            android:src="@drawable/wallpaper" />

        <TextView
            android:id="@+id/title"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@+id/thumbnail"
            android:maxLines="3"
            android:padding="8dp"
            android:text="@string/title"
            android:textColor="#222"
            android:textStyle="bold"
            android:textSize="22dp" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@+id/title"
            android:maxLines="3"
            android:padding="8dp"
            android:text="@string/description"
            android:textColor="#666"
            android:textSize="14dp" />

    </RelativeLayout>
</android.support.v7.widget.CardView>
```

The output of the above code is as follows  
[![Android CardVeiw Example](/media/articles/184/Android-CardVeiw-Example-e1435760917628-300x329.png)](http://stacktips.com)

### Customize CardView Appearance

The CardView layout declaration is pretty straight forward. CardView widget allows you to control the background color, shadow, corner radius etc.

For using the custom attributes in XML, you need to add the following namespace declaration to your layout parent.

```xml
<android.support.v7.widget.CardView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:cardView="http://schemas.android.com/apk/res-auto"
    ... >

        ...
        ....
</android.support.v7.widget.CardView>
```

Now let us use the following `CardView` properties to customize the appearance of the CardView

-   To set the corner radius in your layouts, use the `cardView:cardCornerRadius` attribute. To set the corner radius in your code, use the `cardView.setRadius` method.
-   To set the background color of a card, use the `cardView:cardBackgroundColor` attribute.
