---
id: 214
title: Running Infinite TimerTask in Java Servlet
slug: running-infinite-timertask-in-java-servlet
excerpt: This example will show you how to run Running Infinite TimerTask in Java Servlet. For achieving this we can initialise TimerTask inside ServletContextListener and schedule it for a certain time period. ServletContextListener is used to, make your code run before your web application started. For more understanding on ServletContextListener, refer my post on ServletContextListener Example in Servlet.
difficulty: beginners
publishedDate: "2014-07-02T07:32:03.000Z"
updatedDate: "2025-09-16T23:05:30.942Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/285/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This example will show you how to run Running Infinite TimerTask in Java Servlet.

For achieving this we can initialize TimerTask inside ServletContextListener and schedule it for a certain time period. ServletContextListener is used to, make your code run before your web application started. For more understanding on ServletContextListener, refer my post on ServletContextListener Example in Servlet.

Following example explains how to implement the ServletContextListener

### 1) Create a class and implement the ServletContextListener interface

```java
package com.javatechig;

import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class AppContextListener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {

		// Your code here
		System.out.println("HelloWorld Listener has been shutdown");

	}

	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {

		// Your code here
		System.out.println("HelloWorld Listener initialized.");

		TimerTask vodTimer = new VodTimerTask();

		Timer timer = new Timer();
		timer.schedule(vodTimer, 1000, (2 * 1000));

	}

	class VodTimerTask extends TimerTask {

		@Override
		public void run() {
			System.out.println("TimerTask " + new Date().toString());
		}
	}

}
```

### 2) Configure deployment descriptor

Just add the listener tag and listener-class tag with the class path, as shown in the example.

```xml
< ?xml version="1.0" encoding="UTF-8"?>
<web -app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://java.sun.com/xml/ns/javaee"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
	id="WebApp_ID" version="3.0">
	<display -name>HelloServlet</display>

	<servlet>
		</servlet><servlet -name>HelloServlet</servlet>
		<servlet -class>com.javatechig.HelloServlet</servlet>
	
	<servlet -mapping>
		</servlet><servlet -name>HelloServlet</servlet>
		<url -pattern>/HelloServlet</url>
	

	<listener>
		</listener><listener -class>com.javatechig.AppContextListener</listener>
	
</web>
```

### 3) Start Tomcat and deploy your application

You will see the output in the console

```
Jun 13, 2014 3:52:25 PM org.apache.catalina.core.AprLifecycleListener init
Jun 13, 2014 3:52:27 PM org.apache.catalina.core.ApplicationContext log
INFO: No Spring WebApplicationInitializer types detected on classpath
HelloWorld Listener initialized.
Jun 13, 2014 3:52:27 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
Jun 13, 2014 3:52:27 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["ajp-bio-8009"]
Jun 13, 2014 3:52:27 PM org.apache.catalina.startup.Catalina start
INFO: Server startup in 1787 ms
TimerTask Fri Jun 13 15:52:28 BST 2014
TimerTask Fri Jun 13 15:52:30 BST 2014
TimerTask Fri Jun 13 15:52:32 BST 2014
TimerTask Fri Jun 13 15:52:34 BST 2014
TimerTask Fri Jun 13 15:52:36 BST 2014
```
