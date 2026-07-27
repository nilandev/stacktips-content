---
id: 113
title: Spring Constructor Injection Using constructor-arg
slug: spring-constructor-injection-using-constructor-arg
excerpt: In our previous example, we have seen how to create POJO Instances from the IoC Container. In this tutorial, we will examine how to create a POJO instance or bean in the Spring IoC container by invoking its constructor.
difficulty: beginners
publishedDate: "2015-10-15T06:14:47.000Z"
updatedDate: "2025-09-16T23:05:25.496Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/145/thumbnail.png
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our previous example, we have seen how to create [POJO Instances from the IoC Container](/articles/create-and-manage-pojos-with-spring-ioc-container). In this tutorial, we will examine how to create a POJO instance or bean in the Spring IoC container by invoking its constructor.

Creating bean instance by invoking constructor is the common and direct way of creating beans. It is similar to creating the class instance using the new operator. All you have to do is to define a POJO class with a constructor and use the configuration.

In this example, I will use the following POJO class to demonstrate how to create POJOs by invoking the constructor.

```java
public class Car {
    private String model;
    private double price;

    public Car() { }

    public Car(String model, double price) {
        this.model = model;
        this.price = price;
    }

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
}
```

To define the above Car bean in the Spring IoC container, you can add the following code snippet to `bean.xml` configuration file.

-   Note that, if more then one elements is specified, Spring invokes the most appropriate constructor that matches your arguments.
-   Use Spring’s element to define constructor arguments, then for each element Spring injects the value through the setter method.
-   If no is specified to the bean configuration, the default constructor with no arguments is invoked.
-   You can specify the type and index attributes or the name attribute for the element to avoid constructor ambiguity.

You can write the following Main class to test your Cars bean initialization by retrieving the bean instance from the Spring IoC container:

```java
public class Main {
    public static void main(String[] args) throws Exception {
        ApplicationContext context = new GenericXmlApplicationContext("beans.xml");
        Car car = (Car) context.getBean("carBean");
        System.out.println(car.toString());
    }
}

```
