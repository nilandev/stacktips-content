---
id: 147
title: Android TextWatcher Example
slug: android-textwatcher-example
excerpt: In this tutorial we will show you how to use TextWatcher in Android with example. TextWatcher is used to keep watch on the EditText content while user inputs the data. It allows you to keep track on each character when entered on EditText.
difficulty: beginners
publishedDate: "2015-02-19T02:07:14.000Z"
updatedDate: "2025-09-16T23:05:27.989Z"
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

In this tutorial, we will show you how to use TextWatcher in Android for an example.

`TextWatcher` is used to keep watch on the [EditText](http://stacktips.com/android/edittext-validation-in-android-example "Edittext Validation in Android Example") content while user inputs the data. It allows you to keep track on each character when entered on EditText.

A Text Watcher is really helpful for scenarios like login/register screen validation. As an when user is entering the data, you can keep an eye on user input and notify early instead of waiting until user press submit button manually. Another great real-time example is Google search; it shows the user the real-time search suggestion while user entering data.

Implementing Text watcher is quite easy, you have to call `addTextChangedListener()` method and pass the reference to TextWatcher instance. You can override the following TextWatcher class method to take various actions when the content of EditText changes.

1.  `afterTextChanged (Editable s) -` This method is called when the text has been changed. Because any changes you make will cause this method to be called again recursively, you have to be watchful about performing operations here, otherwise, it might lead to infinite loop.
2.  `beforeTextChanged (CharSequence s, int start, int count, int after) -` This method is called to notify you that, within s, the count characters beginning at the start are about to be replaced by new text with long after. It is an error to attempt to make changes to s from this callback.
3.  `onTextChanged (CharSequence s, int start, int before, int count) -` This method is called to notify you that, within s, the count characters beginning at the start have just replaced old text that had long before. It is an error to attempt to make changes to s from this callback.

# Android TextWatcher Example

Lets us jump straight into the TextWatcher example in android. In this tutorial, we will create a simple EditField for entering a password, and the text watcher will show the same password in another TextView.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical"
    android:padding="10dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:paddingBottom="10dp"
        android:text="Enter your password and see the magic!!"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textStyle="bold" />

    <EditText
        android:id="@+id/password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Password"
        android:inputType="textPassword"
        android:padding="12dp">

        <requestFocus />
    </EditText>

    <TextView
        android:id="@+id/passwordHint"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/password"
        android:background="#ffd33a26"
        android:padding="5dp"
        android:text="* Not Entered"
        android:textColor="#fff" />
</LinearLayout>
```

# Using TextWatcher in Activity

```java
import android.app.Activity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends Activity {
    private EditText passwordEditText;
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /* Initializing views */
        passwordEditText = (EditText) findViewById(R.id.password);
        textView = (TextView) findViewById(R.id.passwordHint);
        textView.setVisibility(View.GONE);

        /* Set Text Watcher listener */
        passwordEditText.addTextChangedListener(passwordWatcher);
    }

    private final TextWatcher passwordWatcher = new TextWatcher() {
        public void beforeTextChanged(CharSequence s, int start, int count, int after) {

        }

        public void onTextChanged(CharSequence s, int start, int before, int count) {
            textView.setVisibility(View.VISIBLE);
        }

        public void afterTextChanged(Editable s) {
            if (s.length() == 0) {
                textView.setVisibility(View.GONE);
            } else{
                textView.setText("You have entered : " + passwordEditText.getText());
            }
        }
    };
}
```

# Output

[![Android TextWatcher Example](/media/articles/209/Android-TextWatcher-Example-620x579.png)](http://stacktips.com)
