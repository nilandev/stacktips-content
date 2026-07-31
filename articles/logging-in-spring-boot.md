---
id: 435
title: Logging in Spring Boot
slug: logging-in-spring-boot
excerpt: In this chapter, we will learn about different logging options available in Spring Boot and understand about different log levels and configurations for your Spring Boot application.
difficulty: beginner
publishedDate: "2024-03-22T09:46:26.000Z"
updatedDate: "2025-09-16T23:05:41.311Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-boot-logging"
featured: false
thumbnail: null
topics: 
  - spring-boot
tags:
  - spring-boot-logging
  - slf4j-logback
  - spring-boot-log-levels
  - actuator-runtime-log-level
course: getting-started-with-javascript
displayOrder: 7
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Logging is the process of recording events as they occur within your application. The purpose of logging is to create a record of what happened in an application. These events can be anything from errors, warnings or informational messages.

Application logs can be used for a variety of purposes, including: - Debugging or troubleshooting applications - To monitor the different metrics, such as CPU usage, memory usage, network traffic, etc. - To audit the activities of a Java application.

## Logging in Spring Boot

Most applications provide some form of logging, and even if your application doesn’t log anything directly, the dependencies used within your application will certainly log their activity.

To implement logging in your Spring Boot application, you don't have to do any additional configuration as it is built into the Spring Boot framework.

The Logging library is the only mandatory external dependency in the Spring Boot framework.

A log message generally contains the following information:

-   Date and Time: Millisecond precision and easily sortable.
-   Log Level: `ERROR`, `WARN`, `INFO`, `DEBUG`, or `TRACE`.
-   Process ID.
-   A `--` separator to distinguish the start of actual log messages.
-   Thread name: Enclosed in square brackets (may be truncated for console output).
-   Logger name: This is usually the class name where the log is printed from
-   The log message.

### Logging Facade (SLF4J)

The logging dependencies in Spring Boot include a Simple Logging Facade (SLF4J) and the Logback framework.

The SLF4J is a simple front-facing facade supported by all major Java logging frameworks. The SLF4J provides a unified API for logging, which helps developers use the same logging API regardless of the underlying logging framework.

!\[\[logging-framewoks-java.webp | center | 500\]\]

Applications will integrate directly with the Facade and hence it is easy to switch from one logging framework to another without breaking your implementation.

The facade includes the necessary bridges to ensure your application logs are delegated to the corresponding logging framework as per the configuration.

### Logging Frameworks

These are some of the most popular logging frameworks used in Spring Boot. - Log4j - Logback - Log4j 2 - Jakarta Commons Logging

All of the above frameworks are compatible with SLF4J.

### Log Levels

Log levels indicate the severity/importance of the log event. Here is the list of log levels used by SLF4J:

| Log Level | Purpose |
| --- | --- |
| TRACE | Used for debugging purposes. It includes the most detailed information. |
| DEBUG | Used for debugging purposes |
| INFO | Used for the normal, expected, relevant event that happened. |
| WARN | Used to log events caused due to application anomalies, which are auto-recoverable. For example, the DB connection temporarily dropped but auto-connected during the retry. |
| ERROR | Used in the event of any fatal errors. These errors will force the administrator’s intervention. These are usually used for incorrect connection strings, missing services, etc. |
| FATAL | The FATAL level designates severe error events that presumably lead the application to abort. Note that the Logback framework does not have a FATAL level. It is mapped to ERROR. |
| OFF | This is a special log level. It has the highest priority and is intended to turn off logging. |
| ALL | This is a special log level. It has the lowest priority and is intended to turn on all logging. |

## Logging an Event in Spring Boot

The following is a simple example of how to log a message in a Spring Boot application:

```groovy

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyApplication {

    private static final Logger logger = LoggerFactory.getLogger(MyApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);

        logger.trace("TRACE message");
        logger.debug("DEBUG message");
        logger.info("INFO message");
        logger.warn("WARNING message");
        logger.error("ERROR message");
        logger.error("FATAL message");
    }
}
```

INFO is the default logging level used in Spring Boot. Hence, if we run the above code, it will only log the INFO, WARN, and ERROR events. The TRACE and DEBUG messages will be suppressed.

### Setting Log Level when Starting Application

We can enable the DEBUG or TRACE mode while starting our application using a `—-debug` or `—-trace` flag. Example:

```bash

java -jar target/my-app-0.0.1-SNAPSHOT.jar --debug
```

### Setting Log Level for Spring Boot

You can specify `debug=true` or `trace=true` in your `application.properties` file to enable DEBUG or TRACE mode.

Enabling the debug mode using the above method does not configure your application to log all messages with a `DEBUG` level. It will only allow some of the core loggers inside the Spring Boot starter to log additional messages.

The application log levels can be set from the `application.properties` file using the following properties.

```properties

logging.level.root=WARN
logging.level.com.stacktips.app=TRACE
```

If you run your application, it will print as follows;

```java

2023-08-15T00:12:53.419+01:00  INFO 70870 --- [           main] c.stacktips.app.MyApplication  : Starting MyApplication using Java 17.0.7 with PID 70870 (/Users/nilanchala/Downloads/spring-boot-example/target/classes started by nilanchala in /Users/nilanchala/Downloads/spring-boot-example)
2023-08-15T00:12:53.421+01:00 DEBUG 70870 --- [           main] c.stacktips.app.MyApplication  : Running with Spring Boot v3.1.2, Spring v6.0.11
2023-08-15T00:12:53.422+01:00  INFO 70870 --- [           main] c.stacktips.app.MyApplication  : No active profile set, falling back to 1 default profile: "default"
2023-08-15T00:12:54.235+01:00  INFO 70870 --- [           main] c.stacktips.app.MyApplication  : Started MyApplication in 0.981 seconds (process running for 1.225)
2023-08-15T00:12:54.238+01:00 TRACE 70870 --- [           main] c.stacktips.app.MyApplication  : TRACE message
2023-08-15T00:12:54.238+01:00 DEBUG 70870 --- [           main] c.stacktips.app.MyApplication  : DEBUG message
2023-08-15T00:12:54.238+01:00  INFO 70870 --- [           main] c.stacktips.app.MyApplication  : INFO message
2023-08-15T00:12:54.238+01:00  WARN 70870 --- [           main] c.stacktips.app.MyApplication  : WARNING message
2023-08-15T00:12:54.238+01:00 ERROR 70870 --- [           main] c.stacktips.app.MyApplication  : ERROR message
2023-08-15T00:12:54.238+01:00 ERROR 70870 --- [           main] c.stacktips.app.MyApplication  : FATAL message
```

### Spring Boot Log File Output

By default, all logs from Spring Boot applications are printed only to the console and do not write files. If you want to write log files in addition to the console output, you need to set the following properties:

```properties

# Log file name
logging.file.name=myapp-log.log

# It will create `spring.log` file in specified path
logging.file.path=/Users/nilanchala/Documents/logs
```

Note that, Spring considers either `file` or `path` property, not both. Log files are automatically rotated when they reach 10 MB size.

### Dynamic Log Level Changes at Runtime

Spring Boot Actuator allows change log levels at runtime without restarting the application. This is useful for debugging issues in production without impacting system availability.

For the actuator to work, we need to add the following actuator dependency.

```groovy

implementation 'org.springframework.boot:spring-boot-starter-actuator'
```

Now, we can expose the Actuator's `loggers` endpoint in your `application.properties`:

```properties

management.endpoints.web.exposure.include=loggers
```

Now, we can change the log level by sending a POST request to `/actuator/loggers/{logger.name}`, with a JSON payload specifying the desired log level. For example:

```bash

curl --location 'http://localhost:8080/actuator/loggers/com.stacktips.app' \
--header 'Content-Type: application/json' \
--data '{
    "configuredLevel": "DEBUG"
}'
```

Open your web browser and visit `http://localhost:8080/actuator/loggers`. This will list out all the logs levels for your application by package.

## Logging Pattern Customization

If you want to customize the log pattern, you can define your custom pattern in `application.properties` file. For example, to include the class name, method, and line number in the logs:

```properties

logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %highlight(%-5level) --- [%15.15thread] %cyan(%logger{40}) : %msg %n
```

This customization can include various elements, such as timestamps, log levels, thread names, logger names, and even colours for different log levels when viewed in a console that supports ANSI colours.

### MDC (Mapped Diagnostic Context) Logging

Logback's MDC allows you to enrich log messages with contextual information, such as logged-in userId, making it easier to trace and debug logs across different components of an application.

You can programmatically add context information to your logs:

```java

@SpringBootApplication
public class MyApplication {

    private static final Logger logger = LoggerFactory.getLogger(MyApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);

        String userId = "user123";
        MDC.put("userId", userId);

        logger.trace("TRACE message");
        logger.debug("DEBUG message");
        logger.info("INFO message");
        logger.warn("WARNING message");
        logger.error("ERROR message");
        logger.error("FATAL message");

        MDC.remove("userId");
    }
}
```

And then include the MDC arguments in your log output pattern:

```properties

logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} [%X{userId}] - %msg%n
```

This prints

```bash

2024-03-10 23:22:14 [main] INFO  com.stacktips.app.MyApplication [] - Starting MyApplication using Java 17.0.7 with PID 85229 (/Users/nilanchala/Documents/github/StackTipsLab/spring-boot-tutorials/spring-boot-logging/build/classes/java/main started by nilanchala in /Users/nilanchala/Documents/github/StackTipsLab/spring-boot-tutorials/spring-boot-logging)
2024-03-10 23:22:14 [main] DEBUG com.stacktips.app.MyApplication [] - Running with Spring Boot v3.2.3, Spring v6.1.4
2024-03-10 23:22:14 [main] INFO  com.stacktips.app.MyApplication [] - No active profile set, falling back to 1 default profile: "default"
2024-03-10 23:22:15 [main] INFO  com.stacktips.app.MyApplication [] - Started MyApplication in 1.062 seconds (process running for 1.335)
2024-03-10 23:22:15 [main] DEBUG com.stacktips.app.MyApplication [user123] - DEBUG message
2024-03-10 23:22:15 [main] INFO  com.stacktips.app.MyApplication [user123] - INFO message
2024-03-10 23:22:15 [main] WARN  com.stacktips.app.MyApplication [user123] - WARNING message
2024-03-10 23:22:15 [main] ERROR com.stacktips.app.MyApplication [user123] - ERROR message
2024-03-10 23:22:15 [main] ERROR com.stacktips.app.MyApplication [user123] - FATAL message
```
