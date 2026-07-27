---
id: 400
title: Working XML-Based REST API with Spring Boot
slug: handling-xml-request-and-response-in-spring-boot-rest
excerpt: This article explains how to handle XML requests and responses in Spring Boot REST APIs using jackson-dataformat-xml dependency.
difficulty: intermediate
publishedDate: "2024-02-08T00:57:38.000Z"
updatedDate: "2025-09-16T23:05:40.987Z"
videoLink: O0W3X9hX5bU
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-boot-movies-xml-api"
featured: false
thumbnail: /media/posts/Working_with_XML_in_Spring_Boot_REST.jpeg
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The `@RestController` annotation in Spring boot is designed to automatically serializes Java objects into JSON or XML, based on the content negotiation strategy defined in your controller.

It combines the `@Controller` and `@ResponseBody` annotations. It tells Spring that this class is a controller where every method returns a domain object instead of a view.

-   The payload is automatically converted to JSON or XML based on the value defined in the `Accept` header.
-   Similarly, the response object is automatically converted to JSON or XML-based `Content-type` header defined in your controller configuration.

Spring uses the Jackson library internally so we don't need to serialise or deserialise to convert Java objects manually.

For example, the following controller class:

-   It has 3 controller methods; two GET endpoints that return the movie data
-   A POST endpoint that adds a new movie to the MongoDB
-   By default, the controller class will accept the JSON request and produce the JSON response.

```java
@RestController
@RequestMapping(value = "/api/1.0/movies")
public class MoviesController {

    private final MovieService movieService;

    public MoviesController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        return ResponseEntity.ok(movieService.getMovies());
    }

    @PostMapping
    public Movie createMovie(@RequestBody MovieDto movieDto) {
        return movieService.createMovie(movieDto);
    }

    @GetMapping(path = "/{movieId}")
    public Movie getMovie(@PathVariable String movieId) {
        return movieService.getMovie(movieId);
    }
}
```

Let us change the `MovieController` to accept XML content type in the request body and produce the XML response.

### Jackson XML Dependency

First, We need to add [Jackson XML](https://github.com/FasterXML/jackson-dataformat-xml/wiki/Jackson-XML-annotations#jacksonxmlelementwrapper) dependency for reading and writing XML data.

For the Gradle project, add the following dependency to your `build.gradle` file:

```groovy
implementation 'com.fasterxml.jackson.dataformat:jackson-dataformat-xml'
```

For a maven-based project, you can add the following to your `pom.xml` file.

```xml
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```

We need to annotate our controller mapping to match the `application/xml` media type. This is done using the `Content-Type` and `Accept` media type to our controller mapping.

This can be done by defining the appropriate MediaType using the `produces` and `consumes` property of `RequestMapping` annotation.

```java
@RestController  
@RequestMapping(value = "/api/1.0/movies",  
        consumes = {MediaType.APPLICATION_XML_VALUE}, # Content-Type
        produces = {MediaType.APPLICATION_XML_VALUE}  # Accept
)  
public class MoviesController {  

    private final MovieService movieService;  

    public MoviesController(MovieService movieService) {  
        this.movieService = movieService;  
    }  

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {  
        return ResponseEntity.ok(movieService.getMovies());  
    }  

    @PostMapping
    public Movie createMovie(@RequestBody MovieDto movieDto) {  
        return movieService.createMovie(movieDto);  
    }  

    @GetMapping(path = "/{movieId}")  
    public Movie getMovie(@PathVariable String movieId) {  
        return movieService.getMovie(movieId);  
    }  

}
```

In the above code snippet, we have set the `MediaType` configuration to the controller level, which means all controller methods will now consume and produce XML output. We can also do the same to the individual methods by using produces and consumes property on HTTP method mapping annotation.

That is all, now our controller will handle the XML request and produce the `application/xml` media type. Let us test our `/movies` endpoint

```shell
curl --location 'http://localhost:8080/api/1.0/movies' \
    --header 'Content-type: application/xml' \
    --header 'Accept: application/xml'
```

Now it will produce XML output

```xml
<List>
    <item>
        <id>65c4092af4ba290f3c55cd06</id>
        <title>Iron Man &amp; Captain America: Heroes United</title>
        <headline>Iron Man (Adrian Pasdar) and Captain America (Roger Craig Smith) must prevent Red Skull (Liam O'Brien) and Taskmaster (Clancy Brown) from destroying the world.</headline>
        <language>EN</language>
        <region>USA</region>
        <actors>
            <actors>David Kaye</actors>
            <actors>Ian McKellen</actors>
            <actors>Adrian Pasdar</actors>
        </actors>
        <genres>
            <genres>Action</genres>
            <genres>Adventure</genres>
            <genres>Sci-fi</genres>
        </genres>
    </item>
    <item>
        <id>65c4092af4ba290f3c55cd07</id>
        <title>Iron Man &amp; Captain America: Heroes United</title>
        <headline>Iron Man (Adrian Pasdar) and Captain America (Roger Craig Smith) must prevent Red Skull (Liam O'Brien) and Taskmaster (Clancy Brown) from destroying the world.</headline>
        <language>EN</language>
        <region>USA</region>
        <actors>
            <actors>David Kaye</actors>
            <actors>Ian McKellen</actors>
            <actors>Adrian Pasdar</actors>
        </actors>
        <genres>
            <genres>Action</genres>
            <genres>Adventure</genres>
            <genres>Sci-fi</genres>
        </genres>
    </item>
</List>
```

### Configure Default Content Negotiation

The above method works fine but the configuration is now at controller level. The default media type remains JSON for all other controllers.

We can override this by setting the default content negotiation for all controllers thought the project by implementing the `WebMvcConfigurer` configuration.

```java
@Configuration  
public class AppConfig implements WebMvcConfigurer {  

    @Override  
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) { 
        configurer.defaultContentType(MediaType.APPLICATION_XML);  
    }  
}
```

### Wrapping XML Response

Notice the above XML response, the result is wrapped inside `<List><item><item></List>` tag. This is not very pretty.

We can make the following changes to wrap the response `<movies><movie></movie></movies>` tag.

-   Create a wrapper class for Movies.
-   The `@JacksonXmlRootElement` annotation can be used to define the name of the root element used for the root-level object when serialized, which normally uses the name of the type (class).
-   The `@JacksonXmlElementWrapper` annotation is used to specify XML elements to use for wrapping `List` and `Map` properties.
-   From the controller, instead of returning `ResponseEntity<List<Movie>>`, we will return the `ResponseEntity<Movies>>` type.

```java
@Getter
@Setter
@RequiredArgsConstructor
@JacksonXmlRootElement(localName = "movies")
public class Movies {

    @JacksonXmlProperty(localName = "movie")
    @JacksonXmlElementWrapper(useWrapping = false)
    private final List<Movie> moviesList;

}

@Getter
@Setter
@JacksonXmlRootElement(localName = "Movie")
public class Movie {
    private String id;
    private String title;
    private String headline;
    private String language;
    private String region;
    private List<String> actors;
    private List<String> genres;
}
```

And, update the controller to return the `ResponseEntity<Movies>>` type.

```java
@GetMapping  
public ResponseEntity<Movies> getMovies() {  
    Movies movies = new Movies(movieService.getMovies());  
    return ResponseEntity.ok(movies);  
}
```

Now this will produce,

```xml
<movies>
    <movie>
        <id>65c4092af4ba290f3c55cd06</id>
        <title>Iron Man &amp; Captain America: Heroes United</title>
        <headline>Iron Man (Adrian Pasdar) and Captain America (Roger Craig Smith) must prevent Red Skull (Liam O'Brien) and Taskmaster (Clancy Brown) from destroying the world.</headline>
        <language>EN</language>
        <region>USA</region>
        <actors>
            <actors>David Kaye</actors>
            <actors>Ian McKellen</actors>
            <actors>Adrian Pasdar</actors>
        </actors>
        <genres>
            <genres>Action</genres>
            <genres>Adventure</genres>
            <genres>Sci-fi</genres>
        </genres>
    </movie>
    <movie>
        <id>65c4092af4ba290f3c55cd07</id>
        <title>Iron Man &amp; Captain America: Heroes United</title>
        <headline>Iron Man (Adrian Pasdar) and Captain America (Roger Craig Smith) must prevent Red Skull (Liam O'Brien) and Taskmaster (Clancy Brown) from destroying the world.</headline>
        <language>EN</language>
        <region>USA</region>
        <actors>
            <actors>David Kaye</actors>
            <actors>Ian McKellen</actors>
            <actors>Adrian Pasdar</actors>
        </actors>
        <genres>
            <genres>Action</genres>
            <genres>Adventure</genres>
            <genres>Sci-fi</genres>
        </genres>
    </movie>
</movies>
```
