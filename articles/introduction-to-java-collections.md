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
course: beginners-guide-to-java-collections
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Java Collections API is a set of interfaces and implementations included in the Java standard library. The collections framework defines different data structures for storing, grouping, and retrieving objects.

Each implementation has its own trade-offs in ordering, performance, and thread-safety, so picking the right one matters more than people usually assume. All collection interfaces and classes live under the `java.util` package.

In this course, we'll walk through the most commonly used collections and learn how to perform the basic operations on each one.

## Collection Interface

The `Collection` interface sits at the root of the collection hierarchy and defines the general-purpose behaviour shared across the hierarchy. It has no concrete implementation of its own.

![](/media/summernote/Collection-Hierarchy2x-min.png)  

## List Interface

A `List` is an ordered collection of elements that may contain duplicates. Elements are indexed the same way as an array, starting at zero.

Elements can be inserted, accessed, and removed based on their index. The common `List` implementations in Java are:

-   [ArrayList](/articles/arraylist-in-java)
-   [LinkedList](/articles/linkedlist-in-java)
-   [CopyOnWriteArrayList](/articles/copyonwritearraylist-in-java)
-   [Vector](/articles/vector-in-java)
-   [Stack](/articles/stack-in-java)

## Set Interface

A `Set` is a collection that doesn't allow duplicate entries. It exposes largely the same methods as `List`, but it can hold at most one `null` element.

The common `Set` implementations in Java include:

-   [HashSet](/articles/hashset-in-java)
-   [LinkedHashSet](/articles/linkedhashset-in-java)
-   [TreeSet](/articles/treeset-in-java)

## Queue Interface

A `Queue` represents a collection where elements are inserted at the back and removed from the front (FIFO — first in, first out).

The common `Queue` implementations include:

-   [LinkedList](/articles/linkedlist-in-java)
-   [PriorityQueue](/articles/priorityqueue-in-java)
-   [DelayQueue](/articles/delayqueue)
-   [ArrayDeque](/articles/arraydeque-in-java)

## Map Interface

`Map` isn't technically a `Collection`, but it's still part of the Collections Framework. A `Map` stores data as key-value pairs, where each key maps to exactly one value.

![](/media/summernote/Map-Hierarchy2x-min.png)  

The common `Map` implementations include:

-   [HashMap](/articles/hashmap-in-java): unordered, allows one null key and multiple null values.
-   [LinkedHashMap](/articles/linkedhashmap-in-java): ordered by insertion, allows one null key and multiple null values.
-   [IdentityHashMap](/articles/identityhashmap-in-java): uses reference equality for keys.
-   [TreeMap](/articles/treemap-in-java): sorted order, doesn't allow null keys, allows multiple null values.
-   [Hashtable](/articles/hashtable-in-java): synchronized, doesn't allow null keys or values.

## Fail-Fast vs Fail-Safe Iterators

Every non-concurrent collection in this course — `ArrayList`, `HashMap`, `HashSet`, `TreeMap`, `TreeSet`, and so on — tracks a `modCount` field that increments on every structural change (add/remove, not `set()`). Their iterators capture `modCount` at creation and compare it on every `next()` call. If the two don't match, you get a `ConcurrentModificationException`. This is called **fail-fast**: it exists to catch bugs, not to provide thread safety — it's a best-effort detector, not a guarantee, and it won't reliably trigger under genuine concurrent access.

Two implementations in this course opt out of that behaviour:

-   `CopyOnWriteArrayList` iterates over a private snapshot of the array taken when the iterator was created. It never throws `ConcurrentModificationException`, and it won't see mutations made after the iterator was created either.
-   `DelayQueue` uses a weakly consistent iterator — it also won't throw, and it may or may not reflect concurrent changes, with no guarantee either way.

The practical rule: never call `list.remove(item)` inside a `for-each` loop over `list`. Use `Iterator.remove()`, `ListIterator`, or `removeIf()` instead — all three update `modCount` in a way the iterator already accounts for.

## Choosing a Collection

| You need | Reach for |
| --- | --- |
| An indexable, resizable list | `ArrayList` |
| Frequent inserts/removals at both ends | `ArrayDeque` |
| A thread-safe list you mostly read, rarely write | `CopyOnWriteArrayList` |
| Unique elements, no ordering guarantees | `HashSet` |
| Unique elements, insertion order preserved | `LinkedHashSet` |
| Unique elements, sorted order | `TreeSet` |
| Fast key lookups, no ordering | `HashMap` |
| Fast key lookups, insertion (or access) order preserved | `LinkedHashMap` |
| Fast key lookups, sorted by key | `TreeMap` |
| Always process the smallest/largest element next | `PriorityQueue` |
| Process elements only after a delay expires | `DelayQueue` |
| A LIFO stack | `ArrayDeque` (not `Stack`) |

Legacy classes worth knowing but avoiding in new code: `Vector`, `Stack`, and `Hashtable`. They predate the Collections Framework, use coarse-grained per-method synchronization that hurts single-threaded performance for no benefit, and have modern replacements that are either faster (`ArrayDeque`) or genuinely thread-safe under concurrent access (`ConcurrentHashMap`, `CopyOnWriteArrayList`).
