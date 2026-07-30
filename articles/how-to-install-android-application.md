---
id: 328
title: How to Generate .apk and Install to Android Device
slug: how-to-install-android-application
excerpt: This tutorial will be demonstrate, how to build android code and generate a signed APK and then install…
difficulty: beginners
publishedDate: "2013-06-04T07:29:55.000Z"
updatedDate: "2025-09-16T23:05:36.382Z"
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

This tutorial will be demonstrate, how to build android code and generate a signed APK and then install in device.

Application testing is one of the vital thing we do soon after development. Due to larger number of devices with different resolution, different OS versions and different capabilities, it is difficult to test the application on all supported devices. Due to this limitation, each of the vendors made application testing easy using virtual devices or so called simulators. Android uses AVD, Android Virtual devices to test the mobile application.

## How to generate signed .apk in android?

-   Download the android Keys and place it in local folder.
-   Right Click on the Project.
-   Find Android Tools>Export Signed Application Package.
-   Select the Project to Export Signed Application Package and Click Next
-   Key store Page selection appears.
-   Enable radio button of use Existing key store.
-   Browse to the local folder of the android keys.
-   Enter the appropriate key password (Same as the key password given while generating key store), Click next.
-   Select the destination folder, where you want to place your newly created .apk. And Click finish.

## How to installing android application

Before testing the application either in real device or simulator we need to install it. In android there are various different ways to install the android application (.apk) into simulator or device.

### 1\. Installing .apk to simulator using eclipse

One way of installing android application to android emulator is using Eclipse. Once we create the avd from avd manager, we can run the application directly from the source project from eclipse. For every subsequent change or testing we don’t have to restart the AVD every time.

### 2\. Installing .apk to simulator using ADB utility

If you don’t have access to Eclipse or the ADT Plugin, you can install your application on the emulator using the adb utility. Before installing the application, you need to build and package it into an .apk.

When the emulator is running, you can also connect to the emulator instance’s console to issue commands as needed.

```bash
> <adb install <path-to-your-APK>
```
