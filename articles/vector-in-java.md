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
course: getting-started-with-php
displayOrder: 4
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Vector is a legacy implementation of a list added to Java since version 1.0. It was later moved to the Java Collections Framework and retrofitted to implement the `List` interface.

Vectors are synchronized. All the methods in the `Vector` class are synchronized, ensuring that only one thread can access a method at a time.

Vector implements `Iterator` and `ListIterator` and `Enumeration` interface.

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
for (int i = 0; i < vector.size(); i++) {
    System.out.println(vector.get(i));
}

// Enhanced for Loop
for (String element: vector) {
     System.out.println(element);
}

//using iterator
Iterator<String> iterator = vector.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// using a ListIterator
ListIterator<String> listIterator = vector.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}

// Using Enumeration
Enumeration<String> enumeration = vector.elements();
while (enumeration.hasMoreElements()) {
    System.out.println(enumeration.nextElement());
}

//Using Java 8 forEach
vector.forEach(element -> {
    System.out.println(element);
});
```
