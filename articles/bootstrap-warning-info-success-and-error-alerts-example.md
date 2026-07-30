---
id: 98
title: Bootstrap Warning, Info, Success and Error Alerts Example
slug: bootstrap-warning-info-success-and-error-alerts-example
excerpt: Alerts are used to for information purpose. Bootstrap supports following different styles of contextual alert classes, Alert-info, Alert-success, Alert-danger, Alert-warning
difficulty: beginners
publishedDate: "2016-06-13T13:18:45.000Z"
updatedDate: "2025-09-16T23:05:24.717Z"
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

Alerts are used to for information purpose. Bootstrap supports following different styles of contextual alert classes,

-   Alert-info
-   Alert-success
-   Alert-danger
-   Alert-warning

Example,  
![Bootstrap Alerts Example](/media/articles/123/Bootstrap-Alerts-Example-e1465825994884.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>My first Bootstrap page </title>
<meta name="viewport" content="width=device-width, initialscale=1">
<link href="CSS/bootstrap.min.css" rel="stylesheet">
<link href="CSS/bootstrap-theme.min.css" rel="stylesheet">
<script type="text/javascript" src="JS/bootstrap.min.js"></script>
 </head>
 <body>
<div class="container">
    <div class="container">
     <h2>Alerts</h2>
     <div class="alert alert-success">
        <strong>Success!</strong> This alert box indicates a successful action.
      </div>
      <div class="alert alert-info">
        <strong>Info!</strong> This alert box indicates a neutral informative change or action.
      </div>
      <div class="alert alert-warning">
        <strong>Warning!</strong> This alert box indicates a warning that might need attention.
      </div>
      <div class="alert alert-danger">
        <strong>Danger!</strong> This alert box indicates a dangerous action.
      </div>
     </div>
</div>
</body>
</html>
```

### Dismissible alerts

Any alert can be made dismissible by adding an optional `.alert-dismissible` class and close button. For dismissible alert to work you need to include the jQuery and bootstrap JavaScript plugin. Include the following javascript inside `<head>` .. `</head>` tag.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script type="text/javascript" src="JS/bootstrap.min.js"></script>
```

Now to create dismissible alert,

```html
<div class="alert alert-warning alert-dismissible" >
     <button type="button" class="close" data-dismiss = "alert" aria-label="Close">
     <span >&times;</span></button>
     <strong>Warning!</strong> This alert box indicates a warning that might need attention.
</div>
```

![Bootstrap Dismissible Alerts Example](/media/articles/123/Bootstrap-Dismissible-Alerts-Example-e1465827048208.png)

### Animated Alerts

The .fade and .in classes add a fading effect while closing the alert message.

```html
<div class="alert alert-success fade in">
     <a href="#" class="close" data-dismiss="alert" aria- label="close">&times;</a>
     <strong>Success!</strong> This alert box indicates a successful action.
</div>
```

### Links in alerts

Use the `.alert-link` utility class to provide matching colored links within any alert.

```html
<div class="alert alert-warning" >
    <strong> Warning!</strong> This alert box indicates a warning that might need attention.
    <a href="#" class="alert-link">Click here</a>
</div>
```
