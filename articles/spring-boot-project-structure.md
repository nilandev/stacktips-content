---
id: 2
title: Understanding Spring Boot Project Structure
slug: spring-boot-project-structure
excerpt: In this section we will discuss the project structure and various components of a Spring Boot project.
difficulty: beginners
publishedDate: "2022-04-16T23:31:17.000Z"
updatedDate: "2025-09-16T23:05:19.627Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/2/thumbnail.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the [previous tutorial](/articles/spring-boot/getting-started-with-spring-boot), we discussed the basics of Spring Boot and generated a Spring Boot project using the Spring Initializer. In this section, we will discuss the project structure and various components of a Spring Boot project.

## Application Structure

Spring Boot is an opinionated framework that makes the development process very easy since we don’t have to choose the versions of different dependencies based on the version of Spring framework, its all taken care of by Spring Boot.

The project structure looks as follows:

![](/media/articles/2/project-structure-1024x495.png)

## Main Application Class

The main application class is the entry point to the application. It is located in a root package above other classes. The main application class is responsible for initializing the Spring application context and starting the Spring application.

The @SpringBootApplication annotation is often placed on your main class, and it implicitly defines a base “search package” for certain items. For example, if you are writing a JPA application, the package of the @SpringBootApplication annotated class is used to search for @Entity items. Using a root package also allows the component scan to apply only to your project.

```java
package com.example.hellospringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloSpringBootApplication.class, args);
    }

}
```

A single @SpringBootApplication annotation can be used to enable those three features, that is:

-   @EnableAutoConfiguration: enable Spring Boot’s auto-configuration mechanism
-   @ComponentScan: enable @Component scan on the package where the application is located
-   @SpringBootConfiguration: enable registration of extra beans in the context or the import of additional configuration classes.

We recommend that you follow Java’s recommended package naming conventions and use a reversed domain name (for example, com.example.project).

## The build.gradle file

The build.gradle must be located at the root of the application as we can see in the above project structure.

```groovy
plugins {
    id 'org.springframework.boot' version '2.6.6'
    id 'io.spring.dependency-management' version '1.0.11.RELEASE'
    id 'java'
}

group = 'com.example'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '11'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
    useJUnitPlatform()
}
```

## Spring Boot Application Properties

Various properties can be specified inside your application.properties file, inside your application.yml file, or as command-line switches.

The application.properties file is located in the src/main/resources directory. The properties are defined as key-value pairs. Where the key is the property name and the value is the property value.

For, eg.

```text
server.port=8080
server.contextPath=/

spring.activemq.broker-url=tcp://localhost:61616
spring.activemq.user=admin
spring.activemq.password=password

spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.url=jdbc:h2:mem:test;DB_CLOSE_DELAY=-1
spring.datasource.password=root
spring.datasource.username=admin
spring.datasource.type=mysql
```

Check out the list of common Spring Boot properties and references to the underlying classes that consume them [here](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html).

## Static Content

In a spring boot web application, static files like HTML, CSS, JavaScript, and images files can be served directly from any of the following classpath locations out of the box. No configuration is required.

Let’s look at the resources folder in the above project structure. This directory, as the name suggests, is dedicated to all the static resources, templates, and property files.

-   resources/static – contains static resources such as CSS, js, and images.
-   resources/templates – contains server-side templates which are rendered by Spring.

## Templates

Spring supports the following template engines by default. Templates are used with we have to build a dynamic website using SpringBoot. These templates can be activated using appropriate SpringBoot starters.

-   **FreeMarker** – spring-boot-starter-freemarker
-   **Groovy** – spring-boot-starter-groovy
-   **Thymeleaf** – spring-boot-starter-thymeleaf
-   **Mustache** – spring-boot-starter-mustache

All these template engines will resolve their template files from the path src/main/resources/template.
