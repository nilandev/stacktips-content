---
id: 442
title: ArrayList in Java
slug: arraylist-in-java
excerpt: ArrayList is similar to a regular array except that the size is dynamically adjusted as the number of items in the collection changes.
difficulty: beginner
publishedDate: "2024-07-07T19:30:12.000Z"
updatedDate: "2025-09-16T23:05:41.526Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-arraylist
  - synchronized-arraylist
  - java-immutable-list
  - arraylist-vs-array
course: beginners-guide-to-java-collections
displayOrder: 1
seo: 
  metaTitle: "ArrayList in Java: Complete Guide with Examples"
  metaDescription: "Learn how to create, iterate, and modify a Java ArrayList, understand its time complexity, and see why it isn't thread-safe with practical code examples."
  metaKeywords: null
---

An `ArrayList` is similar to a regular array except that the size is dynamically adjusted as the number of items in the collection changes. Arrays have a fixed size that cannot change. But with `ArrayList`, you don't need to worry about the size.

## Key Properties of ArrayList

The initial capacity of `ArrayList` is **10** — since Java 8, the backing array isn't actually allocated until the first element is added, so an empty `ArrayList` costs almost nothing.

ArrayList is best suited when we have read-heavy operations. However, if you're required to insert or delete elements in the middle of the collection, `ArrayList` is not preferred.

ArrayList is not synchronized (not thread-safe).

| Operation | Time Complexity |
| --- | --- |
| Access item | O(1) time complexity |
| Adding items | O(1) on average, but can be O(n) when resizing is needed |
| Removing items | O(n) because it may require shifting elements. |

### How resizing actually works

`ArrayList` is backed by a plain `Object[]`. When `add()` finds the array full, it doesn't double it — it grows to `oldCapacity + (oldCapacity >> 1)`, roughly **1.5x**. That's a deliberate trade-off against wasted memory; `Vector` doubles by default instead, which we'll cover in the [Vector](/articles/vector-in-java) article.

Every resize allocates a new array and copies every existing element into it with `Arrays.copyOf`. If you already know roughly how many elements you'll store, pass that as the initial capacity during intiailization (`new ArrayList<>(1000)`) to skip the repeated copying entirely.

### Mutation while iterating

`ArrayList`'s iterator is fail-fast: it checks an internal `modCount` on every `next()` call and throws `ConcurrentModificationException` if the list was structurally changed by anything other than the iterator itself. This means:

```java
for (String fruit : list1) {
    if (fruit.equals("Banana")) {
        list1.remove(fruit); // throws ConcurrentModificationException
    }
}
```

Use `Iterator.remove()` or `list1.removeIf(...)` instead — both update `modCount` in a way the iterator expects, so no exception is thrown.

## Creating and initializing ArrayList

Let's look at how to use an `ArrayList`.

```java
//Using the Default Constructor
List<String> list1 = new ArrayList<>();
list1.add("Apple");
list1.add("Banana");

// Using Constructor with Initial Capacity
List<String> list2 = new ArrayList<>(20);
list2.add("Apple");
list2.add("Banana");

//Initializing array list using the anonymous inner class method
List<String> list3 = new ArrayList<String>() {{
    add("Apple");
    add("Banana");
    add("Orange");
}};

// fixed-size list from the elements of another collection
List<String> list4 = Arrays.asList("Apple", "Banana", "Orange");
List<String> list5 = new ArrayList<>(list4);

// Using Arrays.asList method
List<String> list6 = new ArrayList<>(Arrays.asList("Apple", "Banana", "Orange"));

// Using Collections.addAll method
List<String> list7 = new ArrayList<>();
Collections.addAll(list7, "Apple", "Banana", "Orange");

// Using Java 8 streams and collectors
List<String> list8 = Stream.of("Apple", "Banana", "Orange")
        .collect(Collectors.toCollection(ArrayList::new));
```

Items inside an `ArrayList` can be accessed using their index.

```java
list1.get(1);
```

Items inside an `ArrayList` can be changed using the `set()` method, which takes the index and the new value. This replaces the element at the specified position.

```java
list1.set(1, "Guava");
```

To find out how many elements an `ArrayList` holds, use the `size()` method.

```java
list1.size();
```

To check whether an item exists in an `ArrayList`, use the `contains()` method. It returns `true` or `false`.

```java
list1.contains("Banana");
```

## Iterate ArrayList Items

There are multiple ways we can iterate an ArrayList.

```java
// Iterate using enhanced for loop
for (String item:list1) {
    System.out.println(item);
}

// Iterate using a traditional for loop
for (int i = 0; i < list1.size(); i++) {
    System.out.println(list1.get(i));
}

// Using an Iterator
Iterator<String> iterator = list1.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Using ListIterator
ListIterator<String> listIterator = list1.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}

// Using a Java8 Stream and lambda expression
list1.stream().forEach(item -> System.out.println(item));

// Using a Java8 forEach method
list1.forEach(item -> System.out.println(item));
```

_Note_

The Iterator interface provides methods to iterate a collection. The iterator generally traverse elements one by one in a forward direction. However, the `ListIterator` is specific to lists. It offers bidirectional traversal and modification.

## Removing Item in ArrayList

We can remove an item from an `ArrayList` using the `remove()` method, either by index or by value.

```java
// Removes the element at index 1
list1.remove(1);

// Removes the first occurrence of "Banana"
list1.remove("Banana");

// Removes all items found in another collection
List<String> toRemove = Arrays.asList("Banana", "Orange");
list1.removeAll(toRemove);

// Removes elements matching a condition
list1.removeIf(fruit -> fruit.startsWith("B"));

// Removes all elements from the list
list1.clear();
```

## Creating Immutable List in Java

To create an immutable list using the `List.of()` factory method.

```java
public class ImmutableList {
    public static void main(String[] args) {
        List<String> immutableList = List.of("A", "B", "C");
        System.out.println(immutableList);

        immutableList.add("D"); // throws UnsupportedOperationException
        System.out.println(immutableList);
    }
}
```

We can also create an unmodifiable view of the list using the `Collections.unmodifiableList()` method. If you modify the returned list, whether directly or via its iterator will result in an `UnsupportedOperationException`.

```java
public class UnmodifiableListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");

        List<String> unmodifiableList = Collections.unmodifiableList(list);
        System.out.println(unmodifiableList);
        unmodifiableList.add("D"); // throws UnsupportedOperationException
        System.out.println(unmodifiableList);
    }
}
```

## ArrayList is not Synchronized

ArrayList is not synchronized. What it means, is when multiple threads attempt to modify the same list simultaneously, it can lead to unpredictable behaviour.

Let us look into the following program:

```java
public class NonSynchronizedArrayList {
    public static void main(String[] args) {
        List<Integer> arrayList = new ArrayList<>();

        // Create a runnable task that adds elements to the list
        Runnable addItemsTask = () -> {
            for (int i = 0; i < 1000; i++) {
                arrayList.add(i);
            }
        };

        // Create multiple threads that will run the addItemsTask
        Thread thread1 = new Thread(addItemsTask);
        thread1.start();
        Thread thread2 = new Thread(addItemsTask);
        thread2.start();
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Size of List: " + arrayList.size());
    }
}
```

In this example, you expect the size of the list to be 2000, but it will be less than 2000. This is because multiple threads are interfering with each other which leads to corrupted data.

To make the `ArrayList` thread-safe, we can use `Collections.synchronizedList()` method. The `synchronizedList()` method returns a synchronized (thread-safe) list backed by the specified list.

To guarantee serial access, all access to the backing list must be accomplished through the returned list. The above program can be written as follows:

```java
public class SynchronizedArrayList {
    public static void main(String[] args) {
        List<Integer> arrayList = Collections.synchronizedList(new ArrayList<>());

        // Create a runnable task that adds elements to the list
        Runnable addItemsTask = () -> {
            for (int i = 0; i < 1000; i++) {
                arrayList.add(i);
            }
        };

        // Create multiple threads that will run the addItemsTask
        Thread thread1 = new Thread(addItemsTask);
        thread1.start();

        Thread thread2 = new Thread(addItemsTask);
        thread2.start();
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Size of List: " + arrayList.size());
    }
}
```

## ArrayList vs the Alternatives

-   **vs `LinkedList`**: `ArrayList` wins for random access (`get(i)` is O(1) vs O(n)) and for cache locality — elements sit contiguously in memory, so iteration is faster in practice even where both are O(n) on paper. `LinkedList` only pulls ahead when you're inserting or removing at a position you already hold via a `ListIterator`, since that's O(1) with no shifting.
-   **vs `ArrayDeque`**: if you only ever add/remove at the ends, `ArrayDeque` is faster and lighter than `ArrayList` for that access pattern — no shifting of interior elements, and it doesn't need to keep the array fully packed.
-   **vs `CopyOnWriteArrayList`**: reach for `ArrayList` in single-threaded code or when you'll synchronize externally yourself. `CopyOnWriteArrayList` only pays off when reads vastly outnumber writes.
