---
id: 106
title: Android Networking Tutorial
slug: android-networking-tutorial
excerpt: In this android networking tutorial we will create a sample application that illustrates how to perform network operations in android.
difficulty: beginners
publishedDate: "2014-09-13T03:00:04.000Z"
updatedDate: "2025-09-16T23:05:30.129Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-httpurlconnection
  - apache-httpclient-android
  - android-asynctask-networking
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Networking Tutorial: HttpClient vs HttpURLConnection"
  metaDescription: "Learn how to perform network operations in Android using Apache HttpClient and HttpURLConnection, download JSON data, and follow networking best practices."
  metaKeywords: null
---

## Introduction

In this android networking tutorial we will create a sample application that illustrates how to perform network operations in android. By going through this lesson, you will learn the following topics

1.  How to create network connection? What are the different available Http clients in android
2.  How download, parse and consume JSON data?
3.  What are the best approaches and design practices?

Networking in android means the ability to send and receive data from remote server. This data can be either a plain text, xml, json, image or a video stream. Android primarily supports two HTTP clients for networking, one by using `Apache HttpClient` and other using `HttpURLConnection`.

### Apache HttpClient vs HttpURLConnection

Older version of android was supporting only Apache HttpClient for all network operations. But since `Gingerbread (Android 2.3`) , android recommend to use HttpURLConnection. HttpURLConnection is simple and thin API’s supporting transparent compression and response caching. Response cache is used to improve speed and loading time.

## Android Networking Using Apache HttpClient

In this tutorial we will create a sample application that illustrates how to perform network operations in android. To make this post simplified, we will download the data from the following url and will show the article titles on a ListView. Refer the screenshot for an overview of how application looks

Feed request Url: [http://stacktips.com/api/get\_category\_posts/?dev=1&slug=android](http://stacktips.com/api/get_category_posts/?dev=1&slug=android)

Below is the format of response we are expecting from server. We will get the list of posts and each post contains details like title, content, excerpt, etc. We will take all the list of titles and will display on the ListView.

[![JSON Feed Response](/media/articles/265/JSON-Feed-Response.png)](http://stacktips.com)

## Application Manifest Permissions

As our application is connecting to remote server, we have to provide internet permission. Just add the below line of code in your application manifest. This should be a direct child of <manifest> element.

```xml
 <uses-permission android:name="android.permission.INTERNET"/>
```

  

## Downloading Data Using HttpGet

Downloading data is an long running task and it is recommended that all the long running task should be performed off the UI thread. And in this example we will create a simple downloader asynchronous task that performs the feed download action.

#### What is AsyncTask?

Async task enables you to implement multi threading without get hands dirty into threads. AsyncTask enables proper and easy use methods that allows performing background operations and passing the results back to the UI thread. Learn more about android AsyncTask from below links

**\* [Handler and AsyncTask in Android](http://stacktips.com/android/handler-and-asynctask-in-android)**

#### AsyncHttpTask.java

```java
public class AsyncHttpTask extends AsyncTask<String, Void, Integer> {

        @Override
        protected Integer doInBackground(String... params) {
            InputStream inputStream = null;
            Integer result = 0;
            try {
                /* create Apache HttpClient */
                HttpClient httpclient = new DefaultHttpClient();

                /* HttpGet Method */
                HttpGet httpGet = new HttpGet(params[0]);

                /* optional request header */
                httpGet.setHeader("Content-Type", "application/json");

                /* optional request header */
                httpGet.setHeader("Accept", "application/json");

                /* Make http request call */
                HttpResponse httpResponse = httpclient.execute(httpGet);
                int statusCode = httpResponse.getStatusLine().getStatusCode();

                /* 200 represents HTTP OK */
                if (statusCode ==  200) {
                    /* receive response as inputStream */
                    inputStream = httpResponse.getEntity().getContent();
                    String response = convertInputStreamToString(inputStream);
                    parseResult(response);
                    result = 1; // Successful
                } else{
                    result = 0; //"Failed to fetch data!";
                }
            } catch (Exception e) {
                Log.d(TAG, e.getLocalizedMessage());
            }
            return result; //"Failed to fetch data!";
        }\

        @Override
        protected void onPostExecute(Integer result) {
            /* Download complete. Lets update UI */
            if(result == 1){
                arrayAdapter = new ArrayAdapter(MyActivity.this, android.R.layout.simple_list_item_1, blogTitles);
                listView.setAdapter(arrayAdapter);
            }else{
                Log.e(TAG, "Failed to fetch data!");
            }
        }
    }
```

#### Code Explanation

-   `AsyncHttpTask` is used to perform http connection and download data from server.
-   `doInBackground()` method is executed on a new thread. This method takes feed request url as input parameter.
-   This is using apache `HttpClient` method to download the data from server
-   Once the response is received it checks for the response status code. HTTP status 200 means, the request is successful. You may validate for other http error code types and do the required validations. Once request is successful, it fetches the content stream.
-   Now we have to convert the stream to string and then process your parser. The stream to string conversation and the JSON parser is done in two different method. Later on this tutorial we will see them.
-   Once the data is parsed, the `doInBackground()` method completes its tasks and then `onPostExecute()` method invokes.
-   `onPostExecute()` method we will update the adapter value and the list content.

## Converting Stream to String

```java
private String convertInputStreamToString(InputStream inputStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(inputStream));
        String line = "";
        String result = "";
        while((line = bufferedReader.readLine()) != null){
            result += line;
        }

            /* Close Stream */
        if(null!=inputStream){
            inputStream.close();
        }
        return result;
    }
```

  

## JSON Response Parsing

Note: The focus of this tutorial is more on explaining network connections in android and not focused towards explaining the json parser. If you are looking for some help on JSON parsing, you may read the below post

**\* [JSON Feed Reader in Android](http://stacktips.com/android/json-feed-reader-in-android "JSON Feed Reader in Android")**

```java
private void parseResult(String result) {
        try{
            JSONObject response = new JSONObject(result);
            JSONArray posts = response.optJSONArray("posts");
            blogTitles = new String[posts.length()];

            for(int i=0; i< posts.length();i++ ){
                JSONObject post = posts.optJSONObject(i);
                String title = post.optString("title");
                blogTitles[i] = title;
            }
        }catch (JSONException e){
            e.printStackTrace();
        }
    }
```

  

## Using AsyncHttpTask From Activity

As discussed earlier, our ui contains a simple ListView and uses basic `ArrayAdapter`. You may customise your ListView of the kind you want. Need guide on building custom list? Checkout our below tutorial.

\* [Android ListView Tutorial](http://stacktips.com/android/android-listview-tutorial "Android ListView Tutorial")  
\* [ListView with Section Header in Android](http://stacktips.com/android/listview-with-section-header-in-android "ListView with Section Header in Android")

#### Activity layout (activity\_my.xml)

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:paddingBottom="@dimen/activity_vertical_margin"
    tools:context=".MyActivity">

    <ListView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/listView"
        android:layout_alignParentLeft="true"
        android:layout_alignParentStart="true"
        android:choiceMode="singleChoice" />
</RelativeLayout>
```

#### Activity Java class

Let us have a look into Activity onCreate() method

```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);

        listView = (ListView) findViewById(R.id.listView);
        final String url = "http://stacktips.com/api/get_category_posts/?dev=1&slug=android";
        new AsyncHttpTask().execute(url);
    }
```

  

## Android Networking Using HttpURLConnection

In the above example, we have used Apache `HttpClient` to connect to server and download data. Now let us use `HttpURLConnection` in the same example. The only place we need to change is inside `doInBackgrond()` method of AsyncHttpTask class.

```java
 @Override
        protected Integer doInBackground(String... params) {
            InputStream inputStream = null;
            HttpURLConnection urlConnection = null;
            Integer result = 0;
            try {
                /* forming th java.net.URL object */
                URL url = new URL(params[0]);
                urlConnection = (HttpURLConnection) url.openConnection();

                 /* optional request header */
                urlConnection.setRequestProperty("Content-Type", "application/json");

                /* optional request header */
                urlConnection.setRequestProperty("Accept", "application/json");

                /* for Get request */
                urlConnection.setRequestMethod("GET");
                int statusCode = urlConnection.getResponseCode();

                /* 200 represents HTTP OK */
                if (statusCode ==  200) {
                    inputStream = new BufferedInputStream(urlConnection.getInputStream());
                    String response = convertInputStreamToString(inputStream);
                    parseResult(response);
                    result = 1; // Successful
                }else{
                    result = 0; //"Failed to fetch data!";
                }
            } catch (Exception e) {
                Log.d(TAG, e.getLocalizedMessage());
            }
            return result; //"Failed to fetch data!";
        }
```

  

## Android Networking Best Practices

-   Do not ever download data in main thread. That will cause Application Not Responding (ANR)
-   Use `HttpURLConnection` instead of apache `HttpClient` if your application is targeted from Android 2.3 onwards
-   If you have a very long running task like uploading a video, use IntentService
-   Let user know what is going on. This means there should be some visual representation of download progress. In this example we have not used any (which will show an empty screen while data is being downloaded). Without a progress representation, your application will mislead user.

Download the Android Networking Example using Apache HttpClient from from [**GitHub**](https://github.com/javatechig/Android-HttpGet-Apache-HttpClient).

Download the Android Networking Example using HttpURLConnection from [**GitHub**](https://github.com/javatechig/Android-HttpGet-HttpURLConnection).

# 12\. Screenshot

[![Android Networking Example](/media/articles/265/Android-Networking-Example-620x1048.png)](http://stacktips.com)
