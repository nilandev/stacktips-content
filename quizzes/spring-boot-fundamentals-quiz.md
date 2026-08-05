---
id: 13
title: "Spring Boot Fundamentals Quiz"
slug: "spring-boot-fundamentals-quiz"
excerpt: "Test your knowledge of Spring Boot basics including auto-configuration, dependency injection, REST APIs, and core concepts"
difficulty: beginner
duration: 25
thumbnail: "media/uploads/articles/spring-boot-basics-quiz.jpg"
topics: [spring-boot]
description: |
  Description
  
  This quiz covers fundamental Spring Boot concepts including dependency injection, auto-configuration, Spring MVC, REST APIs, application properties, and Spring Boot starters. Perfect for developers new to Spring Boot or those looking to solidify their understanding of core concepts.
  
  Each question includes detailed explanations to help you understand Spring Boot better and build production-ready applications.
  
  Instructions
  
  	
  	The test contains 15 questions and has a time limit of 25 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button to submit your answers.
  	
  	
  	Do not refresh the page while taking the test.
---
# Spring Boot Fundamentals Quiz

**Difficulty:** beginner  
**Duration:** 25 minutes  
**Questions:** 15

## Description

Test your knowledge of Spring Boot basics including auto-configuration, dependency injection, REST APIs, and core concepts

---

## Questions

### Question 1
**What is the main purpose of Spring Boot?**

- [x] To simplify Spring application development with auto-configuration
- [ ] To replace the Spring Framework
- [ ] To create desktop applications
- [ ] To manage databases only

**Explanation:** Spring Boot simplifies the development of Spring applications by providing auto-configuration, embedded servers, production-ready features, and eliminating the need for extensive XML configuration. It follows the 'convention over configuration' principle.

---

### Question 2
**Which annotation is used to mark a class as a Spring Boot application?**

- [x] @SpringBootApplication
- [ ] @Application
- [ ] @SpringApp
- [ ] @EnableSpringBoot

**Explanation:** @SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan. It marks the main class of a Spring Boot application and enables auto-configuration and component scanning.

---

### Question 3
**What is the default port for a Spring Boot web application?**

- [x] 8080
- [ ] 80
- [ ] 3000
- [ ] 9090

**Explanation:** Spring Boot applications run on port 8080 by default. This can be changed by setting the server.port property in application.properties or application.yml file.

---

### Question 4
**Which annotation is used to create a REST controller in Spring Boot?**

- [x] @RestController
- [ ] @Controller
- [ ] @Service
- [ ] @Repository

**Explanation:** @RestController is a specialized version of @Controller that combines @Controller and @ResponseBody. It indicates that the class serves RESTful web services and automatically serializes return values to JSON/XML.

---

### Question 5
**What is the purpose of @Autowired annotation?**

- [x] To enable automatic dependency injection
- [ ] To create beans automatically
- [ ] To start the application
- [ ] To configure the database

**Explanation:** @Autowired enables automatic dependency injection. Spring automatically resolves and injects collaborating beans into your bean. It can be used on constructors, setter methods, or fields. Constructor injection is generally preferred.

---

### Question 6
**Which file is used for application configuration in Spring Boot?**

- [x] application.properties
- [ ] config.xml
- [ ] settings.json
- [ ] app.config

**Explanation:** application.properties (or application.yml for YAML format) is used to configure Spring Boot applications. It contains key-value pairs for various settings like server port, database configuration, logging levels, etc.

---

### Question 7
**What is a Spring Boot Starter?**

- [x] A set of dependency descriptors for specific functionalities
- [ ] A main class that starts the application
- [ ] A configuration file
- [ ] A database driver

**Explanation:** Spring Boot Starters are dependency descriptors that bundle together commonly used dependencies for specific functionalities. For example, spring-boot-starter-web includes dependencies for building web applications including Spring MVC, Tomcat, and Jackson.

---

### Question 8
**Which annotation maps HTTP GET requests to a specific handler method?**

- [x] @GetMapping
- [ ] @PostMapping
- [ ] @RequestMapping
- [ ] @Get

**Explanation:** @GetMapping is a shortcut for @RequestMapping(method = RequestMethod.GET). It maps HTTP GET requests to the annotated handler method. Other similar annotations include @PostMapping, @PutMapping, @DeleteMapping, and @PatchMapping.

---

### Question 9
**What is the purpose of @Service annotation?**

- [x] To mark a class as a service layer component
- [ ] To create REST endpoints
- [ ] To configure the database
- [ ] To handle HTTP requests

**Explanation:** @Service is a specialization of @Component annotation. It marks a class as a service layer component, indicating that it holds business logic. It's a semantic annotation that helps developers understand the role of the class in the application architecture.

---

### Question 10
**Which embedded server does Spring Boot use by default for web applications?**

- [x] Tomcat
- [ ] Jetty
- [ ] Undertow
- [ ] WildFly

**Explanation:** Spring Boot uses Apache Tomcat as the default embedded servlet container for web applications. You can easily switch to Jetty or Undertow by changing dependencies in your pom.xml or build.gradle file.

---

### Question 11
**What is the purpose of @PathVariable annotation?**

- [x] To extract values from the URI path
- [ ] To set the request path
- [ ] To configure variables
- [ ] To create new paths

**Explanation:** @PathVariable is used to extract values from the URI path. For example, in @GetMapping("/users/{id}"), @PathVariable can extract the 'id' value from the URL. It's commonly used in RESTful web services to identify resources.

---

### Question 12
**What is Spring Boot Actuator used for?**

- [x] To monitor and manage applications in production
- [ ] To start the application
- [ ] To configure dependencies
- [ ] To create database schemas

**Explanation:** Spring Boot Actuator provides production-ready features to help you monitor and manage your application. It includes endpoints for health checks, metrics, application info, and more. Endpoints like /actuator/health and /actuator/metrics are commonly used.

---

### Question 13
**Which annotation is used to mark a class as a JPA entity?**

- [x] @Entity
- [ ] @Table
- [ ] @Repository
- [ ] @Database

**Explanation:** @Entity annotation marks a class as a JPA entity, which represents a table in the database. Each instance of the entity represents a row in the table. It's part of the Java Persistence API (JPA) specification.

---

### Question 14
**What is the purpose of @RequestBody annotation?**

- [x] To bind HTTP request body to a method parameter
- [ ] To send response body
- [ ] To validate request parameters
- [ ] To create request objects

**Explanation:** @RequestBody binds the HTTP request body to a method parameter. It automatically deserializes the JSON/XML request body into a Java object using HttpMessageConverters. It's commonly used in POST and PUT requests.

---

### Question 15
**What is the purpose of @ComponentScan annotation?**

- [x] To specify packages to scan for Spring components
- [ ] To scan for viruses
- [ ] To analyze code quality
- [ ] To find configuration files

**Explanation:** @ComponentScan tells Spring where to scan for components, configurations, and services. It's included in @SpringBootApplication. By default, it scans the package of the annotated class and all its sub-packages for @Component, @Service, @Repository, and @Controller annotated classes.

---