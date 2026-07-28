---
id: 85
title: How to Add Google Prettify Syntax Highlighter in WordPress
slug: how-to-add-google-prettify-syntax-highlighter-in-wordpress
excerpt: Include the following script tag in your to your WordPress theme before to support Google Prettify Syntax Highlighter.
difficulty: beginners
publishedDate: "2016-07-04T08:54:31.000Z"
updatedDate: "2025-09-16T23:05:24.105Z"
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

Include the following script tag in your to your WordPress theme before </head> to support Google Prettify Syntax Highlighter.

```
<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
```

Now notice that the script will load for all pages and Syntax Highlighter will work fine. You can improve this by not loading the script in your homepage or archive page. To load script only on singles single post, add the following snippets to your theme `functions.php` file. This will add the hook to `<head></head>`.

```
/**
 * Add Google Prettify Syntax Highlighter
 */ 
function custom_gcp_js() {
    if(is_singular(array( 'post', 'deals', 'books'))) {
      echo '<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>';
    }
  }
add_action('wp_head', 'custom_gcp_js');
```
