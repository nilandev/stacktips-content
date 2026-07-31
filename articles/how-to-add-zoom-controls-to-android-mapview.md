---
id: 136
title: How to add zoom controls to Android MapView
slug: how-to-add-zoom-controls-to-android-mapview
excerpt: The following code snippet shows how to add zoom controls to Android MapView. We can achieve this by calling setBuiltInZoomControls(boolean) method.
difficulty: beginners
publishedDate: "2015-07-30T22:02:46.000Z"
updatedDate: "2025-09-16T23:05:27.015Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-mapview
  - setbuiltinzoomcontrols
  - google-maps-android-v1
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Add Zoom Controls to Android MapView"
  metaDescription: "Learn how to add zoom controls to an Android MapView using the setBuiltInZoomControls method, with a quick, complete code and XML layout example."
  metaKeywords: null
---

The following code snippet shows how to add zoom controls to Android MapView. We can achieve this by calling `setBuiltInZoomControls(boolean)` method.

```java
MapView map = (MapView)findViewById(R.id.mapview);
map.setBuiltInZoomControls(true);
```

The above code snippet will add the zoom controls to the bottom-center of the `MapView`. The zoom controls only show up when you touch the screen, so you have to make sure that the map is clickable.

```xml
<com.google.android.maps.MapView
       android:layout_width="fill_parent"
       android:layout_height="fill_parent"
       android:id="@+id/mapview"
       android:clickable="true"
       android:apiKey="your key">
</com.google.android.maps.MapView>
```
