---
id: 212
title: Bamboo Continuous Integration for Android
slug: bamboo-continuous-integration-for-android
excerpt: Here in this tutorial, we’ll show you the importance of continuous integration tools in software development process and steps to configure Bamboo for building android code.
difficulty: beginners
publishedDate: "2014-07-04T07:18:26.000Z"
updatedDate: "2025-09-16T23:05:30.845Z"
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

Ihis tutorial, we’ll show you the importance of continuous integration tools in software development process and steps to configure Bamboo for building android code.  

Most developers use Eclipse as IDE for their development. IDE makes life simplified with the ease to set up, code and build the source. All you have to do is to install and follow some of the screen instructions to run your code.

Eclipse will help you to build your source code and run it on device. Now let us move a step ahead. What if we need to have a continuous integration for android project? Before we begin, let us understand the importance of continuous integration in project.

## Why Continuous Integration?

Continuous integration or “CI” is the process of fully automating the compilation and build generation process. There are several benefits of having a Continuous Integration system integrated in your project

-   Fully automated: Saves time of developers for making build for each release
-   From Source Control: A CI takes the code from your favourite source code from repository, it could be SVN, git etc. CI server will check for any updates available on the source code, as soon as there is an update, it will trigger the build process
-   Always Compile latest code: This is a way to make sure we are building from the latest source code from repository
-   Distribute the latest application build to your beta testers (Optional).

## Getting Started with Bamboo

The building process of Continuous integration tool is slightly different than your eclipse IDE. This uses several steps for setting up the project and lines to compile your code.

1.  Download Source Code
2.  Compile and Build Source code
3.  Generate .APK file
4.  Sign APK file
5.  Distribute APK file (out of scope in this tutorial)

The above steps are important to prepare your android build and distribute to your beta testers. Distribution application to beta tester is optional in this case. I will include it in another tutorial.

Here in this example, we will see how to configure bamboo for building android.

### Create a New Plan

Login to Bamboo with your valid bamboo account credentials.

Select “Create” and then “Create a new plan” button in the top navigation bar. Create a new plan under an existing project or as a new project.

**Plan**: Plan defines the build process. Here you define what gets built, how the build is triggered and what job gets executed. Each plan will have a default job when it is created. You can add more jobs later.

Once created, click on Atlassian Bamboo – Build Dashboard and select the project and then newly created plan from the list.

[![Create New Plan in Bamboo](/media/articles/283/Create-New-Plan-in-Bamboo1-620x420.png)](http://stacktips.com)

## Configuring the Plan

Select your plan. Find “Actions” drop down to the right side of your screen and then click “Configure plan” option.

You will notice a default “Job” will be created for you.

### Checkout Source Code

Add task as source code checkout (by default this will get created). In this step bamboo connects you to git, github, svn or any other source code version controller system. This step will pull the source code from the specified path and will place the code in “build-dir” folder.  
[![Create New Plan in Bamboo](/media/articles/283/Create-New-Plan-in-Bamboo1-620x420.png)](http://stacktips.com)

### Update Android Project

Add Another task “Command” type and do the below configurations. Add below snippet as arguments and save the task

```bash
update project --target "android-19" --path ./Android_LoginApp --name LoginTestApp
```

[![Update Android Project](/media/articles/283/Update-Android-Project-620x465.png)](http://stacktips.com)

More more info on above command visit

[http://developer.android.com/tools/projects/projects-cmdline.html](http://developer.android.com/tools/projects/projects-cmdline.html)

### Build Android Code using Ant

Add another task to build the project. Select “Ant” form add task. And do the below configurations

1.  Add new executable as “ant” if not available before and add the ant executable path in your computer
2.  Add arguments as below syntax.

```text
release
```

[![Add ant  task](/media/articles/283/Add-ant-task-620x378.png)](http://stacktips.com)

And now you’re done. Just hit “Run” button in your top right. This should start executing the batch and build the .apk for you.

[![Task Ant Build Configuration](/media/articles/283/Task-Ant-Build-Configuration-620x481.png)](http://stacktips.com)

### Sign Android Project

Now we have the apk ready after the above step. Once we have the .apk file, we need to sign it with jarsigner.

The jarsigner tool is used for two purposes. To sign Java ARchive (JAR) files, and to verify the signatures and integrity of signed JAR files. The JAR feature enables the packaging of class files, images, sounds, and other digital data in a single file for faster and easier distribution.

A tool named jar enables developers to produce JAR files. (Technically, any zip file can also be considered a JAR file, although when created by jar or processed by jarsigner, JAR files also contain a META-INF/MANIFEST.MF file.).  

Add Another task “Command” type and do the following configurations.

1.  Add new executable as “jarsigner” if not available before. “jarsigner” will be present in your java SDK. Redirect to your jarsigner sdk.
2.  Add arguments as below syntax.

```text
-verbose -sigalg MD5withRSA -digestalg SHA1 -keystore docs/android.keystore-storepass <keystore password> <Path to your unsigned apk>  <your_alias>
```

[![Sign Android Project in Bamboo](/media/articles/283/Sign-Android-Project-in-Bamboo-620x378.png)](http://stacktips.com)

### Zip Align your APK

zipalign is an archive alignment tool that provides important optimization to Android application (.apk) files. The purpose is to ensure that all uncompressed data starts with a particular alignment relative to the start of the file. Specifically, it causes all uncompressed data within the .apk, such as images or raw files, to be aligned on 4-byte boundaries.

This allows all portions to be accessed directly with mmap() even if they contain binary data with alignment restrictions. The benefit is a reduction in the amount of RAM consumed when running the application.

Add Another task “Command” type and do the following configurations.

```text
 -v 4 <path to your unsigned apk> <name of your new apk include .apk extn>
```

[![Zip Align andorid APK](/media/articles/283/Zip-Align-andorid-APK-620x371.png)](http://stacktips.com)

The result of the above path is the apk that can be distributed to your beta or internal testing team.
