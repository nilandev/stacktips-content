---
id: 429
title: Working with Spring Boot Actuators
slug: working-with-spring-boot-actuators
excerpt: In this chapter, we will explore the Spring Boot Actuators. The Actuator offers production-ready features such as monitoring and metrics to Spring Boot applications.
difficulty: beginner
publishedDate: "2024-02-18T20:43:21.000Z"
updatedDate: "2025-09-16T23:05:41.102Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/working-with-spring-boot-actuators.jpeg
topics: 
  - spring-boot
tags:
  - spring-boot-actuator
  - custom-actuator-endpoint
  - actuator-health-endpoint
  - spring-boot-monitoring
course: spring-boot-for-beginners
displayOrder: 23
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Spring Boot Actuator provides several endpoints in your application through which you can view the internals of your running application.

Through the Actuator, you can find out how beans are wired together in the Spring application context, determine what environment properties are available to your application, and get a snapshot of runtime metrics.

### Enable Spring Boot Actuators

To enable the Actuator endpoints, you need include the `spring-boot-starter-actuator` starter dependency to your project. If you have Gradle based project, you can add the following dependency to your `build.gradle` file.

```groovy
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-actuator
}
```

If you’re using maven, you can include the following dependency on your `pom.xml` file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Once you have the dependency added to your application, Spring Boot’s auto-configuration will kick in when the application is running and Actuator will be enabled.

Run your application and visit http://localhost:8080/actuator/health

### Actuator Endpoints

Spring Boot includes several built-in endpoints and lets you add your custom actuator endpoints.

Here is the list of available endpoints in Spring Boot:

| Endpoint path | Purpose |
| --- | --- |
| /actuator | Returns list of enabled actuator endpoints. |
| /actuator/health | Reports health metrics for the application, as provided by HealthIndicator implementations. |
| /actuator/info | Retrieves custom information about the application, as pro- vided by any properties prefixed with info. |
| /autoconfig | Provides an auto-configuration report describing what auto-configuration conditions passed and failed. |
| /configprops | Describes how beans have been injected with configuration properties (including default values). |
| /beans | Describes all beans in the application context and their relationship to each other. |
| /dump | Retrieves a snapshot dump of thread activity. |
| /env | Retrieves all environment properties. |
| /env/{name} | Retrieves a specific environment value by name. |
| /mappings | Describes all URI paths and how they’re mapped to controllers (including Actuator endpoints). |
| /metrics | Reports various application metrics such as memory usage and HTTP request counters. |
| /metrics/{name} | Reports an individual application metric by name. |
| /shutdown | This is an HTTP POST endpoint. Shuts down the application; requires thatendpoints.shutdown.enabled be set to true. |
| /trace | Provides basic trace information (timestamp, headers, and so on) for HTTP requests. |

### Enable Actuator Endpoints

You can enable or disable each individual endpoint and expose them as per your requirement. All disabled endpoints are removed entirely from the application context.

By default, all endpoints except for `shutdown` are enabled. You can enable a specific endpoints using the `management.endpoint.<endpoint_id>.enabled` property.

For example, the following example enables the `shutdown` and `info` endpoint

```properties
management.endpoint.shutdown.enabled=true
management.endpoint.info.enabled=true
```

### Exposing Actuator Endpoints

Since endpoints may contain sensitive information about your application, you should carefully consider what endpoint is expose them.

By default, only the `health` endpoint is exposed over HTTP. To change which endpoints are exposed we can use the `include` and `exclude` property.

```properties
#Include or exclude specific endpoints. Comma seperated endpoint names
management.endpoints.web.exposure.exclude=scheduledtasks
management.endpoints.web.exposure.include=info, health

#Exposes all actuator endpoints
management.endpoints.web.exposure.include=*
```

### Endpoint Caching

Note that, the spring boot actuator endpoints automatically cached for read operations that do not take any parameters. To configure the amount of time for which an endpoint caches a response, we can use the following property.

```properties
management.endpoint.beans.cache.time-to-live=10s
```

## Implementing Custom Actuator Endpoints

To create a custom actuator endpoint, we need to create a class with `@Component` in combination with `@Endpoint` annotation.

The methods can be annotated with `@ReadOperation`, `@WriteOperation`, or `@DeleteOperation` and are automatically exposed over HTTPS.

#### Read Operation

The following example demonstrates, creating a custom actuator endpoint `/foo-bar` that supports read operation:

```java
@Component
@Endpoint(id = "foo-bar")
public class FeaturesEndpoint {

    @ReadOperation
    public Map<String, String> readOperation() {
        return Map.of("foo", "bar");
    }
}
```

Run your application and you will visit `/actuator/foo-bar` endpoint. It will return the following response:

```json
{
    "foo": "bar"
}
```

#### Write Operation

We can pass the input parameter through the custom actuator endpoints as well using the `@WriteOperation` annotation.

```java
@Component
@Endpoint(id = "foo-bar")
public class FeaturesEndpoint {

    @ReadOperation
    public Map<String, String> readOperation() {
        return Map.of("foo", "bar");
    }

    @WriteOperation
    public Map<String, String> writeOperation(String param1, String param2) {
        return Map.of("param1", param1, "param2", param2);
    }
}
```

Now, we can test the endpoint as follows;

```bash
curl --location 'http://localhost:8080/actuator/foo-bar' \
--header 'Content-Type: application/json' \
--data '{
    "param1": "Hello",
    "param2": "World!"
}'
```

#### Delete Operation

In conjunction with `@ReadOperation`, `@WriteOperation` we can also use `@DeleteOperation`, which maps to the HTTP DELETE request type.

```java
@DeleteOperation
public Map<String, Boolean> deleteOperation() {
    return Map.of("success", true);
}
```

Example:

```bash
curl --location --request DELETE 'http://localhost:8080/actuator/foo-bar'
```
