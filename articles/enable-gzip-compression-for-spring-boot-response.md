---
id: 7
title: How to Enable GZIP Compression in Spring Boot?
slug: enable-gzip-compression-for-spring-boot-response
excerpt: HTTP compression is a capability that can be built into web servers and web clients to improve transfer. This post explains how to enable gzip compression in spring boot.
difficulty: intermediate
publishedDate: "2019-11-23T21:10:02.000Z"
updatedDate: "2025-09-16T23:05:20.401Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/14/thumbnail.png
topics: 
  - spring-boot
tags:
  - spring-boot-gzip-compression
  - server-compression-properties
  - http-response-compression
  - spring-boot-performance-tuning
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Enable GZIP Compression in Spring Boot"
  metaDescription: "Learn how to enable GZIP response compression in Spring Boot using application.properties, including mime types, size thresholds, and excluded agents."
  metaKeywords: null
---

HTTP compression is a capability that can be built into web servers and web clients to improve transfer speed and save bandwidth utilisation. The commonly used compression is **GZIP**.

By default, the `gzip` compression is disabled in the Spring Boot application. However, we can enable compression using a few property changes.

## Enable GZIP Compression

Add the following configuration to your Spring Boot [`application.properties`](http://application.properties) file to enable gzip response compression.

```properties
# Enable response compression
server.compression.enabled=true

# Mime types that should be compressed
server.compression.mime-types=text/xml, text/css, text/javascript, application/json
```

This configuration will enable the gzip compression for all responses for the given mime types defined in the property file.

💡

Please note, that the wildcard in mime types is not supported. So we need to provide the list of mime types explicitly.

The `gzip` operation consumes time and other server resources. You may enable the compression only when the response size exceeds a specific limit. This can be configured using the following property.

```properties
# Minimum response where compression will kick in
server.compression.min-response-size=4096
```

## Exclude user agents from the compression

You can also exclude the specific user agents using `excluded-user-agents` configuration.

```properties
server.compression.excluded-user-agents= Mozilla/5.0
```

If you are using a YAML-based configuration, all the above properties can be written as follows:

```yaml
server:
  compression:
    enabled: true
    mime-types: text/xml, text/css, text/javascript, application/json
    min-response-size: 1024
    excluded-user-agents: Mozilla/5.0
```
