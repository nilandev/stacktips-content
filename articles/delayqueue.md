---
id: 453
title: DelayQueue in Java
slug: delayqueue
excerpt: DelayQueue in Java is a specialized implementation of a blocking queue that supports delayed elements
difficulty: beginner
publishedDate: "2024-07-24T05:25:39.000Z"
updatedDate: "2025-09-16T23:05:41.808Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-delayqueue
  - java-delayed-interface
  - blockingqueue-java
  - delayed-task-scheduling-java
course: beginners-guide-to-java-collections
displayOrder: 10
seo: 
  metaTitle: "DelayQueue in Java: Delayed Task Scheduling Example"
  metaDescription: "Learn how Java's DelayQueue works with the Delayed interface, and see a working example that schedules and processes delayed notifications."
  metaKeywords: null
---

A `DelayQueue` in Java is a specialized implementation of a blocking queue that supports delayed elements. Elements can only be taken from the queue when their delay has expired. This makes it useful for scenarios where tasks need to be executed after a certain delay.

### Key Properties of DelayQueue

Elements in the `DelayQueue` must implement the `Delayed` interface, which requires implementing the `getDelay` method to specify the delay time and the `compareTo` method for ordering.

The queue blocks retrieval operations until the delay of the head element has expired.

### How it actually works

Internally, `DelayQueue` wraps a `PriorityQueue` — the same binary heap [covered in the PriorityQueue article](/articles/priorityqueue-in-java) — ordered by `compareTo()`, guarded by a `ReentrantLock` and a `Condition`. `take()` peeks the head; if its delay hasn't expired, the calling thread awaits on the condition for exactly that remaining duration (not a busy loop) and re-checks on wake. Internally it also uses a "leader-follower" optimization: only one waiting thread (the "leader") ever times its wait against the head element's actual delay — every other waiting thread just blocks indefinitely until signaled, which avoids every consumer thread waking up and re-checking the clock every time the head changes.

### Its iterator makes no ordering promises at all

This is worth calling out explicitly, because it's easy to assume `iterator()` returns elements in delay/expiry order — it doesn't. `DelayQueue`'s iterator doesn't even guarantee the heap-order that `PriorityQueue`'s iterator gives you; the Javadoc explicitly says it makes no guarantees of any kind about traversal order. It's also **weakly consistent** rather than fail-fast: it won't throw `ConcurrentModificationException` if the queue is modified during iteration, and it may or may not reflect those concurrent changes. If you need the current contents in delay order, drain via `take()`/`poll()`, or copy with `toArray()` and sort.

**Example:** Suppose you are developing a system where tasks need to be executed after a certain delay, such as sending out delayed notifications.

```java
class Notification implements Delayed {
    private final String name;
    private final long startTime;

    public Notification(String name, long delay, TimeUnit unit) {
        this.name = name;
        this.startTime = System.currentTimeMillis() + TimeUnit.MILLISECONDS.convert(delay, unit);
    }

    @Override
    public long getDelay(TimeUnit unit) {
        long delay = startTime - System.currentTimeMillis();
        return unit.convert(delay, TimeUnit.MILLISECONDS);
    }

    @Override
    public int compareTo(Delayed other) {
        return Long.compare(this.startTime, ((Notification) other).startTime);
    }

    @Override
    public String toString() {
        return "Task: {name='" + name + "', startTime=" + startTime + '}';
    }
}

public class DelayQueueExample {
    public static void main(String[] args) throws InterruptedException {
        DelayQueue<Notification> notifications = new DelayQueue<>();
        notifications.add(new Notification("Task 1", 5, TimeUnit.SECONDS));
        notifications.add(new Notification("Task 2", 10, TimeUnit.SECONDS));
        notifications.add(new Notification("Task 3", 3, TimeUnit.SECONDS));

        // Processing tasks as they expire
        while (!notifications.isEmpty()) {
            Notification task = notifications.take();
            System.out.println("Notifying " + task);
        }
    }
}
```

Note that the `take()` method retrieves and removes tasks from the queue when their delay has expired, blocking until a task is available.

**Output:**

```text
Notifying Task: {name='Task 3', startTime=1721688863846}
Notifying Task: {name='Task 1', startTime=1721688865846}
Notifying Task: {name='Task 2', startTime=1721688870846}
```

## DelayQueue vs the Alternatives

-   **vs `ScheduledExecutorService`**: for the common case of "run this task after a delay" or "run this task repeatedly," `ScheduledExecutorService`/`ScheduledThreadPoolExecutor` is the higher-level tool and handles thread management for you. Reach for `DelayQueue` when you need custom control over the consumer side — for example, a cache that evicts entries only after they've expired, where you're pulling expired items yourself rather than firing a fixed callback.
-   **vs a plain `PriorityQueue` with manual sleep logic**: `DelayQueue` already handles the blocking-until-ready and multi-consumer coordination correctly, including the leader-follower optimization. Reimplementing that on top of `PriorityQueue` yourself is a lot of concurrency detail to get right for no benefit.
