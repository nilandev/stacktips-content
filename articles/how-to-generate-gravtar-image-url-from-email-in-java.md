---
id: 75
title: How to Generate Gravtar Image Url from Email in Java
slug: how-to-generate-gravtar-image-url-from-email-in-java
excerpt: The following code snippet shows how to generate Gravatar URLs from email address. This utility method alows you to pass the size of your email.
difficulty: beginners
publishedDate: "2016-07-06T06:21:55.000Z"
updatedDate: "2025-09-16T23:05:23.640Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/102/thumbnail.png
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet shows how to generate Gravatar URLs from email address. This utility method allows you to pass the size of your email.

```java
public String getGravatarUrl(String email, int size) {
    if (null == email) return null;

    final String hash = MD5Util.md5Hex(email.toLowerCase());
    final String gravtar = "http://www.gravatar.com/avatar/%s?s=%s&r=g&d=404";
    final String gravatarUrl = String.format(gravtar, hash, size);

    try {
        return URLEncoder.encode(gravatarUrl, "UTF-8");
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }
    return null;
}
```
