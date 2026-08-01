---
id: 297
title: Starting an Android Activity for Result
slug: starting-an-activity-for-a-result
excerpt: In Android user interface is displayed through an activity. Activity is used to represent the data to user and allows user interaction. In an android application, we can have multiple activities and that can interact with each other. This tutorial I will explain more about, how to switch between one Activity to another.
difficulty: beginners
publishedDate: "2013-08-25T05:27:56.000Z"
updatedDate: "2025-09-16T23:05:34.934Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - startactivityforresult-android
  - android-activity-result
  - android-intent-communication
  - onactivityresult-callback
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In Android user interface is displayed through an activity. Activity is used to represent the data to user and allows user interaction. In an android application, we can have multiple activities and that can interact with each other. This tutorial I will explain more about, how to switch between one Activity to another.

[![Starting an activity for a result](/media/articles/386/Starting-an-activity-for-a-result.gif)](http://stacktips.com)

# 1. Starting An Activity

We can call one activity from another by using Intents. Intent is one of the main building block which provides an abstract description of an operation to be performed. `startActivity(intent)` method belongs to your Activity class and can be used for starting a new activity.

```java
  Intent intent = new Intent(context, YourActivityClass.class);
  startActivity(intent);
```

# 2. Starting Activity for Result

Starting another activity doesn’t have to be one-way. You can also start another activity and receive a result back. To receive a result, call `startActivityForResult()` instead of startActivity(). However, the activity that responds must be designed to return a result. When it does, it sends the result as another Intent object. Your activity receives it in the `onActivityResult()` callback.

Note: You can use explicit or implicit intents when you call startActivityForResult(). When starting one of your own activities to receive a result, you should use an explicit intent to ensure that you receive the expected result.

```java
 Intent intent = new Intent(this, SecondActivity.class);
 startActivityForResult(intent, requestCode);
```

requestCode is an integer argument, that identifies your request. When you receive the result Intent, the callback provides the same request code so that your app can properly identify the result and determine how to handle it.

# 3. Passing Result Back

In secondActivity if you want to send back data:

```java
 Intent returnIntent = new Intent();
 returnIntent.putExtra("result",result);
 setResult(RESULT_OK, returnIntent);
 finish();
```

If you don’t want to return data:

```java
 Intent returnIntent = new Intent();
 setResult(RESULT_CANCELED, returnIntent);
 finish();
```

# 4. Receive the Result

When Second Acivity is done with its work and returns the result back, the caller activity’s `onActivityResult()` method gets invoked.

requestCode: The request code you passed to startActivityForResult().  
`resultCode`: A result code specified by the second activity. This is either `RESULT_OK` if the operation was successful or `RESULT_CANCELED` if the user backed out or the operation failed for some reason.  
`resultIntent`: An Intent that carries the result data.

```java
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
super.onActivityResult(requestCode, resultCode, data);
    if (requestCode == 1){
        if(resultCode == RESULT_OK){
             //here is your result
            String result=data.getStringExtra("result");
            Toast.makeText(getApplicationContext(), result, Toast.LENGTH_SHORT).show();
        }
        if (resultCode == RESULT_CANCELED) {
            //Write your code if there's no result
            Toast.makeText(getApplicationContext(), "Nothing Returned!", Toast.LENGTH_SHORT).show();
        }
    }
}
```

# 5. Example

In this example, we will develop an application with two activities, the first activity will call the second activity for result. The second activity has two buttons; One sends response as “Smile Back” and other doesn’t returns any response.

**activity\_first.xml**

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="fill_parent"
    android:background="@drawable/bg"
    android:orientation="vertical"
    android:padding="10dp"
    tools:context=".FirstActivity" >

<TextView
    android:id="@+id/textView1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_centerHorizontal="true"
    android:layout_marginTop="10dp"
    android:text="Activity 1"
    android:textAppearance="?android:attr/textAppearanceLarge" />

<Button
    android:id="@+id/start_button"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:layout_centerHorizontal="true"
    android:background="@android:color/holo_blue_dark"
    android:text="Start Activity 2" />

</RelativeLayout>
```

**activity\_second.xml**

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="fill_parent"
    android:background="@drawable/bg"
    android:orientation="vertical"
    android:padding="10dp">

    <TextView
        android:id="@+id/textView1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="10dp"
        android:text="Activity 2"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_marginTop="50dp"
        android:orientation="horizontal"
        android:weightSum="2" >

        <Button
            android:id="@+id/cancel_button"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:layout_margin="2dp"
            android:layout_weight="1"
            android:background="@android:color/holo_blue_dark"
            android:text="Cancel" />

        <Button
            android:id="@+id/return_button"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:layout_margin="2dp"
            android:layout_weight="1"
            android:background="@android:color/holo_blue_dark"
            android:text="Return Results" />

    </LinearLayout>
</RelativeLayout>
```

**FirstActivity.java**

```java
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.Toast;
import android.app.Activity;
import android.content.Intent;

public class FirstActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);

        Button start = (Button) findViewById(R.id.start_button);
        start.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                Intent intent = new Intent(FirstActivity.this, SecondActivity.class);
                startActivityForResult(intent, 1);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == 1){
            if(resultCode == RESULT_OK){
                String result=data.getStringExtra("result");
                Toast.makeText(getApplicationContext(), result, Toast.LENGTH_SHORT).show();
            }
            if (resultCode == RESULT_CANCELED) {
                //Write your code if there's no result
                Toast.makeText(getApplicationContext(), "Nothing Returned!", Toast.LENGTH_SHORT).show();
            }
        }
    }

}
```

**SecondActivity.java**

```java
package com.example.activitytest;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class SecondActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        Button returnResult = (Button) findViewById(R.id.return_button);
        returnResult.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                // returing result back
                Intent resultIntent = new Intent();
                resultIntent.putExtra("result", "Getting Smile Back!!");
                setResult(RESULT_OK, resultIntent);
                finish();

                // if you don't want to return any result
                // setResult(RESULT_CANCELED, resultIntent);
            }
        });

        Button back = (Button) findViewById(R.id.cancel_button);
        back.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                // if you don't want to return any result
                Intent resultIntent = new Intent();
                setResult(RESULT_CANCELED, resultIntent);
                finish();
            }
        });
    }
}
```

# 6. Download Complete Example

Here you can download complete eclipse project source code from GitHub.

[Download source](https://github.com/javatechig/javatechig-android-ui/tree/master/ActivityForResults)
