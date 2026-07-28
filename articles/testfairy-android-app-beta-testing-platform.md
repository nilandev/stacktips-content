---
id: 205
title: TestFairy – Android App Beta Testing and Deployment Platform
slug: testfairy-android-app-beta-testing-platform
excerpt: TestFairy makes Android beta testing painless. This satisfies all the wish-list to stand out as an best alternative for TestFlight. In this post we’ll see TestFairy features, advance reporting and TestFairy command line uploader script
difficulty: beginners
publishedDate: "2014-08-25T04:49:20.000Z"
updatedDate: "2025-09-16T23:05:30.486Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Testing apps and getting feedback from users has never been an easy task in mobile development. Managing alpha and beta tests with internal and external testers alike, is a special kind of madness. So, what service will make testing Android apps easier? I’ve compiled a few below, and give you some highlights on my pick [TestFairy](http://testfairy.com/).

## 1\. Beta testing and its importance

If we cast our memories back a few years, mobile apps often meant market presence for companies, but today they’re serious money-making businesses. If you plan to make money in the fiercely-competitive world of mobile apps, then you have to seriously consider every aspect of your application: from design and usability to performance and stability.

Beta testing helps you take those aforementioned considerations into account, and address them before you’re finished app is pushed into the wild.

## 2\. Choosing right beta platform

As there are numerous tools available, each that claim to be more useful than the other, it’s important to consider the following criteria.

-   Enterprise app store: Ability to create your own private app store and restrict access to external users
-   User and test group management
-   Ability for beta users to download app easily and provide their feedback
-   SDK for integration with the apps in beta environment
-   Multiple app stores, multiple groups and ability to publish multiple applications
-   Easy app distributions: over-air and support for tester apps
-   Device management: list and control users and devices who have access to apps
-   Notifying users of new versions
-   Crash reports (symbolication)
-   Support for Continuous Integration (CI) tools like Bamboo, Jenkins, etc.
-   And perhaps most importantly, a reasonable price

## 3\. Beta testing in Android

Testing the application and getting feedback from you user is never been easy in mobile application development lifecycle. Each mobile platform follows certain steps to build and distribution process. Normally the build and distribution process differs from platform to platform.

Here, in this section we will discuss Android specific beta testing and distribution tool. There are various platforms out there in market, that provides solution for distributing and managing the beta testing workflow. Some of the major ones are.

1.  TestFlight (Suspended Support for Android)
2.  TestFairy
3.  AppBlade
4.  HockeyApp
5.  Google Play Native App Beta Testing

[![Beta distribution platforms feature comparisons](/media/articles/273/Beta-distribution-platforms-feature-comparisons-620x393.png)](http://stacktips.com)

During my initial exploration on this matter, TestFlight arose as one the best platforms for build distribution, but its dominance came to an abrupt halt when Apple acquired it and shut down its Android operations.

In my hunt to find a replacement, [App Blade](https://appblade.com/), [Google Play](https://support.google.com/googleplay/android-developer/answer/3131213?hl=en) and [Hockey App](http://hockeyapp.net/features/) emerged as solid options, but TestFairy leads the pack. In fact, it provides awesome support and documentation for abandoned TestFlight users so they can easily migrate over.

## 4\. How testFairy works

TestFairy follows very simple steps while it comes to distributing the build. All you need to do is just upload your android build (.apk) file to your TestFairy account and invite the beta testers. Once you upload the build, TestFairy server process your apk file and inject the required code to your apk. All this process takes places in the background, and you don’t have to do anything for this.

Once your build is processed and ready for download, you can invite beta testers via their email or from TestFairy official community page. And now, you are all done. Just sit back and relax. Once users start playing around with the app, you will get to see the reports real time.

[![testfairy-archiecture](/media/articles/273/testfairy-archiecture-620x409.png)](http://stacktips.com)

## 5\. TestFairy highlights

-   Test Users And Group Management
-   Test fairy allows you to invite users and provide role based user access. You can be either an administrator, developer or a tester.
-   You can define multiple administrators to control different projects (Enterprise license only)
-   You are allowed till maximum of 500 testers for any free type account. However the enterprise license goes endless.
-   The free account can host maximum of 10 applications
-   Once a new version of the application is available, it notifies test user with email and a link to download the application. Alternatively user can download the TestFairy testers app and browse and install the available application versions.

### 5.1. Advance reporting

-   Know how much time spent on testing each build.
-   Geo chart, gives you the information on the different location the application is tested from.
-   You can also have the application deep analysis like Activities per device name, activities per session, checkpoints, etc.
-   Coverage information, including OS coverage, resolution coverage device demographics. You can see the chart of activities, and fragments covered per devices, sessions and users that participated in testing this project. This info will help you verify that your testers went through all the app’s activities or fragments and in case they did not, you will easily understand where and what should be improved.
-   TestFairy takes screenshots and record videos of each application test sessions. This sometimes help to reproduce the bugs which was never been easy to reproduce.

### 5.2. Stats

A geographical chart gives you an idea of where your app is being tested from, while coverage information includes details on operating systems and device resolutions. What’s more, you can see a chart of activities and fragments covered per device, as well as sessions and users that participated in testing.

[![TestFairy Geo Chat](/media/articles/273/testfairy-geo-chart-620x336.png)](http://stacktips.com)

[![TestFairy Advance Reports](/media/articles/273/resoluations-device-and-android-os-charts-620x180.png)](http://stacktips.com)

[Checkout this video](https://www.youtube.com/watch?v=g0nQ3oMhdjw) for more report examples.

Checkpoints help you to monitor when a tester has reached key points in your app, such as making an in-app purchase. To monitor checkpoints, you don’t even need to integrate with their API, you just use a simple code snippet to register a checkpoint.

For example, a purchase could be tracked like so:

```
//Purchase started
Log.v("testfairy-checkpoint", "Purchase Initiated");
// your code to make the purchase
..
Log.v("testfairy-checkpoint", "Purchase Successful!");
```

### 5.3. Performance reporting

Here’s the kicker: TestFairy monitors each and every possible aspect of an application and generates reports. It monitors sessions, battery life, CPU usage, allocated runtime memory, threads and more. All this, again, with no additional configuration or integration of their SDK.

### 5.4. Visual comparison

In addition to videos of user sessions, TestFairy takes screenshots of each activity and fragments on the different devices applications are tested on. You can filter the screen grabs by activity or fragment, and can spot the differences across devices.

### 5.5. Heatmap analysis

Heatmap analysis provides the information on how user is using your application. As you can see in the image below, heatmap report will give the brief idea of the buttons, or widgets clicked by user and what’s trendy on a particular screen. This report is a visual screen shot of the application screen (a sample below). This sometimes helps in taking serious business decisions. Like if you are performing testing with some of your external consultants, you can capture the areas it is covered and which are not.

[![Heatmap Analysis Report](/media/articles/273/heatmap-analysis.png)](http://stacktips.com)

Heat map Analysis Report

### 5.6. Crash reporting

Crash reporting is yet another important feature, that every developers need it. It helps in identifying the defect root and the place of its occurrence. This helps for the quick root cause analysis and fix the issue before making the product live. TestFairy records the video and takes screenshot sequences for each crash log.

Again, TestFairy stands out as you don’t have to do any coding or no integration to their SDK is required. Everything happens in the background while you upload your build. This feature may not be as advanced as “Crashlytics”, but it fulfills the basic needs for identifying the crash root cause.

[![Testfairy Crash Reports](/media/articles/273/testfairy-crash-reports-620x175.png)](http://stacktips.com)

### 5.7. Beta tester feedback

Along with your video feedback and crash reports, an enterprise account allows for collecting feedback from individual testers, who simply shake the device to send a message.

## 6\. Enterprise license

TestFairy provides fairly many options to the free users. Free account is limited to number of applications, testers and group. There is no official record for the application limit on their website, but it is restricted to 10 apps (Information taken from personal interview with TestFairy CEO “Yair Bar-On”). Below are some of the enterprise license feature highlights

1.  Enterprise account support unlimited apps, users and distribution list
2.  White labeling for your enterprise account. You can have you own label and customization.
3.  Advance reporting like heatmap analysis, CPU and memory usages
4.  Taking beta testers feedback
5.  Crash reporting with series of screenshots and video recording

## 7\. CI integration

TestFairy is very simple when it comes to integrate with CI (Continuous integration) tools like Bamboo or Jenkins. CI tools can use the below script to upload the scripts

```
curl    --sslv3 https://app.testfairy.com/api/upload 
-F api_key='YOUR API KEY HERE' 
-F apk_file=@trunk/bin/YourApplication.apk 
-F metrics='cpu,network,logcat' 
-F testers_groups='YOUR_DISTRIBUTION_LIST' 
-F comment='What’s new in this build?'
```

## 8\. TestFairy command line uploader

Once a build is uploaded, TestFairy process the build and it do some dynamic code injection. It again sign the application with keystore before the build is ready to download. And hence, if your application using features that are dependent on your production keystore key then, those features will fail to work in TestFairy generated build. Such features includes Google Map, In-App Purchases, Google Cloud Messaging (GCM) etc. To avoid such issues, with the [command line uploader script](https://github.com/testfairy/command-line-uploader), you can send TestFairy builds signed with your production keystore key, which makes sure that features dependent on Google Maps, Google Cloud Messaging and the like work.

## 9\. Additional resources

1.  [Gradle / Android Studio Plugin](https://github.com/testfairy/testfairy-gradle-plugin)
2.  [Command line uploader](https://github.com/testfairy/command-line-uploader)
3.  [TestFairy API Documentation](http://docs.testfairy.com/)

## 10\. Which works for you?

Clearly, TestFairy has treated me well, but what works for you? If I neglected to list an alternative — or one I did mention does the trick for you — let me know in the comments! If you’d like to give TestFairy a try, take advantage of their free account, which allows for 10 applications and a maximum of 500 testers.
