---
id: 443
title: LinkedList in Java
slug: linkedlist-in-java
excerpt: LinkedList uses a doubly linked list to store elements and it implements both the List and Queue interfaces.
difficulty: beginner
publishedDate: "2024-07-07T19:34:13.000Z"
updatedDate: "2025-09-16T23:05:41.552Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - linkedlist-java
  - linkedlist-vs-arraylist
  - java-list-iterator
  - java-deque-queue-example
course: getting-started-with-php
displayOrder: 2
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

While an `ArrayList` uses a normal array to store elements, a `LinkedList` uses a doubly linked list to store elements. It implements both the `List` and `Queue` interfaces.

## Key Properties of LinkedList

Each element inside a `LinkedList` is called a node. A node holds the data and a reference to the next element in the list.

![](/media/summernote/linkedlist.jpg)  

LinkedList is preferred when the list size is unknown beforehand and the ability to grow or shrink dynamically is important. It is also very efficient when frequent insertions and removals of items from the middle of the list are needed.

The `LinkedList` in Java is not synchronized by default. If multiple threads attempt to modify a `LinkedList` concurrently, it must be synchronized externally to prevent unexpected behaviour.

### Creating and Initialising LinkedList

Let us look at how we create and add elements to `LinkedList`.

```java
// Creating LinkedList using the default constructor
List<String> linkedList = new LinkedList<>();
linkedList.add("Apple");
linkedList.add("Banana");
linkedList.add("Orange");

// Adding elements at a specific position
linkedList.add(1, "Guava");

// Adding elements to the beginning
linkedList.addFirst("Orange");

// Adding an element to the end
linkedList.addLast("Orange");

// Adding elements from another collection
List<String> arrayList = Arrays.asList("Apple", "Banana", "Orange");
List<String> linkedList = new LinkedList<>(arrayList);
 87
// Using ListIterator to add items to a specific position
ListIterator<String> iterator = linkedList.listIterator();
iterator.next();
iterator.add("Banana");

// Using the offer method
Queue<String> linkedList = new LinkedList<>();
linkedList.offer("Apple");
linkedList.offer("Banana");
linkedList.offer("Orange");
```

-   The `add()` method to insert elements at the end of the list.
-   The `offer()` methods are part of the `Deque` interface and can be used to add elements to the `LinkedList`. It returns `true` if the element was added successfully, and `false` if it was not.

### Iterate over an LinkedList

```java
// Using a For-Each Loop
for (String fruit: linkedList) {
    System.out.println(fruit);
}

// Using a Traditional For Loop
for (int i = 0; i < linkedList.size(); i++) {
    System.out.println(linkedList.get(i));
}

//Using an Iterator
Iterator<String> iterator = linkedList.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

//Using a ListIterator
ListIterator<String> listIterator = linkedList.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}

// Backward iteration
while (listIterator.hasPrevious()) {
    System.out.println(listIterator.previous());
}

// Using Java 8 Stream API forEach method
linkedList.forEach(fruit -> System.out.println(fruit));

// Using Java 8 Stream API streams
linkedList.stream().forEach(fruit -> System.out.println(fruit));
```

### Removing an Item in a LinkedList

```java
// Removes the element at index 1 (Banana)
linkedList.remove(1);

// Removes the first occurrence of "Banana"
linkedList.remove("Banana");

// Removes the first element (Apple)
linkedList.removeFirst();

// Removes the last element (Orange)
linkedList.removeLast();

// Removing All Occurrences of a Collection
List<String> itemsToRemove = Arrays.asList("Banana", "Orange");
linkedList.removeAll(itemsToRemove);

// Remove elements based on a condition
linkedList.removeIf(fruit -> fruit.startsWith("B"));

// Removes all elements from the list
linkedList.clear();
```

Get the Size of LinkedList

```java
linkedList.size()
```

Check if the Item exists in LinkedList

```java
linkedList.contains()
```

### Example

Let us create a simple playlist using LinkedList where we can add, remove, and display songs.

```java
public record Song(String title, String artist) {
}

public class _1a_MusicPlayList {
    private final LinkedList<Song> playlist;

    public _1a_MusicPlayList() {
        playlist = new LinkedList<>();
    }

    public void addSong(Song song) {
        playlist.add(song);
    }

    public void removeSong(Song song) {
        playlist.remove(song);
    }

    public void displayPlaylist() {
        for (int i = 0; i < playlist.size(); i++) {
            System.out.println((i + 1) + ". " + playlist.get(i));
        }
    }

    public static void main(String[] args) {
        _1a_MusicPlayList myPlaylist = new _1a_MusicPlayList();

        Song song1 = new Song("Bohemian Rhapsody", "Queen");
        Song song2 = new Song("Imagine", "John Lennon");
        Song song3 = new Song("Hotel California", "Eagles");

        myPlaylist.addSong(song1);
        myPlaylist.addSong(song2);
        myPlaylist.addSong(song3);

        System.out.println("My Playlist:");
        myPlaylist.displayPlaylist();

        System.out.println("Removing 'Imagine' from playlist.");
        myPlaylist.removeSong(song2);

        System.out.println("Updated Playlist:");
        myPlaylist.displayPlaylist();
    }
}
```
