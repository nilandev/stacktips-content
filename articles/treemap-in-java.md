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
course: getting-started-with-php
displayOrder: 15
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `TreeMap` class in Java implements the `NavigableMap` interface and the `NavigableMap` interface extends the `SortedMap`. This means, the TreeMap stores the entries in a sorted order.

### Key Properties of TreeMap

We can also provide a comparator while initializing the TreeMap. If a comparator is not provided then it stores the elements in their natural ordering.

The NavigableMap interface provides several navigation methods such as `lowerEntry()`, `floorEntry()`, `ceilingEntry()`, and `higherEntry()`. It can be traversed in either ascending or descending key order.

Unlike HashMap, the TreeMap does not allow `null` keys.

```java

public class _1a_TreeMap {
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

public class _1b_TreeMapCustomComparator {
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

### References

\[\[https://docs.oracle.com/javase/8/docs/api/java/util/NavigableMap.html\]\] \[\[https://docs.oracle.com/javase/8/docs/api/java/util/SortedMap.html\]\]
