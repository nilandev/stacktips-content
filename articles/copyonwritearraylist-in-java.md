---
id: 446
title: CopyOnWriteArrayList in Java
slug: copyonwritearraylist-in-java
excerpt: The CopyOnWriteArrayList is the thread-safe implementation of the List interface. It is very useful when we want to iterate over a list in a thread-safe way without explicit synchronization.
difficulty: beginner
publishedDate: "2024-07-07T19:35:52.000Z"
updatedDate: "2025-09-16T23:05:41.579Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - how-tos
  - code-snippet
course: getting-started-with-java
displayOrder: 3
seo: 
  metaTitle: "CopyOnWriteArrayList in Java: Thread-Safe List Example"
  metaDescription: "Learn how CopyOnWriteArrayList provides thread-safe iteration in Java without ConcurrentModificationException, plus when it's slower than ArrayList."
  metaKeywords: null
---

The `CopyOnWriteArrayList` is the thread-safe implementation of the `List` interface. CopyOnWriteArrayList is very useful when we want to iterate over a list in a thread-safe way without explicit synchronization.

### Key Properties of CopyOnWriteArrayList

While it provides thread safety, it is comparatively slower as compared to ArrayList especially when you're making a lot of modifications to the list.

Let us look into the following example:

```java
public class _4a_ConcurrentModificationException {

    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Guava");
        list.add("Grapes");

        for (String value: list) {
            if (value.equals("Banana")) {
                list.remove("Grapes");  // ConcurrentModificationException
            }
        }
        System.out.println(list);
    }
}
```

Notice that in the above program, we are modifying the list while iterating hence the application will throw `ConcurrentModificationException`.

```text
Exception in thread "main" java.util.ConcurrentModificationException
    at java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)
    at java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)
    at list.arraylist._4a_ConcurrentModificationException.main(_4a_ConcurrentModificationException.java:15)
```

To avoid this exception, we can either call the `remove()` method on an iterator or use `CopyOnWriteArrayList`.

The `CopyOnWriteArrayList` class makes a fresh copy of the underlying array while performing mutative operations (such as `add`, `set`, and `remove`).

```java
public class _4b_CopyOnWriteArrayList {

    public static void main(String[] args) {
        List<String> list = new CopyOnWriteArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Guava");
        list.add("Grapes");

        for (String value : list) {
            if (value.equals("Banana")) {
                list.remove("Grapes");
            }
        }
        System.out.println(list);
    }
}
```
