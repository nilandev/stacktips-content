---
id: 38
title: Getting Started with Bootstrap
slug: getting-started-with-bootstrap
excerpt: To work with Bootstrap you need to include bootstrap.min.css and bootstrap.min.js files to your HTML page. This can be done in two ways. Either you can download a copy of Bootstrap framework and host the required files on your web server or directly use the Bootstrap’s CDN files.
difficulty: beginners
publishedDate: "2015-10-08T08:48:49.000Z"
updatedDate: "2025-09-16T23:05:25.835Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - php
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In our previous example, we have discussed bootstrap features and what makes the CSS framework widely popular. Now let us get our hands on the next step to build our first bootstrap application. For building bootstrap application, first you need to download the required bootstrap framework files.

To work with Bootstrap you need to include `bootstrap.min.css` and `bootstrap.min.js` files to your HTML page. This can be done in two ways. Either you can download a copy of Bootstrap framework and host the required files on your web server or directly use the Bootstrap’s CDN files.

I personally prefer to use the bootstrap CDN, as the CDN copies are always up to date.

## Linking Bootstrap from CDN

The folks over at MaxCDN graciously provide CDN support for Bootstrap’s CSS and JavaScript. Just use these Bootstrap CDN links.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
```

## Downloading Bootstrap Bundle

There are two versions available for download, compiled Bootstrap and Bootstrap source files. You can download Bootstrap files from [here](http://getbootstrap.com/getting-started/).

Compiled download contain compiled and minified version of CSS and JavaScript files as well as icons in font format for faster and easier web development, while the source contain original source files for all CSS and JavaScript, along with a local copy of the docs. The compiled bootstrap files are optimized for performance and easy to use. To start with, you can start downloading the compiled Bootstrap copy.

#### Get the precompiled bundle

Download the [precompiled bootstrap bundle](https://github.com/twbs/bootstrap/releases/download/v3.3.5/bootstrap-3.3.5-dist.zip) from here.  
This will download the compiled and minified `bootstrap-x.x.1dist.zip` file, which contains all the packaged CSS, JavaScript, and Font files. A precompiled and distributable bundle comes with three folders. The following is the snapshot of the folders and their contents.

[![Precompiled bootstrap bundle](/media/articles/152/Precompiled-bootstrap-bundle.png)](http://stacktips.com)

#### Get the full source code:

Download the bootstrap [complete source code](https://github.com/twbs/bootstrap/archive/v3.3.5.zip) bundle from here.  
This will download the full source code bundle of Bootstrap. You have to install and compile the source code before actually using this. Here are the files and folders that come with the source code bundle.

[![Bootstrap complete source bundle](/media/articles/152/Bootstrap-complete-source-bundle.png)](http://stacktips.com)

In case of a downloaded local copy of Bootstrap, we include the following files to your HTML HEAD section.

```html
<link rel="stylesheet" href="bootstrap.min.css"> 
<link rel="stylesheet" href="bootstrap-theme.min.css"> 
<script type="text/javascript" src="bootstrap.min.js"></script> 
<script type="text/javascript" src="jquery.min.js"></script>
```
