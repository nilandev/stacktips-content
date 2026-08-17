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
course: beginners-guide-to-java-collections
displayOrder: 3
seo: 
  metaTitle: "CopyOnWriteArrayList in Java: Thread-Safe List Example"
  metaDescription: "Learn how CopyOnWriteArrayList provides thread-safe iteration in Java without ConcurrentModificationException, plus when it's slower than ArrayList."
  metaKeywords: null
---

The `CopyOnWriteArrayList` is the thread-safe implementation of the `List` interface. CopyOnWriteArrayList is very useful when we want to iterate over a list in a thread-safe way without explicit synchronization.

### Key Properties of CopyOnWriteArrayList

The trade-off is speed. It's noticeably slower than `ArrayList` when you're making frequent modifications, since every write copies the entire backing array.

### How it actually works

The name is literal: on every mutating call (`add`, `set`, `remove`), `CopyOnWriteArrayList` takes the current backing array, copies it into a new array of the required size via `Arrays.copyOf`, applies the change, and swaps in the new array under a lock. The array reference itself is `volatile`, so readers always see a consistent, fully-formed array — never a partially updated one — without needing any locking of their own.

That's also why its iterator is **fail-safe** rather than fail-fast: `iterator()` just captures whatever array reference was current at that moment and walks it directly. If another thread mutates the list afterward, that thread gets its own new array — your iterator keeps reading the old one. No `ConcurrentModificationException`, but also no visibility into changes made after you started iterating.

Here's an example that shows why you'd reach for it in the first place:

```java
public class ConcurrentModificationDemo {

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

Notice that in the above program, we're modifying the list while iterating over it, so the application throws a `ConcurrentModificationException`.

```text
Exception in thread "main" java.util.ConcurrentModificationException
    at java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)
    at java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)
    at ConcurrentModificationDemo.main(ConcurrentModificationDemo.java:11)
```

To avoid this exception, we can either call the `remove()` method on an iterator or use `CopyOnWriteArrayList`.

The `CopyOnWriteArrayList` class makes a fresh copy of the underlying array while performing mutative operations (such as `add`, `set`, and `remove`).

```java
public class CopyOnWriteArrayListDemo {

    public static void main(String[] args) {
        List<String> list = new CopyOnWriteArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Guava");
        list.add("Grapes");

        for (String value : list) {
            System.out.println("Visiting: " + value);
            if (value.equals("Banana")) {
                list.remove("Grapes");
            }
        }
        System.out.println("Final list: " + list);
    }
}
```

**Output:**

```text
Visiting: Apple
Visiting: Banana
Visiting: Guava
Visiting: Grapes
Final list: [Apple, Banana, Guava]
```

Notice that the loop still visits `Grapes` even though it was removed mid-iteration — the iterator is walking the snapshot array captured when the loop started. The live list, printed afterward, correctly reflects the removal.

## CopyOnWriteArrayList vs the Alternatives

-   **vs `Collections.synchronizedList(new ArrayList<>())`**: `synchronizedList` locks on every call, including reads, and its iterator is still fail-fast — you have to wrap iteration in a manual `synchronized` block yourself to avoid `ConcurrentModificationException`. `CopyOnWriteArrayList` never locks readers and never throws during iteration, at the cost of copying the array on every write.
-   **vs plain `ArrayList`**: only reach for `CopyOnWriteArrayList` when the list is actually shared across threads. In single-threaded code it's strictly worse — same memory profile as `ArrayList` plus the overhead of copying on every mutation.
-   **Typical use case**: listener/observer lists, where registrations are rare but iteration (firing an event to every listener) happens constantly — exactly the read-heavy, write-rare pattern this class is built for.
