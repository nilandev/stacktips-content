---
id: 450
title: LinkedHashSet in Java
slug: linkedhashset-in-java
excerpt: A LinkedHashSet combines the behaviour of both a HashTable and a LinkedList. The elements are unique, while also maintaining the insertion order.
difficulty: beginner
publishedDate: "2024-07-24T05:20:23.000Z"
updatedDate: "2025-09-16T23:05:41.703Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - linkedhashset-java
  - linkedhashset-vs-hashset
  - java-set-insertion-order
  - unique-elements-java-collections
course: beginners-guide-to-java-collections
displayOrder: 7
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A `LinkedHashSet` combines the behaviour of both a `HashTable` and a `LinkedList`. It extends the `HashSet` class and implements the `Set` interface, ensuring that the elements are unique, while also maintaining the insertion order.

### Key Properties of LinkedHashSet

HashSet does not guarantee the insertion order but LinkedHashSet maintains the order they are inserted.

For instance, when you need to store unique elements but also need to iterate them in the order they were added, then LinkedHashSet is preferred.

**Example:** Suppose you are developing a system for tracking user activities on a website. You want to keep track of the unique pages visited by a user in the order they were visited. This can be efficiently managed using a `LinkedHashSet`.

```java

public class UserActivityTracker {
    public static void main(String[] args) {
        LinkedHashSet<String> pagesVisited = new LinkedHashSet<>();

        pagesVisited.add("home.html");
        pagesVisited.add("about.html");
        pagesVisited.add("contact.html");
        pagesVisited.add("home.html");
        pagesVisited.add("services.html");

        // Display the pages visited in the order of insertion
        System.out.println("Pages visited by the user in order:");
        for (String page : pagesVisited) {
            System.out.println(page);
        }

        System.out.println("-----");
        pagesVisited.spliterator().forEachRemaining(System.out::println);
    }
}
```

Notice that the `home.html` is added only once to the `LinkedHashSet`.

**Output:**

```text

Pages visited:
home.html
about.html
contact.html
services.html
```
