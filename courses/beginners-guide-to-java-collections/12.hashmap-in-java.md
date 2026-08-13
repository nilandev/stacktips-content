---
id: 455
title: HashMap in Java
slug: hashmap-in-java
excerpt: A HashMap uses key-value pairs to insert and access items.
difficulty: beginner
publishedDate: "2024-07-24T05:29:36.000Z"
updatedDate: "2025-09-16T23:05:41.872Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-hashmap
  - hashmap-iteration
  - java-collections-framework
  - key-value-store
course: beginners-guide-to-java-collections
displayOrder: 12
seo: 
  metaTitle: "HashMap in Java: Guide to Creating, Iterating & Using It"
  metaDescription: "Learn how HashMap works in Java, including how to create, initialize, and iterate over key-value pairs using iterators, streams, and forEach."
  metaKeywords: null
---

A `HashMap` works fundamentally differently than the other collections. A `HashMap` uses key-value pairs to insert and access items.

### Key Properties of HashMap

All keys must be unique, and like a `HashSet`, a `HashMap` doesn't maintain order. `HashMap` is a great choice when you already know the key of the item you want to access.

A `HashMap` can hold multiple null values, and one of its keys can also be null.

### How it actually works

`HashMap` stores entries in a `Node<K,V>[] table`, where each slot ("bucket") holds either nothing, one entry, a linked list of entries that collided into the same bucket, or — since Java 8, once a bucket collects 8+ entries **and** the table itself has grown to at least 64 buckets — a red-black tree. That treeification caps the worst case at O(log n) instead of degrading to O(n) the way pre-Java-8 `HashMap` did under hash-collision-heavy workloads; a bucket un-treeifies back to a linked list if it later drops to 6 or fewer entries.

Which bucket a key lands in is `(table.length - 1) & hash`, where `hash` isn't just `key.hashCode()` — it's `hashCode() ^ (hashCode() >>> 16)`. That XOR-with-its-own-upper-bits step spreads high-order bits into the low-order bits before masking, so keys whose hash codes only differ in their upper bits (a real problem your own `hashCode()` implementations can produce) still land in different buckets.

Default initial capacity is 16, default load factor is 0.75. Once `size` exceeds `capacity × loadFactor`, the table doubles and every entry gets rehashed into the new bucket array. If you know roughly how many entries you'll store, passing an initial capacity up front avoids paying for that rehashing repeatedly.

### The mutable key trap

This is the classic Java gotcha, and it applies to `HashMap` even more often than `HashSet` in practice, because map keys are frequently domain objects:

```java
class UserId {
    String value;
    UserId(String value) { this.value = value; }

    @Override
    public boolean equals(Object o) {
        return o instanceof UserId u && value.equals(u.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }
}

Map<UserId, String> sessions = new HashMap<>();
UserId id = new UserId("abc");
sessions.put(id, "active");

id.value = "xyz"; // mutated after being used as a key

System.out.println(sessions.get(id));             // null — looks in the (now) "xyz" bucket
System.out.println(sessions.get(new UserId("abc"))); // also null — that bucket no longer holds this entry
System.out.println(sessions);                      // still shows {UserId@...=active} — the entry is right there, just unreachable by key
```

`sessions.get(id)` recomputes the hash from `id`'s *current* state, so it looks in a different bucket than the one the entry actually lives in. The entry isn't lost — `entrySet()`/`toString()` will still show it — it's just unreachable through `get()`/`containsKey()`/`remove()`. Treat any object used as a `HashMap` key (or `HashSet` element) as effectively immutable for as long as it's in the map.

Also worth internalizing: `HashMap`'s iterator (over `keySet()`, `values()`, or `entrySet()`) is fail-fast — mutating the map structurally while iterating throws `ConcurrentModificationException`, same as every other non-concurrent collection in this course. Use `Iterator.remove()` or `entrySet().removeIf(...)` instead of removing through the map directly inside a loop.

### Creating a HashMap

```java
// Using the default constructor
HashMap<String, Integer> hashMap = new HashMap<>();
hashMap.put("A", 1);
hashMap.put("B", 2);
hashMap.put("C", 3);

// Using a constructor with an initial capacity
HashMap<String, Integer> hashMapWithCapacity = new HashMap<>(50);

// Using a constructor with an initial capacity and load factor
HashMap<String, Integer> hashMapWithLoadFactor = new HashMap<>(50, 0.75f);

// Using a constructor to copy another map
Map<String, Integer> map1 = new HashMap<>();
map1.put("A", 1);
map1.put("B", 2);
HashMap<String, Integer> map2 = new HashMap<>(map1);

// Using Java 8 streams to initialize from parallel lists
List<String> keys = Arrays.asList("A", "B", "C");
List<Integer> values = Arrays.asList(1, 2, 3);
HashMap<String, Integer> hashMapFromStream = IntStream.range(0, keys.size())
        .boxed()
        .collect(Collectors.toMap(keys::get, values::get, (e1, e2) -> e2, HashMap::new));

// Using the Map.of factory method
Map<String, Integer> immutableMap = Map.of("A", 1, "B", 2, "C", 3);
HashMap<String, Integer> hashMapFromImmutable = new HashMap<>(immutableMap);
```

The order of items stored in a map isn't guaranteed. We access an item inside the map using its key.

```java
hashMap.get("A");
```

### Iterate over a HashMap

```java
// Using an Iterator
Iterator<String> keyIterator = hashMap.keySet().iterator();
while (keyIterator.hasNext()) {
    String key = keyIterator.next();
    System.out.println("Key: " + key);
}

// Iterating over Values
Iterator<Integer> valueIterator = hashMap.values().iterator();
while (valueIterator.hasNext()) {
    Integer value = valueIterator.next();
    System.out.println("Value: " + value);
}

// Iterating over Entries
Iterator<Map.Entry<String, Integer>> entryIterator = hashMap.entrySet().iterator();
while (entryIterator.hasNext()) {
    Map.Entry<String, Integer> entry = entryIterator.next();
    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
}

//Using Java 8 forEach and Lambda Expression
hashMap.forEach((key, value) -> {
    System.out.println("Key: " + key + ", Value: " + value);
});

//Using Streams
hashMap.entrySet().stream().forEach(entry -> {
    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
});

//Using the forEach Method
hashMap.entrySet().forEach(entry -> {
    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
});
```

## HashMap vs the Alternatives

-   **vs `LinkedHashMap`**: identical O(1) average performance, plus predictable iteration order, for a small constant memory overhead per entry. Default to `HashMap` unless order specifically matters.
-   **vs `TreeMap`**: O(1) average vs O(log n), but `TreeMap` keeps keys sorted and supports range queries (`headMap`, `tailMap`, `ceilingKey`). Pick based on whether you need sorted keys at all.
-   **vs `Hashtable`**: `Hashtable` is a legacy synchronized map with coarse-grained per-method locking and no null keys/values — there's no reason to choose it over `HashMap` in single-threaded code, or over `ConcurrentHashMap` in multi-threaded code.
-   **vs `ConcurrentHashMap`**: `HashMap` isn't thread-safe — concurrent structural modification can corrupt its internal bucket/tree structure, not just throw an exception. If multiple threads write to the same map, use `ConcurrentHashMap`, which uses lock striping (locking individual buckets, not the whole map) instead of the single coarse lock `Collections.synchronizedMap()` or `Hashtable` would give you.
