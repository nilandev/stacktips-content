---
id: 57
title: Turn on and off Wi-Fi using Android API
slug: code-snippet-turn-on-and-off-wi-fi-using-android-api
excerpt: Use the following code snippets to turn on and off wifi on Android devices. Switch toggle = (Switch)…
difficulty: beginners
publishedDate: "2016-08-15T14:55:29.000Z"
updatedDate: "2025-09-16T23:05:22.687Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - code-snippet
  - how-tos
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Use the following code snippets to turn on and off wifi on Android devices.

```java
public void toggleWiFi(boolean status) {
    WifiManager wifiManager = (WifiManager) this.getSystemService(Context.WIFI_SERVICE);
    if (status == true &amp;&amp; !wifiManager.isWifiEnabled()) {
        wifiManager.setWifiEnabled(true);
    } else if (status == false &amp;&amp; wifiManager.isWifiEnabled()) {
        wifiManager.setWifiEnabled(false);
    }
}
```

For changing wifi state, you need the following permissions in your manifest file.

```xml
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"></uses-permission>
```
