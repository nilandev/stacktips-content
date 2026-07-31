---
id: 456
title: LinkedHashMap in Java
slug: linkedhashmap-in-java
excerpt: The LinkedHashMap works very similar to HashMap but it maintains a doubly-linked list to maintain the insertion order of elements.
difficulty: beginner
publishedDate: "2024-07-24T05:30:48.000Z"
updatedDate: "2025-09-16T23:05:41.904Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - linkedhashmap-java
  - linkedhashmap-vs-hashmap
  - access-order-linkedhashmap
  - java-map-insertion-order
course: beginners-guide-to-java-collections
displayOrder: 13
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `LinkedHashMap` works very similar to `HashMap` but it maintains a doubly-linked list to maintain the insertion order of elements.

### Key Properties of LinkedHashMap

Due to the additional overhead for maintaining order, `LinkedHashMap` is generally slower as compared to `HashMap`.

```java

Map<String, Integer> map = new LinkedHashMap<>();
map.put("B", 2);
map.put("A", 1);
map.put("C", 3);
map.put(null, 4);

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

**Outputs:**

```text

Output:
B: 2
A: 1
C: 3
null: 4
```

Generally, `LinkedHashMap` maintains the insertion order, but we can change that to access order bypassing the `accessOrder` true during the constructor initialisation.

```java

Map<String, Integer> map = new LinkedHashMap<>(16, 0.75f, true);
map.put("B", 2);
map.put("A", 1);
map.put("C", 3);
map.put(null, 4);

map.get("A");
map.get("B");

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

**Outputs**

```text

Output:
C: 3
null: 4
A: 1
B: 2
```
