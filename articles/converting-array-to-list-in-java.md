---
id: 310
title: Converting Array to List in java
slug: converting-array-to-list-in-java
excerpt: Array class has a asList() method that helps to convert array to List. This method copies an array…
difficulty: beginners
publishedDate: "2013-07-28T11:32:10.000Z"
updatedDate: "2025-09-16T23:05:35.813Z"
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

Array class has a `asList()` method that helps to convert array to List. This method copies an array into List. When we use `asList()` method, the array and list both shares the same heap space. When update is made to the list, it reflects the changes to array and vice-versa.

```java
import java.util.Arrays;
import java.util.List;

public class ArrayToList {

	public static void main(String[] args) {
		String[] names = { "Neel", "Clay", "Adams", "Joseph", "Jack" };

		// Converting Array to List 
		List aList = Arrays.asList(names);

		System.out.println("Size of list=" + aList.size());
		System.out.println("aList Values=" + aList);

		//changing the aList values
		aList.set(2, "Dinesh");

		// printing aList values
		for (String name : names) {
			System.out.println(name);
		}
	}
}
```

If you look at the output below you will notice that, after changing the values in list, the changes reflected in the array.

**Output**

[![Converting Array to List in java](/media/articles/403/Converting-Array-to-List-in-java.png)](http://stacktips.com)
