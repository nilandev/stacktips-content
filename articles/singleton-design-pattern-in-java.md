---
id: 204
title: Implementing Singleton Design Pattern in Java
slug: singleton-design-pattern-in-java
excerpt: Master the concept of Singleton classes, Java Singleton Design Pattern, and its practical application. Explore real-world examples and ensure thread safety in your Singleton class.
difficulty: beginners
publishedDate: "2023-09-19T08:17:22.000Z"
updatedDate: "2025-09-16T23:05:30.439Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - design-pattern
tags:
  - java-singleton-pattern
  - thread-safe-singleton
  - lazy-initialization-java
  - singleton-serialization-java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Singleton design pattern belongs to the creational family of patterns that governs the object instantiation process. It ensures at most one instance of a class is ever created throughout the lifecycle of your application.

Here are some of the real-time use cases of the singleton class:

-   **Project Configuration:** Project configurations are read and loaded into memory once and used multiple times throughout the application lifecycle.
-   **Application Log:** The Logger object will be used globally everywhere in your application. It must be initialized once and used everywhere.
-   **Analytics and Reporting:** If you are using some kind of data Analytics or tracking service, then, you must design them to be singleton so that they are initialized once and used everywhere.

![](/media/summernote/singleton-design-pattern_1_6HU1DL5.jpg)

Notice that the `Singleton` class has a private static instance variable named `instance`. The default constructor of the `Singleton` class is made private to prevent other classes from instantiating it.

The `getInstance()` method is declared in the static scope to make the technique accessible globally. The `getInstance()` method returns the singleton object.

## Implementing the Singleton Class

To declare a class as singleton, you have to:

-   The default constructor must be private. A private constructor prevents the direct instantiation of the object from other classes.
-   Create a public static `getInstance()` method. A member declared as static can be accessed without creating an object using the new operator. This method returns the instance of the singleton class.
-   Lazy initialization is preferable to create an object on first use.

### Singleton with Lazy Initialization

Here's how we can create a singleton class using lazy initialization

```java
class Singleton {
    private static Singleton instance;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void method1() {
        System.out.println("Hurray! I am method1 from Singleton!");
    }
}
```

Let us now test the singleton initialization:

```java
Singleton object = new Singleton();
object.method1();
```

The above code will result in a compilation error. As the default constructor is made private, you are not allowed to create instances using a `new` keyword. However, we can use the `getInstance()` method to get the instance of the Singleton class.

```java
Singleton object = Singleton.getInstance();
object.method1();
```

This is how we create a Singleton class using lazy initialization. The `getInstance()` method instantiates the class for the first use.

### Singleton and Thread Safety

Notice that the `getInstance()` method is not thread-safe. Two instances of the Singleton class will be created if the `getInstance()` is called simultaneously by two threads.

This issue can be avoided by making the `getInstance()` method `synchronized`. This way we force every thread to wait for its turn before it executes. i.e. no two threads can be entered into the `getInstance()` method at the same time.

```java
public static synchronized Singleton getInstance() {
    if (instance == null) {
        instance = new Singleton();
    }
  return instance;
}
```

The above implementation will answer the thread safety problem. However, the `synchronized` methods are expensive and can have a serious performance hit.

We can optimize this using the `synchronization` block.

```java
public static Singleton getInstance() {
    if (instance == null) {
        synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
    return instance;
}
```

### Singleton with Early Initialization

Using early initialization we will initialize upfront before your class is loaded. This way you don’t need to check for synchronization as it is initialized before being used ever.

```java
class Singleton {
    private static Singleton instance = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return instance;
    }

    public void method1() {
        System.out.println("Hurray! I am method1 from Singleton!");
    }
}
```

## Singleton and Object Cloning

Java allows you to create a copy of the object with similar attributes and state from the original object using cloning. To implement cloning, we have to implement `java.lang.Cloneable` interface and override `clone()` method from the `Object` class.

It is a good idea to prevent cloning in a singleton class.

To disallow cloning in your singleton class, we can override the clone method and explicitly throw the `CloneNotSupportedException` exception.

```java
class Singleton implements Cloneable {
    private static Singleton instance;

    private Singleton() {
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException();
    }

    public void method1() {
        System.out.println("Hurray! I am method1 from Singleton!");
    }
}
```

## Singleton and Serialization

Serialization in Java allows to conversion of the state of an object into a stream of bytes so that it can easily be stored into a file or transferred via network. Once the object is serialized, you can deserialize it, back to the object from the byte stream.

If a singleton class is meant to be serialized, it will end up creating duplicate objects. Let us have a look at the example below,

```java
import java.io.Serializable;

class Singleton implements Cloneable, Serializable {
    private static final long serialVersionUID = 1L;
    private static Singleton instance;
    private int value;

    private Singleton() {
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException();
    }

    public void method1() {
        System.out.println("Hurray! I am method1 from Singleton!");
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
```

In this example, the Singleton class is implementing the `java.io.Serializable` interface, which means the state of its object can be persisted.

Now, let us save the object into a file and then retrieve it later.

```java
public static void main(String[] args) {
    Singleton instanceOne = Singleton.getInstance();
    instanceOne.setValue(10);

    try {
        FileOutputStream fos = new FileOutputStream("filename.txt")
        ObjectOutput out = new ObjectOutputStream(fos);
        out.writeObject(instanceOne);
        out.close();
        instanceOne.setValue(20);

        FileInputStream fis = new FileInputStream("filename.txt")
        ObjectInput in = new ObjectInputStream(fis);
        Singleton instanceTwo = (Singleton) in.readObject();
        in.close();

        System.out.println("instanceOne:" + instanceOne.getValue());
        System.out.println("instanceTwo:" + instanceTwo.getValue());
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

This will print different values, which means that they are two different objects. Here we are violating the singleton principle.

To solve this issue, we need to include the `readResolve()` method in our `Singleton` class. This method will be invoked before the object is deserialized and here we will call the `getInstance()` method to return the same object after deserialization.

```java
class Singleton implements Cloneable, Serializable {
    private static final long serialVersionUID = 1L;
    private static Singleton instance;
    private int value;

    private Singleton() {
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

  protected Object readResolve() {
     return getInstance();
  }

    @Override
    public Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException();
    }

    public void method1() {
        System.out.println("Hurray! I am method1 from Singleton!");
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
```

## Noteworthy

-   Singleton classes are used sparingly. Do not think of this pattern, unless you know what you are doing. As the object is created in the global scope, this is riskier in resource-constrained platforms.
-   Beware of object cloning. Double-check and block the object’s clone method
-   Careful when multiple threads access the singleton class
-   Careful of multiple class loaders they can break your singleton
-   Implement strict type if your singleton class is serialized

## Practice Question

Design a Rate Limiter class that limits the number of requests an API can receive within a given time frame. The Rate Limiter should be implemented as a Singleton to ensure that only one instance is used throughout the system.  
  
**Hint:**  

-   RateLimiter Initializes the rate limiter object. Each user is allowed a maximum of 3 requests per minute.
-   Create a method \`allowRequest(int timestamp, int userId)\` that returns true if the request from the given userId is allowed at the given timestamp, otherwise returns false.

Explain using the Java Scanner library to accept user input for the user ID, automatically generate a timestamp, and interact with our RateLimiter class. The main method will print "Hello" if the request from the user is accepted.
