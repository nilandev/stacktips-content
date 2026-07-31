---
id: 200
title: How to delete and rename a file in java
slug: how-to-delete-and-rename-a-file-in-java
excerpt: This post provides sample program explaining how to delete and rename a file in java Rename file in Java…
difficulty: beginners
publishedDate: "2014-09-10T07:32:49.000Z"
updatedDate: "2025-09-16T23:05:30.249Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-file-rename
  - java-file-delete
  - java-io-file-class
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Delete and Rename a File in Java"
  metaDescription: "Learn how to rename and delete files in Java using the File class's renameTo() and delete() methods, with complete working examples."
  metaKeywords: null
---

This post provides sample program explaining how to delete and rename a file in java

### Rename file in Java

```java
package com.javatechig;

import java.io.File;
import java.io.IOException;

public class RenameFile {

    public static void main(String[] args) {

        /* File (or directory) with old name */
        File file = new File("/Users/Neel/Documents/Workspace/file.txt");

        /* File (or directory) with new name */
        File file2 = new File("/Users/Neel/Documents/Workspace/new-file.txt");

        if (file2.exists()) {
            try {
                throw new java.io.IOException("File already exists!");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        /* Rename file */
        boolean success = file.renameTo(file2);
        if (!success) {
            System.out.println("Couldn't rename file!");
        } else {
            System.out.println("File renamed successfully!");
        }
    }

}
```

### Delete file in Java

```java
package com.javatechig;

import java.io.File;

public class DeleteFile {

    public static void main(String[] args) {
        try {
            File file = new File(
                    "/Users/Neel/Documents/Workspace/file1.txt");

            if (file.delete()) {
                System.out.println(file.getName() + " is deleted!");
            } else {
                System.out.println("Delete operation is failed.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
