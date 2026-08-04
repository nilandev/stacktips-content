---
id: 451
title: TreeSet in Java
slug: treeset-in-java
excerpt: A TreeSet in Java is a collection that implements the NavigableSet interface and uses a TreeMap internally to store elements.
difficulty: beginner
publishedDate: "2024-07-24T05:21:59.000Z"
updatedDate: "2025-09-16T23:05:41.738Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - treeset-java
  - navigableset
  - sorted-collection-java
  - java-collections-framework
course: beginners-guide-to-java-collections
displayOrder: 8
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A `TreeSet` in Java is a collection that implements the `NavigableSet` interface and uses a `TreeMap` internally to store elements.

### Key Properties of TreeSet

TreeSet provides an ordered set implementation that sorts elements based on their natural ordering or according to a specified comparator.

When you need to maintain a collection of unique elements in a sorted order, you can go for `TreeSet`.

### How it actually works

A `TreeSet<E>` is a thin wrapper around a `TreeMap<E, Object>` — the same relationship `HashSet` has with `HashMap`. Elements become keys in the backing map, paired with a shared dummy value, and `TreeMap` is a self-balancing red-black tree. That gives `add`, `remove`, and `contains` O(log n) worst-case time — slower than `HashSet`'s O(1) average, but you get sorted iteration and range operations (`headSet`, `tailSet`, `subSet`, `ceiling`, `floor`) for free.

### Uniqueness is decided by compareTo, not equals

This trips people up: `TreeSet` never calls `equals()` or `hashCode()`. It decides whether two elements are "the same" purely by whether `compareTo()` (or your `Comparator`) returns `0`. If your `compareTo` only looks at one field, two objects that differ in every other field but tie on that one will be treated as duplicates — the second `add()` silently does nothing, even though `equals()` on those same two objects would return `false`. This is exactly the trap `BigDecimal` is famous for: `new BigDecimal("1.0").compareTo(new BigDecimal("1.00"))` is `0`, but `.equals()` on the same pair is `false`. If you're using a `TreeSet`, `compareTo` *is* your equality definition — make sure that's actually what you want.

The same applies to mutation after insertion: if you change a field your comparator depends on while the object is already in the set, you corrupt the tree's internal ordering invariant. Unlike `HashSet` (which just can't find the element anymore), a `TreeSet` with a broken invariant can behave unpredictably across all sorted operations, not just lookups of that one element.

`TreeSet`'s iterator is fail-fast, same as the other collections in this course, and it always traverses in sorted order.

**Example:** Suppose you're building an application for managing a library. You need to keep track of book titles in sorted order, so you can search and display them alphabetically.

```java
public class LibraryManager {
    public static void main(String[] args) {
        TreeSet<String> bookTitles = new TreeSet<>();
        bookTitles.add("To Kill a Mockingbird");
        bookTitles.add("1984");
        bookTitles.add("Pride and Prejudice");
        bookTitles.add("Queen of England");
        bookTitles.add("The Catcher in the Rye");
        bookTitles.add("1984"); // Duplicate title, will not be added again

        // Display the book titles in sorted order
        System.out.println("Book titles (sorted):");
        for (String title : bookTitles) {
            System.out.println(title);
        }

        // Finding the first and last book titles
        System.out.println("\nFirst book in the library: " + bookTitles.first());
        System.out.println("Last book in the library: " + bookTitles.last());

        // Displaying a subset of books
        System.out.println("\nBooks between 'P' and 'T':");
        for (String title : bookTitles.subSet("P", "T")) {
            System.out.println(title);
        }
    }
}
```

**Output:**

```text
Book titles (sorted):
1984
Pride and Prejudice
Queen of England
The Catcher in the Rye
To Kill a Mockingbird

First book in the library: 1984
Last book in the library: To Kill a Mockingbird

Books between 'P' and 'T':
Pride and Prejudice
Queen of England
```

## TreeSet vs the Alternatives

-   **vs `HashSet`**: O(log n) instead of O(1) average for the basic operations — that's the price of keeping elements sorted. Only pay it when you actually need sorted iteration or range queries; otherwise `HashSet` is faster.
-   **vs `LinkedHashSet`**: `TreeSet` sorts by value; `LinkedHashSet` preserves insertion order. Neither is a substitute for the other — they answer different questions about "what order."
-   **vs `PriorityQueue`**: both keep elements ordered, but `PriorityQueue` only gives you efficient access to the single smallest/largest element (`peek`/`poll`). `TreeSet` gives you the full sorted structure — arbitrary range queries, removal of arbitrary elements in O(log n), and full sorted iteration — at a similar per-operation cost.
