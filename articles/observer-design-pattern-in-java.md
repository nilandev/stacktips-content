---
id: 191
title: Observer Design Pattern In Java
slug: observer-design-pattern-in-java
excerpt: Observer design pattern defines one-to-many dependency between objects in which one object changes state, all its dependents are notified. Observer design pattern sometimes called as publisher-subscriber design pattern in networked models.
difficulty: beginners
publishedDate: "2014-10-24T14:18:07.000Z"
updatedDate: "2025-09-16T23:05:29.633Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/252/thumbnail.png
topics: 
  - design-pattern
tags:
  - observer-design-pattern-java
  - publisher-subscriber-pattern
  - java-behavioral-design-patterns
  - observer-pattern-example
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The observer design pattern belongs to the behavioural family of patterns, that defines a common communication pattern between objects.

Observer design pattern defines a one-to-many dependency between objects in which one object changes state, all its dependents are notified.

Observer design pattern is sometimes called publisher-subscriber design pattern in networked models. Dependent objects are called observers and the object they are registering to is called a Subject.

When the subject changes its state, all the observers get notified. In this pattern,

-   Observers register themselves with the subject.
-   The subject maintains the list of its dependents (Observers), and it broadcasts notifications to all its dependents when its state changes.
-   Observers de-register explicitly when they no longer want to be notified.

To understand this pattern, let us look at some of the real-time examples:

-   This design pattern is widely used on most of the user interface frameworks
-   Most commonly used in most of the MVC (Model-View-Controller) models
-   Consider the different charts in an Excel document. A chart is drawn based on the data shown on the grid. If there is any change to data in Excel grid, the chart is automatically redrawn.

## Observer Design Pattern Example in Java

In this example, let us take the case of a news publisher. In a typical flow, the new readers subscribe for news. Once new news is published by the publisher, all the observers get notified. Here the publisher acts as the subject and subscribers are observers.

A single publisher can have one or many subscribers.

[![Observer Design Pattern Class Diagram](/media/articles/252/Observer-Design-Pattern-Class-Diagram.png)](http://stacktips.com)

The above class diagram represents, two observers  `Subscriber1` and `Subscriber2` register with publisher. Once there is a change in Publisher both the subscribers gets notified.

**Observer.java**

```java
public interface Observer {
     public void update(String editon);
}
```

**Subscriber1.java**

```java
public class Subscriber1 implements Observer {

    @Override
    public void update(String  edition) {
        System.out.println("New Edition from Subscriber1");
    }
}
```

**Subscriber2.java**

```java
public class Subscriber2 implements Observer {

    @Override
    public void update(String  edition) {
        System.out.println("New Edition from Subscriber2");
    }
}
```

**Subject.java**

```java
public interface Subject {
    public void registerObserver(Observer observer);

    public void removeObserver(Observer observer);

    public void notifyObservers();
}
```

**Publisher.java**

```java
import java.util.ArrayList;
import java.util.List;

public class Publisher implements Subject {

    private List<Observer> _observers = new ArrayList<Observer>();

    @Override
    public void registerObserver(Observer observer) {
        System.out.println("Registered observer");
        _observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        System.out.println("Deregister observer");
        _observers.remove(observer);
    }

    @Override
    public void notifyObservers() {

        for (Observer observer : _observers) {
            observer.update("Weekly Edition");
        }
    }
}
```

**Test.java**

```java
public class Test {

    public static void main(String[] args) {

        /* News Publisher */
        Subject publisher = new Publisher();

        /* registering observers */
        Observer subscriber1 = new Subscriber1();
        publisher.registerObserver(subscriber1);

        Observer subscriber2 = new Subscriber2();
        publisher.registerObserver(subscriber2);

        /* Notify observers */
        publisher.notifyObservers();

        /* Delete observers */
        publisher.removeObserver(subscriber2);

        /* Notify observers */
        publisher.notifyObservers();
    }
}
```

**Output**

```text
Registered observer
Registered observer
New Edition from Subscriber1
New Edition from Subscriber2
Deregister observer
New Edition from Subscriber1
```

### Advantages of Observer Design Pattern

-   Provides loose coupling between objects called observer and observable. The subject only know the list of observers it don’t care about their implementation. All the observers are notified by subject in a single message broadcast.
-   You can add and remove observers at anytime. No modification is need to be done to the subject to add new observers.

### Drawback of Observer Design Patterns

-   Sometimes if there is a problem, it becomes complex to debug between the chain of observers.
-   The subject holds reference of all the observers, if we not unregister the object it can cause memory leak. This common problem is called as lapsed listener problem.

### Rules of thumb

-   Explicitly unregister the observers, when no longer it is required to listen to Subject.
-   It is recommended for subject to hold, weakreference of objects to avoid memory leak.
