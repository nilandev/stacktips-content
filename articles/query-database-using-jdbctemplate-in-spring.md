---
id: 111
title: Query Database Using JdbcTemplate in Spring
slug: query-database-using-jdbctemplate-in-spring
excerpt: In this tutorial, we will focus on how to query data database. A JDBC query operation involves the following tasks.
difficulty: beginners
publishedDate: "2015-10-17T11:04:22.000Z"
updatedDate: "2025-09-16T23:05:25.335Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/143/thumbnail.png
topics: 
  - spring
tags:
  - spring-jdbctemplate
  - rowcallbackhandler-rowmapper
  - jdbc-query-database
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our [previous tutorial](http://www.stacktips.com/articles/java-spring-jdbc-using-jdbctemplate-example), we have discussed how to use JdbcTemplate to access the MySQL database and perform insert and delete operation. In this tutorial, we will focus on how to query data database using the following approaches.

The JdbcTemplate class provides different overloaded `query()` methods to control the overall query process. A JDBC query operation involves the following tasks.

-   Obtain a database connection from the data source.
-   Create a PreparedStatement and Bind the parameters
-   Execute the PreparedStatement object.
-   Iterate the returned result set to extract data from the result set.
-   Clean up the statement object and connection.

## 1.0. Using RowCallbackHandler

The `RowCallbackHandler` is the is the primary interface that allows you to process the current row of the result set. One of the query() methods iterates the result set for you and calls your RowCallbackHandler for each row. So, the `processRow()` method will be called once for each row of the returned result set.

The following code snippet depicts how to query the database using RowCallbackHandler interface.

```java
public Car selectCar(int id) {
    final String sql = "select * from cars where id = ?";
    final Car car = new Car();
    RowCallbackHandler callback = new RowCallbackHandler() {

        public void processRow(ResultSet rs) throws SQLException {
            car.setId(rs.getInt("id"));
            car.setModel(rs.getString("model"));
            car.setPrice(rs.getDouble("price"));
        }
    };

    jdbcTemplate.query(sql, callback, id);
    return car;
}
```

## 2.0. Using RowMapper

The `RowMapper<T>` interface is more general than `RowCallbackHandler`. It maps a single row of the result set to a custom object. So this can be applied to a single row result set as well as a multiple row result set. In the `mapRow()` method of this interface, you have to construct the object that represents a row and return it as the methods return value.

```java
public Car selectCar(int id) {
    final String sql = "select * from cars where id = ?";
    return jdbcTemplate.queryForObject(sql, new RowMapper<Car>() {

        public Car mapRow(ResultSet rs, int rowNum) throws SQLException {
            final Car car = new Car();
            car.setId(rs.getInt("id"));
            car.setModel(rs.getString("model"));
            car.setPrice(rs.getDouble("price"));
            return car;
        }

    }, id);
}
```

Although the above code works well, spring offers class `BeanPropertyRowMapper` for your convenience. The BeanPropertyRowMapper class automatically maps a row to a new instance of the specified class.

This method requires that the resultant class should have a default constructor. It does exactly the same thing as what we have done in the above code snippet. It first instantiates the class using Java reflection and then maps each column value to a property by matching their names.

## 3.0. Using BeanPropertyRowMapper

The following code snippet depicts how to use `BeanPropertyRowMapper` implementation to query form database.

```java
public Car selectCar(int id) {
    final String sql = "select * from cars where id = ?";
    return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Car.class), id);
}
```

## 4.0. Querying for Multiple Rows

Now that we understand how to query single record, we can now have a look at querying list of cars from the database. This can be achieved using the `queryForList()` method by passing the SQL statement. The returned result will be a list of maps. Each map stores a row of the result set with the column names as the keys.

```java
public List<Car> getAllCars() {
    final String sql = "select * from cars";
    final List<Car> vehicles = new ArrayList<Car>();
    final List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);

    for (Map<String, Object> row : rows) {
        Car car = new Car();
        car.setId((Integer) row.get("id"));
        car.setModel((String) row.get("model"));
        car.setPrice((Double) row.get("price"));
        vehicles.add(car);
    }
    return vehicles;
}
```
