---
id: 259
title: Java TreeSet Example
slug: java-treeset-example
excerpt: In the following example, we will see how to use TreeSet Collection in java. This example includes, How to create an TreeSet, How to display element of Treeset, Adding data to TreeSet and Deleting data from TreeSet.
difficulty: beginners
publishedDate: "2014-01-15T21:11:45.000Z"
updatedDate: "2025-09-16T23:05:33.355Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the following example, we will see how to use TreeSet Collection in java. This example includes,

-   How to create an TreeSet
-   How to display element of Treeset
-   Adding data to TreeSet
-   Deleting data from TreeSet

### Things to know about TreeSet

1.  TreeSet is similar to TreeMap that stores its elements in a tree and maintain order of its elements based on their values. The elements are ordered using their natural ordering, or by a Comparator provided at set creation time, depending on which constructor is used.
2.  To get the size of TreeSet collection size() method is used.
3.  The size of the TreeSet can be determine by calling size() method.
4.  remove() method can be used to remove an item/object
5.  clear() method removes all object and makes the TreeSet empty
6.  first() and last() method is used to get the first and last element in TreeSet

## TreeSet Example

```java
import java.util.Iterator;
import java.util.TreeSet;

public class TreeSetExample {

	public static void main(String[] args) {
		// adding Integer to treeset
		TreeSet<Integer> treeSet = new TreeSet<Integer>();
		treeSet.add(20);
		treeSet.add(30);
		treeSet.add(40);
		treeSet.add(50);
		treeSet.add(22);

		// Check empty or not
		if (treeSet.isEmpty()) {
			System.out.print("TreeSet is empty.");
		} else {
			System.out.println("TreeSet size: " + treeSet.size());
		}

		// Looping and Displaying the Tree set data using Iterator
		Iterator<Integer> iterator = treeSet.iterator();
		while (iterator.hasNext()) {
			System.out.print(iterator.next() + "\t");
		}

		// Retrieve first data from tree set
		System.out.println("\nFirst Element: " + treeSet.first());

		// Retrieve last data from tree set
		System.out.println("Last Element: " + treeSet.last());

		// remove element by value
		boolean flag = treeSet.remove(40);
		if (flag) {
			System.out.println("40 is removed!");
		} else {
			System.out.println("40 doesn't exist!");
		}

		System.out.println("New size after delete: " + treeSet.size());

		// Looping and Displaying the Tree set data using Iterator
		iterator = treeSet.iterator();
		while (iterator.hasNext()) {
			System.out.print(iterator.next() + "\t");
		}

		// Remove all data
		treeSet.clear();
		if (treeSet.isEmpty()) {
			System.out.print("\nTree Set is empty.");
		} else {
			System.out.println("\nTree Set size: " + treeSet.size());
		}
	}
}
```

### Output

**TreeSet size: 5
20	22	30	40	50	
First Element: 20
Last Element: 50
40 is removed!
New size after delete: 4
20	22	30	50	
Tree Set is empty.**
