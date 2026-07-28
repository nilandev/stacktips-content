---
id: 275
title: Creating SQL Adapter in IBM Worklight
slug: creatin-a-sql-adapter-in-ibm-worklight
excerpt: This tutorial will help you to understand the SQL adapter and to create a SQL adapter from IBM…
difficulty: beginners
publishedDate: "2013-08-18T07:48:44.000Z"
updatedDate: "2025-09-16T23:05:35.187Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - sencha-touch
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial will help you to understand the SQL adapter and to create a SQL adapter from IBM Worklight. Here it provided step by step tutorials to create, implement and test an adapter using IBM Worklight.

## 1\. What is SQL Adapter?

Adapter is a mediator between mobile applications and enterprise system. Adapters provide an easy and secure access to enterprise system. And it is efficient to provide enterprise data to mobile devices in a uniform data format. The data can be presented to mobile device using various interchange formats like XML or JSON (used mostly)

IBM Worklight provides three different types of adapters

1.  HTTP adapter: HTTP adapters provide access to HTTP-based enterprise services, including RESTful and SOAP-based services.
2.  SQL adapter: SQL adapters provide access to enterprise databases.
3.  Cast IRON adapter: Cast Iron adapters initiate orchestrations in IBM Web Sphere Cast Iron.

Adapters are coded in JavaScript and it runs at server-side on the IBM Worklight mobile application platform. IBM internally uses Rhino JavaScript engine for executing the JavaScript source code.

[![](/media/articles/392/adapter-archiecture.png)](http://stacktips.com)

Conceptually, an adapter is a set of JavaScript functions that can be remotely invoked by an application. Typically an adapter consist of and xml file and a JavaScript implementation file. The XML file will be used for configuring connectivity from the adapter to the enterprise system. Each of the procedures for the adapters needs to be defined in this xml. The JavaScript file will contain the implementation for each of the adapter procedure. Once you are done with the two files we can now deploy and then can test.

The two files are bundled into a .adapter archive file that is then deployed to the IBM Worklight Server. Once deployed, the adapter procedures are ready to be invoked by Worklight applications running on mobile devices and in browsers.

In this below example, you will find an SQL adapter working.

## 2\. Creating an SQL adapter in IBM Worklight

Here at this point, I assume that your IBM Worklight development environment is ready and working.

### **2.1. Creating a new Worklight project**

Create a simple Worklight project. Choose project template as “Hybrid Application” and provide an application name. Here I have used “SQLAdapterSampleApp”

[![](/media/articles/392/adapter-newproject.png)](http://stacktips.com)

[![](/media/articles/392/adapter-new-application.png)](http://stacktips.com)

### **2.2. Creating new Worklight Adapter**

Click on “adapter” folder and then New-> Worklight Adapter. You can see a dialog as shown below.

[![](/media/articles/392/adapter-new-sql-adapter.png)](http://stacktips.com)

### **2.3. Create required tables and data in database**

Now let us move to the mysql part. We need to have the database server running. I assume that you have installed the mysql and have a database running. Create a table with and fill with some data. You may use the below SQL command

```
USE `ibmworklight`;
DROP TABLE IF EXISTS `studentinfo`;
CREATE TABLE `studentinfo` (`sid` varchar(20), `sname` varchar(20), `sclass` varchar(20), `sgrade` varchar(20));
INSERT INTO `studentinfo` ( `sid`, `sname`, `sclass`, `sgrade`) values ('PUC001','Rohan','PUC', 'A+');
INSERT INTO `studentinfo` ( `sid`, `sname`, `sclass`, `sgrade`) values ('PUC002','Rakesh','PUC', 'A');
INSERT INTO `studentinfo` ( `sid`, `sname`, `sclass`, `sgrade`) values ('PUC003','Raj','PUC', 'C');
INSERT INTO `studentinfo` ( `sid`, `sname`, `sclass`, `sgrade`) values ('PUC004','Roman','PUC', 'E');
select * from `studentinfo`;
```

By now, we are ready with the database and table setup.

### **2.4. Configuring adapter xml**

Open your adapter .xml file. We need to change the database configurations. Driver calss is used to connect to the database from your project. Mysql database use “com.mysql.jdbc.Driver” class.

**_Note: You have to include “mysql-connector-java-5.1.24-bin.jar” library. If you don’t have one, then download here_****[Download](http://dev.mysql.com/downloads/connector/j/)**

As I am running my database in my local system, I have provided localhost and default port as 3306.

```
<dataSourceDefinition>

<driverClass>com.mysql.jdbc.Driver</driverClass>

<url>jdbc:mysql://localhost:3306/ibmworklight</url>

<user>root</user>

<password>root</password>

</dataSourceDefinition>
```

### 2.5. Defining Worklight Procedures

Now, For making my explanation simplified, I am implementing only one procedure. Here in my example “getStudentInfos” procedures fetches all of the available records from “studentinfo” table.

```
var selectStatement = WL.Server.createSQLStatement("select * from studentinfo");
function getStudentInfos() {	

	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}
```

Now we are done.

## 3\. Testing my SQLAdapter

Right click on the adapter folder -> run as -> Deploy as Worklight adapter. Once deployed you can see it from the admin console. Open your browser and hit [http://localhost:8080/console/](http://localhost:8080/console/). You will see the console window as shown below.

[![](/media/articles/392/adapter-ibl-worklight-console.png)](http://stacktips.com)

Now, RunAs-> Invoke Worklight procedure. Select the procedure to test. For now you can test for getStudentInfos, results will appear as JSON data.
