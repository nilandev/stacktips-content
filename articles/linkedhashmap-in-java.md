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

### How it actually works

`LinkedHashMap` extends `HashMap` and reuses its entire bucket/hash-table mechanism for lookups — same [treeification and resizing behaviour covered in the HashMap article](/articles/hashmap-in-java), and the same [mutable-key trap](/articles/hashmap-in-java) if you mutate a hashCode-relevant field after insertion. What it adds is a doubly-linked list threading through every entry (`LinkedHashMap.Entry` extends `HashMap.Node` with two extra `before`/`after` references), maintained alongside the hash table purely to give iteration a predictable order. `get`/`put`/`remove` stay O(1) average, same as `HashMap`; the linked list only costs you memory and a small constant amount of pointer maintenance per operation, not asymptotic complexity. Its iterator is fail-fast, same as `HashMap`'s.

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

**Output:**

```text
B: 2
A: 1
C: 3
null: 4
```

By default, `LinkedHashMap` maintains insertion order, but you can switch it to access order by passing `true` for the `accessOrder` constructor parameter.

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

**Output:**

```text
C: 3
null: 4
A: 1
B: 2
```

Notice that `A` and `B` moved to the end after being read — in access-order mode, every `get()` (and `put()`) relinks that entry to the tail of the internal list, so the list naturally orders itself from least-recently-used to most-recently-used.

### Building an LRU cache

This is the real reason `accessOrder` exists. Override `removeEldestEntry()` — a protected hook `HashMap` doesn't have but `LinkedHashMap` adds specifically for this — to tell the map when to evict the oldest entry, and you get a working bounded LRU cache in a handful of lines, without hand-rolling the linked-list bookkeeping yourself:

```java
class LruCache<K, V> extends LinkedHashMap<K, V> {
    private final int maxSize;

    LruCache(int maxSize) {
        super(16, 0.75f, true); // accessOrder = true
        this.maxSize = maxSize;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > maxSize;
    }
}

LruCache<String, String> cache = new LruCache<>(3);
cache.put("A", "1");
cache.put("B", "2");
cache.put("C", "3");
cache.get("A");        // "A" is now most-recently-used
cache.put("D", "4");    // evicts "B" — the least-recently-used entry

System.out.println(cache.keySet()); // [C, A, D]
```

`removeEldestEntry()` is called automatically after every `put()`, with the current least-recently-used entry passed in — returning `true` removes it. This is the standard, JDK-provided way to build an LRU cache; you don't need a separate data structure.

## LinkedHashMap vs the Alternatives

-   **vs `HashMap`**: same average-case performance, plus predictable order, for a small constant memory overhead per entry. Default to `HashMap` unless you specifically need insertion order, access order, or the `removeEldestEntry` LRU hook.
-   **vs `TreeMap`**: `LinkedHashMap` gives you insertion/access order in O(1) average time; `TreeMap` gives you sorted-by-key order in O(log n). They're not interchangeable — pick based on which ordering you actually need.
-   **vs hand-rolling an LRU cache with a `HashMap` + a separate queue/list**: don't — `LinkedHashMap` with `accessOrder=true` and `removeEldestEntry` already does exactly this, correctly, with less code and less room for bugs.
