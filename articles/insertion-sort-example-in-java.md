---
id: 149
title: Insertion sort example in Java
slug: insertion-sort-example-in-java
excerpt: Code snippet to sort array using insertion sort algorithm in java.
difficulty: beginners
publishedDate: "2015-06-16T22:25:29.000Z"
updatedDate: "2025-09-16T23:05:27.535Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/191/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Code snippet to sort array using insertion sort algorithm in java.

```java
public class InsertionSortExample {
	static int step = 1;

	public static void main(String[] args) {

		int[] array = { 17, 21, 191, 3, 23, 45, 34, 9, 1 };

		int n = array.length;
		for (int j = 1; j < n; j++) {
			int key = array[j];
			int i = j - 1;
			while ((i > -1) && (array[i] > key)) {
				array[i + 1] = array[i];
				i--;
			}
			array[i + 1] = key;
			printNumbers(array);
			
			System.out.println("n");
		}
	}

	private static void printNumbers(int[] input) {
		System.out.println("--- step " + step + " ----");
		step++;

		for (int i = 0; i < input.length; i++) {
			System.out.print(input[i] + ", ");
		}
	}
}
```

**Output**  
[![Insertion sort example in Java](/media/articles/191/Insertion-sort-example-in-Java-620x359.png)](http://stacktips.com)
