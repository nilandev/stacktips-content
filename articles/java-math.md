---
id: 385
title: Perform Math Operations in Java
slug: java-math
excerpt: Learn about how to do arithmetic and work with the basic math operators and methods provided by Java.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.123Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-arithmetic-operators
  - java-math-class
  - java-math-methods
course: maven-for-beginners
displayOrder: 19
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java makes working with math straightforward and simple. It offers the usual arithmetic operators you expect, in addition to mathematical functions and properties so that we don't need to implement them ourselves. This lets us focus on the core logic of our application.

### Arithmetic Operators

Arithmetic operators are what you use to manipulate the value of numerical variables and numbers. Here are the ones you can use:

**Addition**

```java
// adding numbers
int cakes = 5;
int cookies = 7;

int total = cakes + cookies;
System.out.println("Total: " + total);
```

```bash
Total: 12
```

**Subtraction**

```java
// subtracting numbers
int cakes = 14;
int eaten = 7;

int total = cakes - eaten;
System.out.println("Total: " + total);
```

```bash
Total: 7
```

**Multiplication**

```java
// multiplying numbers
int cakes = 3;
int people = 7;

int total = cakes * people;
System.out.println("Total: " + total);
```

```bash
Total: 21
```

**Division**

```java
// dividing numbers
int cakes = 100;
int people = 5;

int total = cakes / people;
System.out.println("Total: " + total);
```

```bash
Total: 20
```

**Modulus**

```java
// modulus operator
int cakes = 100;
int people = 7;

int remainder = cakes / people;
System.out.println("Remainder: " + remainder);
```

```bash
Total: 14
```

### Order of Operations

Order of Operations, also known as PEMDAS, works just as you would expect, including parentheses:

```java
// order of operations
int result = (5 * 6) + 40 / 2;

System.out.println("Result: " + result);
```

```bash
Result: 50
```

### Math Methods

Java offers many useful math methods for numbers that are commonly used in calculations.

**Absolute Value**

Get the absolute number of a number using the

```java
int number = -34;
System.out.println("Number: " + Math.abs(number));
```

```bash
Number: 34
```

**Floor**

Use the `floor` method to round any number down to the nearest whole number:

```java
double number = 856.234;
System.out.println("Number: " + Math.floor(number));
```

```bash
Number: 856.0
```

**Ceiling**

Use the `ceil` method to round any number up to the nearest whole number:

```java
double number = 856.234;
System.out.println("Number: " + Math.ceil(number));
```

```bash
Number: 857.0
```

**Natural Logarithm**

You can get the natural logarithm of a number using the `log()` function:

```java
int number = 43;
System.out.println("Number: " + Math.log(number));
```

```bash
Number: 3.7612001156935624
```

**Base-10 Logarithm**

You can get the base-10 logarithm of a number using the `log10()` function:

```java
int number = 43;
System.out.println("Number: " + Math.log10(number));
```

```bash
Number: 1.6334684555795864
```

**Maximum**

Get the highest value of a set of numbers using the `max()` function:

```java
int number1 = 53;
int number2 = 64;
System.out.println("Number: " + Math.max(number1, number2));
```

```bash
Number: 64
```

**Minimum**

Get the lowest value of a set of numbers using the `min()` function:

```java
int number1 = 53;
int number2 = 64;
System.out.println("Number: " + Math.min(number1, number2));
```

```bash
Number: 53
```

**Power**

You can calculate the value of one number risen to the power of another number using the `pow` method:

```java
int base = 5;
int exp = 4;

System.out.println("Number: " + Math.pow(base, exp));
```

```bash
Number: 625.0
```

**Random**

You can get a random number between `0` and `1` using the `random()` function:

```java
double random = Math.random();
System.out.println("Random: " + random);
```

```bash
Random: 0.5497127671041443
```

You can then manipulate this value to do other things like getting a random number between two other numbers, like so:

```java
int min = 4;
int max = 29;
double result = (Math.random() * ((max - min) + 1)) + min;
System.out.println("Result: " + result);
```

```bash
Result: 9.63955715156336
```

**Round**

You can round a number to the nearest integer with `round()`:

```java
double value = 9.63955715156336;
long result = Math.round(value);
System.out.println("Result: " + result);
```

```bash
Result: 10
```

**Square Root**

You can take the square root of a number using the `sqrt()` function:

```java
int value = 245;
double result = Math.sqrt(value);
System.out.println("Result: " + result);
```

```bash
Result: 15.652475842498529
```
