---
id: 73
title: How to Convert Pixels to Density Independent (DP) Pixels
slug: how-to-convert-pixels-to-density-independent-dp-pixels
excerpt: The following code snippet shows how to convert device specific pixels to density independent pixels. It returns a float value to represent dp equivalent to px value.
difficulty: beginners
publishedDate: "2016-07-06T06:38:21.000Z"
updatedDate: "2025-09-16T23:05:23.520Z"
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

The following code snippet shows how to convert device specific pixels to density independent pixels. It returns a float value to represent dp equivalent to px value

```java
public static float convertPixelsToDp(float px, Context context){
    Resources resources = context.getResources();
    DisplayMetrics metrics = resources.getDisplayMetrics();
    float dp = px / (metrics.densityDpi / 160f);
    return dp;
}
```
