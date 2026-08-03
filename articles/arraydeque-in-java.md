---
id: 454
title: ArrayDeque in Java
slug: arraydeque-in-java
excerpt: "The ArrayDeque is a resizable array implementation of the `Deque` interface. It supports adding and removing elements from both ends of the deque (double-ended queue) efficiently."
difficulty: beginner
publishedDate: "2024-07-24T05:27:50.000Z"
updatedDate: "2025-09-16T23:05:41.841Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-arraydeque
  - java-deque-interface
  - undo-redo-stack-java
course: beginners-guide-to-java-collections
displayOrder: 11
seo: 
  metaTitle: "ArrayDeque in Java: Guide with Undo/Redo Example"
  metaDescription: "Learn how Java's ArrayDeque works as both a stack and queue, and see a practical undo/redo text editor example that uses two ArrayDeque instances."
  metaKeywords: null
---

The `ArrayDeque` is a resizable array implementation of the `Deque` interface. It supports adding and removing elements from both ends of the deque (double-ended queue) efficiently.

### Key Properties of ArrayDeque

The `ArrayDeque` can be used as a queue (FIFO) and a stack (LIFO).

It allows the insertion and removal of elements from both ends. The underlying array resizes dynamically as elements are added or removed.

It is not synchronized, meaning you need to manage synchronization externally for multithreaded use.

### How it actually works

`ArrayDeque` is backed by a **circular array** — not a linked list of nodes, despite implementing the same `Deque` interface as `LinkedList`. It tracks a `head` and `tail` index into that array; adding to the front decrements `head` (wrapping around to the end when it hits `0`), and adding to the end increments `tail`, wrapping the same way. The array's capacity is always kept a power of two specifically so that wraparound can be computed with a cheap bitmask (`index & (capacity - 1)`) instead of the more expensive modulo operator. When the array fills up, it doubles, same as `Vector`'s default growth.

This circular-array design is exactly why `ArrayDeque` beats both `LinkedList` and `Stack` for stack/queue workloads: no per-element node allocation, and elements sit contiguously in memory for better cache locality, at the cost of losing `LinkedList`'s ability to splice in O(1) at an arbitrary interior position.

### No null elements allowed

Unlike `LinkedList`, `ArrayDeque` throws a `NullPointerException` if you try to add `null`. This isn't an arbitrary restriction — `peek()` and `poll()`-style methods return `null` to signal "the deque is empty," so allowing `null` as an actual element would make that signal ambiguous. If your existing code stores `null` in a `LinkedList` used as a queue, switching to `ArrayDeque` is not a drop-in replacement.

Its iterator is fail-fast, like the other non-concurrent collections in this course.

**Example:** Suppose you are developing a text editor with an undo and redo feature. You can use two `ArrayDeque` instances to manage the history of operations: one for undo and one for redo.

```java
public class TextEditor {
    private StringBuilder text;
    private ArrayDeque<String> undoStack;
    private ArrayDeque<String> redoStack;

    public TextEditor() {
        text = new StringBuilder();
        undoStack = new ArrayDeque<>();
        redoStack = new ArrayDeque<>();
    }

    public void appendText(String newText) {
        undoStack.push(text.toString());
        redoStack.clear();
        text.append(newText);
    }

    public void undo() {
        if (!undoStack.isEmpty()) {
            redoStack.push(text.toString());
            text = new StringBuilder(undoStack.pop());
        }
    }

    public void redo() {
        if (!redoStack.isEmpty()) {
            undoStack.push(text.toString());
            text = new StringBuilder(redoStack.pop());
        }
    }

    public String getText() {
        return text.toString();
    }

    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        editor.appendText("Hello");
        editor.appendText(", World!");
        System.out.println("Current Text: " + editor.getText());

        editor.undo();
        System.out.println("After Undo: " + editor.getText());

        editor.redo();
        System.out.println("After Redo: " + editor.getText());

        editor.undo();
        editor.undo();
        System.out.println("After two Undos: " + editor.getText());
    }
}
```

**Output:**

```text
Current Text: Hello, World!
After Undo: Hello
After Redo: Hello, World!
After two Undos:
```

## ArrayDeque vs the Alternatives

-   **vs `LinkedList`**: `ArrayDeque` is faster and lighter for the same `Deque`/`Queue` operations — no per-node allocation, better cache behaviour, and the JDK's own documentation recommends it over `LinkedList` for this purpose. `LinkedList` only wins if you need `null` elements or O(1) insertion at an arbitrary interior position via a `ListIterator`.
-   **vs `Stack`**: see the [Stack article](/articles/stack-in-java) — `Stack extends Vector`, inherits synchronized-by-default overhead most code doesn't need, and exposes a full `List` API that can be used to accidentally break LIFO ordering. `ArrayDeque` avoids both problems.
-   **vs `PriorityQueue`**: different job entirely — `ArrayDeque` preserves insertion order (whichever end you push/pop from); `PriorityQueue` reorders by priority. Don't reach for `ArrayDeque` if what you actually need is "always process the smallest/largest next."
