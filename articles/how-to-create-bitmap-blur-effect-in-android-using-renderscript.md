---
id: 47
title: How to Create Bitmap Blur Effect in Android Using RenderScript
slug: how-to-create-bitmap-blur-effect-in-android-using-renderscript
excerpt: Android RenderScript framework API can be used for performing computationally intensive tasks at high performance. In this tutorial we will take a look into how to create Bitmap blur effect in using Android RenderScript.
difficulty: beginners
publishedDate: "2015-09-21T17:13:03.000Z"
updatedDate: "2025-09-16T23:05:26.598Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-renderscript
  - bitmap-blur-effect
  - scriptintrinsicblur
  - android-image-processing
course: null
displayOrder: 0
seo: 
  metaTitle: "Bitmap Blur Effect in Android Using RenderScript"
  metaDescription: "Learn how to create a Gaussian blur effect on a Bitmap in Android using RenderScript's ScriptIntrinsicBlur, with Gradle setup and full code examples."
  metaKeywords: null
---

Android `RenderScript` framework API can be used for performing computationally intensive tasks at high performance. RenderScript was primarily developed to use with data-parallel computation, although serial computationally intensive workloads can benefit as well. The RenderScript runtime will parallelize work across all processors available on a device, such as multi-core CPUs, GPUs, or DSPs, allowing you to focus on expressing algorithms rather than scheduling work or load balancing.

RenderScript is especially useful for applications performing image processing, computational photography, or computer vision. There are two ways we can access the Android RenderScript framework APIs:

-   Directly using `android.renderscript` API classes. These classes are available from Android 3.0 (API level 11) and higher.
-   Alternatively, you can use `android.support.v8.renderscript` support package classes. The support library classes are available for devices running Android 2.2 (API level 8) and higher.

## How to use RenderScript

In order to use the Support Library RenderScript APIs, you must have Android SDK Tools revision 22.2 or higher and SDK Build-tools revision 18.1.0 or higher.

After you have the above two minimum development tools, you need to update the settings for the Android build process to include the RenderScript APIs. In Android Studio project add the following configurations to project `build.gradle` file.

```java
defaultConfig {
    applicationId "com.javatechig"
    minSdkVersion 14
    targetSdkVersion 23
    versionCode 1
    versionName "1.0"

    // Add the following two lines
    renderscriptTargetApi 18
    renderscriptSupportModeEnabled true
}
```

The following code snippets can be used create a bitmap blur effect in Android using RenderScript API.

```java
//Set the radius of the Blur. Supported range 0 < radius <= 25
private static final float BLUR_RADIUS = 25f;

public Bitmap blur(Bitmap image) {
    if (null == image) return null;

    Bitmap outputBitmap = Bitmap.createBitmap(image);
    final RenderScript renderScript = RenderScript.create(this);
    Allocation tmpIn = Allocation.createFromBitmap(renderScript, image);
    Allocation tmpOut = Allocation.createFromBitmap(renderScript, outputBitmap);

    //Intrinsic Gausian blur filter
    ScriptIntrinsicBlur theIntrinsic = ScriptIntrinsicBlur.create(renderScript, Element.U8_4(renderScript));
    theIntrinsic.setRadius(BLUR_RADIUS);
    theIntrinsic.setInput(tmpIn);
    theIntrinsic.forEach(tmpOut);
    tmpOut.copyTo(outputBitmap);
    return outputBitmap;
}
```

You can use the above code snippet to blur an ImageView as follows.

```java
ImageView imageView = (ImageView) findViewById(R.id.imageView);
Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.drawable.nature);
Bitmap blurredBitmap = blur(bitmap);
imageView.setImageBitmap(blurredBitmap);
```

#### Result:

[![Bitmap Blur Effect In Android Using RenderScript](/media/articles/164/Bitmap-Blur-Effect-In-Android-Using-RenderScript-620x930.png)](http://stacktips.com)
