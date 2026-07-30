---
id: 227
title: "Creating “Hello World!” Using Sencha Touch"
slug: creating-hello-world-in-sencha-touch
excerpt: "This section will walk you step-by-step through the process of creating a Sencha Touch application. Here as a first step we will create a basic “Hello World!” application."
difficulty: beginner
publishedDate: "2013-09-05T20:59:35.000Z"
updatedDate: "2025-09-16T23:05:34.532Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This section will walk you step-by-step through the process of creating a Sencha Touch application. Here as a first step we will create a basic “Hello World!” application. The following sections describe the application HTML and JavaScript files and break down creation of the application code into steps.

-   Creating the HTML (index.html) file
-   Creating the Application JavaScript File
-   Testing the Application

## Creating the HTML (index.html) file

The first step in creating a Sencha Touch application is to create an HTML file that links to Sencha Touch and application CSS files, the Sencha Touch library, and the application JavaScript file.The “Hello World!” application HTML file is index.html and its contents are as follows:

-   The default CSS style sheet for Sencha Touch (sencha-touch.css)
-   The Sencha Touch library (during development and testing, use the debug version of the Sencha Touch library, sencha-touch-debug.js)
-   The applications JavaScript file (app.js)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Hello World !!</title>
<!-- Sencha Touch CSS -->
<link rel="stylesheet" href="lib/sencha-touch.css" type="text/css">
<!-- Sencha Touch JS -->
<script type="text/javascript" src="lib/sencha-touch-debug.js"></script>

<!-- Application JS -->
<script type="text/javascript" src="src/app.js"></script>
</head>
<body></body>
</html>
```

This document does not describe the any CSS file in detail because its properties are straight-forward and should be self-explanatory.

The debug version of the library is not compressed and it contains documentation. This can be helpful if an error occurs, as it allows you to see exactly where in the library the error occurred. Normally, in production, you would use sencha-touch.js, which is the version of the library that is optimized for production.

\[box type=”note” border=”full” icon=”none”\]NOTE: Notice that the < body> tag in the HTML file is empty. This is because Sencha Touch automatically generates the page content via JavaScript.\[/box\]

## Creating the Application JavaScript File

Once you have created the HTML file, you are ready to create the application JavaScript file. This section shows the entire contents of the application JavaScript file and breaks down the creation of the application code into steps.

The “Hello World!” application JavaScript file is app.js and its contents are as follows:

```javascript
Ext.setup({
icon : 'icon.png',
tabletStartupScreen : 'tablet_startup.png',
phoneStartupScreen : 'phone_startup.png',
glossOnIcon : false,

onReady : function() {
var formBase = new Ext.form.FormPanel({
        html: "Hello World!!"
    });

Ext.apply(formBase, {
    fullscreen : true,
    autoRender : true,
    hideOnMaskTap : false
});

formBase.show();
}
});
```

## Detailed Explanations for app.js

The JavaScript code in the “Hello World!” application file defines:

-   Beginning the Ext Application Script File& applying the application properties/ attributes
-   Defining the Panel Component
-   Adding Panel to screen

Beginning the Ext Application Script File:

```javascript
Ext.setup({
    icon : 'icon.png',
    tabletStartupScreen : 'tablet_startup.png',
    phoneStartupScreen : 'phone_startup.png',
    glossOnIcon : false,

    onReady : function() {
    }
});
```

The Ext.setup method sets up a page for use on a touch-enabled device. It allows to set various start up properties and behaviors for your application. For detailed information on the Sencha Touch API, including this method, see the [Sencha Touch API Documentation](http://www.sencha.com/deploy/touch/docs/).

The “Hello World!” application code specifies the following start up properties:

-   **tabletStartupScreen** Property, Specifies the name of the icon file to use as the application’s start up screen on tablet devices.
-   **phoneStartupScreen** Property, Specifies the name of the icon file to use as the application’s start up screen on phone devices.
-   **icon** Property, Specifies the name of the application’s default icon file, icon.png.
-   **glossOnIcon** Property, Specifies whether you want the gloss effect to be applied to the default icon. In this case, the value is set to false indicating not to add gloss to the default icon.
-   **onReady** Method. Specifies the function to run when the browser’s Document Object Model (DOM) is ready after the application HTML file has loaded.

Within the function in the onReady method, you define the rest of the application code.

**Defining the Panel Component:**

A FormPanel component is the object of Ext.form.FormPanel, called formBase which contains html attributes to display the html content on the panel.  In this application, components are created with the following syntax:

```javascript
var objectName = new Ext.ComponentName({

objectDefinition

});
```

Where,

-   objectName is the name of the variable used to reference the object.
-   ComponentName is the name of the object’s class.
-   objectDefinition defines the object’s properties and behavior

## Testing the Application

Now deploy the complete project in your webserver. Here in this example I am using Apache Tomcat server. Now hit the URL in mobile browser **http://:/Sencha/HelloWorld/index.html**

## Output

Here, is the output looks like this

[![Creating “Hello World!” Using Sencha Touch](/media/http://stacktips.com/wp-content/uploads/2013/09/Creating-“Hello-World”-Using-Sencha-Touch.png)](http://stacktips.com)
