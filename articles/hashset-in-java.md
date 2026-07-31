---
id: 449
title: HashSet in Java
slug: hashset-in-java
excerpt: "The `HashSet` is a collection that uses a hash table for storage. Elements are stored by hashing and as a result, it only supports unique elements."
difficulty: beginner
publishedDate: "2024-07-24T05:19:20.000Z"
updatedDate: "2025-09-16T23:05:41.671Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-hashset
  - hashset-iteration
  - java-collections-framework
  - remove-duplicates-java
course: beginners-guide-to-java-collections
displayOrder: 6
seo: 
  metaTitle: "HashSet in Java: Create, Iterate, and Remove Elements"
  metaDescription: "Learn how HashSet works in Java for storing unique elements, plus how to create, iterate, and remove items using iterators, streams, and predicates."
  metaKeywords: null
---

The `HashSet` is a collection that uses a hash table for storage. Elements are stored by hashing and as a result, it only supports unique elements.

### Key Properties of HashSet

Unlike most other collections, a `HashSet` does not keep track of order.

A `HashSet` is preferred when your data is unique and the order of elements is not required. HashSet performs faster for basic operations like add, remove, and contains, which typically run in constant time, O(1).

#### Creating and initializing HashSet

```java

// Creating HashSet using the default constructor
HashSet<String> hashSet = new HashSet<>();
hashSet.add("A");
hashSet.add("B");
hashSet.add("C");

// Creating HashSet with initial capacity
HashSet<String> hashSet = new HashSet<>(50);

// Creating HashSet with initial capacity and load factor
HashSet<String> hashSet = new HashSet<>(50, 0.75f);

// Creating a HashSet from another collection
List<String> list = Arrays.asList("A", "B", "C", "D");
HashSet<String> hashSet = new HashSet<>(list);

// Using the factory method
Set<String> set = Set.of("A", "B", "C");
HashSet<String> hashSet = new HashSet<>(set);
```

-   The load factor defines how full the hash table is allowed to get before its capacity is automatically increased.

#### Iterate HashSet Elements

All collections support iterators. We need to use an iterator when we use a `HashSet` to iterate since it doesn't support indexes.

```java

// Using an Enhanced for-each loop
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
for (String element : hashSet) {
    System.out.println(element);
}

//Using an Iterator
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
Iterator<String> iterator = hashSet.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}

//Using a Java8 Spliterator
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
Spliterator<String> spliterator = hashSet.spliterator();
spliterator.forEachRemaining(System.out::println);

//Using the forEach() Method (Java 8 and Later)
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.forEach(element -> System.out.println(element));

//Using a Stream (Java 8 and Later)
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.stream().forEach(System.out::println);
```

-   A `Spliterator` can be used for traversing and partitioning elements of a source. It is particularly useful for parallel processing.

#### Removing Items in a HashSet

There are several methods available to remove an item from HashSet.

```java

// Remove object using remove method
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.remove("B");

// Remove element conditionally using predicate
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.removeIf(s -> s.startsWith("A"));

// Remove all elements
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.clear();  // Removes all elements from the HashSet

//Remove element using Iterator
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
Iterator<String> iterator = hashSet.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    if ("B".equals(element)) {
        iterator.remove();
    }
}

// Retain specific elements and remove the rest
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.retainAll(Arrays.asList("A", "C"));

//Remove elements based on another collection
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.removeAll(Arrays.asList("A", "C"));  // Removes "A" and "C" from the HashSet
```
