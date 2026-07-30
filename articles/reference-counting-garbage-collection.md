---
id: 343
title: How Does Reference Counting Garbage Collection Work
slug: reference-counting-garbage-collection
excerpt: This article will help you to understand the basic concept of Garbage Collection and the process flow for…
difficulty: beginners
publishedDate: "2012-02-26T23:26:00.000Z"
updatedDate: "2025-09-16T23:05:37.025Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/440/thumbnail.png
topics: 
  - blog
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This article will help you to understand the basic concept of Garbage Collection and the process flow for reference counting garbage collection.

In the previous post, [An Overview of Garbage Collector](http://stacktips.com/2012/02/27/overview-of-garbage-collector/), we just discussed the strategies for avoiding garbage collection. However, there are times when garbage collection is actually desirable. Imagine a program that requires a significant amount of memory. Suppose the amount of memory required is very close to the amount of memory available for use by the Java virtual machine. The performance of such a program is going to depend on the ability of the garbage collector to find and reclaim as much unused storage as possible.

How can we help out the garbage collector? Since the garbage collector collects only unreferenced objects it is necessary to eliminate all references to objects that are no longer needed. This can be done by assigning the value none to every variable that refers to an object that is no longer needed.

## **Reference Counting Garbage Collection**

The difficulty in garbage collection is not the actual process of collecting the garbage–it is the problem of finding the garbage in the first place. An object is considered to be garbage when no references to that object exist. But how can we tell when no references to an object exist?

[![reference counting garbage collection](/media/articles/440/reference-counitng-300x61.png)](http://stacktips.com)

A simple expedient is to keep track in each object of the total number of references to that object. That is, we add a special field to each object called a reference count. The reference count field is not accessible to the Java program it is updated by the Java virtual machine itself. Consider the statement

```java
String state = “Alabama”;
```

The above statement creates a new instance of the String class. Only a single variable, state, refers to the object. So, its reference count should be one. Now consider the following sequence of statements:

```java
String state = “Alabama”;
String capital = state;
```

This sequence creates a single String instance. Both state and capital refer to the same object. Therefore, its reference count should be two. Every time one reference variable is assigned to another, it is necessary to update several reference counts. Suppose p and q is both reference variables. The assignment

capital = state  
would be implemented by the Java virtual machine as follows:

```java
if(state != null){
    state.refCount +=1;
}
```

But if state and capital is declared using as follows;

```java
String state = “Alabama”;
String capital = “Alabama”;
capital = state;
```

Then in 1st line the reference count of both state and capital is one. But after state is assigned to capital, both are referred to the same object/memory location. So the reference count of state becomes 2 and capital becomes 0. So now capital is ready for garbage collector.

The costs of using reference counts are high. Every object requires the special reference count field, means an extra word of storage must be allocated in each object. Second, every time one reference is assigned to another, the reference counts must be adjusted. This increases significantly the time taken by assignment statements.

The advantage of using reference counts is that garbage is easily identified. When it becomes necessary to reclaim the storage from unused objects, the garbage collector needs only to examine the reference count fields of all the objects that have been created by the program. If the reference count is zero, the object is garbage.

It is not necessary to wait until there is insufficient memory before initiating the garbage collection process. We can reclaim memory used by an object immediately when its reference goes to zero.

## Why reference counting doesn’t work?

Reference counting does not always work. It will fail to work whenever the data structure contains a cycle of references. Python does not prevent the creation of cyclic structures. Consider a circular, singly-linked list, the variable head refers to the head of the linked list and the last element of the linked list also refers to the head. So, the reference count on the first list element is two, whereas, the remaining list elements each has a reference count of one.

[![reference counting garbage collection](/media/articles/440/referencecounting-fails-300x154.png)](http://stacktips.com "reference counting garbage collection")

If it happened to assign the value none to the head variable, then the reference count on the first list element has been decreased by one because the head variable no longer refers to it. But its reference count is not zero, because the tail of the list still refers to the head.

We now have a problem. The reference counts on all the lists elements are non-zero. Therefore, they are not considered to be garbage by a reference counting garbage collector. On the other hand, no external references to the linked-list elements remain. Therefore, the list elements are indeed garbage.

Reference counting will fail to work whenever the data structure contains a cycle of references, so reference counting by itself is not a suitable garbage collection scheme. However, it is a useful technique for dealing with simple objects that don’t refer to other objects, such as int and floats.
