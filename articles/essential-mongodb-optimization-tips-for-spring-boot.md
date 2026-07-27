---
id: 461
title: Essential MongoDB Optimization Tips for Spring Boot Application
slug: essential-mongodb-optimization-tips-for-spring-boot
excerpt: This article delves into some key optimisation techniques and considerations to improve the overall application performance when dealing with MongoDB from Spring Boot.
difficulty: advance
publishedDate: "2024-07-28T00:04:02.000Z"
updatedDate: "2025-09-16T23:05:42.105Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/post/690_Essential_MongoDB_Optimization_Tips_for_Spring_Boot_Application-min.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this article, we will delve into some key optimisation techniques and considerations to improve the overall application performance when dealing with MongoDB from Spring Boot.

Let's dive in!

## 1\. Indexing MongoDB Collections

If your collection is not indexed, your queries will scan through the entire collection. Querying data with an index is much faster than scanning from the entire collection.

By default, MongoDB includes a `_id` property in every document inside the collection and it is indexed. If you're using a custom ID field, then you need to ensure they are efficiently indexable.

There are several types of indexes supported in MongoDB. You can create a simple index on a field inside the collection or define more complex ones; using Compound index, Partial index and TTL indexes.

You can choose the type of indexes to use based on your query pattern.

### Creating an Index

The Spring Data MongoDB (`spring-data-mongodb`) dependency provides several convenient options for creating an index.

The easiest way to create an index is to use the `@Indexed` annotation. All you need to do is to use `@Indexed` annotation on the field within your model class. You can also set the `expireAfterSeconds` attribute to `@Indexed` annotation for creating a TTL index.

Let us look into the `Product` model, the field `productId` is indexed with a TTL value set to 1 minute.

```java
@Document(collection = "products")  
public class Product {
    @Indexed(name = "productId_index", expireAfterSeconds=3600)
    String productId;
    String name;
    String category;
    String brand;
    BigDecimal offerPrice;
    BigDecimal price;
}
```

### Compound Indexes

The indexes are great, but what if your query searches based on multiple fields inside a collection? That is when you will use compound indexes.

A compound index can be created using `@CompoundIndex` annotation by passing the index definition in a JSON format. This annotation is applied at the class level and can be repeatable.

Note that, a compound index can have a maximum of 32 fields.

The following example creates a compound index named `product_brand_index` using the `productId` and `brand` field.

```java
@CompoundIndex(name = "product_brand_index", 
               def = "{'productId': 1, 'brand': 1}")
public class Product {  
    @Indexed
    String productId;
    String name;
    String category;
    String brand;
    BigDecimal offerPrice;
    BigDecimal price;
}
```

### Partial Index

Partial indexes are like regular indexes but they only include documents in a collection that meet a specific filter criteria. Because it only indexes a subset of data in a collection, it is more efficient as compared to basic and compound indexes.

The Spring Data MongoDB does not support creating partial indexes via the annotations but it is possible programmatically.

_Note_

It is recommended to start the index creation on Spring application startup, specifically after the application context is refreshed. You can use the Spring lifecycle events to guarantee that the context is fully initialized before you create indexes.

The following example creates a partial index named `apple_products_index` inside the `products` collection only for documents which contain `brand=apple`.

```java
@Component  
class AppEventListener {  

    @Autowired  
    private MongoTemplate mongoTemplate;  

    @EventListener(ContextRefreshedEvent.class)  
    public void initIndicesAfterStartup() {  
        Index myIndex = new Index()  
                .background()  
                .unique()  
                .named("apple_products_index")  
                .on("productId", Sort.Direction.ASC)  
                .on("price", Sort.Direction.DESC)  
                .partial(PartialIndexFilter.of(Criteria.where("brand")  
                        .is("apple")));  

        DefaultIndexOperations indexOperations = new DefaultIndexOperations(mongoTemplate,  
                "products", Product.class);  
        indexOperations.ensureIndex(myIndex);  
    }  
};
```

### FAQs

**How many indexes can we create?** As indexes largely live in memory, ensure that your indexes fit entirely in RAM. If you're going overboard, MongoDB will attempt to read the index from the disk, which has an adverse effect and slow down your queries.

A single MongoDB collection can have a maximum of 64 indexes.

## 2\. Manage Connection Pool

Incorrectly configured connection pools can either lead to a shortage of database connections under load or waste resources. Increasing the client connection pool size based on availability can improve performance when you have high concurrency usage on your database.

By default spring data MongoDB sets the max pool size to 100. But this can be changed by setting the `maxPoolSize=500` parameter to your connection URI.

```yaml
spring:  
  data:  
    mongodb:  
      uri: mongodb://user:password@localhost:27017/product_db?ssl=true&maxPoolSize=500&replicaSet=rs0&authSource=admin
```

I highly recommend reading this excellent post by [Brian Shen](https://medium.com/@houwei.shen/how-poolsize-can-impact-mongodb-backed-apps-cee83d481b1f), where he explains how pool size can impact the performance of MongoDB-backed applications.

## 3\. Query Large Dataset

Retrieving a large number of documents in a single operation can significantly increase the load on the MongoDB server. Instead, you can use paginated queries to fetch the data in chunks.

For example, the following code snippet uses the paginated query instead of fetching all data at once.

```java
Pageable pageable = PageRequest.of(page, size);  
Query query = new Query().with(pageable);  
List<Product> products= mongoTemplate.find(query, Product.class);
```

## 4\. Inefficient Schema Design

Unlike relational databases, MongoDB is schema-less and it is not required to design your schema upfront.

Although it is not mandatory, having a database schema upfront, helps to ensure that the data stored in the database follows a specific structure. A well-designed schema can significantly enhance performance and data consistency.

While designing your database schema, consider your data access patterns and aspects like sharding and indexing to ensure the database performs well as it scales.

For example, embedding documents can reduce the number of database roundtrips, but it can be overhead if your document size is huge.

Consider reading some of the established schema design patterns [here](https://www.mongodb.com/docs/atlas/performance-advisor/schema-suggestions/)

## 5\. Use Appropriate Write Concerns and Read Preferences

If you're using distributed database systems, then consistency, availability, and durability of data is very important. This is where **Write Concerns** and **Read Preferences** come into play.

### Write Concerns

Write Concerns deals with the level of acknowledgement requested from MongoDB for performing the write operations.

By default, MongoDB acknowledges all write operations. Meaning, it ensures the data is written into all replica sets before the operation is considered successful. This can be overridden using the `setDefaultRWConcern` administrative command globally during cluster setup.

The default write concern used in Java Mongo driver is to **acknowledge** all write operations. But, you can override this behaviour from your application using the `setWriteConcern()` method on `MongoTemplate`.

```java
MongoTemplate template = new MongoTemplate(factory, converter);  
template.setWriteConcern(WriteConcern.ACKNOWLEDGED);
```

The above configuration alters the behaviour globally across all repositories.

Alternatively, you can configure it per-operation basis using `WriteConcernResolver` bean.

```java
@Sl4j
@Configuration
public class MongoConfiguration {

    @Bean  
    public WriteConcernResolver writeConcernResolver() {  
        return action -> {  
            String entityName = action.getEntityType().getSimpleName();  
            if (entityName.contains("Product")) {  
                return WriteConcern.ACKNOWLEDGED;  
            } else if (entityName.contains("Metadata")) {  
                return WriteConcern.JOURNALED;  
            }  
            return action.getDefaultWriteConcern();  

        };  
    }

}
```

**References:**

-   [https://mongodb.github.io/mongo-java-driver/4.2/apidocs/mongodb-driver-core/com/mongodb/WriteConcern.html](https://mongodb.github.io/mongo-java-driver/4.2/apidocs/mongodb-driver-core/com/mongodb/WriteConcern.html)
-   [https://www.mongodb.com/docs/manual/reference/mongodb-defaults/](https://www.mongodb.com/docs/manual/reference/mongodb-defaults/)
-   [https://mongodb.github.io/mongo-java-driver/4.2/apidocs/mongodb-driver-core/com/mongodb/WriteConcern.html](https://mongodb.github.io/mongo-java-driver/4.2/apidocs/mongodb-driver-core/com/mongodb/WriteConcern.html)

### Read Preference

Read Preferences configuration is used to determine how MongoDB directs read operations to the members of a replica set. It allows clients to control whether they prefer to read from the primary node or a secondary node based on latency.

It helps to balance the load and optimize read performance across a distributed database system.

The **Read Preferences** can be configured globally using `MongoClientSettingsBuilderCustomizer` bean.

```java
@Bean
public MongoClientSettingsBuilderCustomizer monoClientCustomizer() {
    return builder -> builder.readPreference(ReadPreference.nearest());
}
```

We can also set the read preference per operation using:

```java
mongoTemplate.getCollection("product_collection")  
        .withReadPreference(ReadPreference.nearest())  
        .find();
```

References: https://www.javadoc.io/doc/org.mongodb/mongo-java-driver/latest/com/mongodb/ReadPreference.html

## 6\. Optimise Large Payloads using Projections

If your database contains collections with large documents then retrieving large documents without projection can lead to high network latency and increase load on the MongoDB server.

It is a good practice to use projections and limit the result by pulling only the required fields. This can reduce the amount of data transferred over the network.

In Spring Data MongoDB, you can use the `fields()` method to include and exclude fields in your response. For example, the following query pulls only productId and name Product collection.

```java
Query query = new Query();
query.fields().include("productId").include("name");
return mongoTemplate.find(query, Product.class);
```

## 7\. Leverage Application Level Caching

Caching helps to speed up data access and improve overall application performance by reducing the need for frequent access to DB. Caching strategy can be implemented at different levels to meet your performance goals.

-   Caching at the client side (browser)
-   Caching at the web server layer
-   Caching application-level data
-   CDN Caching
-   Database caching

Implement application-level data using caching to avoid unnecessary database reads. Read [official documentation](https://docs.spring.io/spring-boot/reference/io/caching.html) to implement caching within your Spring Boot application.

## 8\. Use Aggregations

For complex data processing, MongoDB's aggregation framework is more efficient than multiple queries and processing data on the application side.

Aggregations can be used for processing and transforming documents within a collection. It uses a pipeline approach, where documents pass through a series of stages that perform operations such as filtering, grouping, and transforming data.

Spring Data MongoDB provides support for the aggregation framework through the Aggregation class.

Let's say you have a list of products, prices and sales data stored in different collections and you want to generate a report that calculates the total sales made last month for each product. This can be written using aggregations as follows;

```java
public List<TotalSales> calculateLastMonthSales() {  
    MatchOperation matchStage = Aggregation.match(Criteria.where("date")  
            .gte(getLastMonthStartDate())  
            .lte(new Date()));  

    LookupOperation lookupProduct = Aggregation.lookup(  
            "Product", "productId", "_id", "product");  
    LookupOperation lookupPrice = Aggregation.lookup(  
            "Price", "productId", "_id", "price");  
    UnwindOperation unwindProduct = Aggregation.unwind("product");  
    UnwindOperation unwindPrice = Aggregation.unwind("price");  

    GroupOperation groupStage = Aggregation.group("product.name")  
            .sum(ArithmeticOperators.Multiply.valueOf("quantity")  
                    .multiplyBy("price.price"))  
            .as("totalSales");  

    ProjectionOperation projectStage = Aggregation.project()  
            .andExpression("_id").as("productName")  
            .andExpression("totalSales").as("totalSales")  
            .andExclude("_id");  

    Aggregation aggregation = Aggregation.newAggregation(matchStage,  
            lookupProduct,  
            unwindProduct,  
            lookupPrice,  
            unwindPrice,  
            groupStage,  
            projectStage);  
    AggregationResults<TotalSales> results = mongoTemplate.aggregate(  
            aggregation, "Sales", TotalSales.class);  
    return results.getMappedResults();  
}
```

**References:**

https://medium.com/mongodb-performance-tuning/explaining-aggregation-pipelines-2d1edd46a341

## 9\. Leverage Bulk Operations

Bulk operations allow you to batch multiple operations (insert, update or delete) in a single request. It results in fewer network roundtrips and performs significantly faster.

MongoDB bulk operations are not atomic by default. However, it can be integrated with Spring's transaction management capabilities to ensure consistency across multiple operations.

The following example demonstrates inserting multiple records using bulk operation.

```java
@Component  
@RequiredArgsConstructor  
public class DataLoader implements CommandLineRunner {  

    private static final String FILE_PATH = "src/main/resources/products.csv";  

    private final MongoTemplate mongoTemplate;  

    @Override  
    public void run(String... args) throws Exception {  
        List<Product> products = parseCsv(FILE_PATH, Product.class)  
                .stream()  
                .map(row -> new Product(row.getId(), row.getName(), row.getBrand()))  
                .toList();  

        mongoTemplate.bulkOps(BulkOperations.BulkMode.ORDERED, Product.class)  
                .insert(products)  
                .execute();  
    }  

    public static <T> List<T> parseCsv(String filePath, Class<T> type) throws IOException {  
        try (Reader reader = new FileReader(filePath)) {  
            return new CsvToBeanBuilder<T>(reader).withType(type).build().parse();  
        }  
    }  
}
```

## 10\. Use Capped Collections when Applicable

Capped collections are fixed-size collections that maintain insertion order and automatically remove the oldest documents when the collection reaches its maximum size.

You're not allowed to perform delete documents from a capped collection. If you want to delete all documents, you can drop the whole collection.

Capped collection can be useful if you want to create a real-time logging system that maintains a rolling log of the most recent user activities.

```java
mongoTemplate.createCollection(LogEntry.class,  
        CollectionOptions.empty().capped()  
                .size(MAX_SIZE)  
                .maxDocuments(MAX_DOCUMENTS));
```
