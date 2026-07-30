---
id: 398
title: "How to Validate the @PathVariable in Spring Boot?"
slug: how-to-validate-the-pathvariable-in-spring-boot
excerpt: "This article explains different options available to Validate the @PathVariable in Spring Boot such as using Spring Boot annotations, regular expression, and custom validator."
difficulty: beginners
publishedDate: "2024-01-29T12:57:24.000Z"
updatedDate: "2025-09-16T23:05:40.920Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/Validate_the_PathVariable_in_Spring_Boot.jpeg
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `@PathVariable` in spring is used to handle the template variables in the request URI mapping and extract them into method parameter.

For example, in the following controller the `vehicleId` is a path variable mapped directly to the the `updateModel()` controller method.

```java
@PostMapping("/vehicles/{vehicleId}")
public ResponseEntity updateModel(@PathVariable String vehicleId,
                @Valid @RequestBody VehicleDto vehicle) throws Exception {
    // Your implementation goes here
}
```

Validation can range from simple checks like ensuring the vehicleId is not null or empty, to more complex validations like checking if it adheres to a specific format or verifying against the database. To validate the `@PathVariable` in a Spring Boot application, we have several options:

Here are some common approaches:

### Basic Non-Null or Non-Empty Validation

We can use the `@NotNull` or `@NotEmpty` annotations to ensure that the `vehicleId` is not null or empty.

```java
@PostMapping("/vehicles/{vehicleId}")
public ResponseEntity updateModel(@PathVariable @NotEmpty String vehicleId,
            @Valid @RequestBody VehicleDto vehicle) throws Exception {
    // Your implementation goes here
}
```

### Custom Validation with Regular Expressions

To validate a specific pattern like a specific length or containing only numbers, you can use the `@Pattern` annotation from the `javax.validation.constraints` package and use the regular expressions.

```java
@PostMapping("/vehicles/{vehicleId}")
public ResponseEntity updateModel(@PathVariable @Pattern(regexp = "\d{4,6}") String vehicleId,
        @Valid @RequestBody VehicleDto vehicle) throws Exception {
    // Your implementation goes here
}
```

The regular expressions `\d{4,6}` allows only numbers between 4 and 6 characters length.

### Using Custom Validator

We can use the custom validator if we have more complex validations such as checking against a database. For this we can implement the `ConstraintValidator` interface and inside the `isValid` method it should return either true or false based on the business logic.

```java
@Target({ ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = VehicleIdValidator.class)
public @interface ValidVehicleId {

    String message() default "Invalid vehicheId";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

public class VehicleIdValidator implements ConstraintValidator<ValidVehicleId, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        // validation logic goes here
        return true;
    }
}
```

Now here is how we can use the our custom validator in the controller mapping.

```java
@PostMapping("/vehicles/{vehicleId}")
public ResponseEntity updateModel(@PathVariable @ValidVehicleId String vehicleId,
        @Valid @RequestBody VehicleDto vehicle) throws Exception {
    // Your implementation goes here
}
```

### Manual Validation Inside the Method

It is recommended to use one of the above method for validating the `@PathVariable`. But otherwise we can also validate manually inside the method implementation and throw custom exceptions if the validation fails..

```java
@PostMapping("/vehicles/{vehicleId}")
public ResponseEntity updateModel(
        @PathVariable @ValidVehicleId String vehicleId,
        @Valid @RequestBody VehicleDto vehicle) throws Exception {
    if (vehicleId == null || vehicleId.isEmpty()) {
        throw new MyCustomValiationException("Vehicle id is invalid")
    }

    // Your implementation goes here
}

```
