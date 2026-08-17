---
id: 10
title: "Java Basics and Fundamentals Quiz"
slug: "java-basics-fundamentals-quiz"
excerpt: "Test your knowledge of Java basics including syntax, data types, operators, and control structures"
difficulty: beginner
duration: 20
thumbnail: "media/uploads/articles/java-basics-quiz.jpg"
topics: [java]
description: |
  Description
  
  This quiz is designed for beginners who want to test their understanding of Java fundamentals. It covers essential topics including variables, data types, operators, control flow statements, and basic OOP concepts.
  
  Each question has detailed explanations to help you understand the concepts better and improve your Java programming skills.
  
  Instructions
  
  	
  	The test contains 15 questions and has a time limit of 20 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button to submit your answers.
  	
  	
  	Do not refresh the page while taking the test.
---
# Java Basics and Fundamentals Quiz

**Difficulty:** beginner  
**Duration:** 20 minutes  
**Questions:** 15

## Description

Test your knowledge of Java basics including syntax, data types, operators, and control structures

---

## Questions

### Question 1
**What is the correct way to declare a main method in Java?**

- [x] public static void main(String[] args)
- [ ] public void main(String[] args)
- [ ] static void main(String[] args)
- [ ] public static int main(String[] args)

**Explanation:** The main method must be declared as 'public static void main(String[] args)' for the JVM to recognize it as the entry point of the application. It must be public (accessible by JVM), static (can be called without creating an instance), void (returns nothing), and accept a String array as parameter.

---

### Question 2
**Which of the following is NOT a primitive data type in Java?**

- [ ] int
- [ ] boolean
- [x] String
- [ ] char

**Explanation:** String is not a primitive data type in Java; it's a reference type (class). The eight primitive data types in Java are: byte, short, int, long, float, double, boolean, and char.

---

### Question 3
**What is the default value of a boolean variable in Java?**

- [ ] true
- [x] false
- [ ] 0
- [ ] null

**Explanation:** The default value of a boolean instance variable in Java is false. However, local boolean variables must be explicitly initialized before use.

---

### Question 4
**Which keyword is used to inherit a class in Java?**

- [ ] implements
- [x] extends
- [ ] inherits
- [ ] super

**Explanation:** The 'extends' keyword is used to inherit a class in Java. For example: 'class Dog extends Animal'. Java supports single inheritance for classes, meaning a class can extend only one parent class.

---

### Question 5
**What is the size of an int variable in Java?**

- [ ] 16 bits
- [x] 32 bits
- [ ] 64 bits
- [ ] Platform dependent

**Explanation:** An int in Java is always 32 bits (4 bytes), regardless of the platform. This is one of the key features of Java - platform independence. The int type can store values from -2,147,483,648 to 2,147,483,647.

---

### Question 6
**Which loop is guaranteed to execute at least once?**

- [ ] for loop
- [ ] while loop
- [x] do-while loop
- [ ] All of the above

**Explanation:** The do-while loop is guaranteed to execute at least once because the condition is checked after the loop body executes. In contrast, for and while loops check the condition before executing the body, so they might not execute at all.

---

### Question 7
**What is the output of: System.out.println(10 + 20 + "Hello");**

- [ ] 1020Hello
- [x] 30Hello
- [ ] Hello1020
- [ ] Hello30

**Explanation:** The output is '30Hello'. Java evaluates expressions from left to right. First, 10 + 20 = 30 (both are integers), then 30 + 'Hello' concatenates to '30Hello' (when adding a number and string, the number is converted to string).

---

### Question 8
**Which access modifier makes a member accessible only within its own class?**

- [ ] public
- [x] private
- [ ] protected
- [ ] default

**Explanation:** The 'private' access modifier restricts access to members only within the same class. This is the most restrictive access level and is a key principle of encapsulation in object-oriented programming.

---

### Question 9
**What is the correct way to create an array in Java?**

- [ ] int arr[] = new int[5];
- [ ] int[] arr = new int[5];
- [x] Both A and B
- [ ] array int arr[5];

**Explanation:** Both 'int[] arr = new int[5];' and 'int arr[] = new int[5];' are correct ways to declare and initialize an array in Java. The first syntax is preferred as it clearly shows that the type is 'array of int'.

---

### Question 10
**Which method is used to compare two strings in Java?**

- [ ] ==
- [x] equals()
- [ ] compare()
- [ ] compareTo()

**Explanation:** The equals() method compares the content of two strings, while == compares object references. For string comparison, always use equals() or equalsIgnoreCase() method to compare the actual content.

---

### Question 11
**What does the 'static' keyword mean in Java?**

- [x] The member belongs to the class, not instances
- [ ] The member cannot be changed
- [ ] The member is private
- [ ] The member is constant

**Explanation:** The 'static' keyword indicates that a member belongs to the class itself rather than to instances of the class. Static members are shared among all instances and can be accessed without creating an object of the class.

---

### Question 12
**Which exception is thrown when dividing by zero in Java?**

- [ ] NullPointerException
- [x] ArithmeticException
- [ ] NumberFormatException
- [ ] IllegalArgumentException

**Explanation:** When you divide an integer by zero in Java, it throws an ArithmeticException. However, dividing a floating-point number by zero results in Infinity or NaN (Not a Number), not an exception.

---

### Question 13
**What is method overloading in Java?**

- [x] Having multiple methods with the same name but different parameters
- [ ] Having multiple methods with the same name and same parameters
- [ ] Redefining a method in a subclass
- [ ] None of the above

**Explanation:** Method overloading allows a class to have multiple methods with the same name but different parameters (different number of parameters, different types, or different order). The return type alone is not sufficient to overload a method.

---

### Question 14
**Which package is automatically imported in every Java program?**

- [ ] java.util
- [ ] java.io
- [x] java.lang
- [ ] java.net

**Explanation:** The java.lang package is automatically imported in every Java program. It contains fundamental classes like String, System, Integer, Math, etc. You don't need to explicitly import this package.

---

### Question 15
**What is the purpose of the 'final' keyword when applied to a variable?**

- [ ] The variable cannot be inherited
- [x] The variable cannot be changed after initialization
- [ ] The variable is static
- [ ] The variable is private

**Explanation:** When the 'final' keyword is applied to a variable, it makes the variable a constant - its value cannot be changed once initialized. For reference variables, the reference cannot be changed, but the object's state can still be modified.

---