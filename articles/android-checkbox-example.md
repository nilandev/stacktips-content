---
id: 266
title: Android CheckBox Example
slug: android-checkbox-example
excerpt: In this tutorial we show you how to create checkbox in android with code sample. This example creates three checkbox and handles users input.
difficulty: beginners
publishedDate: "2013-12-22T21:50:05.000Z"
updatedDate: "2025-09-16T23:05:33.692Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-checkbox
  - checkbox-listener
course: null
displayOrder: 0
seo: 
  metaTitle: "Android CheckBox Example: Handle Click Events"
  metaDescription: "Learn how to add checkboxes to an Android layout and handle user selection with a click listener, using a simple three-checkbox example."
  metaKeywords: null
---

In this tutorial, we show you how to use check box in android with example.

Checkbox is a two-states button that can be either checked or unchecked. When the radio button is unchecked, the user can click it to check it or vice-versa. Unlike [RadioButton](http://stacktips.com/android/android-radio-button-example "Android Radio Button Example"), android check box works like toggle between two states.

# Android CheckBox Example

Let us create a example that displays three checkbox and responds to user click event. When user selects or un-select the button, it displays a toast with its state. Create a new layout file named activity\_main.xml under layout resource folder and add the following code snippets. The code will generate the layout as shown in the screenshot below.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="@dimen/activity_vertical_margin">

    <TextView
        android:id="@+id/textView1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/hint"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <CheckBox
        android:id="@+id/music"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/music" />

    <CheckBox
        android:id="@+id/game"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:checked="true"
        android:text="@string/game" />

    <CheckBox
        android:id="@+id/blogging"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/blogging" />

</LinearLayout>
```

[![Android CheckBox Example](/media/articles/351/Android-CheckBox-Example.png)](http://stacktips.com)

In the above layout class, we are using below strings

```xml
<resources>
    <string name="app_name">My Application</string>
    <string name="blogging">Write Blog</string>
    <string name="music">Listen Music</string>
    <string name="game">Play Games</string>
    <string name="submit">Submit</string>
    <string name="hint">What do you like do in your free time?</string>
</string>
</resources>
```

# Using CheckBox from Activity

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.Toast;

public class MainActivity extends Activity {
    private CheckBox blogging, game, music;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        blogging = (CheckBox) findViewById(R.id.blogging);
        game = (CheckBox) findViewById(R.id.game);
        music = (CheckBox) findViewById(R.id.music);
        music.setOnClickListener(checkboxClickListener);
        game.setOnClickListener(checkboxClickListener);
        blogging.setOnClickListener(checkboxClickListener);

        /* Set blogging by default */
        blogging.setChecked(true);

    }

    View.OnClickListener checkboxClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            boolean checked = ((CheckBox) view).isChecked();
            if (checked) {
                String text = null;
                switch (view.getId()){
                    case R.id.game:
                        text = "Play Game";
                        break;
                    case R.id.music:
                        text = "Listen Music";
                        break;
                    case R.id.blogging:
                        text="Write blog";
                        break;
                }
                Toast.makeText(MainActivity.this, text, Toast.LENGTH_LONG).show();
            }
        }
    };
}
```
