---
id: 354
title: Calling HTTP Services with WebClient in Spring Boot
slug: what-is-webclient-how-to-use-webclient-in-java-springboot
excerpt: This post explains how to use WebClient to consume the REST APIs in Java SpringBoot.
difficulty: intermediate
publishedDate: "2023-05-16T21:12:30.000Z"
updatedDate: "2025-09-16T23:05:37.552Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

WebClient is a non-blocking, reactive HTTP client introduced in Spring 5.0, which is the reactive counterpart to the traditional [RestTemplate](/articles/calling-rest-services-using-resttemplate) in Spring Boot. It provides a simplified and intuitive API for making HTTP requests. It is designed to handle both synchronous and asynchronous operations.

In this article we will see how to use WebClient to integrate with external HTTP/REST services from Spring Boot.

To use WebClient in a Spring Boot application, follow these steps:

## Adding WebClient Dependency

Ensure you have the necessary dependencies in your project. If you're using Maven, add the following dependency to your `**pom.xml**` file:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

## Create a WebClient Bean

In your code, create an instance of `**WebClient**` using the `**WebClient.builder()**` method. You can customize the WebClient instance by setting properties such as timeouts, authentication, SSL configuration, and more.

```
WebClient webClient = WebClient.builder()
    .baseUrl("https://api.example.com")
    .build();
```

## Making HTTP Request using WebClient

Use the methods provided by the WebClient instance to make HTTP requests. WebClient offers methods like `**get()**`, `**post()**`, `**put()**`, `**delete()**`, etc., to perform different types of requests. You can chain these methods together to customize the request.

```
Mono<MyResponse> responseMono = webClient.get()
    .uri("/data/{id}", id)
    .retrieve()
    .bodyToMono(MyResponse.class);
```

## Using WebClient in Spring Boot

Let us now examine, how to use `WebClient` in real-time to consume the following APIs from the Spring Boot application.

```
GET
https://fakestoreapi.com/products - get all products
https://fakestoreapi.com/products/1 - get specific product based on id

POST
https://fakestoreapi.com/products - add a new product

DELETE
https://fakestoreapi.com/products/1 - get specific product based on id
```

Let us now declare a domain model for the `Product` object.  

```
public class Product {

    private String image;
    private double price;
    private String description;
    private int id;
    private String title;
    private String category;

    //Getter, Setter
}
```

### Consuming GET API in WebClient

Let us now create a service class `ProductService` that consumes the Fakestore API endpoints using WebClient.

```
@Service
public class ProductService {

    private final WebClient webClient;

    public ProductService() {
        // you may configure the base URL in applcation.properties 
        this.webClient = WebClient.create("https://fakestoreapi.com");
    }

    public Mono<Product[]> getProducts() {
        return webClient.get()
                .uri("/products")
                .retrieve()
                .bodyToMono(Product[].class);
    }

    public Mono<Product> getProductById(int productId) {
        return webClient.get()
                .uri("/products/{id}", productId)
                .retrieve()
                .bodyToMono(Product.class);
    }
}
```

The `getProducts()` method uses WebClient to make a GET request to the `/products` endpoint. The `retrieve()` method initiates the request and returns a `ClientResponse` object. The `bodyToMono()` method is then used to deserialize the response body into an array of `Product` objects. Finally, the result is returned as a `Mono<Product[]>`.

Now we can consume the ProductService and call `getProducts()` endpoint to return the list of products as follows:

```
Mono<Product[]> productsMono = productService.getProducts();
productsMono.subscribe(
        products -> {
            //TODO write your logic to handle list of products repose
        },
        error -> {
            // Handle error cases
            error.printStackTrace();
        }
);
```

Similarly. we can call `getProductById()` method to return a product specified by Id.

```
Mono<Product> productMono = productService.getProductById(1);
productMono.subscribe(
        product -> {
            //TODO write your logic to handle product response
        },
        error -> {
            // Handle error cases
            error.printStackTrace();
        }
);
```

### Consuming POST API in WebClient

Now let us expand the `ProductService` class to add support for the `addProduct()` method. This method makes a POST request to the /products endpoint and sends the product information as the request body.

```
public Mono<Product> addProduct(Product product) {
    return webClient.post()
            .uri("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromValue(product))
            .retrieve()
            .bodyToMono(Product.class);
}
```

The post() method is used to initiate the POST request, and the body() method with BodyInserters.fromValue() is used to set the request body with the provided product object. The `contentType()` method sets the request content type to `application/json` to indicate that the request body is in JSON format.

Now, to consume this new endpoint as follows:

```
Product product = new Product();
product.setTitle("test product");
product.setPrice(13.5);
product.setDescription("lorem ipsum set");
product.setImage("https://i.pravatar.cc");
product.setCategory("electronic");
Mono<Product> addedProductMono = productService.addProduct(product);
addedProductMono.subscribe(
        addedProduct -> {
            //TODO Added product 
        },
        error -> {
            // Handle error cases
            error.printStackTrace();
        }
);
```

### Consuming DELETE API in WebClient

Now to delete a product, add the following `deleteProduct()` method to the ProductService.

```
public Mono<Void> deleteProduct(int productId) {
    return webClient.method(HttpMethod.DELETE)
            .uri("/products/{id}", productId)
            .retrieve()
            .bodyToMono(Void.class);
}
```

To consume this new endpoint and delete a product, you can use the ProductService as follows:

```
Mono<Void> deletedProductMono = productService.deleteProduct(productId);
deletedProductMono.subscribe(
        response -> {
            // TODO Product deleted successfully
        },
        error -> {
            // Handle error cases
            error.printStackTrace();
        }
);
```

## Implement Basic Authentication in WebClient

To implement basic authentication with WebClient, we need to create a custom interceptor class that implements the `ExchangeFilterFunction` interface. The `ExchangeFilterFunction` interface represents a functional contract for intercepting and modifying the exchange between the WebClient and the remote server during an HTTP request/response cycle.

It allows applying custom logic such as modifying request headers, logging, adding authentication tokens, modifying the request body, handling retries, or performing custom transformations on the response.

Let us create a `BasicAuthInterceptor` class that implements the `ExchangeFilterFunction` interface.

```
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.ClientRequest;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.ExchangeFunction;
import reactor.core.publisher.Mono;

class BasicAuthInterceptor implements ExchangeFilterFunction {
    private final String username;
    private final String password;

    public BasicAuthenticationInterceptor(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @Override
    public Mono<ClientResponse> filter(ClientRequest request, ExchangeFunction next) {
        HttpHeaders headers = request.headers();
        headers.setBasicAuth(username, password);
        headers.setContentType(MediaType.APPLICATION_JSON);
        return next.exchange(request);
    }
}
```

Here's an example of how you can configure WebClient to use the Interceptor for doing the basic authentication:

```
this.webClient = WebClient.builder()
        .baseUrl("https://fakestoreapi.com")
        .filter(new BasicAuthInterceptor("username", "password"))
        .build();
```

With this configuration, WebClient will automatically include the basic authentication credentials in the request headers for all requests made using that WebClient instance.

## Passsing X-API-Key Header in WebClient Request

To pass an `X-API-Key` header in WebClient requests in Spring Boot, you can use the `header()` method provided by the WebClient's `mutate()` function. Here's an example of how you can include the `X-API-Key` header in WebClient requests:

```
WebClient webClient = WebClient.builder()
        .baseUrl("https://fakestoreapi.com")
        .build();

 return webClient.get()
        .uri("/products")
        .header(HttpHeaders.AUTHORIZATION, "X-API-Key: YOUR_API_KEY")
        .retrieve()
        .bodyToMono(Product[].class);
```
