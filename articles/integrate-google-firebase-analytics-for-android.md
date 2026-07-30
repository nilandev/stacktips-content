---
id: 65
title: How to Integrate Google Firebase Analytics for Android
slug: integrate-google-firebase-analytics-for-android
excerpt: After you release your app to market, it is important to study how people use your application to…
difficulty: beginners
publishedDate: "2016-08-12T03:50:08.000Z"
updatedDate: "2025-09-16T23:05:23.005Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/advance-android-tutorials/tree/master/firebase-analytics"
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

After you release your app to market, it is important to study how people use your application to make informed decisions about how to improve and market your app. For this, you can integrate app measurement solutions into your app.

There are many free and premium app measurement solutions out there in the market. Google Analytics, Flurry, Adobe Omniture are the most popular ones. Google recently added Firebase Analytics to the race. The core idea behind all of these tools is to provide insight on app usage and user engagement.

## What is Firebase Analytics?

Firebase Analytics from Google is a free app measurement solution using which you can understand how people use your app and track user engagement.

-   Firebase SDK for mobile platforms, automatically captures a number of events and user properties and also allows you to define your own custom events to measure the things that uniquely matter to your business.
-   It also allows you to perform custom analysis and do complex analysis by joining multiple data sources.
-   You can track how your campaigns across organic and paid channels are performing and accordingly define an effective marketing strategy.

The detailed insight of your data can be viewed in Firebase console. The dashboard provides detailed insights about your data — from summary data such as active users and demographics to more detailed data such as identifying your most purchased items.

## Integrating Firebase Analytics

To use Firebase Analytics to your Android project, you need **Android 2.3 (Gingerbread)** or newer and **Google Play Services 9.4.0** or newer. In this example we use **Android Studio 2.2**, **Mximunum SDK version 17**.

Now that we understand what the Firebase Analytics platform can do, let us see how to use Firebase Analytics for your Android application to track application usage. Integrating with Firebase Analytics in Android involves two steps; installing the Firebase SDK and Logging events and/or properties.

### Configure the Firebase SDK

Let us begin with creating a Firebase project in the [Firebase console](https://console.firebase.google.com). You will be asked to log in with your Google Mail account. Once you logged in, select **Add App** button to create a new project in Firebase Console.

1.  Select the **Android platform** to continue with Android Firebase configuration.

[![Create new project in Firebase console- Select Platform](/media/articles/86/Create-new-project-in-Firebase-console-Select-Platform.png)](http://stacktips.com)

2.  If you have not created any app before, you will be asked to select the **Project Name** and **Country Region**. Provide the details and Continue with the configuration.
3.  Enter your Android app package name. This should be same as defined in your android `AndroidMaifest.xml` file.

[![Firebase Android Configuration](/media/articles/86/Firebase-Android-Configuration-e1470927322754-620x466.png)](http://stacktips.com)

4.  You may provide the debug `keystore` SHA-1 certificate. However this is optional and hence you may leave it empty.
5.  Select **Add App** button. This will download the `google-services.json` configuration file for your app. Copy this file into your project’s module folder, typically inside app/ directory.

[![Project Structure](/media/articles/86/Project-Structure.png)](http://stacktips.com)

Screenshot depicts project structure after adding google-services.json file

7.  Now, add the required Firebase SDK dependencies to your project. Modify the project level build.gradle (<project>/build.gradle) file and add the google-services.

```groovy
buildscript {
  dependencies {
    // Add this line
    classpath 'com.google.gms:google-services:3.0.0'
  }
}
```

And, add the following to app module level `build.gradle` file.

```groovy
apply plugin: 'com.android.application'
android {
   ....
}
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    ...
    //Add this
    compile 'com.google.firebase:firebase-core:9.4.0'
}

// Add to the bottom of the file
apply plugin: 'com.google.gms.google-services'
```

After the dependencies are added Sync your project with gradle file changes. With this we’re done with the project configuration. Once the Firebase SDK is configured properly, several events are captured automatically by Firebase. Check out the list of [default events](https://support.google.com/firebase/answer/6317485) tracked by Firebase SDK.

### Tracking User Events

Let us first obtain the `FirebaseAnalytics` [singleton](/articles/singleton-design-pattern-in-java) instance. The `FirebaseAnalytics` class is the heart of all firebase configuration that provides method for logging events and setting user properties. Currently it provides following methods:

| getInstance(Context context) | Returns the singleton FirebaseAnalytics interface. |
| --- | --- |
| logEvent(String name, Bundle params) | Logs an app event. |
| setAnalyticsCollectionEnabled(boolean enabled) | Sets whether analytics collection is enabled for this app on this device. |
| setMinimumSessionDuration(long milliseconds) | Sets the minimum engagement time required before starting a session. The default value is 10000 (10 seconds). |
| setSessionTimeoutDuration(long milliseconds) | Sets the duration of inactivity that terminates the current session. The default value is 1800000 (30 minutes). |
| setUserId(String id) | Sets the user ID property. |
| setUserProperty(String name, String value) | Sets a user property to a given value. |

You can use the above methods to configure firebase analytics tracker and track custom everts.  

**MainActivity.java**

```java
public class MainActivity extends AppCompatActivity {

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Obtain the FirebaseAnalytics instance.
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);
        mFirebaseAnalytics.setAnalyticsCollectionEnabled(true);
        mFirebaseAnalytics.setMinimumSessionDuration(20000);

        Button subscribeButton = (Button) findViewById(R.id.button1);
        subscribeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Bundle bundle = new Bundle();
                String id = "1year";
                String name = "Annual membership subscription";
                bundle.putString(FirebaseAnalytics.Param.ITEM_ID, id);
                bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, name);
                bundle.putString(FirebaseAnalytics.Param.CURRENCY, "EUR");
                bundle.putString(FirebaseAnalytics.Param.PRICE, "299.00");
                mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle);
            }
        });

    }
}
```

### Tracking User Properties

User properties are attributes you define to describe segments of your user base, such as language preference or geographic location. Firebase automatically logs some of the user properties; such as App version, Device model, Gender, Age, Interests, OS version and New/Established.

You can set up to 25 different Analytics User Properties in your app.

Note that, the user property names are case-sensitive and that setting two user properties whose names differ only in case results in two distinct user properties being logged.

```java
mFirebaseAnalytics.setUserProperty("favorite_category", "Android Tutorials");
```
