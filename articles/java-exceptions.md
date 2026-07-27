---
id: 408
title: Exceptions Handling in Java
slug: java-exceptions
excerpt: Learn how to gracefully handle and recover from critical exceptions in Java when they arise in your code.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.841Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: maven-for-beginners
displayOrder: 16
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

An exception is an event that can disrupt the execution flow. Handling exceptions is the process of responding to exceptions. Exception handling in Java allows you to handle any interruptions, allowing a program to continue or terminate gracefully.

If you don't handle it properly, it can cause your entire program to terminate and produce undesired behaviours.

### Examples of exceptions:

For example, let's say we have an algorithm that divides two numbers and calculates the Quotient. What happens when the value of `number2` is 0?

```java
class Calculator {  
    public float calculateQuotient(int number1, int number2) {  
        return number1 / number2;
    }
}

public class Main {  
    public static void main(String[] args) {  
        Calculator calculator = new Calculator();  
        //1
        System.out.println("Result: " + calculator.calculateQuotient(3000, 2));
        //2
        System.out.println("Result: " + calculator.calculateQuotient(3000, 0));
        //3
        System.out.println("Result: " + calculator.calculateQuotient(3000, 3));
    }
}
```

The above program will cause an `ArithmeticException` and the program will terminate after executing the first line.

```log
Result: 1500.0
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at exceptionhandling.Calculator.calculateQuotient(Calculator.java:6)
    at exceptionhandling.Main.main(Main.java:8)
```

This is a simple example, but when your application is running in production, you can expect other events such as: - a network connection being interrupted - attempting to access the data from a database with an invalid username/password - or, when your users enter incorrect data

In this lesson, we'll learn how to safely and gracefully handle an exception so that your program behaves as expected.

## Java Exception Types

There are mainly three types of exceptions: checked, unchecked and Error. An error is considered an unchecked exception.

![](/media/summernote/Java-Exception_Class_Hierarchy.jpg)  

### Checked Exceptions

Checked Exceptions are exceptions that the JAVA compiler requires us to handle. We have to use the try, cache block to handle the exception or throw the exception up the call stack. For example, **IOException**, **SQLException**, etc are examples of checked exceptions.

All modern Java IDEs (Integrated Development Environments) will show these errors during the compilation time.

### Unchecked Exceptions

The Java compiler ignores the unchecked exceptions and we are not forced by the compiler to handle it. Unchecked exceptions are those exceptions that extend `RuntimeException` For example, **NullPointerException**, **IllegalArgumentException**, etc are examples of unchecked exceptions.

Though the Java compiler does not force us, we can still choose to handle this exception to maintain the normal flow of the program.

### Errors

Errors are unrecoverable conditions. For example, if infinite recursion or memory leaks are considered as errors. Errors do not extend the `RuntimeException` class, but they are considered as unchecked as well.

For example, **StackOverflowError**, **OutOfMemoryError**, etc are considered as errors.

## Custom Exceptions

According to your business requirements, we may create your own custom exceptions by extending any of the exception classes from the hierarchy above. For example, we want to validate certain user inputs and throw an exception if invalid inputs are provided.

## Handling Exception in Java

Exceptions in Java are handled using the `try-catch` block.

-   The try block contains the code where exceptions might occur.
-   The `catch` block contains the code to handle the exception when it is thrown
-   The `finally` block executes no matter if an exception was thrown or not, you can use the `finally` block:

_Note_

In java, you can use a try block without a catch block but you can't use the catch block without a try block. There can be multiple catch blocks for a try block but only one finally block for a try-catch block.

Here is a flow diagram of how the try-catch block works in Java.

![](/media/summernote/Exception-handling.drawio.png)  

Let us now rewrite the above example with an exception handler.

```java
public class Main {  
    public static void main(String[] args) {  

        try {  
            Calculator calculator = new Calculator();  
            System.out.println("Result:" + calculator.calculateQuotient(3000, 2));
            System.out.println("Result:" + calculator.calculateQuotient(3000, 0));
            System.out.println("Result:" + calculator.calculateQuotient(3000, 3));  
        } catch (ArithmeticException e) {  
            System.out.println("An ArithmeticException was thrown! " + e.getMessage());  
        } finally {  
            System.out.println("Moving on!");  
        }  
    }  
}
```

Output:

```bash
An ArithmeticException was thrown!
Moving on!
```

### Multiple Exception Blocks

You can handle multiple exceptions by chaining the `catch` blocks to a single try block.

```java
try {
    // Your code goes here..
} catch(ArithmeticException e) {
    System.out.println("An ArithmeticException was thrown!");
} catch(NullPointerException e) {
    System.out.println("A NullPointerException was thrown!");
} finally {
    System.out.println("Moving on!");
}
```

When multiple `catch` blocks are provided, the matched catch block will be executed.

Since Java 7, we can catch multiple exceptions in a single catch block using the `|` pipe symbol as follows:

```java
try {
    // Your code goes here..
} catch(ArithmeticException | NullPointerException e) {
    System.out.println("An was thrown!");
} finally {
    System.out.println("Moving on!");
}
```

Though this approach is flexible and reduces code duplication, it is not recommended as it is not possible to differentiate between different types of exceptions.

### Throwing Custom Exceptions

Java allows us to create custom exceptions to provide meaningful error messages for your application. A custom exception class may extend the `Exception` class for checked exceptions or the `RuntimeException` class for unchecked exceptions.

For example, let's say we have an application that needs to import the content of a file into the database. For our application to work, we need to provide our database username and password. Given my importer application has started without passing a username or password, our app should validate and throw a custom exception before attempting to connect to the database.

In this example, we want our application to fail as it cannot process without a valid username or password. For this, we can write a custom exception class by extending the `Exception` class.

```java
public class MissingCredentialsException extends Exception {  

    public MissingCredentialsException(String message) {  
        super(message);  
    }  
}
```

Now we can validate and throw our custom exception by using the `throw` keyword:

```java
public void importContent(String username, String password) throws MissingCredentialsException {
    if(null== username || null== password) {
        throw new MissingCredentialsException("Username or password is empty!");
    }

    //TODO your code goes here.
}
```

Now that the `importContent()` throws `MissingCredentialsException` like any other exception.
