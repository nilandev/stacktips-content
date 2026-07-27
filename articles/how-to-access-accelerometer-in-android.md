---
id: 135
title: How to access accelerometer in Android
slug: how-to-access-accelerometer-in-android
excerpt: The following code snippet will help you with the basic understanding of how to set up the Android accelerometer and get values from it. To use the accelerometer (or any sensor in general) your class should implement the SensorEventListener interface.
difficulty: beginners
publishedDate: "2015-07-30T22:07:29.000Z"
updatedDate: "2025-09-16T23:05:26.985Z"
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

The following code snippet will help you with the basic understanding of how to set up the Android accelerometer and get values from it.

To use the accelerometer (or any sensor in general) your class should implement the `SensorEventListener` interface, or you could do anonymous inner classes for them. To access the accelerometer you will need to get the `SystemManager` from the system and get a sensors list from that.

```java
myManager = (SensorManager)getSystemService(Context.SENSOR_SERVICE);
// this will return a list of Sensor
sensors = myManager.getSensorList(Sensor.TYPE_ACCELEROMETER);
```

From the sensors list then select the first element, this should be the accelerometer sensor.  
The parameter of the event listener is a SensorEvent. From this event you can access the x, y, and z values of the accelerometer and do with them what you want.

```java
calculateSomething(event.values[0], event.values[1], event.values[2]);
```
