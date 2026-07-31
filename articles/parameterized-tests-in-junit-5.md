---
id: 389
title: Creating Parameterized Tests in JUnit 5
slug: parameterized-tests-in-junit-5
excerpt: "Parameterized tests allow you to execute a single test multiple times using different parameters. This article explains the usage of each of these test sources using @ParameterizedTest annotation in Junit5."
difficulty: intermediate
publishedDate: "2024-01-28T00:34:24.000Z"
updatedDate: "2025-09-16T23:05:40.846Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/parameterized-tests-in-junit-5.jpeg
topics: 
  - junit
tags:
  - junit5-parameterized-test
  - valuesource-junit
  - methodsource-junit
  - csvsource-junit
  - junit5-testing
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Parameterized tests allow you to execute a single test multiple times using different parameters. This way we can eliminate the need to write the separate tests for each set of test data.

In JUnit 5, parameterized tests are supported through the `@ParameterizedTest` annotation. The `@ParameterizedTest` replaces the `@Test` annotation to test methods. With `@ParameterizedTest` we can run the test method from the various data sources including:

1.  `@ValueSource`: Provides a simple array of literal values
2.  `@EnumSource`: Provides values from a specified enum class.
3.  `@MethodSource`: References a method that returns a stream of arguments.
4.  `@CsvSource`: Allows specifying values in a comma-separated format.
5.  `@CsvFileSource`: Reads values from a CSV file.
6.  `@ArgumentsSource`: References a custom, reusable arguments provider.

This article explains the usage of each of these test sources using `@ParameterizedTest` annotation.

### Getting the Required Dependencies

The ParameterizedTest annotation is not part of the core `junit-jupiter-api` but is in a separate artifact named `junit-jupiter-params`. That is why, for running the JUnit5 parameterized tests, we need to have the `junit-jupiter-params` dependency in our classpath.

If you are using Maven, we have to add the `junit-jupiter-params` dependency to the pom.xml file to the `test` scope.

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-params</artifactId>
    <version>5.9.3</version>
    <scope>test</scope>
</dependency>
```

If we are using Gradle, you need to add the following to `build.gradle` file

```groovy
testImplementation('org.junit.jupiter:junit-jupiter-params:5.9.3')
```

Ones we have the required dependency, we are good to write our first parameterized test with JUnit 5.

### Using @ValueSource annotation

The @ValueSource provides a simple array of literal values. It supports all primitive types including shorts, bytes, ints, longs, floats, doubles, chars, booleans, strings and classes.

The `testWithStrings()` test method in the following code snippet will be executed 3 times with the arguments SUNDAY, MONDAY, and TUESDAY.

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class ValueSourceTest {

    @ParameterizedTest
    @ValueSource(strings = {"SUNDAY", "MONDAY", "TUESDAY"})
    void testWithStrings(String argument) {

        assertNotNull(argument);
    }
}
```

### Using @EnumSource annotation

The `@EnumSource` allows us to test a function or a method against all possible values of an enum type.

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import java.util.EnumSet;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

enum DayOfWeek {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

class EnumSourceTest {

    @ParameterizedTest
    @EnumSource(DayOfWeek.class)
    void testWithEnumSource(DayOfWeek dayOfWeek) {
        assertNotNull(dayOfWeek);
    }

    @ParameterizedTest
    @EnumSource(value = DayOfWeek.class, names = {"MONDAY", "FRIDAY"})
    void testWithEnumSourceIncludeOnlySomeDays(DayOfWeek dayOfWeek) {
        assertTrue(EnumSet.of(DayOfWeek.MONDAY, DayOfWeek.FRIDAY).contains(dayOfWeek));
    }
}
```

### Using @MethodSource annotation

The `@MethodSource` annotation allows us to specify a method that provides a stream of arguments. Here is how we can use `@MethodSource` annotations in Junit5.

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import java.util.stream.Stream;
import static org.junit.jupiter.api.Assertions.assertEquals;

class MethodSourceTest {

    @ParameterizedTest
    @MethodSource("provideStringArgs")
    void testWithMethodSource(String week, String weekShort) {
        assertEquals(weekShort, week.substring(0, 3));
    }

    static Stream<Arguments> provideStringArgs() {
        return Stream.of(
                Arguments.of("SUNDAY", "SUN"),
                Arguments.of("MONDAY", "MON"),
                Arguments.of("TUESDAY", "TUE")
        );
    }
}
```

### Using @CsvSource annotation

The `@CsvSource` annotation allows us to specify a comma-separated list of values. Each line in the `@CsvSource` annotation represents a distinct invocation of the parameterized test method.

Here is how we can use the `@CsvSource` in Junit5.

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CsvSourceTest {

    @ParameterizedTest
    @CsvSource({
            "SUNDAY, 6",
            "MONDAY, 6",
            "TUE, 3",
            "'', 0",
            "'HAPPY WEEKEND!', 14",
    })
    void testStringLength(String input, int expectedLength) {
        assertEquals(expectedLength, input.length());
    }
}
```

### Using @CsvFileSource annotation

The `@CsvFileSource` annotation in JUnit 5 allows you to use CSV files as a source of parameters for parameterized tests. This is useful for larger datasets or when you want to keep your test data separate from your test code.

Here is how we can use `@CsvFileSource` in Junit5:

```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CsvFileSourceTest {

    @ParameterizedTest
    @CsvFileSource(resources = "/data1.csv")
    void testWithCsvFileSource1(String day, int length) {
        assertEquals(length, day.length());
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/data2.csv", delimiter = ';')
    void testWithCsvFileSourceDelimiter(String day, int length) {
        assertEquals(length, day.length());
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/data3.csv", nullValues = {"NULL"})
    void testWithCsvFileSourceNullValue(String day, int length) {
        assertEquals(length, day != null ? day.length() : 0);
    }
}
```

The above code snippet uses the `data.csv` file. It reads the file from the `src/test/resources` directory.

**data1.csv**  

```text
SUNDAY, 6
MONDAY, 6
TUE, 3
HAPPY WEEKEND!, 14
```

**data2.csv**

```text
SUNDAY; 6
MONDAY; 6
TUE; 3
HAPPY WEEKEND!; 14
```

**data3.csv**

```text
SUNDAY, 6
MONDAY, 6
TUE, 3
HAPPY WEEKEND!, 14
 , 0
```

If your CSV file uses a delimiter other than a comma, you can specify it using the `delimiter` attribute of the `@CsvFileSource` annotation.

```java
@CsvFileSource(resources = "/data.csv", delimiter = ';')
```

By default, an empty field in the CSV file is treated as an empty string. If you want to treat them as `null`, specify a `nullValues` attribute.

```java
@CsvFileSource(resources = "/data.csv", nullValues = {"NULL"})
```

### Using @ArgumentsSource annotation

The `@ArgumentsSource` annotation allows us to specify a custom, reusable source of arguments. It allows you to define a class that implements the `ArgumentsProvider` interface, which can then generate and provide complex argument objects for your tests.

Here is how we can use `@ArgumentsSource` annotation:

```java
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.ArgumentsProvider;
import org.junit.jupiter.params.provider.ArgumentsSource;
import java.util.stream.Stream;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ArgumentSourceTest {

    @ParameterizedTest
    @ArgumentsSource(CustomArgumentsProvider.class)
    void testWithCustomArgumentsSource(String input, int number) {
        assertNotNull(input);
        assertTrue(number > 0);
    }
}

class CustomArgumentsProvider implements ArgumentsProvider {

    @Override
    public Stream<? extends Arguments> provideArguments(ExtensionContext context) {
        return Stream.of(
                Arguments.of("SUNDAY", 6),
                Arguments.of("MONDAY", 6),
                Arguments.of("TUE", 3),
                Arguments.of("HAPPY WEEKEND!", 14)
        );
    }
}
```
