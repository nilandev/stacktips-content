---
id: 418
title: Replace Embedded Tomcat Server with Jetty or Undertow in Spring Boot
slug: replace-tomcat-with-jetty-or-undertow-in-spring-boot
excerpt: This article explains how to replace the default embedded Tomcat server with Jetty or Undertow servers for your Spring Boot application.
difficulty: intermediate
publishedDate: "2023-09-25T20:22:34.000Z"
updatedDate: "2025-09-16T23:05:40.346Z"
videoLink: "1gEoiMVULt4"
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/jetty-undertow-spring-boot"
featured: false
thumbnail: /media/articles/replace-tomcat-with-jetty.png
topics: 
  - spring-boot
tags:
  - spring-boot-embedded-server
  - jetty-vs-tomcat
  - undertow-spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

One of the key features of the Spring Boot framework is the built-in support for embedded servers. It includes support for embedded Tomcat, Jetty and Undertow servers. This means you don’t need any external web servers and no need to deploy WAR files anymore.

The embedded Tomcat server is available through the `spring-boot-starter-web` dependency.

However, if you want Jetty or Undertow servers then you can include `spring-boot-starter-jetty` or `spring-boot-starter-undertow` dependencies.

This article explains how to replace the default embedded Tomcat with Jetty or Undertow servers.

## Replace Tomcat with the Jetty in Spring Boot

To use the embedded Jetty server instead of Tomcat, you need to exclude the `spring-boot-starter-tomcat` from `spring-boot-starter-web` and include the `spring-boot-starter-jetty` dependency.

Also, you will need to exclude the default added spring-boot-starter-tomcat dependency.

### For Spring Boot Version 2.x.x

For **Gradle**, make the following changes to your `build.gradle` file.

```groovy
dependencies {
    implementation('org.springframework.boot:spring-boot-starter-web') {
        exclude group:'org.springframework.boot', module:'spring-boot-starter-tomcat'
    }
    implementation 'org.springframework.boot:spring-boot-starter-jetty'
}
```

If you’re using **Maven** build tools, you need to add this to your `pom.xml` file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

### For Spring Boot Version 3.x.x

The above configuration works for Spring Boot version 2.x, but it will throw the following error if you’re using the latest Spring Boot version 3.x.

```text
java.lang.ClassNotFoundException: jakarta.servlet.http.HttpSessionContext
with Spring Boot 3 and Jetty server
```

This is because Jetty does not yet support Servlet 6.0. To use Jetty with Spring Boot 3.0, you will have to downgrade the Servlet API to 5.0. You can use the `jakarta-servlet.version` property to do so.

Ref: [Spring-Boot-3.0-Migration-Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide#jetty)

```groovy
ext['jakarta-servlet.version'] = '5.0.0'
dependencies {
    implementation('org.springframework.boot:spring-boot-starter-web')
    implementation 'org.springframework.boot:spring-boot-starter-jetty'
    modules {
        module("org.springframework.boot:spring-boot-starter-tomcat") {
            replacedBy("org.springframework.boot:spring-boot-starter-jetty")
        }
    }
}
```

If you’re using **Maven** build tools, you need to add this to your `pom.xml` file.

```xml
<properties>
    <java.version>17</java.version>
    <jakarta-servlet.version>5.0.0</jakarta-servlet.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <exclusions>
            <exclusion>
                <artifactId>spring-boot-starter-tomcat</artifactId>
                <groupId>org.springframework.boot</groupId>
            </exclusion>
        </exclusions>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jetty</artifactId>
    </dependency>
</dependencies>
```

## Replace Tomcat with Undertow in Spring Boot

To use Undertow instead of Tomcat, first, you need to exclude the spring-boot-starter-tomcat from spring-boot-starter-web. Then you should add the undertow starter as shown here.

For **Gradle**, make the following changes to your `build.gradle` file.

```groovy
dependencies {
    implementation('org.springframework.boot:spring-boot-starter-web') {
        exclude group:'org.springframework.boot', module:'spring-boot-starter-tomcat'
    }
    implementation 'org.springframework.boot:spring-boot-starter-undertow'
}
```

If you’re using **Maven** build tools, you need to add this to your `pom.xml` file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```
