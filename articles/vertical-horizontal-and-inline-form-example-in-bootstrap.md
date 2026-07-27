---
id: 100
title: Vertical, Horizontal and Inline Form Example in Bootstrap
slug: vertical-horizontal-and-inline-form-example-in-bootstrap
excerpt: Forms are the essential part of any web page or web application. Styling the basic HTML form controls with CSS are often tedious.
difficulty: beginners
publishedDate: "2016-06-13T09:32:21.000Z"
updatedDate: "2025-09-16T23:05:24.820Z"
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

### 1\. Bootstrap Form Layouts

Forms are the essential part of any web page or web application. Styling the basic HTML form controls with CSS are often tedious. Bootstrap simplifies this by providing set of predefined classes. Bootstrap provides three types of form layouts:

1.  Vertical form layout (default layout)
2.  Horizontal form layout
3.  Inline form layout

Bootstrap form controls automatically gets some global styling like, all textual `<input>`, `<textarea>` and `<select>` elements with class `.form-control` have a width of 100%. Basic rules for form layouts are as follows;

-   Always use `<form role="form">`, helps improve accessibility for people using screen readers
-   For optimum spacing wrap labels and form controls in `<div class="form-group">`
-   Add class .form-control to all textual `<input>,<textarea>` and `<select>` elements

Let’s dive in details to each form layout examples.

### 2\. Bootstrap Vertical Form Layout

This is the default Bootstrap form layout in which the fields are aligned vertically to its parent. Let us create a simple log-in registration form using vertical form layout.

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
<div class="container" style="max-width:600px;margin:60px auto;">
	<form role="form">
	   <div class="form-group">
	      <label for="name">First name</label>
	      <input type="name" class="form-control" id="fname" placeholder="Enter name">
	   </div>
	   <div class="form-group">
	      <label for="address">Second name</label>
	      <input type="address" class="form-control" id="sname" placeholder="Enter surname">
	   </div>
	   <div class="form-group">
	      <label for="email">Email</label>
	      <input type="email" class="form-control" id="email" placeholder="Enter email">
	   </div>
	   <div class="form-group">
	      <label for="pwd">Password</label>
	      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
	   </div>
	     <button type="submit" class="btn btn-default">Register</button>
	</form>
</div>
</body>
</html>
```

Here the output for the above code,  
![Bootstrap Vertical Form Layout Example](/media/articles/125/Bootstrap-Vertical-Form-Layout-Example.png)

### 3\. Bootstrap Horizontal Form Layout

A horizontal form is different from the Vertical forms layout both in the amount of mark-up, and in the presentation of the form. In this form layout labels are floated to left of the input field. Both Label and Input field appear on the same line. Rules for a horizontal form in addition to the default rules,

All you have to do is to add `.form-horizontal` class to the `<form>` element and `.control-label` class to all `<label>` element. Use Bootstrap’s predefined grid classes to align labels and form controls.

```html
<div class="container" style="max-width:600px;padding:40px 20px;background:#ebeff2">
	<h3>Signup</h3>
	<form class="form-horizontal" role="form">
	   <div class="form-group">
	      <label for="name" class ="control-label col-sm-3">First name</label>
		<div class="col-sm-8">
	      <input type="name" class="form-control" id="name" placeholder="Enter name">
		</div>
	    </div>
	   <div class="form-group">
	      <label for="address" class ="control-label col-sm-3">Second name</label>
		<div class="col-sm-8">
	      <input type="address" class="form-control" id="address" placeholder="Enter address">
		</div>
	    </div>
	   <div class="form-group">
	      <label for="email" class ="control-label col-sm-3">Email</label>
		<div class="col-sm-8">
	      <input type="email" class="form-control" id="email" placeholder="Enter email">
		</div>
	    </div>
	   <div class="form-group">
	      <label for="pwd" class ="control-label col-sm-3">Password</label>
		<div class="col-sm-8">
	      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
		</div>
	    </div>
	   <div class="col-sm-offset-2 col-sm-8">
	     <button type="submit" class="btn btn-default">Register</button>
	   </div>
	</form>
</div>
```

Here the output for the above code,  
![Bootstrap Horizontal Form Layout](/media/articles/125/Bootstrap-Horizontal-Form-Layout.png)

### 4\. Bootstrap Inline Form Layout

Bootstrap’s Inline form layout can be used to place the form controls side-by-side in a compact layout. In an inline form, all of the elements are in-line, left-aligned, and the labels are alongside. For this, you need to add .form-inline class to <form> element.

Inline bootstrap form layout example;

```html
<form class="form-inline" role="form">
   <div class="form-group">
      <label for="name">Name</label>
	  <input type="name" class="form-control" id="name" placeholder="Enter name">
   </div>
   <div class="form-group">
      <label for="email">Email</label>
	  <input type="email" class="form-control" id="email" placeholder="Enter email">
 </div>
   <div class="form-group">
      <label for="pwd">Password</label>
	  <input type="password" class="form-control" id="pwd" placeholder="Enter password">
   </div>
   <button type="submit" class="btn btn-default">Register</button>
</form>
```

Here the output for the above code,  
![Bootstrap Inline Form Layout](/media/articles/125/Bootstrap-Inline-Form-Layout.png)

#### Did you know?

-   The .form-group class is used to encapsulate multiple controls in a group – just as we have done for labels and corresponding text boxes.
-   The .control-label and .form-control classes are used to style the labels and form elements respectively.
-   Using the .input-group class you can associate multiple controls in adjacently.
-   Disabled or read-only state can be used for the controls – Bootstrap will associate necessary styles automatically, however, all the controls must have .form-control class added.
-   In order to control the sizes you can use .input-lg, .input-sm classes. For controlling the size of a group you can use .form-group-lg or .form-group-sm classes.
-   In order to control the sizes you can use .input-lg, .input-sm classes. For controlling the size of a group you can use .form-group-lg or .form-group-sm classes
-   For showing up any help texts, you can use .help-block class in a separate label. This will show the texts in a new line.
