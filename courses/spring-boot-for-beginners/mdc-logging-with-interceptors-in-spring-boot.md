---
id: 465
title: MDC Logging with Interceptors in Spring Boot
slug: mdc-logging-with-interceptors-in-spring-boot
excerpt: How to use MDC to attach a request-correlation ID to every log line for a given HTTP request, using a Spring MVC interceptor.
difficulty: beginner
publishedDate: null
updatedDate: null
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics:
  - spring-boot
tags:
  - mdc-logging
  - spring-boot-interceptor
  - request-correlation-id
  - slf4j-logback
course: null
seo:
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## What Is MDC?

Logback's MDC (Mapped Diagnostic Context) allows you to enrich log messages with contextual information, such as a logged-in userId, making it easier to trace and debug logs across different components of an application.

You can programmatically add context information to your logs:

```java
MDC.put("userId", "user123");
logger.info("Processing request");
MDC.remove("userId");
```

Anything you `put` into MDC is available to every log statement on the current thread until you `remove` it — including log statements made deep inside other classes, as long as they run on the same thread.

## Where MDC Actually Earns Its Keep

Putting a value into MDC inside a one-off script doesn't really show why MDC matters — there's only one thread, one execution, nothing to distinguish. MDC's real value shows up once your application is handling multiple requests concurrently: each incoming HTTP request runs on its own thread, and MDC lets you tag every log line produced while handling that request with something that identifies it — a request ID, a userId, a tenant ID — so when you're staring at a wall of interleaved logs from dozens of simultaneous requests, you can filter down to just the ones that belong to the request you actually care about.

The cleanest way to do that in a Spring MVC app is with an interceptor: set the MDC value once, right when a request comes in, and clear it once the request finishes. Every log statement your controllers and services produce in between picks it up automatically, without you having to pass a request ID around as a method parameter everywhere.

## Adding a Request ID with an Interceptor

```java
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.MDC;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.UUID;

public class RequestLoggingInterceptor implements HandlerInterceptor {

    private static final String REQUEST_ID = "requestId";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        MDC.put(REQUEST_ID, UUID.randomUUID().toString());
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        MDC.remove(REQUEST_ID);
    }
}
```

`preHandle()` runs before your controller method, so that's where we generate a fresh ID and put it into MDC. `afterCompletion()` runs after the response has been sent, so that's where we clear it — otherwise, since threads get reused from a pool, the next unrelated request handled by the same thread could accidentally inherit the previous request's ID.

Register the interceptor so Spring actually uses it:

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new RequestLoggingInterceptor());
    }
}
```

## Including the Request ID in Your Logs

Add `%X{requestId}` to your log pattern to print whatever's currently stored in MDC under that key:

```properties
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} [%X{requestId}] - %msg%n
```

Now, if two requests hit your app around the same time, their logs stay distinguishable even when interleaved:

```text
2026-08-19 10:22:14 [http-nio-8080-exec-1] INFO  c.s.hello_spring.WeatherController [a1b2c3d4-...] - Handling GET /weather
2026-08-19 10:22:14 [http-nio-8080-exec-2] INFO  c.s.hello_spring.HelloController [f9e8d7c6-...] - Handling GET /hello
2026-08-19 10:22:14 [http-nio-8080-exec-1] INFO  c.s.hello_spring.WeatherController [a1b2c3d4-...] - Returning forecast for New York
2026-08-19 10:22:14 [http-nio-8080-exec-2] INFO  c.s.hello_spring.HelloController [f9e8d7c6-...] - Returning greeting
```

Even though the two requests' log lines are interleaved on the console, grepping for `a1b2c3d4` gives you every log line that belongs to that one `/weather` request, and nothing else.

## Summary

MDC lets you attach context — like a request ID or a userId — to every log line produced while handling a request, without threading that value through every method call by hand. Paired with an interceptor that sets it in `preHandle()` and clears it in `afterCompletion()`, it turns a wall of interleaved logs from concurrent requests into something you can actually filter and trace.
