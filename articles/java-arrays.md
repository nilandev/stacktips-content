---
id: 391
title: Working with Java Arrays
slug: java-arrays
excerpt: Arrays are a list of data in Java. In this lesson, learn how to create, add elements to, remove elements from, and iterate over arrays.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.307Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-array-basics
  - java-array-sorting
  - java-array-iteration
  - java-arrays-tutorial
course: maven-for-beginners
displayOrder: 5
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

One of the most common collections in Java are arrays. Arrays can be thought of as simply a list of data, and that data can take the form of numbers, strings, objects, even arrays themselves.

### Defining an Array

**Creating** an array in Java is pretty straightforward. Let's create one that contains strings:

```java
String[] colors = { "red", "green", "blue" };
```

That right there is an array of 3 `string` elements assigned to the variable `colors`.

Arrays in Java have a set size. You can either initialize it like previously shown, or like this:

```java
String[] colors = new String[3];
```

In both cases, an array of size `3` is created.

### Retrieve Array Element

Now that we can create arrays, let's learn how to get an element back when we want to use it. Arrays in Java start counting from `0`. This means that the 3rd element in the array has an index of `2`.

With this in mind, let's get the second element from our original array:

```java
String[] colors = { "red", "green", "blue" };

System.out.println(colors[1]);
```

```bash
green
```

You can take this further and print the entire array, like this:

```java
String[] colors = { "red", "green", "blue" };

for (int i = 0; i < colors.length; i++) {
    System.out.println(colors[i]);
}
```

```bash
red
green
blue
```

We simply iterate through all the values between `0` and the length of the array to get every element in that array.

### Array Reassignment

Once you have initialized an array with values, you can modify each individual element pretty easily. Simply **reassign** the element's value like you would any variable:

```java
String[] colors = { "red", "green", "blue" };
colors[1] = "yellow"; // reassignment

for (int i = 0; i < colors.length; i++) {
    System.out.println(colors[i]);
}
```

```bash
red
yellow
blue
```

### Sorting Array

You can easily sort a Java array by calling the `sort()` method:

```java
String[] colors = { "red", "green", "blue" };
Arrays.sort(colors);

for (int i = 0; i < colors.length; i++) {
    System.out.println(colors[i]);
}
```

```bash
blue
green
red
```

Keep in mind that you might need to import the Arrays class, like this: `import java.util.Arrays;`
