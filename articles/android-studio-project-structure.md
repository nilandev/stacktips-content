---
id: 209
title: Android Studio Project Structure
slug: android-studio-project-structure
excerpt: Android Studio is an IDE based on IntelliJ IDEA that uses gradle build system. In this tutorial we will see Android Studio Project Structure in detailed vs eclipse ADT project structure.
difficulty: beginners
publishedDate: "2014-08-05T16:04:54.000Z"
updatedDate: "2025-09-16T23:05:30.706Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-studio-project-structure
  - gradle-build-variants
  - eclipse-vs-android-studio
course: null
displayOrder: 0
seo: 
  metaTitle: "Android Studio Project Structure Explained"
  metaDescription: "Understand the Android Studio project structure, including Gradle build variants, modules, and folders, compared to the traditional Eclipse ADT layout."
  metaKeywords: null
---

Android application development is never been easy due to its raw nature and rapid growth and changes to the platform. If we cast our memories back a few years, Eclipse was the only IDE used for Android development. Eclipse is developed and maintained by open source alliance. Due to its open source and free nature, it always failed to match its all-time competitor platform IDE like XCode.

But now Android development looks very promising with the introduction of Android Studio IDE. Android Studio is an IDE based on IntelliJ IDEA that is used for android application development. The initial developer preview was released on 15th may 2013. This tool has more options that will enable developers to speed up application development. In the later section of this tutorial, we will understand the Android Studio project structure in the context of traditional eclipse based project structure.

Check out the following related articles,

-   [Android Studio Features](http://stacktips.com/android/android-studio-features)
-   [Installing Android Studio](http://stacktips.com/android/installing-android-studio)

## Gradle Based Build System

-   Android Studio is an IDE based on IntelliJ IDEA that uses Gradle build system. In eclipse, you can create only one build at a time. Which means, first create debug build and later you can create a release build by signing with your Keystore.
-   Android Studio projects are set up to build both a debug and a release version of the application. The debug version is signed with the developer key store key which is created automatically (Same as eclipse debug builds). The release is not signed during the build, this needs to happen after.
-   Android Studio, makes it easy to create several variants of an application, either for multi-apk distribution or for different flavors of an application. This means you can have different builds for debugging, release or maybe a different variant build from the same code.
-   Eclipse ADT plugin, always generate single R.java file but, Android Studio supports multiple. The generated R.java is located in the debug folder. You can change your build variant between debug and release and accordingly it will create the R.java file in selected debug or release directory.

Change the build type configuration here from the bottom left corner in your Android Studio.

[![Change Build Variants in Android Studio](/media/articles/277/Change-Build-Variants-in-Android-Studio-620x410.png)](http://stacktips.com)

[![Change Build Variants in Android Studio](/media/articles/277/Change-Build-Variants-in-Android-Studio2-620x411.png)](http://stacktips.com)

## Android Studio Project Structure

### 1\. Main Project

This would be the entire project context. Whatever you do in IntelliJ IDEA, you do that in the context of a project. A project is an organizational unit that represents a complete software solution. A project in Android Studio is like a workspace in Eclipse. In Android Studio a project can contain multiple modules. A module in Android Studio is like a project in Eclipse. In the above screenshot, “LoginAuthenticator” is the name of my project

This means that, in theory, it is possible to build multiple apps within the same project. From my personal experience, creating multiple apps within the same project doesn’t work well. So, I recommend not to make your hands dirty trying the same thing. Instead, It is a better idea to create a single app per single project.

![Android Studio Project Structure](/media/articles/277/Android-Studio-Project-Structure-620x388.png)

### 2\. .idea

Eclipse uses project.properties file for project-specific metadata. Here in the Android studio, this .idea does the same thing. This means the project-specific metadata is stored by Android Studio.

### 3\. Project Module (app)

This is the actual project folder where your application code resides. The application folder has following sub directories

a. **build:** This has all the complete output of the make process i.e. classes.dex, compiled classes and resources, etc.

In the Android Studio GUI, only a few folders are shown. The important part is that your R.java is found here under build/source/r/<build variant>/<package>/R.java

b. **libs :** This is a commonly seen folder in eclipse land too, which optionally can hold the libraries or .jar files.

c. **src:** The src folder can have both application code and android unit test script. You will find two folders named “androidTest” and “main” correspond to the “src” folder. The main folder contains two subfolders java and res. The java folder contains all the java codes and res contains drawables, layouts, etc.

### 4\. gradle

This is where the Gradle build system’s jar wrapper i.e. this jar is how AS communicates with Gradle installed in Windows (the OS in my case).

### 5\. External Libraries

This is not actually a folder but a place where Referenced Libraries and information on targeted platform SDK is shown.
