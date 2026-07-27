---
id: 298
title: How to Pass a Data from One Activity to Another in Android
slug: pass-a-data-from-one-activity-to-another-in-android
excerpt: In Android user interface is displayed through an activity. Activity is used to represent the data to user and allows user interaction. In an android application, we can have multiple activities and that can interact with each other. During activity interaction we might required to pass data from one activity to other. This tutorial I will explain more about, how to send data while switching between one Activity to another.
difficulty: beginners
publishedDate: "2013-08-25T01:32:58.000Z"
updatedDate: "2025-09-16T23:05:34.995Z"
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

In Android user interface is displayed through an activity. Activity is used to represent the data to user and allows user interaction. In an android application, we can have multiple activities and that can interact with each other. During activity interaction we might required to pass data from one activity to other. This tutorial I will explain more about, how to send data while switching between one Activity to another.

For example, if you are developing an application for RSS News feed reader, you may require having at least of two screens. While the first screen displaying the List of news feeds and other displaying the feed details. Below is the screenshot from the example.

[![pass a data from one Activity to another in Android](/media/articles/387/app_screenshot.gif)](http://stacktips.com)

# 1\. Calling one activity from another in android

We can call one activity from another by using Intents. Intent is one of the main building block which provides an abstract description of an operation to be performed. `startActivity(intent)` method belongs to your Activity class and can be used for starting a new activity.

```java
Intent intent = new Intent(context, YourActivityClass.class);
startActivity(intent);
```

# 2\. Passing data from one activity to other in android

An intent contains the action and optionally additional data. The data can be passed to other activity using intent p`utExtra()` method. Data is passed as extras and are key/value pairs. The key is always a String. As value you can use the primitive data types int, float, chars, etc. We can also pass `Parceable` and `Serializable` objects from one activity to other.

```java
Intent intent = new Intent(context, YourActivityClass.class);
intent.putExtra(KEY, <your value here>);
startActivity(intent);
```

# 3\. Retrieving bundle data from android activity

You can retrieve the information using `getData()` methods on the Intent object. The Intent object can be retrieved via the `getIntent(`) method.

```java
  Intent intent = getIntent();
  if (null != intent) {
	String stringData= intent.getStringExtra(KEY);
	int numberData = intent.getIntExtra(KEY, defaultValue);
	boolean booleanData = intent.getBooleanExtra(KEY, defaultValue);
	char charData = intent.getCharExtra(KEY, defaultValue);	
  }
```

To retrieve `Serializable` and `Parcelable` object using `getSerializableExtra(KEY)` and `getParcelableExtra(KEY)` method.

# 4\. Example and case study

In this example, we will develop one list view of objects and clicking on a list row, it will open up another actiity displaying the detail of that row. Here, we are passing the row data from one activity to other.

## 4.1. Defining case study layouts

**activity\_news\_list.xml**

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".NewsListActivity" >

    <ListView
        android:id="@+id/newsList"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent" >
    </ListView>

</RelativeLayout>
```

**snippet\_news\_list\_row.xml**

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/LinearLayout1"
    android:layout_width="match_parent"
    android:layout_height="80dp"
    android:orientation="vertical"
    android:minHeight="60dp"
     android:background="#99CC00"
    tools:context=".NewsListActivity" >

    <TextView
        android:id="@+id/newsHeadline"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="News Headline"
        android:padding="5dp"
        android:minLines="2"
        android:maxLines="2"
        android:textStyle="bold"
        android:textColor="#0000dc"
        android:textAppearance="?android:attr/textAppearanceMedium" />

    <TextView
        android:id="@+id/pubDate"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginRight="19dp"
        android:text="Published Date"
        android:padding="3dp"
        android:textColor="#FF4444"
        android:textAppearance="?android:attr/textAppearanceSmall" />

</LinearLayout>
```

**activity\_news\_details.xml**

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/LinearLayout1"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".NewsListActivity" >

    <TextView
        android:id="@+id/headlines"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:padding="8dp"
        android:text="Headline"
        android:background="#99CC00"
        android:textStyle="bold"
        android:textAppearance="?android:attr/textAppearanceMedium"
        android:textColor="#0000dc" />

    <TextView
        android:id="@+id/pub_date"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:gravity="right"
        android:padding="3dp"
        android:text="Published Date"
        android:textAppearance="?android:attr/textAppearanceSmall"
        android:background="#33B5E5"
        android:textColor="#0000dc" />

    <TextView
        android:id="@+id/description"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:padding="10dp"
        android:text="News Description"
        android:textAppearance="?android:attr/textAppearanceMedium" />

</LinearLayout>
```

## 4.2. Defining Java Classes

**NewsItem.java**

```java
package com.javatechig;

public class NewsItem  {

	private String headline;
	private String details;
	private String pubDate;

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getPubDate() {
		return pubDate;
	}

	public void setPubDate(String pubDate) {
		this.pubDate = pubDate;
	}

}
```

**NewsListActivity.java**

Here we render custom list view to show the news items. NewsItems are shown with alternative colors for each rows. When a list row is clicked, we pass the data to NewsDetailsActivity using intent extras.

```java
package com.javatechig;

import java.util.ArrayList;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.Menu;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;

public class NewsListActivity extends Activity {

	private NewsListAdapter adapter;

	public static final String KEY_HEADLINE="news_headline";
	public static final String KEY_DETAILS="news_details";
	public static final String KEY_PUBDATE = "news_pub_date";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_news_list);

		adapter = new NewsListAdapter(this, getData());
		ListView list = (ListView) findViewById(R.id.newsList);
		list.setAdapter(adapter);

		list.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> adapterView, View view, int position, long offset) {
				NewsItem item = (NewsItem) adapter.getItem(position);

				Intent intent = new Intent(getApplicationContext(), NewsDetailsActivity.class);
				intent.putExtra(KEY_HEADLINE, item.getHeadline());
				intent.putExtra(KEY_PUBDATE, item.getPubDate());
				intent.putExtra(KEY_DETAILS, item.getDetails());

				startActivity(intent); 
			}
		});
	}

	private ArrayList<NewsItem> getData() {
		ArrayList<NewsItem> newsList = new ArrayList<NewsItem>();
		String[] headlines = getResources().getStringArray(R.array.news_headlines);
		String[] pubDate = getResources().getStringArray(R.array.news_pubdate);
		String[] details = getResources().getStringArray(R.array.news_details);

		for (int i = 0; i < headlines.length; i++) {
			NewsItem item = new NewsItem();
			item.setHeadline(headlines[i]);
			item.setPubDate(pubDate[i]);
			item.setDetails(details[i]);
			newsList.add(item);
		}
		return newsList;
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
}
```

**NewsListAdapter.java**

This adapter will be used for custom list view. Here in this we are using alternative color for each of the list row.

```java
package com.javatechig;

import java.util.ArrayList;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

public class NewsListAdapter extends BaseAdapter {

	private ArrayList<NewsItem> listData;
	private LayoutInflater layoutInflater;
	private Context context;

	public NewsListAdapter(Context context, ArrayList<NewsItem> listData) {
		this.listData = listData;
		this.context = context;
		layoutInflater = LayoutInflater.from(context);
	}

	@Override
	public int getCount() {
		return listData.size();
	}

	@Override
	public Object getItem(int position) {
		return listData.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	public View getView(int position, View convertView, ViewGroup parent) {
		ViewHolder holder;
		if (convertView == null) {
			convertView = layoutInflater.inflate(R.layout.snippet_news_list_row, null);
			holder = new ViewHolder();
			holder.headline = (TextView) convertView.findViewById(R.id.newsHeadline);
			holder.pubDate = (TextView) convertView.findViewById(R.id.pubDate);
			convertView.setTag(holder);
		} else {
			holder = (ViewHolder) convertView.getTag();
		}

		holder.headline.setText(listData.get(position).getHeadline());
		holder.pubDate.setText(listData.get(position).getPubDate());

		if (position % 2 == 1) {
			convertView.setBackgroundColor(context.getResources().getColor(R.color.list_row_color1));  
		} else {
			convertView.setBackgroundColor(context.getResources().getColor(R.color.list_row_color2));  
		}

		return convertView;
	}

	static class ViewHolder {
		TextView headline;
		TextView pubDate;
	}

}
```

**NewsDetailsActivity.java**

In NewsDetailsActivity we are retrieving the data passed from NewsListActivity.

```java
package com.javatechig;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.widget.TextView;
import static com.javatechig.NewsListActivity.KEY_HEADLINE;
import static com.javatechig.NewsListActivity.KEY_PUBDATE;
import static com.javatechig.NewsListActivity.KEY_DETAILS;

public class NewsDetailsActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_news_details);

		String headline = "";
		String details = "";
		String pubDate = "";

		Intent intent = getIntent();
		if (null != intent) {
			headline = intent.getStringExtra(KEY_HEADLINE);
			details = intent.getStringExtra(KEY_DETAILS);
			pubDate = intent.getStringExtra(KEY_PUBDATE);
		}

		TextView headlineTxt = (TextView) findViewById(R.id.headlines);
		headlineTxt.setText(headline);

		TextView pubdateTxt = (TextView) findViewById(R.id.pub_date);
		pubdateTxt.setText(pubDate);

		TextView descriptionTxt = (TextView) findViewById(R.id.description);
		descriptionTxt.setText(details);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
}
```

# 5\. Download Complete Example

Here you can download complete eclipse project source code from [**GitHub**](https://github.com/javatechig/Android-UI-Tutorials/tree/master/AndroidBundleExample).
