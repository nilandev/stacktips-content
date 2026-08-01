---
id: 333
title: Installing Android Studio
slug: installing-android-studio
excerpt: Android Studio is an IDE based on IntelliJ IDEA used for android application development. It is released on 15th may 2013. This tool has more options for Android Development, making the process faster and more productive. A “live layout” was shown that renders your app as you’re editing in real-time. In this tutorial you can learn steps for Installing Android Studio.
difficulty: beginners
publishedDate: "2013-05-19T05:08:19.000Z"
updatedDate: "2025-09-16T23:05:36.544Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - install-android-studio
  - android-studio-no-jdk-found-error
  - android-sdk-setup
course: null
displayOrder: 0
seo: 
  metaTitle: "Installing Android Studio: Setup and Common Fixes"
  metaDescription: "Learn the steps for installing Android Studio and how to fix common setup issues like the No JDK found error and outdated Android SDK templates."
  metaKeywords: null
---

[![Android Studio IDE](/media/articles/427/Android-Studio-IDE.png)](http://developer.android.com/sdk/index.html#Other)

Android Studio is an IDE based on IntelliJ IDEA used for android application development. It is released on 15th may 2013. This tool has more options for Android Development, making the process faster and more productive. A “live layout” was shown that renders your app as you’re editing in real-time. In this tutorial you can learn steps for Installing Android Studio.  
Know more about android studio features from [Android Studio Features](http://stacktips.com/2013/05/19/android-studio-features/ "Android Studio Features").

\[box style=”2″\] Android Studio is currently available as an early access preview. Several features are either incomplete or not yet implemented and you may encounter bugs. If you are not comfortable using an unfinished product, you may want to instead download (or continue to use) the ADT Bundle (Eclipse with the ADT Plug-in). \[/box\]

# Installing Android Studio

[![android-studio-viewing-layout_builder](/media/articles/427/android-studio-viewing-layout_builder.png)](http://stacktips.com)

# Some Common Problems

### 1. ERROR: cannot start Android Studio

```text
ERROR: cannot start Android Studio. No JDK found. Please validate either ANDROID_STUDIO_JDK, or JDK_HOME or JAVA_HOME points to valid JDK installation. ECHO is off. Press any key to continue
```

It is a known issue with android studio**.** On some Windows systems, the launcher script does not find where Java is installed. If you encounter this problem, you need to set an environment variable indicating the correct location. Select **Start menu > Computer > System Properties > Advanced System Properties**. Then open **Advanced tab > Environment Variables**, add new system variable `JAVA_HOME` that points to your JDK folder, for example `C:\Program Files\Java\jdk1.7.0_21`. [![setting up java path](/media/articles/427/setting-up-java-path.png)](http://stacktips.com)

### 2.Android SDK is out of date or is missing templates

```text
Your Android SDK is out of date or is missing templates. Please ensure you are using SDK version 22 or later.
```

This may happen because you already have your SDK installation up for Android Developers Bundle with eclipse. First open your SDK manager in the ADT Bundle and update you Android SDK Tools from 21.1 to 22 and then open your Android Studio. For windows user the tools and other SDK packages are saved with the Android Studio application directory. Windows:

\\Users\\AppData\\Local\\Android\\android-studio\\sdk\\ Mac: /Applications/Android\\ Studio.app/sdk/ Make sure your android-sdk-path is correct and the sdk tool version is 22 or later. Once android studio started, open the **Configure > Project Defaults > Project Structure**, set your project sdk is Android SDK. Then select SDK tab and select build target (eg: Android 4.2.2). Now you should be good to start.
