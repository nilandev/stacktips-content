---
id: 114
title: Bootstrap Responsive Classes for Building Adaptive Layouts
slug: bootstrap-responsive-classes-for-building-adaptive-layouts
excerpt: In morden web development, the main concern of a developer is to build the application that works on various form…
difficulty: beginners
publishedDate: "2015-10-14T11:39:43.000Z"
updatedDate: "2025-09-16T23:05:25.538Z"
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

In morden web development, the main concern of a developer is to build the application that works on various form factors, including standard browsers, mobile tablet, tv, etc. True responsive design is fluid, using CSS3 media queries to respond to any screen sizes. With the use of this CSS3 module, you can create a flexible grid where text can wrap and images can shrink to adjust along with your browser. For designers, this is similar to adjusting a text box in Photoshop and having the copy adjust to fill the height and width of the box.

Bootstrap makes it easier to build responsive mobile optimized website with the minimal effort using set of css classes.

## Bootstrap size classes

Bootstrap provides four different markers for controlling and mentioning element and device size. Following table depicts the bootstrap size classes in detail.

| Marker name | Screen size | class name |
| --- | --- | --- |
| xs | This will render the element with extra small size. Extra small devices, such as phones with < 768px width. | .hidden-xs |
| sm | This will render the element with small size. This is the default size. Phablets and tablets with width ≥ 768px and < 992px | .hidden-sm |
| md | This will render the element with large size. Desktops with width ≥ 992px and <1200px | .hidden-md |
| lg | This will render the element with large size. Big desktop monitors and TVs with ≥ 1200px width | .hidden-lg |

##### Classification of classes associated with marker name

**.hidden-xs :** A div marked with this class in your HTML code result in hiding the div element in all extra small devices (devices with < 768px width) ,where as displayed in all other devices. For example, if you mention the div class as `<div class="hidden-xs">`, this div will be not be displayed in extra small devices, and will be displayed in all other devices

Similarly the other classes such as,

-   **.hidden-sm :** A div marked with this class in your HTML code result in hiding the div element in all small devices (devices with width ≥ 768px and < 992px) ,where as displayed in all other devices.
-   **.hidden-dm**: A div marked with this class in your HTML code result in hiding the div element in all small devices (devices with width ≥ 992px and < 1200px), where as displayed in all other devices.
-   **.hidden-lg:** A div marked with this class in your HTML code result in hiding the div element in all small devices (devices with width ≥ 1200px), where as displayed in all other devices.

Similarly for the display purpose we have the following classes,

-   **.Visible-xs/** .visible-xs-block, .visiblexs-inline, .visible-xsinline-block : visble in extra small devices
-   **.Visible-sm/** .visiblesm-block, .visiblesm-inline, .visible-sminline-block : visble in small devices
-   **.Visible-md /** .visiblemd-block, .visiblemd-inline, .visible-mdinline-block: visble in medium devices ,default display.
-   **.Visible-lg**/ .visible-lg-block, .visiblelg-inline, .visible-lginline-block : visble in large devices

For example, if you want your DIV element should only be visible in large devices (devices with width ≥1200px) and not in smaller devices, then you just use the class .visible-lg-block

Let’s see the above mentioned classes with a simple example,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My first Bootstrap page </title>
    <meta name="viewport" content="width=device-width, initialscale=1">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <style>
      div {
      background-color: #F2F2F2;
      }
    </style>
  </head>
  <body>
    <div class="container" style="padding: 40px;">
    <div class="row visible-on">
      <div class="col-xs-6 col-sm-3" style="background-color: #EDDEF1; border:1px solid #666; height:70px;">
        <span class="hidden-xs" style="">Extra small hidden class</span>
        <span class="visible-xs-inline" style="color:red;">Visible on x-small</span>
      </div>
      <div class="col-xs-6 col-sm-3" style="background-color: #EDDEF1; border:1px solid #666; height:70px;">
        <span class="hidden-sm" >Small hidden class</span>
        <span class="visible-sm-inline" style="color:red;">Visible on small</span>
      </div>
      <div class="clearfix visible-xs"></div>
      <div class="col-xs-6 col-sm-3" style="background-color: #EDDEF1; border:1px solid #666; height:70px;">
        <span class="hidden-md" style="color:blue;">Medium hidden class</span>
        <span class="visible-md-inline"style="color:red;">Visible on medium</span>
      </div>
      <div class="col-xs-6 col-sm-3" style="background-color: #EDDEF1; border:1px solid #666; height:70px;">
        <span class="hidden-lg" style="color:blue;">Large hidden class</span>
        <span class="visible-lg-inline" style="color:red;"> Visible on large</span>
      </div>
    </div>
  </body>
</html>
```

Output of the above code is  
[![Creating Responsive Layouts Using Bootstrap CSS](/media/articles/146/Creating-Responsive-Layouts-Using-Bootstrap-CSS.png)](http://stacktips.com)

Output on small screen device  
[![Creating Responsive Layouts Using Bootstrap CSS 2](/media/articles/146/Creating-Responsive-Layouts-Using-Bootstrap-CSS-2.png)](http://stacktips.com)
