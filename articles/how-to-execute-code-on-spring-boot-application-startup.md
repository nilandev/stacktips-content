---
id: 15
title: How to Execute Code on Spring Boot Application Startup?
slug: how-to-execute-code-on-spring-boot-application-startup
excerpt: Spring boot offers multiple options, for executing your code during the application startup. This post covers some of the best practices recommended by the Spring developers.
difficulty: intermediate
publishedDate: "2022-04-15T02:17:16.000Z"
updatedDate: "2025-09-16T23:05:19.919Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/6/thumbnail.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring boot offers multiple options, for executing your code during the application startup. This post covers some of the ‘out of the box’ practices recommended by the Spring developers. There are mainly 3 options

1.  Using @PostConstruct annotation

2.  Using ApplicationRunner or Command Line Runner Interface

3.  Option-3: Using Spring Boot Events

In this article, we will cover all of the available options and look into the best practices dos and don't.

Let us begin by creating a simple Spring Boot application.

## Option-1: @PostConstruct Annotation

The @**PostConstruct** annotation can be used on a method to indicate a spring that, this method should be executed after the bean is initialized.

You can add `@PostConstruct` annotation in your Spring boot main application class or from a `@Component` or a `@Service` class.

@PostConstruct is mainly used to complete the initialization of your application. It is part of the Spring Boot Lifecycle.

```java
@Slf4j
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

        @PostConstruct
    public void int(){
             log.info("MyApplication::init()");
        }
}
```

Please note that I am using the `@Slf4j` from the `Lombok` package for logging purposes.

The @PostConstruct is mainly used to complete the initialization of your application. It is part of the Spring Boot Lifecycle. This can be used to execute code on startup, but it is not as common as the other two options.

Here is how the logs will be printed:

```text
INFO 81697 - [main] com.stacktips.MyApplication              : Starting MyApplication using Java 17.0.7 on N-Panigrahy.local with PID 81697
INFO 81697 - [main] com.stacktips.MyApplication              : No active profile set, falling back to 1 default profile: "default"
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
INFO 81697 - [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
INFO 81697 - [main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
INFO 81697 - [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
INFO 81697 - [main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 824 ms
INFO 81697 - [main] com.stacktips.MyApplication              : MyApplication::run()
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
INFO 81697 - [main] com.stacktips.MyApplication              : Started MyApplication in 1.457 seconds (JVM running for 1.693)
```

If you want to execute some long-running tasks, you should avoid this approach.

Now let's review the second option.

## Option-2: Using ApplicationRunner or Command Line Runner Interface

Both `ApplicationRunner` and `CommandLineRunner` is the recommended method if you have to execute some code after the initialization of the application.

Both the `CommandLineRunner` and `ApplicationRunner` are functional interface that provides a `run()` method. The run method is called after the Spring application context is initialized.

Let's see how to implement that.

```java
@Slf4j
@Component
public class AppRunner1 implements ApplicationRunner {

    @Override
    public void run(ApplicationArguments args) throws Exception {
        log.info("AppRunner1:run() ");
    }
}
```

You could implement the `ApplicationRunner` in your main class as well, but I would like to separate it into a dedicated class.

**ApplicationRunner:** This is similar to the `CommandLineRunner` interface, but it provides an `ApplicationArguments` object that contains the command-line arguments that were passed to the application. This can be useful if you need to access the command-line arguments in your startup code.

You could have multiple `ApplicationRunner` implementations in your code.

```java
@Slf4j
@Component
public class AppRunner2 implements ApplicationRunner {

    @Override
    public void run(ApplicationArguments args) throws Exception {
        log.info("AppRunner2:run()");
    }
}
```

But where there are multiple runners, spring doesn’t know which order they should execute. if you want to preserve the order of execution for the application runners, you can do that using the  `@Order(1)` annotation.

Here is how our logs will be printed now

```text
INFO 81697 - [main] com.stacktips.MyApplication              : Starting MyApplication using Java 17.0.7 on N-Panigrahy.local with PID 81697
INFO 81697 - [main] com.stacktips.MyApplication              : No active profile set, falling back to 1 default profile: "default"
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
INFO 81697 - [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
INFO 81697 - [main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
INFO 81697 - [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
INFO 81697 - [main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 824 ms
INFO 81697 - [main] com.stacktips.MyApplication              : MyApplication::run()
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
INFO 81697 - [main] com.stacktips.MyApplication              : Started MyApplication in 1.457 seconds (JVM running for 1.693)
INFO 81697 - [main] com.stacktips.AppRunner2                 : AppRunner2::run()
INFO 81697 - [main] com.stacktips.AppRunner                  : AppRunner::run()
```

## Option-3: Using Spring Boot Events

The Spring Boot application provides a number of events that are published during the application lifecycle. We can register a listener for one of these events and execute code in the listener's `onApplicationEvent()` method.

```java
@Slf4j
@Component
public class ApplicationStartEvent {

    @EventListener(ApplicationReadyEvent.class)
    public void onReadyEvent(){
        log.info("ApplicationStartEvent::onReadyEvent()");
    }

}
```

Now if we run all three options together, this is what the output looks like.

```text
INFO 81697 - [main] com.stacktips.MyApplication              : Starting MyApplication using Java 17.0.7 on N-Panigrahy.local with PID 81697
INFO 81697 - [main] com.stacktips.MyApplication              : No active profile set, falling back to 1 default profile: "default"
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
INFO 81697 - [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
INFO 81697 - [main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
INFO 81697 - [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
INFO 81697 - [main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 824 ms
INFO 81697 - [main] com.stacktips.MyApplication              : MyApplication::run()
INFO 81697 - [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
INFO 81697 - [main] com.stacktips.MyApplication              : Started MyApplication in 1.457 seconds (JVM running for 1.693)
INFO 81697 - [main] com.stacktips.AppRunner2                 : AppRunner2::run()
INFO 81697 - [main] com.stacktips.AppRunner                  : AppRunner::run()
INFO 81697 - [main] com.stacktips.ApplicationStartEvent      : ApplicationStartEvent::onReadyEvent()
```
