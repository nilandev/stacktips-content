---
id: 178
title: Data Storage Options in Xamarin
slug: data-storage-options-in-xamarin
excerpt: Most of the commercial mobile application uses local storage for large data processing and to improve efficiency. While…
difficulty: beginners
publishedDate: "2014-12-19T20:01:37.000Z"
updatedDate: "2025-09-16T23:05:29.018Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - xamarin-data-storage
  - sqlite-net-xamarin
  - shared-preferences-vs-nsuserdefaults
  - mobile-app-local-storage
course: null
displayOrder: 0
seo: 
  metaTitle: "Data Storage Options in Xamarin: A Complete Overview"
  metaDescription: "Explore the key data storage options in Xamarin apps, including key-value preferences, text files, SQLite databases, and image file caching."
  metaKeywords: null
---

Most of the commercial mobile application uses local storage for large data processing and to improve efficiency. While mobile applications are limited with memory and processing, the way you store, manage and process on data it is always been very tricky. Think a bit, before jumping straight into designing a database for your application.

Both Android and iOS platform provides different mechanism to deal with data storage. You must understand each of the option to choose one over other. Following are some of the available data storage mechanisms for mobile mobile platforms like Android and iOS.

## 1. Key Value Preferences

Preferences are most used way to store simple data of key value pair. They are local to your application, you will loose the data once the application is deleted from device. This option of data storage is preferred for storing application rationalization information. In Android it is named as shared preferences and in iOS it is called NSUserDefaults. Additionally iOS users can take advantage of iCloud technology for data backup and synchronization in multiple devices.

Here is the link to [Shared preference in Xamarin.Android example](http://stacktips.com/xamarin/sharedpreferences-example-in-xamarin-android) , that might intrest you.

## 2. Text Files / Serialized Data Files

Text file is most easiest and convenient way to sore data such content downloaded from server. You may use different data encryption mechanism for ensuring the data security.

Objects can be serialized and persisted as XML or JSON on the file-system. The .NET framework includes libraries that make serializing and de-serializing objects easy. Use appropriate names to organize data files.

## 3. Database

SQLite is an Open-Source embedded SQL database engine built available on both iOS and Android platforms. SQLite provides relational database management structure for storing user defined records in the form of tables. SQLite is light weight when it comes to resource usage and it doesn’t need to have any server setup like other RDBMS systems. It is an cross platform and self-contained database. Database storage is suited to lists of data with many properties.

Following are some of the advantages of using SQL database engine

1.  SQL databases structured and efficient for storing data
2.  Allows simple and complex queries, that helps to extract specific data
3.  Query results can be sorted
4.  Query results can be aggregated
5.  Similar to other RDBMS, which helps developers to utilize existing knowledge in database design
6.  Allow application to pre-package with database

You may take advantage of the ready to use ORM (Object Relational Mapping) such as SQLite.NET components from Xamarin Component store for quick integration for SQLite storage. Here is the link to S[QLite.NET components integration example](http://stacktips.com/xamarin/using-sqlite-net-orm-in-xamarin-application "Using SQLite.NET ORM in Xamarin Application"), that might intrest you.

## 4. Image files

As mobile devices are limited with memory, it is highly recommended not to use database for storing large size images. Images must be stored into device file-system and only the mapping file name can be stored into database. If you’re dealing with many images in your application, it is a good practice to have image caching logic in place.
