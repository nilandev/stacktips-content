---
id: 115
title: Java Spring JDBC Using JdbcTemplate Example
slug: java-spring-jdbc-using-jdbctemplate-example
excerpt: There are various data access technologies to perform persistence operations in Java enterprise applications. Spring JdbcTemplate is a class that takes care of all the boilerplate code required for creating a database connection and closing the resources.
difficulty: beginners
publishedDate: "2015-10-12T21:51:54.000Z"
updatedDate: "2025-09-16T23:05:25.613Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/147/thumbnail.png
topics: 
  - spring
tags:
  - spring-jdbctemplate
  - spring-datasource-configuration
  - jdbc-crud-example
  - java-dao-pattern
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

There are various data access technologies to perform persistence operations in Java enterprise applications. JDBC is among the most popular one. This tutorial explains how to initialize a database and access data using Spring JDBC.  

Spring offers two ways connect to a database. Data source or the `DriverManager`. The DriverManager is the legacy approach and data source is newer one. It is recommended to use the new DataSource facility to connect to databases and other resources.

DataSource facility has several advantages over DriverManager facility like DataSource increases portability, enables connection pooling and distributed transactions, the DriverManager does not allow such techniques.

Here in this example, we are using data source to communicate with MySQL database. We will create the `Cars` table with the following attributes.

```sql
CREATE TABLE `Cars` (
  `id` int(11) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

## 1\. Configuring Bean

The corresponding Java bean class for the above Cars table will look like the following code:

```java
public class Car {
    private int id;
    private String model;
    private double price;

    public Car() { }

    public Car(int id, String model, double price) {
        this.id = id;
        this.model = model;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
```

Now, let us configure the Car bean declaration to `beans.xml` file for Spring IoC to locate, initialize and manage to Car bean instance.

## 2\. Configuring data source object

As discussed above, we will be using Spring data source approach to connect to MySQL database. For this you need to add the `BasicDataSource` bean configuration to your `bean.xml` file.

Notice that in the above bean configuration the `localhost` indicated the location of MySQL database. Currently it is located on my development machine. Don’t forget to change the username and password of your own, if you configured differently while installing your MySQL server.

## 3\. Understanding Spring JdbcTemplate

Spring JdbcTemplate is a class that takes care of all the boilerplate code required for creating a database connection and closing the resources. It makes our life a lot easier by saving the effort and development time. Add the following bean declaration to initialize the JdbcTemplate instance.

Notice that we are injecting the datasource bean instance defined above to initialize the JdbcTemplate bean.

## 4\. Executing SQL statements

Spring JdbcTemplate exposes many helpful methods for performing CRUD operations on database. Following are most common methods that we use from JdbcTemplate.

-   **execute(String sql)** – Issue a single SQL execute, typically a DDL statement.
-   **queryForList(String sql, Object\[\] args)** – Query given SQL to create a prepared statement from SQL and a list of arguments to bind to the query, expecting a result list.
-   **update(String sql)** – Issue a single SQL update operation (such as an insert, update or delete statement).

Now lets bring our JdbcTemplate to action. We will use the JdbcTemplate bean in our DAO class or any class that will communicate with our database. Let us create a DAO interface with the following methods:

```java
public interface ICarsDao {
    int insertCar(Car car);
    void deleteCar(int id);
}
```

Now let us implement ICarDao interface and provide the logic to insert and delete a user form database.

```java
public class CarsDao implements ICarsDao {
    private JdbcTemplate jdbcTemplate;

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int insertCar(Car car) {
        String inserQuery = "insert into cars (id, model, price) values (?, ?, ?) ";
        Object[] params = new Object[] { car.getId(), car.getModel(), car.getPrice() };
        int[] types = new int[] { Types.INTEGER, Types.VARCHAR, Types.INTEGER };

        return jdbcTemplate.update(inserQuery, params, types);
    }

    public void deleteCar(int model) {
        String delQuery = "delete from cars where id = ?";
        int count = jdbcTemplate.update(delQuery, new Object[] { model });
        if (count != 0)
            System.out.println("Car deleted successfully.");
        else
            System.out.println("Car with given id as it doesn't exist");
    }

}
```

Now that we are ready with the DAO implementation, let us test those methods. Create a Java class TestMain.java and add the following code snippets

```java
public class Main {
    public static void main(String[] args) {

        ApplicationContext appContext = new GenericXmlApplicationContext("beans.xml");
        ICarsDao dao = appContext.getBean("carsDao", ICarsDao.class);
        Car car = new Car(1, "Volkswgen", 300);
        dao.insertCar(car);

        System.out.println("User inserted with id= " + 2);
        dao.deleteCar(3);
    }
}
```

If all your configurations are fine, you should be able to insert and delete data from Cars table.
