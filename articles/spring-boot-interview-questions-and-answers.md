---
id: 422
title: Spring, Spring Boot Interview Question Answers
slug: spring-boot-interview-questions-and-answers
excerpt: A curated set of interview questions and answers on spring, spring boot, JPA and Hibernate
difficulty: intermediate
publishedDate: "2024-09-29T21:32:58.000Z"
updatedDate: "2025-09-16T23:05:40.595Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring-boot
tags:
  - spring-boot-interview-questions
  - dependency-injection-spring
  - jpa-hibernate-interview
  - n-plus-one-query-problem
  - resttemplate-vs-webclient
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A curated set of interview questions and answers on spring, spring boot, JPA and Hibernate.

## Spring, Spring Boot

* * *

### 1\. Explain Dependency Injection in the context of Spring.

DI is a software design pattern used in object-oriented programming, where the dependencies of a class are provided by an external entity rather than being created within the class itself.

In other words, instead of a class creating and managing its dependencies, those dependencies are created and managed outside but, are "injected" into your class whenever you need it. The main idea behind Dependency Injection is to decouple the bean instantiation process from your actual business logic implementation.

Dependency Injection (DI) is one of the core concepts of the Spring Framework. It is achieved through the Spring Framework's Inversion of Control (IoC) container. This allows the loose coupling of components and object creation and disposal responsibility is handed over to the spring container.

Any object in the Spring framework that is initialized through the Spring container is called Spring Bean.

Dependency Injection works in a stepped approach;

-   Bean identification/registration
-   Bean injection

Bean identification refers to the way beans are identified within the Spring IoC container. Bean identification can happen with `@Bean` annotation on the `@Configuration` class or using any of the 3 stereotypes (`@Service`, `@Repository` or `@Componenet` annotation).

Bean Injection is the process by which one object (the dependency) is passed to another object that needs it (the dependent) rather than the dependent object needing to create the dependency itself. Bean injection can be done using @Autowired field injection, setter method injection or constructor injection.

Learn more about [dependency injection](https://stacktips.com/courses/spring-boot-for-beginners/dependency-injection-in-spring-boot) here.

### 2\. Explain `@RestController` annotation in Springboot. How `@RestController` is different from `@Controller` annotation?

The `@RestController` annotation is a combination of `@Controller` and `@ResponseBody`, used for creating a restful controller. It converts the response to JSON or XML. It ensures that data returned by each method will be written straight into the response body instead of returning a template.

The `@Controller` Map of the model object to view or template and make it human-readable but `@RestController` simply returns the object and object data is directly written in HTTP response as JSON or XML.

### 3\. What is the difference between @Component, @Service and @Repository annotations?

**@Component** It is a generic stereotype for any Spring-managed component or bean. It tells Spring to look for “Components” when the application starts.

**@Repository** It is a stereotype used for the persistence layer beans.

**@Service** This stereotype is used to indicate that they’re holding the business logic. ![|600](/media/articles/1/Blank-diagram.png)

### 4\. Explain Transitive Dependency resolution in Spring boot with an example.

As your application grows, the number of dependencies will grow and managing those dependencies manually is very cumbersome and error-prone. That’s where the Spring boot starter packages come to the rescue. Spring Boot provides several Spring Boot starter packages to address this problem.

There are two types of dependencies:

-   **Direct:** These are dependencies defined in your `pom.xml` or `build.gradle` file under the `dependencies` section.
-   **Transitive:** These are dependencies that are dependencies of your direct dependencies.

For example, if we add the `spring-boot-starter-web` as a dependency to your `pom.xml` file then will download `spring-boot-starter-tomcat` as the direct dependency and with that it will also download the other transitive dependencies like `tomcat-embedded-core` and `tomcat-embedded-el` and `tomcat-embedded-websocket`.

### 5\. How to handle exceptions in RestController and return appropriate error responses?

The `@ControllerAdvice` annotation can be used to handle exceptions thrown from any controllers.

```java
@ControllerAdvice
class GlobalControllerExceptionHandler {

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(CustomException.class)
    public void handleCustomException() {
       // handle the error and respond
    }

}
```

### 6\. What are the different options available to make external HTTP API calls from the Spring Boot Application?

Spring boot provides multiple options to make external HTTP calls:

-   [RestTemplate](https://stacktips.com/articles/rest-clients-in-spring#1-resttemplate):
    -   It is a synchronous HTTP client. The `RestTemplate` is marked for deprecation in Spring 6 and it is recommended to use `RestClient` for applications using Spring 6 or above.
    -   Reference
-   [Feign client](https://stacktips.com/articles/rest-clients-in-spring#2-feign-client):
    -   Feign is a declarative REST client designed to simplify the process of writing web service clients by handling boilerplate tasks such as client creation and response handling. To use Feign we simply need to define an interface using standard JAX-RS annotations, and the framework manages the rest.
-   [WebClient](https://stacktips.com/articles/rest-clients-in-spring#3-webclient)
    -   The `WebClient` is an alternative to `RestTemplate`. It was introduced in Spring 5 as part of the **WebFlux** stack. It provides both synchronous and asynchronous APIs to make the REST calls from the Spring application.
    -   To use `WebClient` in a Spring Boot application, we need to add the `spring-boot-starter-webflux` dependency.
-   [RestClient](https://stacktips.com/articles/rest-clients-in-spring#4-restclient) (New in 3.2.x)
    -   The `RestClient` is a newer client in Spring 6, designed to overcome some limitations of `RestTemplate`. It supports both synchronous and asynchronous operations.
    -   It works similarly to the `WebClient` API, except we don’t have to add the WebFlux dependency.
-   [HTTP Interface](https://stacktips.com/articles/rest-clients-in-spring#5-http-interface)
    -   Spring 6 also adds the ability to create a declarative HTTP interface (similar to Feign) using the existing HTTP clients such as `RestTemplate`, `WebClient` and `RestClient`.
    -   It creates a proxy to perform requests and attach it to the preferred HTTP client configured. For example, the above `ProductApiClient` can be written using a declarative HTTP interface as follows:

### 7\. What are the limitations of RestTemplate? and how does it compare with WebClient?

[WebClient](https://stacktips.com/articles/what-is-webclient-how-to-use-webclient-in-java-springboot) is a non-blocking, reactive HTTP client introduced in Spring 5.0, which is the reactive counterpart to the traditional [RestTemplate](https://stacktips.com/articles/calling-rest-services-using-resttemplate) in Spring Boot. It provides a simplified and intuitive API for making HTTP requests. It is designed to handle both synchronous and asynchronous operations.

### 8\. What are the different scheduling configurations available for performing periodic tasks?

Spring scheduler is used to schedule the task. It is a scheduler that runs in the background and executes the task at the specified time. We can schedule a task by enabling `@EnableScheduling` annotation and then using `@Scheduled` annotation.

The `@Scheduled` annotation supports cron, `fixedDelay`, `fixedRate` and `cron` configuration options.

### 9\. I want to write a validation to ensure all configurations are loaded correctly when my application starts. Which is the best place to write that logic?

Spring boot offers multiple options, for executing your code during the application startup. There are 3 out-of-the-box practices recommended by the Spring developers.

1.  Using `@PostConstruct` annotation
2.  Using ApplicationRunner or Command Line Runner Interface
3.  Option-3: Using Spring Boot Events

Learn with the [example](https://stacktips.com/articles/how-to-execute-code-on-spring-boot-application-startup) here.

### 10\. What are the differences between JAR and WAR bundles?

JAR (Java Archive) and WAR (Web Archive) are formats used in the Java ecosystem for packaging and distributing applications. But they have a completely different purpose.

**JAR (Java Archive):** - Jar files are used to package and distribute standalone Java applications. They contain a set of classes, resources, and other files that are required to run the application. - JAR files are typically self-contained, meaning that they do not require any additional dependencies to be installed on the system where they are run.

**WAR (Web Archive):** - WAR files are a specific type of JAR file that is used to package and distribute web applications. - They contain all of the files that are required to run the web application, including the Java classes, web pages, static resources, and deployment descriptor files. - WAR files are typically deployed to a web server, where they are run in a servlet container.

Learn more about [Jar vs War](https://stacktips.com/courses/spring-boot-for-beginners/creating-first-spring-boot-project#war-vs-jar)

### 11\. How do you configure externalized properties in a Spring Boot application?

To configure externalized properties in a Spring Boot application, you can use `application.properties` or `application.yml` files. These files can be placed in the classpath or externalized to a specific location.

You can access these properties programmatically using the `@Value` annotation or by injecting an instance of the class.

```java
@Component
public class MyBean {

    @Value("${name}")
    private String name;
    // ...
}
```

We can also bind the properties using the Spring `DataBinder` utility using the `@ConfigurationProperties` annotation on a class.

```java
@ConfigurationProperties(prefix="my")
public class Config {

    private List<String> servers = new ArrayList<String>();

    public List<String> getServers() {
        return this.servers;
    }
}
```

### 12\. What is the best way to check if authentication headers are added to all incoming HTTP requests?

To validate the headers in my incoming requests we have two options: Servlet filters and Spring interceptors.

Spring Interceptors are used to intercept client requests before they are handled by the controller. They can also be used to intercept the response before the response is sent back to the client. [Interceptors](https://stacktips.com/articles/how-to-use-interceptor-in-spring-boot) are part of the Spring Web MVC framework and provide a way to add pre/post-processing logic to your application's request-response lifecycle.

If you have servlet filters defined, then the request first passes through the servlet filters before it reaches to the `DispatcherServlet`. If you have multiple filters within your application, it invokes the filters based on the order defined.

### 13\. How Filters are different from Interceptors?

Filters are similar to Interceptors, you can also use Servlet filters to intercept the request/response in Spring Boot. But Filters are part of the Servlet API and operate at a lower level.

Check out [here for a detailed article](https://stacktips.com/articles/how-to-use-interceptor-in-spring-boot#filters-vs-interceptors).

### 14\. What are the Limitations of Spring Scheduler?

-   **No support for dynamic Scheduling:** The `@Scheduled` annotations are typically configured at application startup and do not support runtime changes without redeploying the application.
-   **No support for Job Persistence**: It does not offer built-in support for Job persistence, as a result, job recovery in the event of an application restart is not possible.
-   **No clustering, load balancing:** It does not support clustering and load balancing, The tasks are typically run on a single node.
-   **Limited control:** It does not allow fine-grained control over managing the tasks. For example, we cannot pause, resume, and unscheduled jobs individually.

Spring Scheduler is sufficient for many simple scheduling tasks, but if you have complex scheduling requirements, job management, and monitoring, then you would need another framework like Quartz.

Limitations of [Spring Scheduler](https://stacktips.com/articles/task-execution-and-scheduling-in-spring-boot#limitations-of-spring-scheduler):

### 15\. How to handle database migrations with MySQL and JPA?

Primarly we have two choices to manage database migrations in the spring boot application. - [Flyway](https://stacktips.com/articles/using-flyway-for-database-migration-in-spring-boot#integrating-flyway-in-spring-boot) - Liquibase

Both tools work pretty much the same. You need to add the Flyway or Liquibase dependency to your project. All the database changes are managed in the changelog file. If the DB migration is enabled, it executes the migration files during the application startup and executes the SQL queries if there are any changes to the checksum.

### 16\. What is Cross-Origin Resource Sharing (CORS)? How do we enable CORS in a Spring Boot RESTful API?

Cross-Origin Resource Sharing (CORS) is a security mechanism implemented by web browsers to control access to resources (like APIs) from a different domain than the one serving the web page. It's an important concept in web development, especially for RESTful APIs.

CORS allows servers to specify which origins (domains) are allowed to make requests to them. This is crucial for security, as it prevents malicious websites from making unauthorized requests to your API.

There are several ways to enable CORS in a Spring Boot application.

**Using global CORS configuration:**

```java
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("https://stacktips.com")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```

**Configuring CORS in Controller-level**

```java
@RestController
@CrossOrigin(origins = "https://stacktps.com")
public class HelloController {

    @GetMapping("/hello")
    public String getData() {
        return "Hello World!";
    }
}
```

**Method-level CORS:**

```java
@RestController
public class HelloController {

    @CrossOrigin(origins = "https://stacktps.com")
    @GetMapping("/hello")
    public String getData() {
        return "Hello World!";
    }
}

```

Other CORS Configuration Options: - `allowedOrigins`: Specifies which origins are allowed to make requests. - `allowedMethods`: Specifies which HTTP methods are allowed (GET, POST, etc.). - `allowedHeaders`: Specifies which headers are allowed in the request. - `exposedHeaders`: Specifies which headers should be exposed to the client. - `allowCredentials`: Indicates whether the browser should include credentials (like cookies) with the request. - `maxAge`: Specifies how long the browser should cache the CORS configuration.

### 18\. Explain the purpose of the `@Autowired` annotation in Spring Boot.

The `@Autowired` annotation in Spring Boot is used for field injection. When fields are marked with `@Autowired` annotation, spring automatically injects that bean.

```java
@Service
class UserService{

    @Autowired
    private UserRepository repository;

    //Other methods
}
```

### 19\. What is REST, and how does it differ from SOAP

**REST (Representational State Transfer)** - REST is suitable for CRUD operations and simple APIs. Best for stateless, resource-based interactions. REST relies on stateless communication and standard HTTP methods. - Resources are identified by URLs, and representations of resources are typically transferred in JSON or XML format.

**SOAP (Simple Object Access Protocol)** - It is suitable for enterprise-level services requiring strict standards, security, and transactions. - Uses WSDL (Web Services Description Language) - It has built-in support for stateful operations and transactions, which can be beneficial for certain types of applications.

| Feature/Protocol | REST | SOAP |
| --- | --- | --- |
| Architecture | Resource-based | Protocol-based |
| Data Format | JSON, XML | XML |
| Transport | HTTP | HTTP, SMTP, etc. |
| Communication | Stateless | Can be stateful |
| Flexibility | High | Low |
| Ease of Use | High | Medium |
| Error Handling | HTTP status codes | Detailed (SOAP faults) |

### 20\. What is HATEOAS in the context of RESTful APIs?

The HATEOAS is stands for Hypermedia as the engine of Application State, is one of the key principles of RESTful architecture. It enhances the discoverability of RESTful APIs using hypermedia.

Instead of having predefined endpoints, a HATEOAS-compliant API provides links dynamically with the responses, allowing the client to navigate the API dynamically.

A HATEOAS-compliant API response looks something similar to:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "_links": {
    "self": {
      "href": "http://api.example.com/users/1"
    },
    "friends": {
      "href": "http://api.example.com/users/1/friends"
    },
    "update": {
      "href": "http://api.example.com/users/1",
      "method": "PUT"
    },
    "delete": {
      "href": "http://api.example.com/users/1",
      "method": "DELETE"
    }
  }
}
```

## JPA, JDBC, Hibernate

* * *

### 21\. Explain the difference between JDBC and Hibernate.

JDBC (Java Database Connectivity) and Hibernate are both used for interacting with databases in Java applications.

While JDBC provides low-level API to interact with databases using SQL queries directly, Hibernate is an ORM (Object-Relational Mapping) framework that provides a higher level of abstraction over JDBC.

With JDBC, you need to manually handle the database connection, prepare SQL statements, execute them, manage the result sets, and manage transactions.

Hibernate automatically maps Java objects to database tables, allowing you to work with data in an object-oriented way without writing SQL queries for most database operations. It also comes with built-in support for transaction management and handles one-to-one, one-to-many, many-to-one, and many-to-many relationships.

### 22\. Discuss the advantages and disadvantages of using an ORM (Object-Relational Mapping) framework like Hibernate.

**Advantages** - Hibernate automatically generates SQL queries based on object manipulations. You don't need to work with writing SQL queries. - Many common tasks like opening and closing DB connections, managing transactions, and handling result sets are handled by the ORM. This means you have to write less code as compared to using JDBC. - Hibernate abstracts the underlying database by generating SQL according to the dialect of the chosen database. It supports a wide range of databases (including MySQL, PostgreSQL, and Oracle) making it easier to switch to a different database. - It integrates well with Spring's transaction management workflow and supports ACID properties ensuring data consistency.

**Disadvantages** - Queries generated from Hibernate may not always be optimized. - While lazy loading improves performance, it can lead to the "N+1 problem," where multiple small queries are executed instead of a single efficient query, impacting performance in certain scenarios.

### 23\. Can we write a native SQL query in JPA?

You can write a native SQL query using the `@Query` annotation. Eg.

```java
@Query("SELECT u FROM User u WHERE u.status = 1")
Collection<User> findAllActiveUsers();

@Query("SELECT u FROM User u WHERE u.status = 1 AND u.name = ?1")
Collection<User> fetchUsersWithNameAndStatus(string name, String status);
```

### 24\. Explain the difference between JPQL, SQL, and Criteria API in the context of Spring Data JPA and when you would use each.

**JPQL** Java Persistence Query Language is an object-oriented query language used to perform queries on JPA entities. It's independent of the underlying database and SQL dialect.

**SQL** Structured Query Language is a language used to communicate with relational databases. Native SQL queries can be executed in Spring Data JPA using the `@Query` annotation with the `nativeQuery` flag set to true.

**Criteria API** It is a type-safe, programmatic way to create JPA queries. It's more verbose than JPQL but provides better compile-time checks.

Use JPQL for simple to moderately complex queries, SQL for database-specific queries or optimizations, and Criteria API for complex and type-safe queries.

### 25\. What is the role of the @Transactional annotation in Spring Data JPA, and how does it affect database transactions?

The `@Transactional` is used to define the boundaries of a transaction in Spring Data JPA. When a method annotated with `@Transactional` is called, a new transaction is started. The transaction is committed when the method completes successfully and rolled back if an exception occurs. It ensures the consistency and integrity of the data.

### 26\. What is the N+1 query problem? How do you handle lazy-loading and N+1 query problems in Spring Data JPA?

The N+1 query problem happens when the data access framework executes N additional SQL statements to fetch the same data that could have been retrieved when executing the primary SQL query.

The larger the value of N, the more queries will be executed, and the larger the performance impact. And, unlike the slow query log that can help you find slow-running queries, the N+1 issue won’t be spotted because each additional query runs sufficiently fast to not trigger the slow query log.

The problem is executing a large number of additional queries that, overall, take sufficient time to slow down response time. Lazy-loading can be addressed by:

1.  Using `FetchType.EAGER` to load related entities immediately.
2.  Using `JOIN FETCH` in JPQL or EntityGraph to all required relationships in a single query.
