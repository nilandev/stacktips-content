---
id: 434
title: Dependency Injection in Spring Boot
slug: dependency-injection-in-spring-boot
excerpt: "This chapter covers how Dependency Injection works in Spring Boot including @Autowired, field injection, constructor injection and setter method injection."
difficulty: beginner
publishedDate: "2024-03-22T09:35:19.000Z"
updatedDate: "2025-09-16T23:05:41.280Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-dependency-injection"
featured: false
thumbnail: null
topics: 
  - spring-boot
course: getting-started-with-javascript
displayOrder: 5
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Before diving into the definition of DI, let us see how we manage dependencies traditionally in Java without using Spring Dependency Injection.

```java
public class UserService {
    final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final EmailService emailService;
    private final UserRepository userRepository;

    public UserService() {
        this.emailService = new EmailService();
        this.userRepository = new UserRepository();
    }

    public void registerUser(User user) {
        userRepository.saveUser(user);

        emailService.emailUser("User registered successfully!",
                user.getEmail());
    }
}
```

In the above code snippet, the `UserService` class has the `registerUser()` method, which is used to create a user and then send an email notification.

Hence the `UserService` class defines the `EmailService` and `UserRepository` member variables, and they are instantiated within the default constructor of the `UserService` class.

The challenge with the above code is:

-   It creates a hard-coded dependency of `UserRepository` and `EmailService` within your `UserService` class.
-   The creation and usage of dependencies are tightly intertwined. If there are any changes to the `UserRepository` or `EmailService`, we need to modify the `UserService` implementation.
-   This can make our code difficult to test as we cannot easily mock the `UserRepository` and `EmailService` instances.

The testing challenges can be addressed by refactoring the `UserService` to have a constructor that passes two arguments.

```java
public class UserService {
    final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final EmailService emailService;
    private final UserRepository userRepository;

    public UserService(EmailService emailService, UserRepository userRepository) {
        this.emailService = emailService;
        this.userRepository = userRepository;
    }

    public void registerUser(User user) {
        userRepository.saveUser(user);

        emailService.emailUser("User registered successfully!",
                user.getEmail());
    }
}
```

Now we can inject the mocks and do our testing, but this does not solve the real problem, as it is just moving the issue from one place to another.

As the number of dependencies and classes grows, manually managing dependencies can lead to a lot of repetitive code, which can be error-prone and increase the maintenance burden.

In essence, while it is technically possible to write your application without a Dependency Injection (DI) container, it becomes cumbersome, less maintainable, and error-prone as your application becomes more complex.

This is where the Dependency Injection comes to the rescue.

## What is DI?

DI is a software design pattern used in object-oriented programming, where the dependencies of a class are provided by an external entity rather than being created within the class itself.

In other words, instead of a class creating and managing its dependencies, those dependencies are created and managed outside but, are "injected" into your class whenever you need it.

The main idea behind Dependency Injection is to decouple the bean instantiation process from your actual business logic implementation.

## Dependency Injection (DI) in Spring

Dependency Injection (DI) is one of the core concept of the Spring Framework. It is achieved through the Spring Framework's Inversion of Control (IoC) container. This allows the loose coupling of components and object creation and disposal responsibility is handed over to the spring container.

![](/media/summernote/dependency-injection.jpg)  

Any object in the Spring framework that is initialized through the Spring container is called Spring Bean.

Dependency Injection works in a stepped approach: - Bean identification/registration - Bean injection

### Bean Identification/ Bean Registration

Bean identification refers to the way beans are identified within the Spring IoC container. Each bean is given a unique identifier that can be used to reference it later within the spring application context.

In Spring, this can be done using a XML configuration, Java Configuration or annotation-based configuration:

#### XML Schema Based Configuration:

Spring Beans can be explicitly defined in an XML configuration file. The Spring IOC reads the XML file and registers all the beans defined.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="<http://www.springframework.org/schema/beans>"
    xmlns:xsi="<http://www.w3.org/2001/XMLSchema-instance>"
    xsi:schemaLocation="<http://www.springframework.org/schema/beans>
    <http://www.springframework.org/schema/beans/spring-beans.xsd>">

    <bean id="userService" class="com.stacktips.app.service.UserService">
        <!-- Configure properties and dependencies needed -->
    </bean>
</beans>
```

The downside of using XML configurations is they are not type-safe, meaning errors can be introduced that won't be caught until runtime.

#### Java Configuration:

Using Java-based configuration, beans are defined in a configuration class using the `@Bean` annotation. The configuration class marked with `@Configuration` annotation. It indicates that the class contains one or more bean definitions containing `@Bean` annotations.

For example:

```java
@Configuration
public class AppConfig {

    @Bean
    public EmailService emailService() {
        return new EmailService();
    }

    @Bean
    public UserService userService(EmailService emailService) {
        return new UserService(emailService);
    }
}
```

#### Annotation-based configuration:

Spring also provides a component scanning feature, using which spring automatically detect and registers the spring managed beans.

The `@ComponentScan` annotation, searches for all classes that are marked with stereotypes such as `@Service`, `@Component`, `@Repository`, or `@Configuration` annotation, and does the bean registration automatically.

For example, if you have a package `com.stacktips.app` that contains Spring-managed components, you can use `@ComponentScan` to register all of them with the Spring container.

```java
@Configuration
@ComponentScan("com.stacktips.app")
public class AppConfig {

}
```

#### Bean Identification in Spring Boot:

In Spring Boot, the bean registering is typically done automatically using the `@ComponentScan` annotations rather than an explicit XML or Java configuration. The `@ComponentScan` annotation is wrapped inside the `@SpringBootApplication` annotation.

As every spring boot application uses to `@SpringBootApplication` annotation, we do not have to add the `@ComponentScan` annotation explicitly. It performs component scanning starting from the package of your main class.

Hence, in case of Spring Boot, all we need to do is to use appropriate stereotypes for our classes.

```java
@Service
public class UserService {
    // Your UserService implementation here
}
```

### Bean Injection

Bean Injection is the process by which, one object (the dependency) is passed to another object that needs it (the dependent), rather than the dependent object needing to create the dependency itself.

There are 3 main types of bean injection in Spring Boot

1.  Field Injection
2.  Constructor Injection
3.  Setter Method injection

#### Field Injection

In Field Injection, the dependencies are injected directly into the component's fields using the `@Autowired` annotation.

```java
@Service
public class MyService {

    @Autowired
    private MyRepository myRepository;

    // Your UserService implementation here
}
```

This approach is convenient but, due to direct field access it poses testing challenges;

#### Constructor Injection

Using constructor injection, the dependencies are injected through a component's constructor. The `@Autowired` annotation can be used on the constructor to indicate that a dependency should be injected into the constructor.

```java
@Service
public class MyService {
    private final MyRepository myRepository;

    @Autowired
    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

Starting with Spring _4.3_, if a class, which is configured as a Spring bean, has only one constructor, the `@Autowired` annotation can be omitted and Spring will automatically inject all required dependencies.

If you have multiple overloaded constructors, we need to specify one of the constructors using `@Autowired` annotation.

#### Setter Method Injection

The Setter Injection allows for the modification of an object's dependencies after it has been constructed. This can be useful when an object's dependencies need to change dynamically at runtime.

It's more suitable for optional dependencies that can have default values or can be set to `null`.

```java
@Service
public class MyService {
    private final MyRepository myRepository;

    @Autowired
    public setRepository(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

Note that the setter injection has a potential risk that of the object might be used before all of its dependencies are set, which can lead to potential `NullPointerExceptions`.
