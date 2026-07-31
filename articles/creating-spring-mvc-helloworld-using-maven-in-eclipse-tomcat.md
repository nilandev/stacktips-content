---
id: 45
title: Creating Spring MVC HelloWorld Using Maven in Eclipse Tomcat
slug: creating-spring-mvc-helloworld-using-maven-in-eclipse-tomcat
excerpt: In the course of this tutorial, we will learn how to create your first Spring MVC application using eclipse IDE using Maven build type.
difficulty: beginners
publishedDate: "2015-09-24T08:30:03.000Z"
updatedDate: "2025-09-16T23:05:26.441Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/162/thumbnail.png
topics: 
  - spring
tags:
  - spring-mvc-helloworld
  - how-tos
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the course of this tutorial, we will learn how to create your first Spring MVC application using eclipse IDE using Maven build type.

## Prerequisites

-   Java version 1.7
-   Latest Spring STS
-   Apache Tomcat 7.0.x

This tutorial assumes that, you have downloaded and installed the above mentioned softwares on your computer. If you have not installed Java on your development machine, you can follow the official oracle documentation for the installation for your configuration.

Without spending any further time, let us jump straight into creating the project in eclipse.

## Create a Maven Project

-   **File** -> **New** -> **Other**… It will open the eclipse select wizard.

[![Create Maven Spring project](/media/articles/163/Introduction-to-Spring-MVC-and-Dispatcher-Servlet-620x398.png)](http://stacktips.com)

-   Select **Maven** -> **Maven Project** and click **Next**.
-   Again click **Next** on New Maven Project dialog.
-   Select an Archetype either by filtering **webapp** or selecting from the available artifacts and click **Next**.

[![Create new eclipse maven project](/media/articles/162/Create-new-eclipse-maven-project.png)](http://stacktips.com)

-   Provide the details for Group Id and Artifact Id and click **Finish**. As a general practice, the group id is your company domain name (i.e. com.javatechig) and artifact id is the name of your application.
-   This will create a basic Maven project template in eclipse.

## Create a Server Instance

In this example we will be using **Apache** **Tomcat** application server for deploying our Spring MVC application. Now let us add a server instance on eclipse.

-   **File** -> **New** -> **Other**… It will open the eclipse select wizard.

[![Add Tomcat Server Eclipse](/media/articles/162/Add-Tomcat-Server-Eclipse.png)](http://stacktips.com)

-   Select Server -> Server and click **Next**.
-   Select Apache -> **Tomcat v7.0 Server** and click **Next**. In this example, we will be using Apache Tomcat version 7.0. However, the similar steps will work for other tomcat versions.
-   Browse and select the **Apache Tomcat v7.0** server installation directory and click **Finish**.

## 4\. Update Project Build Path

You might notice a error on your project. This is due to the project Build path problem. To fix this you need to right click on project -> **Properties** to open project Java Build Path settings.

Select **Libraries** tab and click on **Add Library**…-> **Server Runtime** -> **Apache Tomcat** -> **Finish**.

## 5\. Configure Spring Dependency

Before we develop Spring MVC web application, we need to configure the project by adding the required Maven dependencies. Add the following Maven dependencies into your `pom.xml` file.

##### pom.xml

```xml

    4.0.0
    com.javatechig
    HelloMVC
    war
    0.0.1-SNAPSHOT
    HelloMVC Maven Webapp
    http://maven.apache.org



        4.2.1.RELEASE






            org.springframework
            spring-core
            ${spring.version}



            org.springframework
            spring-webmvc
            ${spring.version}



            org.springframework
            spring-web
            ${spring.version}




            junit
            junit
            3.8.1
            test



        HelloMVC


```

With this the basic Spring project configuration is complete. Your project structure should look like as the following screenshot.

[![Spring MVC Eclipse Maven Project Structure](/media/articles/162/Spring-MVC-Eclipse-Maven-Project-Structure.png)](http://stacktips.com)

The following steps will take you through the rest of the steps to create and deploy Spring MVC HelloWorld app.

## 6\. Configure Dispatcher Servlet

The `DispatcherServlet` must be configured as normal in `web.xml` to bootstrap a Spring WebApplicationContext. Edit the default `web.xml` file and add the following.

##### web.xml

```xml

    Archetype Created Web Application

        contextConfigLocation
        /WEB-INF/dispatcher-servlet.xml




            org.springframework.web.context.ContextLoaderListener




        dispatcher

            org.springframework.web.servlet.DispatcherServlet

        1



        dispatcher
        /


```

## 7\. Mapping Requests

Create an xml file `dispatcher-servlet.xml` under the same directory of `web.xml`.

##### dispatcher-servlet.xml

```xml





            /WEB-INF/views/


            .jsp



```

In the above xml file, base-package specifies the package of the controllers. prefix specifies the directory of views, and it is set to be `/WEB-INF/views/`, which means views directory should be created under WEB-INF. suffix specifies the file extension of views. For example, given a view `hello`, the view will be located as `/WEB-INF/views/hello.jsp`.

## 8\. Create Controller class

Create the HelloWorldController under src/main/java/ directory.

##### HelloWorldController.java

```java
package com.javatechig.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorldController {

    @RequestMapping("/hello")
    public ModelAndView welcomeMessage(
            @RequestParam(value = "name", required = false) String name) {
        // Name of your jsp file as parameter
        ModelAndView view = new ModelAndView("hello");
        view.addObject("name", name);
        return view;
    }
}
```

In the code above, @RequestMapping annotation maps web requests onto specific handler classes and/or handler methods, in this case, welcomeMessage(). It provides a consistent style between Servlet environments, with the semantics adapting to the concrete environment.

RequestParam indicates that a method parameter should be bound to a web request parameter. In this case, we also make it not required and give it a default value. The ModelAndView(“hello”) determines that hello is the target view.

## 9\. Working with Views

Edit the default index.jsp and add the following code snippets.

##### index.jsp

```html
    Hello World
    Click here...

```

Add a JSP files `hello.jsp` file under `/WEB-INF/views/` directory.

##### hello.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>

Spring 4 MVC
<%@ page isELIgnored="false"%>

    Hello, ${name}. Welcome to Spring MVC!

```

Now we are done with our first HelloWorld example. To deploy it on Tomcat application server, Right click on the project -> select **Run as**. Choose **Tomcat server**, select **Next** and **Finish**. It will deploy the project and to see the output visit http://localhost:8080/HelloMVC on your browser. you will see the following output on your browser.

[![Spring MVC HelloWorld usign Eclipse Maven2](/media/articles/162/Spring-MVC-HelloWorld-usign-Eclipse-Maven2.png)](http://stacktips.com)

[![Spring MVC HelloWorld usign Eclipse Maven](/media/articles/162/Spring-MVC-HelloWorld-usign-Eclipse-Maven.png)](http://stacktips.com)
