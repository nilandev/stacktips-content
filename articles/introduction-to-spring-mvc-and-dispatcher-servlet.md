---
id: 46
title: Introduction to Spring MVC and Dispatcher Servlet
slug: introduction-to-spring-mvc-and-dispatcher-servlet
excerpt: Spring is a model-view-controller (MVC) framework for Java web application. Spring is build on the powerful Spring IoC container and makes extensive use of the container features to simplify the project configuration.
difficulty: beginners
publishedDate: "2015-09-22T17:06:01.000Z"
updatedDate: "2025-09-16T23:05:26.520Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/163/thumbnail.png
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring is a **model-view-controller** (MVC) framework for Java web application. Spring is build on the powerful Spring IoC container and makes extensive use of the container features to simplify the project configuration.

## Model View Controller

The Model-view-controller (MVC) is a common design pattern used to decouple business logic from UIs. Models are responsible for encapsulating application data for views. Views should only be responsible to present data, without any business logic.

Controllers are responsible for receiving requests from users and invoking back-end services for business processing. After processing, back-end services may return some data for views to present.

Controllers collect this data and prepare models for views to present. The core idea of the MVC pattern is to separate business logic from UIs to allow them to change independently without affecting each other.

In a Spring MVC application, models usually consist of domain objects that are processed by the service layer and persisted by the persistence layer. Views are usually JSP templates written with Java Standard Tag Library (JSTL).

## Why use Spring MVC?

Following are some of the distinct advantages of Spring MVC architecture.

-   Spring is capable of convention over configuration. For most purposes you only have to define one Servlet in `web.xml`
-   Similar to Ruby on Rails or other popular web frameworks that work with dynamic languages
-   Normal business objects can be used to back to front end view forms
-   No need to duplicate objects just to implement an MVC’s command object interface
-   Can by used to map .json, .xml, .atom, etc to the same business logic code in one controller and simply output the type of data requested
-   Enforces good software engineering principles

## How it works?

The central component of Spring MVC is a Spring controller. A controller is the only servlet you need to configure in a Java web deployment descriptor `web.xml` file.

A Spring MVC controller is otherwise called as front controller generally referred to a single servlet called Dispatcher Servlet. The front controller manages the entire request handling process and every web request must go through it.

When a web request is sent to a Spring MVC application, a controller first receives the request. Then it organizes the different components configured in Spring’s web application context or annotations present in the controller itself, all needed to handle the request.

The following images depicts the Spring MVC architecture and flow of request handling in Spring MVC.

[![Introduction to Spring MVC and Dispatcher Servlet](/media/uploads/articles/163/Introduction-to-Spring-MVC-and-Dispatcher-Servlet-620x398.png)](http://stacktips.com)

## Role of a Dispatcher Servlet

-   Dispatcher Servlet is used to handle all incoming requests and route them through Spring
-   Uses customizable logic to determine which controllers should handle which incoming requests
-   Forwards all responses to through view handlers to determine the correct views to route responses to
-   Exposes all beans defined in Spring to controllers for dependency injection

A controller class in Spring 4.0 should be marked with the `@Controller` annotation. A Spring controller class need shouldn’t extend framework-specific base class or implement a framework-specific interface.

A Controller class defines a specific handler method to handle each request. When a Controller class receives a request, it looks for the appropriate handler mapping methods. The mapping is defined using the `@RequestMapping` annotation.

For example in the following code syntax, the `showMessage()` handler will handle the request comes form `/hello` endpoint.

```java
@RequestMapping("/hello")
public ModelAndView showMessage(
        @RequestParam(value = "name", required = false, defaultValue = "World") String name) {

    ModelAndView modelView = new ModelAndView("helloworld");
    modelView.addObject("message", "Welcome to Spring MVC");
    modelView.addObject("name", name);
    return modelView;
}
```

When controller class picks the appropriate handler method, it then invokes the handler method’s backend logic with the request. After a handler method has finish processing the request, it returns the instance of ModelAndView class. The ModelAndView instance represents a view.

In the course of this tutorial, we have explained the basic flow of how Spring MVC works and the role of Dispatcher Servlet.
