---
id: 457
title: IdentityHashMap in Java
slug: identityhashmap-in-java
excerpt: The IdentityHashMap implements the Map interface. It compares the reference addresses of the keys instead of their content.
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

The `IdentityHashMap` implements the `Map` interface. Where `HashMap` compares keys by their content (using `equals()`), `IdentityHashMap` compares keys by reference — it only treats two keys as equal if they're the exact same object.

### Key Properties of IdentityHashMap

It uses reference equality (`==`) instead of the `equals()` method, which makes it faster than `HashMap` for lookups, since it skips calling `equals()` and `hashCode()` altogether.

It also supports `null` keys and values.

### How it actually works — and why it's not just "HashMap with =="

`IdentityHashMap` isn't a `HashMap` variant internally — it uses a genuinely different data structure. Where `HashMap` buckets colliding entries into linked lists (or trees), `IdentityHashMap` stores keys and values as alternating slots in one flat `Object[] table` (`table[2i]` is a key, `table[2i+1]` is its value) and resolves collisions with **open addressing**: if a key's slot is taken, it linearly probes forward to the next free pair of slots instead of chaining. The bucket index comes from `System.identityHashCode()` (or the JVM's internal object hash) rather than the key's own `hashCode()` — which is exactly why mutating a key's fields never breaks a lookup here, unlike `HashMap`.

The `Map` Javadoc says explicitly that `IdentityHashMap` is meant to violate the general `Map` contract on purpose. Its real use cases are narrow: cycle detection during deep-copy or serialization of an object graph (this is literally how `ObjectOutputStream` tracks already-serialized objects), or any case where two objects that are `equals()` to each other genuinely need to be treated as different keys. It is not a faster general-purpose `HashMap` — don't reach for it as a performance optimization unless reference identity is the actual semantic you need.

```java
// key1 and key2 are string literals, so the JVM interns them to the same object
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

In the second map, `key3` and `key4` have the same content but are different objects, since `new String(...)` always allocates a fresh object instead of reusing the interned one. `IdentityHashMap` treats them as two distinct keys, so `map2` ends up with two entries instead of one.

Its iterator is fail-fast, same as `HashMap`'s.

## IdentityHashMap vs the Alternatives

-   **vs `HashMap`**: use `HashMap` for essentially everything — key equality by content is what you want in the overwhelming majority of cases. Reach for `IdentityHashMap` only when reference identity genuinely is the semantic (cycle detection, object-graph tracking), not as a "faster HashMap."
-   **vs a `HashMap` with a custom `IdentityWrapper` key**: some codebases hand-roll a wrapper class that overrides `equals()`/`hashCode()` to use `==`/`System.identityHashCode()`, just to get identity semantics out of a regular `HashMap`. `IdentityHashMap` gives you the same guarantee without the wrapper allocation on every key.
