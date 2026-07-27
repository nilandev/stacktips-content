---
id: 254
title: Java Collection Complete Tutorial with Examples
slug: java-collection-complete-tutorial-and-examples
excerpt: In this tutorial we’ll see the core collection interface available in java and their behavior. Examples in each section will show you the implementation and usage of various collection interfaces.
difficulty: beginners
publishedDate: "2014-02-22T23:37:56.000Z"
updatedDate: "2025-09-16T23:05:32.898Z"
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

In this tutorial we’ll see the core collection interface available in java and their behavior. Examples in each section will show you the implementation and usage of various collection interfaces.

### Introduction to Java collection API

Java Collections API is a set of interface and implementations included in the java standard library. A collection is a container that holds multiple objects into single unit. Different collection has their own purpose and behaviors. All collection interfaces and classes are available under java.util package.  
Collection interfaces are the abstract behavior of each collection.

[](http://stacktips.com)

## Collection Interface

Collection interface is the root of collection hierarchy and it represents general purpose behavior for the entire interface in this hierarchy. It doesn’t have a concrete implementation.

### Set Interface

-   A set is a collection that doesn’t allow duplicate entries. A set has the same methods as the collection interface. It can contain at least one 1 null element.
-   The set implementations are HashSet, LinkedHashSet and TreeSet.
-   Element in HashSet, LinkedHashSet are not sorted but TreeSet is sorted.

**Example: SetExample.java**

```java
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class SetExample {
  public static void main(String args[]) { 
     int count[] = {34, 22,10,60,30,22};
     Set<Integer> set = new HashSet<Integer>();
     try{
        for(int i = 0; i<5; i++){
           set.add(count[i]);
        }
        System.out.println("Initial Set=" + set);        

        set.remove(30);        
        System.out.println("Values after delete=" + set);

        System.out.println("Retrieving Values");        
        Iterator<Integer> iterator = set.iterator();
        while(iterator.hasNext()){
        	System.out.println(iterator.next());
        }     

     }
     catch(Exception e){}
  }
}
```

#### Output

Initial Set=\[34, 22, 10, 30, 60\]
Values after delete=\[34, 22, 10, 60\]
Retrieving Values
34
22
10
60

### HashSet

-   HashSet is an abstract implementation of Set interface. It creates a collection that uses a hash table for storing the elements.
-   A HashTable uses hashing mechanism to store the objects. Hashing means, a key is used to determine a unique value, called its hash code. Every hash code represents a data associated with key.

For example, please refer the previous example block

### LinkedHashSet

-   LinkedHashSet maintains a linked list of the entries in the set.
-   The elements are stored in the order in which they were inserted.
-   While retrieving the LinkedHashSet elements using an Iterator, the elements will be returned in the order in which they were inserted.

**Example: LinkedHashSetExample.java**

```java
import java.util.Iterator;
import java.util.LinkedHashSet;

public class LinkedHashSetExample {
	public static void main(String args[]) {
		int count[] = { 34, 22, 10, 60, 30, 22, 25 };
		LinkedHashSet<Integer> set = new LinkedHashSet<Integer>();

		try {
			for (int i = 0; i < 7; i++) {
				set.add(count[i]);
			}
			System.out.println("Initial Set=" + set);

			set.remove(30);
			System.out.println("Values after delete=" + set);

			System.out.println("Retrieving Values");
			Iterator<Integer> iterator = set.iterator();
			while (iterator.hasNext()) {
				System.out.println(iterator.next());
			}

		} catch (Exception e) {
		}
	}
}
```

#### Output

Initial Set=\[34, 22, 10, 60, 30, 25\]
Values after delete=\[34, 22, 10, 60, 25\]
Retrieving Values
34
22
10
60
25

### TreeSet

TreeSet is a Set implementation that uses tree concept for storing object. It stores the elements in sorted order. Accessing TreeSet is quite faster than other set implementations.

#### [TreeSet Example](http://stacktips.com/java/java-treeset-example "Java TreeSet Example")

#### Example: TreeSetExample.java

```java
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetExample {

	public static void main(String args[]) {
		int count[] = { 14, 43, 10, 55, 30, 22,40};
		Set<Integer> set = new TreeSet<Integer>();
		try {
			for (int i = 0; i < 6; i++) {
				set.add(count[i]);
			}
			System.out.println("Intial Set=" + set);

			set.remove(30);
			System.out.println("Values after delete=" + set);

			System.out.println("Retrieving Values");
			Iterator<Integer> iterator = set.iterator();
			while (iterator.hasNext()) {
				System.out.println(iterator.next());
			}

		} catch (Exception e) {
		}
	}
}
```

#### Output

Intial Set=\[10, 14, 22, 30, 43, 55\]
Values after delete=\[10, 14, 22, 43, 55\]
Retrieving Values
10
14
22
43
55

### List Interface

-   A List is an ordered collection of elements
-   It may contain duplicate
-   The indexing of the elements is similar to Array. The first index of List is zero.
-   The elements can be manipulated based on their indexed positions
-   Common List implementations are ArrayList and LinkedList

### [ArrayList](http://stacktips.com/java/how-to-sort-an-arraylist-in-java "How to sort an ArrayList in java")

The ArrayList class extends AbstractList and implements the List interface. ArrayList supports dynamic arrays that can grow as needed. Array lists are created with an initial size. When this size is exceeded, the collection is automatically enlarged. When objects are removed, the array may be shrunk.

#### [Loop ArrayList In Java](http://stacktips.com/java/how-to-loop-arraylist-in-java "How To Loop ArrayList In Java")

#### [Sort an ArrayList in java](http://stacktips.com/java/how-to-sort-an-arraylist-in-java "How to sort an ArrayList in java")

### LinkedList

The LinkedList class extends AbstractSequentialList and implements the List interface. It provides a linked-list data structure.

```java
import java.util.LinkedList;

public class LinkedListExample {
	public static void main(String args[]) {
		// create a linked list
		LinkedList<String> list = new LinkedList<String>();
		list.add("F");
		list.add("E");
		list.add("D");
		list.add("E");
		list.add("C");
		list.addLast("G");
		list.addFirst("B");
		list.add(1, "E1");
		System.out.println("Values of LinkedList=" + list);

		// remove first and last elements
		list.removeFirst();
		list.removeLast();
		System.out.println("After deleting first and last= " + list);

		// remove elements from the linked list
		list.remove("C");
		list.remove(4);
		System.out.println("After Delete" + list);
	}
}
```

**Output**

Values of LinkedList=\[B, E1, F, E, D, E, C, G\]
After deleting first and last= \[E1, F, E, D, E, C\]
After Delete\[E1, F, E, D\]
