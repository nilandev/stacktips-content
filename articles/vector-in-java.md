---
id: 447
title: Vector in Java
slug: vector-in-java
excerpt: "Vector is a legacy implementation of a list added to Java since version 1.0. It was later moved to the Java Collections Framework and retrofitted to implement the `List` interface."
difficulty: beginner
publishedDate: "2024-07-07T19:37:29.000Z"
updatedDate: "2025-09-16T23:05:41.608Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - vector-class-java
  - java-vector-vs-arraylist
  - synchronized-collection-java
  - java-legacy-collections
course: beginners-guide-to-java-collections
displayOrder: 4
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Vector is a legacy implementation of a list added to Java since version 1.0. It was later moved to the Java Collections Framework and retrofitted to implement the `List` interface.

`Vector` is synchronized — every method on the class is synchronized, so only one thread can access it at a time.

`Vector` implements the `List` interface, and it also exposes `iterator()`, `listIterator()`, and `elements()` methods, which return an `Iterator`, `ListIterator`, and `Enumeration` respectively for traversing its elements.

### Growth strategy: doubling, not 1.5x

`Vector` is array-backed, same as `ArrayList`, but it resizes differently. Unless you give it a `capacityIncrement` (the third constructor's second argument), a full `Vector` **doubles** its capacity on the next `add()`. `ArrayList`, by contrast, grows by roughly 1.5x. Neither is "correct" — doubling wastes more memory on average but resizes less often; 1.5x wastes less but resizes more.

If you do supply a `capacityIncrement`, growth becomes linear instead of geometric — `vector3` above grows by a fixed 5 slots every time it fills up, not by a multiple of its current size. That's rarely what you want for an unbounded-growth collection; it's a relic from when Java expected you to hand-tune this.

### Enumeration isn't fail-fast

`iterator()` and `listIterator()` are fail-fast, same as every other `List` in this course. `elements()` is not — the `Enumeration` it returns has no `modCount` check at all, because `Enumeration` predates the fail-fast mechanism entirely (it's a Java 1.0 type, older than the Collections Framework itself). Mutating the `Vector` while enumerating won't throw `ConcurrentModificationException` — you'll just get undefined behaviour, possibly a stale view or an `ArrayIndexOutOfBoundsException`. Prefer `iterator()` unless you have legacy code that specifically needs `Enumeration`.

### Creating and initializing Vector

```java
//Using default constructor
Vector<String> vector1 = new Vector<>();
vector1.add("One");
vector1.add("Two");
vector1.add("Three");

// Initial capacity of 20
Vector<String> vector2 = new Vector<>(20);
vector2.add("One");
vector2.add("Two");
vector2.add("Three");

// Initial capacity of 20, capacity increment of 5
Vector<String> vector3 = new Vector<>(20, 5);
vector3.add("One");
vector3.add("Two");
vector3.add("Three");

//Creating vector from another collection
ArrayList<String> list = new ArrayList<>();
list.add("One");
list.add("Two");
list.add("Three");
Vector<String> vector4 = new Vector<>(list);
```

### Iterate Items in Vector

Vectors can be iterated using for loop, enhanced for loop, Java 8 `forEach`, `Iterator`, `ListIterator` or using `Enumeration`.

```java
//for loop
for (int i = 0; i < vector1.size(); i++) {
    System.out.println(vector1.get(i));
}

// Enhanced for Loop
for (String element: vector1) {
     System.out.println(element);
}

//using iterator
Iterator<String> iterator = vector1.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// using a ListIterator
ListIterator<String> listIterator = vector1.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}

// Using Enumeration
Enumeration<String> enumeration = vector1.elements();
while (enumeration.hasMoreElements()) {
    System.out.println(enumeration.nextElement());
}

//Using Java 8 forEach
vector1.forEach(element -> {
    System.out.println(element);
});
```

## Vector vs the Alternatives

There's no scenario in modern Java where `Vector` is the best choice — it's kept around for backward compatibility with pre-Collections-Framework code.

-   **vs `ArrayList` + `Collections.synchronizedList()`**: gives you the same synchronization guarantee, but only where you actually need it, instead of paying the lock cost on every single method call — including in single-threaded code that happens to use a `Vector` out of habit.
-   **vs `CopyOnWriteArrayList`**: if the real goal is safe concurrent reads with occasional writes, `CopyOnWriteArrayList` gets you there without any locking on the read path at all.
-   **vs `ArrayDeque`**: if you're using `Vector` for its `Stack`-like methods (`addElement`/`firstElement`), see the [Stack article](/articles/stack-in-java) — `ArrayDeque` is the modern replacement for that too.
