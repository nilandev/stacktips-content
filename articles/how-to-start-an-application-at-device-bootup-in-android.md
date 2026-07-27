---
id: 288
title: How to Start an Application at Device Bootup in Android
slug: how-to-start-an-application-at-device-bootup-in-android
excerpt: This tutorial will explain to stat an application while the Android device boot-up. For this we need to listen to the BOOT_COMPLETED action and react to it. BOOT_COMPLETED is a Broadcast Action that is broadcast once, after the system has finished booting.
difficulty: beginners
publishedDate: "2013-09-05T07:46:21.000Z"
updatedDate: "2025-09-16T23:05:34.600Z"
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

This tutorial will explain how to start an application while the Android device bootup. For this, we need to listen to the **BOOT\_COMPLETED** action and react to it. The **BOOT\_COMPLETED **is a Broadcast Action that is broadcast once after the system has finished booting. You can listen to this action by creating a `BroadcastReceiver` that then starts your launch Activity when it receives an intent with the BOOT\_COMPLETED action.****

Here's a step-by-step guide:

## Add permission to your manifest

```xml
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
```

## Create a Custom `BroadcastReceiver`

Secondly, create a custom `BroadcastReceiver` in your project to receive boot up event.

```java
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class BootReceiver extends BroadcastReceiver{

	@Override
	public void onReceive(Context context, Intent intent) {
		Intent i = new Intent(context, MainActivity.class);  
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(i);  
	}
}
```

## Adding `BroadCastReceiver` to the Android Manifest

```xml
<receiver android:name=".BootReceiver" android:enabled="true" 
    android:permission="android.permission.RECEIVE_BOOT_COMPLETED">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
        <category android:name="android.intent.category.DEFAULT" />
    </intent-filter>
</receiver>
```

Install the application, and then restart the device. You can see the application will start after the device restarts.
