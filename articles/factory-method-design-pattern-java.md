---
id: 187
title: Factory Method Design Pattern in Java
slug: factory-method-design-pattern-java
excerpt: Over the course of this article, we will examine one of the most commonly used patterns, the Factory method pattern in java.. The Factory design pattern provides a way to use an instance as an object factory. The factory can return an instance of one of several possible classes in a class hierarchy, depending on the data provided to it.
difficulty: beginners
publishedDate: "2014-11-04T05:25:55.000Z"
updatedDate: "2025-09-16T23:05:29.437Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - design-pattern
tags:
  - factory-method-design-pattern
  - java-creational-design-patterns
  - simple-factory-vs-factory-method
  - abstract-factory-pattern-java
course: null
displayOrder: 0
seo: 
  metaTitle: "Factory Method Design Pattern in Java Explained"
  metaDescription: "Learn the Factory Method design pattern in Java with a practical example comparing simple factory and factory method approaches to object creation."
  metaKeywords: null
---

Over the course of this article, we will examine one of the most commonly used patterns, the Factory method pattern in java.

Software systems undergo constant changes and they are unstable. We must consider designing where the objects and relationships are loosely coupled. Loose coupling is one of the most important characteristics in software design; this helps in extending new functions in the software without disturbing or doing no changes to the existing system.

> “The Factory design pattern provides a way to use an instance as an object factory. The factory can return an instance of one of several possible classes in a class hierarchy, depending on the data provided to it.”

Java Factory pattern belongs to the creational family of design patterns that govern the object instantiation process. The Factory pattern is grouped into the Simple Factory, Factory Method, and Abstract Factory patterns. We will taper the context of this tutorial to Simple Factory and Factory method design pattern.

1.  **Simple Factory:** the Simple factory isn’t actually a design pattern; its more of a programming technique often used to encapsulate the object instantiation process.
2.  **Factory Method:** Defines an interface for creating an object, but lets the classes that implement the interface decide which class to instantiate. The Factory method lets a class defer instantiation to subclasses.
3.  **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

Benefits of Factory design pattern

1.  The client does not need to know every subclass of objects it must create. It only needs one reference to the abstract class/interface and the factory object.
2.  The factory encapsulates the creation of objects. This can be useful if the creation process is very complex.

# Simple Factory Pattern

Spice Digital Inc. is one of the top smartphone manufacturers in India. They are the pioneer in manufacturing and distributing smartphones in Indian market. For now, they have two successful products SpiceFire and SpiceBolt. The `produceMobile()` method is working well which produce two different mobiles based on their model number. Let us have a look into the current implementation of produceMobile() method.

```java
public SpiceMobile produceMobile(String model) {
        SpiceMobile mobile = null;

        if (model.equalsIgnoreCase("SpiceBolt")) {
            mobile = new SpicePlus();
        } else if (model.equalsIgnoreCase("SpiceFire")) {
            mobile = new SpiceBolt();
        }
        mobile.prepare();
        mobile.bundle();
        mobile.label();

        return mobile;
}
```

SpiceMobile implementation,

```java
public abstract class SpiceMobile {
    public abstract void prepare();
    public abstract void bundle();
    public abstract void label();
}

public class SpiceFire extends SpiceMobile {
    @Override
    public void prepare() {
    }

    @Override
    public void bundle() {
    }

    @Override
    public void label() {
    }
}

public class SpiceBolt extends SpiceMobile {

    @Override
    public void prepare() {
    }

    @Override
    public void bundle() {
    }

    @Override
    public void label() {
    }
}
```

Problems with the above implementation

1.  The above implementation is working well and everyone is happy. However, at some point in time, a company want to release another new model to market, they need to change the produceMobile() method code.
2.  The design is not extensive and it is closed for modification.
3.  Adds more complexity to refactor code each time new products added.

# Factory Method Design Pattern Example

The above example is working great to deal with producing mobiles. However, we have outlined some of the problems above on the above approach. Now let us add some more complexity to the above requirements.

Spice Digital Inc. company now decided to make their global presence. They want to extend their business to London and NewYork location. Looking at the market interest, London factory will produce only SpiceBolt and SpiceFire model and New York will produce SpiceFire and SpicePlus. Now the use-case is becoming fairly complex. Let us have a glance at the below class diagram that using the Factory method design pattern.

[![Factory Method Design Pattern](/media/articles/248/Factory-Method-Design-Pattern-620x365.png)](http://stacktips.com)

### SpiceMobile.java

```java
public abstract class SpiceMobile {
    public double price;
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public abstract void prepare();

    public abstract void bundle();

    public abstract void label();
}
```

Now, let us create three different Spice mobile implementation. For demonstration purpose, we have three simple implementations i.e. SpiceBolt, SpiceFire, and SpicePlus. All three classes are similar so we don’t have listed them all.

### SpiceBolt.java

```java
public class SpiceBolt extends SpiceMobile {

    @Override
    public void prepare() {
    }

    @Override
    public void bundle() {
    }

    @Override
    public void label() {
    }
}
```

### MobileFactory.java

```java
public abstract class MobileFactory {

    public abstract SpiceMobile constructMobile(String model);

    /**
     * Defines the process to product mobile. This implementation should'nt be
     * be changed by clients
     *
     * @param model
     * @return SpiceMobile
     */
    public SpiceMobile produceMobile(String model) {

        SpiceMobile mobile = constructMobile(model);
        mobile.prepare();
        mobile.bundle();
        mobile.label();

        return mobile;
    }
}
```

### LondonMobileFactory.java

```java
/**
 * London mobile factory is specialized and only sale Spice3D and SpiceHD.
 */
public class LondonMobileFactory extends MobileFactory {

    @Override
    public SpiceMobile constructMobile(String model) {

        SpiceMobile mobile = null;

        if (model.equalsIgnoreCase("SpiceFire")) {
            mobile = new SpicePlus();
            mobile.setPrice(300);
        } else if (model.equalsIgnoreCase("SpiceBolt")) {
            mobile = new SpiceBolt();
            mobile.setPrice(400);
        }

        return mobile;
    }
}
```

### NYMobileFactory.java

```java
/**
 * New York mobile factory is specialized and only sale Spice3D and SpiceMono.
 */

public class NYMobileFactory extends MobileFactory {

    @Override
    public SpiceMobile constructMobile(String model) {

        SpiceMobile mobile = null;

        if (model.equalsIgnoreCase("SpiceFire")) {
            mobile = new SpicePlus();
            mobile.setPrice(200);
        } else if (model.equalsIgnoreCase("SpiceMono")) {
            mobile = new SpiceFire();
            mobile.setPrice(280);
        }

        return mobile;
    }
}
```

### Client.java

```java
public class Client {

    public static void main(String[] args) {

        MobileFactory factory = new LondonMobileFactory();
        SpiceMobile mobile = factory.produceMobile("SpiceHD");

        MobileFactory nyFactory = new NYMobileFactory();
        SpiceMobile mobile2 = factory.produceMobile("SpiceMono");

    }
}
```
