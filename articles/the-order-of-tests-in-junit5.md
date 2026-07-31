---
id: 426
title: Order of Test Methods in JUnit5
slug: the-order-of-tests-in-junit5
excerpt: This article explains how to order the execution of test methods in Junit5. It explains different options such as order by DisplayName, MethodName, Random, OrderAnnotation or based on a custom order.
difficulty: intermediate
publishedDate: "2024-01-26T15:52:16.000Z"
updatedDate: "2025-09-16T23:05:40.743Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/the-order-of-tests-in-junit5.jpeg
topics: 
  - junit5
tags:
  - junit5-testmethodorder
  - junit5-order-annotation
  - junit-test-execution-order
  - custom-methodorderer-junit5
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `@Test` a JUnit annotation that will execute the method when the tests starts. A test class can contain one or more test methods. When there are multiple test methods, the order of execution is not fixed.

The `@TestMethodOrder` is a type-level annotation that is used to configure a method orderer for the test methods of the annotated test class or test interface. The `@TestMethodOrder` can be defined in your test class, inherited from parent class or declared on a test interface implemented by a test class.

The `@TestMethodOrder` offers different ways to order test execution order. We can order by either `DisplayName`, `MethodName`, `Random`, `OrderAnnotation` or based on a custom order.

Title Please note, the `Alphanumeric` annotation is deprecated and internally uses the `MethodName` order.

### Order Test Methods by MethodName

Following code demonstrates how to order test methods based on the MethodName. The same applies for `Random` as well.

```java
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.assertTrue;

@TestMethodOrder(MethodOrderer.MethodName.class)
class MyServiceTests {

    @Test
    void test1() {
        assertTrue(true);
    }

    @Test
    void test2() {
        assertTrue(true);
    }

    @Test
    void test3() {
        assertTrue(true);
    }
}
```

Prints:

![](/media/summernote/Order_Test_Methods_by_MethodName.png)  

### Order Test Methods by DisplayName

The `@DisplayName` is used when the test report is generated. For ordering the test methods by display name we need to specify a custom display name for each test using the `@DisplayName` annotation.

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import static org.junit.jupiter.api.Assertions.assertTrue;

@TestMethodOrder(MethodOrderer.DisplayName.class)
class MyServiceTests {

    @Test
    @DisplayName("testMethod1")
    void test1() {
        assertTrue(true);
    }

    @Test
    @DisplayName("testMethod2")
    void test2() {
        assertTrue(true);
    }

    @Test
    @DisplayName("testMethod3")
    void test3() {
        assertTrue(true);
    }
}
```

Prints:

![](/media/summernote/Order_Test_Methods_by_DisplayName.png)  

### Order Test Methods by OrderAnnotation

To define the test execution order based on the `OrderAnnotation`, we need to declare `@Order` annotation for each test methods.

Please note that the `@Order` annotation should be from `org.junit.jupiter.api` package not from the spring framework `org.springframework.core.annotation` package.

```java
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import static org.junit.jupiter.api.Assertions.assertTrue;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MyServiceTests {

    @Test
    @Order(1)
    void test1() {
        assertTrue(true);
    }

    @Test
    @Order(3)
    void test2() {
        assertTrue(true);
    }

    @Test
    @Order(2)
    void test3() {
        assertTrue(true);
    }
}
```

Prints:

![](/media/summernote/Order_Test_Methods_by_OrderAnnotation.png)

### Defining Custom Order

We can define custom order by extending the existing method orderers. For example, let us create a custom method order by number of parameters passed to the test. The test with more parameters will be executed first.

```java
import java.util.Comparator;

class ParameterCountOrder implements MethodOrderer {
    @Override
    public void orderMethods(MethodOrdererContext context) {
        Comparator<MethodDescriptor> comparator =
                Comparator.comparingInt(md1 -> md1.getMethod().getParameterCount());
        context.getMethodDescriptors()
                .sort(comparator.reversed());
    }
}
```

Now, let us use the custom `MethodOrderer` we have created above.

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertTrue;

@TestMethodOrder(ParameterCountOrder.class)
class MyServiceTests {

    @Test
    @DisplayName("testMethod1")
    void test1() {
        assertTrue(true);
    }

    @ParameterizedTest(name = "{index} ==> product={0}")
    @CsvSource({
            "iPhone 15",
            "Mx Master 3S"
    })
    @DisplayName("testMethod2")
    void test2(String product) {
        assertTrue(true);
    }

    @DisplayName("testMethod3")
    @ParameterizedTest(name = "{index} ==> product={0}, price={1}")
    @CsvSource({
            "iPhone 15, 999",
            "Mx Master 3S, 89"
    })
    void test3(String product, double price) {
        assertTrue(true);
    }

}
```

Prints:

![](/media/summernote/Order_Test_Methods_by_CustomOrder.png)
