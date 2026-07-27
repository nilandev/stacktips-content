---
id: 383
title: Overview of Java Syntax and Comments
slug: java-overview-syntax-and-comments
excerpt: Get an overview of Java in this lesson including the syntax and how to leave single and multi-line comments.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.057Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 2
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java is an object-oriented programming language. What this means is that basically everything is an object. We'll learn more about what an object is and why it's important later in this class.

Let's look at how we printed `Hello World!` again:  

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

There's definitely a lot going on here, however for the purposes of this class, there's only a few things you need to take away from this for now:

-   This code defines the `main()` method, which is the starting point for any Java program.
-   When you run this code, the JVM(Java Virtual Machine) calls the `main()` method and executes its contents.
-   The line `System.out.println("Hello World!");` prints the message "Hello World!" to the console, demonstrating basic output functionality.
-   When it comes to the syntax, every line of code in Java must end in a semicolon. Unlike some programming languages like Python, indentation doesn't matter here.

### Comments in Java

Comments are useful in programming languages to leave yourself or another developer a note of some kind. This is also called documenting your code. Comments are entirely ignored by the compiler so they do not affect the execution or performance of your code.

Here's how a single-line comment looks like:

```java
public class HelloWorld {
    public static void main(String[] args) {
        // this is a single-line comment!
        System.out.println("Hello World!");
    }
}
```

You can leave a comment spanning multiple lines like this:

```java
public class HelloWorld {    public static void main(String[] args) {
        /* this is a
           multi-line comment!
          */
        System.out.println("Hello World!");
    }
}
```
