---
id: 58
title: How to Add Click Listener to Android Switch
slug: how-to-add-click-listener-to-android-switch
excerpt: A Switch is a two-state toggle switch widget that can select between two options. Add Switch control to…
difficulty: beginners
publishedDate: "2016-08-15T14:48:59.000Z"
updatedDate: "2025-09-16T23:05:22.725Z"
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

A Switch is a two-state toggle switch widget that can select between two options. Add Switch control to your Activity or Fragment layout as follows.

```xml
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
```

Now you can register switch event using setOnCheckedChangeListener(this) method.

```java
Switch toggle = (Switch) findViewById(R.id.wifi_switch);
toggle.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
	public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
		if (isChecked) {
			Toast.makeText(getApplicationContext(), "Switch on!", Toast.LENGTH_LONG).show();
		} else {
			Toast.makeText(getApplicationContext(), "Switch off!", Toast.LENGTH_LONG).show();
		}
	}
});
```
