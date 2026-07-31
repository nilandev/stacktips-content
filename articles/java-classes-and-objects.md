---
id: 393
title: Classes and Objects in Java
slug: java-classes-and-objects
excerpt: Java is an object-oriented programming language and because of this, classes and objects are a fundamental feature of the language.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.415Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-classes-and-objects
  - java-constructors
  - java-oop-fundamentals
  - java-class-blueprint
course: maven-for-beginners
displayOrder: 8
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java is an object-oriented programming language. What this means is that basically everything in Java can be thought of as an object. An object is a collection of properties and methods that describe a single entity. A class is a blueprint for creating those objects.

### Creating a Class

Creating a class is simple. Simply use the `class` keyword and then give it a name.

Let's create a `Pet` class inside `Pet.java`:

```java
public class Pet {

}
```

That's it, a class is defined. Of course, it is empty, so let's give it some properties to work with:

```java
public class Pet {
    String name;
    int weight;
}
```

Great, now that we have two properties that make up a pet, let's create objects using this class.

### Creating an Object

Once we have a class defined, creating an object is easy, just use the `new` keyword, like this:

```java
Pet pet = new Pet();
```

We now have an object of type `Pet`. We still haven't actually been able to set the values of `name` and `weight` just yet, so let's do that now.

### Using a Constructor

A constructor is a special method that literally constructs an object given the parameters you pass in. If all we want to do is set the value of `name` and `weight`, this is how the class would look like:

```java
public class Pet {
    String name;
    int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}
```

The constructor takes in the parameters needed to build the object, initializes the values it needs to, and then returns an instance of that class which essentially is now a separate object.

Now you can create a new `Pet` object like this:

```java
Pet pet = new Pet("Scooby", 4);
```

Let's throw a method in this class so we can see our objects in action.

```java
public class Main {

    public static class Pet {
        String name;
        int weight;

        Pet(String name, int weight) {
            this.name = name;
            this.weight = weight;
        }

        void printInfo() {
            System.out.println("Name: " + name + " Weight: " + weight + " pounds.");
        }
    }

    public static void main(String[] args) {
        Pet pet = new Pet("Scooby", 4);
        pet.printInfo();
    }
}
```

```bash
Name: Scooby Weight: 4 pounds.
```

This is all in one file for the sake of example but in practice this should probably be in two files like `Pet.java` and `Main.java`.

### Multiple Objects

Because classes are just blueprints for objects, we can create multiple objects without any interference between each other. Let's create multiple pets to illustrate this:

```java
public class Main {

    public static class Pet {
        String name;
        int weight;

        Pet(String name, int weight) {
            this.name = name;
            this.weight = weight;
        }

        void printInfo() {
            System.out.println("Name: " + name + " Weight: " + weight + " pounds.");
        }
    }

    public static void main(String[] args) {
        Pet scooby = new Pet("Scooby", 4);
        scooby.printInfo();

        Pet spark = new Pet("Spark", 6);
        spark.printInfo();
    }
}
```

```bash
Name: Scooby Weight: 4 pounds.
Name: Spark Weight: 6 pounds.
```
