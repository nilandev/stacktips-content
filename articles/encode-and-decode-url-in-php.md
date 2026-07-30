---
id: 21
title: How to Encode and Decode URL in PHP
slug: encode-and-decode-url-in-php
excerpt: This post explains how to encode and decode URLs using PHP. PHP supports the encoding and decoding of URLs by providing some built-in functions.
difficulty: beginners
publishedDate: "2018-09-19T05:50:38.000Z"
updatedDate: "2025-09-16T23:05:20.724Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - blog
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This post explains how to **encode and decode** URL using PHP. PHP supports encoding and decoding of URL by providing some built-in functions. Encoding is required before sending URL data to query string or to a function which might dynamically work on this URL data. And then, this data will be decoded into its original form, after receiving it in target PHP page or function.

## **PHP Encode and Decode URL Example**:

First, let us create an HTML file and save it as `sample.html`

**sample.html**

```html
















```

Let us now, create a PHP file to encode and decode URL.

**encode\_decode.php**

Lets see the simple example to encode and decode URL in PHP:

```php
$url = "https://www.example.com/p/selenium.html";
//encoding URL
$encodedUrl = urlencode($url);
echo $encodedUrl;
//Prints: https%3A%2F%2Fwww.example.com%2Fp%2Fselenium.html

//decoding URL
echo urldecode($encodedUrl);
//Prints: https://www.example.com/p/selenium.html
```

This all about encoding and decoding URL in PHP. Thank you for reading this article, and if you have any problem, have another better useful solution for this article, please write a message in the comment section.

This story was first published at SKPTRICKS. See the original article [How to Encode and Decode URL Using PHP](http://feedproxy.google.com/~r/Skptricks/~3/5Ig6l32ZJd8/how-to-encode-and-decode-url-using-php.html). Opinions expressed by Stacktips contributors are their own.
