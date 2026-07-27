---
id: 14
title: How to Consume REST API in Spring Boot Using RestTemplate?
slug: calling-rest-services-using-resttemplate
excerpt: RestTemplate is a synchronous HTTP client and is designed to consume REST API calls from Spring boot application.
difficulty: beginners
publishedDate: "2022-04-15T19:51:42.000Z"
updatedDate: "2025-09-16T23:05:19.845Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/5/thumbnail.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

RestTemplate is a synchronous client to make HTTP request from Spring Boot application. It simplifies the process of making HTTP requests and handling the responses by providing a higher-level abstraction.

To consume a REST API using RestTemplate in a Spring Boot application, you need to first add the RestTemplate dependency in your project. If you're using Maven, add the following dependency to your pom.xml file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency> 
```

**Depreciation** **Notice!!**

A modern version of the HTTP client called WebClient has been introduced in Spring 5. It is an alternative to RestTemplate. It provides both synchronous and asynchronous API’s to make the REST calls more efficient.

If you’re developing a new application or migrating an old one, it is recommended to use [WebClient](/articles/what-is-webclient-how-to-use-webclient-in-java-springboot) over RestTemplate. RestTemplate will be deprecated in future versions.

RestTemplate provides a variety of methods for making HTTP calls to RESTful APIs. Here are some commonly used methods:

-   **getForObject()**: This method performs a GET request and returns the response body as an object of the specified type. It's typically used when you expect the response body to be deserialized into a single object.

```java
T response = restTemplate.getForObject(url, responseType);
```

-   **getForEntity()**: Similar to getForObject(), this method performs a GET request and returns the entire response as a ResponseEntity object. It provides access to the response body, headers, and status code.

```java
ResponseEntity response = restTemplate.getForEntity(url, responseType);
```

-   **postForObject()**: This method performs a POST request and sends the request body along with the request. It returns the response body as an object of the specified type.

```java
T response = restTemplate.postForObject(url, request, responseType);
```

-   **postForEntity()**: Similar to postForObject(), this method performs a POST request and returns the entire response as a ResponseEntity object.

```java
ResponseEntity<T> response = restTemplate.postForEntity(url, request, responseType);
```

-   **put()**: This method performs a PUT request to update a resource on the server. It sends the request body and returns the response as a ResponseEntity.

```java
ResponseEntity<Void> response = restTemplate.put(url, request);
```

-   **delete()**: This method performs a DELETE request to delete a resource on the server. It does not expect a response body and returns a ResponseEntity.

```java
ResponseEntity<Void> response = restTemplate.delete(url);
```

-   **exchange()**: This method is a more flexible option that allows you to perform any HTTP method (GET, POST, PUT, DELETE, etc.) and provides full control over the request and response. It returns a ResponseEntity object.

```java
HttpEntity<RequestType> requestEntity = new HttpEntity<>(request, headers);
ResponseEntity<ResponseType> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, responseType);
```

These are just a few examples of the methods provided by RestTemplate. RestTemplate also supports methods for handling HTTP headers, handling file uploads, setting query parameters, handling authentication, and more.

## Consuming the GET API

In the given example, we are fetching the API response as a JSON String. We need to use ObjectMapper to parse it to the POJO before using it in the application.

getForObject() method is pretty useful when we are getting an unparsable response from the server, and we have no  
control to get it fixed on the server-side. Here, we can get the response as String, and use a custom parser or use a string replacement function to fix the response before handling it to the parser.

In the course of this tutorial, we will create simple `RestTemplate` bean in the application.

```java
@Service
public class ProductService {

    private static final String POST_API = "https://fakestoreapi.com/products";
    private static final String GET_API = "https://fakestoreapi.com/products/{productId}";
    private static final String DELETE_API = "https://fakestoreapi.com/products/{productId}";

    private final RestTemplate restTemplate;

    public ProductService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }
}
```

#### Consuming APIs as String

```java
Map<String, String> params = new HashMap<>();
params.put("productId", productId);
String result = restTemplate.getForObject(GET_API, String.class, params);
```

#### Consuming APIs response to POJO

```java
Map<String, String> params = new HashMap<>();
params.put("productId", productId);

Product result = restTemplate.getForObject(GET_API, Product.class, params);
```

#### Using getForEntity() Method

```java
Map<String, String> params = new HashMap<>();
params.put("productId", productId);
ResponseEntity<Product> result = restTemplate.getForEntity(GET_API, Product.class, params);

HttpStatus statusCode = result.getStatusCode();
Product product = result.getBody();
```

#### Sending HTTP Headers using RestTemplate

```java
HttpHeaders headers = new HttpHeaders();
headers.setAccept(List.of(MediaType.APPLICATION_JSON));
headers.set("X-API-KEY", "YOUR_API_KEY");
HttpEntity<String> httpEntity = new HttpEntity<>(headers);

Map<String, String> params = new HashMap<>();
params.put("productId", productId);

ResponseEntity<Product> result = restTemplate.exchange(GET_API, HttpMethod.GET, httpEntity, 
                    Product.class, params);
return result.getBody();
```

## Consuming the POST API

```java
HttpHeaders headers = new HttpHeaders();
headers.set("X-API-KEY", "YOUR_API_KEY");
headers.setContentType(MediaType.APPLICATION_JSON);    
HttpEntity<Product> httpEntity = new HttpEntity<>(product, headers);
    
Product createdProduct = restTemplate.postForObject(POST_API, httpEntity, Product.class);
```

## Consuming the PUT API

```java
Map<String, String> params = new HashMap<>();
params.put("productId", product.getId());

restTemplate.put(GET_API, product, params);
```

## Consuming the DELETE API

```java
Map<String, String> params = new HashMap<>();
params.put("productId", productId);

restTemplate.delete(GET_API, params);
```
