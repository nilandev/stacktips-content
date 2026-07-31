---
id: 286
title: Main Steps to Create Sencha Touch Application
slug: main-steps-to-create-sencha-touch-application
excerpt: This section describes how to get started with Sencha Touch application. It explains the basic steps for using Sencha Touch to create Web applications for touch-based devices.
difficulty: beginners
publishedDate: "2013-09-05T21:23:59.000Z"
updatedDate: "2025-09-16T23:05:34.424Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - sencha-touch-getting-started
  - sencha-touch-application-setup
  - sencha-touch-html-file
  - touch-based-web-app-framework
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This section describes how to get started with Sencha Touch application. It explains the basic steps for using Sencha Touch to create Web applications for touch-based devices. This document is written for developers who want to quickly get started using Sencha Touch to create Web applications for touch-based devices. It assumes you have downloaded the Sencha Touch libraries. Have a properly installed and configured Web server, and are familiar with Web application development and concepts such as JavaScript, HTML, Cascading Style Sheets (CSS), Web servers, and so forth.

## 1\. Introduction to Sencha Touch

Sencha Touch is a JavaScript framework for creating Web applications targeted to touch-based devices. With Sencha Touch, you can use the skills you already possess to create an elegant and consistent user experience with minimal effort. Sencha Touch makes use of technologies such as HTML and CSS to provide native-quality application experiences without needing plugins.

## 2. Using Sencha Touch Main Steps

For using Sencha touch here are the basics steps need to perform.

### Set up your Environment

-   Download the Sencha Touch Libraries.
-   Make sure your development environment is set up.
-   Make sure your development and production Web servers are properly installed and configured.
-   Know the name of the CSS file you want your application to use. You will need this file name when you create the application HTML file in the next step.

### Create the HTML File

In the editor of your choice, create the HTML file for your application. For an example of an application HTML file, see Detailed Steps: Creating the HTML File.

The application HTML file is where you specify links to:

-   The default Sencha Touch cascading style sheet (CSS) files, sencha-touch.css.
-   The application’s CSS file. For example, `mycss.css`
-   The version of the Sencha Touch library you want the application to use.

Sencha recommends to use the debug version of the library, `sencha-touch-debug.js`, during application development and testing. The debug version helps you detect and troubleshoot errors, as well as to see exactly where in the library errors occur. Change the HTML file to link to the production version of the library, `sencha-touch.js`, before you put your application into production.

Save the HTML file with a logical name such as `index.html`. After you have finished writing the application and have put it on your local Web server, you will point your browser to this file name on your local Web server in order to view and test your application.

### Create Application JavaScript files

Once you have created the HTML file, you are ready to create the application JavaScript file. My next example shows the entire contents of the application JavaScript file and breaks down the creation of the application code into steps.

#### [Creating “Hello World!” Using Sencha Touch](http://stacktips.com/sencha-touch/creating-hello-world-in-sencha-touch/ "Creating “Hello World!” Using Sencha Touch")

### Test the Application

Upload the library files to the destination directory on your Web server.

-   Upload the application files (html, js, and CSS) and all referenced files to the destination directory on your Web server.
-   Point your browser to http://localhost:8080/index.html, where:

Localhost: is the Web server host name or IP address

8080 is the Web server port number

“index.html” is the name of the application HTML file.
