---
id: 255
title: Java Exception Tutorial
slug: java-exceptions-tutorial
excerpt: Exception is an event during program execution that prevents the program from continuing normally.
difficulty: beginners
publishedDate: "2014-02-22T15:20:12.000Z"
updatedDate: "2025-09-16T23:05:32.930Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/332/thumbnail.png
topics: 
  - java
tags:
  - checked-vs-unchecked-exceptions-java
  - java-exception-hierarchy
  - try-catch-finally-java
  - java-error-handling
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## What is a Exception?

Exception is an event during program execution that prevents the program from continuing normally. Exception is an error condition that changes the normal flow of control in a program. It is a signal that some unexpected condition has occurred in the program. Java classifies exceptions as Checked, Unchecked and Errors

### Un-Checked Exception

Unchecked exceptions are usually caused by incorrect program code or logic such as Invalid parameters passed to a method. Unchecked exceptions are subclass of RuntimeException class. The application is not required to handle this exceptions as these should be recovered by correcting the program code. Example of unchecked exceptions are NumberFormatException, IllegalArgumentException.

### Checked Exception

Checked Exception in Java is all those Exception which requires being catches and handled during compile time. If Compiler doesn’t see try or catch block handling a Checked Exception, it throws Compilation error. All exceptions except RuntimeException class is under checked exceptions category.

## Errors

Errors represent critical errors, once occurs the system is not expected to recover from. Errors can be generated from mistake in program logic or design. Example OutOfMemoryError, StackOverFlowError, etc.

## Exception Class Hierarchy

[![exception-hierarchy-in-java](/media/articles/332/exception-hierarchy-in-java.png)](http://stacktips.com)

## Handling Exception

Java exception handling is built around throw-catch paradigm. To throw means an exception has occurred and catch means the exception is handled. If the exception is not caught then it will be propagated to the call stack until it is handled by the program. The statement or code that is proven to generate checked exception should be handled by program.

-   Exception handling is done using try-catch block. Try block contains the code that might throw an exception. A try block can contain one or more lines of code. For each exception type a individual catch block will be specified. Instead of writing multiple catch block for different exceptions, we can write the generic exception handler in catch block using super class “Exception” type of object.
-   In the finally block you write the code that will be run whether or not an error has occurred. However this is optional. For example, if you get and exception while executing an database query, finally will be used to close the database connection.
-   If the exception is not handled, it can be propagated to the call stack. In a method if we are not handling exception using try/catch block we can declare the method using “throws” keyword.
-   A statement that might generate a checked exception that is declared by the method is considered “handled” and doesn’t need any try-catch block.
-   You may explicitly throw an checked exception using “throw” keyword.
