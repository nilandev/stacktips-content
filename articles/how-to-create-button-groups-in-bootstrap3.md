---
id: 96
title: How to Create Button Groups in Bootstrap3
slug: how-to-create-button-groups-in-bootstrap3
excerpt: Bootstrap allows you to create a series of buttons together in a single button group. Use .btn-group class to create the button group.
difficulty: beginners
publishedDate: "2016-06-13T14:02:25.000Z"
updatedDate: "2025-09-16T23:05:24.619Z"
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

Bootstrap allows you to create a series of buttons together in a single button group. Use `.btn-group` class to create the button group.

![Button groups in Bootstrap 3](/media/articles/121/Button-groups-in-Bootstrap-3.png)

```js
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
    <div class="btn-group" style="margin:50px">
        <button class="btn btn-wraning" type="button">Find by name</button>
        <button type="button" class="btn btn-success">Find by location</button>
        <button type="button" class="btn btn-warning">Find by postcode</button>
    </div>
</body>
</html>
```
