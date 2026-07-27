---
id: 16
title: How to Configure Swagger2 in Spring Boot Application?
slug: how-to-configure-swagger2-in-spring-boot-application
excerpt: This tutorial explains how to configure Swagger2 and enable SwaggerUI in Spring Boot application.
difficulty: beginners
publishedDate: "2022-04-14T00:33:00.000Z"
updatedDate: "2025-09-16T23:05:20.008Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/7/thumbnail.png
topics: 
  - php
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

When you expose a set of REST API endpoints, documentation of those endpoints is quite essential for the API consumers. Some companies follow the documentation first approach, where the documentation tool such as RAML, or Swagger is used to generate the API specification before proceeding with development.

While some other companies do the documentation as the API endpoints are being developed. This is where the Swagger2 comes into the picture. While there are some downsides to this approach, there are many benefits Swagger has to offer. Every change in the API should be simultaneously described in the reference documentation. Accomplishing this manually is a tedious exercise, so automation of the process makes it easy to maintain the documentation.

## What is Swagger

Swagger is widely used for visualizing APIs, and Swagger UI provides an online sandbox for frontend developers. A swagger is a tool, a specification, and a complete framework implementation for producing the visual representation of RESTful Web Services.

When Swagger is property configured and annotated in your project, a consumer can understand and interact with the remote service from the Swagger UI with a minimal amount of implementation logic. Thus Swagger removes the guesswork in calling the service.

## Configure Swagger2 in Spring Boot

For the tutorial, we will use the `springfox-boot-starter` dependency to enable the Swagger2 in your Spring boot project.

If you’re using maven based project, then add the following dependency into your `pom.xml` file

```xml
<dependency>
   <groupId>io.springfox</groupId>
   <artifactId>springfox-boot-starter</artifactId>
   <version>3.0.0</version>
</dependency>
```

If your using gradle build system, you need to add these into your `build.gradle` file.

```groovy
implementation 'io.springfox:springfox-boot-starter:3.0.0'
```

## Enable the Swagger2

To enable the Swagger 2 we need to use the `@EnableSwagger2` annotation. Add the following configuration class to your spring boot project.

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket postsApi() {
        ApiInfo apiInfo = new ApiInfoBuilder()
                .title("Product API")
                .description("Product REST API documentation")
                .version("1.0.0")
                .build();

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.kitchensink.api"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo)
                .enable(true);
    }
}
```

**Notes:**

-   The Springfox library automatically scans all the API resources defined in the application via @Controller components and adds them to the “documentation index”.
-   A Docket bean is defined and using its select() method we get an instance of ApiSelectorBuilder. ApiSelectorBuilder we configure the endpoints exposed by Swagger.
-   After the Docket bean is defined, it’s select() method returns an instance of ApiSelectorBuilder, which provides a way to control the endpoints exposed by Swagger.
-   Using the RequestHandlerSelectors and PathSelectors we configure the predicates for the selection of RequestHandlers.

## Sring boot Controller

Here is how my controller code looks like.

```java
@RestController
@RequestMapping(value = "/api/products/1.0", produces = {MediaType.APPLICATION_JSON_VALUE})
@RequiredArgsConstructor
public class ProductController {
    private final ProductService stockService;

    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> search(
            @RequestParam(defaultValue = "1", required = false) int page,
            @RequestParam(defaultValue = "50", required = false) int size,
            @RequestParam(required = false) String category) throws IOException {

        return ResponseEntity.ok(stockService.searchProducts(page, size, category));
    }

    @GetMapping(path = "/products")
    public ResponseEntity<List<Product>> products() throws IOException {
        return ResponseEntity.ok(stockService.getProducts());
    }

    @GetMapping(path = "/products/{productId}")
    public ResponseEntity<Product> productById(@PathVariable String productId) throws IOException {

        return ResponseEntity.ok(stockService.findProductById(productId));
    }

    @PostMapping(path = "/products", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Product> createProduct(@Validated @RequestBody ProductDto productDto)
            throws URISyntaxException {

        final Product product = stockService.creteProduct(productDto);
        return ResponseEntity
                .created(new URI("/api/products/1.0/products/" + product.getId()))
                .body(product);
    }

    @DeleteMapping(path = "/products")
    public ResponseEntity<ResponseType> deleteProduct(@RequestParam long productId) {

        boolean result = stockService.deleteProduct(productId);
        return ResponseEntity.ok(result ? ResponseType.SUCCESS : ResponseType.FAILURE);
    }
}
```

Basically, I have not made any changes to my Controller class. Additional configuration can be done in your controllers, to generate more descriptive documentation. But we will cover that in the next post.

## Test the Swagger UI

That is all needed for now to generate the swagger documentation for your project.

Now that we’ve configured Swagger, the spring boot will expose `/v2/api-docs` under the hood. Let us run the project and hit [http://localhost:8080/v2/api-docs](http://localhost:8080/v2/api-docs) in your browser to test.

To access Swagger UI for our API documentation, visit  
[http://localhost:8080/swagger-ui/#](http://localhost:8080/swagger-ui/#).

![](/media/articles/7/Swagger-UI-1024x619.png)

## Download Project on Github

Check out the complete source code for this example [here on Github.](https://github.com/npanigrahy/spring-boot-examples/tree/main/kitchensink-api-swagger2)
