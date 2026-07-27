---
id: 9
title: Integrate Apache Tiles3 to Spring Boot Web MVC Application
slug: integrate-tiles3-to-spring-boot
excerpt: Spring Boot Web MVC configured to produce an executable WAR and ready for fully fledged web application development. In this tutorial, we will see how to use Apache Tiles3 framework in your Spring Boot Web MVC application.
difficulty: beginners
publishedDate: "2018-10-23T04:20:25.000Z"
updatedDate: "2025-09-16T23:05:20.590Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/16/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring Boot Web MVC configured to produce an executable WAR and ready for fully fledged web application development. In this tutorial, we will see how to use Apache Tiles3 framework in your Spring Boot Web MVC application.

Let us start by creating an application based on spring-boot-starter-web. You may use spring initializer to create a basic project template.

## 1\. Spring Boot Dependencies

Add dependencies to the POM to pull in Tomcat, Jasper and Apache Tiles

```xml
<dependency>
    <groupid>org.springframework.boot</groupid>
    <artifactid>spring-boot-starter-tomcat</artifactid>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupid>org.apache.tomcat.embed</groupid>
    <artifactid>tomcat-embed-jasper</artifactid>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupid>org.apache.tiles</groupid>
    <artifactid>tiles-jsp</artifactid>
    <version>3.0.4</version>
</dependency>
```

If you’re using Gradle build system, you can add the following dependency to your `build.gradle` file.

```java
compile group: 'org.apache.tomcat.embed', name: 'tomcat-embed-jasper', version: '9.0.12'
providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
compile group: 'org.apache.tiles', name: 'tiles-jsp', version: '3.0.8'
```

Change the packaging to WAR in the POM

```java
<packaging>war</packaging> 
```

Or for gradle

```java
    
apply plugin: 'war'
```

## 2\. Project Directory Structure

Create Web application structure the Maven way (tree showing all files):

```java
ExampleApp:
    │   pom.xml
    ├───src
    │   ├───main
    │   │   ├───java
    │   │   │   └───com
    │   │   │       └───example
    │   │   │           └───app
    │   │   │               │   ExampleApplication.java
    │   │   │               │   TilesConfig.java
    │   │   │               └───controller
    │   │   │                       HelloWorldController.java
    │   │   ├───resources
    │   │   │       application.properties
    │   │   └───webapp
    │   │       ├───static       
    │   │       └───WEB-INF
    │   │           └───tiles
    │   │               │   tiles.xml
    │   │               ├───layouts
    │   │               │       basic.jsp
    │   │               └───views
    │   │                   │   footer.jsp
    │   │                   │   header.jsp
    │   │                   └───home
    │   │                          greeting.jsp
    │   │                          home.jsp
    │   └───test
    │       
    └───target
```

## 3\. Tiles Configuration for Spring Boot

Configure tiles by adding a new configuration class – it will be pulled in by classpath scanning:

```java
package com.example.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;

@Configuration
public class TilesConfig {

    @Bean
    public TilesConfigurer tilesConfigurer() {
        final TilesConfigurer configurer = new TilesConfigurer();
        configurer.setDefinitions(new String[]{"WEB-INF/tiles/tiles.xml"});
        configurer.setCheckRefresh(true);
        return configurer;
    }

    @Bean
    public TilesViewResolver tilesViewResolver() {
        final TilesViewResolver resolver = new TilesViewResolver();
        resolver.setViewClass(TilesView.class);
        return resolver;
    }
}
```

## 4\. Tiles Layout and Views Declaration

Create the tiles configuration file: `WEB-INF/tiles/tiles.xml`

```java
<!--?xml version="1.0" encoding="ISO-8859-1" ?-->

<tiles-definitions>

    <!-- Templates -->      
    <definition name="layout.basic" template="/WEB-INF/tiles/layouts/basic.jsp">
        <put-attribute name="title" value="Spring Web MVC with Tiles 3">
        <put-attribute name="header" value="/WEB-INF/tiles/views/header.jsp">
        <put-attribute name="body" value="">
        <put-attribute name="footer" value="/WEB-INF/tiles/views/footer.jsp">
    </put-attribute></put-attribute></put-attribute></put-attribute></definition>
    
    <!-- Pages -->        
    <definition name="site.home" extends="layout.basic">
        <put-attribute name="body" value="/WEB-INF/tiles/views/home/home.jsp">
    </put-attribute></definition>
    
    <definition name="site.greeting" extends="layout.basic">
        <put-attribute name="body" value="/WEB-INF/tiles/views/home/greeting.jsp">
    </put-attribute></definition>
</tiles-definitions>
```

Create the tiles themselves

**basic.jsp:**

```xml
<@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles">
        <title><tiles:getAsString name="title"/></title>
        <tiles:insertattribute name="header"></tiles:insertattribute>
        <tiles:insertattribute name="body"></tiles:insertattribute>
        <tiles:insertattribute name="footer">
</tiles:insertattribute>
```

**header.jsp:**

```xml
<div class="header">Page Header</div>
```

footer.jsp:

```xml
<div class="footer">Page Footer</div>
```

**home.jsp:**

```xml
<div class="main-contnet">
     Main page content goes here...
</div>
```

**greeting.jsp:**

```java
<div>
  Hello ${name}
</div>
```

## 5\. Spring Boot Controller

Add a controller class into a controller directory:

```java
package com.example.app.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloWorldController {    

    @RequestMapping(value = "/home", method=RequestMethod.GET)
    public String home() {
        return "site.home";
    }
    
    @RequestMapping(value = "/greet/{name}", method=RequestMethod.GET)
    public ModelAndView greetTwoWays(@PathVariable(value="name") final String name, final Model model) {        
        return new ModelAndView("site.greeting", "name", name);
    }
}
```

Build the project using Maven:

```java
mvn clean package
```

When using Gradle:

```java
gradle build
```

Now let us test the controller and confirm that Spring MVC has been configured as expected

```java
http://localhost:8080/home    
http://localhost:8080/greet/John
```
