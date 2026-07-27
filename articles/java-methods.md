---
id: 388
title: Working with Methods in Java
slug: java-methods
excerpt: Methods in Java allow you to reuse a code block and reduce code repetition which ensures cleaner and more modular code.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.255Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 4
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Methods, sometimes called functions, are blocks or sections of code, usually named, that can be executed over and over again. methods are great for reducing duplication of code, improving readability, and reducing complexity. Divide up larger chunks of code so that they become easier to manage.

### Creating a method

Let's look at a method that simply prints out a greeting:

```java
public static void introduction() {
    System.out.println("Hello, my name is Jackie.");
}
```

You can ignore what `public` and `static` means for now. The important part to take away is the return type is `void`. Methods can return things back to you, like a `String` or `int`, but in this case, we are only printing some text, so we can set the method to return nothing.

Finally we just have the actual code that is being run, the print statement.

### Invoking a method

Now that we have defined our method, we just need to invoke or call it. This causes the method to execute:

```java
public class Main {

    public static void main(String[] args) {
        introduction();
    }

    public static void introduction() {
        System.out.println("Hello, my name is Jackie.");
    }
}
```

```bash
Hello, my name is Jackie.
```

This is cool and all, but what if you wanted to customize the name instead of it being hardcoded?

### Parameters

Parameters are pieces of data you can pass into a method that you can then use to perform that method's task. In this case, we want to customize the name that appears, so let's add the name as a parameter:

```java
public class Main {

    public static void main(String[] args) {
        introduction("Nia");
    }

    public static void introduction(String name) {
        System.out.println("Hello, my name is " + name + ".");
    }
}
```

```bash
Hello, my name is Nia.
```

### Return Types

As mentioned before, methods can optionally return something back to you. In Java, `void` makes it so that it returns nothing, but setting it with a type makes it return that type.

Let's look at the getting the area of a triangle:

```java
public class Main {

    public static void main(String[] args) {
        int sideLength = 3;
        int area = getAreaOfSquare(sideLength);

        System.out.println(area);
    }

    public static int getAreaOfSquare(int side) {
        return side * side;
    }
}
```

```bash
9
```

We created a method called `getAreaOfSquare()` that takes the side length of a square. It then calculates the area and returns it as an `int`. Now we use that value to set the value of the variable named `area` which we then print out.
