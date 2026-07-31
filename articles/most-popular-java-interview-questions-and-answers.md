---
id: 353
title: Most Popular Java Interview Questions and Answers
slug: most-popular-java-interview-questions-and-answers
excerpt: A comprehensive list of the most important and commonly asked Java interview questions and answers with detailed explanations.
difficulty: beginner
publishedDate: "2024-09-29T10:04:36.000Z"
updatedDate: "2025-09-16T23:05:37.520Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-interview-questions
  - java-default-methods-interface
  - java-functional-interface
  - stringbuilder-vs-stringbuffer
  - java-serialization
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

### 1\. What is the difference between the comparison done by the `equals()` method and the `==` operator?

In Java, the `equals()` method is used for comparing the contents of two string objects. It returns **true** if the two have the same value while the `==` operator compares the references of two string objects.

In the following example, `equals()` returns true as the two string objects have the same values. However == operator returns false as both string objects are referencing different objects:

```java
public class EqualsTest {

    public static void main(String args[]) {
        String str1 = new String("Hello World");
        String str2 = new String("Hello World");

        //Reference comparison
        System.out.println(s1 == s2);

        //Content comparison
        System.out.println(s1.equals(s2));

        // integer-type
        System.out.println(10 == 10);

        // char-type
        System.out.println('a' == 'a');
    }

}
```

Output

```text
false
true
true
true
```

### 2\. What is the output of the following program?

```java
public class Test {

    public void print(int a, long b) {
        System.out.println("Method 1");
    }

    public void print(long a, int b) {
        System.out.println("Method 2");
    }

    public static void main(String[] args) {
        Test obj = new Test();
        obj.print(5, 10);
    }

}
```

The above program will output:

```text
Method 1
```

This is because Java will automatically promote smaller numeric types to larger numeric types as needed. In this case, the integer literal `5` can be automatically promoted to either an `int` or a `long`, and the integer literal `10` can also be promoted to either an `int` or a `long`.

### 3\. How to Create an Infinite Loop in Java?

Infinite loops are those loops that run infinitely without any breaking conditions. Some examples of consciously declaring an infinite loop are:

Using For Loop:

```java
for (;;)
{
   // Business logic
   // Any break logic
}
```

Using while loop:

```java
while(true){
   // Business logic
   // Any break logic
}
```

Using do-while loop:

```java
do{
   // Business logic
   // Any break logic
} while(true);
```

### 4\. Explain the Diamond Problem. How does Java overcome this problem?

The Diamond Problem is a situation where a class inherits from two classes that have a common ancestor. This creates ambiguity in the path through which a method or a member variable is inherited because there are 2 possible paths to follow up the inheritance hierarchy to the common ancestor.

Java does not support multiple inheritance for classes, meaning a class cannot extend more than one class. However, it supports multiple inheritance of types through the interface mechanism.

### 5\. What is a `default` method in the interface? Is it possible to have a method definition in the Java interface?

Therefore, to overcome this issue, Java 8 has introduced the concept of default methods (Also known as Extension Methods) which allow the interfaces to have methods with implementation without affecting the classes that implement the interface.

You can do this by using the `default` keyword.

```java
interface Vehicle {
    String speedUp();
    String slowDown();

    default String alarmOn() {
        return "Turning the alarm on.";
    }

    default String alarmOff() {
        return "Turning the alarm off.";
    }
}
```

Read more about [default methods for interface](https://stacktips.com/articles/default-methods-for-interfaces-in-java8) here.

### 6\. Explain how Java deals with the diamond problem due to the `default` method in the interface.

With the introduction of Default methods in interfaces in Java 8, the potential for a diamond problem arose. Default methods allow an interface to provide a default implementation for methods, which means a class can inherit concrete methods from multiple interfaces.

There are two ways to address this issue in Java:

1.  **Explicit Implementation:** If a class implements multiple interfaces that define the same default method, the class must explicitly provide an implementation for that method to resolve the conflict.
2.  **Inheritance Rule:** If a class inherits a method from a superclass, it takes precedence over any default methods provided by interfaces.

```java
interface Interface1 {
    default void hello() {
        System.out.println("Hello from Interface1");
    }
}

interface Interface2 {
    default void hello() {
        System.out.println("Hello from Interface2");
    }
}

public class Child implements Interface1, Interface2 {
    @Override
    public void hello() {
        System.out.println("inside Child class hello method");

        // Calling Interface1's default method
        Interface1.super.hello();
    }

    public static void main(String[] args) {
        Child obj = new Child();

        // This will call the Child class hello method
        obj.hello();
    }
}
```

### 7\. What is Functional Interfaces?

A functional interface must contain exactly one abstract method declaration. Each lambda expression of that type will be matched to this abstract method.

Since default methods are not abstract you're free to add default methods to your functional interface. We can use arbitrary interfaces as lambda expressions as long as the interface only contains one abstract method.

To ensure your interface meets the requirements, you can optionally add the `@FunctionalInterface` annotation. The compiler is aware of this annotation and throws a compiler error as you try to add a second abstract method declaration to the interface.

```java
@FunctionalInterface
interface Converter<F, T> {
    T convert(F from);
}
```

This can be used as

```java
Converter<String, Integer> converter = (from) -> Integer.valueOf(from);
Integer converted = converter.convert("123");
System.out.println(converted);
```

### 8\. Can Abstract Class in Java have Constructors?

Yes, abstract classes in Java can have constructors.

While it may seem counterintuitive at first, since abstract classes cannot be instantiated directly, these constructors can be used to initialize the fields and can be called during the instantiation of its concrete subclass.

Here's how abstract class constructors are used:

```java
abstract class MyAbstractClass {

    public int a;
    public int b;

    public MyAbstractClass(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public void print() {
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}

public class AbstractDemo extends MyAbstractClass {

    public AbstractDemo(int x, int y) {
        super(x, y);

    }

    public static void main(String[] args) {
        AbstractDemo obj = new AbstractDemo(5, 10);
        obj.print();
    }

}
```

When a concrete subclass of an abstract class is instantiated, the constructor of the abstract class is called first, either implicitly or through the use of `super()` by passing arguments.

This process is known as constructor chaining and ensures that the initialization behaviour defined in the abstract class's constructor is executed.

### 9\. Why is the Main Method Static in Java?

The main method is always static because static members are those methods that belong to the classes, not to an individual object. So if the main method will not be static then for every object, it will be available to all objects which is not acceptable to JVM. JVM calls the main method based on the class name itself. Not by creating the object.

There must be only 1 main method in the Java program as the execution starts from the main method.

### 10\. Explain Java Streams?

A `java.util.Stream` represents a sequence of elements on which one or more operations can be performed. Stream operations are either intermediate or terminal.

While terminal operations return a result of a certain type, intermediate operations return the stream itself so you can chain multiple method calls in a row.

Streams are created on a source, e.g. a `java.util.Collection` like lists or sets (maps are not supported). Stream operations can either be executed sequentially or parallelly. Streams can be created either by calling `Collection.stream()` or `Collection.parallelStream()` method.

The following sections explain the most common stream operations.

```java
List<String> listItems = new ArrayList<>();
listItems.add("item1");
listItems.add("item3");
listItems.add("item2");

listItems
    .stream()
    .filter((s) -> s.startsWith("item3"))
    .forEach(System.out::println);
```

### 11\. How would you differentiate between a `String`, `StringBuffer`, and a `StringBuilder`?

A `String` is **immutable**, whereas both the `StringBuilder` and `StringBuffer` are **mutable**. In string, the String pool serves as the storage area. For StringBuilder and StringBuffer, memory is allocated heap memory storage area.

It is quite slow to work with a String. However, StringBuilder is the fastest in performing operations. The speed of a StringBuffer is more than a String and less than a StringBuilder. (For example, appending a character is fastest in StringBuilder and very slow in String because a new memory is required for the new String with appended character.)

```java
// String
String first = "InterviewBit";
String second = new String("InterviewBit");

// StringBuffer
StringBuffer third = new StringBuffer("InterviewBit");

// StringBuilder
StringBuilder fourth = new StringBuilder("InterviewBit");
```

### 12\. Explain the output of the following program related to the `equals()` method of StringBuilder.

```java
public class Demo {

    public static void main(String[] args) {

        StringBuilder sb1 = new StringBuilder("hello");
        StringBuilder sb2 = new StringBuilder("hello");

        if(sb1.equals(sb2)) {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }

    }
}
```

The output of the given Java program will be `Not Equal`.

This is because the `equals()` method in the `StringBuilder` class does not override the `equals()` method from the `Object` class. In the `Object` class, the `equals()` method checks for reference equality, meaning it returns `true` if and only if both references point to the same object in memory.

Since `sb1` and `sb2` are references to two different `StringBuilder` objects even though they contain the same sequence of characters, the `equals()` method inherited from the `Object` class will return `false`.

### 13\. What is method overriding? What restrictions are in place on method overriding?

When a class defines a method using the same name, same return type, and same argument list as that of a method in its superclass, it is said to be overridden.

When the method is invoked for an object, it is the overridden method that is called and not the method definition from the superclass.

Following are some of the restrictions placed on method overriding: - Overridden methods must have the same name, argument list, and return type. - The overriding method may not limit the access of the method it overrides. Methods may be overridden to be more public, not more private. - The overriding method may not throw any exceptions that may not be thrown by the overridden method.

### 14\. What is the Difference Between an Inner Class and a Sub-Class?

An Inner class is a class that is nested within another class. An Inner class has access rights to the class which is nesting it and it can access all variables and methods defined in the outer class.

A sub-class is a class that inherits from another class called a superclass. Sub-class can access all public and protected methods and fields of its superclass.

### 15\. What are the various access specifiers used for class definition in Java?

Access specifiers are the keywords used before a class name that defines the access scope. The types of access specifiers for classes are:

-   **Public:** Class, Method, and Field are accessible from anywhere.
-   **Protected:** Method, Field can be accessed from the same class to which they belong or from the sub-classes, and the class of the same package, but not from outside.
-   **Default:** Method, Field, and class can be accessed only from the same package and not from outside of its native package.
-   **Private:** Method, Field can be accessed from the same class to which they belong.

### 16\. Explain encapsulation in OOPS

Encapsulation is a concept in Object Oriented Programming (OOP) for combining properties and methods in a single unit.

Encapsulation helps programmers to follow a modular approach for software development as each object has its own set of methods and variables and serves its functions independently of other objects. Encapsulation also serves the data hiding purpose.

### 17\. What is a Singleton class? Give a Practical example of when should you use Singleton class.

Singleton design pattern belongs to the creational family of patterns that governs the instantiation process. This pattern ensures at most one instance of a class is ever created through the application lifecycle.

Following are some of the examples where Singleton classes are best suited:

-   **Project Configuration**: A class that reads your project configuration can be made Singleton. By making this singleton, you are allowing global access for all classes in your application. If the project configs are stored in a file, it just reads once and holds on the application cache. You don’t have to read the file multiple times.
-   **Application Log:** The logger will be used everywhere in your application. It must be initialized once and used everywhere.
-   **Analytics and Reporting:** If you are using some kind of data analysis tool like Google Analytics, you will notice that they are designed to be a singleton. It initializes once and is used everywhere for each user action.

For the step-by-step guide to implement singleton class visit [Singleton Design Pattern](https://stacktips.com/articles/singleton-design-pattern-in-java).

### 18\. What is the difference between continue and break statement?

The `break` and `continue` are two important keywords used in the loops. When a break keyword is used in a loop, the loop is broken instantly while when the continue keyword is used, the current iteration is broken and the loop continues with the next iteration.

In the below example, the Loop is broken when the counter reaches 4.

```java
for (counter = 0; counter< 10; counter++)
    system.out.println(counter);

    if (counter == 4) {
        break;
    }
}
```

In the below example when the counter reaches 4, the loop jumps to the next iteration and any statements after the continue keyword are skipped for the current iteration.

```java
for (counter = 0; counter < 10; counter++)
    system.out.println(counter);
    if (counter == 4) {
        continue;
    }
}
```

### 19\. What is the difference between double and float variables in Java?

In Java, float takes 4 bytes in memory while Double takes 8 bytes in memory. Float is a single-precision floating-point decimal number while Double is a double-precision decimal number.

### 20\. What is the Final Keyword in Java?

A variable declared with the final keyword is a constant in Java. Value can be assigned only once and after the assignment, the value of a constant can’t be changed.

For example, a constant with the name `MAX_LIMIT` is declared and assigned value:

```java
private final int MAX_LIMIT=100
```

When a method is declared as final, it can NOT be overridden by the subclasses. This method is faster than any other method because they are resolved at the complied time.

When a class is declared as final, it cannot be inherited. Example String, Integer, and other wrapper classes.

### 21\. Can we declare a class as Abstract without having any abstract method?

Yes, we can create an abstract class by using the abstract keywords before the class names even if it doesn’t have any abstract method. However, if a class has even one abstract method, it must be declared as abstract otherwise it will give an error.

### 22\. What is the difference between an abstract class and an interface in Java?

The primary difference between an abstract class and an interface is that an interface can only possess a declaration of public static methods with no concrete implementation while an abstract class can have members with any access specifiers (public, private, etc) with or without a concrete implementation.

Another key difference in the use of abstract classes and interfaces is that a class that implements an interface must implement all the methods of the interface while a class that inherits from an abstract class doesn’t require the implementation of all the methods of its super class.

A class can implement multiple interfaces but it can extend only one abstract class.

### 23\. Can we declare the main method of our class as private?

In Java, the main method must be public static to run any application correctly. If the main method is declared as private, the developer won’t get any compilation error however, it will not get executed and will give a runtime error.

### 24\. How we can execute any code even before the main method?

If we want to execute any statements before even the creation of objects at the load time of the class, we can use a static block of code in the class. Any statements inside this static block of code will get executed once at the time of loading the class even before the creation of objects in the main method.

### 25\. What is a Serializable interface?

Serializable is a marker interface. When an object has to be transferred over a network ( typically through RMI or EJB) or persists the state of an object to a file, the object Class needs to implement a Serializable interface.

Implementing this interface will allow the object converted into a byte stream and transferred over a network.

### 26\. What is the use of `serialVersionUID`?

During object serialization, the default Java serialization mechanism writes the metadata about the object, which includes the class name, field names, types, and superclass. This class definition is stored as a part of the serialized object. This stored metadata enables the deserialization process to reconstitute the objects and map the stream data into the class attributes with the appropriate type every time an object is serialized the Java serialization mechanism automatically computes a hash value.

ObjectStreamClass’s computeSerialVersionUID() method passes the class name, sorted member names, modifiers, and interfaces to the secure hash algorithm (SHA), which returns a hash value. The serialVersionUID is also called suid.

So when the serialized object is retrieved, the JVM first evaluates the suid of the serialized class and compares the suid value with the one of the objects. If the suid values match then the object is said to be compatible with the class and hence it is de-serialized. If not InvalidClassException exception is thrown.

Changes to a serializable class can be compatible or incompatible.

### 27\. Explain the difference between JDK, JRE, and JVM.

JVM (Java Virtual Machine): - The runtime engine that executes Java bytecode. It is platform-dependent, meaning different OS/hardware needs different JVM - It also provides memory management and security JRE (Java Runtime Environment): - JRE Contains the JVM and includes core libraries and other components to run Java applications - It is required for running compiled Java programs JDK (Java Development Kit): - JDK contains the JRE. It includes development tools like compiler, debugger, and documentation - You need JDK for developing Java applications

### 28\. How does garbage collection work in Java?

Garbage collection in Java is an automatic memory management process that frees up memory occupied by objects that are no longer in use. It identifies which objects in memory are no longer reachable and periodically removes the unreachable objects from memory.

Garbage collection (GC) helps to prevent memory leaks and manage the limited memory available in Java applications. The typical GC process uses a **Mark-and-Sweep** algorithm.

### 29\. Explain the differences between checked and unchecked exceptions

| Checked Exceptions | Unchecked exceptions |
| --- | --- |
| Checked Exceptions are exceptions that the JAVA compiler requires us to handle. We have to use the try, cache block to handle the exception or throw the exception up the call stack. | The Java compiler ignores the unchecked exceptions and we are not forced by the compiler to handle it. Unchecked exceptions are those exceptions that extend RuntimeException |
| For example, IOException, SQLException, etc are examples of checked exceptions. | For example, NullPointerException, IllegalArgumentException, etc are examples of unchecked exceptions. |
| All modern Java IDEs (Integrated Development Environments) will show these errors during the compilation time. | Though the Java compiler does not force us, we can still choose to handle this exception to maintain the normal flow of the program. |

Read more about [exception handling in Java](https://stacktips.com/courses/getting-started-with-java/java-exceptions) here.

### 30\. What is the purpose of the `transient` keyword in Java?

Serialization is the process of converting an object into a byte stream so it can be saved to a file or transferred over a network. Deserialization is the reverse process, where the byte stream is converted back into an object.

The `transient` keyword in Java is used to mark fields in a class that should **not be serialized** when the class is converted into a byte stream during serialization. When an object is serialized to write to a file or sent over a network, fields marked as `transient` are excluded from the serialization process.

Checkout working example [here](https://github.com/StackTipsLab/core-java-tutorials/tree/main/src/com/stacktips/transient_field)
