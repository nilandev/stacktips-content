---
id: 263
title: Anatomy of Xamarin.Android Application
slug: anatomy-of-xamarin-android-application
excerpt: This tutorial explains the basic building blocks of Xamarin.Android application. 1. Activity Unlike other platform applications, Android application…
difficulty: beginners
publishedDate: "2014-01-07T08:42:50.000Z"
updatedDate: "2025-09-16T23:05:33.530Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - activity-lifecycle
  - android-intents
  - android-content-providers
  - android-broadcast-receivers
course: null
displayOrder: 0
seo: 
  metaTitle: "Anatomy of a Xamarin.Android Application"
  metaDescription: "Explore the core building blocks of a Xamarin.Android app, including Activities, Intents, the AndroidManifest, Services, Content Providers, and Broadcast Receivers."
  metaKeywords: null
---

This tutorial explains the basic building blocks of Xamarin.Android application.

# 1\. Activity

Unlike other platform applications, Android application doesn’t have a single entry point “Main” method. Android application is composed of loosely coupled screens called activity. Android supports multi screen applications. Since each Activity is essentially decoupled from the others, there needs to be a way to launch them and optionally pass data to them. On Android this is accomplished using Intents. Intents are classes that describe a message: both what the desired action of the message is and a data payload to send along with it.

![components of a basic Android application](/media/articles/348/components-of-a-basic-Android-application.png)

As mentioned, Activities are classes that provide an interface. An Activity is given a window in which to add User Interface to. Therefore, creating multi-screen applications involves creating multiple Activities and transitioning between them.

The Activity class inherits from the abstract Context class. Context is the closest Android gets to a reference to the current application and provides a mechanism for accessing the Android system. A Context is needed to perform many operations in Android such as:

-   Start, stop android services
-   Accessing shared preferences
-   Creating views and custom views
-   While accessing resources

An Android application needs a Context to know what permissions the application has, how to create controls, accessing preferences, etc. Therefore, each Activity and Service inherits from Context, which has all the information the application needs. Every time a new Activity is created, it’s passed a Context from the Activity that created it.

### Activity Lifecycle

Activity has a life-cycle method that helps you to identify and perform operations depending on the livfecycle states. Activities can be paused or destroyed by the system at any time. The lifecycle provides a way for Activities to handle the various lifecycle methods that Android will call and gives them an opportunity to save or rehydrate state, so screens can continue to operate normally.

[![activity lifecycle](/media/articles/348/activity-lifecycle-300x376.jpg)](http://stacktips.com)

# 2\. Intent

Intent is a messaging object you can use to request an action from another app component. Although intents facilitate communication between activities or activity with service. An Intent provides a facility for performing late runtime binding between the code in different applications. Its most significant use is in the launching of activities, where it can be thought of as the glue between activities. It is basically a passive data structure holding an abstract description of an action to be performed.

Additionally, Intents can be used to tell the OS to launch external Activities as well. For example, an application can have the intention to dial a phone number when the user taps a button. The way an application announces this intention is via an Intent for a phone dialing action. However, the actual dialing of the number is handled by an Activity in the Phone Dialer Application.

# 3\. AndroidManifest.xml

Every Android application needs to include a file called AndroidManifest.xml. This file contains information about the application such as:

-   Application name, icon, version, version code, etc.
-   Registration of Activities, Intents and services
-   Listing all permissions needed for your application
-   OS Version Compatibility – The minimum and max Android API level the application supports.

# 4\. Services

Services are application components that run in the background to perform long-running operations with no direct access to user interface. A typical long running tasks can be periodic downloading of data from internet, persisting multiple records into database, perform file I/O, fetching phone contacts list, etc. Such long running tasks can be implemented using Service, to provide smooth user experience by letting user interact with other activities while long running jobs being processed in background.

# 5\. Content providers

Content providers manage access to a central repository of data such as contacts. A content provider is a part of an application, which usually provides a user interface to manage its data. A standard interface is also provided, which allows other applications to access its repository.

# 6\. Broadcast receivers

Broadcast receivers are components that perform some type of processing in response to system-wide broadcasts. Broadcasts are generally initiated by the system for events such as low battery, taking a picture, or turning on Bluetooth. Applications may also choose to send broadcasts; a content provider might send a broadcast when data, such as a contact, has been updated. While broadcast receivers do not have a user interface, they may indirectly cause updates to a status.
