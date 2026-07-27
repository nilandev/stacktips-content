---
id: 34
title: How to Programmatically Get Application Version in Android?
slug: how-to-programmatically-get-application-version-in-android
excerpt: Use the following code snippet to, get Android application version from code. The PackageInfo class provides overall information…
difficulty: beginners
publishedDate: "2016-12-01T12:28:39.000Z"
updatedDate: "2025-09-16T23:05:21.720Z"
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

Use the following code snippet to, get Android application version from code. The `PackageInfo` class provides overall information about the contents of a package. This corresponds to all of the information collected from `AndroidManifest.xml`.

```java
public String getAppVersion() {
        PackageInfo pInfo;
        try {
            pInfo = MyApp.getInstance().getPackageManager().getPackageInfo(MyApp.getInstance().getPackageName(), 0);
            return new StringBuilder("v").append(pInfo.versionName)
                    .append(" (").append(pInfo.versionCode).append(")").toString();
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return "1.0.0";
    }
```
