---
id: 112
title: Batch Update Operation Using Spring JdbcTemplate
slug: batch-update-operation-using-spring-jdbctemplate
excerpt: In our previous example, we have discussed how to use JdbcTemplate to access the MySQL database and perform insert and delete operation. In this tutorial, we will focus on how to insert list of cars into database.
difficulty: beginners
publishedDate: "2015-10-15T22:17:45.000Z"
updatedDate: "2025-09-16T23:05:25.412Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/144/thumbnail.png
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the previous example, we have discussed how to use [JdbcTemplate to access the MySQL database](/articles/java-spring-jdbc-using-jdbctemplate-example) and perform insert and delete operation. In this tutorial, we will focus on how to insert a list of cars into the database.

For inserting the batch of cars, you need to call `insert()` method multiple times, the update will be very slow as the SQL statement will be compiled repeatedly. Instead, we can add a new method `insertCars()` in CarsDao for inserting a batch of Cars.

## Batch Operation Using Spring JdbcTemplate

The `JdbcTemplate` class offers the `batchUpdate()` template method for batch update operations. It requires two arguments, a SQL statement and a `BatchPreparedStatementSetter` object. Using `batchUpdate()` method, the SQL statement is compiled only ones and executed multiple times.

The following snippet shows how to perform batch insert operation using JdbcTemplate.

```java
public void insertCars(final List cars) {
    final String inserQuery = "insert into cars (id, model, price) values (?, ?, ?) ";
    jdbcTemplate.batchUpdate(inserQuery, 
                new BatchPreparedStatementSetter() {
        public void setValues(PreparedStatement ps, int i) throws SQLException {
            Car car = cars.get(i);
            ps.setInt(1, car.getId());
            ps.setString(2, car.getModel());
            ps.setDouble(3, car.getPrice());
        }

        public int getBatchSize() {
            return cars.size();
        }
    });
}
```

Let us now write the main class and test the above code.

```java

public class Main {
    public static void main(String[] args) {
        ApplicationContext appContext = new GenericXmlApplicationContext("beans.xml");
        ICarsDao dao = appContext.getBean("carsDao", ICarsDao.class);
        
        //Batch update statement
        List cars = new ArrayList();
        for (int i = 1; i <= 20; i++) {
            Car car = new Car(i, "Mercedes-Benz" + i, 1*300);
            cars.add(car);
        }
        dao.insertCars(cars);
    }
}
```
