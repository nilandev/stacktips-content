---
id: 414
title: Automatically Generate Thumbnail for Your Blog Post in Python
slug: automatically-generate-blog-thumbnail-in-python
excerpt: This tutorial walks you through the step by step process to generate GitHub like thumbnails for your blog posts in Python by leveraging Jinja templates and the Html2Image.
difficulty: intermediate
publishedDate: "2023-08-16T23:06:32.000Z"
updatedDate: "2025-09-16T23:05:40.123Z"
videoLink: jvTrxoGSEFA
githubLink: null
featured: true
thumbnail: /media/articles/Blog_post_small_card.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

If you’ve been sharing a link on any social media, you’ve probably seen the preview “card”. something like this:

![](/media/summernote/Blog_post_small_card.jpeg)

  

This is done using specific meta tags called Open Graph. Open graph tags enhance the link with a richer presentation.

Here is how the open graph tags look like

```
<html prefix="og: https://ogp.me/ns#">
<head>
<title>StackTips - Resources for Developers</title>
<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://stacktips.com">
<meta property="og:type" content="website">
<meta property="og:title" content="StackTips- Resources for Developers">
<meta property="og:description" content="StackTips provides developer friendly ways to learn programming. We aim to teach developers in the most efficient ways possible through articles, courses and quizzes.">
<meta property="og:image" content="http://media.stacktips.com/media/uploads/stacktips-banner.png">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="StackTips - Resources for Developers">
<meta name="twitter:description" content="StackTips provides developer friendly ways to learn programming. We aim to teach developers in the most efficient ways possible through articles, courses and quizzes.">
<meta name="twitter:image" content="http://media.stacktips.com/media/uploads/stacktips-banner.png">

...
</head>
...
</html>
```

This means we have to create an image for every single piece of content on your website. But for website site which generates high volumes of content, it is quite hard to create a custom image for every single post.

To solve this problem, websites such as dev.to or github.com have created an automated process to generate thumbnails for every single piece of content on the site.

In this post, I will show you how to automatically generate the thumbnail for your blog post in Python.

For this, we will need two Python dependencies

-   **Jinja2:** is a popular template engine for Python. It was made after Django’s template.

-   **html2image**: This allows you to run a Chrome browser in the headless mode, render the HTML template, and then generate the screenshot of your browser output.

```
Jinja2=3.1.2
html2image=2.0.3
```

Let’s first install **Jinja2** and html2Image python packages. You can install them using the following commands

```
pip3 install Jinja2
pip3 install html2image
```

## HTML Template

Once the packages are installed, let us now create a HTML template file for our thumbnail. In this example, I am displaying the Post title and 3 other images.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    <main>
      <div class="main-wrapper">
      <div class="title-wrapper">
        <h1 class="post-title">
          {{post_title}}
        </h1>  
        <div class="meta">
          <img src="{{author_image_url}}" class="author-avatar" alt="author Image"/>
          <span class="author-name">{{author_name}}</span>
        </div>
      </div>
        <img src="{{brand_logo_url}}" class="brand-logo" alt="Brand Image"/>
        <img src="{{category_image}}" class="category-icon" alt="Category Image"/>
      </div>
    </main>
  </body>
</html>
```

## Template CSS Code

Here is my css stylesheet for the template.

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200,500;600;800display=swap');

body{
    background-color: #000000;       
    font-family: 'Inter', sans-serif;    
}

.main-wrapper {
    background: #f9f9f9;
    opacity:1;
    background-image:  radial-gradient(#b8b8b8 0.5px, transparent 0.5px), radial-gradient(#b8b8b8 0.5px, #f9f9f9 0.5px);
    background-size: 20px 20px;
    background-position: 0 0,10px 10px;    
    width: 100%;
    height: 97%;
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 100;       
    display: flex;
    align-items: center;
}

.post-title{
    font-size: 6.25vw;
    text-align: left;
    margin-bottom:0;
    font-weight:600;
}

.title-wrapper{
    position: fixed;
    left: 8%;
    width: 84%;
    height: auto;
    line-height: 1.2;
    text-align: left;
    margin-top: -50px;
    margin-left: -100px;
    padding: 3em;
}

.meta {
  margin-top:50px;
  background:red
  height:80px;
  display: flex;
  justify-content: left;
  align-items: center;
}

.author-avatar {
  height:80px;
  border-radius:12px;
}

.author-name {
  margin-left:20px;
  font-size: 2.25rem;
  font-weight:600;
}

.brand-logo{
  position:absolute;
  height:60px;
  width:60px;
  right:40;
  bottom:40;
}

.category-icon {
  position:absolute;
  height:60px;
  width:60px;
  right:130;
  bottom:40;
}
```

## Generate Thumbnail from HTML in Python

Now we have our template ready, let us use the following Python script which will generate the thumbnail using the **html2image**.

```
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

from html2image import Html2Image
hti = Html2Image(size=(1200, 630))

environment = Environment(loader=FileSystemLoader("templates/"))
template = environment.get_template("template.html")

content = template.render(
    post_title="What is WebClient? How to use WebClient in Java SpringBoot",
    author_name="Nilanchala Panigrahy",
    author_image_url="https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/user/nilanchala/avatar.jpg",
    brand_logo_url="https://sgp1.digitaloceanspaces.com/stacktips/static/media/logo.png",
    category_image="https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/categories/spring-boot.png"
)

css_string = Path("templates/style.css").read_text()
res = hti.screenshot(html_str=content, css_str=css_string,
               save_as='thumbnail.png'
               , size=(1200, 630))
```

-   First we are creating an instance of the `**Html2Image**` class by specifying the desired size of the generated image (1200 pixels width and 630 pixels height).

-   An instance of the Jinja2 `Environment` class is created, with a file system loader pointing to a directory named "templates". Then, a specific template named `template.html` is loaded from this environment.

-   Jinja2 then renders the template using the provided variables such as post title, author nameetc.

-   Then we are using the `Html2Image` library and calling the screenshot method to generate the thumbnail image. It takes the rendered HTML content, CSS styles, output filename ("thumbnail.png"), and the size of the image as parameters. The result image is stored in the file system.

## Output

Now run your python code and notice that it will generate the following thumbnail.

![](/media/summernote/thumbnail.png)  

This code is pretty basic. You can of course change it for your requirement to generate desired thumbnail layout.
