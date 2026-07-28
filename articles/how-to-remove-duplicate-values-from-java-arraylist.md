---
id: 253
title: How to Remove Duplicate Values From Java ArrayList
slug: how-to-remove-duplicate-values-from-java-arraylist
excerpt: This example shows how to remove duplicate from ArrayList. The easiest way to remove duplicate is by passing the List to an Set. As set doesn’t support duplicates it will omit the duplicate values. Once you have the Set you can again pass it back to ArrayList.
difficulty: beginners
publishedDate: "2014-03-06T13:47:21.000Z"
updatedDate: "2025-09-16T23:05:32.842Z"
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

This example shows how to remove duplicate from ArrayList. The easiest way to remove duplicate is by passing the List to an Set. As set doesn’t support duplicates it will omit the duplicate values. Once you have the Set you can again pass it back to ArrayList.

### Duplicate Values From Java ArrayList using HashSet

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

public class RemoveDuplicate {
	public static void main(String[] args) {
		List sourceList = new ArrayList();

		sourceList.add("object1");
		sourceList.add("object2");
		sourceList.add("object2");
		sourceList.add("object3");
		sourceList.add("object4");
		sourceList.add("object2");

		List newList = new ArrayList(new HashSet(
				sourceList));
		Iterator it = newList.iterator();
		while (it.hasNext()) {
			System.out.println(it.next());
		}

	}
}
```

### Output

```
object3
object4
object1
object2
```

In this above example we have removed duplicates from the ArrayList but we will loose the sequencing index. If you want to preserve the order of data use LinkedHashSet rather HashSet. Find an example below

### Duplicate Values From Java ArrayList using LinkedHashSet

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;

public class RemoveDuplicate {
	public static void main(String[] args) {
		List sourceList = new ArrayList();

		sourceList.add("object1");
		sourceList.add("object2");
		sourceList.add("object2");
		sourceList.add("object3");
		sourceList.add("object4");
		sourceList.add("object2");

		List newList = new ArrayList(new LinkedHashSet(
				sourceList));
		Iterator it = newList.iterator();
		while (it.hasNext()) {
			System.out.println(it.next());
		}

	}
}
```

### Output

```
object1
object2
object3
object4
```
