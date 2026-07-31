---
id: 169
title: Brief introduction to Software Design Patterns
slug: brief-introduction-to-design-patterns
excerpt: What are Design Patterns? Patterns exist everywhere in the world. In culinary, art, medicine, law, mathematics, music, dancing…
difficulty: beginners
publishedDate: "2015-01-13T00:39:13.000Z"
updatedDate: "2025-09-16T23:05:28.746Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/230/thumbnail.png
topics: 
  - design-patterns
tags:
  - gang-of-four-design-patterns
  - creational-design-patterns
  - structural-design-patterns
  - behavioral-design-patterns
  - software-design-principles
course: null
displayOrder: 0
seo: 
  metaTitle: "Software Design Patterns: A Brief Introduction"
  metaDescription: "Understand what software design patterns are, why they matter, and how the Gang of Four's creational, structural, and behavioral patterns solve recurring problems."
  metaKeywords: null
---

### What are Design Patterns?

Patterns exist everywhere in the world. In culinary, art, medicine, law, mathematics, music, dancing and the list goes on. Generally, a pattern is identified as a recurring arrangement created to solve some generalized problem. It is simply a solution outline, but not the solution itself. In more formal words, a pattern is a generalized outline of a reusable solution to a recurring problem.

> A software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design.  
> — Wikipedia

In software development, design patterns are the well-described solution to some of the common recurring problems you may face while designing your software. Design patterns are the concepts that outline the solution approach but not the solution itself and hence they are platform and language independent.

There are many design patterns identified and available today. It is almost impossible for an individual to know about each and every design pattern present. However, a developer with knowledge of the Foundational design patterns known as GOF (Gang-Of-Four) will make him efficient on his day to day job.

### Why Design Patterns?

Some of the benefits of using design patterns are:

-   Design patterns are already defined and provide an industry standard approach to solve the recurring problem, so it saves time.
-   Using design pattern promotes re-usability that leads to more robust and highly maintainable code.
-   Since design patterns are already defined, it makes out code easy to understand and debug. It leads to faster development and new members of the team understand it easily.

### Characteristics of a Good Design

While designing your application, you should be conscious of various software design characteristics. A great design would have all the characteristic.

However, it is practically not possible, as sometimes one pattern contradicts to other, so you have to make a hit a middle ground and choose one over other.

Following are some of the characteristics for a good software design:

#### Ease of maintenance

The software is always highly unstable. It is expected to undergo maintenance and changes in the feature. The design should be self-explanatory and easy to understand for other programmers.

#### Minimal complexity

Simplicity is the soul of efficiency (– Austin Freeman).

Design for simplicity. A complex design is often difficult to extend, maintain and understand. There are factors like many interconnections and relations, non-trivial algorithm, behaviors or rules, etc. causes the complexity in design.

#### Loose coupling

All components in your design should be loosely coupled to the maximum extent possible. This will make the system modularized and each component can be tested separately before it is integrated into a larger system.

You should be able to change a piece of the system without affecting another. If there is a defect in one component in your software, then it won’t bug much to the other components. This can be done with the basic Object-Oriented Programming Principles (OOP) like encapsulation, information hiding, and abstractions.

#### Portability

_Portability_ is a characteristic attributed to a computer program when it can work on another environment other than the one in which it was created without requiring major rework.

#### Stratification and reusability

Design patterns encourage design reuse. Design software component, that can be easily used in other system or software.

For example, if you look at the android design (Image below), it provides multiple layers of abstractions. Each component is independent of other and provides a great level of reusability.

#### Standard techniques

Don’t hate things, because you don’t know or you don’t like them. Before designing your software evaluate and use the industry suggested patterns that are appropriate for your requirements.

## Foundational (Gang-of-Four) Design Patterns

Gang-Of-Four also called as foundation patterns are the 23 basic design patterns that provide a solution to commonly recurring problems in software design. They are categorized into three major categories; Creational, Structural and Behavioral pattern based on behavior and characteristics.

### 1\. Creational design patterns

This category provides patterns to resolve the problems of object creation in flexible ways. These will eliminate the difficulties in object instantiation and enables enable greater levels of reuse in evolving systems.

| Abstract Factory | Provides an interface for creating families of related or dependent objects without specifying their concrete classes. |
| --- | --- |
| Builder | Separates the construction of a complex object from its representation so that the same construction process can create different representations. |
| Factory Method | Provides a way to use an instance as an object factory. The factory can return an instance of one of several possible classes in a class hierarchy, depending on the data provided to it. |
| Prototype | Prototype is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. In a simpler term, using prototype pattern, we will create new instances through cloning existing instances. |
| Singleton | Singleton pattern ensures at most one instance of a particular class is ever created in your application. |

### 2\. Structural design patterns

This category provides patterns to resolve the problems of object structure and composition. These will help to identify a simple way to realize relationships between entities.

| Adapter | Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces. |
| --- | --- |
| Bridge | Decouple an abstraction from its implementation so that the two can vary independently. |
| Composite | Compose objects into a tree structure to represent part-whole hierarchies. Composite lets client treat individual objects and compositions of objects uniformly. |
| Decorator | Allows for the dynamic wrapping of objects in order to modify their existing responsibilities and behaviors. |
| Facade | Provide a unified interface to a set of interfaces in a subsystem. Façade defines a higher-level interface that makes the subsystem easier to use. |
| Flyweight | Facilitates the reuse of many fine-grained objects, making the utilization of large numbers of objects more efficient. |
| Proxy | Allows for object-level access control by acting as a pass-through entity or a placeholder object. |

### 3\. Behavioral design patterns

This category provides patterns to resolve the problems of common communication patterns between objects. These will use to manage algorithms, relationships, and responsibilities between objects.

| Chain of Responsibility | Gives more than one object an opportunity to handle a request by linking receiving objects together. |
| --- | --- |
| Command | Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations. |
| Interpreter | Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language. |
| Iterator | Provides a way to access the elements of an aggregate object without exposing its underlying representation. |
| Mediator | Allows loose coupling by encapsulating the way disparate sets of objects interact and communicate with each other. Allows for the actions of each object set to vary independently of one another. |
| Memento | Captures and externalizes an object’s internal state so that it can be restored later, all without violating encapsulation. |
| Observer | Observer design pattern defines One-to-Many dependency between objects in which one object changes state, all its dependents are notified. |
| State | Allows an object to alter its behavior when its internal state changes. The object will appear to change its class. |
| Strategy | Defines a set of encapsulated algorithms that can be swapped to carry out a specific behavior. |
| Template Method | Defines the steps for an algorithm and allows a subclass to provide an implementation for one or more steps. |
| Visitor | Allows for one or more operation to be applied to a set of objects at runtime, decoupling the operations from the object structure. |
