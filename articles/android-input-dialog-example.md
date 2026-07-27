---
id: 265
title: Android Input Dialog Example
slug: android-input-dialog-example
excerpt: In this tutorial we show you how to create input dialog in android with code sample. A dialog is a small window that prompts the user to make a decision or enter additional information.
difficulty: beginners
publishedDate: "2013-12-23T22:34:06.000Z"
updatedDate: "2025-09-16T23:05:33.624Z"
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

In this tutorial we show you how to create input dialog in android with code sample.

A dialog is a small window that prompts the user to make a decision or enter additional information. A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed. The Dialog class is the base class for dialogs.

Creating a input dialog in android involves below steps

1.  Create layout for input dialog
2.  Inflating layout and initialize AlertDialog

## Creating Input Dialog Layout

Here in this example we are creating an simple layout with an TextView and EditText. You may like to add your own layout with different UI widgets you need with your custom styles.

### Activity layout (activity\_main.xml)

Here we are creating an sample layout for activity. This has just an button, clicking on the button we will show the input dialog.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="@dimen/activity_vertical_margin" >

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Show Input Dialog" />

    <TextView
        android:id="@+id/result"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textAppearance="?android:attr/textAppearanceLarge" />

</LinearLayout>
```

### Input dialog layout (input\_dialog.xml)

Input dialog layout is composed of a TextView to hint user what to enter, and a EditText to enter values.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="10dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textAppearance="?android:attr/textAppearanceMedium"
        android:text="Enter Name"
        android:id="@+id/textView" />

    <EditText
        android:id="@+id/edittext"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:hint="Enter text here.."
        android:padding="10dp" />
</LinearLayout>
```

### Activity Class

Here in this class we are instating the activity\_main.xml layout. A click event is given for the Button, when clicked it shows the input dialog.

```java
package com.javatechig;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {

	private Button button;
	private TextView resultText;

	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		// components from main.xml
		button = (Button) findViewById(R.id.button);
		resultText = (TextView) findViewById(R.id.result);

		button.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View view) {
				showInputDialog();
			}
		});
	}

	protected void showInputDialog() {

		// get prompts.xml view
		LayoutInflater layoutInflater = LayoutInflater.from(MainActivity.this);
		View promptView = layoutInflater.inflate(R.layout.input_dialog, null);
		AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(MainActivity.this);
		alertDialogBuilder.setView(promptView);

		final EditText editText = (EditText) promptView.findViewById(R.id.edittext);
		// setup a dialog window
		alertDialogBuilder.setCancelable(false)
				.setPositiveButton("OK", new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int id) {
						resultText.setText("Hello, " + editText.getText());
					}
				})
				.setNegativeButton("Cancel",
						new DialogInterface.OnClickListener() {
							public void onClick(DialogInterface dialog, int id) {
								dialog.cancel();
							}
						});

		// create an alert dialog
		AlertDialog alert = alertDialogBuilder.create();
		alert.show();
	}
}
```
