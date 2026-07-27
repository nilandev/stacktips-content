---
id: 143
title: ListView Header Parallax with Sticky View in Android
slug: listview-header-parallax-with-sticky-view-in-android
excerpt: A quick Android example with code snippet to demonstrate ListView parallax effect with sticky header. In our previous tutorial, we saw Creating ListView Header Parallax Animation, now in this example we will go little further and make the list header parallax animation with an view stick to top when list is scrolled.
difficulty: beginners
publishedDate: "2015-06-23T22:25:58.000Z"
updatedDate: "2025-09-16T23:05:27.301Z"
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

A quick Android example with code snippet to demonstrate `[ListView](/articles/android-listview-tutorial)` parallax effect with sticky header. In our previous tutorial, we saw [Creating ListView Header Parallax Animation](/articles/how-to-create-listview-header-with-parallax-effect-in-android), now in this example we will go little further and make the list header parallax animation with an view stick to top when list is scrolled.  
You need to follow the following steps as described below to create the list view parallax effect.

The output of this example in the following attached video.

{{< youtube eyWDkwVnYxo >}}

## 1\. Declare Activity Layout

To begin with let us start declaring your activity layout. It is a bit tricky. Let us take an frame layout that hosts the hero image, sticky view and a ListView.

```xml
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:id="@+id/heroImageView"
        android:layout_width="match_parent"
        android:layout_height="250dp"
        android:background="@drawable/wallpaper"
        android:scaleType="fitCenter" />

    <ListView
        android:id="@+id/listView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:divider="#9E9E9E"
        android:dividerHeight="1dp"
        android:scrollbars="none"></ListView>

    <TextView
        android:id="@+id/stickyView"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:background="#222"
        android:gravity="center_vertical"
        android:paddingLeft="10dp"
        android:text="Heading1"
        android:textColor="#fff"
        android:textSize="20sp"
        android:textStyle="bold" />
</FrameLayout>
```

The following screenshot depicts how out activity layout is defined.  
[![How to Create ListView Parallax Effect with Sticky Header in Android](/media/articles/187/How-to-Create-ListView-Parallax-Effect-with-Sticky-Header-in-Android.png)](http://stacktips.com)

## 2\. Declare List Header Layout

Now declare the layout for list header. In this example, I have declared an [ImageView](/articles/android-imageview-example) inside [FrameLayout](/articles/android-framelayout-example). The header view is declared as follows.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <Space
        android:layout_width="match_parent"
        android:layout_height="250dp" />

    <Space
        android:id="@+id/stickyViewPlaceholder"
        android:layout_width="match_parent"
        android:layout_height="50dp" />

</LinearLayout>
```

Notice that in the above header layout,

-   We have declared `Space` objects. Android Space widget is subclass of View, used to occupy invisible, transparent space on the screen. You cannot apply any style, such as color, background etc.
-   The height of both Space objects are same as the height of hero image and sticky widget as declared in your activity layout.
-   These two invisible views will be useful to calculate the view position and will help to create the parallel effect.

## 3\. Declare List Row Layout

Declare another layout for your list view row. In this example, for sake of simplicity I have declared a simple `TextView`. You may design fancy list of your choice by declaring your own custom adapter.

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#FAFAFA"
    android:gravity="center_vertical"
    android:text="List Item"
    android:padding="8dp"
    android:minHeight="40dp"
    android:textColor="#222"/>
```

## 4\. Handle ListView Scroll Events

Following step will guide you with the necessary things required in your activity to create list view, add list header and implement parallax effect.

-   Implement `setOnScrollListener` for your list view to handle the user scroll event.
-   Calculate the position of the sticky header view according to the position of the first item in the ListView.
-   When the first item is already reached to top, you don’t need to re-position the sticky header view.
-   Set the hero image to scroll half of the amount that of ListView

```java
import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.AbsListView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import java.util.ArrayList;
import java.util.List;

/**
 * <p/>
 * Calculate the position of the sticky header view according to the
 * position of the first item in the ListView. When the first item is already
 * reached to top, you don't need to position the sticky header view.
 *
 * @author Nilanchala
 */
public class MainActivity extends ActionBarActivity {

    private TextView stickyView;
    private ListView listView;
    private View heroImageView;

    private View stickyViewSpacer;

    private int MAX_ROWS = 20;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /* Initialise list view, hero image, and sticky view */
        listView = (ListView) findViewById(R.id.listView);
        heroImageView = findViewById(R.id.heroImageView);
        stickyView = (TextView) findViewById(R.id.stickyView);

        /* Inflate list header layout */
        LayoutInflater inflater = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View listHeader = inflater.inflate(R.layout.list_header, null);
        stickyViewSpacer = listHeader.findViewById(R.id.stickyViewPlaceholder);

        /* Add list view header */
        listView.addHeaderView(listHeader);

        /* Handle list View scroll events */
        listView.setOnScrollListener(new AbsListView.OnScrollListener() {

            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {
            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {

                /* Check if the first item is already reached to top.*/
                if (listView.getFirstVisiblePosition() == 0) {
                    View firstChild = listView.getChildAt(0);
                    int topY = 0;
                    if (firstChild != null) {
                        topY = firstChild.getTop();
                    }

                    int heroTopY = stickyViewSpacer.getTop();
                    stickyView.setY(Math.max(0, heroTopY + topY));

                    /* Set the image to scroll half of the amount that of ListView */
                    heroImageView.setY(topY * 0.5f);
                }
            }
        });

        /* Populate the ListView with sample data */
        List<String> modelList = new ArrayList<>();
        for (int i = 0; i < MAX_ROWS; i++) {
            modelList.add("List item " + i);
        }

        ArrayAdapter adapter = new ArrayAdapter(this, R.layout.list_row, modelList);
        listView.setAdapter(adapter);
    }
}
```

## 5\. Download Complete Source Code

\[download url=”https://github.com/javatechig/Android-Parallax-ListView-Sticky” source=”GitHub”\]
