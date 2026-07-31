---
id: 312
title: Android TextToSpeech Example
slug: android-texttospeech-example
excerpt: Android is called one among the very advanced operating system in providing cool features out of box. It supports converting Text-To-Speech (TTS) or also known as speech synthesis. It is introduced from android 1.6, API level 4. Text-To-Speech enables your Android device to speak text of different languages.
difficulty: beginners
publishedDate: "2013-06-11T07:31:47.000Z"
updatedDate: "2025-09-16T23:05:36.356Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-texttospeech
  - tts-android-example
  - android-speech-synthesis
course: null
displayOrder: 0
seo: 
  metaTitle: "Android TextToSpeech Example: Convert Text to Speech"
  metaDescription: "Learn how to implement Android TextToSpeech (TTS) with a reusable TTSManager class, handle language initialization, and queue multiple utterances."
  metaKeywords: null
---

Android operating system provides developers some of the cool API’s such as Text to speech API. converting Text-To-Speech (TTS) or also known as “speech synthesis”. Text-To-Speech enables your Android device to speak text of different languages.

1.  It is introduced from android 1.6, API Level 4. All of the TTS API’s are available in `android.speech.tts.TextToSpeech` class.
2.  TTS supports various languages like English, French, German, Italian and Spanish, etc. and some additional languages depending on the region.
3.  You have to pre-configure the Text-To-Speech engine with which language to speak. The initial language configuration is important to initialize the specific voice dictionary.

Following section of this tutorial will teach you the steps required to implement TTS in your Android application.

# TextToSpeech Example

Before you go ahead implementing the Text to Speech, you must note the following points

1.  A TextToSpeech instance can only be used to synthesize text once it has completed its initialization.
2.  The constructor of TextToSpeech class takes `TextToSpeech.OnInitListener` parameter. You must implement the TextToSpeech.OnInitListener to be notified, when the TTS is initialized.
3.  Call `speak()` method on TextToSpeech instance for making Text to Speech to work.
4.  The speak() method accepts three parameter, a String that accepts text, an integer queue mode and Bundle. The queue mode can be either `QUEUE_FLUSH` or `QUEUE_ADD`.

In this example, we have an simple activity with an EditText and button, that allows user to enter text for converting into Speech. A screenshot of output is shown below

[![Android TextToSpeech Example](/media/articles/421/Android-TextToSpeech-Example.png)](http://stacktips.com/android/android-example-to-convert-text-to-speech/attachment/android-texttospeech-example)

# Define Activity Layout

As described above, for the sake of simplicity we will be creating the simple layout with an EditText and a Button.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:layout_alignParentBottom="true"
    android:layout_marginBottom="10dp"
    android:orientation="vertical"
    android:padding="20dp" >

    <EditText
        android:id="@+id/input_text"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="20dp"
        android:ems="10"
        android:hint="Enter your command"
        android:minLines="2"
        android:padding="10dp" >
        <requestFocus />
    </EditText>

    <Button
        android:id="@+id/speak_now"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Speak Now" />

</LinearLayout>
```

# TextToSpeech Manager

In this example, we will be crating a generic class named `TTSManager`, which will encapsulate all of the logic to implement TextToSpeech in Android. You can reuse the class and use it anywhere you like.

```java
import android.content.Context;
import android.speech.tts.TextToSpeech;
import android.util.Log;
import java.util.Locale;

/**
 * Created by Nilanchala
 * http://www.stacktips.com
 */
public class TTSManager {

    private TextToSpeech mTts = null;
    private boolean isLoaded = false;

    public void init(Context context) {
        try {
            mTts = new TextToSpeech(context, onInitListener);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private TextToSpeech.OnInitListener onInitListener = new TextToSpeech.OnInitListener() {
        @Override
        public void onInit(int status) {
                if (status == TextToSpeech.SUCCESS) {
                    int result = mTts.setLanguage(Locale.US);
                    isLoaded = true;

                    if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                        Log.e("error", "This Language is not supported");
                    }
                } else {
                    Log.e("error", "Initialization Failed!");
                }
        }
    };

    public void shutDown() {
        mTts.shutdown();
    }

    public void addQueue(String text) {
        if (isLoaded)
            mTts.speak(text, TextToSpeech.QUEUE_ADD, null);
        else
            Log.e("error", "TTS Not Initialized");
    }

    public void initQueue(String text) {

        if (isLoaded)
            mTts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
        else
            Log.e("error", "TTS Not Initialized");
    }
}
```

**How it works**

1.  To make the TTS engine to work, the basic configuration is the language that TTS will initialize. You can set the language just by calling setLanguage(locale) method.
2.  Before we call `setLanguage()`, you need to check if the specified locale is supported. To query whether a specific Locale is supported, you can use `isLanguageAvailable()`, which returns the level of support for the given Locale.
3.  The TTS engine manages a global queue of all the entries to synthesize, which are also known as “utterances”.
4.  Each TextToSpeech instance can manage its own queue in order to control which utterance will interrupt the current one and which one is simply queued.

# Making your app to speak

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends Activity {
    private Button speakNowButton;
    private EditText editText;
    TTSManager ttsManager = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ttsManager = new TTSManager();
        ttsManager.init(this);

        editText = (EditText) findViewById(R.id.input_text);
        speakNowButton = (Button) findViewById(R.id.speak_now);
        speakNowButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View arg0) {
                String text = editText.getText().toString();
                ttsManager.initQueue(text);
            }
        });
    }

    /**
     * Releases the resources used by the TextToSpeech engine.
     */
    @Override
    public void onDestroy() {
        super.onDestroy();
        ttsManager.shutDown();
    }
}
```

# Queue multiple texts

If you have multiple text to be queued for TTS engine, you may do it by calling speak() method with `TextToSpeech.QUEUE_ADD` flag.

```java
String myText1 = "Hi";
String myText2 = "Hello";
ttsManager.initQueue(myText1);
//adding it to queue
ttsManager.addQueue(myText2);
```

**How it works**

1.  Here in this example, the call to the first speak() method would interrupt whatever was currently being synthesized and the queue is flushed and the new utterance is queued, which places it at the head of the queue.
2.  On the second call to speak() method, the utterance is queued and will be played after myText1 has completed.
