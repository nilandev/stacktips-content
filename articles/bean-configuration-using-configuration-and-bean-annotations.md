---
id: 124
title: "Spring Bean Configuration using @Configuration and @Bean Annotations"
slug: bean-configuration-using-configuration-and-bean-annotations
excerpt: "In this tutorial we will examine how to configuring the Spring POJO for the Spring IoC container using @Configuration and @Bean annotation."
difficulty: beginners
publishedDate: "2015-10-02T06:30:48.000Z"
updatedDate: "2025-09-16T23:05:26.209Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/158/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our previous tutorial, we have declared and configured Spring bean classes using XML configuration file. If you want to reduce the number of XML configuration files, you can do so by configuring the Spring POJO for the Spring IoC container using `@Configuration` and `@Bean` annotation.

## @Configuration & @Bean Annotations

Annotating a class with the @Configuration indicates that the class can be used by the Spring IoC container as a source of bean definitions.

The @Bean annotation tells Spring that a method annotated with @Bean will return an object that should be registered as a bean in the Spring application context.

Let us examine how to use the @Configuration and @Bean annotation to configure the following bean class.

```java
public class Toy {
    private String name;
    private double price;

    public Toy() { }
    public Toy(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
```

The above bean class can be configured using the following XML configuration.

The following code snippet shows the simplest form of bean declaration using @Configuration and @Bean annotation.

```java
@Configuration
public class MyBeanConfig {

    @Bean
    public Toy crayonToy() {
        return new Toy();
    }
}
```

Here the method name annotated with @Bean works as bean ID and it creates and returns actual bean instance. Your configuration class can have declaration for more than one @Bean.

Once your configuration classes are defined, you can load & provide them to Spring container using `AnnotationConfigApplicationContext` class.

```java
AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
context.register(MyBeanConfig.class);
context.refresh();

Crayon myService = context.getBean(Crayon.class);
```
