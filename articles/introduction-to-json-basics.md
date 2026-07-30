---
id: 59
title: Introduction to JSON
slug: introduction-to-json-basics
excerpt: JSON (JavaScript Object Notation) is one of the most popular and widely accepted data exchange format originally specified by Douglas Crockford. JSON is widely accepted in the softwares that includes client-server architecture for exchanging data between client and server.
difficulty: beginners
publishedDate: "2015-02-19T01:57:39.000Z"
updatedDate: "2025-09-16T23:05:28.017Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - ios
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

JSON (_JavaScript Object Notation_) is text-based, lightweight, language-independent data interchange format. It is one of the most popular and widely accepted data exchange formats on the Web.  
Although the abbreviation starts with JavaScript, JSON is not a language with any language literals it just a specification for notation of data.

It is often misunderstood as a replacement of XML.  
JSON defines a set of formatting rules for the portable representation of structured data.

## How it is compared with XML?

Before JSON was popular, XML was considered to be the chosen data interchange format for most of the cases. XML is heavyweight, it consumes more of network bandwidth in comparison to JSON.

XML data is considerably complex for parsing. It requires an XML DOM implementation on the client-side that would accept the XML response and convert into client program understandable format. It is often time-consuming to implement parsers on the client-side and it requires the XML DOM to be loaded into memory while parsing it.

The following example shows Employees data in XML format;

```xml
<?xml version="1.0" encoding="UTF-8"?>
<employees>
   <employe>
      <name>Alex</first>
      <id>19</id>
      <details>
          <location>London</location>
         <dob>15 May 1962</dob>
         <sex>Male</sex>
      </details>
   </employe>
   <employe>
      <name>Mark</first>
      <id>19</id>
      <details>
          <location>Berlin</location>
         <dob>15 May 1968</dob>
         <sex>Male</sex>
      </details>
   </employe>
</employees>
```

The above XML data can be represented in JSON format as follows:

```json
{
  "employees": [
    {
      "name": "Alex",
      "id": "19",
      "details": {
        "location": "London",
        "dob": "15 May 1962",
        "sex": "Male"
      }
    },
    {
      "name": "Mark",
      "id": "19",
      "details": {
        "location": "Berlin",
        "dob": "15 May 1968",
        "sex": "Male"
      }
    }
  ]
}
```

Notice that the size of the XML document is comparatively larger to its representation in JSON. This result significant impact for larger size documents when used with real-time applications.

Thus, JSON becomes one of the most preferred media formats for data exchange between client and server.

## JSON Syntax

JSON defines only two data structures: Objects and Arrays. An object is a collection of name-value pairs, and an array is a list of values.

JSON defines six value types: String, Number, Object, Array, Boolean and null. JSON has the following syntax:

-   Objects are enclosed in braces ({})
-   Name-value pairs are separated by a comma (,)
-   The name and value in a pair are separated by a colon (:).
-   Names in an object are strings, whereas values may be of any of the six value types, including another array or an object.
-   Arrays are enclosed in brackets (\[\]), and their values are separated by a comma (,). Each value in an array may be of a different type, including another array or an object.

In the above JSON example, you will notice that the value for the name “employees” is an array whose elements are two objects.

## Uses of JSON

JSON is often used as a data interchange format to serialize and deserialize data in applications that communicate with each other over the Internet. Because of its open standard, it is well suited for many different programming languages.

RESTful web services use JSON extensively as the format for the data in requests and responses. The HTTP header used to indicate that the content of a request or a response is JSON data is

```text
Content-Type: application/json
```

## JSON Processing in JavaScript

### JSON.parse()

When receiving data from a web server, the data is always a string. We can parse the data to an JavaScript object using `JSON.parse()` method.

```javascript
var jsonString = '{"employees":[{"name":"Alex","id":"19","details":{"location":"London","dob":"15 May 1962","sex":"Male"}},{"name":"Mark","id":"19","details":{"location":"Berlin","dob":"15 May 1968","sex":"Male"}}]}';

var jsonObject = JSON.parse(jsonString);
console.log(jsonObject.employees[0].name);
console.log(jsonObject.employees[0].id);
console.log(jsonObject.employees[0].details.location);
```

The `JSON.parse()` method accepts the second argument `reviver`, to perform a transformation on the resulting object before it is returned.

### JSON.stringify()

The JSON.stringify() method converts a JavaScript object to a JSON string representation. It can optionally use a replacer function to replace values using custom logic.

```javascript
var resultString = JSON.stringify(jsonObject);
console.log(resultString);
```
