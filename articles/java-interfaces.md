---
id: 402
title: Interfaces in Java
slug: java-interfaces
excerpt: Java interfaces are templates for classes to achieve abstraction and polymorphism similar to abstract classes.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.626Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - maven
course: maven-for-beginners
displayOrder: 12
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

An interface is a template for another class to follow. It defines strictly all of the abstract methods that any class that wants to implement must include. Interfaces are similar to abstract classes except that every method in an interface must be abstract, it does not contain a constructor, and it does not contain instance fields.

### Declaring Instances

To declare a new instance, use the `instance` keyword:

```java
public interface Phone {
    public void call();
    public void text();
}
```

Let's say we want to represent phones in our code. Phones can both call and text, but each phone does it slightly differently. This interface defines the methods that all phones need to do, so any class that implements this interface, will need to include their version of it.

### Implementing Interfaces

Now let's create classes that implement our `Phone` interface using the `implements` keyword:

```java
public class iPhone implements Phone {

   public void call() {
      System.out.println("iPhone call");
   }

   public void text() {
      System.out.println("iPhone Text");
   }
}

public class Pixel implements Phone {

   public void call() {
      System.out.println("Pixel call");
   }

   public void text() {
      System.out.println("Pixel Text");
   }
}
```

Now we can create actual `Phone` objects and invoke their interface methods:

```java
Phone iPhone = new iPhone();
iPhone.call();
iPhone.text();

Phone pixel = new Pixel();
pixel.call();
pixel.text();
```

```bash
iPhone call
iPhone Text
Pixel call
Pixel Text
```

Keep in mind that a single class can implement multiple interfaces!

And just like that, we can define multiple instances of `Phone` and be guaranteed that each one will have the methods outlined in the interface.
