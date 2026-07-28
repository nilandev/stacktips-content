---
id: 142
title: Download and Display Image in Android GridView
slug: download-and-display-image-in-android-gridview
excerpt: This example is an improved version of my previous example Android GridView Example. Instead of using static images…
difficulty: beginners
publishedDate: "2015-06-26T20:33:19.000Z"
updatedDate: "2025-09-16T23:05:27.230Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This example is an improved version of my previous example [Android GridView Example](http://stacktips.com/articles/android-gridview-example-building-image-gallery-in-android). Instead of using static images to display the grid items, let’s make this example more realistic by downloading the data in real-time from the server and render the grid items. The following video depicts the output of this example.

{{< youtube fIX4SnBLaZg >}}

Without wasting much time, let us jump straight into what it takes to build this kind of GridView. You need to follow the following steps to complete this example.

## 1\. Add GridView in Activity Layout

First, create a new android project. For this example, I prefer to use **Android Studio**. Create a new layout file to your project `res/layout` folder and name it as `activity_grid_view.xml`. And add the following code blocks.

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#f0f0f0">

    <GridView
        android:id="@+id/gridView"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:columnWidth="100dp"
        android:drawSelectorOnTop="true"
        android:gravity="center"
        android:numColumns="auto_fit"
        android:stretchMode="columnWidth"
        android:verticalSpacing="5dp"
        android:focusable="true"
        android:clickable="true"/>

    <ProgressBar
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/progressBar"
        android:layout_centerInParent="true"
        android:visibility="gone"/>
</RelativeLayout>
```

The above layout is pretty straight forward. We have declared an `GridView` and a `ProgressBar` in activity layout. The progress bar will be displayed when the data is being downloaded.

## 2\. Declare GridView Item Layout

Let us now add another file named `grid_item_layout.xml` to `res/layout` folder. This layout will be used by custom grid adapter for laying out individual grid item. For the sake of simplicity, we are adding an `ImageView` and a `TextView`.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginTop="5dp"
    android:background="@drawable/grid_color_selector"
    android:orientation="vertical"
    android:padding="5dp">

    <ImageView
        android:id="@+id/grid_item_image"
        android:layout_width="100dp"
        android:layout_height="100dp"
        android:scaleType="centerCrop"/>

    <TextView
        android:id="@+id/grid_item_title"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="5dp"
        android:gravity="center"
        android:maxLines="2"
        android:ellipsize="marquee"
        android:textSize="12sp" />

</LinearLayout>
```

## 3\. Adding Internet Permission

You might be aware that, Android application must declare all the permissions that are required for application. As we need to download the data form server, we need to add the `INTERNET` permission. Add the following line to `AndroidManifest.xml` file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.javatechig.gridviewexample">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        <activity
            android:name=".GridViewActivity"
            android:label="@string/app_name">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <activity android:name=".DetailsActivity" />
    </application>

</manifest>
```

Notice that we have also declared all the activities used in the application.

## 4\. Adding Picasso Image Downloading Library

Android open source developer community brings some of the interesting libraries that can be integrated easily to Android applications. They serves a great deal of purpose and saves lot of time. Here in this example, I am talking about **`Picasso`** image loading library. We will add Picasso library for downloading and caching of images. Visit here to learn more about how to use Picasso library in Android.

You can add the Picasso library by adding the following dependency to the build.gradle file.

```java
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:appcompat-v7:21.0.3'
    compile 'com.squareup.picasso:picasso:2.5.2'
}
```

## 5\. Create a GridView Custom Adapter

A grid view is an adapter view. It requires an adapter to render the collection of data items. Add a new class named `GridViewAdapter.java` to your project and add the following code snippets.

```java
package com.javatechig.gridviewexample;

import java.util.ArrayList;
import android.app.Activity;
import android.content.Context;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import com.squareup.picasso.Picasso;

public class GridViewAdapter extends ArrayAdapter<GridItem> {

    private Context mContext;
    private int layoutResourceId;
    private ArrayList<GridItem> mGridData = new ArrayList<GridItem>();

    public GridViewAdapter(Context mContext, int layoutResourceId, ArrayList<GridItem> mGridData) {
        super(mContext, layoutResourceId, mGridData);
        this.layoutResourceId = layoutResourceId;
        this.mContext = mContext;
        this.mGridData = mGridData;
    }

    /**
     * Updates grid data and refresh grid items.
     * @param mGridData
     */
    public void setGridData(ArrayList<GridItem> mGridData) {
        this.mGridData = mGridData;
        notifyDataSetChanged();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View row = convertView;
        ViewHolder holder;

        if (row == null) {
            LayoutInflater inflater = ((Activity) mContext).getLayoutInflater();
            row = inflater.inflate(layoutResourceId, parent, false);
            holder = new ViewHolder();
            holder.titleTextView = (TextView) row.findViewById(R.id.grid_item_title);
            holder.imageView = (ImageView) row.findViewById(R.id.grid_item_image);
            row.setTag(holder);
        } else {
            holder = (ViewHolder) row.getTag();
        }

        GridItem item = mGridData.get(position);
        holder.titleTextView.setText(Html.fromHtml(item.getTitle()));

        Picasso.with(mContext).load(item.getImage()).into(holder.imageView);
        return row;
    }

    static class ViewHolder {
        TextView titleTextView;
        ImageView imageView;
    }
}
```

Notice the following in the above code snippets,

-   The `setGridData()` method updates the data display on GridView.
-   The `Picasso.with().load()` method is used to download the image from url and display on image view.
-   The GridViewAdapter class constructor requires the id of the grid item layout and the list of data to operate on.
-   You might be surprised, where is the `GridItem` class came from. Its not a magic, we need to add `GridItem.java` class to our project. The GridItem class looks as follows.

## 6\. Download Data and Hook it to Activity

Now we will be heading towards hooking the adapter to GridView and make it functional. Create a new Java class and name it as `GridViewActivity.java` and perform the following steps.

-   Override the `onCreate()` method and set the layout by calling `setContentView()` method
-   Initialize the GridView and ProgressBar component by using their declared layout id.
-   Initialize the `CustomGridView` adapter by passing the grid row layout id and the list of `GridItem` objects.
-   Use AsyncTask to download data from server, once download is successful read the stream JSON response.
-   Parse the JSON string into the list of GridItem objects. Once downloading and parsing is completed, in `onPostExecute()` callback update the UI elements.

The following code does all the above steps as described. Add the following code to GridViewActivity class.

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ProgressBar;
import android.widget.Toast;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class GridViewActivity extends ActionBarActivity {
    private static final String TAG = GridViewActivity.class.getSimpleName();
    private GridView mGridView;
    private ProgressBar mProgressBar;
    private GridViewAdapter mGridAdapter;
    private ArrayList<GridItem> mGridData;
    private String FEED_URL = "http://stacktips.com/?json=get_recent_posts&count=45";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gridview);

        mGridView = (GridView) findViewById(R.id.gridView);
        mProgressBar = (ProgressBar) findViewById(R.id.progressBar);

        //Initialize with empty data
        mGridData = new ArrayList<>();
        mGridAdapter = new GridViewAdapter(this, R.layout.grid_item_layout, mGridData);
        mGridView.setAdapter(mGridAdapter);

        //Start download
        new AsyncHttpTask().execute(FEED_URL);
        mProgressBar.setVisibility(View.VISIBLE);
    }

    //Downloading data asynchronously
    public class AsyncHttpTask extends AsyncTask<String, Void, Integer> {

        @Override
        protected Integer doInBackground(String... params) {
            Integer result = 0;
            try {
                // Create Apache HttpClient
                HttpClient httpclient = new DefaultHttpClient();
                HttpResponse httpResponse = httpclient.execute(new HttpGet(params[0]));
                int statusCode = httpResponse.getStatusLine().getStatusCode();

                // 200 represents HTTP OK
                if (statusCode == 200) {
                    String response = streamToString(httpResponse.getEntity().getContent());
                    parseResult(response);
                    result = 1; // Successful
                } else {
                    result = 0; //"Failed
                }
            } catch (Exception e) {
                Log.d(TAG, e.getLocalizedMessage());
            }
            return result;
        }

        @Override
        protected void onPostExecute(Integer result) {
            // Download complete. Let us update UI
            if (result == 1) {
                mGridAdapter.setGridData(mGridData);
            } else {
                Toast.makeText(GridViewActivity.this, "Failed to fetch data!", Toast.LENGTH_SHORT).show();
            }
            mProgressBar.setVisibility(View.GONE);
        }
    }

    String streamToString(InputStream stream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(stream));
        String line;
        String result = "";
        while ((line = bufferedReader.readLine()) != null) {
            result += line;
        }

        // Close stream
        if (null != stream) {
            stream.close();
        }
        return result;
    }

    /**
     * Parsing the feed results and get the list
     * @param result
     */
    private void parseResult(String result) {
        try {
            JSONObject response = new JSONObject(result);
            JSONArray posts = response.optJSONArray("posts");
            GridItem item;
            for (int i = 0; i < posts.length(); i++) {
                JSONObject post = posts.optJSONObject(i);
                String title = post.optString("title");
                item = new GridItem();
                item.setTitle(title);
                JSONArray attachments = post.getJSONArray("attachments");
                if (null != attachments && attachments.length() > 0) {
                    JSONObject attachment = attachments.getJSONObject(0);
                    if (attachment != null)
                        item.setImage(attachment.getString("url"));
                }
                mGridData.add(item);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
```

At this point you will be able to run the app and notice that the app will download the data from the server and display on GridView.

## 7\. Handle GridView Click Event

Right now GridView is not responding to user clicks. Let us make it more functional by adding the following code.

```java
mGridView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
public void onItemClick(AdapterView<?> parent, View v, int position, long id) {

		//Get item at position
		GridItem item = (GridItem) parent.getItemAtPosition(position);

		//Pass the image title and url to DetailsActivity
                Intent intent = new Intent(GridViewActivity.this, DetailsActivity.class);
                intent.putExtra("title", item.getTitle());
                intent.putExtra("image", item.getImage());

		//Start details activity
		startActivity(intent);
	}
});
```

When user clicks on a grid item, we will start another activity that displays the full screen image. You can start one activity form another by calling `startActivity()` method.

We need to pass the details of the item such as title, and image url for displaying it on `DetailsActivity`.

## 8\. Create Details Activity Layout

Add a new layout file to res/layout directory, name it as `activity_details_view.xml` and add the following code snippets.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#000"
    android:orientation="vertical">

    <ImageView
        android:id="@+id/grid_item_image"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_gravity="center"
        android:scaleType="fitCenter" />

    <TextView
        android:id="@+id/title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom"
        android:background="#00000c"
        android:padding="10dp"
        android:textColor="#fff"
        android:textSize="20dp" />
</FrameLayout>
```

## 9\. Completing the Details Activity

The `DetailsActivity` retrieves the details passed from `GridViewActivity` and renders the details on screen. Create a new class named DetailsActivity and add the following code snippets.

```java
package com.javatechig.gridviewexample;

import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;
import android.text.Html;
import android.widget.ImageView;
import android.widget.TextView;
import com.squareup.picasso.Picasso;

public class DetailsActivity extends ActionBarActivity {
    private TextView titleTextView;
    private ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details_view);

        ActionBar actionBar = getSupportActionBar();
        actionBar.hide();

        String title = getIntent().getStringExtra("title");
        String image = getIntent().getStringExtra("image");
        titleTextView = (TextView) findViewById(R.id.title);
        imageView = (ImageView) findViewById(R.id.grid_item_image);
        titleTextView.setText(Html.fromHtml(title));

        Picasso.with(this).load(image).into(imageView);
    }
}
```

## 10\. Download Complete Example

[Download source](https://github.com/javatechig/Android-GridView-Advance-Tutorial)

## 11\. Custom Activity Transition in GridView

Continue reading in our [next tutorial.](http://stacktips.com/android/using-custom-activity-transition-in-gridview-image-gallery)
