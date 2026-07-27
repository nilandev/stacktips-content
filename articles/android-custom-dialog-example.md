---
id: 219
title: Android Custom Dialog Example
slug: android-custom-dialog-example
excerpt: In this tutorial we show you how to create custom dialog in android. A dialog is a small window that prompts the user to make a decision or enter additional information.
difficulty: beginners
publishedDate: "2013-12-22T21:33:50.000Z"
updatedDate: "2025-09-16T23:05:33.724Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - c
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this tutorial we show you how to create custom dialog in android with code sample.

A dialog is a small window that prompts the user to make a decision or enter additional information. A dialog does not fill the screen and is normally used for modal events that require users to take an action before they can proceed. The Dialog class is the base class for dialogs.

Creating a custom dialog in android involves below steps

1.  Crating a custom layout for dialog
2.  Attaching layout to dialog instance
3.  Show/Hide dialog

# Crating a custom layout for dialog

Here in this example we are creating an simple layout with an ImgeView, TextView and a Button. You may like to add your own layout with different UI widgets you need with your custom styles.

**custom\_dialog\_layout.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent" >

    <ImageView
        android:id="@+id/image"
        android:layout_width="50dp"
        android:layout_height="50dp"
        android:contentDescription="@drawable/ic_launcher"
        android:src="@drawable/ic_launcher" />

    <Button
        android:id="@+id/button"
        android:layout_width="100dp"
        android:layout_height="wrap_content"
        android:layout_below="@+id/image"
        android:layout_centerHorizontal="true"
        android:text="Dismiss" />

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="fill_parent"
        android:layout_above="@+id/button"
        android:layout_toRightOf="@+id/image"
        android:gravity="center_vertical"
        android:textAppearance="?android:attr/textAppearanceMedium" />

</RelativeLayout>
```

# Attaching layout to dialog instance

Now, let us go back to our activity and create an instance of Dialog. We can attach our custom layout to dialog by using setContentView() method call.

```java
package com.javatechig;

import android.app.Activity;
import android.app.Dialog;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends Activity {
	private Button button;

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		button = (Button) findViewById(R.id.button);
		button.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View view) {
				final Dialog dialog = new Dialog(MainActivity.this);

				//setting custom layout to dialog
				dialog.setContentView(R.layout.cusotm_dialog_layout);
				dialog.setTitle("Custom Dialog");

				//adding text dynamically
				TextView txt = (TextView) dialog.findViewById(R.id.textView);
				txt.setText("Put your dialog text here.");

				ImageView image = (ImageView)dialog.findViewById(R.id.image);
				image.setImageDrawable(getResources().getDrawable(android.R.drawable.ic_dialog_info));

				//adding button click event
				Button dismissButton = (Button) dialog.findViewById(R.id.button);
				dismissButton.setOnClickListener(new OnClickListener() {
					@Override
					public void onClick(View v) {
						dialog.dismiss();
					}
				});
				dialog.show();
			}
		});
	}
}
```

# Show/Hide dialog

When you want to show your dialog, just call show() method and to hide you have to call dismiss() method.

# Output

[![Custom Dialog in Android](/media/articles/352/Custom-Dialog-in-Android-300x437.png)](http://stacktips.com)
