---
id: 215
title: ServletContextListener Example in Servlet
slug: servletcontextlistener-example-in-servlet
excerpt: This example explains how to use ServletContextListener in Servlets. ServletContextListener is used to, make your code run before your web application started. Below use case examples will help for more understanding.
difficulty: beginners
publishedDate: "2014-07-02T07:18:56.000Z"
updatedDate: "2025-09-16T23:05:31.018Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/286/thumbnail.png
topics: 
  - c
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This example explains how to use ServletContextListener in Servlets. `ServletContextListener` is used to, make your code run before your web application started. Below use case examples will help for more understanding

-   You may need to initialise database pool before the web application started
-   If you have a web application for your business, which runs a policy control system for monitoring, then you will have to start a worker thread soon before the application gets initialised.

There can be only one `ServletContext` for each web application. The instance of `ServletContext` will be created while deploying the application before application instance is created. A single ServletContext instance can be used by all the servlets and .jsp files in the same application. ServletContext is also called as the application scope variables in the web application scenario. `ServletContextListener` has the following two methods

```java
public void contextInitialized(ServletContextEvent event)
public void contextDestroyed(ServletContextEvent event)
```

Following example explains how to implement the ServletContextListener

### 1) Create a class and implement the ServletContextListener interface

```java
package com.javatechig;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class AppContextListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {		
		//Your code here
		System.out.println("HelloWorld Listener has been shutdown");
	}

	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {
		//Your code here
		System.out.println("HelloWorld Listener initialised.");
	}
}
```

### 2) Configure deployment descriptor

Just add the listener tag and listener-class tag with the class path, as shown in the example.

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

	<listener>
		<listener-class>com.javatechig.AppContextListener</listener-class>
	</listener>

</web-app>
```

### 3) Start Tomcat and deploy your application

You will see the output in the console

```
Jun 13, 2014 3:25:12 PM org.apache.catalina.core.AprLifecycleListener init
Jun 13, 2014 3:25:12 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-bio-8080"]
Jun 13, 2014 3:25:12 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["ajp-bio-8009"]
Jun 13, 2014 3:25:12 PM org.apache.catalina.startup.Catalina load
INFO: Initialization processed in 645 ms
Jun 13, 2014 3:25:12 PM org.apache.catalina.core.StandardService startInternal
INFO: Starting service Catalina
Jun 13, 2014 3:25:12 PM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/7.0.54
Jun 13, 2014 3:25:13 PM org.apache.tomcat.websocket.server.WsSci onStartup
HelloWorld Listener initialised.
Jun 13, 2014 3:25:13 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
Jun 13, 2014 3:25:13 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["ajp-bio-8009"]
Jun 13, 2014 3:25:13 PM org.apache.catalina.startup.Catalina start
INFO: Server startup in 639 ms
Jun 13, 2014 3:25:53 PM org.apache.catalina.core.StandardContext reload
INFO: Reloading Context with name [/HelloServlet] has started
HelloWorld Listener has been shutdown
```
