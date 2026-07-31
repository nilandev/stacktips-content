---
id: 289
title: TextSwitcher and ImageSwitcher Example in Android
slug: textswitcher-and-imageswitcher-example-in-android
excerpt: The TextSwitcher and ImageSwitcher methods give you a simple way to add animated transitions. TextSwitcher and ImageSwitcher are used to have an smooth transition animation in android view.
difficulty: beginners
publishedDate: "2013-09-02T12:04:33.000Z"
updatedDate: "2025-09-16T23:05:34.635Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-textswitcher-example
  - android-imageswitcher-example
  - viewswitcher-animation-android
  - android-view-transition-animation
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `TextSwitcher` and `ImageSwitcher` in Android allows you to create an smooth transition animation in when switching between Android views. TextSwitcher and ImageSwitcher is available from version Android v1.6+. TextSwitcher replaces a TextView and ImageSwitcher replaces an ImageView.

TextView and TextSwitcher work in a similar way. TextSwitcher is what we need if we want to add an animation to avoid the hard swap. A TextSwitcher is useful to animate a label onscreen. Whenever it’s called, TextSwitcher animates the current text out and animates the new text in.

TextSwitcher uses the factory to create new views. Whenever we use setText(), it first removes the old view using an animation set with the `setOutAnimation()` method, and then places the new one using the animation set by the `setInAnimation()` method. You can use setInAnimation() and setOutAnimation() method to set in and out animation using for switcher. The new transition fades out the original text while the new text fades in to replace it.

In this example, we will use default stock android `fade_in` animation. This should work equally well with other custom animations.

![TextSwitcher-and-ImageSwitcher-Example-in-Android](/media/articles/378/TextSwitcher-and-ImageSwitcher-Example-in-Android.gif)

### Defining TextSwitcher and ImageSwitcher in layout

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent" >

    <ImageSwitcher
        android:id="@+id/imageSwitcher"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_alignParentLeft="true" >
    </ImageSwitcher>

    <TextSwitcher
        android:id="@+id/textSwitcher"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_centerHorizontal="true"
        android:background="#99000000"
        android:padding="10dp" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:layout_alignParentTop="true"
        android:layout_marginTop="10dp"
        android:onClick="onSwitch"
        android:text="Next Image >>" />

</RelativeLayout>
```

## Using TextSwitcher and ImageSwitcher from code

```java
package com.javatechig.ui;

import android.app.Activity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.TextSwitcher;
import android.widget.TextView;
import android.widget.ViewSwitcher.ViewFactory;

public class MainActivity extends Activity {

    private static final String[] TEXTS = { "Image #1", "Image #2", "Image #3" };
    private static final int[] IMAGES = { R.drawable.mf1, R.drawable.mf2,
            R.drawable.mf3 };
    private int mPosition = 0;
    private TextSwitcher mTextSwitcher;
    private ImageSwitcher mImageSwitcher;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        mTextSwitcher = (TextSwitcher) findViewById(R.id.textSwitcher);
        mTextSwitcher.setFactory(new ViewFactory() {
            @Override
            public View makeView() {
                TextView textView = new TextView(MainActivity.this);
                textView.setGravity(Gravity.CENTER);
                return textView;
            }
        });

        mTextSwitcher.setInAnimation(this, android.R.anim.fade_in);
        mTextSwitcher.setOutAnimation(this, android.R.anim.fade_out);

        mImageSwitcher = (ImageSwitcher) findViewById(R.id.imageSwitcher);
        mImageSwitcher.setFactory(new ViewFactory() {
            @Override
            public View makeView() {
                ImageView imageView = new ImageView(MainActivity.this);
                return imageView;
            }
        });
        mImageSwitcher.setInAnimation(this, android.R.anim.slide_in_left);
        mImageSwitcher.setOutAnimation(this, android.R.anim.slide_out_right);

        onSwitch(null);
    }

    public void onSwitch(View view) {
        mTextSwitcher.setText(TEXTS[mPosition]);
        mImageSwitcher.setBackgroundResource(IMAGES[mPosition]);
        mPosition = (mPosition + 1) % TEXTS.length;
    }
}
```
