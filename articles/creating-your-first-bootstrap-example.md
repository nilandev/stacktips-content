---
id: 117
title: Creating Your First Bootstrap Example
slug: creating-your-first-bootstrap-example
excerpt: In our previous tutorials, we have covered the overview of bootstrap framework and the structure of the framework. Let us now proceed to create a working bootstrap example.
difficulty: beginners
publishedDate: "2015-10-12T10:32:15.000Z"
updatedDate: "2025-09-16T23:05:25.740Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our previous tutorials, we have covered the [overview of bootstrap framework](http://stacktips.com/bootstrap/getting-started-with-bootstrap) and the structure of the framework. Let us now proceed to create a working bootstrap example.

For building bootstrap application, you need to download the required bootstrap framework files. You may visit getting started with Bootstrap, to know more on how to download and link the bootstrap framework to your HTML page.

The following section describes the basic structure of a bootstrap page.

-   HTML file must be marked as `HTML5` doctype, i.e

```html
<!DOCTYPE html>
 <html lang="en">
  ...
 </html>
```

-   You must include meta `viewport` tag in the head section ,

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

-   You have to include the Bootstrap `CSS` and `JS` files, as follows

```html
<!DOCTYPE html> 
<html lang="en">  
 <head>    
    <title>My first Bootstrap page </title>    
    <meta name="viewport" content="width=device-width, initialscale=1">    
    <link href="CSS/bootstrap.min.css" rel="stylesheet">   
    <link href="CSS/bootstrap-theme.min.css" rel="stylesheet">    
    <script type="text/javascript" src="JS/bootstrap.min.js"/>
    <script type="text/javascript" src="JS/jquery.min.js"/>
</head> 
```

-   **Body section:** All of your HTML body section must be kept inside div element with class attached as `container` or `container-fluid`.

```html
<body>    
   <div class="container">
     ...  
   </div> 
</body>
```

The container class renders the page with a fixed width in middle of the browser where as the container-fluid renders the page with the full browser width. So if you want to let the page fill the whole screen, change `.container` to `.container-fluid`.

#### Complete example

```html
<!DOCTYPE html> 
<html lang="en">
   <head>
      <title>My first Bootstrap page </title>
      <meta name="viewport" content="width=device-width, initialscale=1">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">
      <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.j"></script> 
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   </head>
   <body>
      <div class="conainer" style="margin:20px;">
         <div class="page-header">
            <h1> 
               <span class="glyphicon glyphiconhome"></span>&nbsp; Welcome to the Bootstrap framework
            </h1>
         </div>
         <div class="row">
            <!--Column display with the xs-12&sm-12 : for mobile , md-8&lg-8 : for tablet and desctop --> 
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
               <div class="panel panel-warning" style="height:200px;" >
                  <div class="panel-heading">Content panel</div>
                  <div class="panel-body">...</div>
               </div>
            </div>

            <!--Column display with the xs-12&sm-12 : for mobile , md-4&lg-4 : for tablet and desctop --> 
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
               <div class="panel panel-info" style="height:200px;">
                  <div class="panel-heading">Right sidebar</div>
                  <div class="panel-body">...</div>
               </div>
            </div>
            

         </div>
      </div>
      <div id="footer">
         <div class="container">
            <div class="text-muted pull-left">
               <a href="http://stacktips.com/bootstrap" target="_blank">Bootstrap Tutorials</a>
            </div>
            <div class="text-muted pull-right"><a href="http://stacktips.com">http://stacktips.com</a>
            </div>
         </div>
      </div>
   </body>
</html>
```

In the above example we have started creating a web page using the elementary classes of Bootstrap. Note that the HTML file must be marked as HTML5 doctype. Here we created the base structure of an application. The above HTML code produce the following output.

[![Creating first bootstrap page](/media/articles/149/Creating-first-bootstrap-page.png)](http://stacktips.com)

You can try seeing the same in mobile view. You can visibly notice that the two blocks will be automatically adjusted and rendered in a vertical pattern.
