---
id: 401
title: Abstract Classes in Java
slug: java-abstract-classes
excerpt: Abstract classes are classes in Java that contain abstract methods and let children classes provide the implementation.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.589Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-abstract-classes
  - abstract-method-java
  - java-class-inheritance
  - java-oop-basics
course: maven-for-beginners
displayOrder: 13
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Abstract classes are classes in Java that contain abstract methods which let children classes provide the implementation. Defining abstract classes is useful for when you want different implementation for the same method.

### Creating an Abstract Class

Let's say we are trying to get from point A to point B. This is represented by our abstract class `Transportation.java`:

```java
public abstract class Transportation {
    public abstract void travel();
}
```

Our new `Transportation` class is abstract which means you cannot actually make an object directly from it.

### Extending an Abstract Class

While you can't make objects directly from an abstract class, you can make objects from the classes that extend it. Let's define two different modes of transportation, by extending that abstract class:

```java
public class Train extends Transportation {
    public void travel() {
        System.out.println("Choo choo!");
    }
}

public class Car extends Transportation {
    public void travel() {
        System.out.println("Beep beep!");
    }
}
```

Our classes `Train` and `Car` extend our abstract class `Transportation`, which forced both of them to provide an implementation for the `travel()` abstract method.

Now we can use our new classes, like this:

```java
public class Main {

    public static void main(String[] args) {
        Train train = new Train();
        train.travel();

        Car car = new Car();
        car.travel();
    }
}
```

```bash
Choo choo!
Beep beep!
```

This right here is the power of abstract classes. Their job is just to define a contract, and any class that extends it agrees to that contract. In this case, the contract is that if you want to be a mode of transportation, you must be able to travel. Both `Train` and `Car` implemented that method and thus became valid types of transportation.
