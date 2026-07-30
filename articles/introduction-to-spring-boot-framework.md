---
id: 415
title: Introduction to Spring Boot Framework
slug: introduction-to-spring-boot-framework
excerpt: This tutorial covers the introduction to the Spring Boot framework, the key features the Spring Boot framework offers, and the Spring Boot Starter projects.
difficulty: beginner
publishedDate: "2023-09-09T15:38:03.000Z"
updatedDate: "2025-09-16T23:05:40.162Z"
videoLink: GX--xvYOlQ0
githubLink: null
featured: false
thumbnail: /media/articles/Getting_Started_with_Spring_Boot-A_Beginners_Guide.png
topics: 
  - java
course: getting-started-with-javascript
displayOrder: 1
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## Introduction to Spring Boot

Spring Boot is a popular, open-source, enterprise-level framework for creating standalone, production-grade applications that run on the Java Virtual Machine (JVM).

It requires minimal or zero configuration and is easy to get started. It is a widely popular choice among Java developers for developing MicroServices, REST APIs and Web applications.

Spring Boot is built on top of the popular Spring Framework and it inherits all Enterprise Java features like [Dependency Injection(DI)](https://stacktips.com/courses/spring-boot-for-beginners/dependency-injection-in-spring-boot) or Inversion of Control (IoC), Transaction Management, Validation, Data binding and many more.

## Why do we need Spring Boot when we have Spring framework?

Here are some of the features that make a strong case for choosing Spring Boot as opposed to Spring Framework:

**1\. Minimal configuration:**

While the Spring framework is a powerhouse with many built-in production-ready features, it requires **complex configurations**. We need to create XML or Java-based configurations to enable different features of the Spring Framework.

On the other hand, Spring Boot takes an opinionated approach. It reduces development time and increases developer productivity. Spring boot provides many default configurations for commonly used tasks and requires minimal configurations.

**2\. Automatic dependency resolution:**

In the Spring, developers need to manage dependencies manually, which can sometimes lead to version conflicts and other incompatibility issues. However, Spring Boot comes with starter packages which resolves all transitive dependencies automatically and you don't need to worry about version incompatibility issues.

**3\. Embedded Servers**

Applications developed with the spring framework require an external application server like Tomcat or JBoss for the deployment. But Spring Boot comes with embedded servers.

**4\. Microservice Ready**

While we can use Spring Framework to build microservices, it doesn't provide any specific tools and features to support Microservices architecture. On the other hand, the Spring boot is well equipped for Microservices.

## What we can use Spring Boot for?

Spring Boot is ideal for building a variety of applications, including:

-   Development of stand-alone applications;
-   Web applications.
-   RESTful APIs
-   Backend services to generate nightly reports or process large volumes of data
-   Command line applications
-   Event-driven, loosely coupled Microservices
-   Serverless applications

## Key Features of Spring Boot

Here are some of the key features of the Spring Boot framework:

1.  Auto-configuration
2.  Dependency Injection (DI)
3.  Spring Boot Starter Dependencies
4.  Embedded Server
5.  Production-ready features

The first two features (auto-configuration and Dependency injection) are inherited from the spring framework.

### 1\. Auto Configuration

Auto-configuration allows you to simplify the setup and configuration of Spring applications. It makes it easier to create production-ready applications with minimal effort.

It automatically configures the application and provides a set of defaults based on the dependencies present in the classpath. When we include certain types of dependencies in your Spring Boot project, the framework automatically configures the beans and components to provide a set of defaults.

For example, when you start the Spring boot application with the `spring-boot-starter-data-jpa` dependency, it will scan through the classpath and identify the `JpaAutoConfiguration` class which is responsible for automatically configuring JPA components. It configures a `DataSource` bean, and an `EntityManagerFactory` bean for you to work with JPA.

We can provide the data source configuration using the following configuration properties.

```properties

spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=myuser
spring.datasource.password=mypassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

Auto-configuration helps developers reduce the number of errors caused due to misconfiguration and makes you more productive.

### 2\. Dependency Injection

The Dependency Injection(DI) is one of the core features of the Spring framework. This allows developers to write loosely coupled code that is easy to maintain and test.

DI is a software design pattern used in object-oriented programming, where the dependencies of a class are provided by an external entity rather than being created within the class itself. In other words, instead of a class creating the object of its dependencies, those dependencies are "injected" into the class from outside.

As Spring boot is built on top of the Spring framework, it inherits all the Spring capabilities including Dependency Injection.

We will cover Dependency Injection in more detail in Chapter 4.

### 3\. Spring Boot Starter Dependencies

While developing production-grade applications, we often require multiple external libraries. For example, if you want to implement logging, you would require **Logback** or **Log4J** dependency.

There are generally 2 types of dependencies:

-   **Direct Dependency:** These are dependencies defined in your `pom.xml` or `build.gradle` file under the `dependencies` section.
-   **Transitive Dependency:** These are dependencies that are the dependencies of your direct dependencies.

Traditionally, managing application dependencies involved downloading JAR files and manually including them in your project. However, using build tools like **Gradle** and **Maven**, this process has become significantly easier. However, these tools do not fully address the issue of version compatibility among dependencies.

For example, let's say our application uses **Library1** and **Library2**, you need to include both libraries manually in your dependency descriptor ( `pom.xml` or `build.gradle`) file. We need to ensure, that both the library versions are compatible with each other.

As the application grows, the number of dependencies will grow and managing those dependencies manually becomes very cumbersome and error-prone.

This is where the **Spring Boot starter packages** come to the rescue. Spring Boot provides several Spring Boot starter packages to address this problem.

> _Starter dependencies are a set of convenient dependency descriptors that we can use to bootstrap our Spring boot applications. They contain a lot of pre-defined dependencies with a supported set of transitive dependencies._

For example, if we add the `spring-boot-starter-web` dependency to your `pom.xml` file then will download `spring-boot-starter-tomcat` as the direct dependency and with that, it will also download the other transitive dependencies like `tomcat-embedded-core` and `tomcat-embedded-el` and `tomcat-embedded-websocket` dependency.

The starter dependencies guarantee that all **direct** and **transitive** dependencies remain compatible with one another. This allows developers to concentrate solely on application development without the burden of manually managing version compatibility.

Spring Boot starter packages follow a similar naming pattern, e.g. `spring-boot-starter-XYZ`, where XYZ denotes a particular type of library.

Here are some of the popular Spring Boot starter packages:

| Starter Package | Description |
| --- | --- |
| spring-boot-starter-web | It is used for building web applications, including RESTful applications using Spring MVC. It uses Tomcat as the default embedded container. |
| spring-boot-starter-activemq | It is used in JMS messaging using Apache ActiveMQ. |
| spring-boot-starter-actuator | Provides production-ready features such as health checks, monitoring, and other application management features. |
| spring-boot-starter-batch | It is used for the Spring Batch. |
| spring-boot-starter-cache | It is used for Spring Framework's caching support. |
| spring-boot-starter-data-jpa | It is used for Spring Data JPA with Hibernate. |
| spring-boot-starter-data-mongodb | It is used for MongoDB document-oriented database and Spring Data MongoDB. |
| spring-boot-starter-mail | It is used to support Java Mail and Spring Framework's email sending. |

You can get the comprehensive list of Spring boot starters using the following command. Note that you need Spring CLI installed to use the following command.

```bash

spring init --list
```

### 4\. Embedded Servers

Traditionally, deploying Spring-based applications requires the creation of a deployable WAR (Web Application Archive) file, which is then deployed to an external servlet container such as Tomcat or JBoss. It is important to note that WAR files cannot be run as standalone applications and we can only use them as components of another application, like a servlet container or an application server.

In contrast, Spring Boot applications are designed to be standalone. They offer built-in support for embedded servers, including Tomcat, Jetty, and Undertow. This feature eliminates the need for external web servers, making Spring Boot applications suitable for deployment within containerized environments.

By default, Spring Boot utilizes Tomcat as its embedded server, which can be accessed through the **spring-boot-starter-web** dependency.

For those who prefer to use the **Jetty** or **Undertow** server instead of **Tomcat**, it is possible to include the spring-boot-starter-jetty or spring-boot-starter-undertow dependencies, respectively.

Follow this tutorial that explains the step-by-step configuration required to [replace the embedded Tomcat server with Jetty or Undertow](https://stacktips.com/articles/replace-tomcat-with-jetty-or-undertow-in-spring-boot).

### 5\. Production Ready Features

Spring Boot Framework includes some of the production-ready features such as metrics, health checks, and external configuration management, validation, error handling.

It can also integrate with various enterprise technologies such as RMI, JPA and JMS, AMQP, etc.

-   RMI
-   Hibernate
-   WebSocket API ([JSR 356](https://www.jcp.org/en/jsr/detail?id=356))
-   AMQP - Advanced Message Queuing Protocol
-   Java Web Services
-   JPA ([JSR 338](https://jcp.org/en/jsr/detail?id=338)) - Java Persistence API
-   JMS
-   Actuators
-   Validators

Spring also provides a Model-View-Controller (MVC) framework that simplifies the development of web applications by separating the presentation layer from the business logic.

It also provides several tools and frameworks for testing applications, including the Spring Test Framework and the Spring MVC Test Framework.

## Spring Boot vs. Spring: Which one to choose?

Both Spring and Spring Boot are widely appreciated frameworks in the Java community. Ultimately, the best framework for you will depend on your specific requirements.

The following table summarizes the difference between the two frameworks, which can help you as a guiding principle to choose one over the other.

| Features | Spring | Spring Boot |
| --- | --- | --- |
| Source type | It is an open-source framework. | It is built on top of a Spring framework. It inherits everything Spring has to offer. |
| Core features | Dependency injection, Spring IOC container, Integration with Java EE frameworks | Auto-configuration, Spring Boot Starters, Embedded servers |
| Deployment | Requires application server. The deployment descriptor is required. | Embedded servers are provided. The deployment descriptor is not required. |
| Use cases | For large-scale enterprise applications where fine-grained control of specific configurations and dependencies is crucial. | Good for rapid application development. Best suited for developing Microservices |
| Setup time | Requires complex configuration and can take more time to set up. | Faster to set up, and requires minimal configuration. |

Spring Boot is a great choice to get started with Spring development without having to worry about the complexities of the Spring Framework. Once you understand Spring better, you can decide if you need the additional features and flexibility of the Spring Framework.
