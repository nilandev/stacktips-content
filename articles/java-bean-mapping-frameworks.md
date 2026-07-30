---
id: 25
title: Bean Mapping Frameworks to Convert DTO to Models in Java
slug: java-bean-mapping-frameworks
excerpt: This post lists the options available to convert DTO to a Model, or one Java object to another using mapping frameworks like ModelMapper, MapStruct, and Dozer.
difficulty: intermediate
publishedDate: "2018-09-09T10:55:43.000Z"
updatedDate: "2025-09-16T23:05:21.024Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/articles/22/thumbnail.png
topics: 
  - bootstrap
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Applications often consist of similar but different object models, where the data in two models may be similar but the structure and concerns of the models are different.

For example, if you are creating a Spring Boot API endpoint for adding `Product` data into your DB, it is a best practice to hide your internal DB structure and create a DTO object for the API to pass the JSON payload.

```java
@PostMapping
public Movie createMovie(@RequestBody MovieDto movieDto){

    // Convert movieDto to the movie model
    Movie movie = new Movie();
    movie.setTitle(movieDto.getTitle())
    //So on..

    return repository.save(movie);
}
```

In the above code snippet, the Movie class is a DB model. The data in the DTO object is pretty much a subset of the `Movie` model. Here, in this case, we will have to map every single property of the `MovieDto` object to the `Movie` object before saving it to the Database.

Mapping every single property is cumbersome and time taking.

This is the reason why we need the object mapping framework to convert one model to another seamlessly. There are several Java mapping frameworks available that can help convert one object type to another in Java. Here are some of the popular mapping frameworks.

## Mapping with **Dozer**

Dozer is a Java Bean-to-Bean mapper that recursively copies data from one object to another. Typically, these Java Beans can be of the same or different complex types.

Dozer supports simple property mapping, complex type mapping, bi-directional mapping, implicit-explicit mapping, as well as recursive mapping. This includes mapping collection attributes that also need mapping at the element level.

If you’re using Maven build tools, for using the Dozer framework you need to add the following package dependency

```xml
<dependency>
    <groupid>com.github.dozermapper</groupid>
    <artifactid>dozer-core</artifactid>
    <version>6.4.1</version>
</dependency>
```

If you’re using the Gradle build system, you can include the following package dependency in your `build.gradle` file.

```groovy
compile group: 'com.github.dozermapper', name: 'dozer-core', version: '6.4.1'
```

Check out the Dozer framework documentation [here](http://dozer.sourceforge.net/) for more details.

## Mapping with **MapStruct**

MapStruct is a code generator that greatly simplifies the implementation of mappings between Java bean types based on the annotation approach. It is a Java annotation processor for generating type-safe bean mapping classes.

All you have to do is to define a mapper interface which declares any required mapping methods. During compilation, MapStruct will generate an implementation of this interface.

This implementation uses plain Java method invocations for mapping between source and target objects, i.e. no reflection or similar.

This is probably the simplest and quickest option for writing mapping code. It saves time by generating code which is generally tedious and error-prone to write your own.

**Installing MapStruct**

If you’re using Maven build tools, for using the MapStruct framework you need to add the following package dependency

```xml
<properties>
    <org.mapstruct.version>1.3.0.Beta1</org.mapstruct.version>
</properties>
...

<dependency>
    <groupid>org.mapstruct</groupid>
    <artifactid>mapstruct-processor</artifactid>
    <version>${org.mapstruct.version}</version>
    <scope>provided</scope>
</dependency>
```

Optionally, you can add MapStruct your classpath to annotation processor paths as follows.

```xml
<build>
    <plugins>
        <plugin>
            <groupid>org.apache.maven.plugins</groupid>
            <artifactid>maven-compiler-plugin</artifactid>
            <version>3.5.1</version>
            <configuration>
                <source>1.8
                <target>1.8</target>
                <annotationprocessorpaths>
                    <path>
                        <groupid>org.mapstruct</groupid>
                        <artifactid>mapstruct-processor</artifactid>
                        <version>${org.mapstruct.version}</version>
                    </path>
                </annotationprocessorpaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```

for gradle,

```groovy
...
plugins {
    ...
    id 'net.ltgt.apt' version '0.15'
}

dependencies {
    compile 'org.mapstruct:mapstruct-jdk8:1.2.0.Final'
    apt 'org.mapstruct:mapstruct-processor:1.2.0.Final'
}
...
```

Check out the MapStruct framework documentation [here](http://mapstruct.org/documentation/dev/reference/html/).

## **ModelMapper**

The ModelMapper is a framework aimed at simplifying the Java object mapping, by automatically determining how one object model maps to another, based on conventions.

It analyses your Java object model to intelligently determine how data should be mapped without doing any manual mapping.

The ModelMapper API is type-safe and refactoring-safe, using the actual code, rather than string references, to map properties and values.

**Installing ModelMapper**

If you’re using Maven build tools, for using the ModelMapper framework, you need to add the following package dependency

```xml
<dependency>
    <groupid>org.modelmapper</groupid>
    <artifactid>modelmapper</artifactid>
    <version>2.2.0</version>
</dependency>
```

for gradle,

```groovy
dependencies {
    compile('org.modelmapper:modelmapper:2.2.0')
}
```

Check out the MapStruct framework documentation [here](http://modelmapper.org/).

## **JMapper**

JMapper is a Java bean-to-bean mapper framework based n the Javassist framework. It allows you the ability to do dynamic mappings, multi-relational mappings, inherited mapping and other features without compromising on performance.

The framework allows you to map beans using annotation, XML or API-based configurations.

### **Installing JMapper**

If you’re using Maven build tools, for using the ModelMapper framework, you need to add the following package dependency

```xml
<dependency>
    <groupid>com.googlecode.jmapper-framework</groupid>
    <artifactid>jmapper-core</artifactid>
    <version>1.6.0</version>
</dependency>
```

for gradle,

```groovy
dependencies {
    compile('com.googlecode.jmapper-framework:jmapper-core:1.6.0')
}
```

Check out the JMapper framework documentation [here](https://github.com/jmapper-framework/jmapper-core).
