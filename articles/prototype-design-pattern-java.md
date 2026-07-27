---
id: 189
title: Prototype Design Pattern In Java
slug: prototype-design-pattern-java
excerpt: Prototype design pattern belongs to the structural family of pattern. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects
difficulty: beginners
publishedDate: "2014-10-30T18:32:33.000Z"
updatedDate: "2025-09-16T23:05:29.541Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/250/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Over the course of this article, we will examine Prototype design pattern in Java. Prototype design pattern belongs to the creational family of pattern. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. In a simpler term, using prototype pattern, we will create new instances through cloning existing instances.

Creating instance in java is one of the costly operation. It costs time and resources. If there is a scope to avoid object creation process, by just copying the existing object, then won’t it be great? Prototype design patterns answers that problem.

Use the prototype design pattern when,

1.  When specifying new objects by changing an existing objects structure
2.  Speeds up instantiation of large, dynamically loaded classes

## Prototype Design Pattern Example

The Hampstead Cake company are well known for providing quality birthday cheese cakes in London. For each order the cheese cake has to be customized with recipients name, however the ingredients and taste remains the same. The cake company is getting inundated orders and now struggling to deliver them. The trouble is, it is taking too long to specify ingredients and build cheese cake for each order. That way they cannot produce enough cakes. How about you just produce a single cheesecake, and clone it multiple times, and then customize each one?

In this example, CakeStore class is the client. The client creates multiple prototypical instances by calling `prepareCake()` method.

  
[![Prototype Design Pattern](/media/articles/250/Prototype-Design-Pattern.png)](http://stacktips.com)

### Cake.java

```java
package com.javatechig.designpattern.prototype;

public interface Cake extends Cloneable {

	public Cake prepareCake();
}
```

### CheeseCake.java

```java
package com.javatechig.designpattern.prototype;

public class CheeseCake implements Cake {

	private String sugar;
	private String butter;
	private String cheese;
	private String name;

	public Cake prepareCake() {
		Cake cake = null;
		try {
			cake = (Cake) super.clone();
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}
		return cake;
	}

	void addSugar(String sugar) {
		this.sugar = sugar;
	}

	void addButter(String butter) {
		this.butter = butter;
	}

	public void addCheese(String cheese) {
		this.cheese = cheese;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Sugar:" + sugar + ", Butter:" + butter + ", Name:" + name
				+ ", Cheese:" + cheese;
	}

}
```

### CakeStore.java

```java
package com.javatechig.designpattern.prototype;

public class CakeStore {

	public static void main(String[] args) {

		/* Cheese cake preparation */
		CheeseCake cake = new CheeseCake();
		cake.addSugar("100g");
		cake.addButter("200g");
		cake.addCheese("Acapella");
		System.out.println("Cake = " + cake.toString());

		
		/* Order with custom name */
		CheeseCake cake1 = (CheeseCake) cake.prepareCake();
		cake1.setName("Bastien");
		System.out.println("Cake1 = " + cake1.toString());

		/* Order with custom name and customized cheese */
		CheeseCake cake2 = (CheeseCake) cake.prepareCake();
		cake2.addCheese("Extra Cheese");
		cake2.setName("Adams");
		System.out.println("Cake3 = " + cake2.toString());
	}
}
```

### Output

Cake = Sugar:100g, Butter:200g, Name:null, Cheese:Acapella
Cake1 = Sugar:100g, Butter:200g, Name:Bastien, Cheese:Acapella
Cake3 = Sugar:100g, Butter:200g, Name:Adams, Cheese:Extra Cheese
