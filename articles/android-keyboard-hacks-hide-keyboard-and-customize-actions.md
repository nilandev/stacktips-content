---
id: 130
title: How to Customize Android Keyboard Actions and Other Hacks
slug: android-keyboard-hacks-hide-keyboard-and-customize-actions
excerpt: This post explains the various code hacks used for controlling the appearance and behavior of the Android keyboard. Hacks include hide Keyboard, customize keyboard actions and setting input type.
difficulty: beginners
publishedDate: "2015-08-04T20:29:30.000Z"
updatedDate: "2025-09-16T23:05:26.821Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - hide-soft-keyboard
  - android-inputtype
  - oneditoractionlistener
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Keyboard Hacks: Hide and Customize Actions"
  metaDescription: "Learn how to control Android soft keyboard behavior, including setting input types, hiding the keyboard programmatically, and customizing IME action buttons."
  metaKeywords: null
---

Most of the form-based applications often need to customize the default behavior of the Android soft keyboard. Often it is required to control the type of keyboard you want to present the user for data input, or customize the appearance of keyboard **“Enter”** key action.

Over the course of this tutorial, we will explain the various code hacks used to control the appearance and behavior of Android soft keyboard. This tutorial covers the following topics:

Let us first began with controlling the type keyboard to display while editing the form data.

## Set TextView input type

There are different types of keyboard designed for user convenience. For example, if for entering a number you must display the numerical keyboard. This can be controlled by `InputType` property of `TextView`. The InputType controls aspects such as the type of data allowed to enter in a text field. Generally, you can select a single value, though some can be combined together as indicated.

It is important to note that, setting `InputType` property attribute to anything besides `none` implies that the text is editable.

Some of the most used input type constants includes, `none`, `text`, `textCapCharacters`, `textCapWords`, `textCapSentences`, `textAutoCorrect`, `textAutoComplete`, `textMultiLine`, `textImeMultiLine`, `textUri`, `textEmailAddress`, `textPassword`, `textWebEditText`, `textPhonetic`, `textWebEmailAddress`, `number`, `phone`, `datetime`, `date`, and `time`.

You can set the inputType property in the layout declaration as follows:

```xml
<EditText
   android:id="@+id/text1"
   android:layout_width="fill_parent"
   android:layout_height="wrap_content"
   android:imeOptions="actionSearch"
   android:singleLine="true"
   android:inputType="number" />
```

## Hide the soft keyboard

The following code snippet will help you to hide or dismiss the soft keyboard from the screen and take the input focus out form the editable view.

```java
InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
```

The `hideSoftInputFromWindow()` takes an `IBinder` window token as a parameter. This can be retrieved from any View object currently attached to the window via `View.getWindowToken()`.

## Customize the input method

Now that we understand the different keyboard types based on the TextView `inputType` property let us customize the appearance of keyboard **“Enter”** action.

When the keyboard is visible on screen, the text on the Enter key typically indicates its action based on the order of focusable items in the view. While unspecified, the keyboard by default display a **“Next”** action if there are more focusable views to move to, otherwise it shows **“Done”** action if the last item is currently focused on. In the case of a multiline field, this action is a line return.

This can be customized using `android:imeOptions` value in the TextView XML declaration. The `android:imeOptions` attribute access the following possible values:

-   **actionUnspecified:** This property displays action of the device’s choice Action event is IME\_NULL. This is the default keyboard action.
-   **actionGo:** This displays Go as the Enter key. Action event is **IME\_ACTION\_GO**
-   **actionSearch:** Displays a search icon as the Enter key Action event is **IME\_ACTION\_SEARCH**
-   **actionSend:** Displays Send as the Enter key. Action event is **IME\_ACTION\_SEND**
-   **actionNext:** Displays Next as the Enter key. Action event is **IME\_ACTION\_NEXT**
-   **actionDone:** Displays Done as the Enter key. Action event is **IME\_ACTION\_DONE**

All the above set of action event constants are defined in `EditorInfo` class.

Let us look at the following example layout with two editable text fields. The first EditText will display the search icon for the Enter key, and the second will display Go. The resulting output may vary depending on current keyboard installed on the device.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical">

    <EditText
        android:id="@+id/text1"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:imeOptions="actionSearch"
        android:singleLine="true" />

    <EditText
        android:id="@+id/text2"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:imeOptions="actionGo"
        android:singleLine="true" />
</LinearLayout>
```

Note that, the custom editor options apply only to the appearance of soft input methods. Changing this value will not affect the events that get generated when the user presses on a physical hardware keyboard button.

## Adding Custom Action

Customizing what happens when the user presses the **Enter** key can be just as important as adjusting its appearance. For overriding the default behavior we need to attach an `OnEditorActionListener` to `EditText` instance.

The following code snippet shows how to create a custom action for EditTexts.

```java
public class MainActivity extends Activity implements OnEditorActionListener {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Add the listener to the views
        EditText editText1 = (EditText) findViewById(R.id.text1);
        editText1.setOnEditorActionListener(this);

        EditText editText2 = (EditText) findViewById(R.id.text2);
        editText2.setOnEditorActionListener(this);
    }

    @Override
    public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
        if (actionId == EditorInfo.IME_ACTION_SEARCH) {
            //Handle search key click
            return true;
        }
        if (actionId == EditorInfo.IME_ACTION_GO) {
            //Handle go key click
            return true;
        }
        return false;
    }
}
```

The boolean return value of `onEditorAction()` tells the system whether you are consuming the event or it should be passed on to the next possible responder if any. It is important for you to return true when you handle the event yourself, so no other processing occurs. You can return false when you are not handling the event so your application does not steal key events from the rest of the system.  
Welcome to EditPad.org – your online plain text editor. Enter or paste your text here. To download and save it, click on the button below.  
2

more » Edit Pad – Free Online Text EditorEdit Pad © 2018
