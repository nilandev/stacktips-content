---
id: 450
title: LinkedHashSet in Java
slug: linkedhashset-in-java
excerpt: A LinkedHashSet combines the behaviour of a hash table and a linked list. Elements are unique, while insertion order is preserved.
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

A `LinkedHashSet` combines the behaviour of a hash table and a linked list. It extends `HashSet` and implements the `Set` interface, so elements stay unique while also preserving insertion order.

### Key Properties of LinkedHashSet

`HashSet` doesn't guarantee insertion order, but `LinkedHashSet` maintains the order in which elements were added.

Reach for `LinkedHashSet` whenever you need unique elements but also need to iterate them in the order they were added.

### How it actually works

`LinkedHashSet` extends `HashSet`, and `HashSet` is itself a wrapper around `HashMap` — so `LinkedHashSet` is really backed by a `LinkedHashMap` under the hood, not a plain `HashMap`. Every entry gets two extra reference fields (`before` and `after`) threading it into a doubly-linked list alongside its normal position in the hash table. Lookups (`contains`, `add`, `remove`) still go through the hash table, so they stay O(1) average — the linked list exists purely to give iteration a stable, predictable order, and it costs a small, constant amount of extra memory per element compared to `HashSet`.

Since it inherits from `HashSet`, it inherits the same [mutable-element trap](/articles/hashset-in-java) — mutating a field involved in `hashCode()`/`equals()` after insertion breaks lookups the same way. Its iterator is also fail-fast, same as `HashSet`.

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

Notice that `home.html` is added only once to the `LinkedHashSet`, even though we called `add()` on it twice.

**Output:**

```text
Pages visited by the user in order:
home.html
about.html
contact.html
services.html
-----
home.html
about.html
contact.html
services.html
```

## LinkedHashSet vs the Alternatives

-   **vs `HashSet`**: identical performance characteristics, plus predictable iteration order, at the cost of two extra references per entry. Use `LinkedHashSet` when the order you display or process elements in actually matters to correctness (or to a human reading the output) — otherwise `HashSet` is marginally cheaper.
-   **vs `TreeSet`**: `LinkedHashSet` preserves *insertion* order in O(1) average time; `TreeSet` maintains *sorted* order in O(log n). They solve different problems — pick based on whether "order added" or "order by value" is what you actually need.
