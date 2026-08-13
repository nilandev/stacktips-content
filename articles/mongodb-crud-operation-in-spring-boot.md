---
id: 346
title: Performing MongoDB CRUD Operation in Spring Boot
slug: mongodb-crud-operation-in-spring-boot
excerpt: This blog explains how to use MongoDB with Java Spring Boot. We will create a simple CRUD API to interact with our Mongo database.
difficulty: beginner
publishedDate: "2023-02-02T20:22:43.000Z"
updatedDate: "2025-09-16T23:05:37.144Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/thumbnail.png
topics: 
  - spring-boot
tags:
  - spring-boot-mongodb-crud
  - mongorepository-example
  - spring-data-mongodb
  - mongodb-spring-boot-tutorial
course: spring-boot-for-beginners
displayOrder: 16
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

MongoDB is a cross-platform document-oriented database program. It is classified as a NoSQL database, which means that it does not use the traditional SQL relational database model. Instead, MongoDB stores data in flexible, JSON-like documents, which can have fields that hold values of different data types.

The key advantages of using MongoDB are:

1.  **Scalability:** MongoDB can be easily scaled horizontally by adding more nodes to a replica set or sharded cluster, which enables it to handle increasing amounts of data and read/write loads.

2.  **Flexibility:** MongoDB's document data model allows you to store data in a flexible, JSON-like format, which makes it easier to change the structure of your data as your application evolves.

3.  **Performance:** MongoDB's use of indexing, sharding, and in-memory storage options can significantly improve the performance of your applications compared to traditional relational databases.

4.  **Easy to use:** MongoDB provides a simple and straightforward API for inserting, updating, and retrieving data, making it easier for developers to work with compared to traditional relational databases.

5.  **High availability:** MongoDB provides built-in high availability features, such as replica sets and auto-electing primary nodes, which can help ensure that your data is always available even in the event of a node failure.

6.  **Agile development:** MongoDB's flexible data model and easy-to-use API can help speed up the development process and reduce the time and effort required to build complex applications.

7.  **Cost-effective:** MongoDB is an open-source software, which means that you can use it for free. Additionally, it's scalable and flexible architecture can help reduce the costs associated with managing and storing data.

Overall, MongoDB is a highly flexible and scalable NoSQL database that provides a number of advantages over traditional relational databases, making it an excellent choice for a wide range of applications and use cases.

## Spring Boot CRUD with MongoDB

Here is an example of a simple Spring Boot application that performs CRUD operations on a MongoDB database:

### Adding MongoDB Spring Boot Dependency

Start by creating a new Spring Boot project and adding the following dependencies to your `**pom.xml**` file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

### MongoDB Connection Properties

In application.properties file add the following properties for mongodb connection

```properties
spring.data.mongodb.uri=mongodb://<host>:<port>/<database>
spring.data.mongodb.username=<username>
spring.data.mongodb.password=<password>
```

### Data Model Class Declaration

Create a model class, for example `**Person**` which will be mapped to a MongoDB collection. This class should have fields that correspond to the fields in the MongoDB document, as well as appropriate getters and setters.

```java
@Document(collection = "people")
public class Person {
    @Id
    private String id;
    private String name;
    private int age;

    //getters and setters
}
```

### Mongo Repository Interface

Create a `**MongoRepository**` interface to perform CRUD operations on the `**Person**` class.

```java
public interface PersonRepository extends MongoRepository<Person, String> {

}
```

### Using Mongo Repository From Services

In your application main class, autowire the `**PersonRepository**` and use it to perform CRUD operations. For example:

```java
@Service
class PersonService {

    @Autowired
    private PersonRepository repository;

    public void addPerson(Person person) {
        repository.save(person);
    }

    public List<Person> getAllPeople() {
        return repository.findAll();
    }
}
```

This is just an example, and you will likely need to add more functionality to your application depending on your specific requirements.

Please note that this is just a starting point and you should consult the official Spring Boot and MongoDB documentation for more information on how to properly implement your application.

## References

Spring Boot MongoDB References – [MongoDB Reference](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#reference)
