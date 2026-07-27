---
id: 109
title: Rendering Responsive Images Using Bootstrap
slug: rendering-responsive-images-using-bootstrap
excerpt: The .img-responsive bootstrap class provides the ability to control the image rendering as per the available space and screen…
difficulty: beginners
publishedDate: "2015-10-27T03:30:41.000Z"
updatedDate: "2025-09-16T23:05:25.233Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The **.img-responsive** bootstrap class provides the ability to control the image rendering as per the available space and screen size. Ideally except images, most of the other HTML elements respond to the target device automatically when you include the Bootstrap CSS in your pages. However in case of images, you need to add this class manually.

Following are the <img> classes which can be used to style any image.

-   **.img-rounded**: Adds round corners to an image
-   **.img-circle**: Shapes the images to a circle
-   **.img-thumbnail**: Shapes the images to a thumbnail
-   **.img-responsive**: makes an image responsive. The image will scale nicely to the parent element.

**Example**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Bootstrap responsive image example - JavaTechig</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head> 
     <body>
       <div class="container">
         <div class="page-header"><h1>Hello Bootstrap!!</h1></div>
         <div class="row">

          <!-- Start content panel -->
           <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           
           <ul class="list-inline">
              <li><img src="images/son.jpg" class="img-responsive" ></li>
              <li><img src="images/son.jpg" class="img-responsive" ></li>
          </ul>

		  <ul class = "list-inline">
          <li><img src="images/temple.jpg" class="img-rounded img-responsive"></li>
          <li><img src="images/son.jpg" class="img-circle img-responsive"></li>
          <li><img src="images/rock.jpg" class="img-thumbnail img-responsive"></li>
		  </ul>
         </div> <!-- End row --> 
       </div> <!-- End container -->

      <!-- Start footer -->
       <div id="footer">
         <div class="container">
           <div class="text-muted pull-left"><a href="http://stacktips.com" target="_blank">stacktips.com</a></div>
           <div class="text-muted pull-right"><a href="http://twitter.com/npanigrahy" target="_blank">Follow me on twitter</a></div>
         </div>
       </div>
       <!-- End footer -->
     </body>
</html>
```

Output  
[![Rendering Responsive Images Using Bootstrap](/media/articles/141/Rendering-Responsive-Images-Using-Bootstrap.png)](http://stacktips.com)
