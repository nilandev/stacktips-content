---
id: 14
title: "Spring Boot Advanced - Microservices, Security, and Best Practices Quiz"
slug: "spring-boot-advanced-microservices-security-quiz"
excerpt: "Advanced Spring Boot quiz covering microservices, security, transactions, caching, testing, and production best practices"
difficulty: advanced
duration: 30
thumbnail: "media/uploads/articles/spring-boot-advanced-quiz.jpg"
topics: [spring-boot]
description: |
  Description
  
  This advanced-level Spring Boot quiz is designed for experienced developers working with production applications. It covers complex topics including Spring Security, microservices architecture, distributed tracing, circuit breakers, caching strategies, transaction management, and testing best practices.
  
  Perfect for developers preparing for senior positions or architects designing Spring Boot microservices.
  
  Instructions
  
  	
  	The test contains 15 questions and has a time limit of 30 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button to submit your answers.
  	
  	
  	Do not refresh the page while taking the test.
---
# Spring Boot Advanced - Microservices, Security, and Best Practices Quiz

**Difficulty:** advanced  
**Duration:** 30 minutes  
**Questions:** 15

## Description

Advanced Spring Boot quiz covering microservices, security, transactions, caching, testing, and production best practices

---

## Questions

### Question 1
**What is the purpose of @Transactional annotation?**

- [x] To manage database transactions with automatic commit/rollback
- [ ] To transfer data between services
- [ ] To make methods asynchronous
- [ ] To cache method results

**Explanation:** @Transactional marks a method or class to be managed within a transaction. If the method completes successfully, the transaction is committed; if an exception occurs, it's rolled back. It supports various properties like propagation, isolation, timeout, and read-only settings.

---

### Question 2
**What is the difference between @Bean and @Component?**

- [x] @Bean is method-level, @Component is class-level
- [ ] @Component is method-level, @Bean is class-level
- [ ] They are the same
- [ ] @Bean is deprecated

**Explanation:** @Component is a class-level annotation used for auto-detection and auto-configuration using classpath scanning. @Bean is a method-level annotation used in @Configuration classes to explicitly declare a bean. @Bean gives you more control over bean instantiation.

---

### Question 3
**What is Spring Cloud Circuit Breaker used for?**

- [x] To prevent cascading failures and provide fallback mechanisms
- [ ] To break database connections
- [ ] To disconnect circuits in the application
- [ ] To manage electrical systems

**Explanation:** Circuit Breaker pattern (implemented via Resilience4j or Hystrix) prevents cascading failures in microservices. It monitors for failures and 'opens' the circuit when failures reach a threshold, providing a fallback response instead of calling the failing service, allowing it to recover.

---

### Question 4
**What is the purpose of @Cacheable annotation?**

- [x] To cache method results and avoid repeated executions
- [ ] To make methods accessible from cache
- [ ] To store beans in cache
- [ ] To configure cache settings

**Explanation:** @Cacheable triggers cache population. When a method annotated with @Cacheable is called, Spring checks if the result is in the cache. If found, the cached result is returned without executing the method. If not, the method executes and the result is stored in the cache.

---

### Question 5
**What is the purpose of Spring Cloud Config Server?**

- [x] To provide centralized configuration management for microservices
- [ ] To configure cloud infrastructure
- [ ] To manage server configurations only
- [ ] To configure databases

**Explanation:** Spring Cloud Config Server provides centralized external configuration management for distributed systems. It allows you to manage application configuration across all environments from a central location (Git repository, filesystem, etc.), supporting dynamic configuration updates without redeployment.

---

### Question 6
**What is the difference between @MockBean and @Mock in Spring Boot testing?**

- [x] @MockBean adds the mock to Spring context, @Mock doesn't
- [ ] @Mock adds to Spring context, @MockBean doesn't
- [ ] They are the same
- [ ] @MockBean is deprecated

**Explanation:** @MockBean is a Spring Boot annotation that adds a mock bean to the Spring ApplicationContext, replacing any existing bean of the same type. @Mock is a Mockito annotation that creates a mock object but doesn't add it to the Spring context. Use @MockBean for integration tests and @Mock for unit tests.

---

### Question 7
**What is Spring Boot Profiles used for?**

- [x] To have different configurations for different environments
- [ ] To create user profiles
- [ ] To profile application performance
- [ ] To manage social media profiles

**Explanation:** Spring Profiles provide a way to segregate parts of your application configuration and make it available only in certain environments. You can have different configurations for dev, test, and production using profiles. Activate profiles using spring.profiles.active property.

---

### Question 8
**What is the purpose of @Async annotation?**

- [x] To execute methods asynchronously in a separate thread
- [ ] To make methods synchronized
- [ ] To cache asynchronous results
- [ ] To handle async HTTP requests

**Explanation:** @Async enables asynchronous method execution. When a method is annotated with @Async, Spring executes it in a separate thread from the task executor. You need to enable it with @EnableAsync and the method should return void or Future/CompletableFuture.

---

### Question 9
**What is Spring Security's default authentication mechanism?**

- [x] Form-based authentication with session management
- [ ] JWT token authentication
- [ ] OAuth2 only
- [ ] No authentication by default

**Explanation:** By default, Spring Security uses form-based authentication with session management. It generates a default login page and uses HTTP Basic authentication for REST APIs. You can customize this using SecurityFilterChain configurations.

---

### Question 10
**What is the purpose of @Validated annotation?**

- [x] To trigger validation of method parameters and support validation groups
- [ ] To validate database connections
- [ ] To check if beans are valid
- [ ] To validate configuration files

**Explanation:** @Validated is a Spring variant of JSR-303's @Valid annotation. It's used to trigger validation of method parameters, particularly supporting validation groups. When applied to a class, it enables method-level validation for that bean.

---

### Question 11
**What is Spring Cloud Sleuth used for?**

- [x] For distributed tracing and log correlation across microservices
- [ ] For tracking application performance
- [ ] For finding bugs in code
- [ ] For security auditing

**Explanation:** Spring Cloud Sleuth provides distributed tracing for microservices. It automatically adds trace and span IDs to logs, helping track requests as they flow through multiple services. It integrates with Zipkin for visualization of traces across distributed systems.

---

### Question 12
**What is the difference between @RestController and @Controller?**

- [x] @RestController automatically serializes responses to JSON/XML
- [ ] @Controller automatically serializes responses
- [ ] They are exactly the same
- [ ] @RestController is for databases only

**Explanation:** @RestController is a combination of @Controller and @ResponseBody. With @Controller, you need to add @ResponseBody to each method to serialize the return value. @RestController does this automatically, making it ideal for RESTful web services.

---

### Question 13
**What is the purpose of @RefreshScope in Spring Cloud?**

- [x] To allow beans to be refreshed when configuration changes
- [ ] To refresh database connections
- [ ] To reload the entire application
- [ ] To refresh cache periodically

**Explanation:** @RefreshScope allows beans to be re-initialized when configuration changes. When used with Spring Cloud Config, you can update configuration properties at runtime by calling the /actuator/refresh endpoint, and @RefreshScope beans will pick up the new values without restarting the application.

---

### Question 14
**What is Spring Cloud Gateway used for?**

- [x] As an API Gateway for routing and filtering requests to microservices
- [ ] For creating cloud infrastructure
- [ ] For database gateway connections
- [ ] For managing network gateways

**Explanation:** Spring Cloud Gateway is an API Gateway built on Spring WebFlux. It provides routing, filtering, load balancing, rate limiting, and circuit breaking for microservices. It's a non-blocking, reactive alternative to Zuul, offering better performance and integration with Spring ecosystem.

---

### Question 15
**What is the purpose of @ConditionalOnProperty annotation?**

- [x] To conditionally create beans based on configuration property values
- [ ] To validate property values
- [ ] To set default property values
- [ ] To encrypt property files

**Explanation:** @ConditionalOnProperty conditionally enables a bean based on the presence and value of a configuration property. It's useful for feature toggling and environment-specific bean creation. For example, you can enable certain beans only when a specific property is set to 'true'.

---