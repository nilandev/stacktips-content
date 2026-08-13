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
course: beginners-guide-to-java-collections
displayOrder: 2
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

While an `ArrayList` uses a normal array to store elements, a `LinkedList` uses a doubly linked list to store elements. It implements both the `List` and `Queue` interfaces.

## Key Properties of LinkedList

Each element inside a `LinkedList` is called a node. A node holds the data along with references to both the previous and next node — that's what makes it doubly linked.

![](/media/summernote/linkedlist.jpg)  

LinkedList is preferred when the list size is unknown beforehand and the ability to grow or shrink dynamically is important.

The `LinkedList` in Java is not synchronized by default. If multiple threads attempt to modify a `LinkedList` concurrently, it must be synchronized externally to prevent unexpected behaviour.

### "Fast middle inserts" is a half-truth

A common claim is that `LinkedList` is efficient for inserting or removing in the middle. That's only true if you already hold a `ListIterator` positioned at that spot — the actual splice is O(1). But `linkedList.add(index, value)` and `linkedList.remove(index)` still have to *walk the list node by node to find that index first*, which is O(n). `LinkedList` does optimize the walk itself — `node(index)` traverses from the head if `index < size / 2`, and from the tail otherwise — but that only halves the constant, it doesn't change the complexity.

In practice, `get(index)` is also O(n) for the same reason, which rules `LinkedList` out for anything that needs random access.

### Memory cost

Each element costs more than it looks like it should. Where `ArrayList` stores a bare reference per slot in a contiguous array, every `LinkedList` element is wrapped in its own `Node` object holding the value plus `prev`/`next` references — roughly 3–4x the memory per element once you count object headers. That overhead, plus the poor cache locality of chasing pointers scattered across the heap, is why `LinkedList` tends to lose real-world benchmarks against `ArrayList` and `ArrayDeque` even in scenarios that look like its strong suit on paper.

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

// Using ListIterator to add items to a specific position
ListIterator<String> iterator = linkedList.listIterator();
iterator.next();
iterator.add("Banana");
```

```java
// Creating a LinkedList from another collection
List<String> arrayList = Arrays.asList("Apple", "Banana", "Orange");
List<String> linkedListFromCollection = new LinkedList<>(arrayList);

// Using the offer method
Queue<String> queue = new LinkedList<>();
queue.offer("Apple");
queue.offer("Banana");
queue.offer("Orange");
```

-   The `add()` method inserts elements at the end of the list.
-   The `offer()` methods come from the `Deque` interface and can be used to add elements to a `LinkedList`. They return `true` if the element was added successfully, and `false` otherwise.

### Iterate over a LinkedList

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

Get the size of a LinkedList

```java
linkedList.size();
```

Check if an item exists in a LinkedList

```java
linkedList.contains("Banana");
```

### Example

Here's a simple playlist built on `LinkedList` where we can add, remove, and display songs.

```java
public record Song(String title, String artist) {
}

public class MusicPlaylist {
    private final LinkedList<Song> playlist;

    public MusicPlaylist() {
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
        MusicPlaylist myPlaylist = new MusicPlaylist();

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

### Iterating and removing safely

`LinkedList`'s iterator is fail-fast, same as `ArrayList` — it tracks `modCount` and throws `ConcurrentModificationException` if you mutate the list through anything other than the iterator itself while iterating. Use `Iterator.remove()`, `listIterator().remove()`, or `removeIf()` instead of calling `linkedList.remove(...)` inside a for-each loop.

## LinkedList vs the Alternatives

-   **vs `ArrayList`**: `ArrayList` beats `LinkedList` on nearly every practical metric — cache locality, memory per element, and O(1) indexed access. `LinkedList`'s theoretical edge (O(1) splice) only materializes when you're already holding a `ListIterator` at the insertion point.
-   **vs `ArrayDeque`**: if you're using `LinkedList` purely as a `Queue` or `Deque` (via `offer`/`poll`/`push`/`pop`), `ArrayDeque` is faster and lighter for that same job — no per-node allocation, better cache behaviour, and the JDK documentation explicitly recommends it over `LinkedList` for that use case. `LinkedList` only wins if you specifically need `null` elements, which `ArrayDeque` disallows.
