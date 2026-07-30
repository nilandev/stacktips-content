---
id: 125
title: Create and Manage POJOs with Spring IoC Container
slug: create-and-manage-pojos-with-spring-ioc-container
excerpt: In this tutorial, we will examine how to design a POJO class and configure POJO instance values for the Spring IoC container in an XML file. Next, instantiate the Spring IoC container to access to the POJO instance values defined in an XML file.
difficulty: beginners
publishedDate: "2015-09-29T22:30:35.000Z"
updatedDate: "2025-09-16T23:05:26.299Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/159/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this tutorial, we will examine how to design and configure POJO instance values for the Spring IoC container in an XML file. Next, instantiate the Spring IoC container to access to the POJO instance values defined in an XML file.

For the sake of simplicity, in this example we will declare a class NameGenerator which will generate full name from initial, firstname and surname.

Let us first began with creating a new eclipse Maven project.

## 1\. Add the required dependencies

Add the following Maven depandencies to your project pom.xml file.

```xml

    4.0.0
    com.javatechig
    SpringBeanExample
    0.0.1-SNAPSHOT


        4.0.2.RELEASE
        3.0.3
        3.2.3.RELEASE




            org.springframework
            spring-core
            ${org.springframework.version}



            org.springframework
            spring-beans
            ${org.springframework.version}



            org.springframework
            spring-context
            ${org.springframework.version}



```

## 2\. Create the POJO Class

Let us create a NameGenerator class that has three properties— prefix, firstName, and surName.

```java
public class NameGenerator {
    private String firstName;
    private String surName;
    private String initial;

    public NameGenerator() {}

    public NameGenerator(String initial, String firstName, String surName) {
        this.firstName = firstName;
        this.surName = surName;
        this.initial = initial;
    }

    public String getFullName() {
        return initial + " " + firstName + " " + surName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getInitial() {
        return initial;
    }

    public void setInitial(String initial) {
        this.initial = initial;
    }
}
```

Notice that, in the above code snippet the NameGenerator class has a method `getFullName(),` that is used to generate the fullname.

The NameGenerator class can be instantiated by using standard Java constructorn call. When you use the Spring IoC container to initialize POJOs, if you use the standard Java constructor the mechanism is called constructor injection, where as if you use setter methods the mechanism is called setter injection.

## 3\. Create a XML Configuration for your POJO

To define instances of a POJO class in the Spring IoC container, you have to create an XML configuration and initialize the properties.

Create a new xml file named `bean.xml` under the root of the project classpath for easier testing with in an IDE. The following code snippet explains how to configure bean in Spring.

```xml



            Mr.


            Steve


            Peterson



```

**Notes:**

-   Spring XML configuration file can have any name, in this example we have created beans.xml.
-   Each POJO instances must have a unique name or id per context. The id will be used to to uniquly identify the beans.
-   The value for class attribute should contain a fully qualified POJO class name so the Spring IoC container can instantiate it.
-   If you want to configure the bean property via setter injection, you use the element and specify the property name in its name attribute. A requires that the underlying POJO class contain a corresponding setter method.
-   The Spring bean properties can be initialized via constructor injection by declaring them in the elements.

The following example shows how to use the constructor-arg element to initialize bean via constructor injection.

```xml


            Mr.


            Steve


            Peterson


```

Note that the constructor arguments are order based, so you have to be careful about the order while declaring in `bean.xml` file.

Although a bean’s name can be defined by the name attribute of the element, the preferred way of identifying a bean is through the standard XML id attribute. In this way, if your text editor is XML-aware, it can help to validate each bean’s uniqueness at design time.

## 4\. Instantiate the Spring IoC Container

To create bean instances, we first need to instantiate the Spring IoC container by reading the XML configuration files (in our case `beans.xml`). Once IoC container is initialized, you can get the bean instances from the IoC container using bean name or id.

Spring provides two types of IoC container implementations.

-   Using bean factory (BeanFactory class)
-   Using application context (ApplicationContext interface)

The application context provides some of the advance features than the bean factory. We recommend using the application context for every application unless it is intended. The `ApplicationContext` is an interface, so will use `GenericXmlApplicationContext` class which is an implementation of ApplicationContext interface.

The following code snippet shows how to load the XML configuration file from the classpath.

```java
ApplicationContext context = new GenericXmlApplicationContext("beans.xml");
```

Once the application context is instantiated, we can get the POJO instance and access the properties.

## 5\. Get Bean Instance from the IoC Container

To get the bean instance, you need to call the `getBean()` method by pasing unique bean name.  
Let us create a new class with a main method so that we can instantiate the bean and call the `getFullName()` method.

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new GenericXmlApplicationContext("beans.xml");
        NameGenerator generator = (NameGenerator) context.getBean("nameGenerator");
        System.out.println(generator.getFullName());
    }
}
```

**Output:**

The application will initialize the bean and print the full name on console.
