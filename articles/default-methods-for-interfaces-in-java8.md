---
id: 22
title: Default Methods for Interfaces in Java8
slug: default-methods-for-interfaces-in-java8
excerpt: This example-driven tutorial outlines the usage of default methods for an interface in Java8. The Java Tutorials have been written for JDK 8.
difficulty: beginners
publishedDate: "2018-09-18T08:05:19.000Z"
updatedDate: "2025-09-16T23:05:20.800Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/19/thumbnail.png
topics: 
  - ios
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Before Java 8, Java interfaces could only have static constants and abstract methods. The implementation of those abstract methods has to be provided by the class that implements an interface. This means that when you modify an interface, it breaks all the implementation classes.

Therefore, to overcome this issue, Java 8 has introduced the concept of default methods (Also known as Extension Methods) which allow the interfaces to have methods with implementation without affecting the classes that implement the interface.

You can do this by using the `default` keyword.

## Default Method Java8 Example

```java
interface Vehicle {
    String speedUp();
    String slowDown();

    default String alarmOn() {
        return "Turning the alarm on.";
    }

    default String alarmOff() {
        return "Turning the alarm off.";
    }
}

class Car implements Vehicle {

    private String brand;

    public Car(String brand){
        this.brand = brand;
    }

    @Override
    public String speedUp(){
        return "Speed up!";
    }

    @Override
    public String slowDown(){
        return "Slow down!";
    }

    public String getBrand(){
        return brand;
    }
}
```

As you can notice above, we do not have to provide the implementation for the `alarmOn` and `alarmOff` methods in our `Car` implementation.

Lastly, let’s define a typical main class and creates an instance of Car to see how the default methods are called:

```java
public class VehicleExmaple {

    public static void main(String[] args) {
    Car car = new Car("Land Rover");
    System.out.println(car.getBrand());
        System.out.println(car.speedUp());
        System.out.println(car.slowDown());

        //Calling default methods
        System.out.println(car.alarmOn());
        System.out.println(car.alarmOff());

    }
}
```

## **Default Methods Inheritance & Diamond Problem**

If your class implements multiple interfaces that define the same default methods, then the code simply won’t compile, as there’s ambiguity caused by multiple interface inheritance (a.k.a the [Diamond Problem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem))

This can be solved by explicitly overriding the default methods in your implementation class.

```java
class Car implements Vehicle1, Vehicle2 {

    // Your code goes here..
    @Override
    public String alarmOn() {
        // Your code goes here..
        //...
        return Vehicle2.super.alarmOn();
    }

    @Override
    public String alarmOff() {
        // Your code goes here..
        //...
        return Vehicle2.super.alarmOff();

    }
}
```
