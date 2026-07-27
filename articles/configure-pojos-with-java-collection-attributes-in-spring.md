---
id: 110
title: Configure POJOs with Java Collection Attributes in Spring
slug: configure-pojos-with-java-collection-attributes-in-spring
excerpt: In Spring java collection types can be configured using set of built-in XML tags such as , , and . In this example, we will discuss how to configure the the List collection.
difficulty: beginners
publishedDate: "2015-10-17T11:13:30.000Z"
updatedDate: "2025-09-16T23:05:25.291Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/142/thumbnail.png
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java POJO can contain simple primitive data types or collections. Like the primitive types, the Spring IoC container can instantiate POJOs with Java collection attributes. Java provides different types of collection types including set, list, map, etc. All of the collection types have their specific characteristics.

In Spring all these collection types can be configured using a set of built-in XML tags such as , , and

. In this example, we will discuss how to configure the List collection. However, the same concept will apply to other collection types.

Let us first declare the following POJOs.

**User.java**

```java

public class User {
    private String name;
    private String email;
    private List cars;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List getCars() {
        return cars;
    }

    public void setCars(List cars) {
        this.cars = cars;
    }

    @Override
    public String toString() {
        return "Name=" + name + " , Email=" + email + " , Car=" + cars.toString();
    }
}
```

**Car.java**

```java
public class Car {
    private String model;
    private double price;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return model + " " + price;
    }
}
```

As you can notice, a user can own a list of Cars. Let us now configure the bean inside `beans.xml` file.

To define a property of the interface `java.util.List` in the bean configuration, you specify a tag that contains the elements. The elements allowed inside the tag can be a simple constant value specified by .

beans.xml

Now from the main class you can test the above configuration as follows.

Main.java

```java
public class Main {
    public static void main(String[] args) throws Exception {
        ApplicationContext context = new GenericXmlApplicationContext("beans.xml");
        User user = (User) context.getBean("userBean");
        System.out.println(user.toString());
    }
}
```

If you want to configure the list by referring to other beans, you can do it using element.
