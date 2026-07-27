---
id: 201
title: Copy file from one folder to another in java
slug: copy-file-one-folder-another-java
excerpt: This example explains how to Copy file from one folder to another in java. package com.javatechig; import java.io.File;…
difficulty: beginners
publishedDate: "2014-09-10T03:22:58.000Z"
updatedDate: "2025-09-16T23:05:30.284Z"
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

This example explains how to Copy file from one folder to another in java.

```java
package com.javatechig;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;

public class CopyFile {

	public static void main(String[] args) {
		File sourceFile = new File(
				"/Users/Neel/Documents/Workspace/file1.txt");

		File destFile = new File(
				"/Users/Neel/Documents/Workspace/file2.txt");

		/* verify whether file exist in source location */
		if (!sourceFile.exists()) {
			System.out.println("Source File Not Found!");
		}

		/* if file not exist then create one */
		if (!destFile.exists()) {
			try {
				destFile.createNewFile();
				
				System.out.println("Destination file doesn't exist. Creating one!");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		FileChannel source = null;
		FileChannel destination = null;

		try {

			/**
			 * getChannel() returns unique FileChannel object associated a file
			 * output stream.
			 */
			source = new FileInputStream(sourceFile).getChannel();

			destination = new FileOutputStream(destFile).getChannel();

			if (destination != null && source != null) {
				destination.transferFrom(source, 0, source.size());
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		finally {
			if (source != null) {
				try {
					source.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (destination != null) {
				try {
					destination.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
```
