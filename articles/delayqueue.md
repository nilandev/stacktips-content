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
