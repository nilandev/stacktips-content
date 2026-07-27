---
id: 32
title: How to use custom CSS in Redux framework option panel
slug: how-to-use-custom-css-in-redux-framework-option-panel
excerpt: Redux WordPress framework is awesome in its way. It powers developer with an awesome options panel, that you…
difficulty: beginners
publishedDate: "2016-12-08T06:07:44.000Z"
updatedDate: "2025-09-16T23:05:21.611Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Redux WordPress framework is awesome in its way. It powers developer with an awesome options panel, that you can use for developing themes or plugins without having to worry about complexities of WordPress settings API.

I absolutely love the way the option panel is organized into tabs and sections. However, if you feel you need more customization, you can include your own CSS and customize the option panel look that suits you.

Add the following code snippet to your redux framework `options-init.php` file to add your custom css to Redux framework options panel.

```java
// This is your option name where all the Redux data is stored.
$opt_name = 'my_theme_options';
//...

// Append custom css to redux framework
if (!function_exists('my_theme_redux_custom_css')):
    function my_theme_redux_custom_css()
    {
        wp_register_style('my-redux-custom-css',
            CSS_URI . '/admin/theme-options-custom.css', array('redux-admin-css'),
            THEME_VERSION, 'all');
        wp_enqueue_style('my-redux-custom-css');
    }
endif;
add_action('redux/page/' . $opt_name . '/enqueue', 'my_theme_redux_custom_css');
```
