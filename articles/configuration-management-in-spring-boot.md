---
id: 445
title: Configuration Management in Spring Boot
slug: configuration-management-in-spring-boot
excerpt: This chapter covers how to externalize properties to configure your application for different environments.
difficulty: beginner
publishedDate: "2024-10-24T21:49:07.000Z"
updatedDate: "2025-09-16T23:05:42.216Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/post/None_configuration-management-in-spring-boot.jpeg
topics: 
  - spring-boot
tags:
  - spring-boot-application-properties
  - spring-boot-yaml-configuration
  - spring-value-annotation
  - spring-profiles-configuration
course: getting-started-with-javascript
displayOrder: 6
seo: 
  metaTitle: "Configuration Management in Spring Boot Explained"
  metaDescription: "Learn how Spring Boot loads and prioritizes configuration from properties files, environment variables, and command-line arguments across environments."
  metaKeywords: null
---

## Loading Configuration from Properties file

Spring Boot offers a flexible approach to managing properties from various sources. By default, it loads the properties from the `application.properties` file. It also considers the OS environment variables, Java System properties and command-line arguments.

The resources are loaded in the following order of priority:

1.  `application.properties` located outside the packaged application
2.  `application.properties` packaged within the application
3.  OS environment variables
4.  Java system properties
5.  Command-line arguments

In the following example, we will create a weather service to load properties from the `application.properties` file.

1.  Add the following properties inside `application.properties` file.

```properties

weather.api.key=default-api-key
weather.default.city=New York
weather.units=imperial
```

1.  Let us create a `WeatherService` class and load the properties from `application.properties` file

```java

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;

    @Value("${weather.default.city}")
    private String defaultCity;

    @Value("${weather.units}")
    private String units;

    public String getWeatherForecast() {
        return String.format("Weather forecast for %s: Sunny, 25°%s. API Key: %s",
                defaultCity, units.equals("metric") ? "C":"F", apiKey);
    }
}
```

The `@Value` annotation will instruct Spring to detect and load the value of that property.

In this example, it will detect the property `weather.api.key}` inside the `application.properties` file and load the value to the variable `apiKey`.

We can define a default value to the `@Value` annotation by adding a semicolon. Eg. `@Value("${weather.api.key:defaultKey}")`. In this case, it will use the unit as `defaultKey` when there are no properties defined with the key `weather.api.key`.

If there are no properties defined inside the `application.properties` file, it will though following exception.

```text
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'weatherService': Injection of autowired dependencies failed
    at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessProperties(AutowiredAnnotationBeanPostProcessor.java:515) ~[spring-beans-6.1.13.jar:6.1.13]
    at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1439) ~[spring-beans-6.1.13.jar:6.1.13]
    ... omitted
Caused by: java.lang.IllegalArgumentException: Could not resolve placeholder 'weather.api.key' in value "${weather.api.key}"
```

## Loading Configuration from YAML files

Spring boot also natively supports YAML files for managing configuration properties. YAML files use the same principle as `.properties` files.

The application.properties file content can be written using YAML as:

**application.yaml**

```yaml

weather:
  api:
    key: default-api-key
  default:
    city: New York
  units:
    imperial
```

## Loading Configuration from External application.properties file

To load properties from an external file we need to run the application as a fat JAR. For that, we first need to build the application and launch the application with the `java -jar` command.

Running as a fat JAR.

```bash
java -jar hello-spring-0.0.1-SNAPSHOT.jar
```

It will run the executable jar file and load the configuration from the `application.properties` file if there is a file exists in the same location as the jar file.

## Loading properties based on profile

Spring boot also allows you to isolate the environment-specific configurations using profiles. For example, if you want to use different configurations for dev, QA and production servers, you can create 3 different files (eg. `application-dev.properties`, `application-qa.properties` and `application-prod.properties`) to have different configurations for each environment.

The profiles to be activated can be specified using the **`spring.profiles.active`** property.

The profile-specific `application-{profile}.properties` profiles take precedence over the non-profile-specific ones.

When profile-specific properties are defined, the resources are loaded in the following order of priority:

1.  `application-{profile}.properties` outside the packaged application
2.  `application.properties` located outside the packaged application
3.  `application-{profile}.properties` packaged inside the application
4.  `application.properties` packaged within the application
5.  OS environment variables
6.  Java system properties
7.  Command-line arguments

## Override Configuration Using Command-Line Arguments

To override configuration using the command-line arguments, you can simply add `--key=value` argument to your java -jar command.

```bash
java -jar hello-spring-0.0.1-SNAPSHOT.jar --weather.api.key=my-key
```

Note that, the arguments from the command line always have the highest precedence and override all other configurations.
