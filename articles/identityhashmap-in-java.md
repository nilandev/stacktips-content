---
id: 457
title: IdentityHashMap in Java
slug: identityhashmap-in-java
excerpt: The IdentityHashMap implements the Map interface. It compares the references address of the keys.
difficulty: beginner
publishedDate: "2024-07-24T05:31:59.000Z"
updatedDate: "2025-09-16T23:05:41.945Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - identityhashmap-java
  - java-reference-equality-map
  - hashmap-vs-identityhashmap
course: beginners-guide-to-java-collections
displayOrder: 14
seo: 
  metaTitle: "IdentityHashMap in Java: How It Differs From HashMap"
  metaDescription: "Learn how IdentityHashMap in Java uses reference equality instead of equals() to compare keys, with code examples comparing it to a standard HashMap."
  metaKeywords: null
---

The `IdentityHashMap` implements the `Map` interface. `HashMap` compares the equality of keys by comparing its content but `IdentityHashMap` compares the references address of the keys.

### Key Properties of IdentityHashMap

It uses reference equality (`==`) instead of the `equals()` method. It performs relatively faster than HashMap.

It also supports `null` keys and values.

```java
Map<String, String> map1 = new IdentityHashMap<>();
String key1 = "key";
String key2 = "key";
map1.put(key1, "value1");
map1.put(key2, "value2");

for (String key: map1.keySet()) {
    System.out.println(key + " -> " + map1.get(key));
}

/*
Outputs:
key -> value2
*/

Map<String, String> map2 = new IdentityHashMap<>();
String key3 = new String("key");
String key4 = new String("key");
map2.put(key3, "value1");
map2.put(key4, "value2");

for (String key : map2.keySet()) {
    System.out.println(key + " -> " + map2.get(key));
}

/*
Outputs:
key -> value2
key -> value1
*/
```

Notice that in the second map, the `key3` and `key4` have the same content but are different objects. Hence, `IdentityHashMap` treats them as two different keys, as a result, the map contains two entries.
