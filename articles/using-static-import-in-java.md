---
id: 314
title: Using Static Import in Java
slug: using-static-import-in-java
excerpt: To import a specific member inside your java source file, put an import statement at the beginning of…
difficulty: beginners
publishedDate: "2013-07-28T07:56:42.000Z"
updatedDate: "2025-09-16T23:05:35.909Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

To import a specific member inside your java source file, put an `import` statement at the beginning of the file before any type definitions but after the package statement, if there is one. Here’s how you would import the `Color` class to `Rectangle` class.

```java
package com.java.test;

public class Constants {

	public static final double PI = 3.141592653589793;
}
```

Importing Constants class

```java
import com.java.test.Constants;

public class Circle {
	private double getArea(int radious) {
		return Constants.PI * radious * radious;

	}

	public static void main(String[] args) {
		Circle myCircle = new Circle();
		System.out.println("Area=" + myCircle.getArea(20));
	}

}
```

This approach works well. However, Java5 has enhanced import feature called static import. Static import can be used when you want to use classe’s static members. After using static import in the above example

```java
import static com.java.test.Constants.PI;

public class Circle {
	private double getArea(int radious) {
		return PI * radious * radious;

	}

	public static void main(String[] args) {
		Circle myCircle = new Circle();
		System.out.println("Area=" + myCircle.getArea(20));
	}

}
```

However, both classes produce the same output.

### Note:

1.  To use static import we have to use fully qualified name of the static member you want to import, or a wildcard. In our example we are importing PI from `com.java.test.Constants` class
2.  In case we have to import several static members, then we can use wildcard (\*), which will import all of the static members of that class.
3.  After `static import` we don’t have to write the class name while calling. You can see the example in case-1 where we are using Constants.PI but after static import we just use member name PI.
4.  You must use `import static <packagename.Classname.MemberName>`
5.  Static import and ambiguity: If your are importing the static member of two classes that shares common names for two or more members, which leads to an ambiguity. Java compiler wont understand which member it is referring to.
