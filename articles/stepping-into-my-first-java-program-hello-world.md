---
id: 174
title: "Stepping Into My First Java Program “Hello World!”"
slug: stepping-into-my-first-java-program-hello-world
excerpt: Before begin writing your first Java program, you need to have your development environment ready. For writing and…
difficulty: beginners
publishedDate: "2015-01-10T15:08:56.000Z"
updatedDate: "2025-09-16T23:05:28.817Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - design-pattern
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Before begin writing your first Java program, you need to have your development environment ready. For writing and executing Java program, you need the latest version of Java SDK installed installed and configured on your machine;

Now, let us create an example class that simply prints “Hello World!” on standard output terminal.

```java
/* My first java program prints “Hello World!” */
class HelloWorldApp {
    public static void main(String[] args) {
       //Prints string hello world
        System.out.println("Hello World!");
    }
}
```

The “Hello World!” application consists of three primary components:

1.  Source code comments
2.  The HelloWorldApp class definition
3.  The main method

### Source Code Comments

Comments are ignored by the compiler but are useful for readability purpose. The Java programming language supports three kinds of comments such as, single line, multiline and documentation type comments.

-   **// text** – The compiler ignores everything from // to the end of the line.
-   **/\* text \*/** – This indicates multiline comments. The compiler ignores everything from /\* to \*/.
-   **/\*\* documentation \*/** – This indicates a documentation comment (doc comment, for short). The compiler ignores this kind of comment, just like it ignores comments that use /\* and \*/.

The following bold text defines the comments of the “Hello World!” application:

```java
/* My first java program prints “Hello World!” */
class HelloWorldApp {
    public static void main(String[] args) {
        //Prints string hello world
        System.out.println("Hello World!");
    }
}
```

### The HelloWorldApp Class Definition

The following bold text begins the class definition block for the “Hello World!” application:

```java
/* My first java program prints “Hello World!” */
class HelloWorldApp {
    public static void main(String[] args) {
        //Prints string hello world
        System.out.println("Hello World!");
    }
}
```

As shown above, the most basic form of a class definition is `class <Class Name>` followed by curly braces. The keyword `class` begins the class definition for a class named name, and the code for each class appears between the opening and closing curly braces marked in bold above.

### The main Method

The following bold text begins the definition of the main method:

```java
/* My first java program prints “Hello World!” */
class HelloWorldApp {
    public static void main(String[] args) {
       //Prints string hello world
        System.out.println("Hello World!");
    }
}
```
