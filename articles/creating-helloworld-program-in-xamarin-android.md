---
id: 264
title: Creating HelloWorld Program in Xamarin.Android
slug: creating-helloworld-program-in-xamarin-android
excerpt: This tutorial explains step by step approach to create and deploy a Xamarin.Android application. For the sake of…
difficulty: beginners
publishedDate: "2014-01-07T08:39:20.000Z"
updatedDate: "2025-09-16T23:05:33.585Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - xamarin-android-helloworld
  - xamarin-android-project-structure
  - xamarin-button-click-toast
course: null
displayOrder: 0
seo: 
  metaTitle: "Creating a Hello World App in Xamarin.Android"
  metaDescription: "A step-by-step guide to building your first Xamarin.Android app, covering project structure, layout XML, and handling a button click with a Toast."
  metaKeywords: null
---

This tutorial explains step by step approach to create and deploy a Xamarin.Android application. For the sake of simplicity our first ever Xamarin.Android application, will have very basic user interface.

## 1. Creating a Xamarin.Android Application

This example assumes you already have Xamarin.Android installed in your development system. If you are a windows user you can use Visual Studio 2010 Professional or MonoDev IDE for development.

Let us create a new Xamarin.Android solution. Xamarin.Android includes several project templates, including:

1.  Android Library Project – A reusable .NET library project for Android.
2.  Android Application – A basic starter project with a single activity.
3.  Android OpenGL Application – An OpenGL starter project.

We will use “Android Application template” for this example. Let’s create an application by doing the following:

[![Xamrin Android Application](/media/articles/349/Xamrin-Android-Application-620x379.png)](http://stacktips.com)

## 2. Understanding Application Components

In the above section, we have just created a simple Xamarin.Android project. It automatically generates a project structure with different files and folders. The “HelloWorld” project includes three folders named Assets, Properties, and Resources.

-   Assets – Contains any type of file the application needs included in its package. Files included here are accessible at runtime via the Assets class.
-   Properties – Contains normal .NET assembly metadata.
-   Resources – Contains application resources such as strings and images, as well as declarative XML user interface definitions. These resources are accessible through the generated Resource class.

[![Xamrin Android Application Example](/media/articles/349/Xamrin-Android-Application-Example-300x308.png)](http://stacktips.com)  
The project template also created a class called HelloWorld in the file MainActivity.cs. An Activity is a class that models a destination where a user can perform some action while using an app, typically via a user interface.

## 3. Creating HelloWorld program

In this example we will create a simple screen with a TextView and a Button. Clicking the button will show a toast message to user.

#### Main.axml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:background="#ffe7e5e5">
    <TextView
        android:text="HelloWorld Example in Xamrin"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:id="@+id/textView1"
        android:gravity="center_horizontal"
        android:layout_margin="10dp"
        android:textColor="#ff130c0c" />
    <Button
        android:id="@+id/myButton"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="@string/hello"
        android:capitalize="characters"
        android:layout_margin="10dp"
        android:background="#ff0f37f5"
        android:textColor="#ffffffff"
        android:textSize="18dp"
        android:textStyle="bold"
        android:typeface="sans" />
</LinearLayout>
```

#### MainActivity.cs

```cs
using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace HelloWorld
{
    [Activity (Label = "HelloWorld!", MainLauncher = true)]
    public class MainActivity : Activity
    {
        protected override void OnCreate (Bundle bundle)
        {
            base.OnCreate (bundle);

            // Set your view layout layout resource file
            SetContentView (Resource.Layout.Main);

            // Initilize button from the layout resource
            Button button = FindViewById<Button> (Resource.Id.myButton);

            // and attach an event to it
            button.Click += delegate {
                //display toast message
                Toast.MakeText (Application, "Button Clicked!", ToastLength.Short).Show ();
            };
        }
    }
}
```

## 4. Output

Here is a screenshot that shows the application running in Samsung S4.

[![HelloWorld program in Xamarin](/media/articles/349/framed_Screenshot_2014-02-21-08-33-10.png)](http://stacktips.com)
