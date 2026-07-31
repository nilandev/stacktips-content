---
id: 452
title: PriorityQueue in Java
slug: priorityqueue-in-java
excerpt: PriorityQueue is a type of queue that stores elements in a way such that the element with the highest priority is always at the front of the queue
difficulty: beginner
publishedDate: "2024-07-24T05:24:09.000Z"
updatedDate: "2025-09-16T23:05:41.770Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - priorityqueue-java
  - java-binary-heap
  - priorityqueue-comparator
  - java-collections-priorityqueue
course: beginners-guide-to-java-collections
displayOrder: 9
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A `PriorityQueue` in Java is a type of queue that stores elements in a way such that the element with the highest priority is always at the front of the queue. It is implemented as a binary heap, providing an efficient way to access and manage elements based on priority.

### Key Properties of PriorityQueue

Elements are ordered based on their natural ordering based on the specified `Comparator` provided at queue construction time.

The `PriorityQueue` is not synchronized, hence if you are looking for the thread-safety option, you can use`PriorityBlockingQueue`.

The queue has no fixed size, it can grow as elements are added.

Use `PriorityQueue` when you need to manage tasks or elements that should be processed in a priority order.

**Example:** Suppose you are developing a task management system where tasks have different priorities. Higher-priority tasks should be processed before lower-priority tasks.

```java

class Task {
    private String name;
    private int priority;

    public Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }

    public String getName() {
        return name;
    }

    public int getPriority() {
        return priority;
    }

    @Override
    public String toString() {
        return "Task{name='" + name + "', priority=" + priority + "}";
    }
}

public class TaskManager {
    public static void main(String[] args) {
        PriorityQueue<Task> taskQueue = new PriorityQueue<>(Comparator.comparingInt(Task::getPriority).reversed());
        taskQueue.add(new Task("Task 1", 3));
        taskQueue.add(new Task("Task 2", 1));
        taskQueue.add(new Task("Task 3", 4));
        taskQueue.add(new Task("Task 4", 2));

        System.out.println("Printing tasks based on priority:");
        while (!taskQueue.isEmpty()) {
            Task task = taskQueue.poll();
            System.out.println("Processing " + task);
        }
    }
}
```

**Output:**

```text

Printing tasks based on priority:
Processing Task{name='Task 3', priority=4}
Processing Task{name='Task 1', priority=3}
Processing Task{name='Task 4', priority=2}
Processing Task{name='Task 2', priority=1}
```
