---
id: 285
title: Creating HelloWorld Application in PhoneGap Cordova Plugin
slug: creating-hello-world-using-phonegap-cordova-plugin
excerpt: PhoneGap is a web-based mobile development framework, used to develop cross platform mobile application development. It is based on the open-source Cordova project
difficulty: beginners
publishedDate: "2013-09-06T08:14:03.000Z"
updatedDate: "2025-09-16T23:05:34.393Z"
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

PhoneGap is a web-based mobile development framework, used to develop cross platform mobile application development. It is based on the open-source Cordova project. PhoneGap allows you to use standard web technologies such as HTML5, CSS3, and JavaScript for cross-platform development, avoiding each mobile platform’s native development language. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device’s sensors, data, and network status.

To develop Cordova applications, you must install the android SDK, and eclipse ADT plugin. I assume you already have the setup ready for android development. If not done yet, you may follow the steps from the below link

## 1\. Download Latest PhoneGap Plugin

You can download the PhoneGap latest version plugin from official PhoneGap website (below is the direct download link). Here you can find all the available release versions of PhoneGap, but we would recommend top take the latest stable release version of PhoneGap. You may download the PhoneGap 2.9.0, which is released on 26 June 2013. In this series of tutorial we will be using PhoneGap 2.9.0 version for the demonstration.

**[http://phonegap.com/install/](http://phonegap.com/install/)**

## 2\. Creating an new android project

Now let us create a sample HelloWorld project in android using eclipse.

1.  Launch the Eclipse application.
2.  Select the New Project menu item.
3.  Choose Android Project from Existing Code from the resulting dialog box, and press next. You have to select some of the android configurations like build target, min version, package name, etc. Just follow the steps and then it will create a new android project for you. Your project structure will look same as the image below.

[![Creating HelloWorld project using PhoneGap](/media/articles/373/Creating-HelloWorld-project-using-PhoneGap.png)](http://stacktips.com)

## 3\. Adding Html, CSS and JavaScript files to project

Now, create a folder named www under assets folder in your project directory. This folder will contain your entire html, CSS, JavaScript files. You may use some of the JavaScript frameworks of your choice to develop your user interface. Some of the top ones are Sencha Touch, JQueery mobile, iUI, etc.

In this exmple, we are using jQueery Mobile Framework for the user interface development. Here in this example, we will develop Sample JQueery page that displays “Hello World” to user.  
Let us take closer look at the index.html file

```
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <title></title>

      <!-- stylesheets -->
      <link rel="stylesheet" href="jquery.mobile-1.3.1.min.css">      
      <link rel="stylesheet" href="codiqa.ext.css">    

      <!-- jQuery and jQuery Mobile framework libs-->  
      <script src="jquery-1.9.1.min.js"></script>
      <script src="jquery.mobile-1.3.1.min.js"></script>      
      <script src="codiqa.ext.js"></script>

      <!-- for codova plugins -->
      <script type="text/javascript" src="cordova.js"></script>

   </head>
   <body>
      <!-- Home -->
      <div data-role="page" id="page1">
         <div data-theme="a" data-role="header">
            <h4>
               PhoneGap Example
            </h4>
         </div>
         <div data-role="content">
         	Hello World!
         </div>
      </div>
   </body>
</html>
```

The above html code is pretty simpler one. As as-usual we have to load the JavaScript and CSS files used in our application.

## 4\. Add PhoneGap plugin and do the required configuration

There are three basic configurations required to execute PhoneGap application

1.  If you look at the html above, we are loading cordova.js file from index.html. This is required as a part of PhoneGap library initialization.
2.  cordova-2.9.0.jar file to be placed as a part of libs folder. In ideal case the jar file is always linked to build path after placing to libs. But, in some case we have to manually add as an external jar file in the build path.
3.  config.xml file should be placed inside res/xml directory. This contains the mapping between the JavaScript and native code. Note that this is one of the important thing to do, in order to make a PhoneGap configuration.

## 5\. Load URL in PhoneGap

Now, we are done with the most of the configuration stuffs. As an next step, let us create an sample activity “MainActivity.java” in src folder inside your application.

Below is the code snippet for MainActivity.java file  
This activity should extend DroidGap activity in order to override the PhoneGap library implementation. This will enforce us to override onCreate() method. The older version of PhoneGap using loadUrl() method callback to load the first html page.

`super.loadUrl("file:///android_asset/www/index.html");`

From Cordova version 2.9.0 onwards, the load url configuration will reside inside config.xml file. If you are using Cordova version 2.9.0, you can use the below callback to load the html page.

`super.loadUrl(Config.getStartUrl());`

Below is my activity code

```
package com.javatechig.droidgap;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class MainActivity extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}
```

## 6\. Output

Now run the application to your emulator or device. You will get to see the output as shown below

[![Creating HelloWorld project using PhoneGap output](/media/articles/373/Creating-HelloWorld-project-using-PhoneGap-output.png)](http://stacktips.com)
