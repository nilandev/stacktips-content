---
id: 31
title: Convert Speech to Text in Android Application
slug: speech-to-text-in-android
excerpt: Many of the cool Android features are remained untouched by app developers. For example, Android SDK has the…
difficulty: beginners
publishedDate: "2017-01-30T13:32:23.000Z"
updatedDate: "2025-09-16T23:05:21.524Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/advance-android-tutorials/tree/master/android-texttospeech"
featured: false
thumbnail: null
topics: 
  - php
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Many of the cool Android features are remained untouched by app developers. For example, Android SDK has the capabilities to seamlessly integrate the user speech recognition services to turn speech to into text. Apps like Google Keep, Any.DO uses speech to text conversion feature quite creatively. In today’s world, big players like Google, Microsoft, and Apple are betting big on voice assistance software like Google voice command, Cortana, and Siri. This shows how serious and powerful the feature is.

Android natively provides converting [Text to Speech](/articles/android-texttospeech-example) and Speech to Text feature, so why not to use it in our app! In this tutorial, we will show you how to integrate Android’s Speech to Text API in your Android app. This simple application will record the user’s voice, convert it into text and display on Android Screen.

As soon as a user say something, Android will recognize his/her voice and convert it into text. It will do it through [`RecognizerIntent`](https://developer.android.com/reference/android/speech/RecognizerIntent.html). You do not require any internet connection to use the voice to text service. It will work in Offline mode.

Without much of a fuss, let us now proceed with the example.

### Pre-requisites:

-   [Android Studio](/articles/android-studio-features) IDE on your PC or Mac.
-   This App doesn’t support Emulator. So you need an Android Smartphone or Tablet.
-   Basic knowledge of Android app lifecycle, knowledge of building UI layouts.

### Create New Android Project

1.  Open Android Studio and create a new project **Speech to Text** and company domain application.example.com (We have used our own company domain i.e stacktips.com).
2.  Click Next and choose Min SDK, we have kept the default value. Again Click Next and Choose **Blank Activity**.
3.  Choose the Activity as **MainActivity** and click next.
4.  Leave all other things as default and Click Finish.

A new project will be created and gradle will resolve all the dependencies.

### Activity Layout

Let us add an [ImageButton](/articles/android-button-example) representing a mic, and a [TextView](/articles/android-textview-example) to display the converted text in it. The TextView is wrapped inside a [ScrollView](/articles/android-scrollview-example) for allowing longer scrollable content.

**activity\_main.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="com.stacktips.speechtotext.MainActivity">

    <ScrollView
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_above="@+id/btnSpeakContainer"
        android:layout_alignParentTop="true"
        android:layout_marginBottom="20dp"
        android:padding="20dp">

        <TextView
            android:id="@+id/voiceInput"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
    </ScrollView>

    <LinearLayout
        android:id="@+id/btnSpeakContainer"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:background="#f5f5f5"
        android:gravity="center_horizontal"
        android:orientation="vertical"
        android:padding="20dp">

        <ImageButton
            android:id="@+id/btnSpeak"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:background="@null"
            android:padding="16dp"
            android:scaleType="fitCenter"
            android:src="@mipmap/ic_microphone_2" />

        <TextView
            android:id="@+id/textView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@id/btnSpeak"
            android:layout_margin="10dp"
            android:text="@string/hint" />
    </LinearLayout>
</RelativeLayout>

```

### Inside Android Activity

This is the main part of voice recognition app where we will user `RecognizerIntent` to convert speech into text. Add following code in MainActivity.java:

**MainActivity.java**

```java
package com.stacktips.speechtotext;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import java.util.ArrayList;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    private static final int REQ_CODE_SPEECH_INPUT = 100;
    private TextView mVoiceInputTv;
    private ImageButton mSpeakBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mVoiceInputTv = (TextView) findViewById(R.id.voiceInput);
        mSpeakBtn = (ImageButton) findViewById(R.id.btnSpeak);
        mSpeakBtn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                startVoiceInput();
            }
        });
    }

    private void startVoiceInput() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Hello, How can I help you?");
        try {
            startActivityForResult(intent, REQ_CODE_SPEECH_INPUT);
        } catch (ActivityNotFoundException a) {

        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case REQ_CODE_SPEECH_INPUT: {
                if (resultCode == RESULT_OK && null != data) {
                    ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    mVoiceInputTv.setText(result.get(0));
                }
                break;
            }

        }
    }
}

```

In the above code, we are triggering an Intent named `RecognizerIntent` which asks for speech input and then sends it through speech recognizer. It does it through `ACTION_RECOGNIZE_SPEECH`. If request code is `REQ_CODE_SPEECH_INPUT` then corresponding text is written in output screen.

Let us now build and run this example.

After you tap the Mic button, second screen will appear that will ask you to speak something. Now if you speak anything, it will be shown on screen.
