---
id: 13
title: How to Change Spring Boot Default Port?
slug: how-to-change-spring-boot-default-port
excerpt: Spring Boot lets you run the same application more than once on a different port number. The default port used in Spring Boot is 8080.
difficulty: beginners
publishedDate: "2022-04-16T02:31:04.000Z"
updatedDate: "2025-09-16T23:05:19.802Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/4/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Spring Boot framework provides the default embedded server (Tomcat) to run the Spring Boot application. It runs on port 8080. It is possible to change the port in Spring Boot.

If you want to change the default port you have several options. But using `application.properties` option is recommended to overwrite default values.

To override the default port, we need to specify `server.port` property in application.properties file.

#### Changing Default Port in Spring Boot

In the `application.properties` file, we can set a custom port number for the property server.port

```properties
server.port = 9090
```

In the application.yml file, you can find as follows −

```yaml
server:
    port: 9090
```

#### Running Spring Boot in Random Port

In the `application.properties` file, we can set a random port number for the property `server.port`

```properties
server.port = 0
```

In the `application.yml file`, you can find it as follows −

```yaml
server:
   port: 0
```

**Note** − If the server.port number is 0 while starting the Spring Boot application, Tomcat uses the random port number based on the availability.

#### Using Command-Line Arguments

We can also set the server port using the java command line argument as follows.

```bash
java -jar spring-boot-app.jar --server.port=8009
```

or by using the equivalent syntax:

```bash
java -jar -Dserver.port=8009 spring-boot-app.jar
```
