---
id: 441
title: Static Variables, Methods, and Class
slug: static-keyowrd-in-java
excerpt: This article covers static keyword in Java and how static can be applied to a class, variables and on a method.
difficulty: beginner
publishedDate: "2024-06-29T09:58:05.000Z"
updatedDate: "2025-09-16T23:05:41.499Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 21
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The static keyword in Java can be applied to a class, a member or a method. In this tutorial, we will explore how the members, methods and classes behave in Java when they are declared static.

## Static Variables and Methods

Variables and methods declared with `static` keywords are associated with the class rather than with any specific instance of the class. This means all instances of the class share the same copy of the static variable.

Static variables are allocated memory only once when the class is loaded into memory and before any instance is created. They exist throughout the entire lifecycle of the program.

For accessing the static members, you don't need to create an instance and they can be accessed directly using the name of the class. However, it is possible to access them through an instance.

```java
public class Vehicle {
    protected static String brand;

    public static String getBrand() {
        return brand;
    }

    public static void setBrand(String brand) {
        Vehicle.brand = brand;
    }
}

public class Car extends Vehicle {
    private String model;

    public Car(String model) {
        this.model = model;
    }

    public String getModel() {
        return model;
    }
}

public class Bus extends Vehicle {
    private int seatingCapacity;

    public Bus(int seatingCapacity) {
        this.seatingCapacity = seatingCapacity;
    }

    public int getSeatingCapacity() {
        return seatingCapacity;
    }
}
```

In the above example, the variable `brand` is declared as static, which means it will be shared among all instances of the `Vehicle` class.

![](/media/summernote/static-class_diagram.jpg)  

When the program starts, the `Car` class is loaded into the Method Area and the static variable `brand` is initialized.

```java
public class Main {
    public static void main(String[] args) {
        Vehicle.setBrand("Toyota");

        Car car = new Car("Camry");
        System.out.println("Car brand: " + Vehicle.getBrand());
        System.out.println("Car model: " + car.getModel());

        Bus bus = new Bus(50);
        System.out.println("Bus brand: " + Vehicle.getBrand());
        System.out.println("Bus seating capacity: " + bus.getSeatingCapacity());
    }
}
```

## Static Classes

In Java, you can declare a class as `static` but they can only be defined as inner class. A static class cannot be a top-level class.

A static class can have static variables, static methods and instance members, just like a regular top-level class.

A static nested class is associated with its outer class, but it doesn't have direct access to the instance variables and methods of the outer class. Static classes can be instantiated without needing an instance of the outer class.

```java
public class OuterClass {
    private String var1;
    private static String staticOuterField = "Static Outer Field";

    public String getVar1(){
        return var1;
    }

    public static class StaticNestedClass {
        public void printMessage() {
            System.out.println(staticOuterField);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        OuterClass.StaticNestedClass obj1 = new OuterClass.StaticNestedClass();
        obj1.printMessage();
    }
}
```

In the above example, we are accessing `staticOuterField` within the `StaticNestedClass` static `printMessage()` method, but we cannot directly access it using the instance of `StaticNestedClass`.

We cannot also directly access the `getVar1()` method by using the instance of `StaticNestedClass`.\`\`

The static inner class is useful for logically grouping classes or encapsulating functionality closely related to the outer class.

For example, let's say you are developing an application that needs access to data from a database. You can use a static inner class to encapsulate the logic for managing the database connections, while your outer class can be responsible for database queries. # Static
