---
id: 88
title: How to Enable Deep Links for App Content in Android
slug: how-to-enable-deep-links-for-app-content-in-android
excerpt: Enable deep links for App content in Android, you need to fist add intent filters for the relevant activities in your application manifest. The intent filters allow deep linking to the content in any of your activities.
difficulty: beginners
publishedDate: "2016-06-13T18:58:48.000Z"
updatedDate: "2025-09-16T23:05:24.254Z"
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

Enable deep links for App content in Android, you need to fist add intent filters for the relevant activities in your application manifest. The intent filters allow deep linking to the content in any of your activities.

### Add Intent Filters for Links

For example, a user clicks on a website link `http://stacktips.com` on the browser, that will resolve the link and open the content in installed activity.

```xml
<activity
    android:name="com.example.MainActivity"
    android:label="@string/my_app" >
    <intent-filter android:label="@string/my_app">

        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- Accepts URIs that begin with "http://stacktips.com/articles” -->
        <data android:scheme="http" android:host="stacktips.com" android:pathPrefix="/articles" />
    </intent-filter>
</activity>
```

Once the above intent filters are added, Android will be able to route any Intent that has matching URIs to your app at runtime.

### Read Data from Incoming Intents

Once Android system starts the routed activity through an intent filter. You can get the data bundle from Intent to determine what you which activity or fragment to render. Call the `getData()` and `getAction()` methods to retrieve the data and action associated with the incoming Intent. You can call these methods at any time during the lifecycle of the activity, but you should generally do so during early callbacks such as `onCreate()` or `onStart()`.

The following code snippet shows how to retrieve data from an Intent

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    Intent intent = getIntent();
    String action = intent.getAction();
    Uri data = intent.getData();
}
```

### Test Your Deep Links

You can use the Android Debug Bridge with the activity manager tool to test that the intent filter URIs you specified for deep linking resolve to the correct app activity. You can run the adb command against a device or an emulator.

The following command tries to view a target app activity that is associated with the specified URI.

```bash
$ adb shell am start -W -a android.intent.action.VIEW -d http://stacktips.com/articles com.example
```
