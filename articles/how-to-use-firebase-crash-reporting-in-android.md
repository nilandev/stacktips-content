---
id: 56
title: How to Use Firebase Crash Reporting in Android
slug: how-to-use-firebase-crash-reporting-in-android
excerpt: Firebase crash reporting automatically logs the crashes and custom events. In this tutorial we will see how use Firebase Crash Reporting in Android.
difficulty: beginners
publishedDate: "2016-08-15T20:20:36.000Z"
updatedDate: "2025-09-16T23:05:22.625Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - firebase-crash-reporting-android
  - firebasecrash-report
  - firebase-android-setup
  - google-services-json
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Use Firebase Crash Reporting in Android"
  metaDescription: "Learn how to configure Firebase Crash Reporting in Android, add the SDK to your Gradle files, and log custom crashes and events with FirebaseCrash."
  metaKeywords: null
---

Firebase Crash Reporting is yet another Firebase feature announced at Google I/O 2016. It enables you to collect the detailed report of errors in your app.

Ones your app is published, it is difficult the understand the reason why the app is crashed. And hence it becomes very difficult to fix them. Crash reporting frameworks log the crashes and grouped into clusters of similar stack traces, and triaged by the severity of impact on your users.

Firebase crash reporting automatically logs the crashes and you may also log custom events to help capture the steps leading up to a crash.

In this tutorial, we will see how to configure and use Firebase Crash Reporting platform in your Android application.

## Configure the Firebase SDK.

Let us begin with creating a Firebase project in the [Firebase console](https://console.firebase.google.com). You will be asked to log in with your Google Mail account. Once you logged in, select **Add App** button to create a new project in Firebase Console.

1.  Select the **Android platform** to continue with Android Firebase configuration.

[![Create new project in Firebase console- Select Platform](/media/articles/77/Create-new-project-in-Firebase-console-Select-Platform.png)](http://stacktips.com)

2.  If you have not created any app before, you will be asked to select the **Project Name** and **Country Region**. Provide the details and Continue with the configuration.
3.  Enter your Android app package name. This should be same as defined in your android `AndroidMaifest.xml` file.

[![Firebase Android Configuration](/media/articles/77/Firebase-Android-Configuration-e1470927322754-620x466.png)](http://stacktips.com)

4.  You may provide the debug `keystore` SHA-1 certificate. However this is optional and hence you may leave it empty.
5.  Select **Add App** button. This will download the `google-services.json` configuration file for your app. Copy this file into your project’s module folder, typically inside app/ directory.

[![Project Structure](/media/articles/77/Project-Structure.png)](http://stacktips.com)

Screenshot depicts project structure after adding google-services.json file

7.  Now, add the required Firebase SDK dependencies to your project. Modify the project level build.gradle (<project>/build.gradle) file and add the google-services.

```java
buildscript {
  dependencies {
    // Add this line
    classpath 'com.google.gms:google-services:3.0.0'
  }
}
```

And, add the following to app module level `build.gradle` file.

```java
apply plugin: 'com.android.application'
android {
   ....
}
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    ...
    //Add this
    compile 'com.google.firebase:firebase-crash:9.4.0'
}

// Add to the bottom of the file
apply plugin: 'com.google.gms.google-services'
```

After the dependencies are added **Sync** your project with gradle file changes. With this we’re done with the project configuration.

## Reporting Custom Crash

Firebase Crash Reporting automatically generates reports for fatal errors. However, if you want to report your own exception, you can do it using `FirebaseCrash.report(exception)` method. For example:

```java
Exception exception = new Exception("Oops! Firebase non-fatal error!");
FirebaseCrash.report(exception);
```

Optionally, you can report custom logs by calling `log()` method.

```java
FirebaseCrash.log("Button clicked!");
```

Please note, it usually takes up to 20 minutes to get your error logs on Firebase console.

[![Firebase Crash Reporting Android](/media/articles/77/Firebase-Crash-Reporting-Android-940x423.png)](http://stacktips.com)
