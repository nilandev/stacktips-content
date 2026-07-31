---
id: 451
title: TreeSet in Java
slug: treeset-in-java
excerpt: A TreeSet in Java is a collection that implements the NavigableSet interface and uses a TreeMap internally to store elements.
difficulty: beginner
publishedDate: "2024-07-24T05:21:59.000Z"
updatedDate: "2025-09-16T23:05:41.738Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - treeset-java
  - navigableset
  - sorted-collection-java
  - java-collections-framework
course: beginners-guide-to-java-collections
displayOrder: 8
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A `TreeSet` in Java is a collection that implements the `NavigableSet` interface and uses a `TreeMap` internally to store elements.

### Key Properties of TreeSet

TreeSet provides an ordered set implementation that sorts elements based on their natural ordering or according to a specified comparator.

When you need to maintain a collection of unique elements in a sorted order, you can go for `TreeSet`.

**Example** Suppose you are developing an application for managing a library. You need to keep track of the titles of the books in sorted order to facilitate searching and displaying the books in alphabetical order.

```java
public class LibraryManager {
    public static void main(String[] args) {
        TreeSet<String> bookTitles = new TreeSet<>();
        bookTitles.add("To Kill a Mockingbird");
        bookTitles.add("1984");
        bookTitles.add("Pride and Prejudice");
        bookTitles.add("Queen of England");
        bookTitles.add("The Catcher in the Rye");
        bookTitles.add("1984"); // Duplicate title, will not be added again

        // Display the book titles in sorted order
        System.out.println("Book titles (sorted):");
        for (String title : bookTitles) {
            System.out.println(title);
        }

        // Finding the first and last book titles
        System.out.println("\nFirst book in the library: " + bookTitles.first());
        System.out.println("Last book in the library: " + bookTitles.last());

        // Displaying a subset of books
        System.out.println("\nBooks between 'P' and 'T':");
        for (String title : bookTitles.subSet("P", "T")) {
            System.out.println(title);
        }
    }
}
```

**Output:**

```text
Book titles in the library (sorted):
1984
Pride and Prejudice
Queen of England
The Catcher in the Rye
To Kill a Mockingbird

First book in the library: 1984
Last book in the library: To Kill a Mockingbird

Books between 'P' and 'T':
Pride and Prejudice
Queen of England
```
