---
id: 384
title: Introduction to Java Variables and Types
slug: java-variables-and-types
excerpt: Variables and constants hold data and information. Learn how to declare, initialize, and reassign them in Java.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.089Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-primitive-data-types
  - java-variable-declaration
  - java-variable-naming-rules
  - local-vs-instance-variables
course: maven-for-beginners
displayOrder: 3
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Variables are a fundamental part of any programming language, including Java. Variables are used to store pieces of data and give them a name. When we want to use these variables in some way, we can refer to them by their name.

### Data Types

Define the kind of data a variable can hold and the operations that can be performed on it. Java has two main categories of data types:

1.  Primitive Data Types:
2.  Non-Primitive Data Types (Reference Types)  
    

#### Primitive Data Types

Let's explore the primitive types of data that variables can hold.

| Type | Description | Storage space |
| --- | --- | --- |
| byte | Store whole number between -128 and 127. Useful for memory-efficient storage of small integers | 8 bits (1 byte) |
| short | Store whole number between -32,768 and 32,767. Used for larger integer values than those held by byte | 16 bits (2 bytes) |
| int | The most common integer type, storing whole numbers from -2,147,483,648 and 2,147,483,647 | 32 bits (4 bytes) |
| long | Stores even larger whole numbers, between -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 64 bits (8 bytes) |
| float | Represents single-precision floating-point numbers (numbers with decimals). Used for approximate real numbers where precision isn't critical. | 32 bits (4 bytes) |
| double | Represents double-precision floating-point numbers, offering more precision than float. Used for accurate scientific calculations or measurements. | 64 bits (8 bytes) |
| char | Stores a single unicode character. Used for representing text and symbols. | 16 bits (2 bytes) |
| boolean | Represents logical values: true or false. It is used for conditional statements and decision-making. | 1 bit (but occupies 1 byte in memory for efficiency) |

#### Non-Primitive Data Types (Reference Types)

The reference types are the objects or instances of classes. Some of the Non-Primitive Data Types in Java includes:

-   String (not a primitive, but a common reference type)  
    
-   Arrays
-   Classes
-   Interfaces

Now that we know the data types supported in Java, let's declare our variables.

### Types of Variables:

-   **Local Variables:** Declared within a method or block, accessible only within that scope.  
    
-   **Instance Variables:** Declared within a class, outside of any method, each object of the class has its own copy.
-   **Static Variables:** Declared with the static keyword, shared by all objects of the class.

### Declaring

Declaring a variable is how you create them. Here's an example featuring all of the primitive data types:

```java
public class HelloWorld {
    public static void main(String[] args) {
        byte b = 6;
        System.out.println(b);

        short c = 1337;
        System.out.println(c);

        int d = 12345;
        System.out.println(d);

        long e = 13371337;
        System.out.println(e);

        float f = 13.37f;
        System.out.println(f);

        double g = 13.37;
        System.out.println(g);

        char h = 'a';
        System.out.println(h);

        boolean i = true;
        System.out.println(i);
    }
}
```

```bash
6
1337
12345
13371337
13.37
13.37
a
true
```

In general, to declare a variable, you must start off with their type, then an equal sign, then the value. This is the general syntax:

```java
type name = value;
```

Since Java is strongly typed, it requires you to give every variable their type.

### Variable Naming Rules

There are rules in place for naming Java variables, and here they are:

-   The variable name can only contain alphanumeric characters, underscores, and dollar signs
-   The variable name must start with a letter, dollar sign, or underscore
-   The variable name cannot contain spaces

With that in mind, here are some examples of valid Java variable names:

```java
apples
_apples
_apples_
$apples
```

And here are some examples of invalid Java variables names:

```java
1apples
app les
&apples
%apples
```

Keep in mind that variable names are case-sensitive. Also, reserved keywords cannot be used as variable names since they will clash.
