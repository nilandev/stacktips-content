---
id: 340
title: Android Styles and Themes Tutorial
slug: android-styles-and-themes-tutorial
excerpt: This tutorial describes how to create and use styles and themes in Android applications with examples and code snippets.
difficulty: beginners
publishedDate: "2013-03-15T12:50:15.000Z"
updatedDate: "2025-09-16T23:05:36.879Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-styles-xml
  - android-themes
  - nine-patch-drawable
  - android-style-inheritance
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Styles and Themes Tutorial with Examples"
  metaDescription: "Learn how to create and apply Android styles and themes, including style inheritance, nine-patch drawables, selectors, and gradient backgrounds."
  metaKeywords: null
---

This tutorial describes how to create and use styles and themes in Android applications with examples and code snippets.

## 1. Android Design Patterns

Android is one among the most matured mobile platform today. Like every platforms, android development follows certain guidelines and patterns. The patterns are derived in order to make the app look amazing, simplifying life, and to provide the best performance. Google developers insist to follow the platform design guidelines for developing android applications. Remember to focus on below three overreaching goals while developing your applications

1.  Application should be usable and easy to understand
2.  Your app should strive to combine beauty. But remember not to make it too complex
3.  Make your app not to heavy, it should be responsive.

Check out Google’s official design pattern guidelines [here.](http://developer.android.com/design/get-started/creative-vision.html)

## 2. Using Custom Styles

Android supports customizing view and widgets by applying styles. A style is a collection of properties that specify the look and format for a View or widget. A style can specify properties such as height, padding, font color, font size, background color, and much more. In Android Styles works similar to CSS (cascading stylesheets) that are used in web designing application.

In android Style’s are XML files that are placed in the `/res/values` directory of your project. The root node of the XML file must be `<resources>` and you use a style tag that includes the name attribute. This tag contains than more or more item tags which define values for named attributes. For example, the below example we will create a `TextView` in android using XML layout editor.

```xml
<TextView
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:text="@string/hello_world"
    android:textColor="#006633"
    android:background="#f0f0f0"
    android:typeface="monospace"
    android:textStyle="italic"
    android:padding="5dp">
</TextView>
```

This works great for us, but what if we have to use the same or similar TextView style at multiple places in our application?? Yes, we can surely achieve this by copying the same style in multiple places. But that will result in following problems

1.  What if we have to re-skinning our application tomorrow? We have to change in all over the places we have used the color, styles. And I am sure this will consume quite a lot time.
2.  We will end up writing repetitive code, which is again difficult to maintain.

Sounds Frustrating? Now, we can overcome this by declaring a style for the `TextView`. A single style can be used by multiple places in our application. Change in the style at single place will reflect the changes all over. Sounds interesting? Let us see the below code snippet.

```xml
<TextView
    android:id="@+id/textView2"
    style="@style/MtTextViewStyle"
    android:text="@string/hello_world">
</TextView>
```

In this above code snippet, the `TextView` is referencing `@style/MyTextViewStyle` style.

### 2.1. Defining Style Class

A style xml file can be declared separately and that can be used or applied in other layout files. We can create a new xml file and save it in the `res/values/ directory` of your project. The root node of the XML file must be `<resources>`.

Multiple styles can be defined in a single `style.xml` file. For each style you want to create, add a <style> element to the file with a name that uniquely identifies the style. Then add an `<item>` element for each property of that style, with a name that declares the style property and a value to go with it. The value for the `<item>` can be a keyword string, a hex color, a reference to another resource type, or other value depending on the style property.

Here is the style we have defined for the TextView example

```xml
<style name="MyTextViewStyle">
    <item name="android:layout_width">fill_parent</item>
    <item name="android:layout_height">wrap_content</item>
    <item name="android:textColor">#006633</item>
    <item name="android:typeface">monospace</item>
    <item name="android:background">#f0f0f0</item>
    <item name="android:textStyle">italic</item>
    <item name="android:padding">5dp</item>
</style>
```

### 2.2. Apply a Style to View

Here’s how to set a style for a View in the XML layout:

```xml
<TextView
    android:id="@+id/textView2"
    style="@style/MyTextViewStyle"
    android:text="@string/hello_world">
</TextView>
```

Now this TextView will be styled as defined by the style named `**MyTextViewStyle**`

### 2.3. Inheriting Built-in Platform Styles

The parent attribute in the `<style>` element lets you specify a style from which your style should inherit properties. You can use this to inherit properties from an existing style and then define only the properties that you want to change or add. You can inherit from styles that you’ve created yourself or from styles that are built into the platform.

Below code snippet inherits the android platform’s default text appearance and then modify it `@android:style/TextAppearance.Large`

```xml
<style name="MyTextViewStyle" parent="@android:style/TextAppearance.Large">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:textColor">#006633</item>
        <item name="android:typeface">monospace</item>
        <item name="android:background">#f0f0f0</item>
        <item name="android:textStyle">italic</item>
        <item name="android:padding">5dp</item>
</style>
```

### 2.4. Inheriting Self Defined Styles

Android allows you to inherit other styles defined in the applications. Find the example below

```xml
<style name="MyTextViewStyle" parent="@android:style/TextAppearance.Large">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:textColor">#006633</item>
        <item name="android:typeface">monospace</item>
        <item name="android:background">#f0f0f0</item>
        <item name="android:textStyle">italic</item>
        <item name="android:padding">5dp</item>
    </style>

    <style name="MyTextViewStyle.BoldRed">
        <item name="android:textColor">#FF0000</item>
        <item name="android:textStyle">bold</item>
    </style>
```

Notice that there is no parent attribute in the <style> tag, but because the name attribute begins with the `MyTextViewStyle` style name, which is a style that you have created. `MyTextViewStyle.BoldRed` style inherits all style properties from that `MyTextViewStyle`. This style then overrides the android:textColor and android:textStyle property to make the text red and bold. The newly created style can be referenced from `TextView` as `@style/MyTextViewStyle.BoldRed`.

You can continue inheriting like this as many times as you’d like, by chaining names with periods.

```xml
<style name="MtTextViewStyle" parent="@android:style/TextAppearance.Large">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:textColor">#006633</item>
        <item name="android:typeface">monospace</item>
        <item name="android:background">#f0f0f0</item>
        <item name="android:textStyle">italic</item>
        <item name="android:padding">5dp</item>
    </style>

    <style name="MtTextViewStyle.BoldRed">
        <item name="android:textColor">#FF0000</item>
        <item name="android:textStyle">bold</item>
    </style>

    <style name="MtTextViewStyle.BoldRed.Big">
        <item name="android:textSize">30sp</item>
    </style>
```

This inherits from both `MyTextViewStyle` and `MyTextViewStyle.BoldRed` styles, then adds the `android:textSize` property.

## 3. Applying Activity Themes

A theme is a style applied to an entire activity or application, rather than an individual View. The technique of defining a theme is the same as defining a style.

```xml
<style name="MyTheme" parent="android:Theme.Light">
        <item name="android:windowNoTitle">true</item>
        <item name="android:colorBackground">@color/default_bg</item>
</style>
```

The above code, overrides the default `android:Theme.Light` theme and overrides `android:windowNoTitle` property.

To set a theme for all the activities of your application, open the AndroidManifest.xml file and edit the <application> tag to include the android:theme attribute with the style name. For example

```xml
<application android:theme="@style/MyTheme">
```

If you want a theme applied to just one Activity in your application, then add the android:theme attribute to the `<activity>` tag.

## 4. Using Nine-Patch Background

A nine-patch drawable is a special kind of image which can be scaled in width and height while maintaining its visual integrity. Nine-patches are the most common way to specify the appearance of Android buttons, though any drawable type can be used. Notice the one pixel black lines around the edge; they control the scaling of the image.

Below are the images used in this example

[![ic_green_button.9](/media/articles/434/ic_green_button.9-300x69.png)](http://stacktips.com)

[![ic_orange_button.9](/media/articles/434/ic_orange_button.9-300x69.png)](http://stacktips.com)  

1.  Save this bitmap inside drawable folder `/res/drawable/ic_green_button.9.png`
2.  You may define a new style as explained below. Here we have created two styles `MyButton.Green` and `MyButton.Orange` for creating two buttons.

```xml
<style name="MyButton" parent="android:Widget.Button">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">wrap_content</item>
        <item name="android:textColor">#ffffff</item>
         <item name="android:textSize">22sp</item>
    </style>

     <style name="MyButton.Green">
        <item name="android:background">@drawable/ic_green_button</item>
    </style>

      <style name="MyButton.Orange">
       <item name="android:background">@drawable/ic_orange_button</item>
    </style>
```

1.  Apply the new button style to your button created inside your layout xml.

```xml
     <Button
         style="@style/MyButton.Green"
         android:text="GREEN BUTTON" />

     <Button
         style="@style/MyButton.Orange"
         android:text="ORANGE BUTTON" />
```

# 5. Using Selector

A selector is a drawable which changes based on state. Here is an example selector which switches between two images or two colors. For example, create `/res/drawable/button_selector.xml` to display two images depending on the button state.

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">

    <item android:drawable="@drawable/ic_green_button" android:state_pressed="true"/>
    <item android:drawable="@drawable/ic_orange_button"/>

</selector>
```

Now you can use this selector as the drawable applied to the button style.

```xml
  <style name="MyButton.Orange.Selector">
       <item name="android:background">@drawable/button_selector</item>
  </style>
```

## 6. Gradient Drawables

We can define gradients in android xml file and apply to the interface. You can a gradient file in drawable folder `/res/drawable/my_gradient.xml` and add the following code

```xml
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle" >

    <gradient
        android:angle="270"
        android:endColor="#62c4e7"
        android:startColor="#4a557c" />

</shape>
```

Now apply the style to the button as background property

```xml
   <style name="MyButton.Orange.Gradient">
       <item name="android:background">@drawable/my_gradient</item>
    </style>
```

## 7. Make Activity Look Like Dialog

Android provides other built-in themes and styles which can be used without rewriting them yourself. You can use the Dialog theme and make your Activity appear like a dialog box

```xml
<activity android:theme="@android:style/Theme.Dialog">
```

Or if you want the background to be transparent, use the translucent theme:

```xml
<activity android:theme="@android:style/Theme.Translucent">
```

[](http://stacktips.com)
