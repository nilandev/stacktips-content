---
id: 300
title: Invoking Adapter procedure in IBM Worklight
slug: invoking-adapter-procedure-in-ibm-worklight
excerpt: This tutorial will help you to understand the Adapters in IBM Worklight and Invoking Adapter procedure in IBM…
difficulty: beginners
publishedDate: "2013-08-22T14:15:17.000Z"
updatedDate: "2025-09-16T23:05:35.049Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial will help you to understand the Adapters in IBM Worklight and Invoking Adapter procedure in IBM Worklight from Javascript client code. Here to make my post simplified, I am continuing my previous post [How to create an SQL Adapter in IBM Worklight](http://stacktips.com/2013/03/18/how-to-create-a-sql-adapter-in-ibm-worklight/) refer the same before reading this post.

## 1\. What is an IBM Worklight Adapter?

Adapter is a mediator between mobile applications and enterprise system. Adapters provide an easy and secure access to enterprise system. And it is efficient to provide enterprise data to mobile devices in a uniform data format. The data can be presented to mobile device using various interchange formats like XML or JSON (used mostly)

IBM Worklight provides three different types of adapters

1.  HTTP adapter: HTTP adapters provide access to HTTP-based enterprise services, including Restful and SOAP-based services.
2.  SQL adapter: SQL adapters provide access to enterprise databases.
3.  Cast IRON adapter: Cast Iron adapters initiate orchestrations in IBM Web Sphere Cast Iron.

Adapters are coded in JavaScript and it runs at server-side on the IBM Worklight mobile application platform. IBM internally uses Rhino JavaScript engine for executing the JavaScript source code.

## 2\. How to create SQL Adapter?

Refer my previous post for [creating SQL Adapter in IBM Worklight.](http://stacktips.com/2013/03/18/how-to-create-a-sql-adapter-in-ibm-worklight/)

## 3\. How to invoke Adapter Procedure?

Let us understand a bit before going much into coding.Worklight application can communicate with adapters by making the procedure calls. Typically while making a server call from java script we end up with getting the problem of cross origin proxy browser security issues. But IBM Worklight application architecture is design avoids the same-origin constraints and can make procedure call with the adapters deployed on IBM Worklight server.

The invocation of adapter procedure involved two basic configurations

1.  Preparing invocationData object
2.  Invoking procedure from the application

### **3.1. Prepare an invocationData object**

InvocationData object is used to provide the invocation configuration information. The configuration parameters are being configured as a JSON object. Preparing invocationData object requires three configuration parameters i.e. adapter name, procedure name and parameters to be passed. For parameters, leave empty array if your procedure is not expecting.

```
var invocationData = {
        adapter : 'StudentInfo', // adapter name
        procedure : 'getStudentInfos', // procedure name
        parameters : [] // parameters if any
};
```

Here in this example, I am trying to invoke the SQL adapter created in my previous post.

### **3.2. Invoking a procedure from the application**

We can invoke a procedure from the client application using `WL.Client.invokeProcedure` method. This method take invocationData and call back methods. The call back methods are the failure or success callbacks.

```
WL.Client.invokeProcedure(invocationData,{
		onSuccess : loadSQLQueerySuccess, //success callback
		onFailure : loadSQLQueeryFailure // failure callback
});
```

On succesful invocation of adapter procedure the success callback is getting called with the JSON response. The success JSON response contains the status code and the invocationResult object. Below is the format of JSON, I have received from my SQL Adapter.

```
{
   "status":200,
   "invocationContext":null,
   "invocationResult":{
      "responseID":"8",
      "isSuccessful":true,
      "resultSet":[
         {
            "sgrade":"A+",
            "sid":"PUC001",
            "sclass":"PUC",
            "sname":"Rohan"
         },
         {
            "sgrade":"A",
            "sid":"PUC002",
            "sclass":"PUC",
            "sname":"Rakesh"
         },
         {
            "sgrade":"C",
            "sid":"PUC003",
            "sclass":"PUC",
            "sname":"Raj"
         },
         {
            "sgrade":"E",
            "sid":"PUC004",
            "sclass":"PUC",
            "sname":"Roman"
         }
      ]
   }
}
```

On failure callback, another JSON object is being returned with the error code, and error message and HTTP response status code.

## 4\. Complete code Snippet

```
function loadSQLRecords(){
	var invocationData = {
		adapter : 'StudentInfo',
		procedure : 'getStudentInfos',
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData,{
		onSuccess : loadSQLQueerySuccess,
		onFailure : loadSQLQueeryFailure
	});
}

function loadSQLQueerySuccess(result){
	WL.Logger.debug("Retrieve success" +  JSON.stringify(result));
	displayFeeds(result.invocationResult.resultSet);
}

function loadSQLQueeryFailure(result){
	WL.Logger.error("Retrieve failure");
}
```

## 5\. Updating UI with results

To make the example more simplified, I am just creating an simple list and printing the data in rows. You can also have your user interface more beautified using your skills in JQueery, Sencha or any other frameworks. For now below is my code

```
function displayFeeds(items){
         var ul = $('#itemsList');
         for (var i = 0; i < items.length; i++) {
              var li = $('<li/>').html(items[i].sid);
              li.append($('<li/>').html(items[i].sname));
              li.append($('<li/>').html(items[i].sgrade));
              li.append($('<hr>'));
              ul.append(li);
        }
}
```

## 6\. Output

Now we are done, just deploy your application and then check the results.

[![](/media/articles/389/worklight-console.png)](http://stacktips.com)

[![](/media/articles/389/sql-adapter-procedure-output.png)](http://stacktips.com)
