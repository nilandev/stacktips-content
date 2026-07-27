---
id: 182
title: Android Login Screen Using Xamarin
slug: android-login-screen-using-xamarin
excerpt: In this tutorial we will see “How to create a login screen using Xamarin.Android”. This example assumes, you…
difficulty: beginners
publishedDate: "2014-11-12T10:23:31.000Z"
updatedDate: "2025-09-16T23:05:29.223Z"
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

In this tutorial we will see “How to create a login screen using Xamarin.Android”. This example assumes, you have Xamarin for Android development environment setup already.

To design login screen as shown in the image below, we will be using two EditText for username, password and login button.

[![Login Screen using Xamarin](/media/articles/244/Login-Screen-using-Xamarin.png)](http://stacktips.com)

### Login.axml

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#2579BF"
    android:orientation="vertical">

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:layout_margin="10dp"
        android:orientation="vertical">

        <ImageView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:layout_marginBottom="20dp"
            android:src="@drawable/ic_launcher" />

        <EditText
            android:id="@+id/userName"
            android:layout_width="fill_parent"
            android:layout_height="45dp"
            android:padding="5dp"
            android:background="@android:color/white" />

        <View
            android:layout_width="fill_parent"
            android:layout_height="2dp"
            android:background="#f7f7f7" />

        <EditText
            android:id="@+id/password"
            android:layout_width="fill_parent"
            android:layout_height="45dp"
            android:padding="5dp"
            android:background="@android:color/white"
            android:inputType="textPassword" />

        <Button
            android:id="@+id/login"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_below="@id/password"
            android:layout_marginTop="10dp"
            android:background="#307FC1"
            android:text="Login"
            android:textColor="@android:color/white" />

    </LinearLayout>

</RelativeLayout>
```

Now, let us create an Activity class and use the below code. To make this example simplified, we are just displaying a toast message when login button is clicked.

### LoginActivity.cs

```cs
using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace MyApplication
{
	[Activity (Label = "POIApplication", Theme="@style/android:Theme.Holo.Light.NoActionBar")]
	public class LoginActivity : Activity
	{
		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			// Set our view from the "main" layout resource
			SetContentView (Resource.Layout.Login);

			//Initializing button from layout
			Button login = FindViewById<Button> (Resource.Id.login);

			//Login button click action
			login.Click += (object sender, EventArgs e) => {
				Android.Widget.Toast.MakeText(this, "Login Button Clicked!", Android.Widget.ToastLength.Short).Show();
			};
		}
	}
}
```
