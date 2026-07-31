---
id: 1
title: Most Commonly Used Annotations in Spring Boot
slug: spring-boot-annotations
excerpt: Spring Boot annotations are a form of metadata that provides data about a program that is not a part of the program itself. Following are some of the most used annotations in spring boot.
difficulty: beginners
publishedDate: "2022-04-17T00:24:10.000Z"
updatedDate: "2025-09-16T23:05:19.537Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/articles/1/thumbnail.png
topics: 
  - spring-boot
tags:
  - spring-boot-annotations
  - springbootapplication
  - autowired-annotation
  - component-vs-service-vs-repository
  - spring-bean-annotation
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring Boot Annotations are a form of metadata that provides data about a program that is not a part of the program itself. They do not have any direct effect on the operation of the code they annotate. Spring Boot Annotations do not use XML and instead use the convention over configuration principle. 

Following are some of the most used Spring annotations in no particular order.

**@SpringBootApplication** is Spring’s way of identifying that this application is from Spring Boot. It is also used for spring auto-configuration and component scan for your application. The component scan is used to identify which classes are to be instantiated in the application.

**@Component-** It is a generic stereotype for any Spring-managed component or bean. It tells Spring to look for “Components” when it starts up the application. Pretty much @Controllers, @Service, etc that may be found throughout your application.

**@Repository** – is a stereotype for the persistence layer.@Service – This stereotype is used to indicate that they’re holding the business logic. @Controller – is a stereotype for the presentation layer for Spring MVC application.

And here is a nice diagram to explain the hierarchy of all these annotations in Spring Framework:

![](/media/articles/1/Blank-diagram.png)

**@Autowire**– This annotation is used to inject the dependencies without creating an object using a new keyword. Please note that it is recommended to use constructor-based injection instead of @Autowire annotation.

**@Bean**– The @Bean annotations are used at the method level and indicate that a method produces a bean that is to be managed by Spring container. For example:

```java
@Bean
Public BeanExample beanExample () {
    return new BeanExample();
}
```

**@Configuration** – tells Spring to look for .properties files on your source path. Here, for example, you can define an “application.properties” file to define your data source (database information for Spring to use).

**@ControllerAdvice** – This annotation is used to handle exceptions at the global level. We will create a spring boot project step-by-step and handle the exceptions at the global level.

**@PostConstruct** – This annotation is executed after injections are committed to the given bean. We will create a spring boot project step-by-step and we will discuss this annotation.

**@Value** – This annotation is used to read the property value from the property file. We will create a spring boot project step-by-step and read the property from the property file with this annotation.

This is not an exhaustive list, there are many more annotations you can find in Spring Framework but that is for some other day. We will learn those as we cover each topic.
