---
id: 79
title: How to Determine Android Screen Size Width and Height
slug: how-to-determine-android-screen-size-width-and-height
excerpt: The following code snippet shows how to determine the screen size dimensions in width and height of the Android device your application is running on.
difficulty: beginners
publishedDate: "2016-07-04T12:24:42.000Z"
updatedDate: "2025-09-16T23:05:23.846Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-screen-size
  - android-display-getsize
  - android-screen-width-height
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Determine Android Screen Size (Width and Height)"
  metaDescription: "A quick code snippet to get the screen width and height of an Android device at runtime using WindowManager and Display.getSize()."
  metaKeywords: null
---

The following code snippet shows how to determine the screen size dimensions in width and height of the Android device your application is running on.

```java
Display display = mActivity.getWindowManager().getDefaultDisplay();
Point size = new Point();
display.getSize(size);
int width = size.x;
int height = size.y;

Log.e("Width : " + width);
Log.e("Height : " + height);
```
