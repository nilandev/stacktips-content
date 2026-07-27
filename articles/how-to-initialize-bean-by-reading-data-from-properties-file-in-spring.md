---
id: 122
title: How to Initialize Bean by Reading Data from .properties File in Spring
slug: how-to-initialize-bean-by-reading-data-from-properties-file-in-spring
excerpt: "In our previous tutorial, we have seen how to create and manage POJOs With Spring IoC container using XML configuration and @Configuration and @Bean Annotations. In this example, we will examine how to initialize spring POJO by reading data from external resources such as property file."
difficulty: beginners
publishedDate: "2015-10-06T06:13:26.000Z"
updatedDate: "2025-09-16T23:05:26.068Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/156/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our previous tutorial, we have seen how to create and manage POJOs With Spring IoC container using XML configuration and `@Configuration` and `@Bean` Annotations. In this example, we will examine how to initialize spring POJO by reading data from external resources such as property file.

In regular Java applications, you need to write your own code to read file, but Spring offers the the `PropertySourcesPlaceholderConfigurer` class that facilitates to load the contents of external file.

In this example, we will initialize the POJO by reading the data from a .properties file. Let us first create a bean class `Car.java` with two properties name and model.

```java
public class Car {
    private String model;
    private double price;

    public Car() { }

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

Let us assume you have a series of values in a properties file you want to access and initialize the bean properties. Create a property file named `car.properties` with the following data.

```xml
car.model=Volkswagen Polo
car.price=5000.00
```

To make the contents of the car.properties file accessible to set up other beans, you can use the `PropertySourcesPlaceholderConfigurer` class read its value. Add the following configuration to your `beans.xml` file.

```xml

    
        classpath:car.properties
    

```

Notice that in the above code snippet, the location property for the bean is defined with `classpath:car.properties`. The classpath: prefix tells Spring to look for the car.properties file in the Java class path.

The above configuration is enough, but this can throw an exception if the file is not found. This can be avoided using `ignoreResourceNotFound` and `ignoreUnresolvablePlaceholders` properties as follows.

```xml

    
        classpath:car.properties
    
    
    

```

After declaring the `PropertySourcesPlaceholderConfigurer` bean, you can access the values of the `car.properties` file as follows.

The syntax to read the values form the file is `${yy:default_value}`. If value for a key is is found in the properties file, the corresponding value is assigned to the bean property. Otherwise it loads the default value.

Now you can initialize the bean and test the code as follows.

```java
public class Main {

    public static void main(String[] args) throws Exception {
        ApplicationContext context = new GenericXmlApplicationContext("beans.xml");
        Car car = (Car) context.getBean("carDetailsBean");
        System.out.println(car.getModel()); // Volkswagen Polo
        System.out.println(car.getPrice()); // 5000
    }
}
```
