---
id: 392
title: Enums in Java
slug: java-enums
excerpt: Enums in Java are a group of constants that you can define. Learn how to define them, get their value, and iterate over them.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.342Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-enum-basics
  - defining-enum-java
  - iterating-enum-values-java
course: getting-started-with-java
displayOrder: 12
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Enums, short for enumerations in Java are a group of named constants that you can define in an array-like structure. They are useful for when you want to create a bunch of related values.

### Defining an Enum

Let's dive straight into it and define an enum using the `enum` keyword:

```java
enum Fruit {
    APPLE,
    ORANGE,
    BANANA
}
```

This enum we have created is named `Fruit` and it contains three items in it. Keep in mind that it is convention to capitalize all the names. Inside a class, it can look like this:

```java
public class Main {

    enum Fruit {
        APPLE,
        ORANGE,
        BANANA
    }

    public static void main(String[] args) {

    }
}
```

### Using an Enum value

Now that we have our enum, we can decide to use it. A common way enums are used are inside a switch statement. Let's see how that looks:

```java
public class Main {

    enum Fruit {
        APPLE,
        ORANGE,
        BANANA
    }

    public static void main(String[] args) {
        Fruit fruit = Fruit.APPLE;
        switch(fruit) {
            case APPLE:
                System.out.println("An apple was found!");
                break;
            case ORANGE:
                System.out.println("An orange was found!");
                break;
            case BANANA:
                System.out.println("A banana was found!");
                break;
        }
    }
}
```

```bash
An apple was found!
```

### Looping through Enums

Instead of using an enum one at a time, you can loop through them all by using the `values()` method which returns an array of all the enum values. This then allows you to loop over all of them:

```java
public class Main {

    enum Fruit {
        APPLE,
        ORANGE,
        BANANA
    }

    public static void main(String[] args) {
        for (Fruit fruit : Fruit.values()) {
            System.out.println(fruit);
        }
    }
}
```

```bash
APPLE
ORANGE
BANANA
```

For the most part, enums are used when you know the value of them will not change and there's a finite number of them, since they are constant. Real world examples of good cases to use enums include the months in a year, a list of US states, time zones, and the planets in our solar system, to name a few.
