---
id: 323
title: What is Android Virtual Device
slug: what-is-avd
excerpt: This tutorial is intended to explain the Android Virtual Device(AVD). An Android Virtual Device (AVD) is an emulator…
difficulty: beginners
publishedDate: "2013-07-04T06:50:58.000Z"
updatedDate: "2025-09-16T23:05:36.239Z"
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

An Android Virtual Device (AVD) is an emulator configuration that allows developers to test the application by simulating the real device capabilities. We can configure the AVD by specifying the hardware and software options. AVD manager enables an easy way of creating and managing the AVD with its graphical interface. We can create as many AVDs as we need, based on the types of device we want to test for. Below are the steps to create an AVD from AVD manager graphical interface  

1.  Go to Window ->AVD Manager and select Virtual Devices.
2.  Click on New to create a Virtual Device, give it some Name and select Target Android Platform from the drop down list
3.  Click “Create AVD” and we are done!

![](/media/summernote/create-avd-in-android-218x300.png)[](http://stacktips.com)

Note: API Levels generally mean that as a programmer, you can communicate with the devices’ built in functions and functionality. Choosing an API level for an application development should take at least two things into account:

1.  Current distribution – How many devices can actually support my application, if it was developed for API level 9, it cannot run on API level 8 and below, then “only” around 60% of devices can run it (true to the date this post was made).
2.  Choosing a lower API level may support more devices but gain less functionality for your app. you may also work harder to achieve features you could’ve easily gained if you chose higher API level.

## Mocking location data

As you develop your application, you’ll certainly need to test how well your model for obtaining user location works. This is most easily done using a real Android-powered device. However, if you don’t have a device, you can still test your location-based features by mocking location data in the Android emulator.

Select Window > Show View > Other > Emulator Control.

In the Emulator Control panel, enter GPS coordinates under Location Controls as individual latitude and longitude coordinates, with a GPX file for route playback, or a KML file for multiple place marks. (Be sure that you have a device selected in the Devices panel—available from Window > Show View > Other > Devices.)

![](/media/summernote/test-gps-in-emulator.png)  

Note: Providing mock location data is injected as GPS location data, so you must request location updates from GPS\_PROVIDER in order for mock location data to work.
