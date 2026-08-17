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

Elements are ordered based on their natural ordering, or by a `Comparator` supplied at queue construction time.

`PriorityQueue` is not synchronized. If you need a thread-safe option, use `PriorityBlockingQueue` instead.

The queue has no fixed size, it can grow as elements are added.

Use `PriorityQueue` when you need to manage tasks or elements that should be processed in a priority order.

### How it actually works

A `PriorityQueue` is a **binary heap** stored in a plain `Object[]`, not a tree of node objects. Each element's parent and children are computed by index arithmetic — the children of index `i` live at `2i + 1` and `2i + 2`, and the parent of `i` lives at `(i - 1) / 2`. `offer()` appends to the end and "sifts up" (swapping with its parent until the heap property holds); `poll()` removes index `0` (always the smallest/highest-priority element under the given ordering), moves the last element to the root, and "sifts down." Both are O(log n); `peek()` is O(1) since the top element is always at index `0`.

### Iterating does not give you priority order

This is the single most common `PriorityQueue` surprise: only `poll()` (or repeated `peek()`+`poll()`) guarantees elements come out in priority order. The `Iterator` returned by `iterator()` walks the backing array in whatever order the heap happens to store it in — which satisfies the heap property (a parent is always ≤ its children) but is *not* a fully sorted order.

```java
PriorityQueue<Integer> pq = new PriorityQueue<>(List.of(5, 1, 3, 2, 4));

System.out.print("Iterator order: ");
for (int n : pq) {
    System.out.print(n + " ");
}

System.out.print("\nPoll order:     ");
while (!pq.isEmpty()) {
    System.out.print(pq.poll() + " ");
}
```

```text
Iterator order: 1 2 3 5 4
Poll order:     1 2 3 4 5
```

If you need a fully sorted snapshot without draining the queue, sort a copy: `Arrays.sort(pq.toArray())` or `pq.stream().sorted().toList()`.

The iterator is still fail-fast for structural changes made outside the iterator itself — it just isn't ordered.

### Mutating priority after insertion breaks the heap

Same category of bug as [TreeSet's compareTo trap](/articles/treeset-in-java): if you change a field your `Comparator` (or `compareTo`) depends on after the element is already in the queue, the heap's internal ordering invariant silently breaks — `poll()` can start returning elements out of order, because the heap was built around a priority that no longer matches. If a task's priority needs to change, remove it (`remove(task)` — O(n), since it has to search first) and re-add it.

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

## PriorityQueue vs the Alternatives

-   **vs `TreeSet`/`TreeMap`**: both are O(log n) for insert, but `PriorityQueue` only gives you efficient access to the single smallest/largest element. Finding or removing an *arbitrary* element is O(n) in a `PriorityQueue` (it has to scan the array) versus O(log n) in a `TreeSet`. If you only ever need "give me the next one," `PriorityQueue` is lighter — array-backed, no per-node allocation, better cache locality. If you need range queries or arbitrary removal, use `TreeSet`.
-   **vs sorting a `List` repeatedly**: don't. Sorting is O(n log n) every time; a `PriorityQueue` amortizes that cost across individual O(log n) insertions, which wins as soon as you're doing more than one insert between reads.
-   **vs `PriorityBlockingQueue`**: same heap semantics, but thread-safe and blocking — `take()` waits if the queue is empty instead of returning `null`. Reach for it when producers and consumers run on different threads.
