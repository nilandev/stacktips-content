---
id: 311
title: Searching arrays and collections in java
slug: searching-arrays-and-collections-in-java
excerpt: Arrays and Collection class provides methods that allows to search a specific element in the list. Things to…
difficulty: beginners
publishedDate: "2013-07-28T09:13:10.000Z"
updatedDate: "2025-09-16T23:05:35.848Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-array-search
  - binary-search-java
  - java-collections-search
  - arrays-binarysearch
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Arrays and `Collection` class provides methods that allows to search a specific element in the list. Things to know while searching a collection or an array;

-   Search is performed using `binarySearch()` method
-   If the element found in the collection or array it returns the element index. If the index is a non negative integer greater than zero then element found.
-   The collection array needs to be sorted before performing search algorithm. If the collection is not sorted then the result will be unpredictable. Note that the sorting should be performed in natural order.
-   If the sorting is not made in natural order, and performed using Comparator, then searching should be performed using same Comparator.

Example of searching Array/Collection in java

```java
package com.java.test;

import java.util.Arrays;
import java.util.Comparator;

public class SearchObjectArray {

    public static void main(String[] args) {
        String[] names = { "Neel", "Clay", "Adams", "Joseph", "Jack" };

        // sorting array
        Arrays.sort(names);

        // printing after sort
        for (String name : names) {
            System.out.println(name);
        }

        // Search result for "one"
        System.out.println("Search Adams=" + Arrays.binarySearch(names, "Adams"));

        System.out.println("======================================");

        // reverse sorting
        ReverseSortComparator reSort = new ReverseSortComparator();
        Arrays.sort(names, reSort);
        for (String name : names) {
            System.out.println(name);
        }

        // Search result for "one"
        System.out.println("Search Adams=" + Arrays.binarySearch(names, "Adams", reSort));
    }

    static class ReverseSortComparator implements Comparator {

        public int compare(String a, String b) {
            return b.compareTo(a);
        }

    }

}
```

Output of the above code is

[![Searching arrays and collections](/media/articles/404/Searching-arrays-and-collections.png)](http://stacktips.com)
