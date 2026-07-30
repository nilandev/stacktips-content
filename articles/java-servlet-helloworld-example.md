---
id: 221
title: Java Servlet Hello World Example
slug: java-servlet-helloworld-example
excerpt: Servlets are server side Java program which responds to network requests, mostly HTTP requests. Servlets are used to implement the dynamic web applications. Commonly servlets use various other frameworks like Struts, Hibernate, etc. which gives high level features for developing robust server application.
difficulty: beginners
publishedDate: "2014-06-18T03:48:57.000Z"
updatedDate: "2025-09-16T23:05:31.139Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/291/thumbnail.png
topics: 
  - c
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Servlets are server side Java program which responds to network requests, mostly HTTP requests. Servlets are used to implement the dynamic web applications. Commonly servlets use various other frameworks like Struts, Hibernate, etc. which gives high level features for developing robust server application.

## Servlet Interface and Life Cycle

Every Servlets must implements javax.servlet.Servlet interface, which provides the required methods for servlet life cycle management. A servlet life cycle includes, initialisation of servlet, receive and respond to client request, and to destroy servlets and release the resources. servlet life-cycle methods are called by the network service in the following order

1.  Servlet is created then initialised.
2.  Zero or more service calls from clients are handled
3.  Servlet is destroyed then garbage collected and resources released

The state after the servlet container loads and instantiates the servlet class and before it handles any request from client, is called servlet initialisation. Initialising a servlet is an one time expensive operation. In this phase we can do application setup, such as loading configuration and properties, starting helper threads and initialise other resources .

You can override init method of the Servlet interface. Inside this method you can write your initialisation code, if any. If a servlet is unable to complete its initialisation due to some reason then it throws UnavailableException. unable

## Servlet Containers

Servlets run on a servlet container which handles the networking side (e.g. parsing an HTTP request, connection handling etc). One of the most used, open source servlet containers is Tomcat. You can download latest version of [Tomcat web server from here](http://tomcat.apache.org/download-70.cgi).

## Creating “HelloWorld” Program in Servlet

Follow the below steps and sample source code structure of a servlet example to write “HelloWorld” program in servlet.

### Prerequisites for writing servlet program

1.  Install Java JDK (Preferably the latest Java version). You can download it from official [Oracle Download Site.](http://www.oracle.com/technetwork/java/javase/downloads/index.html?ssSourceSiteId=otnjp)
2.  Download [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/). In this example I am using Kepler version.
3.  Download latest stable version of [Tomcat web server](http://tomcat.apache.org/).
4.  Once you have the above softwares in your work machine then you are good to go.

### Step-1

Create a new project from File->New-> “Dynamic Web Project” in your eclipse.  
[![Java Servlet Hello world example](/media/articles/291/Java-Servlet-Hello-world-example-620x560.png)](http://stacktips.com)

If you don’t have a target runtime setup, then create a new one. Select your Apache Tomcat version and then browse your Tomcat installation directory.

### Step-2

Create a package “com.javatechig” under Java resources-> src folder and then create the servlet class “HelloServlet.java”. Once you ready then paste below code.

### HelloServlet.java

```java
package com.javatechig;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
        // Servlet initialization code here
        super.init();
    }

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

        // Set response content type
        response.setContentType("text/html");

        // Actual logic goes here.
        PrintWriter out = response.getWriter();
        out.println("<h1>Hurray !!\n Servlet is Working!! </h1>");
    }

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    public void destroy() {
        // resource release
        super.destroy();
    }
}
```

### Step-3

Create a new file “web.xml” under WebContent/WEB-INF folder and paste below code

### web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://java.sun.com/xml/ns/javaee"
    xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
    id="WebApp_ID" version="3.0">
    <display-name>HelloServlet</display-name>

    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.javatechig.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/HelloServlet</url-pattern>
    </servlet-mapping>

</web-app>
```

We are ready with the code. Well, lets execute and see the output. Right click on the project -> Run As-> Run on server. You will notice that the Tomcat service will start and it will automatically deploy your servlet code.

[![Java Servlet Hello world example output](/media/articles/291/Java-Servlet-Hello-world-example-output-620x333.png)](http://stacktips.com)
