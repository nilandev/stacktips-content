---
id: 241
title: Enable Move to SDCard button for Android App
slug: enable-the-move-to-sdcard-button-for-android-app
excerpt: In this tutorial we show you how to enable “Move to SD Card” button and allow your application to move to SD Card. Ever since Android 2.2 (API Level 8), you can allow your application to be installed on the SDCard.
difficulty: beginners
publishedDate: "2014-05-08T10:05:15.000Z"
updatedDate: "2025-09-16T23:05:32.012Z"
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

In this tutorial we show you how to enable “Move to SD Card” button and allow your application to move to SD Card. Ever since Android 2.2 (API Level 8), you can allow your application to be installed on the SDCard. This is an optional feature that available in Android device that allows installed applications to move from device storage to SD Card and vice-versa.

### How to copy app from internal memory to SD Card?

In Android, you can go to device Settings >> Applications >> Manage Applications >> and then click on your app to view the app details. You will find a ‘Move to SD Card’ button which is available for some apps and for some apps it will be disabled (not click-able) for other apps. By default it is disabled for your application.

### How to enable the ‘Move to SD Card’ button in for your App in Android?

For allowing the system to install your application on the external storage, you have to include the `android:installLocation` attribute in the <manifest> element, with a value of either “preferExternal”, “auto” or “intenalOnly”

1.  `preferExternal` , this request that your application may installed on the external storage, but the system does not guarantee that your application will be installed on the external storage. If the external storage is full, the system will install it on the internal storage. The user can also move your application between the two locations.
2.  `auto` , this indicate that your application may be installed on the external storage, but you don’t have a preference of install location. The system will decide where to install your application based on several factors. The user can also move your application between the two locations.
3.  `intenalOnly` , always installs application in internal storage.

[![Enable the 'Move to SD Card' button in for your App in Android](/media/articles/311/Enable-the-Move-to-SD-Card-button-in-for-your-App-in-Android-620x386.png)](http://stacktips.com)
