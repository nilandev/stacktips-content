---
id: 92
title: Bootstrap Navigation Tabs with Dropdown Menu Example
slug: bootstrap-navigation-tabs-with-dropdown-menu-example
excerpt: "<!DOCTYPE html> <html lang=”en”> <head> <title>My first Bootstrap page </title> <meta name=”viewport” content=”width=device-width, initialscale=1″> <link rel=”stylesheet” href=”http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css”> <script…"
difficulty: beginners
publishedDate: "2016-06-13T14:27:05.000Z"
updatedDate: "2025-09-16T23:05:24.449Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

```html
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
	<h2>Tabs-dropdown</h2>             
	  <ul class="nav nav-tabs">
	    <li class="active"><a href="#">Home</a></li>
	   <li><a href="#">Android</a></li>
	    <li><a href="#">Bootstrap</a></li>
	    <li><a href="#">About</a></li>        
		<li class="dropdown">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#">
			More <span class="glyphicon glyphicon-option-vertical"></span></a>
		<ul class = "dropdown-menu">
		<li><a href="#">HTML </a></li>
		<li><a href="#">Java Script </a></li>
		<li><a href="#">Xamarine </a></li>	
		</ul>
		</li>    
	  </ul>
	</div>
</body>
</html>
```

The output for the above code,  
![Bootstrap Navigation Tabs with Dropdown Menu](/media/articles/119/Bootstrap-Navigation-Tabs-with-Dropdown-Menu.png)

## Badges

These are indicators to show count of the items you want to highlight. A simple example would be showing the number of unread e-mails or messages. Example, suppose we wanted to display the number of new contents display for each section in our previous example. Add the below code,

```html
<li><a href="#">Android <span class="badge">5</span></a></li>
```

The output looks like in following way,

![Bootstrap Navigation Tabs with Dropdown Menu Badge](/media/articles/119/Bootstrap-Navigation-Tabs-with-Dropdown-Menu-Badge.png)
