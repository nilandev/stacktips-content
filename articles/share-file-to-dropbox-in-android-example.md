---
id: 172
title: Share File to Dropbox in Android Example
slug: share-file-to-dropbox-in-android-example
excerpt: In this example we will see how to use Dropbox API to share Share file to Dropbox in from your native Android application.
difficulty: beginners
publishedDate: "2014-01-18T06:10:20.000Z"
updatedDate: "2025-09-16T23:05:33.259Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - dropbox-sdk-android
  - android-file-upload-dropbox
  - dropbox-api-integration
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we will see how to use Dropbox API to share file to Dropbox in from your native Android application.

[![Share file to Dropbox in Android Example](/media/articles/341/Share-file-to-Dropbox-in-Android-Example-e1435937309632.png)](http://stacktips.com)

# 1\. Create App on Dropbox

For integrating Dropbox services to your Android application, you need to use the Dropbox SDK. The SDK allows you to authenticate and share file on Dropbox. Before we begin, we need to download official [Dropbox API](https://www.dropbox.com/developers/core/sdks/android "https://www.dropbox.com/developers/core/sdks/android") from the link. Once download is complete, extract the file on your computer drive. Notice that the downloaded Zip file will have sample and library.

Now, let us go ahead and create a new app on Dropbox developer console. Visit [Dropbox developer console](https://www.dropbox.com/developers/apps "https://www.dropbox.com/developers/apps") and create a new application. Once the application is setup, you will get an **App key** and **App Secret** that is required for integration.

# 2\. Using Dropbox SDK

Now do the following changes to your application manifest file. Put the following code before </application> tag. Make sure you are using your own AppID obtained from Facebook developer console.

```xml
<activity
            android:name="com.dropbox.client2.android.AuthActivity"
            android:configChanges="orientation|keyboard"
            android:launchMode="singleTask" >
            <intent-filter>
                <!-- Change this to be db- followed by your app key -->
                <data android:scheme="db-yatqpqyb9lsh0tu" />

                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.BROWSABLE" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
        </activity>
```

> **Note:** Make sure that you have to declare android.permission.INTERNET permission in your application manifest file.

# 3\. Declare Activity Layout

Now define layout for your activity class. In this example, We have three sample buttons one for login/logout , upload and view files.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="20dp"
    android:gravity="center_horizontal"
    android:orientation="vertical" >

    <Button
        android:id="@+id/dropbox_login"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:background="#176CEC"
        android:text="Login to Dropbox"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

    <Button
        android:id="@+id/upload_file"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:background="#176CEC"
        android:text="Upload File to Dropbox"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

    <Button
        android:id="@+id/list_files"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:background="#176CEC"
        android:text="List All Files"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

    <ScrollView
        android:layout_width="fill_parent"
        android:layout_height="match_parent"
        android:layout_margin="10dp" >

        <LinearLayout
            android:id="@+id/container_files"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical" >
        </LinearLayout>
    </ScrollView>
</LinearLayout>
```

# 4\. Activity Java Code

```java
package com.javatechig.dropboxsample;

import java.util.ArrayList;
import android.app.Activity;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import com.dropbox.client2.DropboxAPI;
import com.dropbox.client2.android.AndroidAuthSession;
import com.dropbox.client2.session.AccessTokenPair;
import com.dropbox.client2.session.AppKeyPair;
import com.dropbox.client2.session.Session.AccessType;
import com.dropbox.client2.session.TokenPair;

public class DropboxActivity extends Activity implements OnClickListener {
    private DropboxAPI<AndroidAuthSession> dropbox;
    private final static String FILE_DIR = "/DropboxSample/";
    private final static String DROPBOX_NAME = "dropbox_prefs";
    private final static String ACCESS_KEY = "yatqpqyb9lsh0tu";
    private final static String ACCESS_SECRET = "9siqdkoo44y3jlr";
    private boolean isLoggedIn;
    private Button logIn;
    private Button uploadFile;
    private Button listFiles;
    private LinearLayout container;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dropbox);

        logIn = (Button) findViewById(R.id.dropbox_login);
        logIn.setOnClickListener(this);
        uploadFile = (Button) findViewById(R.id.upload_file);
        uploadFile.setOnClickListener(this);
        listFiles = (Button) findViewById(R.id.list_files);
        listFiles.setOnClickListener(this);
        container = (LinearLayout) findViewById(R.id.container_files);

        loggedIn(false);
        AndroidAuthSession session;
        AppKeyPair pair = new AppKeyPair(ACCESS_KEY, ACCESS_SECRET);

        SharedPreferences prefs = getSharedPreferences(DROPBOX_NAME, 0);
        String key = prefs.getString(ACCESS_KEY, null);
        String secret = prefs.getString(ACCESS_SECRET, null);

        if (key != null && secret != null) {
            AccessTokenPair token = new AccessTokenPair(key, secret);
            session = new AndroidAuthSession(pair, AccessType.APP_FOLDER, token);
        } else {
            session = new AndroidAuthSession(pair, AccessType.APP_FOLDER);
        }
        dropbox = new DropboxAPI<AndroidAuthSession>(session);
    }

    @Override
    protected void onResume() {
        super.onResume();

        AndroidAuthSession session = dropbox.getSession();
        if (session.authenticationSuccessful()) {
            try {
                session.finishAuthentication();
                TokenPair tokens = session.getAccessTokenPair();
                SharedPreferences prefs = getSharedPreferences(DROPBOX_NAME, 0);
                Editor editor = prefs.edit();
                editor.putString(ACCESS_KEY, tokens.key);
                editor.putString(ACCESS_SECRET, tokens.secret);
                editor.commit();
                loggedIn(true);
            } catch (IllegalStateException e) {
                Toast.makeText(this, "Error during Dropbox authentication",
                        Toast.LENGTH_SHORT).show();
            }
        }
    }

    public void loggedIn(boolean isLogged) {
        isLoggedIn = isLogged;
        uploadFile.setEnabled(isLogged);
        listFiles.setEnabled(isLogged);
        logIn.setText(isLogged ? "Log out" : "Log in");
    }

    private final Handler handler = new Handler() {
        public void handleMessage(Message msg) {
            ArrayList<String> result = msg.getData().getStringArrayList("data");
            for (String fileName : result) {
                Log.i("ListFiles", fileName);
                TextView tv = new TextView(DropboxActivity.this);
                tv.setText(fileName);
                container.addView(tv);
            }
        }
    };

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
        case R.id.dropbox_login:
            if (isLoggedIn) {
                dropbox.getSession().unlink();
                loggedIn(false);
            } else {
                dropbox.getSession().startAuthentication(DropboxActivity.this);
            }

            break;
        case R.id.list_files:
            ListDropboxFiles list = new ListDropboxFiles(dropbox, FILE_DIR,
                    handler);
            list.execute();
            break;
        case R.id.upload_file:
            UploadFileToDropbox upload = new UploadFileToDropbox(this, dropbox,
                    FILE_DIR);
            upload.execute();
            break;
        default:
            break;
        }
    }
}
```

# 5\. Upload File to Dropbox

```java
package com.javatechig.dropboxsample;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import android.content.Context;
import android.os.AsyncTask;
import android.widget.Toast;
import com.dropbox.client2.DropboxAPI;
import com.dropbox.client2.exception.DropboxException;

public class UploadFileToDropbox extends AsyncTask<Void, Void, Boolean> {

    private DropboxAPI<?> dropbox;
    private String path;
    private Context context;

    public UploadFileToDropbox(Context context, DropboxAPI<?> dropbox,
            String path) {
        this.context = context.getApplicationContext();
        this.dropbox = dropbox;
        this.path = path;
    }

    @Override
    protected Boolean doInBackground(Void... params) {
        final File tempDir = context.getCacheDir();
        File tempFile;
        FileWriter fr;
        try {
            tempFile = File.createTempFile("file", ".txt", tempDir);
            fr = new FileWriter(tempFile);
            fr.write("Sample text file created for demo purpose. You may use some other file format for your app ");
            fr.close();

            FileInputStream fileInputStream = new FileInputStream(tempFile);
            dropbox.putFile(path + "textfile.txt", fileInputStream,
                    tempFile.length(), null, null);
            tempFile.delete();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (DropboxException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    protected void onPostExecute(Boolean result) {
        if (result) {
            Toast.makeText(context, "File Uploaded Sucesfully!",
                    Toast.LENGTH_LONG).show();
        } else {
            Toast.makeText(context, "Failed to upload file", Toast.LENGTH_LONG)
                    .show();
        }
    }
}
```

# 6\. List Dropbox Files

```java
package com.javatechig.dropboxsample;

import java.util.ArrayList;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import com.dropbox.client2.DropboxAPI;
import com.dropbox.client2.DropboxAPI.Entry;
import com.dropbox.client2.exception.DropboxException;

public class ListDropboxFiles extends AsyncTask<Void, Void, ArrayList<String>> {

    private DropboxAPI<?> dropbox;
    private String path;
    private Handler handler;

    public ListDropboxFiles(DropboxAPI<?> dropbox, String path, Handler handler) {
        this.dropbox = dropbox;
        this.path = path;
        this.handler = handler;
    }

    @Override
    protected ArrayList<String> doInBackground(Void... params) {
        ArrayList<String> files = new ArrayList<String>();
        try {
            Entry directory = dropbox.metadata(path, 1000, null, true, null);
            for (Entry entry : directory.contents) {
                files.add(entry.fileName());
            }
        } catch (DropboxException e) {
            e.printStackTrace();
        }

        return files;
    }

    @Override
    protected void onPostExecute(ArrayList<String> result) {
        Message msgObj = handler.obtainMessage();
        Bundle b = new Bundle();
        b.putStringArrayList("data", result);
        msgObj.setData(b);
        handler.sendMessage(msgObj);

    }
}

```
