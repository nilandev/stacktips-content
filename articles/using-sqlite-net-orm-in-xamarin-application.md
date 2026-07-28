---
id: 177
title: Using SQLite.NET ORM in Xamarin Application
slug: using-sqlite-net-orm-in-xamarin-application
excerpt: ORM stands for Object Relational Mapping. SQLite.NET ORM is an light weight and open source library that allows…
difficulty: beginners
publishedDate: "2014-12-19T20:07:43.000Z"
updatedDate: "2025-09-16T23:05:28.948Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - design-pattern
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

ORM stands for Object Relational Mapping. SQLite.NET ORM is an light weight and open source library that allows .NET and Mono application to store data in SQLite database. This is available as a free component in Xamarin component store. SQLite.NET supports for Android, iOS and Windows platform, and hence the database operation logic can shared across platforms. Some of the key features of SQLite.NET ORM includes

1.  Easy to ingrate component available to use in existing Xamarin project
2.  It is an light weight thin wrapper, and is efficient without performance trade-off
3.  Support simple CURD operations and support for simple, complex SQL quires

# How to use SQLite.NET?

There are two approaches to integrate SQLite.NET ORM in Xamarin application

### Downloading from Github

SQLite.NET is a very thin library with single file. You can download `SQLite.cs` file from [Github](https://github.com/praeclarum/sqlite-net/blob/master/src/SQLite.cs) and add into your application. SQLite.NET library binds directly to the native device SQLite database engine on each platform.

### Adding from component store

SQLite.NET is listed free Xamarin Component Store and available for both iOS and Android platform. To include this into your Xamarin Studio project, you can , either double-click on the Components folder in the solution pad, or and right click to select Component Manager.

You will notice that the component manager will be loaded with already downloaded components and you can open Component store from the window. Accessing component manager requires log in to your Xamarin account. Once logged, you can browse through available components and add them to project.

[![SQLite.NET-ORM-in-Xamarin-Component-Store](/media/articles/235/SQLite.NET-ORM-in-Xamarin-Component-Store.png)](http://stacktips.com)

# SQLite.NET Example

Once the component is added to your Xamarin project, you are good to use this library to write SQL operations.

## Creating a database

Before you can store data into SQLite, you first need to create a database, if not created already. Create a blank database or open existing by passing the file path the SQLiteConnection class constructor.

```cs
private string DbName = "Intentory_DB.db";
string path = System.Environment.GetFolderPath (System.Environment.SpecialFolder.Personal);
SQLiteConnection dbConn = new SQLiteConnection (System.IO.Path.Combine (path, DbName));
```

1.  Depending on what platform you are targeting the file location will be different. For iOS and Android you can use Environment class as shown in the above code snippet, to construct a valid path
2.  The `new SQLiteConnection` opens the database file, if the file under mentioned path is already available, else it will create a new database.
3.  Once your database connection is opened, you can execute the following methods to command different database operations.

## Creating a table

In this example, we will be storing items to Inventory table. Below is the structure of Inventory class. As you can see in the code snippet below, we have declared different SQL attributes to Inventory class model.

```cs
class Inventory
{
	[PrimaryKey, AutoIncrement]
	public int Id { get; set; }

	[NotNull]
	public int ItemCode { get; set;}

	public String Name{ get; set;}
	public String Category { get; set;}
	public double Price{ get; set;}
	public bool StockAvailable { get; set;}
}
```

Once you have your model ready, you can invoke the below methods to create table, if not exist already.

```cs
dbConn.CreateTable ();
```

## Insert into database

```cs
//Creating inventory object for storing into db
Inventory newInventory = new Inventory ();
newInventory.ItemCode = Convert.ToInt32(ItemCode.Text);
newInventory.Name = ItemName.Text;
newInventory.Category = ItemCategory.Text;
newInventory.Price = Convert.ToDouble(ItemPrice.Text);
newInventory.StockAvailable = IsStockAvailable.Checked;

//Inserting record into database
dbConn.Insert (newInventory);
```

## Retrieve data from database

Use the following syntax to retrieve all the records from database

```
IEnumerable<Inventory> table = dbConn.Table<Inventory> ();
foreach (Inventory s in table) {
	Console.WriteLine (s.ItemCode + " " + s.Name);
}
```

To retrieve object by primary key, you can use following code syntax.

```cs
//3 is primary key
var item = db.Get<Inventory>(3);
```

## Update record into database

```cs
//Inserting record into database
dbConn.Update (item);
```

## Delete from database

```cs
dbConn.Delete (item);
```
