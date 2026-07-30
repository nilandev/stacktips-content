---
id: 290
title: Creating Custom Views in Android Tutorial
slug: creating-custom-views-in-android-tutorial
excerpt: This tutorials describes how to create custom Views in Android.In this example we will create a custom view with two TextView. One to the left and other to the right as pairs. The custom styles can be configured from xml.
difficulty: beginners
publishedDate: "2013-09-01T07:42:09.000Z"
updatedDate: "2025-09-16T23:05:34.664Z"
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

This tutorial explains how to create custom Views in Android. We will create a custom view with two TextView. One to the left and other to the right as pairs. The custom styles can be configured from xml.

Android provides various View classes for dealing with user interfaces. View’s are responsible for representing data to user and allow interactivity. Below are few of the common View classes and Layout that is being supported in android.

## Different Android Layouts

A layout defines the visual structure for a user interface. It defines the way View’s can be placed on an Activity. Layouts can be declared in two ways.

1.  **Declarative approach:** Android provides a straightforward XML vocabulary that corresponds to the View classes and sub classes, such as those for widgets and layouts.
2.  Instantiate **Components using Java Code:** Your application can create and manipulate View and ViewGroup objects programmatically.

Following are the the ViewGroup classes supported by Android;

-   [Linear Layout](http://stacktips.com/articles/android-linearlayout-example)
-   [Relative Layout](http://stacktips.com/articles/android-relativelayout-example)
-   [Table Layout](http://stacktips.com/articles/android-table-layout-example)
-   [Grid View](http://stacktips.com/articles/android-gridview-example-building-image-gallery-in-android/)
-   [Frame Layout](http://stacktips.com/articles/android-framelayout-example)
-   [List View](http://stacktips.com/articles/android-listview-tutorial)

Following are some of the most common used Android View classes;

-   [Button](http://stacktips.com/articles/android-button-example/)
-   [Checkbox](http://stacktips.com/articles/android-checkbox-example "Android Checkbox Example")
-   [EditText](http://stacktips.com/articles/edittext-validation-in-android-example "Edittext Validation in Android Example")
-   [ImageView](http://stacktips.com/articles/android-imageview-example "Android ImageView Example")
-   [ProgressBar](http://stacktips.com/articles/progressbar-while-loading-webview/)
-   [RadioButton](http://stacktips.com/articles/android-radio-button-example/)
-   [SeekBar](http://stacktips.com/articles/android-seekbar-example/)
-   [Spinner (ComboBox)](http://stacktips.com/articles/android-spinner-example/)
-   [ToggleButton](http://stacktips.com/articles/how-to-turn-off-turn-on-wifi-in-android-using-code/)
-   [WebView](http://stacktips.com/articles/android-webview-example/)
-   [Dialog](http://stacktips.com/articles/android-dialog-example/)

## Why Custom Views?

All the above View classes and ViewGroup classes are good enough to create an solid android app. However, sometimes your app may have unique needs that aren’t covered by the built-in views. Such cases you will end up creating an custom View in android. The below example shows you how to create your own views that are robust and reusable.

## Creating Custom Views

Declaring a custom View is much similar to declaring any other class in Java. While designing an custom class keep the following things in mind

1.  It should provide some easy to use interface and should use the memory efficiently.
2.  A Custom View should conform to Android standards
3.  You can provide custom styleable attributes that can be configurable from Android XML layouts
4.  Your View class should be compatible with multiple Android platforms

All the default View classes that are available in android extends View. The same way your custom View can directly extend the View class or you may extend one of the default View controls such as TextView. Now, override the constructor that takes a Context and an AttributeSet object as parameters.

```java
import android.content.Context;
import android.util.AttributeSet;
import android.widget.LinearLayout;

public class LovelyView extends LinearLayout {

    public LovelyView(Context context) {
        super(context);
    }

    public LovelyView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public LovelyView(Context context, AttributeSet attrs, int defStyle) {
        this(context, attrs);
    }
}
```

### Define Custom Attributes

You can provide custom styleable attributes that can be configurable from Android XML layouts. These attributes will control its appearance and behavior of View. You can create a **`values/attr.xml`** file in your project. To enable this behavior in your custom view, you can define custom attributes for your view in a resource element in **`attr.xml`** file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <declare-styleable name="LovelyView">
        <attr name="leftLabel" format="string" />
        <attr name="rightLabel" format="string" />
        <attr name="leftLabelStyle" format="reference" />
        <attr name="rightLabelStyle" format="reference" />
    </declare-styleable>

</resources>
```

In the above xml file, `LovelyView` is the name of the style. and `leftLabel`, `rightLabel`, `leftLabelStyle` and `rightLabelStyle` are the style attributes defines.

Once you define the custom attributes, you can use them in layout XML files just like built-in attributes. The only difference is that your custom attributes belong to a different namespace. Instead of belonging to the `http://schemas.android.com/apk/res/android` namespace, they belong to `http://schemas.android.com/apk/res/(your package name)`

Here’s how to use the attributes defined for LovelyView

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:custom="http://schemas.android.com/apk/res/com.example.customview"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_margin="10dp"
    android:orientation="vertical"
    tools:context=".MainActivity" >

    <com.example.customview.LovelyView
        android:id="@+id/leftTextView"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        custom:leftLabel=""
        custom:leftLabelStyle="@style/leftTextStyle"
        custom:rightLabel=""
        custom:rightLabelStyle="@style/rightTextStyle" />

    <com.example.customview.LovelyView
        android:id="@+id/rightTextView"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        custom:leftLabel="Hello Mr:"
        custom:leftLabelStyle="@style/leftTextStyle"
        custom:rightLabel="Whats Up Buddy!"
        custom:rightLabelStyle="@style/rightTextStyle" />

</LinearLayout>
```

Notice that, In the above code snippet, we are using the fully qualified name of the custom view class. If your view class is an inner class, you must further qualify it with the name of the view’s outer class.

### Apply Custom Attributes

In the above two steps, we have configured the View stylable attributes in the XML. When a view is created from an XML layout, all of the attributes in the XML tag are read from the resource bundle and passed into the view’s constructor as an AttributeSet. We can read the attributes by calling **`obtainStyledAttributes()`** method.

```java
TypedArray a = context.getTheme().obtainStyledAttributes(attrs,
        R.styleable.LovelyView, 0, 0);
try {
    // get the text and colors specified using the names in attrs.xml
    leftLabel = a.getString(R.styleable.LovelyView_leftLabel);
    rightLabel = a.getString(R.styleable.LovelyView_rightLabel);
    leftStyle = a.getResourceId(R.styleable.LovelyView_leftLabelStyle, android.R.style.TextAppearance_DeviceDefault);
    rightStyle = a.getResourceId(R.styleable.LovelyView_rightLabelStyle, android.R.style.TextAppearance_DeviceDefault);

} finally {
    a.recycle();
}

LayoutInflater.from(context).inflate(R.layout.key_value_layout, this);

//left text view
leftTextView = (TextView) this.findViewById(R.id.leftTextView);
leftTextView.setText(leftLabel);
leftTextView.setTextAppearance(context, leftStyle);

//right text view
rightTextView = (TextView) this.findViewById(R.id.rightTextView);
rightTextView.setText(rightLabel);
rightTextView.setTextAppearance(context, rightStyle);
```

Below is the complete View class code

```java
import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.LinearLayout;
import android.widget.TextView;

public class LovelyView extends LinearLayout {
    private String leftLabel = "";
    private String rightLabel = "";
    private TextView leftTextView;
    private TextView rightTextView;
    private int leftStyle ;
    private int rightStyle;

    public LovelyView(Context context) {
        super(context);
        LayoutInflater.from(context).inflate(R.layout.key_value_layout, this);
    }

    public LovelyView(Context context, AttributeSet attrs) {
        super(context, attrs);
        initViews(context, attrs);
    }

    public LovelyView(Context context, AttributeSet attrs, int defStyle) {
        this(context, attrs);
        initViews(context, attrs);
    }

    private void initViews(Context context, AttributeSet attrs) {
        TypedArray a = context.getTheme().obtainStyledAttributes(attrs,
                R.styleable.LovelyView, 0, 0);

        try {
            // get the text and colors specified using the names in attrs.xml
            leftLabel = a.getString(R.styleable.LovelyView_leftLabel);
            rightLabel = a.getString(R.styleable.LovelyView_rightLabel);
            leftStyle = a.getResourceId(R.styleable.LovelyView_leftLabelStyle, android.R.style.TextAppearance_DeviceDefault);
            rightStyle = a.getResourceId(R.styleable.LovelyView_rightLabelStyle, android.R.style.TextAppearance_DeviceDefault);

        } finally {
            a.recycle();
        }

        LayoutInflater.from(context).inflate(R.layout.key_value_layout, this);

        //left text view
        leftTextView = (TextView) this.findViewById(R.id.leftTextView);
        leftTextView.setText(leftLabel);
        leftTextView.setTextAppearance(context, leftStyle);

        //right text view
        rightTextView = (TextView) this.findViewById(R.id.rightTextView);
        rightTextView.setText(rightLabel);
        rightTextView.setTextAppearance(context, rightStyle);
    }

    public String getLeftLabel() {
        return leftLabel;
    }

    public void setLeftLabel(String leftLabel) {
        this.leftLabel = leftLabel;
        if(leftTextView!=null){
            leftTextView.setText(leftLabel);
        }
    }

    public String getRightLabel() {
        return rightLabel;
    }

    public void setRightLabel(String rightLabel) {
        this.rightLabel = rightLabel;
        if(rightTextView!=null){
            rightTextView.setText(rightLabel);
        }
    }
}
```

  

[](http://stacktips.com)
