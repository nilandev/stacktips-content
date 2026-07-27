---
id: 268
title: Android ImageView Example
slug: android-imageview-example
excerpt: ImageView is one of the UI widget that is used to display images in your Application. ImageView is comes with different configuration options to support different scaleTypes.
difficulty: beginners
publishedDate: "2013-11-10T21:12:54.000Z"
updatedDate: "2025-09-16T23:05:33.818Z"
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

Android is enriched with some of the best User interface design widgets. That allows you to build robust and good looking ui based application. ImageView is one of the UI widget that is used to display images in your Application.

ImageView is comes with different configuration options to support different scaleTypes. scaleType options are used for scaling the bounds of an image to the bounds of this view. Below are the listed `scaleType` configuration properties supported.

-   CENTER
-   CENTER\_CROP
-   CENTER\_INSIDE
-   FIT\_CENTER
-   FIT\_END
-   FIT\_START
-   FIT\_XY
-   MATRIX

## Android ImageView Example

Let us add a new activity layout file named activity\_main.xml to your project res/layout folder. In this example, we will be creating three different ImageView for demonstration purpose.

Note that the ImageView uses the images from drawable folder.

```xml
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#31352e" >

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical" >

        <ImageView
            android:id="@+id/imageView1"
            android:layout_width="fill_parent"
            android:layout_height="150dp"
            android:layout_margin="5dp"
            android:src="@drawable/image1" />

        <ImageView
            android:id="@+id/imageView2"
            android:layout_width="fill_parent"
            android:layout_height="150dp"
            android:layout_margin="5dp"
            android:background="#fff"
            android:padding="3dp"
            android:scaleType="fitXY"
            android:src="@drawable/image2" />

        <ImageView
            android:id="@+id/imageView3"
            android:layout_width="fill_parent"
            android:layout_height="200dp"
            android:layout_margin="5dp"
            android:background="#fff"
            android:paddingBottom="50dp"
            android:paddingLeft="3dp"
            android:paddingRight="3dp"
            android:paddingTop="3dp"
            android:scaleType="fitXY"
            android:src="@drawable/image2" />
    </LinearLayout>

</ScrollView>
```

## Using ImageView from Activity

Let us look at the Activity java class. In this example, the second ImageView (i.e. imageView2) is loaded dynamically with an image from drawable folder using `setImageResource()` method. You can also listen to click event of the ImageView using `setOnClickListener().`

```java
package com.javatechig.imageview;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ImageView;
import android.widget.Toast;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		// setting image resource from drawable
		ImageView imageView = (ImageView) findViewById(R.id.imageView2);
		imageView.setImageResource(R.drawable.image1);

		imageView.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View arg0) {
				Toast.makeText(getApplicationContext(), "Clicked Second Image",
						Toast.LENGTH_SHORT).show();
			}
		});

	}

}
```
