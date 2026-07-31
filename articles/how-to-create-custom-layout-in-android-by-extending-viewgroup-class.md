---
id: 132
title: How to Create Custom Layout in Android by Extending ViewGroup Class
slug: how-to-create-custom-layout-in-android-by-extending-viewgroup-class
excerpt: A ViewGroup in Android a special view that can contain other Views. A ViewGroup can contain one or multiple child.This post will help you to deal with creating a custom Layout manager class TagLayout that will be used to display the list of tags as shown in the following screenshot.
difficulty: beginners
publishedDate: "2015-08-03T15:40:57.000Z"
updatedDate: "2025-09-16T23:05:26.888Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-custom-viewgroup
  - android-onmeasure-onlayout
  - custom-layout-manager-android
  - android-taglayout
course: null
displayOrder: 0
seo: 
  metaTitle: "Custom Layout in Android by Extending ViewGroup"
  metaDescription: "Learn how to build a custom Android layout manager by extending ViewGroup, overriding onMeasure() and onLayout() to create a tag-style TagLayout."
  metaKeywords: null
---

## Introduction to ViewGroup

A `ViewGroup` in Android a special view that can contain other Views. A ViewGroup can contain one or multiple child. All other standard layout managers such as [LinearLayout](http://stacktips.com/android/android-linearlayout-example), [FrameLayout](http://stacktips.com/android/android-framelayout-example), [RelativeLayout](http://stacktips.com/android/android-relativelayout-example) are specialized sub classes of ViewGroup class that layout their child in specific format. For example, LinearLayout layout its child one adjacent to other either vertically or horizontally.

Sometimes, due to the specific nature of the requirement, the standard layout managers are not enough. You need to extend the ViewGroup class to create your own custom layout manager.

This post will help you to deal with creating a custom Layout manager class TagLayout that will be used to display the list of tags as shown in the following screenshot.

[![Create Custom Layout in Android by Extending ViewGroup Class](/media/articles/174/Create-Custom-Layout-in-Android-by-Extending-ViewGroup-Class-300x533.png)](http://stacktips.com)

You have to perform the following steps while creating a custom Layout manager.

1.  Extend your class from `ViewGroup` class.
2.  You must override the `onLayout()` method. This method is used to place child views.
3.  Override `onMeasure()` method. The onMeasure() method will be used to for parent to determine the size of the view group based on calculating the child view size.
4.  The onMeasure() and onLayout() method, will contain the logic to organize the child views with in parent layout.

You can measure each of the child view height and width by calling `getMeasuredWidth()` and `getMeasuredHeight()` methods.

## Creating Custom ViewGroup

```java
public class TagLayout extends ViewGroup {
    int deviceWidth;

    public TagLayout(Context context) {
        this(context, null, 0);
    }

    public TagLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public TagLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context) {
        final Display display = ((WindowManager) context.getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        Point deviceDisplay = new Point();
        display.getSize(deviceDisplay);
        deviceWidth = deviceDisplay.x;
    }

    @Override
    protected void onLayout(boolean changed, int l, int t, int r, int b) {
        final int count = getChildCount();
        int curWidth, curHeight, curLeft, curTop, maxHeight;

        //get the available size of child view
        final int childLeft = this.getPaddingLeft();
        final int childTop = this.getPaddingTop();
        final int childRight = this.getMeasuredWidth() - this.getPaddingRight();
        final int childBottom = this.getMeasuredHeight() - this.getPaddingBottom();
        final int childWidth = childRight - childLeft;
        final int childHeight = childBottom - childTop;

        maxHeight = 0;
        curLeft = childLeft;
        curTop = childTop;

        for (int i = 0; i < count; i++) {
            View child = getChildAt(i);

            if (child.getVisibility() == GONE)
                return;

            //Get the maximum size of the child
            child.measure(MeasureSpec.makeMeasureSpec(childWidth, MeasureSpec.AT_MOST), MeasureSpec.makeMeasureSpec(childHeight, MeasureSpec.AT_MOST));
            curWidth = child.getMeasuredWidth();
            curHeight = child.getMeasuredHeight();
            //wrap is reach to the end
            if (curLeft + curWidth >= childRight) {
                curLeft = childLeft;
                curTop += maxHeight;
                maxHeight = 0;
            }
            //do the layout
            child.layout(curLeft, curTop, curLeft + curWidth, curTop + curHeight);
            //store the max height
            if (maxHeight < curHeight)
                maxHeight = curHeight;
            curLeft += curWidth;
        }
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int count = getChildCount();
        // Measurement will ultimately be computing these values.
        int maxHeight = 0;
        int maxWidth = 0;
        int childState = 0;
        int mLeftWidth = 0;
        int rowCount = 0;

        // Iterate through all children, measuring them and computing our dimensions
        // from their size.
        for (int i = 0; i < count; i++) {
            final View child = getChildAt(i);

            if (child.getVisibility() == GONE)
                continue;

            // Measure the child.
            measureChild(child, widthMeasureSpec, heightMeasureSpec);
            maxWidth += Math.max(maxWidth, child.getMeasuredWidth());
            mLeftWidth += child.getMeasuredWidth();

            if ((mLeftWidth / deviceWidth) > rowCount) {
                maxHeight += child.getMeasuredHeight();
                rowCount++;
            } else {
                maxHeight = Math.max(maxHeight, child.getMeasuredHeight());
            }
            childState = combineMeasuredStates(childState, child.getMeasuredState());
        }

        // Check against our minimum height and width
        maxHeight = Math.max(maxHeight, getSuggestedMinimumHeight());
        maxWidth = Math.max(maxWidth, getSuggestedMinimumWidth());

        // Report our final dimensions.
        setMeasuredDimension(resolveSizeAndState(maxWidth, widthMeasureSpec, childState),
                resolveSizeAndState(maxHeight, heightMeasureSpec, childState << MEASURED_HEIGHT_STATE_SHIFT));
    }
}
```

## Add Custom ViewGroup to Activity Layout

Now that we are ready with the view group, let us add it to the activity layout.

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <com.javatechig.taglayout.TagLayout
        android:id="@+id/tagLayout"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:background="#ffff00"/>

</RelativeLayout>
```

## Define Child View Layout

You may have notice from the layout above, we will create custom layout for view group child. In this case the tag item.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content">

    <TextView
        android:id="@+id/tagTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:background="#a000"
        android:padding="10dp"
        android:textColor="#fff" />

</LinearLayout>
```

## Adding Child View to Custom ViewGroup

Here is what it goes in my activity. For the sake of simplicity, I am inflating 20 child views from inside for loop. You may have some complex logic to get the data from some other source.

```java
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        TagLayout tagLayout = (TagLayout) findViewById(R.id.tagLayout);
        LayoutInflater layoutInflater = getLayoutInflater();
        String tag;
        for (int i = 0; i <= 20; i++) {
            tag = "#tag" + i;
            View tagView = layoutInflater.inflate(R.layout.tag_layout, null, false);

            TextView tagTextView = (TextView) tagView.findViewById(R.id.tagTextView);
            tagTextView.setText(tag);
            tagLayout.addView(tagView);
        }
    }
}
```

https://github.com/javatechig/TagLayout-ViewGroup
