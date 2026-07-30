---
id: 33
title: How to Add Font Awesome Icons to Redux Options Panel
slug: how-to-add-font-awesome-icons-to-redux-options-panel
excerpt: Redux WordPress framework includes Elusive Icons by default for your options panel icon needs. Elusive Icons are very limited…
difficulty: beginners
publishedDate: "2016-12-08T05:57:27.000Z"
updatedDate: "2025-09-16T23:05:21.677Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Redux WordPress framework includes Elusive Icons by default for your options panel icon needs. Elusive Icons are very limited in number. If you not happy with using Elusive Icons or, just want to include another web font (icon) framework such as Font Awesome, you can do that using the following code snippet.

Add the following code snippet to your redux framework `options-init.php` file.

```php
// This is your option name where all the Redux data is stored.
$opt_name = 'my_theme_options';
//...

function add_font_awesome_icons() {
    // Uncomment this to remove elusive icon from the panel completely
    //wp_deregister_style( 'redux-elusive-icon' );
    //wp_deregister_style( 'redux-elusive-icon-ie7' );

    wp_register_style('redux-font-awesome',
        '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
        array(), time(), 'all'
    );
    wp_enqueue_style( 'redux-font-awesome' );
}

add_action('redux/page/' . $opt_name . '/enqueue', 'add_font_awesome_icons');
```
