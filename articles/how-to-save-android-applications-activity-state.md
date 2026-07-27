---
id: 91
title: How to Save Android Application’s  Activity State
slug: how-to-save-android-applications-activity-state
excerpt: The Activity class provides two methods onSaveInstanceState() and onRestoreInstanceState(), for saving and restoring activity state. The onSaveInstanceState( )…
difficulty: beginners
publishedDate: "2016-06-13T18:06:12.000Z"
updatedDate: "2025-09-16T23:05:24.405Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - html5
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Activity class provides two methods onSaveInstanceState() and onRestoreInstanceState(), for saving and restoring activity state. The onSaveInstanceState( ) method is a callback method that is used to save the application state.

```java
@Override
public void onSaveInstanceState(Bundle savedInstanceState) {
  super.onSaveInstanceState(savedInstanceState);
  // Save UI state changes to the savedInstanceState.
  // This bundle will be passed to onCreate if the process is killed and restarted.
  savedInstanceState.putBoolean("key1", true);
  savedInstanceState.putDouble("key2", 1.9);
  savedInstanceState.putInt("key3", 1);
  savedInstanceState.putString("key4", "Welcome back to Android");
}
```

The Bundle is essentially a way of storing a Key value map. And it will get passed in to onCreate() and also onRestoreInstanceState() where you can extract the values as follows.

```java
@Override
public void onRestoreInstanceState(Bundle savedInstanceState) {
  super.onRestoreInstanceState(savedInstanceState);
  // Restore UI state from the savedInstanceState.
  // This bundle has also been passed to onCreate.
  boolean myBoolean = savedInstanceState.getBoolean("key1");
  double myDouble = savedInstanceState.getDouble("key2");
  int myInt = savedInstanceState.getInt("key3");
  String myString = savedInstanceState.getString("key4");
}
```
