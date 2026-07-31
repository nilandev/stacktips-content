---
id: 36
title: How to Use Custom Chrome Tab in Android
slug: how-to-use-custom-chrome-tab-in-android
excerpt: Chrome Custom Tabs gives apps more control over their web experience and make transitions between native and web…
difficulty: beginners
publishedDate: "2016-10-24T08:45:18.000Z"
updatedDate: "2025-09-16T23:05:21.822Z"
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

Chrome Custom Tabs gives apps more control over their web experience and make transitions between native and web content more seamless without having to resort to a WebView.

Chrome Custom Tabs allow an app to customize how Chrome looks and feels. An app can change things like:

-   Toolbar color
-   Enter and exit animations
-   Add custom actions to the Chrome toolbar, overflow menu and bottom toolbar

Chrome Custom Tabs also allow the developer to pre-start Chrome and pre-fetch content for faster loading.

To use custom chrome tab in Android, you first need to include the following dependency in your build grade file.

```java
compile 'com.android.support:customtabs:23.4.0+'
```

Sync the project after adding the dependencies. Now you’re good to go.

```java
 public static void launchChromeTab(Activity activity, String url) {
        CustomTabsIntent.Builder builder = new CustomTabsIntent.Builder();
        builder.setToolbarColor(ContextCompat.getColor(activity, R.color.colorPrimary));
        builder.setSecondaryToolbarColor(ContextCompat.getColor(activity, R.color.colorPrimaryDark));

        // set start and exit animations
        builder.setStartAnimations(activity, R.anim.slide_in_right, R.anim.slide_out_left);
        builder.setExitAnimations(activity, android.R.anim.slide_in_left, android.R.anim.slide_out_right);

        CustomTabsIntent customTabsIntent = builder.build();
        customTabsIntent.launchUrl(activity, Uri.parse(url));
    }
```
