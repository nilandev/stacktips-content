---
id: 163
title: Android FrameLayout Example
slug: android-framelayout-example
excerpt: Over the course of this tutorial, we will take a look into Android FrameLayout and creating layout through xml and from code programmatically. FrameLayout is one of the useful layout provided by android system, which allows User Interface widgets to be overlapped with each other.
difficulty: beginners
publishedDate: "2015-01-26T23:32:05.000Z"
updatedDate: "2025-09-16T23:05:28.409Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - framelayout
  - framelayout-xml
course: null
displayOrder: 0
seo: 
  metaTitle: "Android FrameLayout Example: XML and Programmatic"
  metaDescription: "Learn how to create an Android FrameLayout to overlap views, with both XML layout and programmatic Java examples for stacking images and text."
  metaKeywords: null
---

In this tutorial, we will take a look into Android FrameLayout and creating layout through XML and from code programmatically.

FrameLayout is one of the useful layout provided by the Android system, which allows User Interface widgets to be overlapped with each other.

The Linear Layout and RelativeLayout places the views adjacent to each other but, if you have to develop something as shown in the screenshot below, where the TextViews are placed on top of an ImageView. It is quite impossible to achieve using LinearLayout or RelativeLayout.

In FrameLayout, all the child views added are placed like a stack. The most recently added are shown on top. This means that developers must pay attention to the order of widgets while adding them to the layout.

## Creating FrameLayout in XML

Open Android Studio and Create a new project. In this example, I have used `MyApplication` as the name of my application.

Add a new file called `activity_main.xml` and add the following code. To compile this code, you need to add a image with named image.jpg.

```xml
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <ImageView
        android:id="@+id/imageView1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:scaleType="centerCrop"
        android:src="@drawable/photo" />

    <TextView
        android:id="@+id/textView1"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:layout_marginTop="20dp"
        android:background="#00000c"
        android:padding="10dp"
        android:text="Fanny Hands Lane, London"
        android:textColor="#fafafa"
        android:textSize="22sp" />

    <TextView
        android:id="@+id/textView2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="right|bottom"
        android:layout_marginLeft="5dp"
        android:background="#AA000000"
        android:padding="10dp"
        android:text="26/Jan/2014"
        android:textColor="#FFFFFF"
        android:textSize="18sp" />

</FrameLayout>
```

We are almost done! All you have to do is now set the layout to your activity. you can do that by calling `setContentView(layoutID)` method inside onCreate(). Your activity code should look something similar to the following code snippets.

```java
//Your activity class
public class MainActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

Compile and run The output of the code will look same as the screenshot below.

[](http://stacktips.com/android/android-framelayout-example/attachment/frame-layout-android-example)

## Creating FrameLayout Programmatically

Android operating system provides list of API’s to create FrameLayout programmatically. Although most developers prefers to have layout as xml, but certain situations you might require view to be created programmatically. The following code snippet will show you how to achieve the same result as shown in the image above, from code.

Just add the following code to your activity `onCreate()` method.

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    //Initializing imageView
    ImageView imageView = new ImageView(this);
    imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
    imageView.setImageResource(R.drawable.photo);
    imageView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT));

    TextView textView1 = new TextView(this);
    textView1.setText("Fanny Hands Lane, London");
    textView1.setTextSize(22);
    textView1.setGravity(Gravity.CENTER_HORIZONTAL);
    textView1.setTextColor(Color.parseColor("#fcfcfc"));
    textView1.setBackgroundColor((Color.parseColor("#00000c")));
    textView1.setPadding(10,10,10,10);
    LayoutParams lp1 = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT,
                Gravity.CENTER_HORIZONTAL);
    lp1.setMargins(0,20,0,0);
    textView1.setLayoutParams(lp1);

    TextView textView2 = new TextView(this);
    textView2.setTextSize(18);
    textView2.setGravity(Gravity.RIGHT|Gravity.BOTTOM);
    textView2.setText("26/Jan/2014");
    textView2.setTextColor(Color.WHITE);
    textView2.setPadding(10,10,10,10);
    textView2.setBackgroundColor(Color.BLACK);
    LayoutParams lp2 = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT,
                Gravity.BOTTOM|Gravity.RIGHT);
    textView2.setLayoutParams(lp2);

    //Initializing frame layout
    FrameLayout framelayout = new FrameLayout(this);
    framelayout.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT));

    //Adding views to FrameLayout
    framelayout.addView(imageView);
    framelayout.addView(textView1);
    framelayout.addView(textView2);

     setContentView(framelayout);
}
```

### Key Points

1.  The visibility of all child views added to FrameLayout, can be controlled programmatically by using `setVisiblity()` method.
2.  `LayoutParams` are used by views to tell their parents how they want to be laid out. The base LayoutParams class just describes how big the view wants to be for both width and height.
3.  The order in which the views are added to FrameLayout is important. Views may be hidden beneath, if we some other view added on top of it.
