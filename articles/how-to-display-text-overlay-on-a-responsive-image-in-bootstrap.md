---
id: 107
title: How to Display Text Overlay on a Responsive Image in Bootstrap
slug: how-to-display-text-overlay-on-a-responsive-image-in-bootstrap
excerpt: Displaying text over an image thumbnail is one of the most common pattern used widely by most of the websites. In this tutorial, we will take a look into how to design a responsive grid of images using and display text over each image item.
difficulty: beginners
publishedDate: "2015-11-05T12:44:07.000Z"
updatedDate: "2025-09-16T23:05:25.143Z"
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

Displaying text over an image thumbnail is one of the most common pattern used widely by most of the websites. In this tutorial, we will take a look into how to design a responsive grid of images using and display text over each image item.

Bootstrap offers different ways to achieve this result. While some developers prefer to use a carousel with a single item others use CSS tricks. In this example, we will use one of the easy way out.

Complete Source Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap image Overlay</title>
    <meta content="width=device-width, initialscale=1" name="viewport">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.j" type="text/javascript">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript">
    </script>
    <style>
    .caption {
        width:100%;
        bottom: .3rem;
        position: absolute;
        background:#000;
        background: -webkit-linear-gradient(bottom, #000 40%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
        background: -moz-linear-gradient(bottom, #000 40%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
        background: -o-linear-gradient(bottom, #000 40%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
        background: linear-gradient(to top, #000 40%, rgba(0, 0, 0, 0) 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);
    }

    .thumbnail {
        border: 0 none;
        box-shadow: none;
        margin:0;
        padding:0;
    }

    .caption h4 {
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }
    </style>
</head>
<body>
    <div class="container" style="margin:20px;">
        <div class=" col-sm-12 row">
            <div class="col-sm-4">
                <div class="col-sm-12 thumbnail text-center">
                    <img alt="" class="img-responsive" src=
                    "http://www.wallpapereast.com/static/images/6801692-lovely-nature-wallpaper.jpg">

                    <div class="caption">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="col-sm-12 thumbnail text-center">
                    <img alt="" class="img-responsive" src=
                    "http://www.wallpapereast.com/static/images/6801692-lovely-nature-wallpaper.jpg">

                    <div class="caption">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    </div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="col-sm-12 thumbnail text-center">
                    <img alt="" class="img-responsive" src=
                    "http://www.wallpapereast.com/static/images/6801692-lovely-nature-wallpaper.jpg">

                    <div class="caption">
                        <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```
