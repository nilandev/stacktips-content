---
id: 90
title: How to Programmatically Take a Screenshot in Android?
slug: how-to-programmatically-take-a-screenshot-in-android
excerpt: The following code snippet will help you to take a screenshot programmatically in Android. First you need to add the write file permission to save the captured screenshot.
difficulty: beginners
publishedDate: "2016-06-13T18:24:35.000Z"
updatedDate: "2025-09-16T23:05:24.327Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - seo
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet will help you to take a screenshot programmatically in Android. First you need to add the write file permission to save the captured screenshot.

```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

Add the following Java code to capture the screenshot of running in an Activity.

```java
private void captureScreenshot() {
    try {
        // image saving sd card path
        String mPath = Environment.getExternalStorageDirectory().toString() + "/" + System.currentTimeMillis() + ".jpg";

        // create bitmap screen capture
        View view = getWindow().getDecorView().getRootView();
        view.setDrawingCacheEnabled(true);

        Bitmap bitmap = Bitmap.createBitmap(view.getDrawingCache());
        view.setDrawingCacheEnabled(false);

        File imageFile = new File(mPath);
        FileOutputStream outputStream = new FileOutputStream(imageFile);

        int quality = 100;
        bitmap.compress(Bitmap.CompressFormat.JPEG, quality, outputStream);
        outputStream.flush();
        outputStream.close();

    } catch (Throwable e) {
        e.printStackTrace();
    }
}
```
