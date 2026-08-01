---
id: 326
title: JSON Feed Reader in Android
slug: json-feed-reader-in-android
excerpt: In the course of this tutorial, we will take step by step look into building a JSON feed…
difficulty: beginners
publishedDate: "2013-06-16T13:28:50.000Z"
updatedDate: "2025-09-16T23:05:36.328Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-json-parsing
  - asynctask-download-json
  - android-listview-webview
  - share-intent-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the course of this tutorial, we will take step by step look into building a JSON feed reader in Android. All the source code used in this example, are open source. You may grab a copy of the project source code from the download link provided.

This app will fetch the recent posts from stacktips.com and display list of posts along with post title, thumbnail, description on screen. You can also view details of each feed, share the article and can view the article on original website using Android `WebView`.

#### JSON Feed URL

```text
http://stacktips.com/api/get_category_posts/?dev=1&slug=android
```

You will learn following things in this article.

-   Designing User Interface
-   Using AsyncTask to Download Data From Remote Server
-   JSON Parsing In Android
-   Downloading Image Asynchronously and Displaying In Android ListView
-   Using Share Intent to Share Article in Android
-   Loading Original Feed Link on Android WebView

# 1. Designing User Interface

Here in this example, we are using three Activities. While first Activity is used to list out all feed items on a ListView, Second one is used to show the image preview and the description of each feed. Another Activity is used to view the original feed item on a WebView.

Below are the listed three activity classes

-   com.javatechig.feedreader.FeedDetailsActivity
-   com.javatechig.feedreader.FeedListActivity
-   com.javatechig.feedreader.WebViewActivity

In this tutorial, I assume you already have knowledge of creating basic user interfaces. We will be creating the layouts as shown in the images below.

[![json-feed-reader-android-featured-715x300](/media/articles/420/json-feed-reader-android-featured-715x300.png)](http://stacktips.com)

On landing page of my example, It uses a ListView which can display thumbnail image, title and date published, so here we need to create a custom ListView. If you are not proficient on creating such custom ListView, then you may visit my previous post on Android ListView Tutorial.

For simplicity sake, our previous ListView Tutorial was using static data for list. But in this example, I am fetching the data from [JavatechIG](http://stacktips.com/ "JavatechIG") feed server and then displaying on list view. During fetching data from server it will display a loading ProgressBar on screen and disappears once the list items are downloaded. Let’s start getting our the code to build the user interface set up.

#### activity\_post\_list.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <ProgressBar
        android:id="@+id/progressBar"
        style="?android:attr/progressBarStyleLarge"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center" />

    <ListView
        android:id="@+id/custom_list"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:cacheColorHint="#00000000"
        android:dividerHeight="1dp"
        android:focusable="false"
        android:listSelector="@drawable/list_selector_flatcolor"
        android:visibility="gone" />

</FrameLayout>
```

In the above xml code, we are using FrameLayout. We will be displaying either of the UI widgets. During loading we will display ProgressBar and then we will display ListView after feed data is downloaded.

#### list\_row\_layout.xml

This layout will be used for ListView row. Each Row is an RelativeLayout with an ImageView and two TextViews placed adjacent to ImageView.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:minHeight="50dp"
    android:orientation="horizontal" >

    <ImageView
        android:id="@+id/thumbImage"
        android:layout_width="70dp"
        android:layout_height="70dp"
        android:layout_alignParentLeft="true"
        android:layout_centerVertical="true"
        android:background="@drawable/list_placeholder" />

    <TextView
        android:id="@+id/title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/thumbImage"
        android:lineSpacingExtra="3dp"
        android:paddingLeft="5dp"
        android:paddingTop="5dp"
        android:text=""
        android:textColor="@drawable/list_item_text_selector"
        android:textStyle="bold"
        android:typeface="sans" />

    <TextView
        android:id="@+id/date"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/title"
        android:layout_toRightOf="@id/thumbImage"
        android:paddingLeft="5dp"
        android:paddingTop="5dp"
        android:text=""
        android:textColor="@drawable/list_item_text_selector"
        android:textSize="11sp" />

</RelativeLayout>
```

In the above code, I have used “list\_item\_text\_selector” for changing the TextView color while list row is pressed.

#### list\_item\_text\_selector.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_pressed="true"
        android:color="@color/text_color_inverse" />
    <item android:state_focused="true"
        android:color="@color/text_color_inverse" />
    <item android:color="@color/text_color_default" />
</selector>
```

We are ready with the layout for FeedList Screen. Now lets create a custom Adapter.

#### CustomListAdapter.java

```java
public class CustomListAdapter extends BaseAdapter {
    private ArrayList listData;
    private LayoutInflater layoutInflater;
    private Context mContext;

    public CustomListAdapter(Context context, ArrayList listData) {
        this.listData = listData;
        layoutInflater = LayoutInflater.from(context);
        mContext = context;
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
            convertView = layoutInflater.inflate(R.layout.list_row_layout, null);
            holder = new ViewHolder();
            holder.headlineView = (TextView) convertView.findViewById(R.id.title);
            holder.reportedDateView = (TextView) convertView.findViewById(R.id.date);
            holder.imageView = (ImageView) convertView.findViewById(R.id.thumbImage);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }

        FeedItem newsItem = (FeedItem) listData.get(position);
        holder.headlineView.setText(newsItem.getTitle());
        holder.reportedDateView.setText(newsItem.getDate());

        if (holder.imageView != null) {
            new ImageDownloaderTask(holder.imageView).execute(newsItem.getAttachmentUrl());
        }

        return convertView;
    }

    static class ViewHolder {
        TextView headlineView;
        TextView reportedDateView;
        ImageView imageView;
    }
}
```

Now you must be getting some compilation error for FeedItem. FeedItem is an model class used for reading feeds. It has the following fields with public getter and setter methods.

#### FeedItem.java

```java
public class FeedItem implements Serializable {
    private String title;
    private String date;
    private String attachmentUrl;
    private String id;
    private String content;
    private String url;
}
```

Now, we are ready for the first screen layout. Let’s move on to the FeedDetailsActivity layout. In this screen we have thumbnail image, title and the content to be displayed. Below is the layout code snippet.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#ffffff"
    android:orientation="vertical" >

    <RelativeLayout
        android:layout_width="fill_parent"
        android:layout_height="200dp" >

        <ImageView
            android:id="@+id/featuredImg"
            android:layout_width="fill_parent"
            android:layout_height="fill_parent" >
        </ImageView>

        <TextView
            android:id="@+id/title"
            android:layout_width="fill_parent"
            android:layout_height="100dp"
            android:layout_alignParentBottom="true"
            android:background="@drawable/image_border"
            android:ellipsize="end"
            android:gravity="bottom"
            android:lineSpacingExtra="3dp"
            android:maxLines="2"
            android:padding="5dp"
            android:text=""
            android:textColor="#00000c"
            android:textStyle="bold" />
    </RelativeLayout>

    <ScrollView
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:padding="5dp" >

        <TextView
            android:id="@+id/content"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text=""
            android:textColor="#00000c" />
    </ScrollView>

</LinearLayout>
```

In FeedDetailsActivity, we are using Android ActionBar commands.

##### menu.xml

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

    <item
        android:id="@+id/menu_share"
        android:icon="@android:drawable/ic_menu_share"
        android:showAsAction="always"
        android:title="Share"/>
    <item
        android:id="@+id/menu_view"
        android:icon="@android:drawable/ic_menu_info_details"
        android:showAsAction="always"
        android:title="View"/>

</menu>
```

Now we are done with all xml layouts. Let us have a look into the Activity components

# 2. AsyncTask to Download Data from Server

AsyncTask enables you to implement MultiThreading without get Hands dirty into threads. AsyncTask enables proper and easy use of the UI thread. It allows performing background operations and passing the results on the UI thread. If we are doing something isolated related to UI, for example downloading data and prepare for a list, it is recemended to use AsyncTask.

**[http://stacktips.com/android/difference-between-handler-and-asynctask-in-android/](http://stacktips.com/android/difference-between-handler-and-asynctask-in-android/)**

#### DownloadFeedTask.java

```java
private class DownloadFilesTask extends AsyncTask<String, Integer, Void> {

        @Override
        protected void onProgressUpdate(Integer... values) {
        }

        @Override
        protected void onPostExecute(Void result) {
            if (null != feedList) {
                updateList();
            }
        }

        @Override
        protected Void doInBackground(String... params) {
            String url = params[0];

            // getting JSON string from URL
            JSONObject json = getJSONFromUrl(url);

            //parsing json data
            parseJson(json);
            return null;
        }
    }
```

#### Downloading JSON from server

As downloading of feed data from JavatechIG is a long running task, we are doing it inside doInBackground method. Once we have the data downloaded and parsed, then we can update the ListView with appropriate updated data.

```java
public JSONObject getJSONFromUrl(String url) {
        InputStream is = null;
        JSONObject jObj = null;
        String json = null;

        // Making HTTP request
        try {
            // defaultHttpClient
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpPost httpPost = new HttpPost(url);

            HttpResponse httpResponse = httpClient.execute(httpPost);
            HttpEntity httpEntity = httpResponse.getEntity();
            is = httpEntity.getContent();

            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    is, "iso-8859-1"), 8);
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = reader.readLine()) != null) {
                sb.append(line + "\n");
            }
            is.close();
            json = sb.toString();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            jObj = new JSONObject(json);
        } catch (JSONException e) {
            Log.e("JSON Parser", "Error parsing data " + e.toString());
        }

        // return JSON String
        return jObj;

    }
```

The above method will download the Json feed and returned as a JSONObject. Now its the time to parse the JSON feed data

# 3. JSON Parsing In Android

The aove Feed link gives the below JSON object structure.

```json
{
   "status": "ok",
   "count": 10,
   "pages": 3,
   "posts": [
      {
         "id": 2398,
         "type": "post",
         "slug": "asynchronous-image-loader-in-android-listview",
         "url": "http://stacktips.com/android/asynchronous-image-loader-in-android-listview/",
         "status": "publish",
         "title": "Asynchronous Image Loader in Android ListView",
         "date": "2013-06-01 19:31:07",
         "attachments": [
            {
               "id": 2402,
               "url": "http://stacktips.com/wp-content/uploads/2013/06/Async_ListView.png",
               "slug": "async_listview",
               "title": "Async_ListView",
               "description": "",
               "caption": "",
               "parent": 2398,
               "mime_type": "image/png",
               "images": []
            }
         ],
         "comment_count": 3
      }
   ]
}
```

From this above structure we will be needing the title, date, url and attachment url. check out the code snippet below for json parsing.

```java
public void parseJson(JSONObject json) {
    try {

        // parsing json object
        if (json.getString("status").equalsIgnoreCase("ok")) {
            JSONArray posts = json.getJSONArray("posts");

            feedList = new ArrayList();

            for (int i = 0; i < posts.length(); i++) {
                JSONObject post = (JSONObject) posts.getJSONObject(i);
                FeedItem item = new FeedItem();
                item.setTitle(post.getString("title"));
                item.setDate(post.getString("date"));
                item.setId(post.getString("id"));
                item.setUrl(post.getString("url"));
                item.setContent(post.getString("content"));
                JSONArray attachments = post.getJSONArray("attachments");
                if (null != attachments && attachments.length() > 0) {
                    JSONObject attachment = attachments.getJSONObject(0);
                    if (attachment != null)
                    item.setAttachmentUrl(attachment.getString("url"));
                }

                feedList.add(item);
            }
        }
        } catch (JSONException e) {
        e.printStackTrace();
    }
}
```

# 4. Downloading Image Asynchronously

A good practice to bring the best performance for android application is to make sure your main thread does the minimum amount of work. Any long running tasks or heavy operations are usually performed in a different thread. Typical long running tasks could be network operations, reading files form memory, animations, etc.

Check out the below post for detailed implementation

[http://stacktips.com/android/asynchronous-image-loader-in-android-listview/](http://stacktips.com/android/asynchronous-image-loader-in-android-listview/)

# 5. Share Article in Android

One of the best and most useful feature is sharing of information across different social networks. Android platform provides handy way of sharing contents across different application using Share Intent. It lists out all of the available application that can handle the share event. Check out the code snippet

```java
Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, feed.getTitle()+"\n"+feed.getUrl());
sendIntent.setType("text/plain");
startActivity(Intent.createChooser(sendIntent, "Share using"));
```

Note: As sharing intent is taken care by platform, we don’t have control on the way and behavior of each application while sharing. For example, twitter has a limit of maximum of 140 characters for a message.

# 6. Loading url on Android WebView

We have an excellent post on using WebView in another section on our site. It will gives complete understanding on loading external URL on android WebView and different configurations.

[http://stacktips.com/android/android-webview-example/](http://stacktips.com/android/android-webview-example/)

[http://stacktips.com/android/display-html-in-android-](http://stacktips.com/android/display-html-in-android-textview/)

[http://stacktips.com/android/progressbar-while-loading-webview/](http://stacktips.com/android/progressbar-while-loading-webview/)

# 7. Download Complete Example

[![dl_github](/media/articles/420/dl_github.png)](https://github.com/javatechig/javatechig-android-advanced/tree/master/Feed%20Reader)

# 8. Working Demo

{{< youtube YTAMIK_ldhA >}}
