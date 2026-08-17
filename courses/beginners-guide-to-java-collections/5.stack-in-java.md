---
id: 448
title: Stack in Java
slug: stack-in-java
excerpt: Stack extends Vector with five operations that allow a vector to be treated as a stack. It supports last-in, first-out (LIFO) operations.
difficulty: beginner
publishedDate: "2024-07-07T19:42:19.000Z"
updatedDate: "2025-09-16T23:05:41.640Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-stack-class
  - lifo-data-structure
  - stack-push-pop-peek
  - java-vector-collections
course: beginners-guide-to-java-collections
displayOrder: 5
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Stack extends `Vector` with five operations that allow a vector to be treated as a stack. It supports last-in, first-out (LIFO) operations.

![](/media/summernote/Collections-Stack.jpg)  

Stack allows the following operations:

-   **push(item)**: Adds an item to the top of the stack.
-   **pop()**: Removes and returns the item at the top of the stack.
-   **peek()**: Returns the item at the top of the stack without removing it.
-   **empty()**: Checks if the stack is empty.
-   **search(item)**: Locates the presence of an item in the stack and it returns the distance from the top. If there are duplicate items it returns the top most occurrence.

As the `Stack` extends `Vector`, all the stack operations are synchronized and thread-safe — and it inherits `Vector`'s doubling growth strategy and non-fail-fast `Enumeration`, covered in the [Vector article](/articles/vector-in-java).

One detail worth knowing: `push()` and `pop()` operate on the *end* of the underlying array, not the beginning. `push()` is really just `addElement()`, and `pop()` removes the last element — so both are O(1) amortized, not O(n). If `push`/`pop` worked at index 0 instead, every operation would require shifting the entire array.

`search(item)` returns a **1-based** distance from the top, not a zero-based index — `search()` returning `1` means "the top element," not "index 1."

Take a text editor's undo/redo feature as an example — you need to track every typing action in order, and a `Stack` is a natural fit for that.

```java
public class TextEditor {
    private final Stack<String> textStack = new Stack<>();
    private final Stack<String> undoStack = new Stack<>();

    public void type(String text) {
        textStack.push(text);
        undoStack.clear();
    }

    public void undo() {
        if (!textStack.isEmpty()) {
            String lastText = textStack.pop();
            undoStack.push(lastText);
        } else {
            System.out.println("Nothing to undo.");
        }
    }

    public void redo() {
        if (!undoStack.isEmpty()) {
            String lastUndoText = undoStack.pop();
            textStack.push(lastUndoText);
        } else {
            System.out.println("Nothing to redo.");
        }
    }

    public void display() {
        System.out.println("Current Text: " + String.join("", textStack));
    }

    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        editor.type("Hello, ");
        editor.type("world!");
        editor.display();

        editor.undo();
        editor.display();

        editor.redo();
        editor.display();

        editor.undo();
        editor.undo();
        editor.display();

        editor.redo();
        editor.display();
    }
}
```

## Why the JDK Recommends Against Stack

The `Stack` Javadoc says outright: prefer `Deque` for LIFO operations, implemented by `ArrayDeque`. Two reasons:

-   **`Stack extends Vector`**, which means it inherits `Vector`'s entire `List` API. Nothing stops you from calling `stack.add(0, item)` or `stack.remove(0)` on a `Stack` and silently breaking the LIFO ordering the class exists to enforce — the type system won't catch it.
-   `Stack` inherits `Vector`'s synchronized-on-every-method behaviour and doubling growth strategy, both of which cost you in the (far more common) single-threaded case where you don't need the synchronization at all.

`ArrayDeque` doesn't have either problem: it isn't a `List`, so it can't expose operations that would break stack semantics, and it's unsynchronized by default with array-backed storage that resizes more efficiently. The `textStack`/`undoStack` fields in the example above translate directly:

```java
private final Deque<String> textStack = new ArrayDeque<>();
private final Deque<String> undoStack = new ArrayDeque<>();
// push(), pop(), isEmpty() are all the same method names on Deque
```

The only thing you lose is `search()` — `Deque` has no equivalent, since finding an item's position isn't really a stack operation to begin with.
