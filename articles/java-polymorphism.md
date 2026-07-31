---
id: 397
title: Java Polymorphism - Method Overloading, Method Overriding
slug: java-polymorphism
excerpt: Polymorphism is the concept that objects can take many forms, particularly when it is extending from a parent class.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.528Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - method-overloading-java
  - method-overriding-java
  - java-polymorphism-example
course: maven-for-beginners
displayOrder: 15
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Polymorphism is the concept that an object can take the form of many different types. We touched upon polymorphism a little with our previous `Pet`, `Dog` and `Cat` classes. Specifically, how both cats and dogs can use properties and methods from their parent class since they are also pets:  

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

    public static class Cat extends Pet {
        Cat(String name, int weight) {
            super(name, weight);
        }

        void meow() {
            System.out.println("Meow!");
        }
    }

    public static class Dog extends Pet {
        Dog(String name, int weight) {
            super(name, weight);
        }

        void bark() {
            System.out.println("Bark!");
        }
    }

    public static void main(String[] args) {
        Dog dog = new Dog("Scooby", 4);
        dog.bark();
        dog.printInfo();

        Cat cat = new Cat("Tinkerbell", 9);
        cat.meow();
        cat.printInfo();
    }
}
```

```bash
Bark!
Name: Scooby Weight: 4 pounds.
Meow!
Name: Tinkerbell Weight: 9 pounds.
```

### Method Overloading

Method overloading is when you create multiple methods with the same name but different parameters. This is useful for when you want to have optional parameters.

Here's an example of method overloading:

```java
public class Main {

    public static void main(String[] args) {
        int squareSideLength = 3;
        int squareArea = getAreaOfRectangle(squareSideLength);

        System.out.println(squareArea);

        int rectangleWidthLength = 5;
        int rectangleHeightLength = 6;
        int rectangleArea = getAreaOfRectangle(rectangleWidthLength, rectangleHeightLength);

        System.out.println(rectangleArea);
    }

    public static int getAreaOfRectangle(int width, int height) {
        return width * height;
    }

    public static int getAreaOfRectangle(int length) {
        return length * length;
    }
}
```

```bash
9
30
```

In this example of method overloading, we have the same method name, `getAreaOfRectangle()` twice, but depending on which one you use, the method will function slightly different.

### Method Overriding

Method overriding is when you define a method with the same name and parameters as one used by the parent class. When you do this, calling that method will result in the child's class method being run and not the parent's.

Let's take a look at how this looks in practice:

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

    public static class Cat extends Pet {
        Cat(String name, int weight) {
            super(name, weight);
        }

        void printInfo() {
            System.out.println("Cat Name: " + name + " Cat Weight: " + weight + " pounds.");
        }
    }

    public static void main(String[] args) {
        Pet pet = new Pet("Scooby", 4);
        pet.printInfo();

        Cat cat = new Cat("Tinkerbell", 9);
        cat.printInfo();
    }
}
```

```bash
Name: Scooby Weight: 4 pounds.
Cat Name: Tinkerbell Cat Weight: 9 pounds.
```

We defined `printInfo()` in both the child and parent class. Since they both were named the same with the same parameters, Java automatically used the children's implementation, which includes a different string at the start. Overriding methods is super useful for when you want to have specialized behavior in a child object when compared to the more general parent object.
