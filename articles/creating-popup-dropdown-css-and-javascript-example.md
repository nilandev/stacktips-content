---
id: 37
title: Creating Popup Dropdown CSS and JavaScript Example
slug: creating-popup-dropdown-css-and-javascript-example
excerpt: The following code snippet demonstrates, how to create an popup dropdown menu using CSS and JavaScript. In the…
difficulty: beginners
publishedDate: "2016-10-19T08:46:06.000Z"
updatedDate: "2025-09-16T23:05:21.854Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/61/thumbnail.png
topics: 
  - php
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

[![Popup Dropdown CSS and JavaScript](/media/articles/61/Popup-Dropdown-CSS-and-JavaScript.png)](http://stacktips.com)  
The following code snippet demonstrates, how to create an popup dropdown menu using CSS and JavaScript. In the example, we will place three buttons on screen. When user clicks on them, the drop down popup will be displayed.

Also, to make it look bit fancy, we have added animation on button and dropdown component using CSS3 transforms and transitions. Fork or download the source code from Github or see the live example in action by clicking on the “View Demo” button.

[Download source](https://github.com/StackTipsLab/HTML-CSS-JS-Examples)

### HTML Code

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Popup Dropdown CSS Example</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <style>
      /* Your style goes here */
  </style>
</head>

<body>
<div class="buttons-container">
<h1>Dropdown Menu using CSS and Java Script</h3>
  <div class="dropdown">
    <a href="#" class="btn">Centered Dropdown </a>
    <div class="outer-list">
      <ul>
        <li>Red Apples</li>
        <li>Blood Oranges</li>
        <li>Gooseberries</li>
        <li>Red Cranberries</li>
        <li>Pomegranates</li>
      </ul>
    </div>
  </div>
  <div class="dropdown">
    <a href="#" class="btn">Bottom Centered Dropdown </a>
    <div class="outer-list bottom">
      <ul>
        <li>Red Apples</li>
        <li>Blood Oranges</li>
        <li>Gooseberries</li>
        <li>Red Cranberries</li>
        <li>Pomegranates</li>
      </ul>
    </div>
  </div>
  <div class="dropdown">
    <a href="#" class="btn">Top Centered Dropdown </a>
    <div class="outer-list top">
      <ul>
        <li>Red Apples</li>
        <li>Blood Oranges</li>
        <li>Gooseberries</li>
        <li>Red Cranberries</li>
        <li>Pomegranates</li>
      </ul>
    </div>
  </div>
</div>

  <script>
    /* Your JavaScript code goes here */
  </script>
</body>
</html>
```

### CSS3 Stylesheet

```css
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  body {
    text-align: center;
    margin:0;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: #444;
    font-weight: 800;
    font-size: 2.5em;
    padding:30px;
  }

   .buttons-container {
    padding: 50px;
    background: #ebeff2;
    margin: 0 auto;
    max-width: 1024px;
    display: block;
    height: 100vh;
  }

  .btn {
    position: relative;
    display: block;
    text-align: center;
    background: #03A9F4;
    color: #fff;
    padding: 20px 20px;
    margin: 30px 0;
    border-radius: .15em;
    cursor: pointer;
    transition: all 0.35s ease;
    overflow: hidden;
    font-size: 1.2em;
    font-weight: 500;
  }

  .btn:after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    z-index: 1;
    overflow: hidden;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    transition: all 0.35s ease;
  }

  .btn:active:after,
  .btn.dropdown-open:after {
    width: 200%;
    height: 200%;
  }

  .btn:hover {
    box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.1);
  }

  .btn.dropdown-open + .outer-list {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }

  .dropdown {
    position: relative;
    margin: 0 auto;
    width: 20em;
  }

  .dropdown > .outer-list {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    opacity: 0;
    visibility: hidden;
    transition: all 0.35s ease;
  }

  .dropdown > .outer-list.top {
    align-items: flex-start;
    transform-origin: 50% 0;
  }

  .dropdown > .outer-list.left {
    justify-content: flex-start;
  }

  .dropdown > .outer-list.bottom {
    align-items: flex-end;
    transform-origin: 50% 100%;
  }

  .dropdown > .outer-list.right {
    justify-content: flex-end;
  }

  .dropdown > .outer-list > ul {
    list-style: none;
    padding: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: .2em;
  }

  .dropdown > .outer-list > ul li {
    padding: .25em 3em;
    margin: .25em;
    width: 100%;
    cursor: pointer;
    transition: background 0.35s ease;
    font-weight: 500;
    font-size: 1.2em;
    color:#444;
  }

  .dropdown > .outer-list > ul li:hover {
    background: rgba(0, 0, 0, 0.07);
  }
```

### JavaScript Code

```js
'use strict';
  (function() {
    var _btn = document.querySelectorAll('.btn'),
      _eachBtn = function(callback) {
        Array.prototype.forEach.call(_btn, function(elem) {
          callback.call(this, elem);
        });
      },
      _initListener = function(e) {
        e.preventDefault();
        e.stopPropagation();
        _eachBtn(function(btn) {
          btn.classList.remove('dropdown-open')
        });
        this.classList.toggle('dropdown-open');
      },
      _hideAll = function() {
        _eachBtn(function(btn) {
          btn.classList.remove('dropdown-open');
        });
      };

    _eachBtn(function(btn) {
      btn.addEventListener('touchend', function(e) {
        _initListener.call(this, e);
      });

      btn.addEventListener('click', function(e) {
        _initListener.call(this, e);
      });
    });

    document.addEventListener('touchend', function() {
      _hideAll();
    });

    document.addEventListener('click', function() {
      _hideAll();
    });

  })();
```
