---
id: 160
title: Android Lollipop Swipe to Refresh Example
slug: android-lollipop-swipe-to-refresh-example
excerpt: The Swipe to refresh layout is used to indicate user while the content of a screen is being updated. It was earlier introduced in Android 4.4 Kitkat, and was named as SwipeRefreshLayout. Visually it was represented just below ActionBar.
difficulty: beginners
publishedDate: "2015-01-27T17:27:00.000Z"
updatedDate: "2025-09-16T23:05:28.315Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - design-pattern
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the course of this tutorial, we will take a look into the new Swipe to refresh layout introduced in material design.

Android Lollipop is baked with some of the finest looking user interface widgets and UI design guidelines, and what they call it as Material Design. Some of the widgets are fine-tuned while some new of them are added to the SDK.

The Swipe to refresh layout is used to indicate user while the content of a screen is being updated. The Swipe to refresh layout was earlier introduced in Android 4.4 Kitkat and was named as `SwipeRefreshLayout`. Visually it was represented just below ActionBar.

Since Android Lollipop, the visual representation of the swipe to refresh layout has been changed drastically. It appears as a circular refresh animation, horizontally centered and appears right below the [Toolbar](http://stacktips.com/android/android-lollipop-toolbar-example "Android Lollipop Toolbar Example"). Check out official documentation for [Swipe to refresh](http://www.google.co.uk/design/spec/patterns/swipe-to-refresh.html) layout in Android Lollipop.

# Swipe to Refresh Layout Example

In this example, we will create the sample application that downloads the data from a server feed, and displays on a ListView. It also allows the user the ability to swipe down and request for updated data from the server.

The output of this example is as the following video.

{{< youtube y9RdvzelGbQ >}}

  
Now without wasting much of time, lets us move straight into its implementation. To implement Swipe to refresh layout, you will need the v4 support library. You can include the v4 support library to your project by adding below dependency in `build.gradle` file.

```java
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile "com.android.support:appcompat-v7:21.0.+"
}
```

Secondly, let us define the swipe to refresh layout and list view to show the feed response. Create a new layout file inside res/layout folder, name it as activity\_main.xml and paste the below code snippets.

### activity\_main.xml

```xml
<android.support.v4.widget.SwipeRefreshLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/swipeRefreshLayout"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <ListView
        android:id="@+id/listView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"></ListView>
</android.support.v4.widget.SwipeRefreshLayout>
```

## How it works

-   The ListView is placed as a child view to SwipeRefreshLayout.
-   This allows user the ability to show the loading spinner when user swipes the ListView edge. All the functionality of displaying loading bar is encapsulated inside `SwipeRefreshLayout` class.
-   When user swipes down, the `OnRefreshListener` events gets fired. You can handle this event to write the logic for downloading or refreshing data.
-   Note that, once data is downloaded, user has to manually call `setRefreshing(false)` to hide the refresh spinner.

Let us now initialize the SwipeRefreshLayout and ListView from activity and write the logic to download data from server.

In this example we are downloading data form server and parsing JSON response before we rendering it on the ListView. Please refer [Android Networking Tutorial](http://stacktips.com/android/android-networking-tutorial "Android Networking Tutorial") for understanding more on this code.

### MainActivity.java

```java
public class MainActivity extends ActionBarActivity {

    private ListView mListView = null;
    private ArrayAdapter mAdapter = null;
    private SwipeRefreshLayout mSwipeRefreshLayout = null;

    private String[] feedList = null;
    private String feedUrl = "http://stacktips.com/api/get_category_posts/?dev=1&slug=android";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        mListView = (ListView) findViewById(R.id.listView);

        //Start Downloading data
        new DownloadFilesTask().execute(feedUrl);

        //Initialize swipe to refresh view
        mSwipeRefreshLayout = (SwipeRefreshLayout) findViewById(R.id.swipeRefreshLayout);
        mSwipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                //Refreshing data on server
                new DownloadFilesTask().execute(feedUrl);
            }
        });
    }

    private void updateList() {
        ArrayAdapter mAdapter = new ArrayAdapter(MainActivity.this, android.R.layout.simple_list_item_1, feedList);
        mListView.setAdapter(mAdapter);

        if (mSwipeRefreshLayout.isRefreshing()) {
            mSwipeRefreshLayout.setRefreshing(false);
        }
    }

    private class DownloadFilesTask extends AsyncTask<String, Void, Void> {

        @Override
        protected void onProgressUpdate(Void... values) {
        }

        @Override
        protected void onPostExecute(Void result) {
            if (null != feedList) {
                updateList();
            }
        }

        @Override
        protected Void doInBackground(String... params) {
            // getting JSON string from URL
            JSONObject json = getJSONFromUrl(params[0]);

            //parsing json data
            parseJson(json);
            return null;
        }
    }

    public JSONObject getJSONFromUrl(String url) {
        InputStream is = null;
        JSONObject jObj = null;
        String json = null;

        try {
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpPost httpPost = new HttpPost(url);

            HttpResponse httpResponse = httpClient.execute(httpPost);
            HttpEntity httpEntity = httpResponse.getEntity();
            is = httpEntity.getContent();

            BufferedReader reader = new BufferedReader(new InputStreamReader(is, "iso-8859-1"), 8);
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = reader.readLine()) != null) {
                sb.append(line + "\n");
            }
            is.close();
            json = sb.toString();

            jObj = new JSONObject(json);

        } catch (Exception e) {
            Log.e("Error", "Error parsing data " + e.toString());
        }
        return jObj;
    }

    public void parseJson(JSONObject json) {
        try {
            if (json.getString("status").equalsIgnoreCase("ok")) {
                JSONArray posts = json.getJSONArray("posts");

                feedList = new String[posts.length()];
                for (int i = 0; i < posts.length(); i++) {
                    JSONObject post = (JSONObject) posts.getJSONObject(i);
                    feedList[i] = post.getString("title");
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
```

\[download url=”https://github.com/npanigrahy/Android-Lollipop-Swipe-to-Refresh”\]
