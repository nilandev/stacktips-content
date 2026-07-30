---
id: 347
title: How to Connect to Multiple Mongo Databases in SpringBoot
slug: how-to-connect-to-multiple-mongo-databases-in-springboot
excerpt: Step-by-Step Guide to the necessary configurations required for connecting Multiple MongoDB from Spring Boot application.
difficulty: advance
publishedDate: "2023-03-03T12:15:07.000Z"
updatedDate: "2025-09-16T23:05:37.198Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/multiple-mongo-databases"
featured: false
thumbnail: /media/posts/how-to-connect-to-multiple-mongo-databases-in-springboot.jpeg
topics: 
  - mongodb
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this tutorial, we will discuss how to connect two different MongoDB databases from your Spring boot application. This article assumes you already have MongoDB integrated into your project, hence this post skips the basics.

To connect to multiple MongoDB databases, we need to use `MongoClientFactoryBean` to create multiple `MongoClient` instances that connects to two different databases.

First let us add two set of MongoDB connection properties to your `application.properties` file corresponding to each DB.

```properties
# Primary MongoDB configs
spring.data.mongodb.primary.host=localhost
spring.data.mongodb.primary.port=27017
spring.data.mongodb.primary.username=root
spring.data.mongodb.primary.password=admin
spring.data.mongodb.primary.database=movies_db
spring.data.mongodb.primary.authentication-database=admin

# Secondary MongoDB configs
spring.data.mongodb.secondary.host=localhost
spring.data.mongodb.secondary.port=27018
spring.data.mongodb.secondary.username=root
spring.data.mongodb.secondary.password=admin
spring.data.mongodb.secondary.database=movies_db2
spring.data.mongodb.secondary.authentication-database=admin
```

### MongoDB Config

Next, we will bind these configuration properties property to the `MongoProperties` object using the `@ConfigurationProperties` annotation.

And then, we will use these properties to create a `MongoClient` bean. The `MongoClient` is the entry point to the MongoDB driver API.

We then have to register a `MongoClient` via `MongoDatabaseFactory`. The `MongoDatabaseFactory` is used to bootstrap the connectivity to the database. Finally we can use the `MongoDatabaseFactory` instance to configure the `MongoTemplate` .

The `MongoTemplate` will be used for performing all Mongo DB CRUD operations including BSON queries or updates.

**Primary MongoDB Config:**

```java
@Configuration
@EnableMongoRepositories(basePackages = "com.stacktips.app.repository.primary",
        mongoTemplateRef = "primaryMongoTemplate")
public class PrimaryMongoConfig {

    @Primary
    @Bean("primaryMongoProperties")
    @ConfigurationProperties(prefix = "spring.data.mongodb.primary")
    public MongoProperties primaryMongoProperties() {
        return new MongoProperties();
    }

    @Primary
    @Bean(name = "primaryMongoClient")
    public MongoClient primaryMongoClient(@Qualifier("primaryMongoProperties") MongoProperties mongoProperties) {

        ServerAddress serverAddress = new ServerAddress(mongoProperties.getHost(), mongoProperties.getPort());
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyToClusterSettings(builder ->
                        builder.hosts(List.of(serverAddress)))
                .credential(MongoCredential.createCredential(
                        mongoProperties.getUsername(),
                        mongoProperties.getAuthenticationDatabase(),
                        mongoProperties.getPassword()))
                .build();
        return MongoClients.create(settings);
    }

    @Primary
    @Bean(name = "primaryMongoFactory")
    public MongoDatabaseFactory mongoDatabaseFactory(
            @Qualifier("primaryMongoClient") MongoClient mongoClient,
            @Qualifier("primaryMongoProperties") MongoProperties mongoProperties) {
        return new SimpleMongoClientDatabaseFactory(mongoClient, mongoProperties.getDatabase());
    }

    @Primary
    @Bean(name = "primaryMongoTemplate")
    public MongoTemplate mongoTemplate(
            @Qualifier("primaryMongoFactory") MongoDatabaseFactory mongoDatabaseFactory) {
        return new MongoTemplate(mongoDatabaseFactory);
    }
}
```

**Important Notes:**

-   The `@EnableMongoRepositories` is the key here. This will scan all mongo repository from specific package as defined. All repositories that will be used to
-   The `mongoTemplateRef` is used to configure the name of the `MongoTemplate` bean to be used with the repositories detected.
-   The `@Primary` annotation indicates that the a bean should be given preference when multiple candidates are qualified to autowire a single-valued dependency. If exactly one 'primary' bean exists among the candidates, it will be the autowired value.

**Secondary MongoDB Config:**

The secondary mongo db config is similar to the primary, except for the `@Primary` annotation and it will read properties with `spring.data.mongodb.secondary` prefix.

```java
@Configuration
@EnableMongoRepositories(basePackages = "com.stacktips.app.repository.secondary",
        mongoTemplateRef = "secondaryMongoTemplate")
public class SecondaryMongoConfig {

    @Bean("secondaryMongoProperties")
    @ConfigurationProperties(prefix = "spring.data.mongodb.secondary")
    public MongoProperties secondaryMongoProperties() {
        return new MongoProperties();
    }

    @Bean(name = "secondaryMongoClient")
    public MongoClient secondaryMongoClient(
            @Qualifier("secondaryMongoProperties") MongoProperties mongoProperties) {

        ServerAddress serverAddress = new ServerAddress(mongoProperties.getHost(), mongoProperties.getPort());
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyToClusterSettings(builder -> builder.hosts(List.of(serverAddress)))
                .credential(MongoCredential.createCredential(
                        mongoProperties.getUsername(),
                        mongoProperties.getAuthenticationDatabase(),
                        mongoProperties.getPassword()))
                .build();
        return MongoClients.create(settings);
    }

    @Bean(name = "secondaryMongoFactory")
    public MongoDatabaseFactory mongoDatabaseFactory(
            @Qualifier("secondaryMongoClient") MongoClient mongoClient,
            @Qualifier("secondaryMongoProperties") MongoProperties mongoProperties) {
        return new SimpleMongoClientDatabaseFactory(mongoClient, mongoProperties.getDatabase());
    }

    @Bean(name = "secondaryMongoTemplate")
    public MongoTemplate mongoTemplate(
            @Qualifier("secondaryMongoFactory") MongoDatabaseFactory mongoDatabaseFactory) {
        return new MongoTemplate(mongoDatabaseFactory);
    }
}
```

In the above example, we're defining two `MongoTemplate` beans, one for each database. We're passing in the `MongoClient` instances created by the `MongoClientFactoryBean` beans, along with the corresponding database name from the `MongoProperties` beans.

### Mongo Repositories

In this example, we will created a two repositories to perform CRUD operation. Note that they reside in two different packages, i.e. `com.stacktips.app.repository.primary` and `com.stacktips.app.repository.secondary`.

Here we are using extending `MongoRepository` to perform the CRUD operations, but the same will work for custom repository that uses `MongoTemplate`.

```java
package com.stacktips.app.repository.primary;

import com.stacktips.app.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrimaryMovieRepository extends MongoRepository<Movie, String> {

}
```

Secondary Mongo Repository:

```java
package com.stacktips.app.repository.secondary;

import com.stacktips.app.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecondaryMovieRepository extends MongoRepository<Movie, String> {

}
```

No that we have everything, let us now inject these repositories into our service:

```java
@Service
public class MovieService {

    private final PrimaryMovieRepository primaryMovieRepository;
    private final SecondaryMovieRepository secondaryMovieRepository;

    public MovieService(
            PrimaryMovieRepository primaryMovieRepository,
            SecondaryMovieRepository secondaryMovieRepository) {
        this.primaryMovieRepository = primaryMovieRepository;
        this.secondaryMovieRepository = secondaryMovieRepository;
    }

    public Movie savePrimary(Movie movie) {
        return primaryMovieRepository.save(movie);
    }

    public List<Movie> findAllPrimary() {
        return primaryMovieRepository.findAll();
    }

    public Movie saveSecondary(Movie movie) {
        return secondaryMovieRepository.save(movie);
    }

    public List<Movie> findAllSecondary() {
        return secondaryMovieRepository.findAll();
    }
}
```

That's it! With the above configuration, you should be able to connect to multiple MongoDB Databases from your Spring Boot application.

For complete project source code checkout of the download link.
