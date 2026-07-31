---
id: 304
title: Android Radio Button Example
slug: android-radio-button-example
excerpt: In this tutorial, we show you how to use radio button in android using example. RadioButton is a…
difficulty: beginners
publishedDate: "2013-08-03T06:17:00.000Z"
updatedDate: "2025-09-16T23:05:35.507Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-radiobutton
  - radiogroup-example
  - onCheckedChangeListener
course: null
displayOrder: 0
seo: 
  metaTitle: "Android RadioButton Example with RadioGroup"
  metaDescription: "Learn how to use RadioButton and RadioGroup in Android, handle selection changes with OnCheckedChangeListener, and clear or submit selections."
  metaKeywords: null
---

In this tutorial, we show you how to use radio button in android using example.

RadioButton is a two-states button that can be either checked or unchecked. When the radio button is unchecked, the user can click it to check it. Radio button generally works with RadioGroup. Radio group can hold multiple RadioButtons, however only one can be selected at any point of time. Once a radio button is checked by user it cannot be unchecked again by pressing the same button. It automatically gets unchecked, where any other button on the same RadioGroup is selected.

Let us understand some of the RadioButton attributes and properties

1.  The `android:orientation` property on the Radio group defines the orientation to position its child view. It can be either horizontal or vertical.
2.  `check(id)` – Sets the selection to the radio button whose identifier is passed in parameter. Using -1 as the selection identifier clears the selection.
3.  `clearCheck()`– Clears the selection. When the selection is cleared, no radio button in this group is selected and getCheckedRadioButtonId() returns null.
4.  `getCheckedRadioButtonId()` – Returns the identifier of the selected radio button in this group. Upon empty selection, the returned value is -1.
5.  `setOnCheckedChangeListener()` – Register a callback to be invoked when the checked radio button changes in this group. You must supply instance of `RadioGroup.OnCheckedChangeListener` to setOnCheckedChangeListener() method.

# Android RadioButton Example

Create a new layout file named activity\_main.xml under layout resource folder and add the following code snippets. The code will generate the layout as shown in the screenshot below.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="20dp">

    <TextView
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="How do you like the quality of our tutorials?"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <RadioGroup
        android:id="@+id/radioGroup"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical">

        <RadioButton
            android:id="@+id/radioButton1"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:text="Excellent " />

        <RadioButton
            android:id="@+id/radioButton2"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:text="Satisfactory" />

        <RadioButton
            android:id="@+id/radioButton3"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:text="Below Average" />
    </RadioGroup>

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <Button
            android:id="@+id/clearBtn"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:onClick="onClear"
            android:text="Clear " />

        <Button
            android:id="@+id/submitBtn"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:onClick="onSubmit"
            android:text="Submit" />
    </LinearLayout>
</LinearLayout>
```

# Using RadioButton from Activity

Let us create a new java class named RadioButtonSampleActivity.java and add the following screenshot.

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity extends Activity {
    private RadioGroup radioGroup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /* Initialize Radio Group and attach click handler */
        radioGroup = (RadioGroup) findViewById(R.id.radioGroup);
        radioGroup.clearCheck();

        /* Attach CheckedChangeListener to radio group */
        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                RadioButton rb = (RadioButton) group.findViewById(checkedId);
                if(null!=rb && checkedId > -1){
                    Toast.makeText(MainActivity.this, rb.getText(), Toast.LENGTH_SHORT).show();
                }

            }
        });
    }

    public void onClear(View v) {
        /* Clears all selected radio buttons to default */
        radioGroup.clearCheck();
    }

    public void onSubmit(View v) {
        RadioButton rb = (RadioButton) radioGroup.findViewById(radioGroup.getCheckedRadioButtonId());
        Toast.makeText(MainActivity.this, rb.getText(), Toast.LENGTH_SHORT).show();
    }
}
```

# Output

[![Android RadioButton Example](/media/articles/397/Android-RadioButton-Example-620x592.png)](/articles/android-radio-button-example/attachment/android-radiobutton-example)
