---
id: 358
title: How to Add Context Path to a Spring Boot Application
slug: add-context-path-to-a-spring-boot-application
excerpt: In this article, we will explore how to add a context path to your Spring Boot application.
difficulty: beginner
publishedDate: "2023-07-05T08:15:36.000Z"
updatedDate: "2025-09-16T23:05:37.825Z"
videoLink: "7HqtH3L9erE"
githubLink: null
featured: false
thumbnail: /media/articles/add-context-path-to-a-spring-boot-application.jpg
topics: 
  - spring-boot
tags:
  - servlet-context-path
  - springboot-base-url
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Add a Context Path to a Spring Boot App"
  metaDescription: "Learn how to set a custom context path in Spring Boot using server.servlet.context-path in application.properties or application.yaml."
  metaKeywords: null
---

In a Spring Boot application, the context path represents the base URL for accessing your application. By default, it's set to '/',  

For example, in the following code snippet

```java
      @RestController
@RequestMapping(value = "/products")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping(value = "/{productId}")
    public Product getProduct(@PathVariable(value = "id") Long id) {
            //Your service logic goes here..
      return product;
    }

```

To test this locally, we need to hit

```text
http://localhost:8080/products
http://localhost:8080/products/{productId}
```

But sometimes you might want to change the path to make it more meaningful or to avoid conflicts. So, how do we do that?”

To change the context path, you need to add the following property to your `application.properties` file.

```text
      server.servlet.context-path=/api/1.0

```

Alternatively, if you're using the application.yaml file, you can do this

```yaml

server:
   servlet:
     context-path: '/api/1.0'
```

`   Now with this, you run your application and you will be able to access the endpoints with a new URL  ```       http://localhhost:8080/api/1.0/products http://localhhost:8080/api/1.0/products/{productId}      ```  I hope this helps! Let me know if you have any other questions.   `
