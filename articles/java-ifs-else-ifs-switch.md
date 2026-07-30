---
id: 386
title: Decision Making in Java using Ifs, Else Ifs, Switch
slug: java-ifs-else-ifs-switch
excerpt: Logic and conditionals are a fundamental part of Java and is how your program can make decisions on what to do.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.195Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: maven-for-beginners
displayOrder: 6
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

When writing code in any programming language, you will need to account for situations where you need to decide on a path to take given the value of the variables at that point in time. Your program needs to compare values to each other to decide what code to run next. This is called logic.

Let's look at the comparison operators at our disposal in Java!

### Equality Operator

The **equality operator** is the most basic of comparison operators. If the two values being tested are the same, the result will be `true`, otherwise, the result will be `false`.

To use this operator, use **two equal signs**:

```java
System.out.println(3 == 4);
System.out.println(6 == 6);
System.out.println(43 == 454);
```

```bash
false
true
false
```

If you want to check strings for equality, use the `equals()` method, like this:

```java
boolean equal = string1.equals(string2);
```

### Inequality Operator

The inequality operator is the exact opposite of the equality operator. If the two values being tested are the same, the result will be `false`. Otherwise, if the values are different, the result will be `true`.

To use this operator, use an exclamation point, followed by an equal sign.

```java
System.out.println(3 != 4);
System.out.println(6 != 6);
System.out.println(43 != 454);
```

```bash
true
false
true
```

### Greater Than and Less Than Operators

You can check if one value is greater than or less than another using the greater than and less than operators.

This is how you use them:

```java
System.out.println(3 > 4);
System.out.println(6 < 6);
System.out.println(43 < 454);
```

```bash
false
false
true
```

### Or Equal To Operators

In the case where you need to check either that the values are equal or that one is less than/greater than another value, there is a specific operator for just that.

This is how you can use the greater than or equal to operator and the less than or equal to operators:

```java
System.out.println(3 >= 4);
System.out.println(6 <= 6);
System.out.println(43 <= 454);
```

```bash
false
true
true
```

### Conditionals

With the ability to return `true` or `false` now, we can now try and act on these values. We can do this by utilizing what are called conditionals.

#### If Conditional

Using `if` is very simple. If the condition inside is `true` then the code block will run. If it is `false`, the code block will not run.

Let's say if you eat 3 burgers or more, you win a competition.

```java
int burgersEaten = 4;

if (burgersEaten >= 3) {
    System.out.println("You've won the competition!");
}
```

```bash
You've won the competition!
```

But watch what happens if you do not eat at least `3` burgers:

```java
int burgersEaten = 2;

if (burgersEaten >= 3) {
    System.out.println("You've won the competition!");
}
```

Nothing was printed. That is because the condition inside the `if` block resulted in `false`. The code block was skipped entirely and thus the line to print it never executed.

#### Else

With the `else` keyword, you can run block of code if the accompanying `if` condition returned `false`.

Let's see how this looks in action:

```java
int burgersEaten = 2;

if (burgersEaten >= 3) {
    System.out.println("You've won the competition!");
} else {
    System.out.println("You've lost the competition. :(");
}
```

```bash
You've lost the competition. :(
```

Simply put, the because the first `if` returned `false`, the first block of code was skipped, leaving the second block of code to run.

Now what if you wanted to have multiple code paths instead?

#### Else If

This is where `else if` comes in to play. These keywords are sandwiched after an `if` and before the `else`:

```java
int burgersEaten = 2;

if (burgersEaten >= 3) {
    System.out.println("You've won the competition!");
} else if (burgersEaten == 2) {
    System.out.println("You almost won the competition!");
} else if (burgersEaten == 1) {
    System.out.println("You gave it a good try!");
} else {
    System.out.println("You didn't come close. :(");
}
```

```bash
You almost won the competition!
```

When you use `if` and `else if`, the first block of code where the condition is `true` will run, and the rest will be ignored entirely, so order does matter!

#### Ternary Operator

The ternary operator is a shorthand way to represent an `if/else` block. It checks a condition and if `true`, returns the left side, otherwise it will return the right side.

```java
int number = 45;
boolean isEven = number % 2 == 0 ? true : false;

System.out.println("isEven: " + isEven);
```

```bash
false
```

Ternary operators are really useful for when you want to condense an entire conditional into a single line.

### Switch Statement

You can use a switch statement whenever you want to check for many different possible values of something, and run code if there is a match. They are similar to using `else if` except they can sometimes be more concise and cleaner.

Let's look at one:

```java
int number = 4;
switch (number) {
    case 1:
        System.out.println("one");
        break;
    case 2:
        System.out.println("two");
        break;
    case 3:
        System.out.println("three");
        break;
    case 4:
        System.out.println("four");
        break;
    case 5:
        System.out.println("five");
        break;
}
```

```bash
four
```

The basic syntax is simple. You put what you want to switch on after the `switch` keyword, then you list all your cases below. If there is a match, the code inside will be executed. Once there is a match, the `break` ensures that once the block of code is run, no more checks are performed.

### Logical Operators

So far we have seen how to check a single condition and then do something with the result. In the real world, you will often times need to combine the results of multiple conditions before you can make your decision.

To combine the results of more than one condition, you will need to use a **logical operator**.

#### And (&&)

The and operator, will only result in `true` if both conditions are `true`:

```java
boolean isCold = true;
boolean hasJacket = true;

if (isCold && hasJacket) {
    System.out.println("I will put on my jacket since I am cold!");
}
```

```bash
I will put on my jacket since I am cold!
```

Since both of the conditions were `true`, the code block executed.

#### Or (||)

Sometimes you don't need both conditions to be `true` and instead are okay with just one of the two being `true`. This is where the **or** logical operator comes in to play.

```java
boolean thereAreTacos = true;
boolean thereIsPizza = false;

if (thereAreTacos || thereIsPizza) {
    System.out.println("I'm glad there's good food here!");
}
```

```text
I'm glad there's good food here!
```

Even though in this case there was no pizza in the house, because there were still tacos, the print statement executed and you were very happy as a result. ??????

#### Not (!)

The last logical operator we'll take a look at is the **not** operator. This is used when you simply want to negate the value of the condition.

Let's look at an example:

```java
boolean thereAreTacos = false;
boolean thereIsPizza = false;

boolean thereIsGoodFood = thereAreTacos || thereIsPizza;

if (!thereIsGoodFood) {
    System.out.println("There is no good food here :(");
}
```

```text
There is no good food here :(
```

In this case, there were neither tacos nor pizza. That made `thereIsGoodFood` to be `false`. However, since we used the not operator to negate it, the entire condition was `true` and we were able to get the print statement to execute!
