---
id: 93
title: How to Create Toolbars in Bootstrap3
slug: how-to-create-toolbars-in-bootstrap3
excerpt: Use the .btn-toolbar class to create the toolbar. We can club a number of button groups together to generate a toolbar. Let’s use the Glyphicons in the buttons (instead of button text).
difficulty: beginners
publishedDate: "2016-06-13T14:12:13.000Z"
updatedDate: "2025-09-16T23:05:24.578Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - bootstrap
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Use the `.btn-toolbar` class to create the toolbar. We can club a number of button groups together to generate a toolbar. Let’s use the Glyphicons in the buttons (instead of button text).

![Bootstrap Toolbar Example](/media/articles/120/Bootstrap-Toolbar-Example.png)

```js
<!DOCTYPE html> 
<html lang="en">  
<head>    
<title>My first Bootstrap page </title>    
<meta name="viewport" content="width=device-width, initialscale=1">    
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script type="text/javascript" src="JS/bootstrap.min.js"></script> 
</head> 
<body>
<div class="container">
	<h2>Toolbar</h2> 
	<div class="btn-toolbar">  
	 <div class="btn-group">   
	  	<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-ok"></span></button>    
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove"></span></button>    
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-print"></span></button>
	</div> 
	<div class="btn-group">  
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>   
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>    
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>    
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-align-justify"></span></button>  
	</div> 
	 <div class="btn-group">    
		<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-font"></span></button>    
	   	<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-bold"></span></button>    
	   	<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-italic"></span></button>  
	  </div> 
	</div>
</div>
</body>
</html>
```
