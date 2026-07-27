---
id: 433
title: Testing Spring Boot Repository Using MongoDB Testcontainers
slug: testing-spring-boot-repository-using-mongodb-testcontainers
excerpt: In this article, we will use MongoDB Testcontainers to test spring boot Repository that uses MongoTemplate to search data from DB.
difficulty: beginner
publishedDate: "2024-03-10T00:36:15.000Z"
updatedDate: "2025-09-16T23:05:41.244Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/testing-spring-boot-mongodb-testcontainer"
featured: true
thumbnail: /media/posts/testing-spring-boot-repository-using-mongodb-testcontainers.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Testcontainers are the lightweight, throwaway container instances, used for common test cases like testing against a database, ActiveMQ or anything else that can run in a Docker container.

Testcontainers allows you to run your tests against a real instance of your application's dependencies, such as a real database, rather than against a mock or an in-memory database. We can configure the Testcontainers to closely mimic the production environment by using the specific versions of your your dependencies and pre-load with test data .

It spins up a new container instance for each tests, hence every tests are completely isolated from each other.

For running tests using the Testcontainers, we need to have the docker is up and running, no other dependencies are required.

Let us see the following Repository,

We have defined a `searchMovies()` method that uses `MongoTemplate` to perform search by different search criteria's.

```java
@Repository  
public class MovieRepository {  

    private final MongoTemplate mongoTemplate;  

    public MovieRepository(MongoTemplate mongoTemplate) {  
        this.mongoTemplate = mongoTemplate;  
    }  

    public List<Movie> searchMovies(SearchRequest searchRequest) {  
        Query query = new Query();  
        if (null != searchRequest.rating()) {  
            query.addCriteria(Criteria.where("rating")
                .is(searchRequest.rating()));  
        }  

        if (null != searchRequest.language()) {  
            query.addCriteria(Criteria.where("language")
                .is(searchRequest.language()));  
        }  

        if (null != searchRequest.genre()) {  
            query.addCriteria(Criteria.where("genres")
                .is(searchRequest.genre()));  
        }  

        return mongoTemplate.find(query, Movie.class);  
    }  
}
```

## Add Testcontainers Dependency

Before we begin, we need to ensure we have the necessary test container dependency added to your `pom.xml` or `build.gradle` file.

```groovy
testImplementation 'org.springframework.boot:spring-boot-testcontainers'  
testImplementation "org.testcontainers:junit-jupiter:1.19.6"  
testImplementation "org.testcontainers:mongodb:1.19.6"
```

## Configure Testcontainer

Create a test configuration class that starts a MongoDB container. This will be used for testing our Repository that uses `MongoTemplate` for performing MongoDB operations.

```java
@Testcontainers
@DataMongoTest(includeFilters = @ComponentScan.Filter(Repository.class))
class MovieRepositoryTest {

    @Autowired  
    MovieRepository repository;
    @Autowired  
    MongoTemplate mongoTemplate;

    @Container  
    static final MongoDBContainer mongoDbContainer = new MongoDBContainer("mongo:latest")
            .withExposedPorts(27017);

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.data.mongodb.host", mongoDbContainer::getHost);
        registry.add("spring.data.mongodb.port", mongoDbContainer::getFirstMappedPort);
        registry.add("spring.data.mongodb.username", () -> "test_user");
        registry.add("spring.data.mongodb.password", () -> "test_password");
        registry.add("spring.data.mongodb.database", () -> "movies_db");
        registry.add("spring.data.mongodb.uri", mongoDbContainer::getReplicaSetUrl);
    }

    static {
        mongoDbContainer.start();
    } 
}
```

## Preload MongoDB Testcontainer with Test Data

We can preload the MongoDB Testcontainer with test data. To do that we need to create an initialization script in `/test/resources` directory. Lets call it `init-schema.js`.

**init-schema.js**

```javascript
db = db.getSiblingDB('movies_db');  

db.movies.insertMany([  
    {  
        "title": "Iron Man & Captain America: Heroes United",  
        "headline": "Iron Man (Adrian Pasdar) and Captain America ...",  
        "thumbnail": "https://flxt.tmsimg.com/assets/p10906420_v_h9_aa.jpg",  
        "language": "EN",  
        "region": "USA",  
        "actors": [  
            "David Kaye",  
            "Ian McKellen",  
            "Adrian Pasdar"  
        ],  
        "genre": "Adventure",  
        "rating": "G",  
    },  
    {  
        "title": "Transformers: Rise of the Beasts",  
        "headline": "Transformers: Rise of the Beasts will take audiences on a",  
        "thumbnail": "https://flxt.tmsimg.com/assets/p20201199_v_h9_am.jpg",  
        "language": "EN",
        "region": "USA",
        "actors": [
            "David Kaye",
            "Ian McKellen",
            "Adrian Pasdar"
        ],
        "genres": "Action",
        "rating": "G"
    },    
]);
```

For `init-schema.js` to work, we need to use `withCopyFileToContainer()` method. The `withCopyFileToContainer()` method allows moving the initialization script to a location inside the container.

```java
@Container  
static final MongoDBContainer mongoDbContainer = new MongoDBContainer("mongo:latest")  
        .withExposedPorts(27017)  
        .withCopyFileToContainer(MountableFile.forClasspathResource("./init-schema.js"),  
                "/docker-entrypoint-initdb.d/init-script.js");
```

## Testing Repository using Testcontainer

Now that we have setup the test container and our initialization script is ready, let us now use the Testcontainer instance to write some unit tests.

Here is how our `MovieRepositoryTest` class look like:

```java
import com.stacktips.movies.dto.SearchRequest;
import com.stacktips.movies.models.ContentRating;
import com.stacktips.movies.models.Movie;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.core.MongoTemplate; 
import org.springframework.stereotype.Repository;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.MountableFile;

import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

@Testcontainers
@DataMongoTest(includeFilters = @ComponentScan.Filter(Repository.class))
class MovieRepositoryTest {

    @Autowired  
    MovieRepository repository;
    @Autowired  
    MongoTemplate mongoTemplate;

    @Container  
    static final MongoDBContainer mongoDbContainer = new MongoDBContainer("mongo:latest")
            .withExposedPorts(27017)
            .withCopyFileToContainer(MountableFile.forClasspathResource("./init-schema.js"),
                    "/docker-entrypoint-initdb.d/init-script.js");

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.data.mongodb.host", mongoDbContainer::getHost);
        registry.add("spring.data.mongodb.port", mongoDbContainer::getFirstMappedPort);
        registry.add("spring.data.mongodb.username", () -> "test_user");
        registry.add("spring.data.mongodb.password", () -> "test_password");
        registry.add("spring.data.mongodb.database", () -> "movies_db");
        registry.add("spring.data.mongodb.uri", mongoDbContainer::getReplicaSetUrl);
    }

    static {
        mongoDbContainer.start();
    }

    @Test  
    void testMoviesCount() {
        List<Movie> movies = mongoTemplate.findAll(Movie.class);
        assertThat(4, is(movies.size()));
    }

    @Test  
    void testSearchMovies() {  
        SearchRequest searchRequest = new SearchRequest(ContentRating.G, "EN", "Action");
        List<Movie> movies = repository.searchMovies(searchRequest);
        assertThat(2, is(movies.size()));
        assertThat(movies.get(0).title(), is("Transformers: Rise of the Beasts"));
        assertThat(movies.get(0).language(), is("EN"));
        assertThat(movies.get(0).region(), is("USA")); 
        assertThat(movies.get(0).rating(), is(ContentRating.valueOf("G")));
    }
}
```

For the complete project source code check out the download link.

If you have any questions, write down in the comment section below. Will be happy to respond, soon as I can.
