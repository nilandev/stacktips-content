---
id: 203
title: How to Create a Text File in Java
slug: how-to-create-a-text-file-in-java
excerpt: In this article we will see the sample code to create a text file in java.In this example, we’ll use the PrintWriter class.
difficulty: beginners
publishedDate: "2014-09-09T03:11:17.000Z"
updatedDate: "2025-09-16T23:05:30.379Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this article we will see how to create a text file in java. In this example, we’ll use the [`PrintWriter`](http://docs.oracle.com/javase/7/docs/api/java/io/PrintWriter.html) class.

```java
package com.javatechig;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class CreateTextFile {

	public static void main(String[] args) {
		PrintWriter writer = null;
		try {
			/* Create a new file with UTF-8 encoding */
			writer = new PrintWriter("file1.txt", "UTF-8");

			/* Write content to file */
			writer.println("Hello, this is a binary file.");
			writer.println("Put your file contents here...");

			writer.close();			
			System.out.println("New File Created!");			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

	}
}
```
