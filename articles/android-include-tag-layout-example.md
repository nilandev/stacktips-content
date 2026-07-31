---
id: 291
title: Android Include Tag Layout Example
slug: android-include-tag-layout-example
excerpt: In this example, you’ll learn how to use the tag in your XML to avoid replication of views. When you’re creating complex layouts, you may find yourself adding a lot of ViewGroup’s and Views. But, making your view hierarchy tree taller will also result in slowness in your application.
difficulty: beginners
publishedDate: "2013-09-01T04:09:46.000Z"
updatedDate: "2025-09-16T23:05:34.693Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-include-tag
  - reusable-layout-android
  - android-layout-optimization
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Include Tag: Reuse Layouts in XML"
  metaDescription: "Learn how to use the Android <include> tag to reuse XML layouts like a shared footer across multiple screens and avoid duplicating view code."
  metaKeywords: null
---

When you’re creating complex layouts, you may find yourself adding a lot of ViewGroup’s and Views. But, making your view hierarchy tree taller will also result in slowness in your application and increases complexity. Creating optimized layouts is fundamental to building an application that runs fast and is responsive to the user.

In this example, we’ll see how to use the `<include />` tag in your XML to avoid replication of code in different layouts. Before we begin, let us have a look into the screenshot below.

[![Avoid replication of Views using include tag in android layout](/media/articles/380/Avoid-replication-of-Views-using-include-tag-in-android-layout.gif)](http://stacktips.com)

Now, let us imagine we want to add footer (as shown in the image below) to every page of your app. It looks quite simple, we can just declare it in all the layouts files as required. But what happens if we want to do a small modification to the footer layout? We have to do the changes to all the layout files, which costs time. Android include tag is the solution here.

## How it works?

You just have to declare your reusable xml layout file in a separate xml file. For our example, let us name it as footer.xml.

Just use the footer.xml file using include tag for all your activity/fragment layout files.

### footer.xml

Here is our `footer.xml` file which we can reuse using include tag

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:background="#ffffff"
    android:padding="5dp" >

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_alignParentTop="true"
        android:layout_margin="5dp"
        android:src="@drawable/javatechig_logo" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"
        android:layout_centerVertical="true"
        android:gravity="center"
        android:text="@string/footer_text"
        android:textColor="#13352E" />

</RelativeLayout>
```

We have just declared the layout for footer.xml, which will be reused in all activity. Let us create an layout file for our MainActivity class. Let’s look at how it can help us out. We use the `<include />` tag in XML to add another layout from another XML file.

### activity\_main.xml

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:background="#f0f0f0" >

    <LinearLayout
        android:id="@+id/linearLayout1"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:background="#ffffff"
        android:orientation="vertical"
        android:padding="5dp" >

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/hint"
            android:textAppearance="?android:attr/textAppearanceLarge"
            android:textColor="#13352E" />

        <ImageView
            android:id="@+id/imageView1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center_horizontal"
            android:src="@drawable/image_7" />
    </LinearLayout>

    <include
        android:id="@+id/footerView"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        layout="@layout/footer" />

</RelativeLayout>
```

From your MainActivity.java file, you can access the views by using following code snippets

```java
// Fetching footer layout
View footerLayout = findViewById(R.id.footerView);

// Fetching the textview declared in footer.xml
TextView footerText = (TextView) footerLayout.findViewById(R.id.footer_text);
footerText.setText("Some Text Here");
```
