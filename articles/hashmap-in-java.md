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

All keys must be unique and this, like a `HashSet` does not maintain order. HashMaps are great when you know the key of the item you want to access.

HashMap can contain null values and one of its keys can be null.

### Creating a HashMap

```java
// Using the Default Constructor
HashMap<String, Integer> hashMap = new HashMap<>();
hashMap.put("A", 1);
hashMap.put("B", 2);
hashMap.put("C", 3);

// Using a Constructor with Initial Capacity
HashMap<String, Integer> hashMap = new HashMap<>(50);

// Using a Constructor with Initial Capacity and Load Factor
HashMap<String, Integer> hashMap = new HashMap<>(50, 0.75f);

// Using a Constructor to Copy Another Map
Map<String, Integer> map1 = new HashMap<>();
map1.put("A", 1);
map1.put("B", 2);
HashMap<String, Integer> map2 = new HashMap<>(map1);

// Using Java 8 Streams (For Initializing from a Collection)
List<String> keys = Arrays.asList("A", "B", "C");
List<Integer> values = Arrays.asList(1, 2, 3);
HashMap<String, Integer> hashMap = IntStream.range(0, keys.size())
        .boxed()
        .collect(Collectors.toMap(keys::get, values::get, (e1, e2) -> e2, HashMap::new));

// Using Map.of factory method
Map<String, Integer> immutableMap = Map.of("A", 1, "B", 2, "C", 3);
HashMap<String, Integer> hashMap = new HashMap<>(immutableMap);
```

The order of items stored on a map is not guaranteed. We can access the item inside the map using its key.

```java
hashMap.get("key1")
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
