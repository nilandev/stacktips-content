---
id: 458
title: TreeMap in Java
slug: treemap-in-java
excerpt: The TreeMap implements the NavigableMap interface and the NavigableMap interface extends the SortedMap. It stores the items in a sorted order.
difficulty: beginner
publishedDate: "2024-07-24T05:33:54.000Z"
updatedDate: "2025-09-16T23:05:42.014Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-treemap-class
  - navigablemap-sortedmap
  - treemap-custom-comparator
  - java-collections-sorted-map
course: beginners-guide-to-java-collections
displayOrder: 15
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `TreeMap` class in Java implements the `NavigableMap` interface, which in turn extends `SortedMap`. This means a `TreeMap` always stores its entries in sorted order.

### Key Properties of TreeMap

We can also provide a comparator while initializing the TreeMap. If a comparator is not provided then it stores the elements in their natural ordering.

The NavigableMap interface provides several navigation methods such as `lowerEntry()`, `floorEntry()`, `ceilingEntry()`, and `higherEntry()`. It can be traversed in either ascending or descending key order.

Unlike HashMap, the TreeMap does not allow `null` keys.

### How it actually works

`TreeMap` is a **red-black tree** — a self-balancing binary search tree that guarantees O(log n) for `put`, `get`, and `remove`, and O(log n) height even in the worst case (unlike a naive BST, which can degrade to a linked list under sorted-order insertion). Because it's a genuine tree of node objects rather than an array-backed bucket table, it has no load factor or resizing step to think about — there's nothing to resize.

### Key equality is decided by compareTo, not equals

Same caveat as [TreeSet](/articles/treeset-in-java), and it matters more here because map keys are so often domain objects with multi-field `equals()`: `TreeMap` never calls `equals()` or `hashCode()` on its keys. Two keys are "the same" if `compareTo()` (or your `Comparator`) returns `0` — full stop, regardless of what `equals()` would say. If your comparator only orders by one field, `put()` with a second key that ties on that field will silently overwrite the first entry, even if the two key objects are unequal by `equals()`.

The same rule governs mutation: change a field your comparator depends on while the key is already in the map, and you corrupt the tree's ordering invariant — lookups, range queries, and iteration can all start behaving incorrectly, not just for that one key.

`TreeMap`'s iterator is fail-fast and always walks keys in sorted order — unlike `HashMap`, there's no separate "insertion order vs iteration order" question to think about.

```java
public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(3, "Three");
        treeMap.put(1, "One");
        treeMap.put(4, "Four");
        treeMap.put(2, "Two");

        for (Map.Entry<Integer, String> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        // Accessing elements
        System.out.println("Value for key 2: " + treeMap.get(2));

        // Getting first and last keys
        System.out.println("First key: " + treeMap.firstKey());
        System.out.println("Last key: " + treeMap.lastKey());

        // Getting a subMap
        System.out.println("SubMap from 2 to 4: " + treeMap.subMap(2, 4));

        // Removing an element
        treeMap.remove(3);
        System.out.println("TreeMap after removal of key 3: " + treeMap);
    }
}

/*
Outputs:
1 -> One
2 -> Two
3 -> Three
4 -> Four
Value for key 2: Two
First key: 1
Last key: 4
SubMap from 2 to 4: {2=Two, 3=Three}
TreeMap after removal of key 3: {1=One, 2=Two, 4=Four}
*/
```

### TreeMap using Custom Comparator

A custom comparator can be set to `TreeMap` during initialization. The above example can be rewritten using a comparator that stores entries in the reverse order of keys.

```java
public class TreeMapCustomComparatorExample {
    public static void main(String[] args) {
        Comparator<Integer> reverseOrderComparator = (key1, key2) -> key2.compareTo(key1);
        TreeMap<Integer, String> treeMap = new TreeMap<>(reverseOrderComparator);
        treeMap.put(3, "Three");
        treeMap.put(1, "One");
        treeMap.put(4, "Four");
        treeMap.put(2, "Two");

        for (Map.Entry<Integer, String> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        treeMap.remove(3);
        System.out.println("TreeMap after removal of key 3: " + treeMap);
    }
}
/*
Outputs:
4 -> Four
3 -> Three
2 -> Two
1 -> One
TreeMap after removal of key 3: {4=Four, 2=Two, 1=One}
*/
```

## TreeMap vs the Alternatives

-   **vs `HashMap`**: O(log n) instead of O(1) average — the cost of keeping keys sorted. Only pay it when you need sorted iteration or range operations (`headMap`, `tailMap`, `ceilingKey`, `floorKey`); otherwise `HashMap` is faster.
-   **vs `LinkedHashMap`**: different ordering guarantees entirely — `TreeMap` sorts by key value, `LinkedHashMap` preserves insertion or access order. Neither substitutes for the other.
-   **vs `ConcurrentSkipListMap`**: `TreeMap` isn't thread-safe. If you need a sorted map under concurrent access, `ConcurrentSkipListMap` is the direct equivalent — a skip list instead of a red-black tree, but the same `NavigableMap` contract and similar O(log n) guarantees.

### References

-   [NavigableMap documentation](https://docs.oracle.com/javase/8/docs/api/java/util/NavigableMap.html)
-   [SortedMap documentation](https://docs.oracle.com/javase/8/docs/api/java/util/SortedMap.html)
