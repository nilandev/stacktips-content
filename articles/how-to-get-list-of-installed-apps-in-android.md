---
id: 296
title: How to Get List of Installed Apps in Android
slug: how-to-get-list-of-installed-apps-in-android
excerpt: Android PackageManager class is used to retrieve information on the application packages that are currently installed on the device. You can get an instance of PackageManager class by calling getPackageManager().
difficulty: beginners
publishedDate: "2013-08-25T09:44:39.000Z"
updatedDate: "2025-09-16T23:05:34.889Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - ibm-worklight
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Android `PackageManager` class is used to retrieve information on the application packages that are currently installed on the device. You can get an instance of PackageManager class by calling `getPackageManager()`. PackageManager provides methods for querying and manipulating installed packages and related permissions, etc. In this Android example, we we get list of installed apps in Android.

[![How to Get List of Installed Apps in Android](/media/articles/385/How-to-get-list-of-Installed-Apps-in-Android.gif)](http://stacktips.com)

```java
PackageManager packageManager = getPackageManager();
List<ApplicationInfo> list = packageManager.getInstalledApplications(PackageManager.GET_META_DATA)
```

`packageManager.getInstalledApplications()` return a List of all application packages that are installed on the device. If we set the flag `GET_UNINSTALLED_PACKAGES` has been set, a list of all applications including those deleted with `DONT_DELETE_DATA` (partially installed apps with data directory) will be returned.

# 1\. Creating application layout in xml

**activity\_main.xml**

As you can see in the attached screenshot, we will be creating a ListView to show all of the installed applications in android.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <ListView
        android:id="@android:id/list"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content" />

</LinearLayout>
```

**snippet\_list\_row.xml**

This layout is being used by the ListView Adapter for representing application details. It shows application icon, application name and application package.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content" >

    <ImageView
        android:id="@+id/app_icon"
        android:layout_width="50dp"
        android:layout_height="50dp"
        android:padding="3dp"
        android:scaleType="centerCrop" />

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:gravity="center_vertical"
        android:orientation="vertical"
        android:paddingLeft="5dp" >

        <TextView
            android:id="@+id/app_name"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:gravity="center_vertical"
            android:textStyle="bold" />

        <TextView
            android:id="@+id/app_paackage"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:gravity="center_vertical" />
    </LinearLayout>

</LinearLayout>
```

# 2\. Writing Java class

**AllAppsActivity.java**

This is the main application class that is used to initialize and list the installed applications. As getting the list of application details from PackageManage is a long running task, we will do that in AsyncTask. Also, this class is using custom Adapter “ApplicationAdapter” for custom ListView.

```java
package com.javatechig.listapps;

import java.util.ArrayList;
import java.util.List;
import android.app.AlertDialog;
import android.app.ListActivity;
import android.app.ProgressDialog;
import android.content.ActivityNotFoundException;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.ListView;
import android.widget.Toast;

public class AllAppsActivity extends ListActivity {
	private PackageManager packageManager = null;
	private List<ApplicationInfo> applist = null;
	private ApplicationAdapter listadaptor = null;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		packageManager = getPackageManager();

		new LoadApplications().execute();
	}

	public boolean onCreateOptionsMenu(Menu menu) {
		MenuInflater inflater = getMenuInflater();
		inflater.inflate(R.menu.menu, menu);

		return true;
	}

	public boolean onOptionsItemSelected(MenuItem item) {
		boolean result = true;

		switch (item.getItemId()) {
		case R.id.menu_about: {
			displayAboutDialog();

			break;
		}
		default: {
			result = super.onOptionsItemSelected(item);

			break;
		}
		}

		return result;
	}

	private void displayAboutDialog() {
		final AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setTitle(getString(R.string.about_title));
		builder.setMessage(getString(R.string.about_desc));

		builder.setPositiveButton("Know More", new DialogInterface.OnClickListener() {
		       public void onClick(DialogInterface dialog, int id) {
		    	   Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://stacktips.com"));
		    	   startActivity(browserIntent);
		    	   dialog.cancel();
		       }
		   });
		builder.setNegativeButton("No Thanks!", new DialogInterface.OnClickListener() {
		       public void onClick(DialogInterface dialog, int id) {
		            dialog.cancel();
		       }
		});

		builder.show();
	}

	@Override
	protected void onListItemClick(ListView l, View v, int position, long id) {
		super.onListItemClick(l, v, position, id);

		ApplicationInfo app = applist.get(position);
		try {
			Intent intent = packageManager
					.getLaunchIntentForPackage(app.packageName);

			if (null != intent) {
				startActivity(intent);
			}
		} catch (ActivityNotFoundException e) {
			Toast.makeText(AllAppsActivity.this, e.getMessage(),
					Toast.LENGTH_LONG).show();
		} catch (Exception e) {
			Toast.makeText(AllAppsActivity.this, e.getMessage(),
					Toast.LENGTH_LONG).show();
		}
	}

	private List<ApplicationInfo> checkForLaunchIntent(List<ApplicationInfo> list) {
		ArrayList<ApplicationInfo> applist = new ArrayList<ApplicationInfo>();
		for (ApplicationInfo info : list) {
			try {
				if (null != packageManager.getLaunchIntentForPackage(info.packageName)) {
					applist.add(info);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return applist;
	}

	private class LoadApplications extends AsyncTask<Void, Void, Void> {
		private ProgressDialog progress = null;

		@Override
		protected Void doInBackground(Void... params) {
			applist = checkForLaunchIntent(packageManager.getInstalledApplications(PackageManager.GET_META_DATA));
			listadaptor = new ApplicationAdapter(AllAppsActivity.this,
					R.layout.snippet_list_row, applist);

			return null;
		}

		@Override
		protected void onCancelled() {
			super.onCancelled();
		}

		@Override
		protected void onPostExecute(Void result) {
			setListAdapter(listadaptor);
			progress.dismiss();
			super.onPostExecute(result);
		}

		@Override
		protected void onPreExecute() {
			progress = ProgressDialog.show(AllAppsActivity.this, null,
					"Loading application info...");
			super.onPreExecute();
		}

		@Override
		protected void onProgressUpdate(Void... values) {
			super.onProgressUpdate(values);
		}
	}
}
```

**ApplicationAdapter.java**

```java
package com.javatechig.listapps;

import java.util.List;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class ApplicationAdapter extends ArrayAdapter<ApplicationInfo> {
	private List<ApplicationInfo> appsList = null;
	private Context context;
	private PackageManager packageManager;

	public ApplicationAdapter(Context context, int textViewResourceId,
			List<ApplicationInfo> appsList) {
		super(context, textViewResourceId, appsList);
		this.context = context;
		this.appsList = appsList;
		packageManager = context.getPackageManager();
	}

	@Override
	public int getCount() {
		return ((null != appsList) ? appsList.size() : 0);
	}

	@Override
	public ApplicationInfo getItem(int position) {
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
			view = layoutInflater.inflate(R.layout.snippet_list_row, null);
		}

		ApplicationInfo applicationInfo = appsList.get(position);
		if (null != applicationInfo) {
			TextView appName = (TextView) view.findViewById(R.id.app_name);
			TextView packageName = (TextView) view.findViewById(R.id.app_paackage);
			ImageView iconview = (ImageView) view.findViewById(R.id.app_icon);

			appName.setText(applicationInfo.loadLabel(packageManager));
			packageName.setText(applicationInfo.packageName);
			iconview.setImageDrawable(applicationInfo.loadIcon(packageManager));
		}
		return view;
	}
};
```

# Download Complete Example

Download complete Eclipse project source code from [GitHub.](https://github.com/javatechig/javatechig-android-advanced/tree/master/ListInstalledApps)
