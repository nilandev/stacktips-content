---
id: 299
title: How to create a HTTP adapter in IBM Worlight
slug: how-to-create-a-http-adapter-in-ibm-worlight
excerpt: This tutorial explains how to create a HTTP adapter in IBM Worlight and easy steps to deploy on…
difficulty: beginners
publishedDate: "2013-08-23T12:48:50.000Z"
updatedDate: "2025-09-16T23:05:35.023Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - blog
tags:
  - worklight-http-adapter
  - worklight-adapter-xml
  - wl-server-invokehttp
  - worklight-rest-integration
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Create an HTTP Adapter in IBM Worklight"
  metaDescription: "Step-by-step guide to creating and deploying an HTTP adapter in IBM Worklight, including adapter XML configuration and invoking a REST procedure."
  metaKeywords: null
---

This tutorial explains how to create a HTTP adapter in IBM Worlight and easy steps to deploy on Worklight Server. This example reads feeds from stacktips.com using HTTP Adapter.

## 1. What is an IBM Worklight Adapter?

Adapter is a mediator between mobile applications and enterprise system. Adapters provide an easy and secure access to enterprise system. And it is efficient to provide enterprise data to mobile devices in a uniform data format. The data can be presented to mobile device using various interchange formats like XML or JSON (used mostly)

IBM Worklight provides three different types of adapters

1.  HTTP adapter: HTTP adapters provide access to HTTP-based enterprise services, including RESTful and SOAP-based services.
2.  SQL adapter: SQL adapters provide access to enterprise databases.
3.  Cast IRON adapter: Cast Iron adapters initiate orchestrations in IBM Web Sphere Cast Iron.

Adapters are coded in JavaScript and it runs at server-side on the IBM Worklight mobile application platform. IBM internally uses Rhino JavaScript engine for executing the JavaScript source code.

## 2. How to create HTTP adapter?

### **2.1 Architecture of HTTP Adapter**

Adapters are developed using JavaScript and always runs on the IBM Worklight server. When the mobile application makes request to the HTTP adapter, the HTTP adapter sends the web request to the back end web services. As a response the web service returns the response either in json or xml format, and the adapters converts the response to JSON format and sends it to the requested client application.

[![](/media/articles/388/http-adapter-worklight.png)](http://stacktips.com)

In my example, I am witting an adapter to fetch feeds from stacktips.com. To fetch the feeds I have to connect to [http://stacktips.com/feed/](http://stacktips.com/feed/)

### **2.2 Now let us move to create a HTTP Adapter**

1. Start Eclipse, and create a new Worklight project.

2. Right-click on the newly created Worklight project and then, New-> Worklight Adapter. You require giving the project name, adapter name and choosing HTTP adapter type.

3. Go to the adapter’s folder and then open the newly created adapter xml file. This XML contains the configuration required to connect to the REST Web service from adapter.

4. Change the connection parameters like protocol, domain name and port. See my connection parameter in this example. My xml file after changes

```xml
<wl:adapter xmlns:wl="http://www.worklight.com/integration"
xmlns:http="http://www.worklight.com/integration/http"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
name="JavatechigFeedReader">
   <displayName>stacktips.com</displayName>
   <description>Javatechig FeedReader</description>
   <connectivity>
          <connectionPolicy xsi:type="http:HTTPConnectionPolicyType">
              <protocol>http</protocol>
              <domain>stacktips.com</domain>
              <port>80</port>
          </connectionPolicy>
          <loadConstraints maxConcurrentConnectionsPerNode="2"/>
   </connectivity>

<procedure name="getFeeds"/>
</wl:adapter>
```

I have changed domain name to “stacktips.com”

The xml file lists the procedure declaration for the adapters. It declares all the procedures that the adapter implements. The adapter implementation resides on the JavaScript impl file.

5. Now let us implement the procedure.

```js
function getFeeds() {
    var input = {
        method : 'get',
        returnedContentType : 'xml',
        path : "feed",
        transformation : {
            type : 'xslFile',
            xslFile : 'filtered.xsl'
        }
    };

    return WL.Server.invokeHttp(input);
}
```

## 3. Testing Adapter Procedures?

Right click on the adapter folder -> run as -> Deploy as Worklight adapter. Once deployed you can see it from the admin console. Open your browser and hit [http://localhost:8080/console/](http://localhost:8080/console/)

Now, RunAs-> Invoke Worklight procedure. Select the procedure to test. For now you can test for getFeeds, results will appear as JSON data.

[![](/media/articles/388/testing-http-adapter.png)](http://stacktips.com)

## 4. How to invoke worklight Adapter Procedure?

Refer my earlier post [**“Invoking Adapter procedure in IBM Worklight”**](http://stacktips.com/2013/03/22/invoking-adapter-procedure-in-ibm-worklight/)

## 5. References

[http://pic.dhe.ibm.com/infocenter/wrklight](http://pic.dhe.ibm.com/infocenter/wrklight)
