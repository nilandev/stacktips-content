---
id: 428
title: "Validating @ConfigurationProperties in Spring Boot"
slug: validating-configurationproperties-in-spring-boot
excerpt: "Article explains how to validate @ConfigurationProperties in Spring Boot Application Startup"
difficulty: intermediate
publishedDate: "2024-02-18T02:45:30.000Z"
updatedDate: "2025-09-16T23:05:41.067Z"
videoLink: xMORu5AP67c
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/configuration-property-validation"
featured: false
thumbnail: /media/posts/validating-configurationproperties-in-spring-boot.jpeg
topics: 
  - spring-boot
tags:
  - configurationproperties-validation
  - spring-boot-validated-annotation
  - jsr-380-bean-validation
  - configurationproperties-records
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `@ConfigurationProperties` annotation in Spring Boot is used to bind configuration parameters typically from properties or YAML files to a Java class.

But, did you know you also can validate configuration properties at spring application startup with `@ConfigurationProperties` annotation? Let's dive in!

Let's say we have a Spring boot importer service that imports customer data from a CSV file to the database periodically. For the importer to work we have the following configurations:

```yaml
importer:
  service:
    filePath: '/nfs/files'
    fileType: '.xslx'
    threadPoolSize: 3
```

These properties can be mapped to a Java class automatically using `@ConfigurationProperties` annotation as follows:

```java
@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "importer.service")
public class ImporterConfig {
    String filePath;
    String fileType;
    int threadPoolSize;
}
```

Now let's say, we want to ensure the importer configuration is provided and meets the validation criteria when the application starts. If any of the validation fails, then the application should fail during startup.

For this validation to work, we need to have a **JSR-380** implementation like **_Hibernate Validator_** on your classpath.

```groovy
implementation 'org.springframework.boot:spring-boot-starter-validation'
```

Once we have a validator in the classpath, we need to explicitly enable the configuration properties validation using `@Validated` annotation.

For example,

```java
@Getter
@Setter
@Component
@Validated
@ConfigurationProperties(prefix = "importer.service")
public class ImporterConfig {

    @NotNull
    String filePath;

    @NotNull
    @Pattern(regexp = "\.csv$|\.txt$")
    String fileType;

    @Positive
    @Max(10)
    int threadPoolSize;
}
```

This can validate properties on application startup when used in conjunction with JSR-380 bean validation annotations such as `@Max`, and `@NotNull`. Here are some of the common annotations used for bean validation:

-   @NotNull: specifies that a property must be not null
-   @NotEmpty: specifies that a property must be not null or not empty
-   @Size: ensure that a property size is between attributes min and max
-   @Email: specifies that a property must be a valid email address
-   @AssertTrue / @AssertFalse: ensure that a property value is true/false
-   @Positive / @Negative: ensure that a property is positive/negative
-   @Past / @Future: specifies that the date must be in the past/ future
-   @Max / @Min: specifies that a property has a value not greater/not smaller than the value attribute

A full list of built-in [validation constraints](https://beanvalidation.org/2.0-jsr380/spec/#builtinconstraints) in JSR 380 can be found here.

Now, Run the application and notice that it will bind these properties from `application.yaml`to the `ImporterConfig` object and validate them at application startup, thus ensuring the application doesn't run with invalid configurations.

If the validation fails it will result in `BindException` as shown below:

```text
***************************
APPLICATION FAILED TO START
***************************

Description:

Binding to target com.stacktips.app.config.ImporterConfig failed:

    Property: importer.service.fileType
    Value: ".xlsx"
    Origin: class path resource [application.yaml] - 8:15
    Reason: must match ".csv$|.txt$"

Action:

Update your application's configuration
```

Now you update the `fileType: .csv` and the application will start as expected.

### Considerations for Using Records

Starting with Spring Boot 2.6 and Java 16 you can use record classes with `@ConfigurationProperties`. But there are a few things you need to consider when using records.

```java
@Validated
@ConfigurationProperties(prefix = "importer.service")
public record ImporterProperties(
        @NotNull String filePath,
        @Min(3) int threadPoolSize) {
}
```

The `@Componenet` annotation cannot be used with records. Your IDE will show `annotated with @ConstructorBinding but defined as a Spring component` error.

This is because the `@Component` annotation is generally used to define a bean that the Spring container will automatically detect and manage. As Java records are immutable, it conflicts with the way Spring manages beans, which involves proxying, intercepting, and potentially altering object states or behaviour.

To fix this, we need to remove the `@Component` annotation and explicitly define the bean registration. We can either use `@EnableConfigurationProperties` or define `@Bean` annotation in one of the `@Configuration` classes.

For example:

```java
@EnableConfigurationProperties(ImporterProperties.class)
@SpringBootApplication
public class MyApplication {

    public static void main(String[] args) {
       SpringApplication.run(MyApplication.class, args);
    }

}
```
