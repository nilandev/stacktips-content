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

### Key Properties of ArrayQueue

The `ArrayDeque` can be used as a queue (FIFO) and a stack (LIFO).

It allows the insertion and removal of elements from both ends. The underlying array resizes dynamically as elements are added or removed.

It is not synchronized, meaning you need to manage synchronization externally for multithreaded use.

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
