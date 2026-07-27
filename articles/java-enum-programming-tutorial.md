---
id: 173
title: Java enum Programming Tutorial
slug: java-enum-programming-tutorial
excerpt: An enumeration is a special class, which provides a type-safe implementation of constant data in a java program. Java enum type is introduced in Java 2.0. It is used to restrict a variable only a predefined values from an enumerated list. The items in the enumerated list are called enums.
difficulty: beginners
publishedDate: "2013-08-17T00:13:28.000Z"
updatedDate: "2025-09-16T23:05:35.215Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

# What is enum in java?

An enumeration is a special class, which provides a type-safe implementation of constant data in a java program. Java enum type is introduced in Java 5.0. It is used to restrict a variable only a predefined values from an enumerated list. The items in the enumerated list are called enums.

For example, a MercedesBenz color can be out of only three available colors WHITE, RED, and SILVER. In this context we can take a enum data type for representing the color of MercedesBenz.

```java
  enum BenzColors {WHITE, RED, SILVER};
```

For the above requirement, we can also do it by declaring an int, byte or string type for the color validation. But, this requires an extra effort to check the infeasible types. Here enum can help to reduce the bugs in your code. Compiler will stop you from assigning values other then three defined enums.

# Declaring enum in java

Enum can be declared as their own class or can be enclosed inside another class. It is not required to declare the constants are in all caps, but we are following java code convention, that the constants need to be in upper case. In the above code syntax the enum constants are `WHITE`, `RED` and `SILVER`.

## Declaring an enum outside a class

```java
enum BenzColors {WHITE, RED, SILVER}

public class MercedesBenz {
	private BenzColors color;

	public void setColor(BenzColors color){
		this.color = color;
	}

	public BenzColors getColor() {
		return color;
	}

	public static void main(String[] args) {
		MercedesBenz benz = new MercedesBenz();
		benz.setColor(BenzColors.RED);		
		System.out.println(benz.getColor());
	}

}
```

## Declaring an enum as a part of class

```java
public class MercedesBenz {
	enum BenzColors {WHITE, RED, SILVER}
	private BenzColors color;

	public void setColor(BenzColors color){
		this.color = color;
	}

	public BenzColors getColor() {
		return color;
	}

	public static void main(String[] args) {
		MercedesBenz benz = new MercedesBenz();
		benz.setColor(BenzColors.RED);		
		System.out.println(benz.getColor());
	}

}
```

# Declaring Constructor, Member Variables and Methods in Enum in Java

An enum is a special class, which holds a reference to memory in the heap. It is implicitly final, because the constants should not be changed. It can include other component of a traditional class, such as constructors, member variables and methods. Each enum constant can be declared with parameters to be passed to the constructor when it is created.

Let us go back to our MercedesBenz example, the enum constants represents the three color variants. But what if we want to map some other value like color production ratios along with the color constants. We like to know how many RED color Benz are out of available in the production firm.

```java
enum BenzColors {
	WHITE(20), RED(40), SILVER(40);

	private final int colorRatio;

	private BenzColors(int colorRatio) {
		this.colorRatio = colorRatio;
	}

	public int getColorRatio() {
		return colorRatio;
	}
};

public class MercedesBenz {

	private BenzColors color;

	public void setColor(BenzColors color){
		this.color = color;
	}

	public BenzColors getColor() {
		return color;
	}

	public static void main(String[] args) {
		MercedesBenz benz = new MercedesBenz();
		benz.setColor(BenzColors.RED);		
		System.out.println(benz.getColor()); // prints RED
		System.out.println(benz.getColor().getColorRatio()); // prints 40
	}

}
```

Do You Know ?

-   enum cannot be declared inside a method. It can be declared inside a class or as its separate context.
-   It is optional to put a semicolon to the end of enum declaration.
-   Each of the enumerated constants are actually instances of enum class. And they represent static and final.
-   Each enum values knows index of its position. The order in which the constants are declared matters.
-   enum constructor cannot be directly invoked. The enum constructors are invoked automatically with the constant value you define during declaration.
-   More than one argument to the constructor can be defined
-   Enum constructor can be overloaded
