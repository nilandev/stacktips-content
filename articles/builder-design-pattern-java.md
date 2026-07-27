---
id: 188
title: Builder Design Pattern In Java
slug: builder-design-pattern-java
excerpt: Over the course of this article, we will examine Builder design pattern in Java. Builder design pattern belongs to the creational family of pattern, that control the object instantiation process. Builder design pattern simplifies the object instantiation process for complex objects.
difficulty: beginners
publishedDate: "2014-11-03T10:40:11.000Z"
updatedDate: "2025-09-16T23:05:29.506Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/249/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Over the course of this article, we will examine Builder design pattern in Java. Builder design pattern belongs to the creational family of pattern, that control the object instantiation process. Builder design pattern simplifies the object instantiation process for complex objects. The definition of Builder design pattern as provided in the original Gang of Four book is,

Separates the construction of a complex object from its representation so that the same construction process can create different representations.

Let us understand this pattern in a simpler term. In Java for instantiating objects we need to pass parameters to its class constructor. What if we have different combinations of parameters required to create objects and some of them are mandatory and some are optional? We can overload the class constructor with different combinations to achieve this.

Instead of using numerous constructors, the builder pattern uses another object, a builder, that receives each initialization parameter step by step and then returns the resulting constructed object at once.

# Builder Design Pattern Example

Let us take an example of a cafe preparing a meal. For preparing a meal there are various steps being performed, for example, choosing sandwich, adding sides, drink, offer, etc. There can be different combination of meal created during the process. In such cases preparing a meal is difficult than it is expected. Let us solve this issue by using builder design pattern.

[![Builder Design Pattern Java](/media/articles/249/Builder-Design-Pattern-Java-620x382.png)](http://stacktips.com)

In the above class diagram,

1.  The `MealBuilder` specifies an abstract interface for creating parts of a Meal.
2.  The `SandwichMealBuilder` is an concrete builder constructs and assembles parts of the product by implementing the MealBuilder interface.
3.  The `MealDirector` constructs an object using the MealBuilder interface.
4.  The `Meal` is the object which we are intended to create during this process

### Meal.java

```java
package com.javatechig.designpattern.builder;

public class Meal {
	public String sandwich;
	public String sideOrder;
	public String drink;
	public String offer;
	public double price;

	@Override
	public String toString() {
		return "Sandwich=" + sandwich + " Side Order=" + sideOrder + " Drink="
				+ drink + " Offer=" + offer + " Price=" + price;
	}
}
```

### MealBuilder.java

```java
package com.javatechig.designpattern.builder;

public interface MealBuilder {	
	public abstract void addSandwich(String sandwich);
	public abstract void addSides(String sides);
	public abstract void addDrink(String drink);
	public abstract void addOffer(String coupon);
	public abstract void setPrice(double price);
	public abstract Meal getMeal();
}
```

### SandwichMealBuilder.java

```java
package com.javatechig.designpattern.builder;

public class SandwichMealBuilder implements MealBuilder {
	private Meal _meal = new Meal();

	@Override
	public void addSandwich(String sandwich) {
		_meal.sandwich = sandwich;
	}

	@Override
	public void addSides(String sides) {
		_meal.sideOrder = sides;
	}

	@Override
	public void addDrink(String drink) {
		_meal.drink = drink;
	}

	@Override
	public void addOffer(String coupon) {
		_meal.offer = coupon;
	}

	@Override
	public void setPrice(double price) {
		_meal.price = price;
	}

	@Override
	public Meal getMeal() {
		return _meal;
	}
}
```

### MealDirector.java

```java
package com.javatechig.designpattern.builder;

public class MealDirector {
	
	public void makeMeal(MealBuilder mealBuilder) {
		
		mealBuilder.addSandwich("Hamburger");
		mealBuilder.addSides("Fries");
		mealBuilder.addDrink("Coke");
		mealBuilder.addOffer("Weekend Bonanza");
		mealBuilder.setPrice(5.99);
	}
}
```

### Client.java

```java
package com.javatechig.designpattern.builder;

public class Client {
	public static void main(String[] args) {		
		MealBuilder pizzaBuilder = new SandwichMealBuilder();
		MealDirector director = new MealDirector();
		director.makeMeal(pizzaBuilder);
		
		Meal meal = pizzaBuilder.getMeal();
		System.out.println(meal.toString());
	}
}
```
