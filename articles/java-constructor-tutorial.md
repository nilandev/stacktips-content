---
id: 240
title: Java Constructor Tutorial and Examples
slug: java-constructor-tutorial
excerpt: This is a tutorial explains how constructor works in Java. Constructor is an block of code which is executed before Object creation. Unlike methods constructors are getting called automatically.
difficulty: beginners
publishedDate: "2014-02-17T13:40:23.000Z"
updatedDate: "2025-09-16T23:05:33.141Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-constructor-example
  - constructor-overloading-java
  - java-default-constructor
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## 1. Introduction

This is a tutorial explains how constructor works in Java. Constructor is an block of code which is executed before Object creation. Unlike methods constructors are getting called automatically.

## 2. Properties of Constructors

1.  Constructors are getting called automatically before you create an object
2.  You class name and the constructor name should be same otherwise compiler treats that as an different method.
3.  Constructor also can not have any return type by default it is void. However, we can still have an return statement that will return the control back from constructor.
4.  Since Constructor is executed before object creation, the object initialization code is normally hosted inside constructor.
5.  Like you override an method, you can also overload an constructor in Java.

## 3. Constructor and Static

Static block is executed before constructor, because static members gets initialized during the class is getting loaded into memory but the constructors are executed only when you create instance of any object using new keyword.

## 4. Declaring Constructor in Java

In the below code snippet, we have declared two constructors in ConstructorDemo class. One without argument and other taking a String argument. A java class can have as many as overridden constructors.

```java
public class ConstructorDemo {
    public ConstructorDemo() {
        System.out.println("Constructor with no argument");
    }

    public ConstructorDemo(String name) {
        System.out.println("Constructor with argument");
    }

    public static void main(String args[]) {

        ConstructorDemo demo1 = new ConstructorDemo();
        ConstructorDemo demo2 = new ConstructorDemo("Constructor Demo");
    }
}
```

**Output**  
Constructor with no argument  
Constructor with argument

## 5. Default Constructor in Java

Usually we define constructor in almost every Class we declare in Java. If no explicit constructor is specified by Programmer, Java Compiler inserts a no argument constructor inside class. This is also called default Constructor in Java. If you define your own constructor, could be parameter or without any parameter, then compiler will not add default constructor. It is always a good practice to define a constructor.

## 6. Calling Constructor and Chaining

Constructors cannot be called explicitly like methods in java. But a constructor can call another constructor of same class or its immediate super class. Calling one constructor from another constructor in Java is called Constructor chaining. You can keyword “this” for calling constructor of same class and keyword “super” for calling constructor of super class. Call to constructor must be on the first line of any constructor or else you will get compilation error.

### 6.1. Calling Class Constructor

```java
public class ConstructorDemo {
    public ConstructorDemo() {
        System.out.println("Constructor with no argument");
    }

    public ConstructorDemo(String name) {
        this();
        System.out.println("Constructor with argument");
    }

    public static void main(String args[]) {
        ConstructorDemo demo = new ConstructorDemo("Constructor Demo");
    }
}
```

**Output**  
Constructor with no argument  
Constructor with argument  
In this above example, we are calling one constructor from another constructor of same class using this keyword. If you observe the output above, it is first calling the no argument constructor and then calls he constructor with argument.

### 6.2. Calling Super Class Constructor

```java
public class ConstructorDemoSuper {

    public ConstructorDemoSuper() {
        System.out.println("Super Class Constructor with no argument");
    }

    public ConstructorDemoSuper(String name) {
        System.out.println("Super Class Constructor with argument");
    }
}

public class ConstructorDemo extends ConstructorDemoSuper {
    public ConstructorDemo() {
        super();
        System.out.println("Constructor with no argument");
    }

    public ConstructorDemo(String name) {
        super(name);
        System.out.println("Constructor with argument");
    }

    public static void main(String args[]) {
        ConstructorDemo demo1 = new ConstructorDemo("Constructor Demo");
        ConstructorDemo demo2 = new ConstructorDemo("Constructor Demo");
    }
}
```

**Output**  
Super Class Constructor with argument  
Constructor with argument  
Super Class Constructor with argument  
Constructor with argument

## 7. Constructor Access Modifiers

Java has four basic modifiers, public, projected, private or default. You can use any of these access modifiers to constructor. You can prevent a to get initialize by other class by defining its constructor as private. Using Private constructor, only the same class can create instance of it. This is an typical example of most common singleton design pattern.
