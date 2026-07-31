---
id: 116
title: Introduction to Spring JDBC
slug: introduction-to-spring-jdbc
excerpt: There are various data access technologies to perform persistence operations in Java enterprise applications. JDBC is among the most popular one. Spring provides data access operations performed with JDBC..
difficulty: beginners
publishedDate: "2015-10-12T21:36:17.000Z"
updatedDate: "2025-09-16T23:05:25.699Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/148/thumbnail.png
topics: 
  - spring
tags:
  - spring-jdbc-template
  - spring-jdbc-datasource
  - jdbctemplate-tutorial
  - spring-data-access-jdbc
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

There are various data access technologies to perform persistence operations in Java enterprise applications. JDBC is among the most popular one. Spring provides data access operations performed with JDBC using three main approaches:

1.  **Using Template Method pattern** based utility classes, namely JdbcTemplate and NamedParameterJdbcTemplate, to perform JDBC operations more easily by removing repetitive data access code blocks in the application, properly handling resource cleanups, and so on.
2.  **Using database** meta data to simplify queries using classes such as SimpleJdbcInsert and SimpleJdbcCall. That way you need to provide only a table or stored procedure name and a map of parameters corresponding to column names to perform an SQL operation.
3.  **Using MappingSqlQuery**, SqlUpdate, and StoredProcedure classes to represent database operations as reusable Java objects so that you can use them over and over again by providing only different query parameters each time.

To start working with JDBC from Spring application, you first need to obtain the data- base connection. Spring offers two ways to obtain database connections within the JDBC API. `Data source` or the `DriverManager`.

The DriverManager is the legacy approach and DataSource is newer one. It is recommended to use the new DataSource facility to connect to databases and other resources. DataSource facility has several advantages over DriverManager facility like DataSource increases portability, enables connection pooling and distributed transactions, the DriverManager does not allow such techniques.

If you’re using Maven project configuration, you need to add the following Spring dependencies elements into your `pom.xml`:

#### Maven dependency

```xml

    org.springframework
    spring-jdbc
    4.2.1.RELEASE

    commons-dbcp
    commons-dbcp
    1.4

```

#### Gradle dependency

```groovy
'org.springframework:spring-jdbc:4.2.1.RELEASE'
'commons-dbcp:commons-dbcp:1.4'
```

The core class of Spring’s JDBC support is `JdbcTemplate`. It simplifies the use of JDBC and helps to avoid common errors. JdbcTemplate can be used to execute SQL queries or insert, update, and delete statements. It executes core JDBC work flow, initiating iteration over ResultSets and catching JDBC exceptions and translating them to the generic, more informative DataAccessException hierarchy defined by Spring. Application code only needs to provide SQL and ResultSet processing logic if necessary.

Now that we understood the basics of Spring JDBC, in the next post we will continue with creating our first Spring JDBC application.
