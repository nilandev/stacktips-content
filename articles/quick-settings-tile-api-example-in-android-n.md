---
id: 67
title: Quick Settings Tile API Example in Android N
slug: quick-settings-tile-api-example-in-android-n
excerpt: Quick settings are undoubtedly one of the most popular features in Android devices. It provides a convenient way…
difficulty: beginners
publishedDate: "2016-08-10T09:33:27.000Z"
updatedDate: "2025-09-16T23:05:23.142Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/android-ui-tutorials/tree/master/android-quick-settings-tile-demo"
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-quick-settings-tile
  - tileservice-android
  - android-n-features
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Quick settings are undoubtedly one of the most popular features in Android devices. It provides a convenient way to quickly change the device settings or key actions directly from the notification panel.

Like always, Google never disappoints developers. This time, Android N introduced the new Quick Settings Tile API and allow developers to add their own quick setting actions. Now Quick Settings Tile adds more room for additional custom actions and you can swipe left/right to access more settings.

Please note, Quick Settings tiles are reserved for controls or actions that are either urgently required or frequently used, and should not be used as shortcuts to launching an app.

Android Quick Settings Tiles can only have icons of a single color. It can be tinted to either white or grey. You can handle click, double-click action on the tiles but the long press is restricted only to few system apps.

### Android Quick Settings API Example

In this tutorial, we will see how to use the Quick Settings Tile API in Android N to register a custom tile action. The sample application will add a custom action to quick settings and when clicked it will launch an activity.

You need the following perquisites to run this code sample.

-   Android Studio version 2.0+
-   A test device or emulator configuration with Android version 6.0+

Adding a tile to quick settings involves two steps. First you need to declareQuick Settings Tile in `AndroidManifest.xml` file. Add the following code snippets inside `<application>` element.

```xml
<service
    android:name="com.stacktips.example.MyAppTileService"
    android:icon="@drawable/tile_icon"
    android:label="@string/tile_label"
    android:permission="android.permission.BIND_QUICK_SETTINGS_TILE">
    <intent-filter>
        <action android:name="android.service.quicksettings.action.QS_TILE" />
    </intent-filter>
</service>
```

Let us now extend the `TileService` class to respond the Tile events and handle click action to launch an activity when user clicking on the Quick Settings Tile. You can optionally override the following methods to perform different actions when the Tile state changes.

| onTileAdded() | Called when user adds the tile to the quick settings from the edit interface |
| --- | --- |
| onTileRemoved() | Called when the tile is removed from the quick settings using the edit interface. |
| onStartListening() | Called when the tile is brought into the listening state. |
| onStopListening() | Called when the tile is brought out of the listening state. |
| onClick() | Called when the tile is clicked. |

**MyAppTileService.java**

```java
public class MyAppTileService extends TileService {
    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    @Override
    public void onTileAdded() {
        super.onTileAdded();
    }

    @Override
    public void onTileRemoved() {
        super.onTileRemoved();
    }

    @Override
    public void onStartListening() {
        super.onStartListening();
    }

    @Override
    public void onStopListening() {
        super.onStopListening();
    }

    @Override
    public void onClick() {
        super.onClick();
        //Start main activity
        startActivity(new Intent(this, MainActivity.class));
    }
}
```
