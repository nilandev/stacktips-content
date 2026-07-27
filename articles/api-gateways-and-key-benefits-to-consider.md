---
id: 26
title: API Gateways and Key Benefits to Consider
slug: api-gateways-and-key-benefits-to-consider
excerpt: With micro-services gaining more popularity among businesses in recent days, organizations are also finding it arduous to run such types of services. An API gateway can mitigate some of the underlying complexity for deploying services.
difficulty: beginners
publishedDate: "2018-08-07T04:02:28.000Z"
updatedDate: "2025-09-16T23:05:21.111Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/24/thumbnail.png
topics: 
  - react
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Application program interfaces (API) are sets of routines, protocols, and tools for describing how software applications and components should interact with each other. They are the key driver in today’s economy for integrating with an eco-system much larger than most companies can build on their own.

Today, many ubiquitous digital platforms and services (think Twitter, Facebook, Salesforce, Airbnb, PayPal) are made available through APIs.

Imagine we are building an application to help users with their travel plans. We will require weather information to serve our users with some special offers based on specific weather conditions at a specific location. However, as we do not own any weather data, we can request the information from third-party vendors such as OpenWeatherMap or AccuWeather using their public APIs.

Companies release and promote their services as part of a larger software development kit (SDK) that includes the APIs and instructions to help developers understand the specifications of how to use them. The API layer abstracts all the underlying platform complexities (i.e. simplifies it) and the value in the data is made available via an easy-to-use readable format.

There are different data formats used for API communication and information exchange. The most notable and industry-standard data formats are Plain Text, JSON, XML, CSV, and YAML.

## Why do we need an API Gateway?

API manager (also referred as API gateway) platforms are used to easily publish, manage and monitor APIs securely in a highly scalable environment. Gateways additionally include features such as the ability to apply security policies and usage policies, collecting and analyzing statistics and other value-adds.

Some of the common features offered by today’s popular API manager platforms are:

-   Allow companies to publish and monitor the API in a secure and scalable environment.
-   Allow publishers to design, prototype and document APIs in one place. Most of the popular gateways work well with some of the industry standard Open API specifications such as Swagger and RAML.
-   Offers a clean and pluggable environment to make it easy to switch between production and sandbox environments.
-   Define common security gateway and authentication protocols for all published APIs.
-   Monitor and manage traffic for individual users or applications.
-   Traffic quota management, allows you to define the limits of a free quota and where a premium option kicks in based on the volume of incoming traffic.
-   Memory management and data caching mechanisms to improve API performance and response times.
-   API versioning to ensure compatibility between multiple API implementations without any code changes.
-   Some of the API manager platforms even allow developers to define API mock data using JavaScript or a static response. This helps the API consumer, to develop and test the application without having to wait for the real working APIs.
-   Define Load balancer reverse proxy and distribution network for splitting application traffic across several servers.
-   Set up and manage server failover.

In response to the growing open API movement, some software giants such as Facebook, Twitter, and Google have taken the initiative to build API management software in-house to serve customer data for third-party App developers.

However, implementing such a complex API Gateway platform with a wide variety of transports, security features, authentication, monitoring and usage reporting, in-house is very expensive for small and medium enterprises. Hence, some of the big players including Amazon, IBM, and Microsoft have built a business model around it to serve enterprises with their API gateway needs.

Overall, there are numerous tools available in this space and each claim to be more useful than the other. Some of the most popular choices are WSO2, AWS, Azure, IBM API Management, Akamai, MuleSoft and CA’s API Gateway.

During our initial experiments in this area, WSO2 arose as one of the best choices and satisfied most/all the criteria of our business case need. Here are some of our experiences with the WSO2 API manager.

-   It is completely free, open source and released under an Apache 2.0 license. The enterprise license is very affordable.
-   Short learning curve to get started.
-   WSO2 supports OAuth 2.0 security standards with support for quota management and traffic throttling. As we have our own OAuth 2.0 implementation, the integration with the existing system was a straightforward step with standard Java handlers.
-   It doesn’t include a load balancer out of the box, but it works well with our existing Nginx plus load balancer setup
-   It didn’t support importing RAML specification directly (when we started our investigation) but we’ve been able to convert all our RAML to Swagger and everything else has been smooth since then.
-   As we use micro-services-based distributed architecture, almost all our services communicate using both synchronous (HTTP-based broker-less architecture) and asynchronous (with AMQP message broker) mechanisms. WSO2 works nicely with both.
-   Native support for Google Analytics was a plus.
-   Amazing service with extended development support.

## Summary

For most micro-services-based architectures, it makes great sense to consider using an API Gateway that can act as a single entry point and can provide additional features like authentication, monitoring and, load balancing.

It’s been a year since we switched to WSO2 and migrated over 12+ API’s and I must say, we have not been disappointed. Clearly, WSO2 was the right choice for us, but what works for you?

If you have a personal favorite or have had a negative experience with the gateways I mentioned or with any I neglected to list, please let me know in the comments below!

_This story was first published at NESS blog. See the original article [here.](https://www.ness.com/api-gateways-key-benefits-to-consider?utm_source=stacktips.com) Opinions expressed by Stacktips contributors are their own._
