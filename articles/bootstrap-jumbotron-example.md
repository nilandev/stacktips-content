---
id: 97
title: Bootstrap Jumbotron Example
slug: bootstrap-jumbotron-example
excerpt: Jumbotron optionally captures the whole viewport and renders the contents inside. A jumbotron is displayed as a grey box with rounded corners.
difficulty: beginners
publishedDate: "2016-06-13T13:47:45.000Z"
updatedDate: "2025-09-16T23:05:24.651Z"
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

Jumbotron optionally captures the whole viewport and renders the contents inside. A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.

Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes. Place the jumbotron inside the `<div class="container">` if you want the jumbotron to NOT extend to the edge of the screen.

Jumbotron example,

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>My first Bootstrap page </title>
<meta name="viewport" content="width=device-width, initialscale=1">
<link href="CSS/bootstrap.min.css" rel="stylesheet">
<link href="CSS/bootstrap-theme.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script type="text/javascript" src="JS/bootstrap.min.js"></script>
 </head>
 <body>
<div class="container" style="margin:50px;">
    <div class="container">
      <div class="jumbotron" style="background:#ebeff2">
        <h1 style="font-size:130px;">400!</h1>
        <h2>Sorry but the page that you looking for does not exist..</h2>
        <a href="/index.html" class="btn btn-warning btn-lg">Go to Home Page</a>
      </div>
    </div>
</body>
</html>
```

Output,  
![Bootstrap Jumbotron Example](/media/articles/122/Bootstrap-Jumbotron-Example.png)
