---
id: 12
title: "Java Advanced - Concurrency, Streams, and Modern Features Quiz"
slug: "java-advanced-concurrency-streams-quiz"
excerpt: "Advanced Java quiz covering multithreading, streams, lambdas, functional interfaces, and modern Java features"
difficulty: advanced
duration: 30
thumbnail: "media/uploads/articles/java-advanced-quiz.jpg"
topics: [java]
description: |
  Description
  
  This advanced-level quiz is designed for experienced Java developers. It covers complex topics including concurrency, thread safety, the Stream API, lambda expressions, functional programming, Optional, and modern Java features from Java 8+.
  
  Perfect for developers preparing for senior positions or those who want to master advanced Java concepts.
  
  Instructions
  
  	
  	The test contains 15 questions and has a time limit of 30 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button to submit your answers.
  	
  	
  	Do not refresh the page while taking the test.
---
# Java Advanced - Concurrency, Streams, and Modern Features Quiz

**Difficulty:** advanced  
**Duration:** 30 minutes  
**Questions:** 15

## Description

Advanced Java quiz covering multithreading, streams, lambdas, functional interfaces, and modern Java features

---

## Questions

### Question 1
**What is the difference between synchronized and ReentrantLock?**

- [x] ReentrantLock provides more flexibility and features
- [ ] synchronized is more flexible
- [ ] They are exactly the same
- [ ] ReentrantLock cannot be used with try-finally

**Explanation:** ReentrantLock provides more flexibility than synchronized. It offers features like tryLock(), timed lock attempts, interruptible lock acquisition, and the ability to have multiple condition variables. ReentrantLock must be explicitly locked and unlocked, while synchronized is automatic.

---

### Question 2
**What is the purpose of the volatile keyword?**

- [x] Ensures visibility of changes across threads
- [ ] Makes variables immutable
- [ ] Provides thread synchronization
- [ ] Prevents garbage collection

**Explanation:** The volatile keyword ensures that changes to a variable are immediately visible to all threads. It prevents threads from caching the variable's value and forces reads/writes to go to main memory. However, volatile does not provide atomicity for compound operations.

---

### Question 3
**What will be the output of: Stream.of(1,2,3).map(n -> n * 2).filter(n -> n > 4).count();**

- [x] 1
- [ ] 2
- [ ] 3
- [ ] 6

**Explanation:** The stream [1,2,3] is mapped to [2,4,6], then filtered to keep only values > 4, resulting in [6]. The count() terminal operation returns 1. Streams are lazy - intermediate operations are only executed when a terminal operation is invoked.

---

### Question 4
**What is a functional interface in Java?**

- [x] An interface with exactly one abstract method
- [ ] An interface with no methods
- [ ] An interface with only static methods
- [ ] An interface that cannot be implemented

**Explanation:** A functional interface is an interface with exactly one abstract method (SAM - Single Abstract Method). It can have default and static methods. The @FunctionalInterface annotation is optional but recommended. Examples include Runnable, Callable, Comparator, and custom lambda target types.

---

### Question 5
**What is the difference between Callable and Runnable?**

- [x] Callable can return a result and throw exceptions
- [ ] Runnable can return a result
- [ ] They are the same
- [ ] Callable cannot throw exceptions

**Explanation:** Callable can return a result and throw checked exceptions, while Runnable cannot return a result and cannot throw checked exceptions. Callable is used with ExecutorService.submit() which returns a Future, while Runnable is used with execute() or submit().

---

### Question 6
**What is the purpose of CompletableFuture?**

- [x] To write asynchronous, non-blocking code
- [ ] To create synchronous operations
- [ ] To replace all Future usage
- [ ] To handle only exceptions

**Explanation:** CompletableFuture provides a way to write asynchronous, non-blocking code in a functional style. It allows chaining of multiple asynchronous operations, handling exceptions, combining multiple futures, and provides methods like thenApply, thenCompose, thenCombine, etc.

---

### Question 7
**What is the difference between map() and flatMap() in Streams?**

- [x] flatMap() flattens nested streams into a single stream
- [ ] map() flattens streams
- [ ] They are the same
- [ ] flatMap() only works with primitives

**Explanation:** map() transforms each element to another object (1-to-1 mapping), while flatMap() transforms each element to a stream and then flattens all streams into a single stream (1-to-many mapping). flatMap is useful when dealing with nested structures or when each element maps to multiple results.

---

### Question 8
**What is the happens-before relationship in Java Memory Model?**

- [x] A guarantee that memory writes are visible to subsequent operations
- [ ] A way to order thread execution
- [ ] A type of exception
- [ ] A synchronization primitive

**Explanation:** The happens-before relationship is a guarantee that memory writes by one specific statement are visible to another specific statement. It ensures memory visibility and ordering. Examples include: program order rule, monitor lock rule, volatile variable rule, and thread start/join rules.

---

### Question 9
**What is the purpose of Optional in Java?**

- [x] To represent optional values and avoid null pointer exceptions
- [ ] To make all variables optional
- [ ] To improve performance
- [ ] To replace all null checks

**Explanation:** Optional is a container object that may or may not contain a non-null value. It's designed to avoid NullPointerExceptions and make the handling of absent values more explicit. It encourages better API design and provides functional-style methods like map, flatMap, filter, orElse, etc.

---

### Question 10
**What is the difference between parallelStream() and stream()?**

- [x] parallelStream() processes elements in parallel using multiple threads
- [ ] stream() is always faster
- [ ] They are the same
- [ ] parallelStream() can only be used with collections

**Explanation:** parallelStream() processes elements in parallel using multiple threads from the common ForkJoinPool, potentially improving performance for large datasets. stream() processes elements sequentially in a single thread. Parallel streams should be used carefully as they can introduce thread-safety issues and may not always be faster.

---

### Question 11
**What is the purpose of the @FunctionalInterface annotation?**

- [x] To indicate and enforce that an interface has exactly one abstract method
- [ ] To make an interface functional
- [ ] To enable lambda expressions
- [ ] To improve performance

**Explanation:** The @FunctionalInterface annotation indicates that an interface is intended to be a functional interface (with exactly one abstract method). It's not required but provides compile-time checking - the compiler will generate an error if the interface doesn't satisfy functional interface requirements.

---

### Question 12
**What is the ConcurrentHashMap's approach to thread safety?**

- [x] Uses fine-grained locking (lock striping) for better concurrency
- [ ] Locks the entire map for all operations
- [ ] Uses no locking
- [ ] Only allows one thread at a time

**Explanation:** ConcurrentHashMap uses lock striping (segment-level locking in Java 7, node-level locking in Java 8+) rather than synchronizing the entire map. This allows multiple threads to read and write concurrently without blocking each other, providing better performance than Hashtable or Collections.synchronizedMap().

---

### Question 13
**What does the reduce() operation do in streams?**

- [x] Combines all elements into a single result using an accumulation function
- [ ] Reduces the size of the stream
- [ ] Filters elements
- [ ] Sorts the stream

**Explanation:** reduce() is a terminal operation that performs a reduction on the elements of the stream using an associative accumulation function, returning an Optional (or a value with identity). It combines all elements into a single result, like summing numbers or concatenating strings.

---

### Question 14
**What is the purpose of the CountDownLatch?**

- [x] Allows threads to wait until a set of operations completes
- [ ] Counts the number of threads
- [ ] Prevents deadlocks
- [ ] Manages thread pools

**Explanation:** CountDownLatch is a synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes. It's initialized with a count, and threads can await() until the count reaches zero via countDown() calls. It's useful for coordinating multiple threads.

---

### Question 15
**What is method reference in Java 8?**

- [x] A shorthand for lambdas that call existing methods using :: operator
- [ ] A way to create new methods
- [ ] A type of inheritance
- [ ] A debugging feature

**Explanation:** Method references are a shorthand notation for lambda expressions that only call an existing method. They use the :: operator. Types include: static method reference (Class::staticMethod), instance method reference (instance::method), constructor reference (Class::new), and arbitrary object method reference (Class::instanceMethod).

---