---
id: 123
title: "Spring Bean Scope Using XML Configuration and @Scope Annotation"
slug: how-to-set-bean-scope-using-xml-configuration-and-scope-annotation
excerpt: When you declare a POJO instance or bean in the configuration file, you are actually defining a template for bean creation, not an actual bean instance.
difficulty: beginners
publishedDate: "2015-10-02T19:03:24.000Z"
updatedDate: "2025-09-16T23:05:26.131Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/157/thumbnail.png
topics: 
  - spring
tags:
  - spring-bean-scope
  - spring-scope-annotation
  - singleton-vs-prototype-bean
  - spring-xml-configuration
course: null
displayOrder: 0
seo: 
  metaTitle: "Spring Bean Scope: XML Config and @Scope Annotation"
  metaDescription: "Understand Spring bean scopes like singleton, prototype, request, and session, and learn to set them using XML configuration or the @Scope annotation."
  metaKeywords: null
---

When you declare a POJO instance or bean in the configuration file, you are actually defining a template for bean creation, not an actual bean instance. The actual bean instance is created when the `getBean()` method is called. While bean is instantiated by the Spring IoC, the framework decides the scope of the instance.

Following are the different bean instance scopes supported in Spring.

-   **singleton** – Creates at most one bean instance per Spring IoC container
-   **prototype** – Creates a new instance each requested
-   **request** – Creates a single bean instance per HTTP request;
-   **session** – Creates a single bean instance per HTTP session;
-   **global session-** Creates a single bean instance per global HTTP session

You can set the bean scope using the element scope attribute. The default scope fro bean is set to Singleton. This means that only one instance of bean can be created in the IoC container and the same instance can be shared across.

The following code snippet shows how to define the bean scope using XML configuration.

You can also specifying bean scope from Java code using `@Scope` annotation as follows:

```java
@Configuration
public class MyBeanConfig {
    @Bean
    @Scope(value = BeanDefinition.SCOPE_SINGLETON)
    public Crayon crayonToy() {
        return new Crayon("Yellow crayon", 50);

    }
}
```
