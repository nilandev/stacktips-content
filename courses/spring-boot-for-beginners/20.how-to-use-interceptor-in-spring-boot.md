---
id: 360
title: How to Use Interceptor in Spring Boot Application
slug: how-to-use-interceptor-in-spring-boot
excerpt: "Learn about Spring Boot Interceptors: Create Secure REST APIs with Real-Time Use Cases. Learn Filters vs. Interceptors, Implement & Register in Spring Boot, Define Execution Order, Set Path Patterns, and Check Basic Authentication."
difficulty: intermediate
publishedDate: "2023-07-27T06:31:52.000Z"
updatedDate: "2025-09-16T23:05:37.932Z"
videoLink: DuMf8Nwb-9w
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-interceptor"
featured: false
thumbnail: /media/articles/interceptors-in-spring-boot.jpg
topics: 
  - spring-boot
tags:
  - spring-handlerinterceptor
  - spring-boot-interceptor-vs-filter
  - webmvcconfigurer-addinterceptors
  - spring-basic-authentication-interceptor
course: spring-boot-for-beginners
displayOrder: 20
seo: 
  metaTitle: "Spring Boot Interceptor Tutorial: Filters vs Interceptors"
  metaDescription: "Learn how to implement HandlerInterceptor in Spring Boot, register it with WebMvcConfigurer, set path patterns, and add basic authentication checks."
  metaKeywords: null
---

## Introduction to Interceptors

Spring Interceptors are used to intercept client requests before they are handled by the controller. They can also be used to intercept the response before the response is sent back to the client.

Interceptors are part of the Spring Web MVC framework and provide a way to add pre/post-processing logic to your application's request-response lifecycle.

### Realtime Use Cases of Interceptors

Some of the the common use cases for interceptors include tasks, such as:

-   **Logging:** Interceptors can be used to log HTTP requests and responses. This can be useful for debugging or tracking the performance of an application.

-   **Security:** Interceptors can be used to enforce security policies. For example, an interceptor could be used to check that a user is authenticated before allowing them to access a resource.

-   **Caching:** Interceptors can be used to cache HTTP requests and responses. This can improve the performance of an application by reducing the number of times that requests need to be made to the underlying resources.

-   **Transformation:** Interceptors can be used to transform HTTP requests and responses. For example, an interceptor could be used to convert JSON requests to XML responses.

### Spring Request/Response Life-Cycle

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/spring-request-response-lifecycle.png)  

In a typical Spring Boot application flow, when the client sends an HTTP request to a specific endpoint(URL), the request is first received by the web server (e.g., Apache Tomcat or Jetty) and then forwarded to the Spring Boot application.

The Dispatcher Servlet is the entry point for incoming requests in the Spring Boot application. Once the DispatcherServlet receives the request, it consults the HandlerMapping. The HandlerMapping is responsible for determining which controller should process the incoming request based on the URL mapping defined within your controller.

### Filters vs Interceptors

Similar to Interceptors, you can also use Servlet filters to intercept the request/response in Spring Boot. But Filters are part of the Servlet API and operate at a lower level.

Filters are not specific to the Spring framework. However, you can still use Servlet filters in a Spring application because the Spring framework itself is built on top of the Servlet API.

Okay then, how do I decide which one to use?

-   If the task is specifically related to Spring MVC and requires access to the Spring application context, then interceptors are more suitable.

-   If the task is not tied to Spring MVC and can be handled at the Servlet level, a filter might be a more straightforward and flexible option.

## Creating Interceptor in Spring Boot

To create an interceptor in Spring Boot, you typically create a class that implements the `**HandlerInterceptor**` interface.

The `**HandlerInterceptor**` interface has three methods:

1.  `**preHandle()**`: The preHandle() method is the most important method in the HandlerInterceptor. This method is executed before the actual controller method is called. It returns a boolean value indicating whether the request should continue to the controller or be stopped.

2.  `**postHandle()**`: This method is executed after the controller method is called but before the response is sent to the client. It allows you to modify the model and view before rendering the response. You can use this method to perform any tasks that you need to do after the request has been handled. For example, you could use the `postHandle()` method to add additional information to the response, or to log the response.

3.  `**afterCompletion()**`: This method is executed after the response has been sent to the client. This method is called even if an exception was thrown during the processing of the request. It's useful for cleanup or resource release tasks.

### Create a Spring Boot REST API

For the demonstration purpose, we will implement a Spring boot REST API with the following endpoints:

-   GET /products/list

-   POST /products/new that accepts the following JSON payload.

```json
{
   "id": "100",
   "name": "iPhone 12",
   "price: 1200.00
}
```

First, let us generate a new Spring Boot project using a Spring Initializer and add the `spring-starter-web` and `lombook` dependencies.

#### The Product Model

Let us create a new file `Product.java` and add the following code:

```java
public class Product {

    Long id;
    String name;
    Double price;

    public Product(Long id, String name, Double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
```

#### The Product Controller

Now, let us add a controller class `ProductController.java` and define the endpoint mappings:

```java
@RestController
@RequestMapping(value = "/products",
        produces = {MediaType.APPLICATION_JSON_VALUE})
public class ProductController {

    @GetMapping(value="/list")
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> products = List.of(
                new Product(1001L, "iPhone 12", 1200.0),
                new Product(1002L, "iPhone 14", 300.0)
        );

        return ResponseEntity.ok(products);
    }

    @PostMapping(value="/new")
    public ResponseEntity<Product> createProduct(
                @RequestBody Product product)throws URISyntaxException {
        return ResponseEntity.ok(product).build();
    }

}
```

Run your Spring Boot application now and verify if both endpoints are working.

## Implementing Interceptor in Spring Boot

Now that we have our Spring Boot application running let us now create an interceptor to print the logs when a request is made to our controller.

To create a interceptor in Spring boot, let us now create a new class `LogHandlerInterceptor`and implement `HandlerInterceptor` interface.

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class LogHandlerInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
      log.info("LogHandlerInterceptor::preHandle()");
      return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        log.info("LogHandlerInterceptor::postHandle()");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        log.info("LogHandlerInterceptor::afterCompletion()");
    }
}
```

## Registering the Logger Interceptor

Once you have created your custom interceptor, you need to register it with the Spring Boot application using `**WebMvcConfigurer**` configuration:

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LogHandlerInterceptor());
    }
}
```

With this configuration, your interceptor will be invoked for each incoming request, and you can implement your custom logic in the interceptor's methods accordingly.

## Interceptor to Check Basic Authentication

Let us now add another interceptor to perform the basic authentication check. This interceptor will be invoked only for `/products/new` endpoint and it will do the basic authentication check before allowing access to the controller.

For this example, we will hardcode a username and password to verify the credentials passed by the user.

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Slf4j
public class BasicAuthInterceptor implements HandlerInterceptor {
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "admin";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("BasicAuthInterceptor::preHandle()");

        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Basic ")) {

            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedCredentials = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decodedCredentials, StandardCharsets.UTF_8);

            String[] parts = credentials.split(":");
            String username = parts[0];
            String password = parts[1];

            if (USERNAME.equals(username) && PASSWORD.equals(password)) {
                return true;
            }
        }

        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        log.info("BasicAuthInterceptor::postHandle()");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        log.info("BasicAuthInterceptor::afterCompletion()");
    }
}
```

Now, we need to register the BasicAuthInterceptor class by adding it to InterceptorRegistry

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LogHandlerInterceptor());
        registry.addInterceptor(new BasicAuthInterceptor())
                .addPathPatterns("/products/new");
    }
}
```

The order of execution can be set for the interceptors using the `order()` method.

```java
registry.addInterceptor(new LogHandlerInterceptor()).order(1);
```
