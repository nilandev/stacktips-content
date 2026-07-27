---
id: 261
title: Edittext Validation in Android Example
slug: edittext-validation-in-android-example
excerpt: This tutorial show you how to use EditText user interface widget in android and write validation for the inputs. In this example we will create an simple Signup form as attached in the screenshot below.
difficulty: beginners
publishedDate: "2014-01-15T13:00:06.000Z"
updatedDate: "2025-09-16T23:05:33.453Z"
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

This tutorial show you how to use EditText user interface widget in android and write validation for the inputs. In this example we will create an simple Signup form as attached in the screenshot below.

EditText widget in android allows us to enter data in UI like html web forms. It is an extends TextView and additional attributes that allows user to input values. It provides wide variety of input controls that enable select, cut, copy, paste of text into EditText.

### Android Layout XML file

Let us create an layout xml file with two EditText field one for entering email-id and other for password.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#F0F0F0"
    android:orientation="vertical" >

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:padding="10dp"
        android:text="@string/lbl_register"
        android:textAllCaps="true"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#176CEC"
        android:textStyle="bold" />

    <EditText
        android:id="@+id/editText_email"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#fff"
        android:ems="10"
        android:hint="@string/lbl_email_hint"
        android:inputType="textEmailAddress"
        android:padding="12dp" />

    <EditText
        android:id="@+id/editText_password"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="1dp"
        android:background="#fff"
        android:ems="10"
        android:hint="@string/lbl_password_hint"
        android:inputType="textPassword"
        android:padding="12dp" />

    <Button
        android:id="@+id/btn_signup"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="20dp"
        android:background="#176CEC"
        android:text="@string/lbl_btn_signup"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

</LinearLayout>
```

### Android Layout XML file.

```java
package com.javatechig;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.EditText;

public class MainActivity extends Activity {
	private EditText emailEditText;
	private EditText passEditText;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		emailEditText = (EditText) findViewById(R.id.editText_email);
		passEditText = (EditText) findViewById(R.id.editText_password);

		findViewById(R.id.btn_signup).setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View arg0) {

				final String email = emailEditText.getText().toString();
				if (!isValidEmail(email)) {
					emailEditText.setError("Invalid Email");
				}

				final String pass = passEditText.getText().toString();
				if (!isValidPassword(pass)) {
					passEditText.setError("Invalid Password");
				}

			}
		});
	}

	// validating email id
	private boolean isValidEmail(String email) {
		String EMAIL_PATTERN = "^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@"
				+ "[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$";

		Pattern pattern = Pattern.compile(EMAIL_PATTERN);
		Matcher matcher = pattern.matcher(email);
		return matcher.matches();
	}

	// validating password with retype password
	private boolean isValidPassword(String pass) {
		if (pass != null && pass.length() > 6) {
			return true;
		}
		return false;
	}
}
```

### Output

[![Validate EditText in Android ](/media/articles/346/Untitled.png)](http://stacktips.com)
