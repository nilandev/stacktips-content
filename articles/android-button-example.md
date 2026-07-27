---
id: 307
title: Android Button Example
slug: android-button-example
excerpt: This tutorial explains how to use Button widget in Android. The examples used in this tutorial, will show you how to create different button layout such as normal button, image button, button with image and text, etc.
difficulty: beginners
publishedDate: "2013-08-03T03:05:00.000Z"
updatedDate: "2025-09-16T23:05:35.640Z"
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

This tutorial explains how to use Button widget in Android. The examples used in this tutorial, will show you how to create different button layout such as normal button, image button, button with image and text, etc.

Android button represents a clickable push-button widget. It accepts different user action such as press, click, long press, etc. Button widget is available in android.widget.Button package.

Let us drive straight into creating button views and different Button properties.

## Declaring Button Layout

Like any other view widget, you can declare the Button widget layout in your Activity or Fragment layout or you can create a Button programmatically. The following section will show you how to declare a buttons to activity layout.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical">

    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:text="Button1" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Button2" />

    <Button
        android:id="@+id/button3"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="right"
        android:text="Button3" />

    <Button
        android:id="@+id/button4"
        android:layout_width="200dp"
        android:layout_height="90dp"
        android:text="Button4" />

    <Button
        android:id="@+id/button5"
        android:layout_width="200dp"
        android:layout_height="90dp"
        android:gravity="right"
        android:text="Button5" />
</LinearLayout>
```

#### How it works

The above xml code will generate five buttons and will represent layout as shown in the screenshot below.

1.  We have created a LinearLayout and its orientation is set to vertical.
2.  The `layout_width` parameter indicates the width of the widget. The first button is stretched to the full screen by specifying its value to match\_parent.
3.  The `layout_width` attribute indicates the height a view. The wrap\_content indicates that the height will be adjusted to content of the widget.
4.  The `android:layout_gravity` defines the positioning of view in its parent layout.
5.  The `android:gravity` defines the alignment for the view content. It can be of any possible constants like left, right, center\_vertical, center\_horizontal, center

[![Android Button Example](/media/articles/400/Android-Button-Example.png)](http://stacktips.com/android/android-button-example/attachment/android-button-example-2)

## Initializing Button in Activity

Now that we have created the activity layout. Let us use this layout in activity. Paste the following code snippet in your activity (MyActivity.java) class.

```java
protected void onCreate(Bundle savedInstanceState) {
	super.onCreate(savedInstanceState);
	setContentView(R.layout.main;
	Activity mActivity = this;

	Button button = (Button) findViewById(R.id.button1);
	button.setOnClickListener(new OnClickListener() {

		@Override
		public void onClick(View v) {
			Toast.makeText(mActivity, "Button1 Clicked!", Toast.LENGTH_LONG).show();
		}
});
```

## Button Event Handling

To Attach a click listener to the button, let us first instantiate the Button object by calling `findViewById()` and supplying the unique button id as declared in the layout.

Now, call `setOnClickListener()` method and provide `OnClickListener` event reference. Read here for more on [different way to handle events in Android](http://stacktips.com/android/different-way-to-handle-events-in-android "Different way to handle events in Android").

## Styling Android Button

Android Button styles can be customized with color, font, background etc. Lets us see some of the button xml attributes to customize the buttons as shown below.

1.  `android:background` – Sets Button background style. This can be an hex color of #RRGGBBAA format or can be a drawable.
2.  `android:drawableLeft` – Showing an image to the left side of the button. In the following screenshot, the Facebook icon depicts the same.
3.  `android:textColor` – Allows you to set the background color of button.

Learn more about on customizing Android View’s from the following links.

[Android Styles and Themes Tutorial](http://stacktips.com/android/android-styles-and-themes-tutorial "Android Styles and Themes Tutorial")

[Using External Fonts in Android View](http://stacktips.com/android/using-external-fonts-in-android-view "Using External Fonts in Android View")

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="10dp">

    <Button
        android:id="@+id/button1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_marginBottom="10dp"
        android:background="@drawable/button_bg"
        android:text="Button1" />

    <Button
        android:id="@+id/button2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:background="#3B5998"
        android:drawableLeft="@drawable/facebook"
        android:padding="10dp"
        android:text="Login With Facebook"
        android:textColor="#ffffff" />
</LinearLayout>
```

Here is the output of the above code  
[![Android Button Style](/media/articles/400/Android-Button-Style.png)](http://stacktips.com)
