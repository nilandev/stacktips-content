---
id: 3
title: Getting Started With Spring Boot
slug: getting-started-with-spring-boot
excerpt: This tutorial covers the introduction to the Spring Boot framework, the benefits and the Spring Boot starter project.
difficulty: beginners
publishedDate: "2022-04-16T09:59:00.000Z"
updatedDate: "2025-09-16T23:05:19.713Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/articles/3/thumbnail.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial covers the introduction to the Spring Boot framework, the benefits the Spring Framework offers, and the Spring Boot starter project. This tutorial is intended for developers who are new to Spring Boot and want to get started quickly.

## What is Java Spring Boot?

Spring Boot Framework is a popular, open-source, enterprise-level framework for creating standalone, production-grade applications that run on the Java Virtual Machine (JVM). It requires minimal or zero configuration and is easy to get started. It is a widely popular choice among Java developers for developing microservices and web applications.

It inherits the features like dependency Injection or Inversion of Control (IoC) from the Spring Framework and provides a rich set of features like RESTful web services, transaction management, caching, and more.

Spring Framework also offers built-in support for typical tasks that an application needs to perform, such as data binding, type conversion, validation, exception handling, resource and event management, internationalization, and more.

It integrates with various Java EE technologies such as RMI, AMQP (Advanced Message Queuing Protocol), Java Web Services, and others.

## Spring Boot Features

-   Autoconfiguration
-   Embed Tomcat, Jetty (no need to deploy WAR files)
-   Provides ‘starter’ dependencies to simplify your build configuration
-   Automatically configure Spring and 3rd party libraries whenever possible
-   Provide production-ready features such as metrics, health checks, and externalized configuration
-   Absolutely no code generation and no requirement for XML configuration

**Autoconfiguration:** Springboot applications are initialized with pre-set dependencies that you don’t have to configure manually. As Java Spring Boot comes with built-in autoconfiguration capabilities, it automatically configures both the underlying Spring Framework and third-party packages as necessary for your application. This helps you to reduce the errors possibly caused by misconfiguration and make the developers more productive.

## Spring Boot vs. Spring Framework

The biggest advantages of using Spring Boot versus Spring Framework alone are ease of use and faster development. However, this comes at the expense of the greater flexibility you get from working directly with Spring Framework.

In practice, unless you need or want to implement a very unique configuration, using Spring Booth is worth the tradeoff. It lets you easily inject extra dependencies into your application if something is not present in the Spring Starter bundle.

And, you still get access to all Spring Framework features, including easy event handling, validation, data binding, type conversion, and built-in security and testing capabilities. Bottom line, Spring Boot can significantly streamline the development process and remove the fuss about the configurations.

## Spring Boot Starters

Spring Boot Starters are a set of convenient dependency descriptors which can be easily included in any level of application. These starters work as a bootstrapping process for the Spring-related technologies, we no longer need to worry about the dependencies and they will be automatically managed by Spring Boot Starters.

Spring Boot starters follow a similar naming pattern: `spring-boot-starter-XYZ`, where XYZ denotes a particular type of application.

E.g. Spring Boot starters:

-   **spring-boot-starter-web** – RESTful web services using Spring MVC and embedded Tomcat container.
-   **spring-boot-starter-data-jpa** – Manage relational data from Spring boot
-   **org.springframework.boot:spring-boot-starter-security** – security implementation
-   **org.springframework.boot:spring-boot-starter-activemq** – connect to ActiveMQ server

## Spring Initializr

Spring Initializr is a web-based tool provided by Pivotal. With the help of Spring Initializr, we can easily generate and download the Spring Boot Project template. Checkout online spring initial tool here [https://start.spring.io](https://start.spring.io)

![](/media/articles/3/Screenshot-2022-04-16-at-20.38.25-1024x658.png)

## Creating First Spring Boot Application

Now that we understand the basics of Spring Boot, let’s create our first Spring Boot application.

For developing a spring boot application, you need the following **prerequisites**:

-   Java8 must be installed on your machine.
-   Need an IDE for writing code. I prefer IntelliJ IDEA. You can download a community edition if you don’t have it already.

Once the above prerequisites are satisfied, you can start the development process by following the steps below:

-   Navigate to [https://start.spring.i](https://start.spring.i)o.
-   Select the Maven or Gradle build type and select the language. I’ve selected, Gradle with Java.
-   Select the Spring boot version. At the time of writing this article, Spring Boot 2.6.6 was the latest release version.
-   Provide the details like group name. Usually the reverse of your domain. If your domain is example.com, your group name will be `com.example`
-   The artifact name is the name of the jar without a version. For example, if your artifact name is my-app, then the jar will be my-app-1.0.0.jar.
-   Provide a name for your application. Let’s call it a “hello-spring-boot” app.
-   Select the version of Java you want to use. I’ve selected Java 8.
-   On the right-hand side, you will see the list of dependencies. You can add any of the starter dependencies you want to your project. For eg. in this case, we want to build a web application, so we need to add spring-boot-starter-web.

Once the above details are filled in, you can click on the “**Generate**” button. This will download a new Spring Boot project with the configuration you’ve selected. Now, you can extract the zip file and open the project in your IntelliJ IDEA.

## Build and Run Spring Boot Application

**For Gradle projects**  
For Gradle projects, you can build and run the project by following the steps below:

Build spring boot application into an executable jar

```
./gradlew build
```

Start/Run spring boot application

```
./gradlew bootRun
```

**For Maven projects**  
If you’re using maven based build, you can build and run the project by following the steps below:

Build spring boot application into an executable jar

```
./mvnw clean package
```

Start/Run spring boot application

```
./mvnw spring-boot:run
```

When you run your Spring Boot application, you will see a log message like this:

```java
    . ____ _ __ _ _
    /\ / ___'_ __ _ _(_)_ __ __ _ \ \ \ 
    ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ 
    \/ ___)| |_)| | | | | || (_| | ) ) ) )
    ' |____| .__|_| |_|_| |_\__, | / / / /
    =========|_|==============|___/=/_/_/_/
    :: Spring Boot :: (v2.6.6)
    
    2022-04-16 17:17:14.805 INFO 25315 --- [ main] c.e.h.HelloSpringBootApplication : Starting HelloSpringBootApplication
    using Java 11.0.11 on BLR-P7111831LP.local with PID 25315
    (/Users/Neel/spring-boot-examples/hello-spring-boot/build/classes/java/main started by
    p7111831 in /Users/Neel/spring-boot-examples/hello-spring-boot)
    2022-04-16 17:17:14.807 INFO 25315 --- [ main] c.e.h.HelloSpringBootApplication : No active profile set, falling back to
    1 default profile: "default"
    2022-04-16 17:17:15.347 INFO 25315 --- [ main] o.s.b.w.embedded.tomcat.TomcatWebServer : Tomcat initialized with
    port(s): 8080 (http)
    2022-04-16 17:17:15.353 INFO 25315 --- [ main] o.apache.catalina.core.StandardService : Starting service [Tomcat]
    2022-04-16 17:17:15.354 INFO 25315 --- [ main] org.apache.catalina.core.StandardEngine : Starting Servlet engine:
    [Apache Tomcat/9.0.60]
    2022-04-16 17:17:15.416 INFO 25315 --- [ main] o.a.c.c.C.[Tomcat].[localhost].[/] : Initializing Spring embedded
    WebApplicationContext
    2022-04-16 17:17:15.417 INFO 25315 --- [ main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext:
    initialization completed in 570 ms
    2022-04-16 17:17:15.681 INFO 25315 --- [ main] o.s.b.w.embedded.tomcat.TomcatWebServer : Tomcat started on port(s): 8080
    (http) with context path ''
    2022-04-16 17:17:15.692 INFO 25315 --- [ main] c.e.h.HelloSpringBootApplication : Started HelloSpringBootApplication in
    1.148 seconds (JVM running for 1.61)
```
