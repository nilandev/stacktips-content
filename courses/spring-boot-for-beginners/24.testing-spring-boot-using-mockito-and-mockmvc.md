---
id: 427
title: Testing Spring Boot REST API using Mockito and MockMvc
slug: testing-spring-boot-using-mockito-and-mockmvc
excerpt: Testing Spring Boot REST API using Mockito and MockMvc
difficulty: beginner
publishedDate: "2024-01-27T16:20:41.000Z"
updatedDate: "2025-09-16T23:05:40.822Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/02-testing-spring-boot"
featured: false
thumbnail: null
topics: 
  - spring-boot
tags:
  - mockmvc-spring-boot-testing
  - mockito-unit-testing-java
  - webmvctest-annotation
  - spring-boot-rest-api-testing
course: spring-boot-for-beginners
displayOrder: 24
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The best way to confirm the reliability and correctness of software applications is to write tests that assert the desired behavior of an application. This post covers how to perform unit and integration testing in Spring Boot.

The `spring-boot-starter-test` [starter dependency](/courses/spring-boot-for-beginners/introduction-to-spring-boot-framework#spring-boot-starter-dependencies) is required for writing the unit and integration tests in Spring Boot application. The Spring Boot version 3.2.2 `spring-boot-starter-test` includes the following [transitive dependencies](/courses/maven-for-beginners/dependency-management-in-maven#411-transitive-dependency).

-   **Jupiter JUnit5**: The de facto standard for unit testing Java.
-   **Jayway JsonPath:** A popular Java library used for parsing and querying JSON documents. It is used for navigating through the structure of your JSON data and access specific values or elements.
-   **Awaitility:** Used for waiting for asynchronous operations to complete without introducing additional logic in your code.
-   **Hamcrest:** Hamcrest is used for writing expressive and readable assertions in unit tests. It provides a clear and concise way to express what you expect from your code, making your tests easier to understand and maintain.
-   **Mockito:** Java mocking framework used to create mock objects that simulate the behavior of real objects without actually implementing their functionality. This makes it easier to isolate the code you're testing from external dependencies and write more focused and reliable tests.

Let’s start by creating a [new Spring application](/courses/spring-boot-for-beginners/creating-first-spring-boot-project#create-a-new-spring-boot-project). You can create a Spring boot project either using Spring CLI or using Spring Initializr.

When we create a new Spring boot project the `spring-boot-starter-test` dependencies is added by default. If you don't have it already, you can add this manually in your `pom.xml` or `build.gradle` file.

For maven, add the following to the `<dependencies>` section in your `pom.xml` file

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

The `test` scope defines that the `spring-boot-starter-test` dependency is required during the test compilation and execution phases.

For gradle,

```groovy
testImplementation 'org.springframework.boot:spring-boot-starter-test'
```

The Spring Initializr also includes a default test class in the root directory of the test package.

```java
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MoviesApplicationTests {

    @Test
    void contextLoads() {

    }
}
```

The `@SpringBootTest` annotation tells Spring Boot to look for a main configuration class (one with `@SpringBootApplication`, for instance) and use that to start the Spring application context.

The `@Test` annotation a JUnit annotation that will execute the method when the tests starts. A test class can contain one or more test methods. When there are multiple test methods, the order of execution is not fixed. If you want to fix the execution order you can do that using the method name, display name, using order annotation. Checkout this tutorials that explains [how to order test methods](https://stacktips.com/articles/the-order-of-tests-in-junit5).

You can run this test in your IDE or on the command line using following Maven or Gradle commands.

```bash
./mvnw test
```

or

```bash
./gradlew test
```

## Simple Test

Now that we have the required test dependency in our project and we have learnt how to execute the test, let us now test the following controller.

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @RequestMapping("/")
    public String greeting() {
        return "Hello, Spring Boot!";
    }
}
```

Let us now verify if the Spring context is creating the instance of `GreetingsController` with an assertion.

```java
import com.stacktips.movies.api.GreetingsController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

@SpringBootTest
class MoviesApplicationTests {

    @Autowired
    private GreetingController controller;

    @Test
    void contextLoads() {
        assertThat(controller, is(notNullValue()));
    }

}
```

The `@Autowired` injects the controller instance before the test methods are run. We have hamcrest which provides `assertThat()` method to assert the not null value.

> \[!TIP\] The Spring Test support caches the application context between tests, so that if you have multiple methods in a test case or multiple test cases with the same configuration, they incur the cost of starting the application only once. You can control the cache by using the `@DirtiesContext` annotation.

## Testing the REST API

Let us now write some tests to assert the behavior of your application. For that we will start the application and and listen for a connection (as it would do in production) and then send an HTTP request and assert the response.

```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class GreetingsControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void greetingShouldReturnDefaultMessage() throws Exception {
        String result = restTemplate
            .getForObject("http://localhost:" + port + "/",  String.class);
        assertThat(result, is("Hello, Spring Boot!"));
    }

}
```

The `webEnvironment=RANDOM_PORT` to start the server with a random port. This is very useful to avoid conflicts in test environments and the injection of the port with `@LocalServerPort`.

Spring boot test also provides a `TestRestTemplate` for to make http calls from your test.

## Using MockMvc

In the above approach we have started the server but if we want to tests to only the web layer by without starting a server we can do that using `@WebMvcTest`. For that, we will inject an instance of `MockMvc`. For MockMvc to work we need to need to use the `@AutoConfigureMockMvc` annotation on our test class.

If we have multiple controllers, we can instantiate specific ones by using the`@WebMvcTest(HomeController.class)` annotation on the class.

```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GreetingController.class)
class GreetingControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void greetingShouldReturnDefaultMessage() throws Exception {
        this.mockMvc.perform(get("/"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Hello, Spring Boot!")));
    }

}
```

The test assertion is the same as in the previous case. However, in this test, Spring Boot instantiates only the web layer rather than using the whole spring context.

## Mocking Services

So far, our `HomeController` is simple and has no dependencies. But we will often have additional services to isolate the business logic into separate classes. For example.

**MovieService**

```java
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    public List<String> getMovies() {
        return List.of("The Incredibles", "Father of the Bride", "The Parent Trap");
    }
}
```

And, lets say our MovieController has `/movies` GET endpoint.

```java
import com.stacktips.movies.service.MovieService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @RequestMapping("/movies")
    public List<String> getMovies() {
        return movieService.getMovies();
    }
}
```

In the above code snippet, Spring automatically injects the `MovieService` dependency into the controller as we have only one constructor defined. If you run the spring boot application and test `/movies` endpoint, it will return the list of movies.

```text
nilan > curl http://localhost:8080/movies
["The Incredibles","Father of the Bride","The Parent Trap"]
```

Let us now create a test for the `MoviesController` and mock the service instance. To mock the Spring bean the `@MockBean` annotation is used.

```java
import com.stacktips.movies.service.MovieService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MovieController.class)
class MovieControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MovieService movieService;

    @Test
    void greetingShouldReturnMockResponse() throws Exception {
        List<String> moviesMock = List.of("Sprider Man", "X-Man", "Iron Man");
        when(movieService.getMovies()).thenReturn(moviesMock);

        this.mockMvc.perform(get("/movies"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0]", is("Sprider Man")))
                .andExpect(jsonPath("$[1]", is("X-Man")))
                .andExpect(jsonPath("$[2]", is("Iron Man")));
    }

}
```

The `mockMvc.perform` method makes the GET request to the `/movies` endpoint. But this time, instead of getting the results from the service, it returns the mocked response using `Mockito`.

We are also using the Json path to assert the Json response.
