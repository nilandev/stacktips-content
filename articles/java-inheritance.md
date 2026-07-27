---
id: 396
title: Inheritance in Java
slug: java-inheritance
excerpt: Inheritance is the mechanism in which a class is able to access all of the properties and methods of a parent class.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.500Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 14
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Inheritance is the process in which a class is able to access and utilize the properties, methods, and fields of a parent class. This is useful for when you don't want to define multiple classes that share functionality because you can just have the parent hold that functionality and allow children classes to specialize wherever needed.

### Inheriting from a Parent Class

Sticking to our `Pet` class example, let's define two kinds of pets, `Cat` and `Dog`. Given that both of these animals tend to be pets, it makes sense to have them be children of the `Pet` class.

Declare children to be parents of another class by using the `extends` keyword:

```java
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
```

For reference, this is how the parent `Pet` class looks like:

```java
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
```

Both children classes, `Cat` and `Dog`, extend the `Pet` class. What this means is that now both of them have access to the same properties that `Pet` has defined, namely `name`, `weight`, and `printInfo()`.

If you were wondering about what `super` does, that just calls the constructor of the parent class and passes in the necessary parameters up the chain. This ensures that the child class is still a valid type of its parent.

### Creating Children objects

Now that we have the parent and children classes defined, we can create objects from them and truly illustrate the usefulness of inheritance in Java.

Let's put it all together and create both a cat and dog.

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

Notice what happened here. Only a dog can bark and only a cat can meow, so it makes sense that only those classes can call those respective methods. But notice how both objects were able to call `printInfo()`, which uses `name` and `weight`? That is, of course, because `Dog` and `Cat` are still valid instance of `Pet` and thus have access to those sames properties just like any `Pet`.

Using inheritance, we were able to create specialized children classes that inherit functionality from the parent class that they extend from for free. This helps keep logically connected classes linked by their parent which helps structure our overall program much better.
