---
id: 294
title: Android Seekbar Example
slug: android-seekbar-example
excerpt: SeekBar is one of the useful user interface element in android applications. SeekBar is an extension of ProgressBar that allows the selection of integer values using a natural user interface. Basically SeekBar has a thumb that you can slide to choose a value between 0 and some maximum that you set. A typical usage of Seekbar is your device brightness control and volume control
difficulty: beginners
publishedDate: "2013-08-28T11:59:38.000Z"
updatedDate: "2025-09-16T23:05:34.791Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-seekbar
  - onSeekBarChangeListener
  - custom-seekbar-drawable
course: null
displayOrder: 0
seo: 
  metaTitle: "Android SeekBar Example: Custom Style and Listener"
  metaDescription: "Learn how to create and customize an Android SeekBar with a custom drawable, and handle progress changes using OnSeekBarChangeListener."
  metaKeywords: null
---

# Introduction

This tutorial will help you understand android `SeekBar`. Here in this example, we’ll see how to create and customize SeekBar with different color and layout.

`SeekBar` is one of the useful user interface element in android applications. SeekBar is an extension of `ProgressBar` that allows the selection of integer values using a natural user interface. Basically SeekBar has a thumb that you can slide to choose a value between 0 and some maximum that you set. A typical usage of Seekbar is your device brightness control and volume control.

We can add a SeekBar widget using element. `android:max` property is basically used to set a maximum integer value for selection using SeekBar. `android:progress` property is basically used to set a integer value for SeekBar progress.

# Android Seekbar Example

#### activity\_seekbar.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:background="#F0F0F5" >

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:background="@drawable/background_view_rounded_single"
        android:orientation="vertical"
        android:visibility="visible" >

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:padding="10dp"
            android:text="Seekbar"
            android:textColor="#ffffff"
            android:textSize="20sp" />

        <SeekBar
            android:id="@+id/seek1"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:progress="20"
            android:secondaryProgress="20" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:padding="10dp"
            android:text="Custom Seekbar"
            android:textColor="#fcfcfc"
            android:textSize="20sp" />

        <SeekBar
            android:id="@+id/volume_bar"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:max="100"
            android:progress="0"
            android:progressDrawable="@drawable/progressbar"
            android:secondaryProgress="0" />
    </LinearLayout>

</RelativeLayout>
```

#### background\_view\_rounded\_single.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<inset android:insetLeft="1.0px" android:insetRight="1.0px" android:insetTop="0.0px" android:insetBottom="1.0px"
  xmlns:android="http://schemas.android.com/apk/res/android">
    <selector>
        <item android:state_pressed="true">
            <shape>
                <gradient android:startColor="@color/rounded_container_bg" android:endColor="@color/rounded_container_bg" android:angle="270.0" />
                <corners android:radius="11.0dip" />
            </shape>
        </item>
        <item>
            <shape>
                <stroke android:width="1.0px" android:color="@color/rounded_container_border" />
                <gradient android:startColor="@color/rounded_container_bg" android:endColor="@color/rounded_container_bg" android:angle="270.0" />
                <corners android:radius="10.0dip" />

            </shape>
        </item>
    </selector>
</inset>
```

#### progressbar.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android" >

    <item android:id="@android:id/background">
        <shape android:shape="rectangle" >
            <corners android:radius="5dp" />

            <gradient
                android:angle="270"
                android:endColor="@color/light_gray_header_color"
                android:startColor="@color/light_gray_header_color" />
        </shape>
    </item>
    <item android:id="@android:id/secondaryProgress">
        <clip>
            <shape android:shape="rectangle" >
                <corners android:radius="5dp" />

                <gradient
                    android:angle="270"
                    android:endColor="#00996a"
                    android:startColor="#00d190" />
            </shape>
        </clip>
    </item>
    <item android:id="@android:id/progress">
        <clip>
            <shape android:shape="rectangle" >
                <corners android:radius="5dp" />

                <gradient
                    android:angle="270"
                    android:endColor="#00996a"
                    android:startColor="#00d190" />
            </shape>
        </clip>
    </item>

</layer-list>
```

#### colors.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <color name="default_screen_bg">#f9f9f9</color>
    <color name="rounded_container_bg">#222222</color>
    <color name="rounded_container_border">#3b3f44</color>
    <color name="light_gray_header_color">#646663</color>

</resources>
```

We are good with layout design, lets move a bit into Java coding. Below is my activity code

```java
public class SeekbarActivity extends Activity {

    private SeekBar volumeControl = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_seekbar);

        volumeControl = (SeekBar) findViewById(R.id.volume_bar);

        volumeControl.setOnSeekBarChangeListener(new OnSeekBarChangeListener() {
            int progressChanged = 0;

            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser){
                progressChanged = progress;
            }

            public void onStartTrackingTouch(SeekBar seekBar) {
                // TODO Auto-generated method stub
            }

            public void onStopTrackingTouch(SeekBar seekBar) {
                Toast.makeText(SeekbarActivity.this,"seek bar progress:"+progressChanged,
                        Toast.LENGTH_SHORT).show();
            }
        });
    }

}
```

Our activity implements `SeekBar.OnSeekBarChangeListener`; Basically `SeekBar.OnSeekBarChangeListener` is a public static interface that is used to listen the SeekBar events. The SeekBar.OnSeekBarChangeListener interface allows us to override the below methods.

1.  `onProgressChanged(SeekBar seekBar, int progress, boolean fromUser)` – Used to notify that the progress level has changed.
2.  `onStartTrackingTouch(SeekBar seekBar)` – Used to notify that the user has started a touch gesture.
3.  `onStopTrackingTouch(SeekBar seekBar)` – Used to notify that the user has finished a touch gesture.

# Output

Output of the above code is shown below

[![Customizing Android Seekbar Example](/media/articles/383/Customizing-Android-Seekbar-300x507.png)](http://stacktips.com)

# Download Source Code

Download complete example source code from GitHub.

[Download source](https://github.com/javatechig/Android-Seekbar-Example)
