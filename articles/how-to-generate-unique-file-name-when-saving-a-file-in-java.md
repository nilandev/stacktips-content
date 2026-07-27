---
id: 76
title: How to Generate Unique File Name When Saving a File in Java
slug: how-to-generate-unique-file-name-when-saving-a-file-in-java
excerpt: The following code snippet shows how to get unique file name when saving file in java. It first checks if already a file exist with the specified name, then it appends a number to end.
difficulty: beginners
publishedDate: "2016-07-06T05:45:37.000Z"
updatedDate: "2025-09-16T23:05:23.723Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/103/thumbnail.png
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet shows how to get a unique file name when saving the file in java. It first checks if already a file exists with the specified name, then it appends a number to the end.

```java
public static File getUniqueFilePath(String parent, String child, String fileName) {
    File dir = new File(parent, child);
    String uniqueName = getUniqueFileName(parent, child, fileName);
    return new File(dir, uniqueName);
}

public static String getUniqueFileName(String parent, String child, String fileName) {
     final File dir = new File(parent, child);
     if (!dir.exists()) {
         dir.mkdirs();
     }

     int num = 0;
     final String ext = getFileExtension(fileName);
     final String name = getFileName(fileName);
     File file = new File(dir, fileName);
     while (file.exists()) {
         num++;
         file = new File(dir, name + "-" + num + ext);
     }
     return file.getName();
}

public static String getFileExtension(final String path) {
     if (path != null && path.lastIndexOf('.') != -1) {
         return path.substring(path.lastIndexOf('.'));
     }
     return null;
}

public static String getFileName(String fileName) {
     return fileName.substring(0, fileName.lastIndexOf('.'));
}
```
