---
id: 10
title: Using H2 In-Memory Database in Spring Boot
slug: using-h2-in-memory-database-in-spring-boot
excerpt: In the course of this tutorial, we will see how to use the H2 in-memory database to perform the CRUD (create, read, update and delete) operation in Spring Boot.
difficulty: beginners
publishedDate: "2018-09-20T19:38:55.000Z"
updatedDate: "2025-09-16T23:05:20.638Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/17/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

H2 is an Open Source embedded Java SQL database. It is a fast, in-memory database with a very small footprint of a single jar file (around 1.5-megabyte) size. Therefore you can easily embed the H2 database into your application for rapid development.

H2 Database also provides a built-in web console to interact with the database. You can use H2 database as an in-memory database, embedded database or network database.

Please note, H2 database is not a full-fledged SQL implementation, it supports only a subset of the SQL standard.

You can find more details about the H2 Database from the [official website](http://www.h2database.com/html/main.html).

## Why do you care?

Why do I need an in-memory database? Can I not just connect to MySQL or other real databases?

Well yes, you definitely can. But development java application connecting to a real database involves a lot of overhead. Also, during development, your schema is bound to change as the software evolves.

Also when working on distributed teams, you don’t want your code to fail when someone else in team updates the DB schema. Multiple developers should be able to run the DB tests in parallel.

For such cases, an in-memory database is an ideal solution. An in-memory database is created when an application starts up and destroyed when the application is stopped.

## **Installing H2 database**

If you’re using Maven build tools for your Spring boot application, then you need to add the following package dependency in your `pom.xml` file.

```xml
<dependency>
        <groupid>com.h2database</groupid>
        <artifactid>h2</artifactid>
        <version>1.4.197</version>
        <scope>test</scope>
</dependency>
```

And, if you are on Gradle, you can include the following package dependency in your build.gradle file.

```groovy
dependencies {
    // Your dependencies
    runtime('org.springframework.boot:spring-boot-devtools')
    runtime('com.h2database:h2')
    //...
}
```

## Accessing H2 Web Console

As we discussed earlier, H2 database provides a Web console to interact with the database. To enable the console, you need to add the following property to your `application.properties` file.

**/src/main/resources/application.properties**

```properties
# Enabling H2 Console
spring.h2.console.enabled=true
```

Once you have done the above configurations, you need to restart your Spring boot application. You can launch the H2 database Web console at:

```text
http://localhost:8080/h2-console.
```

Make sure that you use `jdbc:h2:mem:testdb` as JDBC URL.

[![](/media/articles/17/Using-H2-In-Memory-Database-in-Spring-Boot-620x383.png)](http://stacktips.com)
