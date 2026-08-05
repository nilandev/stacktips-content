---
id: 11
title: "Java Intermediate - OOP and Collections Quiz"
slug: "java-intermediate-oop-collections-quiz"
excerpt: "Test your knowledge of Object-Oriented Programming concepts and Java Collections Framework"
difficulty: intermediate
duration: 25
thumbnail: "media/uploads/articles/java-intermediate-quiz.jpg"
topics: [java]
description: |
  Description
  
  This intermediate-level quiz covers advanced OOP concepts including inheritance, polymorphism, abstraction, encapsulation, and the Java Collections Framework. Perfect for developers with basic Java knowledge looking to level up their skills.
  
  Topics covered include: abstract classes, interfaces, ArrayList, HashMap, LinkedList, generics, and more.
  
  Instructions
  
  	
  	The test contains 15 questions and has a time limit of 25 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button to submit your answers.
  	
  	
  	Do not refresh the page while taking the test.
---
# Java Intermediate - OOP and Collections Quiz

**Difficulty:** intermediate  
**Duration:** 25 minutes  
**Questions:** 15

## Description

Test your knowledge of Object-Oriented Programming concepts and Java Collections Framework

---

## Questions

### Question 1
**What is the main difference between an abstract class and an interface in Java?**

- [x] Abstract classes can have constructors, interfaces cannot
- [ ] Interfaces can have constructors, abstract classes cannot
- [ ] There is no difference
- [ ] Abstract classes cannot have methods

**Explanation:** An abstract class can have both abstract and concrete methods, constructors, and instance variables. An interface (before Java 8) could only have abstract methods and constants. From Java 8+, interfaces can have default and static methods, but still cannot have constructors or instance variables.

---

### Question 2
**Which collection allows duplicate elements and maintains insertion order?**

- [ ] HashSet
- [x] ArrayList
- [ ] TreeMap
- [ ] Queue

**Explanation:** ArrayList allows duplicate elements and maintains the insertion order. It's part of the List interface which guarantees ordered elements. HashSet doesn't allow duplicates, TreeMap is sorted, and Queue has a different purpose (FIFO operations).

---

### Question 3
**What is the time complexity for adding an element to a HashMap?**

- [x] O(1) average case
- [ ] O(n)
- [ ] O(log n)
- [ ] O(n²)

**Explanation:** HashMap provides O(1) average time complexity for basic operations like get() and put(), assuming the hash function disperses elements properly. In the worst case (many collisions), it can degrade to O(n), but Java 8+ uses tree-based structure for heavily collided buckets, making it O(log n) in worst case.

---

### Question 4
**What will happen if you try to add a null key to a TreeMap?**

- [ ] It will be added successfully
- [x] NullPointerException will be thrown
- [ ] IllegalArgumentException will be thrown
- [ ] The null key will be ignored

**Explanation:** TreeMap does not allow null keys because it needs to compare keys for ordering (it's a sorted map). Adding a null key will throw a NullPointerException. However, TreeMap can have null values.

---

### Question 5
**Which of the following is true about method overriding?**

- [x] The method in the child class must have the same signature as the parent
- [ ] The method in the child class can have different parameters
- [ ] Private methods can be overridden
- [ ] Static methods can be overridden

**Explanation:** In method overriding, the overriding method in the subclass must have the same signature (name and parameters) as the parent method. However, it can have a more accessible access modifier (e.g., changing from protected to public) but not less accessible. The return type must be the same or a covariant type.

---

### Question 6
**What is the difference between ArrayList and LinkedList?**

- [x] ArrayList is faster for random access
- [ ] LinkedList is faster for random access
- [ ] ArrayList doesn't allow null elements
- [ ] There is no difference

**Explanation:** ArrayList is backed by a dynamic array, providing fast random access (O(1)) but slower insertions/deletions in the middle (O(n)). LinkedList is a doubly-linked list, providing faster insertions/deletions (O(1) when you have the reference) but slower random access (O(n)).

---

### Question 7
**What is the purpose of the 'super' keyword in Java?**

- [ ] To refer to the current object
- [x] To refer to the parent class
- [ ] To create a new object
- [ ] To define static members

**Explanation:** The 'super' keyword is used to refer to the immediate parent class. It can be used to call parent class methods, constructors, or access parent class variables. This is especially useful when you need to access overridden methods or hidden fields.

---

### Question 8
**Which interface should a class implement to be used as a key in a HashMap?**

- [x] The class should override equals() and hashCode()
- [ ] Serializable
- [ ] Cloneable
- [ ] Iterator

**Explanation:** While not strictly required to implement an interface, a class used as a HashMap key should properly override equals() and hashCode() methods. However, if we're talking about comparability for TreeMap, it would need to implement Comparable or provide a Comparator.

---

### Question 9
**What is a marker interface in Java?**

- [x] An interface with no methods
- [ ] An interface with only one method
- [ ] An interface with static methods
- [ ] An interface that cannot be implemented

**Explanation:** A marker interface is an interface with no methods or constants. It's used to mark or tag a class for some special behavior. Examples include Serializable, Cloneable, and Remote. They provide metadata to the JVM or compiler.

---

### Question 10
**What is the output of: List<String> list = Arrays.asList("A", "B"); list.add("C");**

- [ ] Compiles and runs successfully
- [x] Throws UnsupportedOperationException
- [ ] Throws NullPointerException
- [ ] Compilation error

**Explanation:** Arrays.asList() returns a fixed-size list backed by the specified array. You cannot add or remove elements from it. Attempting to do so will throw an UnsupportedOperationException. You can only modify existing elements.

---

### Question 11
**What is autoboxing in Java?**

- [x] Automatic conversion between primitive types and wrapper classes
- [ ] Automatic memory management
- [ ] Automatic type casting
- [ ] Automatic exception handling

**Explanation:** Autoboxing is the automatic conversion of primitive types to their corresponding wrapper class objects (e.g., int to Integer). Unboxing is the reverse process. This feature was introduced in Java 5 to simplify code and improve readability.

---

### Question 12
**Which collection is thread-safe in Java?**

- [ ] ArrayList
- [ ] HashMap
- [x] Vector
- [ ] LinkedList

**Explanation:** Vector is a legacy thread-safe collection (all methods are synchronized). However, it's generally recommended to use ConcurrentHashMap, CopyOnWriteArrayList, or Collections.synchronizedList() for better performance in modern applications.

---

### Question 13
**What does the 'instanceof' operator do?**

- [x] Checks if an object is an instance of a class or interface
- [ ] Creates a new instance of a class
- [ ] Compares two objects
- [ ] Checks if a variable is null

**Explanation:** The instanceof operator checks whether an object is an instance of a specific class or implements a specific interface. It returns true if the object is an instance of the specified type or its subtype, otherwise false.

---

### Question 14
**What is the diamond problem in Java?**

- [x] A problem with multiple inheritance, which Java solves by not allowing multiple class inheritance
- [ ] A problem with single inheritance
- [ ] A memory management issue
- [ ] A compilation error

**Explanation:** The diamond problem occurs in multiple inheritance when a class inherits from two classes that have a common parent. Java avoids this problem by not allowing multiple inheritance of classes. However, Java 8+ allows multiple inheritance of behavior through default methods in interfaces.

---

### Question 15
**What is the purpose of the Comparable interface?**

- [x] To define natural ordering of objects
- [ ] To compare object references
- [ ] To make objects serializable
- [ ] To enable cloning

**Explanation:** The Comparable interface is used to define the natural ordering of objects. A class implements Comparable and provides the compareTo() method to specify how its instances should be compared. This is used by sorting methods like Collections.sort().

---