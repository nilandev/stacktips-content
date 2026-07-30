---
id: 119
title: How to Customize POJO Initialization and Destruction in Spring Core
slug: how-to-customize-pojo-initialization-and-destruction-in-spring-core
excerpt: Spring POJOs are initialized and managed by Spring IoC Container. Sometimes, you may need perform some initialization code before a POJO is used.
difficulty: beginners
publishedDate: "2015-10-07T22:17:33.000Z"
updatedDate: "2025-09-16T23:05:25.894Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/153/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring POJOs are initialized and managed by Spring IoC Container. Sometimes, you may need perform some initialization code before a POJO is used. A typical example is to open a database or network connection. Similarly you may want to perform the corresponding destruction tasks at the end of their life cycle. Therefore, sometimes it is necessary to customize bean initialization and destruction in the Spring IoC container.

The POJO life cycle tasks can be created using callback methods. A typical life cycle of a bean can be explained as follows:

1.  Create the bean instance either by a constructor injection or by a factory method.
2.  Set the values and bean references to the bean properties.
3.  Call the bean initialization callback methods.
4.  The bean is ready to be used.
5.  When the container is shut down, call the bean destruction callback methods are called.

Spring initialization and destruction callback methods can be configured by setting the values for `init-method` and `destroy-method` attributes in the bean declaration. You need to specify the callback method names as follows.

Notice that in the above code snippet, we have specified `onStart` and `onDestroy` callback methods to control POJO initialization and destruction. Here is how, you can configure the callback methods to your POJO class.

```java
public class Pizza {
    private String name;
    private double price;

    public Pizza() { }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void onStart() throws IOException {
        System.out.println("Inside onStart");
    }

    public void onDestroy() throws IOException {
        System.out.println("Inside onDestroy");
    }
}
```
