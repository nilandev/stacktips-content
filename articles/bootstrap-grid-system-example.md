---
id: 108
title: Bootstrap Grid System Example
slug: bootstrap-grid-system-example
excerpt: Bootstrap framework offers grid system with extensive use of div element which is dynamically compatible with all devices and screens.
difficulty: beginners
publishedDate: "2015-10-27T03:58:45.000Z"
updatedDate: "2025-09-16T23:05:25.196Z"
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

Bootstrap framework offers grid system with extensive use of div element which is dynamically compatible with all devices and screens. The main advantage of grid systems you get rid of the traditional HTML Tables as far as possible and use fluid div elements.

The basic architecture of the grid system is that the screen is horizontally divided into maximum 12 columns (logically).It means grid system allows up to 12 columns across the page .If you don’t want to use all 12 column individually, you can group the columns together to create wider columns.

## Bootstrap Grid Classes

The Bootstrap grid system has four classes, they are xs, sm, md and lg. These provided classes are used to create each combination of columns –for each device size. Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.

The following matrix illustrates this:

| Class Names | Description |
| --- | --- |
| .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1 | Classes to use to consume one column in the corresponding device size. |
| .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2 | Classes to use to consume two columns in the corresponding device size. |
| .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3 | Classes to use to consume three columns in the corresponding device size. |
| .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4 | Classes to use to consume four columns in the corresponding device size. |
| .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5 | Classes to use to consume five columns in the corresponding device size. |
| .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6 | Classes to use to consume six columns in the corresponding device size. |
| .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7 | Classes to use to consume seven columns in the corresponding device size. |
| .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8 | Classes to use to consume eight columns in the corresponding device size. |
| .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9 | Classes to use to consume nine columns in the corresponding device size. |
| .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10 | Classes to use to consume ten columns in the corresponding device size. |
| .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11 | Classes to use to consume eleven columns in the corresponding device size. |
| .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 | Classes to use to consume twelve columns in the corresponding device size. |

## Grid System Rules

Some Boot strap grid system rules,

-   Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding.
-   Use Rows to create horizontal groups of columns
-   Content should be placed within columns, and only columns may be immediate children of rows
-   Predefined classes like .row and .col-sm-4 are available for quickly making grid layouts.
-   Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows
-   Grid columns are created by specifying the number of 12 available columns you wish to span. For example, three equal columns would use three .col-sm-4

## Structure of a Bootstrap Grid

The following is the basic structure of the Bootstrap grid,

```html
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div>
```

Let’s see with more Examples,

**Scenario: 1**  
Suppose we want to create three equal columns – irrespective of all device sizes. The code for this is as follows:

```html
<div class="row">
  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">   
 Column 1: col-xs-4 col-sm-4 col-md-4 col-lg-4 
 </div> 
 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">    
Column 2: col-xs-4 col-sm-4 col-md-4 col-lg-4 
 </div> 
 <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">  
  Column 3: col-xs-4 col-sm-4 col-md-4 col-lg-4  
</div> 
</div>
```

The output of the above code,

[![Bootstrap Grid Sample Example1](/media/articles/140/Bootstrap-Grid-Sample-Example1-620x127.png)](http://stacktips.com)

Note: Make sure that the sum always adds up to 12.  
**Scenario: 2**  
In the below code we are displaying only first two column in smaller screen and the third column will not be displayed. This is why we mentioned col-xs-6 in two columns, which is sum as 12.

```html
<div class="row">
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" style="background-color:#F0B2D1;">  
Column 1: display-xs,display-sm,display-md,display-lg 
</div>
<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4" style="background-color:#E066A3;">  
Column 2: display-xs,display-sm,display-md,display-lg  
</div>  
<div class="hidden-xs col-sm-4 col-md-4 col-lg-4" style="background-color:#D11975;">  
Column 3: hidden-xs,display-sm,display-md,display-lg 
</div>
```

The output of the above code

[![Bootstrap Grid Sample Example2](/media/articles/140/Bootstrap-Grid-Sample-Example2-940x336.png)](http://stacktips.com)

**Scenario 3:**  
In smaller screens we need all the columns to be vertical. In medium screens first two columns should consume more space while in large screens they should be equal. Here is the code,

```html
<div class="row">
<div class="col-xs-12 col-sm-5 col-md-5 col-lg-4" style="background-color:#F0B2D1;">  
 Column 1: vertical display-xs,column 1: large area display-sm,column 1: large area display-md,display-lg 
</div>
<div class="col-xs-12 col-sm-5 col-md-5 col-lg-4" style="background-color:#E066A3;">  
Column 2: Vertical display-xs,column 2: large area display-sm,column 2: large area display-md,display-lg  
</div>  
<div class="col-xs-12 col-sm-2 col-md-2 col-lg-4" style="background-color:#D11975;">  
Column 3: Vertical display-xs,column 3: small area display-sm,column31: small areadisplay-md,display-lg 
</div> 
</div>
```

The output of the above code,

[![Bootstrap Grid Sample Example3](/media/articles/140/Bootstrap-Grid-Sample-Example3-940x443.png)](http://stacktips.com)

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
        <div class="row">
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4" style="min-height:200px;background-color:#F0B2D1;">  
          Column 1: vertical display-xs,column 1: large area display-sm,column 1: large area display-md,display-lg 
        </div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4" style="min-height:200px;background-color:#E066A3;">  
        Column 2: Vertical display-xs,column 2: large area display-sm,column 2: large area display-md,display-lg  
        </div>  
        <div class="col-xs-12 col-sm-2 col-md-2 col-lg-4" style="min-height:200px;background-color:#D11975;">  
        Column 3: Vertical display-xs,column 3: small area display-sm,column31: small areadisplay-md,display-lg 
		    </div> 
	     </div>
      </div>
    </body>
</html>
```

One of the most important points here is that the total size of the columns must always be 12 – if it is less than 12, some space will be left unused, if it is more than 12, the last placeholder will be wrapped in the next line.

As you can see in the above examples, the width (and visibility) of the three columns are being automatically controlled by the classes as per the target device and screen size. Hence, Bootstrap’s grid system enables you to create tabular layouts for all the device sizes quite effortlessly, and without any extra complex CSS/ JavaScript coding.
