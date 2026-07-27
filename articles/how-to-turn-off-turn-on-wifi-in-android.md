---
id: 295
title: How to Turn off, Turn on Wifi in Android
slug: how-to-turn-off-turn-on-wifi-in-android
excerpt: The following code snippet will help you to pragmatically turn on and turn off wi-fi in android. This sample code is using android Switch (Available from android API level 14) to toggle between wi-fi state.
difficulty: beginners
publishedDate: "2013-08-25T12:26:24.000Z"
updatedDate: "2025-09-16T23:05:34.823Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/advance-android-tutorials/tree/master/android-turn-wifi-on-off"
featured: false
thumbnail: null
topics: 
  - ibm-worklight
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet will help you to pragmatically turn on and turn off wi-fi in android. This sample code is using android Switch (Available from android API level 14) to toggle between wi-fi state.

[](http://stacktips.com)

We need following permissions in AndroidMainfest.xml file

```xml
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
  <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
  <uses-permission android:name="android.permission.WAKE_LOCK" />
```

### Creating Layout for On/Off Switch

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity" >

    <ImageView
        android:id="@+id/imageView1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:src="@drawable/wifi" />

    <Switch
        android:id="@+id/wifi_switch"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_marginBottom="10dp"
        android:background="@android:color/background_dark"
        android:checked="false"
        android:text="Wi-Fi Settings"
        android:textColor="@android:color/white"
        android:textOff="OFF"
        android:textOn="ON" />

</RelativeLayout>
```

### Turn on or off wifi in Android

We are done with the layout. Now let us move on to turn on wifi pragmatically.  To do this e need to get the Wifi system service by calling `getSystemService()` method. After getting Wifi manager, we can check the state of WiFi by calling `isWiiEnabled()` method, before turning on.

```java
package com.example.wifitest;
import android.net.wifi.WifiManager;
import android.os.Bundle;
import android.widget.CompoundButton;
import android.widget.Switch;
import android.widget.Toast;
import android.app.Activity;
import android.content.Context;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		Switch toggle = (Switch) findViewById(R.id.wifi_switch);
		toggle.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
			public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
				if (isChecked) {
					toggleWiFi(true);
					Toast.makeText(getApplicationContext(), "Wi-Fi Enabled!", Toast.LENGTH_LONG).show();
				} else {
					toggleWiFi(false);
					Toast.makeText(getApplicationContext(), "Wi-Fi Disabled!", Toast.LENGTH_LONG).show();
				}
			}
		});
	}

	public void toggleWiFi(boolean status) {
		WifiManager wifiManager = (WifiManager) this
				.getSystemService(Context.WIFI_SERVICE);
		if (status == true && !wifiManager.isWifiEnabled()) {
			wifiManager.setWifiEnabled(true);
		} else if (status == false && wifiManager.isWifiEnabled()) {
			wifiManager.setWifiEnabled(false);
		}
	}

}
```
