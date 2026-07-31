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

The initial capacity of `ArrayList` is **10**, this means the internal array can hold 10 elements before it needs to be resized.

ArrayList is best suited when we have read-heavy operations. However, if you're required to insert or delete elements in the middle of the collection, `ArrayList` is not preferred.

ArrayList is not synchronised (not thread-safe).

| Operation | Time Complexity |
| --- | --- |
| Access item | O(1) time complexity |
| Adding items | O(1) on average, but can be O(n) when resizing is needed |
| Removing items | O(n) because it may require shifting elements. |

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

// Using Java8 streams and collectors
List<String> list8 = Stream.of("Apple", "Banana", "Orange")
        .collect(Collectors.toCollection(ArrayList::new));
        .collect(Collectors.toCollection(ArrayList::new));
```

Items inside an `ArrayList` can be accessed using the index.

```java
list.get(1);
```

Items inside `ArrayList` can be changed using the `set()` method, to which we need to pass the index. This method replaces the element at the specified position.

```java
list.set(1, "Guava");
```

If you want to compute the total number of elements inside ArrayList, you can use the `size()` method.

```java
list.size();
```

To check, if an Item exists within `ArrayList` we can use the `contains()` method. This method returns a boolean true/false value.

```java
list.contains("Banana");
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

We can remove an item from ArrayList using the `remove()` method by specifying the index of the item you want to remove.

```java
// Removes the element at index 1
list.remove(1);

// Removes the first occurrence of "Banana"
list.remove("Banana");

// Remove all items based on a collection
List<String> toRemove = Arrays.asList("Banana", "Orange"); list.removeAll(toRemove);

// Removes elements based on condition
list.removeIf(fruit -> fruit.startsWith("B"));

//TODO demonstrate filter based on streams

// Removes all elements from the list
list.clear();
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
