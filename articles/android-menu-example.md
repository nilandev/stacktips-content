---
id: 305
title: Android Menu Example
slug: android-menu-example
excerpt: This tutorial explains how to create menu in android with example. Menus are a common user interface component…
difficulty: beginners
publishedDate: "2013-08-03T05:50:00.000Z"
updatedDate: "2025-09-16T23:05:35.539Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-options-menu
  - onCreateOptionsMenu
  - android-menu-xml
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Menu Example: Options Menu with XML and Java"
  metaDescription: "Learn how to create an Android options menu using XML declarations, inflate it with onCreateOptionsMenu, and handle item clicks in your activity."
  metaKeywords: null
---

This tutorial explains how to create menu in android with example.

Menus are a common user interface component in many types of applications. To provide a familiar and consistent user experience, you should use the Menu APIs to present user actions and other options in your activities.

# Declare Menu Items in XML

You can create android menus in two ways. One by using the code or using XML declaration. In this tutorial we are crating the menu items using the declarative approach from xml.

1.  Create a new folder named `menu` inside your project resources directory. This folder will contain all the menu declarative XML files.
2.  Now let us add a new xml file named `menu_myactivity.xml` file, into menu resource directory and paste the following code snippets.

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    tools:context=".MainActivity">
    <item
        android:id="@+id/mapMenu"
        android:icon="@drawable/menu_map"
        android:title="Map" />
    <item
        android:id="@+id/favMenu"
        android:icon="@drawable/menu_favourite"
        android:title="Favorite" />
    <item
        android:id="@+id/listMenu"
        android:icon="@drawable/menu_list"
        android:title="List" />
    <item
        android:id="@+id/settingsMenu"
        android:icon="@drawable/menu_settings"
        android:title="Settings" />
</menu>
```

Notice that in the menu declaration xml, we are using some of the drawable images. Here you need to add your own images to drawable directory.

**Note:** I have used few images for menu items. Copy your images under drawable folder of project. For more details on icon size, Refer [Guides for App Designers!](http://developer.android.com/guide/practices/ui_guidelines/icon_design_menu.html)

# Using Menu from Android Activity

Implement the `onCreateContextMenu()` method from your android Activity class and inflate the menu items created in the `menu_myactivity.xml`. We can also override `OnOptionsItemSelected` method to handle the events while user presses the menu option in android.

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.ViewGroup.LayoutParams;
import android.widget.TextView;
import android.widget.Toast;

public class MenuActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        TextView text = new TextView(this);
        text.setText("Press the menu button to get list of menus.");
        addContentView(text, new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_myactivity, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        Toast.makeText(getApplicationContext(),    item.getTitle() + " selected", Toast.LENGTH_SHORT).show();

        switch (item.getItemId()) {
        case R.id.mapMenu:
            // do something
            break;
        case R.id.favMenu:
            // do something
            break;
        case R.id.listMenu:
            // do something
            break;
        case R.id.settingsMenu:
            // do something
            break;
        }
        return true;
    }

}
```

# Demo

Run the application, you will notice the result as shown in the screenshot below.

[![](/media/articles/398/android_menu_sample.png)](http://1.bp.blogspot.com/-zuOxwEk7Mys/UBvBzAwSWFI/AAAAAAAAAb0/1R6PWTpRri8/s1600/android_menu_sample.png)
