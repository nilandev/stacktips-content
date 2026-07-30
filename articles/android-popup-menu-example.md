---
id: 171
title: Android Popup Menu Example
slug: android-popup-menu-example
excerpt: In example explains how to create Popup menu in android. Popup menu is used to display the global actions. Popup menu is an overflow menu like Spinner actions. PopupMenu is available from API level 11 (Android 3.0).
difficulty: beginners
publishedDate: "2014-01-18T11:47:43.000Z"
updatedDate: "2025-09-16T23:05:33.227Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - blog
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In example explains how to create Popup menu in android. Popup menu is used to display the global actions. Popup menu is an overflow menu like Spinner actions. PopupMenu is available from API level 11 (Android 3.0).

**activity\_main.xml**

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#fcfcfc" >

    <Button
        android:id="@+id/btn_click"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:background="#176CEC"
        android:text="SHOW POPUP"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

</RelativeLayout>
```

**popup\_menu.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

    <item
        android:id="@+id/item_movies"
        android:showAsAction="ifRoom|withText"
        android:title="Movies"
        android:visible="true"/>
    <item
        android:id="@+id/item_music"
        android:showAsAction="ifRoom|withText"
        android:title="Music"
        android:visible="true"/>
    <item
        android:id="@+id/item_comedy"
        android:showAsAction="ifRoom|withText"
        android:title="Comedy"
        android:visible="true"/>

</menu>
```

**PopMenuActivity.java**

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.PopupMenu;
import android.widget.PopupMenu.OnMenuItemClickListener;
import android.widget.Toast;

public class PopMenuActivity extends Activity implements OnMenuItemClickListener {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.btn_click).setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                PopupMenu popupMenu = new PopupMenu(PopMenuActivity.this, view);
                popupMenu.setOnMenuItemClickListener(PopMenuActivity.this);
                popupMenu.inflate(R.menu.popup_menu);
                popupMenu.show();
            }
        });
    }

    public boolean onMenuItemClick(MenuItem item) {
        switch (item.getItemId()) {
        case R.id.item_comedy:
            Toast.makeText(this, "Comedy Clicked", Toast.LENGTH_SHORT).show();
            return true;
        case R.id.item_movies:
            Toast.makeText(this, "Movies Clicked", Toast.LENGTH_SHORT).show();
            return true;
        case R.id.item_music:
            Toast.makeText(this, "Music Clicked", Toast.LENGTH_SHORT).show();
            return true;
        }
    }
}
```

**Output**  
[![Popup Example in Android](/media/articles/340/Popup-Example-in-Android-620x451.png)](http://stacktips.com)
