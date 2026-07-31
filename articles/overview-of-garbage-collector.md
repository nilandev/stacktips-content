---
id: 344
title: What is Garbage Collector and how it works ?
slug: overview-of-garbage-collector
excerpt: This article will help you to understand the basic concept of Garbage Collection like dangling pointer, memory leak and strategies to avoid and reduce memory costs.
difficulty: beginners
publishedDate: "2012-02-26T23:18:00.000Z"
updatedDate: "2025-09-16T23:05:37.062Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/441/thumbnail.png
topics: 
  - java
tags:
  - java-garbage-collection
  - memory-leak-java
  - dangling-pointer-java
  - java-memory-management
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This article will help you to understand the basic concept of Garbage Collection like dangling pointer, memory leak and strategies to avoid and reduce memory costs.

Objects allocate memory at run-time for executing the programs. As long as a program contains a reference to some object instance, the virtual machine is required to ensure that the object exists. An un-referenced object is called garbage and the process of finding all the un-referenced objects and reclaiming the storage is called garbage collection.

### Dangling pointer

The situation which arises when a program contains a reference to a destroyed object is called a dangling reference (or dangling pointer). It doesn’t allow the explicit destruction of objects. Languages like java, support the explicit destruction of objects typically require the program to keep track of all the objects it creates and to destroy them explicitly when they are no longer needed. If a program somehow loses track of an object it has created then that object cannot be destroyed. And if the object is never destroyed, the memory occupied by that object cannot be used again by the program.

### Memory leak

A program that loses track of objects before it destroys them suffers from a memory leak. If we run a program that has a memory leak for a very long time, it is quite possible that it will exhaust all the available memory and eventually fail because no new objects can be created.

### Reduce, reuse, recycle

The slogan “reduce, reuse, recycle” prescribes three strategies for reducing the memory costs associated with waste objects. These strategies apply equally well to Java programs!

### Reduce

A program that does not create any object instances or arrays does not create garbage. Of course, a program that creates no objects is not very useful because it does nothing. A program that creates all the objects it needs at the beginning of its execution and uses the same objects until it terminates also does not create garbage. By reducing the number of objects a program creates dynamically during its execution, we can reduce or even eliminate the need for garbage collection.

### Reuse

Sometimes, a Java program will create many objects which are used only once. For example, a program may create an object in the body of a loop that is used to hold temporary information that is only required for the particular iteration of the loop in which it is created. Consider the following:

```java
for(int i=0; i    obj = new SomeClass(i);
    System.out.priintln(obj.value);
}
```

This creates a million instances of the SomeClass class and prints them out. If the SomeClass class has a property, say value, we can reuse and a single object instance like this:

```java
obj = new SomeClass()
for(int i=0; i    obj.value = i;
System.out.priintln(obj.value);
}
```

Clearly, by reusing a single object instance, we have dramatically reduced the amount of garbage produced. But it may not apply for all cases.

### Recycle

Recycling of objects is a somewhat more complex strategy for reducing the overhead associated with garbage collection. Instead leaving an unused object around for the garbage collector to find, it is put into a container of unused objects. When a new object is needed, the container is searched first to see if an unused one already exists. Because a container always refers to the objects it contains, those objects are never garbage collected.

The recycling strategy can indeed reduce garbage collection overhead. However, it puts the burden back on the programmer to explicitly put unused objects into the container to avoid memory leaks and to make sure objects put into the container are really unused to avoid dangling references. Because the recycling strategy undermines some of the benefits of garbage collection, it should be used with great care.
