---
id: 193
title: Android RecyclerView Example
slug: android-recyclerview-example
excerpt: Google’s upcoming operating system named Android L looks very promising. It is highly focused on rich user experience and what they called it as material design. In this example we will take a look at the new UI widget called RecyclerView.
difficulty: beginners
publishedDate: "2014-09-23T19:50:27.000Z"
updatedDate: "2025-09-16T23:05:29.714Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/android-ui-tutorials/tree/master/android-recyclerview-demo"
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-recyclerview
  - recyclerview-cardview
  - recyclerview-click-listener
  - recyclerview-adapter
course: null
displayOrder: 0
seo: 
  metaTitle: "Android RecyclerView Example with CardView"
  metaDescription: "Learn how to implement Android RecyclerView with CardView, build a custom adapter, load images with Picasso, and handle item click events."
  metaKeywords: null
---

### What is RecyclerView?

In Android 5.0 Lollipop, Android introduced RecyclerView widget. RecyclerView is flexible and efficient version of ListView. It is an container for rendering larger data set of views that can be recycled and scrolled very efficiently. RecyclerView is like traditional [ListView](/articles/android-listview-tutorial) widget, but with more flexibility to customizes and optimized to work with larger datasets. It uses a subclass of `RecyclerView.Adapter` for providing views that represent items in a data set.

Android SDK doesn’t includes the `RecyclerView` class. You need to add the following support library graddle dependency to project `build.graddle` file.

```groovy
compile 'com.android.support:recyclerview-v7:24.0.0'
```

This guide explains how to use and customize RecyclerView in Android applications.

### RecyclerView Example

In the course of this example we will download the data from JSON API, parse and display the items on RecyclerView. As you can notice in the following image, we will be using both RecyclerView and [CardView](/articles/android-cardview-example) for creating the App UI.

[![android-recyclerview-example](/media/articles/258/Android-RecyclerView-Example-1.png)](http://stacktips.com)

Following steps are required to complete the example:

-   Create a new Android Application and add the required graddle dependencies
-   Layout activity and add RecyclerView and ProgressBar
-   Layout the RecyclerView row  item using CardView widget
-   Create a Custom Adapter for RecyclerView
-   Create main Activity to initialize UI, make HTTP Server request and render data on RecyclerView
-   Responding to RecyclerView click event

### Creating Android Project

Let us begin with creating a new Android project in Android Studio. After the project is created, open app `build.graddle` file and add the following dependency libraries.

```groovy
dependencies {
    compile 'com.android.support:recyclerview-v7:24.0.0'
    compile 'com.android.support:cardview-v7:24.0.0'
    compile 'com.squareup.picasso:picasso:2.5.2'
    // ...
}
```

Notice that, we have added RecyclerView, [CardView](/articles/android-cardview-example) support libraries and [Picasso](/articles/how-to-use-picasso-library-in-android) dependency module.

Picasso is an Open Source image loader library created and maintained by Square. It is among the powerful image download and caching [library for Android.](http://stacktips.com/android/android-third-party-libraries-sdks "Android third party libraries and SDK’s")

#### Adding Internet Permission:

You might be aware that, Android application must declare all the permissions that are required for application. As we need to download the data form server, we need to add the `INTERNET` permission. Declare the following permission in `AndroidManifest.xml` file.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

### Declaring RecyclerView Layout

Let us now define the layout for Activity. We will add a RecyclerView and ProgressBar inside a [RelativeLayout](/articles/android-relativelayout-example). The progress bar will be displayed while the data data from REST API is being downloaded.

Create a new file `activity_main.xml` inside layout resource folder and paste the following snippets.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#f1f1f1"
    android:padding="12dp"
    tools:context="com.stacktips.recyclerview.MainActivity">

    <android.support.v7.widget.RecyclerView
        android:id="@+id/recycler_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_centerInParent="true"/>

    <ProgressBar
        android:id="@+id/progress_bar"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"/>

</RelativeLayout>

```

### RecyclerView Row Layout

In the example, each row item is represented by a `CardView` that hosts a RelativeLayout with an `ImageView` for the thumbnail and a `TextView` title. This layout resides in the file list\_row.xml.

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.v7.widget.CardView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:cardview="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginBottom="5dp"
    cardview:cardCornerRadius="2dp"
    cardview:cardElevation="3dp"
    cardview:cardUseCompatPadding="true">

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <ImageView
            android:id="@+id/thumbnail"
            android:layout_width="match_parent"
            android:layout_height="180dp"
            android:layout_alignParentTop="true"
            android:scaleType="centerCrop"
            android:src="@drawable/placeholder"/>

        <TextView
            android:id="@+id/title"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_below="@+id/thumbnail"
            android:layout_centerVertical="true"
            android:layout_marginLeft="12dp"
            android:maxLines="3"
            android:padding="8dp"
            android:textAppearance="@style/TextAppearance.AppCompat.Headline"
            android:textColor="#444"
            android:textSize="18dp"
            android:textStyle="bold"/>

    </RelativeLayout>
</android.support.v7.widget.CardView>
```

### Creating RecyclerView Adapter

Android RecyclerView includes special kind of adapter which works pretty much same as traditional Android adapters but with additional functionalities.It uses a subclass of `RecyclerView.Adapter` for providing views that represent items in a data set.

The additional functionalities of RecyclerView.Adapter are:

-   It adds two new methods like `onCreateViewHolder()` and `onBindViewHolder()` to organize the code. You must override these two methods for inflate the view and to bind data to the view
-   Implements a ViewHolder by default. Conceptually `RecyclerView.ViewHolder` works same as the ViewHolder design pattern which we have been using with other Adapters
-   Takes care of the overhead of recycling and gives better performance and scrolling

Create a new class MyRecyclerViewAdapter.class and copy the following snippets.

```java
public class MyRecyclerViewAdapter extends RecyclerView.Adapter<MyRecyclerViewAdapter.CustomViewHolder> {
    private List<FeedItem> feedItemList;
    private Context mContext;

    public MyRecyclerViewAdapter(Context context, List<FeedItem> feedItemList) {
        this.feedItemList = feedItemList;
        this.mContext = context;
    }

    @Override
    public CustomViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View view = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.list_row, null);
        CustomViewHolder viewHolder = new CustomViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(CustomViewHolder customViewHolder, int i) {
        FeedItem feedItem = feedItemList.get(i);

        //Render image using Picasso library
        if (!TextUtils.isEmpty(feedItem.getThumbnail())) {
            Picasso.with(mContext).load(feedItem.getThumbnail())
                    .error(R.drawable.placeholder)
                    .placeholder(R.drawable.placeholder)
                    .into(customViewHolder.imageView);
        }

        //Setting text view title
        customViewHolder.textView.setText(Html.fromHtml(feedItem.getTitle()));
    }

    @Override
    public int getItemCount() {
        return (null != feedItemList ? feedItemList.size() : 0);
    }

    class CustomViewHolder extends RecyclerView.ViewHolder {
        protected ImageView imageView;
        protected TextView textView;

        public CustomViewHolder(View view) {
            super(view);
            this.imageView = (ImageView) view.findViewById(R.id.thumbnail);
            this.textView = (TextView) view.findViewById(R.id.title);
        }
    }
}
```

Notice that we have created an private ViewHolder class. The ViewHolder class contains the reference to the each of the ui widget on the row.

The `FeedItem` class is an model class that holds the parsed data retrieved from JSON API. Add a new new file `FeedItem.java` class in your project source folder and add the following.

```java
public class FeedItem {
    private String title;
    private String thumbnail;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}
```

### Activity Using RecyclerView

The resulting RecyclerView implementation for this example app consists of MainActivity initialization code. MainActivity creates the mRecyclerView instance, download and parse the data from JSON API, instantiates the adapter and plugs in the adapter to RecyclerView.

The focus of this tutorial is narrow down to RecyclerView, hence it doesn’t include any explanation for download and parse data from server. For learning how to download data from server, you may read [Android Networking Tutorial.](http://stacktips.com/android/android-networking-tutorial)

Once data is downloaded, inside `onPostExecute()` we are initializing the adapter and setting adapter to RecyclerView instance by just calling `setAdapter()` method.

```java
public class MainActivity extends AppCompatActivity {
    private static final String TAG = "RecyclerViewExample";
    private List<FeedItem> feedsList;
    private RecyclerView mRecyclerView;
    private MyRecyclerViewAdapter adapter;
    private ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mRecyclerView = (RecyclerView) findViewById(R.id.recycler_view);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(this));
        progressBar = (ProgressBar) findViewById(R.id.progress_bar);

        String url = "http://stacktips.com/?json=get_category_posts&slug=news&count=30";
        new DownloadTask().execute(url);
    }

    public class DownloadTask extends AsyncTask<String, Void, Integer> {

        @Override
        protected void onPreExecute() {
            progressBar.setVisibility(View.VISIBLE);
        }

        @Override
        protected Integer doInBackground(String... params) {
            Integer result = 0;
            HttpURLConnection urlConnection;
            try {
                URL url = new URL(params[0]);
                urlConnection = (HttpURLConnection) url.openConnection();
                int statusCode = urlConnection.getResponseCode();

                // 200 represents HTTP OK
                if (statusCode == 200) {
                    BufferedReader r = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                    StringBuilder response = new StringBuilder();
                    String line;
                    while ((line = r.readLine()) != null) {
                        response.append(line);
                    }
                    parseResult(response.toString());
                    result = 1; // Successful
                } else {
                    result = 0; //"Failed to fetch data!";
                }
            } catch (Exception e) {
                Log.d(TAG, e.getLocalizedMessage());
            }
            return result; //"Failed to fetch data!";
        }

        @Override
        protected void onPostExecute(Integer result) {
            progressBar.setVisibility(View.GONE);

            if (result == 1) {
                adapter = new MyRecyclerViewAdapter(MainActivity.this, feedsList);
                mRecyclerView.setAdapter(adapter);
            } else {
                Toast.makeText(MainActivity.this, "Failed to fetch data!", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void parseResult(String result) {
        try {
            JSONObject response = new JSONObject(result);
            JSONArray posts = response.optJSONArray("posts");
            feedsList = new ArrayList<>();

            for (int i = 0; i < posts.length(); i++) {
                JSONObject post = posts.optJSONObject(i);
                FeedItem item = new FeedItem();
                item.setTitle(post.optString("title"));
                item.setThumbnail(post.optString("thumbnail"));
                feedsList.add(item);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
```

### Handle RecyclerView Click Event

Handling click event on RecyclerView is not as sweet as handling click listener in ListView or GridView. Android RecyclerView doesn’t provide any built in listeners or handy way of handling click events.

Let us declare a interface that specifies listener’s behavior. When user clicks on the RecyclerView the listener will return the FeedItem for the selected row.

```java
public interface OnItemClickListener {
    void onItemClick(FeedItem item);
}
```

Now turn on to adapter and declare an instance variable of OnItemClickListener along with getter and setter methods.

```java
private OnItemClickListener onItemClickListener;
public OnItemClickListener getOnItemClickListener() {
    return onItemClickListener;
}

public void setOnItemClickListener(OnItemClickListener onItemClickListener) {
    this.onItemClickListener = onItemClickListener;
}
```

In activity class, let set the click listener to adapter by calling setOnItemClickListener() method.

```java
adapter.setOnItemClickListener(new OnItemClickListener() {
    @Override
    public void onItemClick(FeedItem item) {
        Toast.makeText(MainActivity.this, item.getTitle(), Toast.LENGTH_LONG).show();

    }
});
```

Now, attach the View.OnClickListener to each of the view you want to handle click. Add the following snippet to onBindViewHolder of the RecyclerView.Adapter. When ImageView or TextView is clicked, we will receive the event back to the caller activity.

```java
View.OnClickListener listener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        onItemClickListener.onItemClick(feedItem);
    }
};
customViewHolder.imageView.setOnClickListener(listener);
customViewHolder.textView.setOnClickListener(listener);
```
