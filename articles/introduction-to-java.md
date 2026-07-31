---
id: 382
title: Introduction to Java
slug: introduction-to-java
excerpt: "This is the beginning of the Java class. Here we will install the prerequisites for java development and get started with writing our first Java code!"
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.016Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-installation-guide
  - java-hello-world
  - java-jdk-setup
  - java-ide-setup
course: getting-started-with-java
displayOrder: 1
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java is a high-level, cross-platform, mature, object-oriented programming language. Java is extremely popular due to its flexibility and ability to run anywhere. It abstracts away a lot of details that we don't need to worry about which allows us to focus on the logic in our code.

### Prerequisites

Here are the prerequisites for working with Java:

**Java Development Kit (JDK):** This is the essential software that contains the compiler, tools, and libraries needed to develop Java applications.

**Integrated Development Environment:** This is completely optional, but highly recommended. An IDE provides a user-friendly interface for writing, editing, debugging, and running Java code. Here are some of the popular choices:

-   IntelliJ IDEA
-   Eclipse
-   NetBeans
-   Visual Studio Code (with Java extensions)

If you've got these two things, you're ready to start this class!

### Installing Java

If you don't already have Java installed, you can do that using our [Java installation guide](https://stacktips.com/articles/how-to-install-java-for-macos-and-windows). To test that you installed Java correctly, run this command:

```bash
java --version
```

You should get an output similar to this:

```bash
openjdk 17.0.7 2023-04-18 LTS
OpenJDK Runtime Environment Microsoft-7626293 (build 17.0.7+7-LTS)
OpenJDK 64-Bit Server VM Microsoft-7626293 (build 17.0.7+7-LTS, mixed mode)
```

If you have Java installed, you're good to go.

### Installing a IDE

You will most likely need a Java IDE to write, compile and run your Java code, at least if you don't want to do all of this in the command line. We recommend IntelliJ IDEA but the choice is entirely yours. Follow the [installation steps](https://www.jetbrains.com/help/idea/installation-guide.html) from official IntelliJ website.

At this point, we will assume you have the Java and an IDE installed. Let's move on to writing Java code!

### Hello World

The classic example to starting any programming language has got to be printing out `Hello World!`, so let's do just that in Java. First create a file called `HelloWorld.java`

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

To run this, you first need to compile your code. We can do that using javac

```bash
javac HelloWorld.java
```

This will compile your code and generate another file HelloWorld.class. To run this file, you need following command:

```bash
java HelloWorld
```

Notice, this will print 

```bash
HelloWorld!
```
