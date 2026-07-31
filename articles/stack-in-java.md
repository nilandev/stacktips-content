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
course: getting-started-with-php
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

As the `Stack` extends `Vector`, all the stack operations are synchronized and thread-safe.

For example, if you are implementing a text editor functionally, we need to track all type actions to allow undo/redo functionality. The `Stack` will be a good choice for such implementation.

```java
public class _1a_TextEditor {
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
        _1a_TextEditor editor = new _1a_TextEditor();
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
