---
id: 20
title: Adding JSONP Support for Spring REST API
slug: spring-rest-and-jsonp-support
excerpt: In this example, we will learn how to add JSONP support to your Spring REST API. JSONP is a technique used to overcome the cross-domain restrictions imposed by browsers.
difficulty: beginners
publishedDate: "2020-01-04T08:38:54.000Z"
updatedDate: "2025-09-16T23:05:20.311Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## What is the Same Origin Policy?

The same-origin policy (SOP) is a browser security feature that restricts how scripts from one origin can interact with resources from another origin. An origin is defined as a combination of the hostname, port number and URI scheme.

These security restrictions are implemented in all modern browsers that disallow the cross-domain web Service calls using Ajax.  If you attempt to make cross-origin resources call, the browser will return the following error:

```
XMLHttpRequest cannot load URL.
Origin http://yourwebserver.com is not allowed by Access-Control-Allow-Origin.
Visit the below link for more details on browser security policy: <a
href="http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy" target="_blank"
rel="noopener noreferrer">Same-origin policy.</a>
```

The solution to the above problem is JSONP.

## What is JSONP?

JSONP (JSON with Padding) allows you to overcome these cross-domain restrictions and allows data to be retrieved from other different origins. 

## Working with JSONP in Spring

Since the Spring version 4.2 release, the JSONP is inbuilt into the Spring framework. In order to enable JSONP support for spring controllers, We need to declare an `@ControllerAdvice` bean that extends `AbstractJsonpResponseBodyAdvice`.

Add the following class alongside your spring config to support JSONP requests.

```java
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice;

@ControllerAdvice 
public class JsonpAdvice extends AbstractJsonpResponseBodyAdvice {
    public JsonpAdvice() {
        super("callback");
    }
}
```

With such `@ControllerAdvice` bean registered, it will be possible to request the JSON web service from another domain using a `<script>` tag.

Let us consider the following post resource for our example:

```java
public class Post {
  private int id;
  private String title;
  private String excerpt;
  private String body;
}
```

## Spring Controller

We do not have to make any changes to the REST controller methods. For the sake of simplicity and limited scope of this article, we’re skipping the full implementation of `getPost()` method.

```java
@RequestMapping(value = "/api/1.0/posts/{postId}", 
                      method = RequestMethod.GET, 
                      produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity getPost(@PathVariable("postId") long postId) {
    return new ResponseEntity(postService.getPostById(postId), HttpStatus.OK);
}
```

Now we can access the posts list resources via regular REST call or using JSON API call.

## Testing Controllers

Accessing REST Resource:

```
$ curl -X GET http://localhost:8080/api/1.0/posts/1
```

**Response:** 200 OK

```javascript
{
    "id": 1,
    "title": "Hello World!!",
    "excerpt": "Lorem ipsum dolor sit amet",
    "description": "Lorem ipsum dolor sit amet, ..."
}
```

Accessing REST Resource using JSONP:

```
$ curl -X GET http://localhost:8080/api/1.0/posts/1?callback=postCallback
```

**Response:** 200 OK

```javascript
postCallback({
    "id": 1,
    "title": "Hello World!!",
    "excerpt": "Lorem ipsum dolor sit amet",
    "description": "Lorem ipsum dolor sit amet, ..."
})
```

Notice the difference in the results for both cases. When the resource is accessed using JSONP, the response is returned as JSONP payload as a JavaScript method.

If you want to access it from another domain, we can use it as

```html
<script src="http://localhost:8080/api/1.0/posts/1?callback=postCallback" 
          type="application/javascript"/>
```
