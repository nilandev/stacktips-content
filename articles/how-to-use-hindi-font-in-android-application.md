---
id: 225
title: How to Use Hindi Font in Android Application
slug: how-to-use-hindi-font-in-android-application
excerpt: In this example we’ll show you how to support hindi, bangala, marathi fonts in Android application. Android phone doesn’t support Devanagari fonts. However if you want to use hindi, tamil, bangali or other Devanagari fonts in your Android Application you have an alternative of using external fonts.
difficulty: beginners
publishedDate: "2014-05-23T05:17:02.000Z"
updatedDate: "2025-09-16T23:05:31.402Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - custom-font-android-textview
  - hindi-font-android
  - typeface-createfromasset
  - devanagari-font-android
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Use Hindi Font in an Android Application"
  metaDescription: "Learn how to add Hindi, Marathi, and other Devanagari fonts to a TextView in Android using a custom .ttf asset and Typeface.createFromAsset()."
  metaKeywords: null
---

In this example we’ll show you how to support hindi, bangala, marathi fonts in Android application. Android phone doesn’t support Devanagari fonts. However if you want to use hindi, tamil, bangali or other Devanagari fonts in your Android Application you have an alternative of using external fonts. Follow below steps to achieve this

1.  Download an external Devanagari font that you like to use in your application. Here in this example, I have downloaded “**[Ananda-Lipi-Bold](http://hindi-fonts.com/fonts/download/Ananda-Lipi-Bold-Cn-Bt)**” font. You can also download from **[here](http://hindi-fonts.com/fonts/download/Ananda-Lipi-Bold-Cn-Bt "Download Ananda-Lipi-Bold font")**
2.  Create a new folder “fonts” under assets and copy the downloaded .ttf font to your assets/font folder.
3.  Load .ttf to your TextView

## Activity Layout

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#900001"
    android:padding="@dimen/activity_vertical_margin" >

    <TextView
        android:id="@+id/textView"
        android:gravity="center_horizontal"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="@string/hanuman_chalisa"
        android:textColor="#ecaa00"
        android:textSize="28sp" />

</RelativeLayout>
```

## String.xml file

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <string name="app_name">HindiFont</string>
    <string name="hanuman_chalisa"> श्रीगुरु चरण् सरोजरज, निजमनमुकुर सुधार ।\n बरणौ रघुबर बिमल यश, जो दायक फलचार ॥\n\n बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार ।\n बल बुद्धिविद्या देहु मोहिं, हरहु कलेश विकार ॥
</string>

</resources>
```

## Activity Java Code

```java
import android.app.Activity;
import android.graphics.Typeface;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TextView tv = (TextView) findViewById(R.id.textView);
        Typeface fontHindi = Typeface.createFromAsset(getAssets(),
                "fonts/Ananda Lipi Bold Cn Bt.ttf");
        tv.setTypeface(fontHindi);
    }
}
```

## Output

[![Screenshot_2014-05-23-17-13-49](/media/articles/298/Screenshot_2014-05-23-17-13-49-620x348.png)](http://stacktips.com)
