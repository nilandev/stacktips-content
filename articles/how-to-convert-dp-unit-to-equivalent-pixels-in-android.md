---
id: 74
title: Convert DP Unit to Equivalent Pixels in Android
slug: how-to-convert-dp-unit-to-equivalent-pixels-in-android
excerpt: The following code snippet shows how to converts dp unit to equivalent pixels, depending on device density. It returns a float value to represent px equivalent to dp depending on device density.
difficulty: beginners
publishedDate: "2016-07-06T06:32:16.000Z"
updatedDate: "2025-09-16T23:05:23.604Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet shows how to converts DP unit to equivalent pixels, depending on device density. It returns a float value to represent px equivalent to dp depending on device density.

```java
public static float convertDpToPixel(float dp, Context context){
    Resources resources = context.getResources();
    DisplayMetrics metrics = resources.getDisplayMetrics();
    float px = dp * (metrics.densityDpi / 160f);
    return px;
}
```
