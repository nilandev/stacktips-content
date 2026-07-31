---
id: 272
title: Listing all SDCard Filenames with extensions in android
slug: listing-all-sdcard-filenames-with-extensions-in-android
excerpt: Here in this example we will see how to list all files present in SDCard of your android device. In the below example it searches for all of the SDCard folders and lists all of the images available. You may extend this example to list other file formats
difficulty: beginners
publishedDate: "2013-11-01T02:14:26.000Z"
updatedDate: "2025-09-16T23:05:33.932Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-list-sdcard-files
  - android-file-listing-recursive
  - android-external-storage-files
  - list-image-files-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Here in this example we will see how to list all files present in SDCard of your android device. In the below example it searches for all of the SDCard folders and lists all of the images available. You may extend this example to list other file formats.

**Steps**

1.  First let us create a new Android project and name it as you like. This example uses minSdkVersion=8 and targetSdkVersion=”18″ and tested over HTC Onex (Android 4.2) device.
2.  Make sure, you have SDCard with some files to list.

#### Android Activity Layout (activity\_main.xml)

```xml
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/scrollView"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent" >

    <LinearLayout
        android:id="@+id/view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:padding="8dp" >
    </LinearLayout>

</ScrollView>
```

From the above code snippet, you can observe that I have taken a ScrollView and a LinearLayout as its child. This LinearLayout will hold all of the TextViews that shows filenames.

#### Android Activity (MainActivity.java)

```java
package com.javatechig.listallfiles;

import java.io.File;
import java.util.ArrayList;
import com.example.listallfiles.R;
import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Environment;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends Activity {

    private File root;
    private ArrayList<File> fileList = new ArrayList<File>();
    private LinearLayout view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        view = (LinearLayout) findViewById(R.id.view);

        //getting SDcard root path
        root = new File(Environment.getExternalStorageDirectory()
                .getAbsolutePath());
        getfile(root);

        for (int i = 0; i < fileList.size(); i++) {
            TextView textView = new TextView(this);
            textView.setText(fileList.get(i).getName());
            textView.setPadding(5, 5, 5, 5);

            System.out.println(fileList.get(i).getName());

            if (fileList.get(i).isDirectory()) {
                textView.setTextColor(Color.parseColor("#FF0000"));
            }
            view.addView(textView);
        }

    }

    public ArrayList<File> getfile(File dir) {
        File listFile[] = dir.listFiles();
        if (listFile != null && listFile.length > 0) {
            for (int i = 0; i < listFile.length; i++) {

                if (listFile[i].isDirectory()) {
                    fileList.add(listFile[i]);
                    getfile(listFile[i]);

                } else {
                    if (listFile[i].getName().endsWith(".png")
                            || listFile[i].getName().endsWith(".jpg")
                            || listFile[i].getName().endsWith(".jpeg")
                            || listFile[i].getName().endsWith(".gif"))

                    {
                        fileList.add(listFile[i]);
                    }
                }

            }
        }
        return fileList;
    }

}
```

#### Output

[![Example Listing All Files In Android](/media/articles/359/Example-Listing-All-Files-In-Android.gif)](http://stacktips.com)
