---
id: 437
title: Using Flyway for Database Migration in Spring Boot
slug: using-flyway-for-database-migration-in-spring-boot
excerpt: "A step-by-step guide to configure and use flyway for managing database migrations in spring boot application. This example uses Springboot3, MySQL8 & JPA."
difficulty: intermediate
publishedDate: "2024-03-28T20:54:24.000Z"
updatedDate: "2025-09-16T23:05:41.370Z"
videoLink: "3ts61KR6v5g"
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-jpa-flyway"
featured: true
thumbnail: /media/post/666_using-flyway-for-database-migration-in-springboot.png
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Flyway is a popular open-source tool for managing database migrations. It makes it easy to manage and version control the database schema for your application.

Flyway supports almost all popular databases including Oracle, SQL Server, DB2, MySQL, Amazon RDS, Aurora MySQL, MariaDB, PostgreSQL and more. For the full list of supported databases, you can check the [official documentation](https://documentation.red-gate.com/fd/supported-databases-184127454.html) here.

## How Flyway Migrations Works

Any changes to the database are called migrations. Flyway supports two types of migrations; **versioned** or **repeatable** migrations.

-   **Versioned migrations** Versioned migrations are the most common type of migration, they are applied once in the order they appear. Versioned migrations are used for creating, altering, and dropping tables, indexes or foreign keys.
    
    Versioned migration files uses naming convention using `[Prefix][Separator][Migration Description][Suffix]` for example, `V1__add_user_table.sql` and `V2__alter_user_table.sql`
    
-   **Repeatable migration** Repeatable migrations on the other hand are (re-)applied every time they change. Repeatable migrations are useful for managing views, stored procedures, or bulk reference data updates where the latest version should replace the previous one without considering versioning.
    
    Repeatable migrations are always applied last after all pending versioned migrations are been executed. Repeatable migration files use naming convention such as `R__add_new_table.sql`
    

The migration schemas can be written in either SQL or Java.

When we start the application to an empty database, Flyway will first create a schema history table (`flyway_schema_history`) table. This table IS used to track the state of the database.

After the `flyway_schema_history` table is created, it will scan the classpath for the migration files. The migrations are then **sorted** based on their **version number** and applied in order.

As each migration gets applied, the schema history table is updated accordingly.

## Integrating Flyway in Spring Boot

In this tutorial, we will create a Spring Boot application to deal with MySQL8 database migration using Flyway. This example uses Java 17, Spring Boot 3.2.4 and MySQL 8.0.26. For the database operation, we will use Spring boot JPA.

### Install Flyway Dependencies

First, add the following dependencies to your `pom.xml` or your `build.gradle` file.

-   The `spring-boot-starter-data-jpa` dependency is used for using Spring Data Java Persistence API (JPA) with Hibernate.
-   The `mysql-connector-j` is the official JDBC driver for MySQL databases. It allows your Java application to connect to a MySQL database for operations such as creating, reading, updating, and deleting records.
-   The `flyway-core` dependency is essential for integrating Flyway into your project, enabling migrations and version control for your database schema.
-   The `flyway-mysql` dependency adds the Flyway support for MySQL databases. It provides MySQL-specific functionality and optimisations for Flyway operations. It's necessary when your application uses Flyway for managing database migrations on a MySQL database.

**pom.xml**

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>

    <dependency>
        <groupId>org.flywaydb</groupId>
        <artifactId>flyway-core</artifactId>
    </dependency>
    <dependency>
        <groupId>org.flywaydb</groupId>
        <artifactId>flyway-mysql</artifactId>
    </dependency>
    <!-- Other dependencies-->
</dependencies>
```

### Configure the Database Connection

Now let us provide the database connection properties in your `application.properties` file.

```properties
# DB properties
spring.datasource.url=jdbc:mysql://localhost:3306/flyway_demo
spring.datasource.username=root
spring.datasource.password=Passw0rd
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

#JPA
spring.jpa.show-sql=true
```

### Create Database Changelog Files

Let us now create a couple of database migration schema files inside the `resources/db/migrations` directory.

**V1\_\_add\_movies\_table**

```sql
CREATE TABLE movie
(
    id        bigint NOT NULL AUTO_INCREMENT,
    title     varchar(255) DEFAULT NULL,
    headline  varchar(255) DEFAULT NULL,
    language  varchar(255) DEFAULT NULL,
    region    varchar(255) DEFAULT NULL,
    thumbnail varchar(255) DEFAULT NULL,
    rating    enum('G','PG','PG13','R','NC17') DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;
```

**V2\_\_add\_actor\_table.sql**

```sql
CREATE TABLE actor
(
    id         bigint NOT NULL AUTO_INCREMENT,
    first_name varchar(255) DEFAULT NULL,
    last_name  varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;
```

**V3\_\_add\_movie\_actor\_relations.sql**

```sql
CREATE TABLE movie_actors
(
    actors_id bigint NOT NULL,
    movie_id  bigint NOT NULL,
    PRIMARY KEY (actors_id, movie_id),
    KEY       fk_ref_movie (movie_id),
    CONSTRAINT fk_ref_movie FOREIGN KEY (movie_id) REFERENCES movie (id),
    CONSTRAINT fl_ref_actor FOREIGN KEY (actors_id) REFERENCES actor (id)
) ENGINE=InnoDB;
```

**R\_\_create\_or\_replace\_movie\_view.sql**

```sql
CREATE OR REPLACE VIEW movie_view AS
SELECT id, title
FROM movie;
```

**V4\_\_insert\_test\_data.sql**

```sql
INSERT INTO movie (title, headline, language, region, thumbnail, rating)
VALUES ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology.', 'English',
        'USA', 'inception.jpg', 'PG13'),
       ('The Godfather',
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        'English', 'USA', 'godfather.jpg', 'R'),
       ('Parasite',
        'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.',
        'Korean', 'South Korea', 'parasite.jpg', 'R'),
       ('Amélie',
        'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',
        'French', 'France', 'amelie.jpg', 'R');

-- Inserting data into the 'actor' table
INSERT INTO actor (first_name, last_name)
VALUES ('Leonardo', 'DiCaprio'),
       ('Al', 'Pacino'),
       ('Song', 'Kang-ho'),
       ('Audrey', 'Tautou');

-- Leonardo DiCaprio in Inception
INSERT INTO movie_actors (actors_id, movie_id)
VALUES (1, 1);

-- Al Pacino in The Godfather
INSERT INTO movie_actors (actors_id, movie_id)
VALUES (2, 2);

-- Song Kang-ho in Parasite
INSERT INTO movie_actors (actors_id, movie_id)
VALUES (3, 3);

-- Audrey Tautou in Amélie
INSERT INTO movie_actors (actors_id, movie_id)
VALUES (4, 4);
```

These tables are mapped to the following entity classes.

**Movie.java**

```java
@Entity
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String headline;
    private String thumbnail;
    private String language;
    private String region;
    @Enumerated(EnumType.STRING)
    private ContentRating rating;

    @ManyToMany
    Set<Actor> actors;
}

public enum ContentRating {
    G,
    PG,
    PG13,
    R,
    NC17
}
```

**Actor.java**

```java
@Entity
@Data
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String firstName;
    String lastName;
}
```

### Configure Flyway

We can control the migration process using the following properties in `application.properties` file:

**application.properties**

```properties
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migrations
spring.flyway.baseline-on-migrate=true
spring.flyway.validate-on-migrate=true
```

| Property | Use |
| --- | --- |
| spring.flyway.enabled=true | Enables or disables Flyway's migration functionality for your application |
| spring.flyway.validate-on-migrate=true | When this property is set to true, Flyway will validate the applied migrations against the migration scripts every time it runs a migration. This ensures that the migrations applied to the database match the ones available in the project.If validation fails, Flyway will prevent the migration from running, which helps catch potential problems early. |
| spring.flyway.baseline-on-migrate=true | Used when you have an existing database that wasn't managed by Flyway and you want to start using Flyway to manage it. Setting this to true allows Flyway to baseline an existing database, marking it as a baseline and starting to manage subsequent migrations. |
| spring.flyway.locations | Specifies the locations of migration scripts within your project. |

### Run the Migrations

When you start your Spring Boot application, Flyway will automatically check the `db/migrations` directory for any new migrations that have not yet been applied to the database and will apply them in version order.

```bash
./mvnw spring-boot:run
```

### Reverse/Undo Migrations in Flyway

Flyway allows you to revert migrations that was applied to the database. However, this feature requires you to have Flyway Teams (Commercial) license.

If you're using the community/free version of Flyway, the workaround is to create a new migration changelog file to undo the changes made by the previous migration and apply them.

For example, **V5\_\_delete\_movie\_actors\_table.sql**

```sql
DROP TABLE movie_actors;
```

Now run the application to apply the V5 migration changelog to your database.

## Using Flyway Maven Plugin

Flyway provides a maven plugin to manage the migrations from command line. It provides 7 goals.

| Goal | Description |
| --- | --- |
| flyway:baseline | Baselines an existing database, excluding all migrations up to and including baselineVersion. |
| flyway:clean | Drops all database objects (tables, views, procedures, triggers, ...) in the configured schemas. The schemas are cleaned in the order specified by the schemas property.. |
| flyway:info | Retrieves the complete information about the migrations including applied, pending and current migrations with details and status |
| flyway:migrate | Triggers the migration of the configured database to the latest version. |
| flyway:repair | Repairs the Flyway schema history table. This will remove any failed migrations on databases without DDL transactions |
| flyway:undo | Undoes the most recently applied versioned migration. Flyway teams only |
| flyway:validate | Validate applied migrations against resolved ones on the classpath. This detect accidental changes that may prevent the schema(s) from being recreated exactly. |

To integrate the flyway maven plugin in your maven project, we need to add `flyway-maven-plugin` plugin to your `pom.xml` file.

```xml
<properties>
    <database.url>jdbc:mysql://localhost:3306/flyway_demo</database.url>
    <database.username>YOUR_DB_USER</database.username>
    <database.password>YOUR_DB_PASSWORD</database.password>
</properties>

<build>
    <plugins>
        <plugin>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-maven-plugin</artifactId>
            <version>10.10.0</version>
            <configuration>
                <url>${database.url}</url>
                <user>${database.username}</user>
                <password>${database.password}</password>
            </configuration>
        </plugin>

        <!-- other plugins -->
    </plugins>
</build>
```

Now you can use the Maven goals

```bash
./mvnw flyway:migrate
```

Maven allows you to define properties in the project's POM and pass the value from the command line.

```bash
./mvnw -Ddatabase.username=root -Ddatabase.password=Passw0rd flyway:migrate
```
