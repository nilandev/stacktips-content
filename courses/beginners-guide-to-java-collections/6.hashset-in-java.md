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

A `HashSet` is preferred when your data is unique and the order of elements is not required. HashSet performs faster for basic operations like add, remove, and contains, which typically run in constant time, O(1) — but that O(1) depends entirely on your elements having a good `hashCode()` implementation, which is worth understanding.

### How it actually works

`HashSet` isn't really its own data structure — it's a thin wrapper around a `HashMap<E, Object>`. Every element you add becomes a key in that backing map, paired with a shared dummy value (a `private static final Object PRESENT`). `add()` is really `map.put(element, PRESENT)`, `contains()` is `map.containsKey(element)`, and so on. Everything about `HashSet`'s performance and behaviour — bucket layout, resizing, treeification of long collision chains — is really `HashMap`'s behaviour. The [HashMap article](/articles/hashmap-in-java) covers that internal mechanism in more depth.

The O(1) average case assumes `hashCode()` spreads your elements evenly across buckets. A poor `hashCode()` (or none at all, falling back to `Object`'s identity-based default) that clusters everything into a handful of buckets degrades lookups toward O(n) in the worst case, since Java 8+, an over-full bucket becomes a red-black tree instead of a linked list, capping the true worst case at O(log n) — but you still lose the O(1) you were counting on.

### The mutable element trap

This is the single most common `HashSet` bug: mutate an element's `hashCode()`-relevant fields *after* adding it, and the set effectively loses track of it.

```java
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

Set<Point> points = new HashSet<>();
Point p = new Point(1, 2);
points.add(p);

p.x = 99; // mutated after insertion

System.out.println(points.contains(p)); // false — still stored in the (1,2) bucket, but now hashes to a different one
System.out.println(points.contains(new Point(99, 2))); // also false — that bucket doesn't have this object
```

`p` is still physically inside the set — iterating `points` will print it — but `contains()` and `remove()` both recompute the hash from `p`'s *current* state to find the bucket to look in, and that bucket is no longer where `p` actually lives. The fix is simple: never use mutable fields in `equals()`/`hashCode()` for objects you plan to put in a `HashSet` or use as a `HashMap` key. If you need to change something about an object that's already in a set, remove it first, mutate it, then re-add it.

#### Creating and initializing HashSet

```java
// Creating a HashSet using the default constructor
HashSet<String> hashSet = new HashSet<>();
hashSet.add("A");
hashSet.add("B");
hashSet.add("C");

// Creating a HashSet with an initial capacity
HashSet<String> hashSetWithCapacity = new HashSet<>(50);

// Creating a HashSet with an initial capacity and load factor
HashSet<String> hashSetWithLoadFactor = new HashSet<>(50, 0.75f);

// Creating a HashSet from another collection
List<String> list = Arrays.asList("A", "B", "C", "D");
HashSet<String> hashSetFromList = new HashSet<>(list);

// Using the factory method
Set<String> set = Set.of("A", "B", "C");
HashSet<String> hashSetFromSet = new HashSet<>(set);
```

-   The load factor defines how full the hash table is allowed to get before its capacity is automatically increased.

#### Iterate HashSet Elements

Since a `HashSet` doesn't support indexed access, you'll need an iterator (or one of its Java 8 equivalents) to walk through its elements. Its iterator is fail-fast — it throws `ConcurrentModificationException` if the set is structurally modified any way other than through the iterator itself while you're iterating. Also note that iteration order is not the insertion order — it's whatever order the backing hash table happens to lay elements out in, which can change entirely after a resize.

```java
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));

// Using an enhanced for-each loop
for (String element : hashSet) {
    System.out.println(element);
}

// Using an Iterator
Iterator<String> iterator = hashSet.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}

// Using a Java 8 Spliterator
Spliterator<String> spliterator = hashSet.spliterator();
spliterator.forEachRemaining(System.out::println);

// Using the forEach() method (Java 8+)
hashSet.forEach(element -> System.out.println(element));

// Using a Stream (Java 8+)
hashSet.stream().forEach(System.out::println);
```

-   A `Spliterator` can be used for traversing and partitioning elements of a source. It is particularly useful for parallel processing.

#### Removing Items in a HashSet

There are several methods available to remove an item from HashSet.

```java
// Remove a single element using remove()
HashSet<String> hashSet = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet.remove("B");

// Remove elements conditionally using a predicate
HashSet<String> hashSet1 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet1.removeIf(s -> s.startsWith("A"));

// Remove all elements
HashSet<String> hashSet2 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet2.clear();

// Remove an element using an Iterator
HashSet<String> hashSet3 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
Iterator<String> iterator = hashSet3.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    if ("B".equals(element)) {
        iterator.remove();
    }
}

// Retain specific elements and remove the rest
HashSet<String> hashSet4 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet4.retainAll(Arrays.asList("A", "C"));

// Remove elements found in another collection
HashSet<String> hashSet5 = new HashSet<>(Arrays.asList("A", "B", "C", "D"));
hashSet5.removeAll(Arrays.asList("A", "C"));  // Removes "A" and "C" from the HashSet
```

## HashSet vs the Alternatives

-   **vs `LinkedHashSet`**: same O(1) average performance, but `LinkedHashSet` also maintains insertion order at the cost of two extra reference fields per entry. If you don't specifically need predictable iteration order, plain `HashSet` uses less memory for the same data.
-   **vs `TreeSet`**: `HashSet` is O(1) average vs `TreeSet`'s O(log n), but `TreeSet` keeps elements sorted and supports range queries (`headSet`, `tailSet`, `ceiling`, etc.). Choose based on whether you need order at all — if you don't, `HashSet` is strictly faster.
-   **vs `Collections.newSetFromMap(new ConcurrentHashMap<>())`**: `HashSet` isn't thread-safe. For concurrent access, wrap it with `Collections.synchronizedSet()`, or use a set backed by `ConcurrentHashMap` for lock-striped concurrent access instead of a single lock around the whole set.
