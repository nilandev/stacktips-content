---
id: 126
title: How Spring Controller Request Mapping works in Spring MVC
slug: how-spring-controller-request-mapping-works-in-spring-mvc
excerpt: In this tutorial, we will discuss how Spring controller request mapping works in Spring MVC and different type of request mapping mechanisms.
difficulty: intermediate
publishedDate: "2015-09-24T10:13:41.000Z"
updatedDate: "2025-09-16T23:05:26.387Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/161/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the [previous tutorial](/articles/introduction-to-spring-mvc-and-dispatcher-servlet), we have discussed the role of a Dispatcher Servlet and the steps required to create a Spring MVC application. In this tutorial, we will discuss different type of request mapping to Spring controllers.

Dispatcher Servlet is used to handle all incoming requests and route them through Spring. When `DispatcherServlet` receives a web request, it determines which controllers should handle the incoming request.

It first scans for all classes that are declared with the `@Controller` annotation. The dispatching process depends on the various `@RequestMapping` annotations declared in a controller class and its handler methods. There are three levels of request mapping can be defined in Spring controller.

### Handler Level mapping

The simplest strategy for using @RequestMapping annotations is to decorate the handler methods directly. In this method, you need to declare mapping for each handler method with the @RequestMapping annotation containing a URL pattern. If a handler’s @RequestMapping annotation matches the request URL, DispatcherServlet it dispatches the request to this handler for it to process the request.

Following are the different mapping types supported.

-   **By path**  
    @RequestMapping(“path”)
-   **By HTTP method**  
    @RequestMapping(“path”, method=RequestMethod.GET). Other Http methods such as POST, PUT, DELETE, OPTIONS, and TRACE are also supported.
-   **By query parameter**  
    @RequestMapping(“path”, method=RequestMethod.GET, params=”param1”)
-   **By the presence of request header**  
    @RequestMapping(“path”, header=”content-type=text/\*”)

The request mapping for methods can be defined as follows:

```java
@Controller
public class Employee {

    @RequestMapping("/employee/add")
    public ModelAndView add(
            @RequestParam(value = "firstName") String firstName,
            @RequestParam(value = "surName") String surName) {
        //....
        //....
        return null;
    }

    @RequestMapping(value={"/employee/remove","/employee/delete"})
    public ModelAndView delete(
            @RequestParam(value = "uuid") String uuid) {
        //....
        //....
        return null;
    }
}
```

In the above code snippet, the controller `add()` method is declared with `@RequestMapping("/employee/add")`. If the incoming request path to matches is,`/employee/add` then the add() handler method will be invoked to process the request.

Handler mappings match URLs according to their paths relative to the context path (i.e., the path where the web application is deployed) and the servlet path (i.e., the path mapped to DispatcherServlet).

### Mapping at Controller Class level

The @RequestMapping annotation can also be used to decorate a controller class. This is helpful to take the control at the top level and filter the incoming requests. If the incoming request matches the pattern defined in the controller class, then it searches the controller methods mappings.

The following code snippet describes how to define Spring @RequestMapping at the controller class level.

```java
@Controller
@RequestMapping("/employee/*")
public class Employee {

    @RequestMapping("add")
    public ModelAndView add(
            @RequestParam(value = "firstName") String firstName,
            @RequestParam(value = "surName") String surName) {
        //....
        //....
        return null;
    }

    @RequestMapping(value={"remove","delete"})
    public ModelAndView delete(
            @RequestParam(value = "uuid") String uuid) {
        //....
        //....

        return null;
    }
}
```

Notice that, we have used the wildcard (\*) for the @RequestMapping annotation for broader URL matching.

### Mapping Request Type

The `@RequestMapping` annotation handles all types of incoming HTTP request including GET, POST, PUT, DELETE, PATCH etc. By default, it’s assumed all incoming requests to URLs are of the HTTP GET kind. To differentiate the mapping by HTTP request type, we need to explicitly specify the HTTP request method in the @RequestMapping declaration.

The following code snippet describes how to declare Spring mappings by HTTP request methods.

```java
@Controller
@RequestMapping("/employee/*")
public class Employee {

    @RequestMapping(value = { "remove", "delete" }, method = { RequestMethod.POST,  RequestMethod.DELETE })
        public ModelAndView delete(@RequestParam(value = "uuid") String uuid) {
            // ....
            // ....

            return null;
        }
}
```
