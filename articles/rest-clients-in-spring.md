---
id: 438
title: "Digging into HTTP Clients in Spring: From RestTemplate to HTTP Interface"
slug: rest-clients-in-spring
excerpt: This post explores different options available for making REST API calls from Spring and dives into the strengths and weaknesses of each.
difficulty: intermediate
publishedDate: "2024-04-29T16:59:57.000Z"
updatedDate: "2025-09-16T23:05:41.405Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-rest-clients"
featured: true
thumbnail: /media/post/667_rest-clients-in-spring-framework.jpeg
topics: 
  - spring-boot
tags:
  - spring-resttemplate
  - spring-webclient
  - spring-http-interface
  - feign-client
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Over the past few years working in Spring, I had the opportunity to use different HTTP clients for consuming third-party REST API calls. Starting from `RestTemplate` to the more modern `RestClient` and all-new declarative HTTP interface.

While talking to different candidates during the interviews, almost all of them have used RestTemplate, while only a few know about the other modern alternatives available in the spring framework.

This post covers different options available for making REST API calls from Spring and dives into the strengths and weaknesses of each.

Mainly we have the following choices:

1.  [RestTemplate](https://stacktips.com/articles/calling-rest-services-using-resttemplate)
2.  Feign Client
3.  Rest Client
4.  [WebClient](https://stacktips.com/articles/what-is-webclient-how-to-use-webclient-in-java-springboot)
5.  New declarative HTTP Interface

### 1. RestTemplate

The `RestTemplate` was Introduced almost 14 years ago in Spring Framework version 3.0. RestTemplate is a synchronous client used to make HTTP requests from the Spring application. It simplifies the process of making HTTP requests using template-like classes.

For using `RestTemplate` in Spring boot, we need to include `spring-boot-starter-web` dependency.

The following code snippet is used to consume the FakeStore API and perform different HTTP API calls.

```java
@Component  
public class ProductApiClient {  

    private static final String POST_API = "https://fakestoreapi.com/products";  
    private static final String GET_API = "https://fakestoreapi.com/products/{productId}";  
    private static final String DELETE_API = "https://fakestoreapi.com/products/{productId}";  

    @Value("${product-api.key}")  
    private String apiKey;  

    private final RestTemplate restTemplate;  

    public ProductApiClient(RestTemplateBuilder restTemplateBuilder) {  
        this.restTemplate = restTemplateBuilder.build();  
    }  

    public ResponseEntity<Product> getProduct(String productId) {  
        Map<String, String> params = new HashMap<>();  
        params.put("productId", productId);  

        return restTemplate.getForEntity(GET_API, Product.class, params);  
    }  

    public Product createProduct(Product product) {  
        HttpHeaders headers = new HttpHeaders();  
        headers.set("X-API-KEY", apiKey);  
        headers.setContentType(MediaType.APPLICATION_JSON);  

        HttpEntity<Product> httpEntity = new HttpEntity<>(product, headers);  
        return restTemplate.postForObject(POST_API, httpEntity, Product.class);  
    }  

    public void updateProduct(Product product) {  
        Map<String, String> params = new HashMap<>();  
        params.put("productId", product.getId());  
        restTemplate.put(GET_API, product, params);  
    }  

    public void deleteProduct(String productId) {  
        Map<String, String> params = new HashMap<>();  
        params.put("productId", productId);  
        restTemplate.delete(DELETE_API, params);  
    }  
}
```

The `RestTemplate` operates on a synchronous and blocking model, which is not as efficient as other modern alternatives.

While `RestTemplate` has been a very reliable workhorse for making HTTP calls for over a decade, a modern version of the HTTP client called `WebClient` was introduced in Spring 5.

_Notice_

If you’re developing a new application or migrating the old codebase, it is recommended to use [WebClient](https://stacktips.com/articles/what-is-webclient-how-to-use-webclient-in-java-springboot) over `RestTemplate`. Even better, if you're using Spring 6, you can use `RestClient` backed Spring Interface declarative clients.

### 2. Feign Client

For many years, we relied on `RestTemplate` for our HTTP communications from Spring, and it served us well. However, as our API contracts expanded and we added new endpoints, we began to see that keeping up with the API changes with `RestTemplate` was becoming increasingly difficult.

We were on a hunt for an alternative to `RestTemplate` that requires writing less code. Fast forward to 2020, the `FeignClient` was first introduced as a part of the **Spring Cloud Netflix** stack.

Feign is a declarative REST client designed to simplify the process of writing web service clients by handling boilerplate tasks such as client creation and response handling. Users simply need to define an interface using standard JAX-RS annotations, and the framework manages the rest. Additionally, Feign provides support for encoders, decoders, and extensive logging support.

To use FeignClient, we need to add the `spring-cloud-starter-openfeign` dependency.

The above `ProductApiClient` can be written in Feign as:

```java
@FeignClient(name = "product-api-client", url = "https://fakestoreapi.com")  
public interface ProductApiClient {  

    @GetMapping("/products/{productId}")  
    ResponseEntity<Product> getProduct(@PathVariable("productId") String productId);  

    @PostMapping("/products")  
    Product createProduct(@RequestBody Product product, 
                    @RequestHeader("X-API-KEY") String apiKey);  

    @PutMapping("/products/{productId}")  
    void updateProduct(@PathVariable("productId") String productId, 
                    @RequestBody Product product);  

    @DeleteMapping("/products/{productId}")  
    void deleteProduct(@PathVariable("productId") String productId);  
}
```

Both **Feign** and **RestTemplate** are designed for synchronous operations and do not support asynchronous API calls. To achieve asynchronous behaviour, we have to write a custom implementation using `CompletableFuture` or another asynchronous execution mechanism.

_Notice_

Starting with Spring 6 and Spring Cloud 2022, the Spring community recommend WebClient-backed Spring interface clients as a declarative client solution of choice.

### 3. WebClient

The `WebClient` is an alternative to `RestTemplate`. It was introduced in Spring 5 as part of the **WebFlux** stack. It provides both synchronous and asynchronous APIs to make the REST calls from the Spring application.

To use `WebClient` in a Spring Boot application, we need to add the `spring-boot-starter-webflux` dependency.

The above `ProductApiClient` can be written using `WebClient` as follows:

```java
@Component  
public class ProductApiClient {  

    @Value("${product-api.key}")  
    private String apiKey;  

    private final WebClient webClient;  

    public ProductApiClient(WebClient.Builder webClientBuilder) {  
        this.webClient = webClientBuilder  
                .baseUrl("https://fakestoreapi.com")  
                .build();  
    }  

    public Mono<ResponseEntity<Product>> getProduct(String productId) {  
        return webClient.get()  
                .uri("/products/{productId}", productId)  
                .retrieve()  
                .toEntity(Product.class);  
    }  

    public Mono<Product> createProduct(Product product) {  
        return webClient.post()  
                .uri("/products")  
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)  
                .header("X-API-KEY", apiKey)  
                .bodyValue(product)  
                .retrieve()  
                .bodyToMono(Product.class);  
    }  

    public Mono<Void> updateProduct(String productId, Product product) {  
        return webClient.put()  
                .uri("/products/{productId}", productId)  
                .bodyValue(product)  
                .retrieve()  
                .bodyToMono(Void.class);  
    }  

    public Mono<Void> deleteProduct(String productId) {  
        return webClient.delete()  
                .uri("/products/{productId}", productId)  
                .retrieve()  
                .bodyToMono(Void.class);  
    }  
}
```

The `WebClient` works similar way to `RestTemplate` but with a modern functional and fluent style API.

Ref: [WebClient](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html#rest-webclient)

### 4. RestClient

The `RestClient` is a newer client in Spring 6, designed to overcome some limitations of `RestTemplate`. It supports both synchronous and asynchronous operations.

As you can see in the following example, the `RestClient` work similarly to the `WebClient` API, except we don’t have to add the WebFlux dependency.

It also provides helper methods to extract the response including status, headers, and body without calling the `block()` or `subscribe()` method.

The `RestTemplate` is marked for deprecation in Spring 6 and it is recommended to use `RestClient` for applications using Spring 6 or above.

To use `RestClient` in Spring Boot, we need to add the `spring-boot-starter-web` dependency.

```java
@Component  
public class ProductApiClient {  

    private static final String BASE_URL = "https://fakestoreapi.com";  

    @Value("${product-api.key}")  
    private String apiKey;  

    private final RestClient restClient;  

    public ProductApiClient() {  
        this.restClient = RestClient.builder()  
                .baseUrl(BASE_URL)  
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)  
                .build();  
    }  

    public ResponseEntity<Product> getProduct(String productId) {  
        return restClient.get()  
                .uri("/products/{productId}", productId)  
                .retrieve()  
                .toEntity(Product.class);  
    }  

    public ResponseEntity<Product> createProduct(Product product) {  
        return restClient.post()  
                .uri("/products")  
                .header("X_API_KEY", apiKey)  
                .body(product)  
                .retrieve()  
                .toEntity(Product.class);  
    }  

    public void updateProduct(Product product) {  
        restClient.put()  
                .uri("/products/{productId}", product.getId())  
                .header("X_API_KEY", apiKey)  
                .body(product)  
                .retrieve().toEntity(Product.class);  
    }  

    public void deleteProduct(String productId) {  
        restClient.delete()  
                .uri("/products/{productId}", productId)  
                .header("X_API_KEY", apiKey)  
                .retrieve().toBodilessEntity();  
    }  
}
```

Ref: [RestClient](https://docs.spring.io/spring-framework/reference/integration/rest-clients.html#rest-restclient)

### 5. HTTP Interface

Spring 6 also adds the ability to create a declarative HTTP interface (similar to Feign) using the existing HTTP clients such as RestTemplate, WebClient and RestClient.

It creates a proxy to perform requests and attach it to the preferred HTTP client configured. For example, the above `ProductApiClient` can be written using a declarative HTTP interface as follows:

```java
@HttpExchange(url = "/products")  
public interface ProductApiClient {  

    @GetExchange(url = "/{productId}")  
    ResponseEntity<Product> getProduct(@PathVariable String productId);  

    @PostExchange  
    Product createProduct(@RequestBody Product product);  

    @PutExchange(url = "/{productId}")  
    void updateProduct(@PathVariable String productId, @RequestBody Product product,  
                       @RequestHeader(name = "X_API_KEY") String apikey);  

    @DeleteExchange(url = "/{productId}")  
    void deleteProduct(@PathVariable String productId,  
                       @RequestHeader(name = "X_API_KEY") String apikey);  
}
```

Now you can create a proxy that performs requests when methods are called.

To use it with `RestTemplate`:

```java
@Bean  
public ProductApiClient productApiClient() {  
    RestTemplate restTemplate = new RestTemplate();  
    restTemplate.setUriTemplateHandler(new DefaultUriBuilderFactory("https://fakestoreapi.com"));  
    RestTemplateAdapter adapter = RestTemplateAdapter.create(restTemplate);  
    HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();  
    return factory.createClient(ProductApiClient.class);  
}
```

To use it with `WebClient`:

```java
@Bean  
public ProductApiClient productApiClient() {  
    WebClient webClient = WebClient.builder()  
            .baseUrl("https://fakestoreapi.com")  
            .build();  
    WebClientAdapter adapter = WebClientAdapter.create(webClient);  
    HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();  
    return factory.createClient(ProductApiClient.class);  
}
```

To use it with `RestClient`:

```java
@Bean  
public ProductApiClient productApiClient() {  
    RestClient restClient = RestClient.builder()  
            .baseUrl("https://fakestoreapi.com")  
            .build();  
    RestClientAdapter adapter = RestClientAdapter.create(restClient);  
    HttpServiceProxyFactory factory = HttpServiceProxyFactory  
            .builderFor(adapter)  
            .build();  
    return factory.createClient(ProductApiClient.class);  
}
```

The all-new declarative HTTP interface simplifies the code and improves readability. It also provides compile-time checks and validations, reducing runtime errors.

### Conclusion

Spring framework has evolved over the years from synchronous to reactive and declarative HTTP clients. While `RestTemplate` provides fully tested and stable APIs, the new reactive and declarative clients using `RestClient` is the way forward.
