---
id: 5
title: How to Create an Android ListView with Section Header
slug: listview-with-section-header-in-android
excerpt: In this example we will show how to create a ListView with section header.
difficulty: beginners
publishedDate: "2014-01-16T11:36:46.000Z"
updatedDate: "2025-09-16T23:05:33.324Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-listview-section-header
  - baseadapter-getviewtypecount
  - android-multiple-view-types-listview
  - custom-adapter-section-list
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we will show how to create a ListView with section header. This involves following steps

1.  Create two custom layout for your List header and List row
2.  Create your custom adapter for ListView
3.  Instantiate ListView in your activity

### Create Custom layout for List header and List row

**snippet\_item1.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:gravity="center_vertical" >

    <TextView
        android:id="@+id/text"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:background="#FFF"
        android:gravity="center_vertical"
        android:padding="5dp"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#FF000000" />

</LinearLayout>
```

**snippet\_item2.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:background="#2F2F2F"
    android:gravity="center_vertical" >

    <TextView
        android:id="@+id/textSeparator"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:padding="8dp"
        android:text=""
        android:textAllCaps="true"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#FFF"
        android:textStyle="bold"
        android:visibility="visible" />

</LinearLayout>
```

### Create your custom adapter for ListView

You must override getViewTypeCount() method. This method returns the number of types of Views that will be created by getView method.

```java
package com.javatechig;

import java.util.ArrayList;
import java.util.TreeSet;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

class CustomAdapter extends BaseAdapter {

    private static final int TYPE_ITEM = 0;
    private static final int TYPE_SEPARATOR = 1;

    private ArrayList<String> mData = new ArrayList<String>();
    private TreeSet<Integer> sectionHeader = new TreeSet<Integer>();

    private LayoutInflater mInflater;

    public CustomAdapter(Context context) {
        mInflater = (LayoutInflater) context
                .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    public void addItem(final String item) {
        mData.add(item);
        notifyDataSetChanged();
    }

    public void addSectionHeaderItem(final String item) {
        mData.add(item);
        sectionHeader.add(mData.size() - 1);
        notifyDataSetChanged();
    }

    @Override
    public int getItemViewType(int position) {
        return sectionHeader.contains(position) ? TYPE_SEPARATOR : TYPE_ITEM;
    }

    @Override
    public int getViewTypeCount() {
        return 2;
    }

    @Override
    public int getCount() {
        return mData.size();
    }

    @Override
    public String getItem(int position) {
        return mData.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder = null;
        int rowType = getItemViewType(position);

        if (convertView == null) {
            holder = new ViewHolder();
            switch (rowType) {
            case TYPE_ITEM:
                convertView = mInflater.inflate(R.layout.snippet_item1, null);
                holder.textView = (TextView) convertView.findViewById(R.id.text);
                break;
            case TYPE_SEPARATOR:
                convertView = mInflater.inflate(R.layout.snippet_item2, null);
                holder.textView = (TextView) convertView.findViewById(R.id.textSeparator);
                break;
            }
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        holder.textView.setText(mData.get(position));

        return convertView;
    }

    public static class ViewHolder {
        public TextView textView;
    }

}
```

### Instantiate ListView in your activity

```java
package com.javatechig;

import android.app.ListActivity;
import android.os.Bundle;

public class SectionListView extends ListActivity {

    private CustomAdapter mAdapter;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mAdapter = new CustomAdapter(this);
        for (int i = 1; i < 30; i++) {
            mAdapter.addItem("Row Item #" + i);
            if (i % 4 == 0) {
                mAdapter.addSectionHeaderItem("Section #" + i);
            }
        }
        setListAdapter(mAdapter);
    }

}
```

### Output

[![ListView with section header in android](/media/articles/343/ListView-with-section-header-in-android.png)](http://stacktips.com)
