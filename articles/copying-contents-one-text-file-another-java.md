---
id: 202
title: Copying the Contents of One text file to Another in Java
slug: copying-contents-one-text-file-another-java
excerpt: In this example, we will see a sample program to copying the contents of one text file to another in Java.
difficulty: beginners
publishedDate: "2014-09-09T08:16:58.000Z"
updatedDate: "2025-09-16T23:05:30.333Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-inputstream-outputstream
  - copy-text-file-java
  - java-file-read-write
course: null
displayOrder: 0
seo: 
  metaTitle: "Copy Contents of One Text File to Another in Java"
  metaDescription: "A step-by-step Java example that shows how to copy the contents of one text file into another using InputStream and OutputStream."
  metaKeywords: null
---

In this example, we will see a sample program to copying the contents of one text file to another in Java.

```java
package com.javatechig;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class CopyFileContent {

    public static void main(String[] args) {

        /* Source file, from which content will be copied */
        File sourceFile = new File("file1.txt");

        /* destination file, where the content to be pasted */
        File destFile = new File("file2.txt");

        /* if file not exist then create one */
        if (!destFile.exists()) {
            try {
                destFile.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        InputStream input = null;
        OutputStream output = null;

        try {

            /* FileInputStream to read streams */
            input = new FileInputStream(sourceFile);

            /* FileOutputStream to write streams */
            output = new FileOutputStream(destFile);

            byte[] buf = new byte[1024];
            int bytesRead;

            while ((bytesRead = input.read(buf)) > 0) {
                output.write(buf, 0, bytesRead);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        finally {
            try {

                if (null != input) {
                    input.close();
                }

                if (null != output) {
                    output.close();
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
```
