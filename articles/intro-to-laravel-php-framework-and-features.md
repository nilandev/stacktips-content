---
id: 30
title: Introduction to Laravel PHP Framework Features and Version History
slug: intro-to-laravel-php-framework-and-features
excerpt: Welcome to Laravel Starter Guide. This tutorial series is designed to provide you with all the information you…
difficulty: beginners
publishedDate: "2017-04-24T09:16:48.000Z"
updatedDate: "2025-09-16T23:05:21.489Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - php
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Welcome to Laravel Starter Guide. This tutorial series is designed to provide you with all the information you need to get started with building a web application using Laravel PHP framework. In this article, you will learn What is Laravel? And why we need to use Laravel framework? and a brief introduction to Laravel version releases.  

## 1\. Introduction to Laravel PHP

Laravel is free, open-source and one of the more popular PHP web framework based on the model–view–controller (MVC) architectural pattern. It is created by Taylor Otwell, intended to reduce the cost of initial development and improve quality of your code by defining industry standard design practices. Using Laravel, you can save hours of development time and reduce thousands of lines of code compared raw PHP.

Since its first release on June 2011, Laravel is has come a long way as the PHP language is evolving. The current Laravel framework version is 5.4.

## 2\. Why use a framework at all?

PHP is one of the most popular programming languages, powered over 82% of websites around the world. The recent PHP 7 release made this server-side programming language better and more stable than ever. It is used by major players like Facebook, WordPress, Flicker, etc.

> PHP is used by 82.7% of all the websites whose server-side programming language we know.
> 
> ~ W3techs.com

A framework is not necessary to develop an application in PHP language. The question is, why to use a framework at all? A few benefits of using a framework include:

-   A framework makes development faster. You just need to focus on your development without having to worry about the some of the key fundamentals.
-   Most of the PHP frameworks comes handy with an ORM (Object-relational mapping). That means you don’t have to write complex queries for performing CRUD (Create, Read, Update, and Delete) operations.
-   Frameworks brings industry-standard architectural patterns such as MVC to ensure rapid development and helps to write maintainable code
-   Frameworks makes your application more scalable
-   Frameworks are updated constantly with enhancements and patches to protect your site from security threats
-   Framework helps to organize and manage resources better
-   Frameworks with large user bases are likely more stable

The above benefits give enough reasons to choose a framework rather than using raw PHP to create your web application. CodeIgniter, Symfony, Laravel, and Yii are some of the popular PHP frameworks available in the market. In this tutorial series, we have chosen Laravel as the framework of our choice. Rest of the tutorial we discuss only Laravel.

## 3\. What is Composer?

Composer(https://getcomposer.org/) is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.  
Using composer, you can include third party ready-to-use packages and libraries in your Laravel project and manage them all in one place using `composer.json` file.

The `composer.json` file is a plane JSON file placed under the project root directory, which defines the metadata for all project package dependencies.

Laravel is packaged with out of the box dependency management Composer and Packagist. Using composer, you can include third party ready-to-use packages and libraries in your Laravel project and manage them all in one place.

## 4\. Laravel Features

Laravel PHP framework is powered with many out of the box features including view templating, built in authentication, routing, database access, file management, caching, etc. Let us review some of the major features supported by Laravel:

#### 4.1. Database Access

Laravel also provides a cutting-edge suite of tools for interacting with databases. Database migrations enable you to easily design and modify a database in a platform-independent way. The migrations can then be run against any of the database types that Laravel supports (MySQL, PostgreSQL, MSSQL, and SQLite) and you won’t have any compatibility issues. Laravel’s Fluent Query Builder abstracts away the differences between different database types. Use it to build and execute robust queries.

Laravel’s ActiveRecord implementation is called Eloquent. Interacting with a database in an object-oriented way is the modern standard. With Eloquent, we can create, retrieve, update, and delete the database records without needing to write a single line of SQL. In addition to this, Eloquent provides powerful relationship management and it can even handle pagination automatically for you.

#### 4.2. Command Line Tool

Laravel also ships with a command-line interface tool called Artisan. With Artisan, a developer can interact with their application to trigger actions such as running database migrations, executing unit tests, and schedule a job. Another beauty of Artisan is that it is completely extensible so that you can add a new command to perform any type of functionality that you’d like.

#### 4.3. Routing

Laravel allows you to organize all your website URLs through routers. If you want to change the link of some website or API, we need to change it at one file and your website should work as expected.

#### 4.4. View Template Engine

The Blade templating engine cleans up your views by providing aesthetically pleasing replacements for inline PHP and by including powerful new features.

#### 4.5. Job Scheduling

Introduced in Laravel 5.0, is an addition to the Artisan that allows programmatic scheduling of periodically executed tasks. Internally, Scheduler relies on the CRON daemon to run a single Artisan job that, in turn, executes the configured tasks.

#### 4.6. File System

Introduced in Laravel 5.0, is a file system abstraction layer that allows local file systems and cloud-based storage services provided by Amazon S3 and Rackspace Cloud to be used transparently and in the same way.

#### 4.7. Subscription & Billing

If you want to develop a website like Newspaper subscription/billing website, Laravel is a perfect solution. Since, Laravel 4.2 it introduced, Cashier, that provides an interface for managing subscription billing services provided by Stripe, such as handling coupons and generating invoices, etc.

#### 4.7. Authentication & Socialite

Laravel is bundled with basic authentication. Basic authentication can be configured to web pages and API easily with few steps. Since version 5.0, Laravel includes as an optional package, provides simplified mechanisms for authentication with different OAuth providers, including Facebook, Twitter, Google, GitHub, and Bitbucket.

## 5\. Laravel Version History

Laravel PHP framework is evolved with a series of frequent updates since its initial beta release on June 2011. Each version powered with new advanced features that make Laravel stand out as the strongest contender to its rival frameworks CodeIgniter, Symfony, Laravel, and Yii.

The following table lists all the major Laravel framework releases in the reverse chronological order.

| Version | Features |
| --- | --- |
| Laravel 5.4January 24, 2017 | Added new features like Laravel Dusk, Laravel Mix, Blade Components and Slots, Markdown Emails, Automatic Facades, Route Improvements, Higher Order Messaging for Collections, and many others. |
| Laravel 5.3 |  |

_August 23, 2016_ Improving developer speed by adding additional out of the box improvements for common tasks Laravel 5.1

_June 2015_ Added long-term support (LTS)

Bug fixes and security patches. Laravel 5

_February 2015_ Added support for job Scheduler, Flysystem, assets packaging using Elixir and Socialite package. Laravel 4

_May 2013_ A major release with complete rewrite of the Laravel framework. It includes support for message queue, database seeding, built-in support for sending different types of email. Laravel 3

_February 2012_ Introduced Artisan command-line interface, built-in support for more database management systems, database migrations, support for handling events, and a packaging system called Bundles. Laravel 2

_September 2011_ Fully MVC compliant using Controllers

View templating called Blade

Built-in support for the inversion of control Laravel 1

_June 9, 2011_ Initial release.

Support for authentication, localisation, models, views, sessions, routing and other mechanisms.

## 6\. Summary

That’s an overview of Laravel, version history and rich features the framework is bundled with. The next article, we will see the software prerequisites and installation guide.
