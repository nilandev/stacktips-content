---
id: 394
title: Access Modifiers in Java
slug: java-instances-and-access-modifiers
excerpt: Creating a new object creates a new instance of that class. Learn about what that means, including the different access modifiers.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.445Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 11
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Creating a new object creates a new instance of that class. Because two different objects are separate instances, things can happen inside each one without affecting the other. We've already seen many cases where instances matter. For example, inside the constructor, like this:

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

The `this` keyword refers to the current instance of the class. Sometimes, you will want data or methods to remain inaccessible to other classes. This is where access modifiers come in to play.

### Access Modifiers

Access modifiers change how a class, method, or property can be accessed by other classes. For example, we can restrict direct access to `name` and `weight` by marking them as private:

```java
public class Pet {
    private String name;
    private int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}
```

Of course, these are properties you want accessible in some fashion. This is why getters (and setter) methods exist:

```java
public class Pet {
    private String name;
    private int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }

    public String getName() {
        return name;
    }

    public int getWeight() {
        return weight;
    }
}
```

Which lets you get things like this:

```java
pet.getName();
pet.getWeight();
```

In this particular instance, it doesn't really add much value, but sometimes you want to do some validation or calculations using the property. In that case, you definitely want to restrict direct access of a property and instead make users go through specific methods.

#### Public Access Modifier

The `public` access modifier is usable on classes, properties, methods, and constructors. This makes them accessible for all classes:

```java
public class Pet {
    public String name;
    public int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}
```

#### Private Access Modifier

The `private` access modifier is usable on properties, methods, and constructors. They make the code only accessible within that class:

```java
public class Pet {
    private String name;
    private int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}
```

To access these values, the class needs to provide a public method inside that returns that value.

#### Protected Access Modifier

The `protected` access modifier is usable on properties, methods, and constructors. They make the code only accessible within that class and any class that extends it:

```java
public class Pet {
    protected String name;
    protected int weight;

    Pet(String name, int weight) {
        this.name = name;
        this.weight = weight;
    }
}

public class Cat extends Pet {
    Cat(String name, int weight) {
        super(name, weight);
    }
}
```

### Static

The `static` makes properties and methods available for use without the need for instances or objects:

```java
public class Main {

    public static void main(String[] args) {
        hello();
    }

    public static void hello() {
        System.out.println("Hello");
    }
}
```

### Final

The `final` keyword makes it so that a defined property cannot be overridden:

```java
public class Main {

    final static int example = 0;

    public static void main(String[] args) {
        example = 1; // this would fail
    }
}
```
