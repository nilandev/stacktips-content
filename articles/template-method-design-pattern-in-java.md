---
id: 168
title: Template Method Design Pattern in Java
slug: template-method-design-pattern-in-java
excerpt: Over the course of this article, we will examine the Template Method design pattern in java with help…
difficulty: beginners
publishedDate: "2015-01-16T00:47:12.000Z"
updatedDate: "2025-09-16T23:05:28.702Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/226/thumbnail.png
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Over the course of this article, we will examine the Template Method design pattern in java with help of real-time examples.

The template method design pattern belongs to the behavioral family of patterns that defines the steps for an algorithm and allows the subclass to provide the implementation for one or more steps. This design pattern helps in maximizing the code reusability.

### How does the Template Method Works?

1.  Define an abstract base class with some fully qualified method containing common implementation logic
2.  Declare the abstract methods for subclasses to override specific behaviors
3.  Declare a **Template method** in a superclass that holds the core algorithm implementation steps
4.  Derived classes can override placeholder methods
5.  Derived classes can override implemented methods

### Use Case

Let us take the example of a Pizza Store. The making of a Pizza includes the steps such as selection of bread, add ingredient, heating, add toppings and add cheese. All these steps are in sequential order. Let us implement this use case in Template Method design representation.

[![Template Method Design Pattern Example](/media/articles/226/Template-Method-Design-Pattern-Example-620x406.png)](http://stacktips.com)

The above use case is represented in the following class diagram.

1.  We have declared an abstract base class for all `Pizza` implementation. The Pizza store currently serves two variants of pizzas; `SweetCornPizza` and `MexicanPizza`. Both classes extends Pizza class.
2.  Pizza class contains the `chooseBread()`, `addIngredients()` abstract methods. Each of the Pizza implementation will override them to provide specific implementation logic.
3.  The `heating()`, `addTopinngs()` and `addCheese()` methods are common for all Pizza types and hence their implementation is commonly provided in Pizza super class.
4.  Pizza superclass defines `preparePizza()` template method that controls the order that all other methods are called.
5.  Note that preparePizza() method is declared as final, because we don’t want client to override/change the pizza preperation steps.

That’s all! We are ready with the Template Method design. Lets us have a glance at the code snippet below.

#### Pizza.java

```java
public abstract class Pizza {
	public abstract void chooseBread();
	public abstract void addIngredients();

	public void heating() {
		System.out.println("Heating for 10 minutes!");
	}

	public void addTopinngs() {
		System.out.println("Adding Topinngs!");
	}

	public void addCheese() {
		System.out.println("Adding Cheese!");
	}

	// Template method
	public final void preparePizza() {
		chooseBread();
		addIngredients();
		heating();
		addCheese();
		addTopinngs();
	}
}
```

#### SweetCornPizza.java

```java
public class SweetCornPizza extends Pizza {
	@Override
	public void chooseBread() {
		System.out.println("Choosing SweetCorn Pizza Bread!");
	}

	@Override
	public void addIngredients() {
		System.out.println("Adding SweetCorn Pizza Ingredients!");
	}
}
```

#### MexicanPizza.java

```java
public class MexicanPizza extends Pizza {
	@Override
	public void chooseBread() {
		System.out.println("Choosing Mexican Pizza Bread!");
	}

	@Override
	public void addIngredients() {
		System.out.println("Adding Mexican Pizza Ingredients!");
	}
}
```

#### TestMain.java

```java
public class TestMain {
	public static void main(String[] args) {		
		SweetCornPizza pizza1 = new SweetCornPizza();
		pizza1.preparePizza();
		
		System.out.println("**********");
		
		MexicanPizza pizza2 = new MexicanPizza();
		pizza2.preparePizza();
	}
}
```

#### Output

```
Adding SweetCorn Pizza Ingredients!
Heating for 10 minutes!
Adding Cheese!
Adding Toppings!
************
Choosing Mexican Pizza Bread!
Adding Mexican Pizza Ingredients!
Heating for 10 minutes!
Adding Cheese!
Adding Toppings!
```

### Did you know?

1.  The Template method should be declares as final to avoid its subclass overriding its implementation logic.
2.  The template method in a super class follows the [Hollywood principle](http://en.wikipedia.org/wiki/Hollywood_principle), _Don’t call us, we’ll call you._ This refers to the fact that instead of calling the base class methods in the subclasses, the methods from the subclass are called form super class template method.

### Problem – 1

So far our pizza store works great. But now based on the customer demand the Pizza store is willing to introduce two new pizza types DoubleCheesePizza and NoCheesePizza.

In Order to support Double Cheese Pizza, we can override the addCheese() method in DoubleCheesePizza class and provide double cheese specific implementation here.

#### DoubleCheesePizza.java

```java
public class DoubleCheesePizza extends Pizza {
	@Override
	public void chooseBread() {
		System.out.println("Choosing DoubleCheese Pizza Bread!");
	}

	@Override
	public void addIngredients() {
		System.out.println("Adding DoubleCheese Pizza Ingredients!");
	}
	
	@Override
	public void addCheese() {
		System.out.println("Adding Double Cheese!");
	}
}
```

However, for No cheese pizza the current design will fail to support. We have to introduce hook methods to achieve the same.

1.  Add `isCheese()` method in Pizza class that execute `addCheese()` method conditionally.
2.  Change the following code in `preparePizza()` method.

```java
public boolean isCheese(){
	return true;
}

// Template method
public final void preparePizza() {
	chooseBread();
	addIngredients();
	heating();
		
	if(isCheese()){
	    addCheese();	
	}
	addTopinngs();
}
```

#### NoCheesePizza.java

```java
public class NoCheesePizza extends Pizza {
	@Override
	public void chooseBread() {
		System.out.println("Choosing SweetCorn Pizza Bread!");
	}

	@Override
	public void addIngredients() {
		System.out.println("Adding SweetCorn Pizza Ingredients!");
	}
	
	@Override
	public boolean isCheese() {
		return false;
	}
}
```
