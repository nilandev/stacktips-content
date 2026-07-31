---
id: 218
title: If-then and if-then-else Statements in Java
slug: if-then-and-if-then-else-statements-in-java
excerpt: If-else statement in java is used for conditional checks for decision making. You can have multiple hierarchies of if-else statements. Once any of the if or else-if condition satisfies it executes the block of statements corresponding to it
difficulty: beginners
publishedDate: "2014-04-06T09:45:18.000Z"
updatedDate: "2025-09-16T23:05:32.499Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/319/thumbnail.png
topics: 
  - java
tags:
  - java-if-else-statement
  - java-conditional-statements
  - if-else-if-example-java
course: null
displayOrder: 0
seo: 
  metaTitle: "If-Then and If-Then-Else Statements in Java Explained"
  metaDescription: "Learn how if, else-if, and else statements work in Java for conditional decision making, with a step-by-step example comparing two numbers."
  metaKeywords: null
---

If-else statement in java is used for conditional checks for decision making. You can have multiple hierarchies of if-else statements. Once any of the if or else-if condition satisfies it executes the block of statements corresponding to it. An else statement is optional. If none of if or else-if statements satisfies then else statement gets executed. Once the statements inside if-else block is executed it continue program normally with rest of the statement/block.

[![if-then and if-then-else Statements](/media/articles/319/if-then-and-if-then-else-Statements.png)](http://stacktips.com)

For example, if you want check a number N1 is greater than or less to another number N2, then you will have to use if-else block. Below example will demonstrates the usages of if else statements.

```java
import java.util.Scanner;

public class JavaTest {

    public static void main(String[] args) {

        int N1 = 10;
        System.out.println("Enter Value for N2:");
        Scanner scanner = new Scanner(System.in);
        int N2 = scanner.nextInt();

        if (N1 > N2) {
            System.out.println("N1 is greater");
        } else if (N1 == N2) {
            System.out.println("N1 and N2 are equal");
        } else {
            System.out.println("N2 is greater");
        }
    }
}
```

Well, let’s give a closure look at the above code. Here In this example we are defining two integer variables N1 and N2. N1 is predefined with value 10 and for N2 we are asking users input. Scanner is used to accept input from user. More about scanner we’ll cover in later sections of tutorials.

### Test Case1- For user entered value for N2 = 8

The fist if condition is checking whether, the value of N1 is greater than value of N2. As 10 is greater than 8, it satisfies the condition and executes the associated block of code. Here in this case it prints “N1 is greater”

### Test Case2- For user entered value for N2 = 10

It will fail the first if condition check and it will check for the else if block. The else-if block condition satisfies and it executes the associated block of code. Here in this case it prints “N1 is equals to N2”

### Test Case2- For user entered value for N2 = 20

Both if and else-if will fail for the value of N2 as 20. Then it executes the else statement and it will print “N2 is greater”
