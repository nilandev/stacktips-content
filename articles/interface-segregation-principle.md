---
id: 185
title: Interface Segregation Principle
slug: interface-segregation-principle
excerpt: This article explains the interface segregation principle and its uses. Interface segregation is a design principle that deals…
difficulty: beginners
publishedDate: "2014-11-06T15:25:18.000Z"
updatedDate: "2025-09-16T23:05:29.329Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/246/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This article explains the interface segregation principle and its uses. Interface segregation is a design principle that deals with the disadvantages of “fat” interfaces. Interfaces containing methods that are not specific to it are called polluted or fat interfaces.

> Clients should not be forced to depend upon interfaces that they don’t use.

Let us take the example of a multi-purpose machine developed by Xerox. This super xerox system could do a wide variety of jobs like printing, scanning, stapling, photocopying, etc. They can be implemented as a IMachine interface and XeroxMachine implementation as shown below.

```java
public interface IMachine {
    public void print();
    public void staple();
    public void scan();
    public void photoCopy();
}
```

XeroxMachine implementation

```java
public class XeroxMachine implements IMachine {

    @Override
    public void print() {
        System.out.println("Printing Job");
    }

    @Override
    public void staple() {
        System.out.println("Stapling Job");
    }

    @Override
    public void scan() {
        System.out.println("Scan Job");
    }

    @Override
    public void photoCopy() {
        System.out.println("Photo Copy");
    }
}
```

The super machine is developed and working great. Now the company is getting requests for making a machine that do only print function. Management has decided to develop a specialized print machine. Now developers want to write Printer class that implements IMachine interface. Did you notice any problem? Although you need only print function, you have to implement all other methods of IMachine interface. **Now IMachine interface is not following interface segregation principle and called fat interface.**

We can breakdown the IMachine into multiple special purpose interfaces as shown below.

```java
public interface IPrinter {
    public void print();
}

public interface IScanner {
    public void fax();
}

public interface IStapler {
    public void staple();
}

public interface IPhotoCopier {
    public void photoCopy();
}
```

### Notes:

What if you are dealing with an existing legacy application where the interface is a fat interface? How do deal with such a situation? Well, you can always use an adapter design pattern for segregation.

Interface segregation brings implementation simplicity and makes easy to debug and maintain.

Interface segregation principle is easy to understand and sounds great in theory, but often difficult to identify the distinct interfaces and it can also end up with the proliferation of interfaces.
