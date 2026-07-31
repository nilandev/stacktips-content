---
id: 460
title: Introduction to Java Collections
slug: introduction-to-java-collections
excerpt: Java Collections API is a set of interfaces and implementations included in the Java standard library.
difficulty: beginner
publishedDate: "2024-07-24T05:43:39.000Z"
updatedDate: "2025-09-16T23:05:42.074Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-collections-framework
  - java-list-set-map-interface
  - java-util-collection
  - java-collections-hierarchy
course: getting-started-with-java
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java Collections API is a set of interfaces and implementations are included in the Java standard library. The collections framework in Java defines different data structures in which you can store, group, and retrieve objects.

There are different collection implementations with their distinct behaviours and purpose. All collection interfaces and classes are available under `java.util` package.

In this lesson, we'll dive into some of these collections and learn how to do the basic operations in each.

## Collection Interface

The collection interface is the root of the collection hierarchy and it represents general-purpose behavior for the entire interface in this hierarchy. It doesn’t have a concrete implementation.

![](/media/summernote/Collection-Hierarchy2x-min.png)  

## List Interface

A list is an ordered collection of elements that may contain duplicates. The indexing of the elements is similar to Array, and the first index of the List is zero.

The elements can be manipulated based on their indexed position. The common List implementations in Java are:

-   [ArrayList](/courses/java-collections/arraylist-in-java)
-   [LinkedList](/courses/java-collections/linkedlist-in-java)
-   [CopyOnWriteArrayList](/courses/java-collections/copyonwritearraylist-in-java)
-   [Vector](/courses/java-collections/vector-in-java)
-   [Stack](/courses/java-collections/stack-in-java)

## Set Interface

A set is a collection that doesn’t allow duplicate entries. A set has the same methods as the List interface. It can contain at most one 1 null element.

The common Set implementations in Java include:

-   [HashSet](/courses/java-collections/hashset-in-java)
-   [LinkedHashSet](/courses/java-collections/linkedhashset-in-java)
-   [TreeSet](/courses/java-collections/treeset-in-java)

## Queue Interface

A Queue represents a collection where elements are inserted at the back and removed from the front (FIFO - First In, First Out).

The common Queue implementations include:

-   [LinkedList](/courses/java-collections/linkedlist-in-java)
-   [PriorityQueue](/courses/java-collections/priorityqueue-in-java)
-   [DelayQueue](/courses/java-collections/delayqueue)
-   [ArrayDeque](/courses/java-collections/arraydeque-in-java)

## Map Interface

The Map interface in Java is not a collection but it is part of the Collection framework. It implements the Map interface and can store key-value pairs.

![](/media/summernote/Map-Hierarchy2x-min.png)  

The common Map implementations include:

-   [HashMap](/courses/java-collections/hashmap-in-java): Unordered, allows one null key and multiple null values.
-   [LinkedHashMap](/courses/java-collections/linkedhashmap-in-java): Ordered by insertion, allows one null key and multiple null values.
-   [IdentityHashMap](/courses/java-collections/identityhashmap-in-java): Uses reference equality for keys.
-   [TreeMap](/courses/java-collections/treemap-in-java): Sorted order, does not allow null keys, allows multiple null values.
-   [Hashtable](/courses/java-collections/hashtable-in-java): Synchronized, does not allow null keys or values.
