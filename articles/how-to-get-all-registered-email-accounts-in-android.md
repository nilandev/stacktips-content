---
id: 217
title: How to Get all Registered Email Accounts in Android
slug: how-to-get-all-registered-email-accounts-in-android
excerpt: How to get all registered Google and other email accounts in Android. AccountManager class provides access to all registered user accounts in device. AccountManager generates the auth tokens for different applications
difficulty: beginners
publishedDate: "2014-04-06T19:57:32.000Z"
updatedDate: "2025-09-16T23:05:32.412Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - c
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example, we’ll show how to get all registered Google and other email accounts in Android.

AccountManager class provides access to all registered user accounts in device. AccountManager generates the auth tokens for different applications and caches it. It is also responsible for periodic check for the validity of auth tokens.

For accessing the registered accounts in your Android phone, you must add `android.permission.GET_ACCOUNTS` permission to your Manifest file. This permission allows access to the list of accounts in the Accounts Service.

```xml
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
```

Below example we’ll show the list of registered email address in a ListView. Well, lets begin with the layout

### Activity layout xml (activity\_main.xml)

```xml
<ListView xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/listView1"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_weight="1" >

</ListView>
```

Lets create another layout which will be used as our list row item

### lovely\_view\_layout.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#C9DAF3"
    android:orientation="horizontal"
    android:padding="5dp"
    android:weightSum="2" >

    <TextView
        android:id="@+id/key"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_weight="1" />

    <TextView
        android:id="@+id/value"
        android:layout_marginLeft="5dp"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_weight="1" />

</LinearLayout>
```

Now we are ready with layouts designs. Lets go back to the activity and adapter java file

### MainActivity.java

```java
package com.javatechig.regemail;

import java.util.ArrayList;
import android.accounts.Account;
import android.accounts.AccountManager;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.widget.ListView;

public class MainActivity extends Activity {

	private ArrayList<Item> list = null;
	private ListView listView;
	private LovelyListAdapter listadaptor;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		list = getData();
		listView = (ListView) findViewById(R.id.listView1);
		listadaptor = new LovelyListAdapter(this, R.layout.lovely_view_layout, list);
		listView.setAdapter(listadaptor);
	}

	private ArrayList<Item> getData() {
		ArrayList<Item> accountsList = new ArrayList<Item>();

		//Getting all registered Google Accounts;
		try {
			Account[] accounts = AccountManager.get(this).getAccountsByType("com.google");
			for (Account account : accounts) {
				Item item = new Item( account.type, account.name);
				accountsList.add(item);
			}
		} catch (Exception e) {
			Log.i("Exception", "Exception:" + e);
		}

		//For all registered accounts;
		/*try {
			Account[] accounts = AccountManager.get(this).getAccounts();
			for (Account account : accounts) {
				Item item = new Item( account.type, account.name);
				accountsList.add(item);
			}
		} catch (Exception e) {
			Log.i("Exception", "Exception:" + e);
		}*/
		return accountsList;
	}
}
```

### LovelyListAdapter.java

```java
package com.javatechig.regemail;

import java.util.List;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class LovelyListAdapter extends ArrayAdapter<Item> {
	private List<Item> appsList = null;
	private Context context;

	public LovelyListAdapter(Context context, int textViewResourceId, List<Item> appsList) {
		super(context, textViewResourceId, appsList);
		this.context = context;
		this.appsList = appsList;
	}

	@Override
	public int getCount() {
		return ((null != appsList) ? appsList.size() : 0);
	}

	@Override
	public Item getItem(int position) {
		return ((null != appsList) ? appsList.get(position) : null);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		View view = convertView;
		if (null == view) {
			LayoutInflater layoutInflater = (LayoutInflater) context
					.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
			view = layoutInflater.inflate(R.layout.lovely_view_layout, null);
		}

		if (position % 2 == 1) {
		    view.setBackgroundColor(context.getResources().getColor(R.color.lovely_row_bg1));  
		} else {
		    view.setBackgroundColor(context.getResources().getColor(R.color.lovely_row_bg2));  
		}

		Item data = appsList.get(position);
		if (null != data) {

			TextView appName = (TextView) view.findViewById(R.id.key);
			TextView packageName = (TextView) view.findViewById(R.id.value);

			appName.setText(data.getKey());
			packageName.setText(data.getValue());
		}
		return view;
	}
}
```

### Item.java

```java
package com.javatechig.regemail;

public class Item {

	private String key;
	private String value;

	public Item(String key, String value) {
		this.key = key;
		this.value = value;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
```

Download complete source code from [GitHub](https://github.com/javatechig/javatechig-android-advanced/tree/master/GetRegisteredEmailAccounts).
