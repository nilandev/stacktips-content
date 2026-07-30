---
id: 64
title: "How to Register & Display Sidebars in WordPress"
slug: how-to-register-display-sidebars-in-wordpress
excerpt: "You can register sidebar by calling register_sidebar() method. Just provide a unique name to each sidebar (eg: “Right Sidebar”, “Left Sidebar”). These names are displayed in Wordpress admin dashboard interface."
difficulty: beginners
publishedDate: "2016-08-14T10:40:40.000Z"
updatedDate: "2025-09-16T23:05:22.929Z"
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

### Register sidebar

You can register sidebar by calling register\_sidebar() method. Just provide a unique name to each sidebar (eg: “Right Sidebar”, “Left Sidebar”). These names are displayed in WordPress admin dashboard interface.

```php
function wpb_widgets_init() {
register_sidebar( array(
        'name' => __( 'My Sidebar', 'wpb' ),
        'id' => 'my-custom-sidebar',
        'description' => __( 'The main sidebar appears on the right on each page except the front page template', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ) );
}
add_action( 'widgets_init', 'wpb_widgets_init' );
```

### Display sidebar

To display sidebar in your theme, you can use dynamic\_sidebar() method by passing the sidebar id.

```php
<?php if ( is_active_sidebar( 'my-custom-sidebar' ) ) : ?>
    <aside id="sidebar" class="sidebar right">
        <div id="sidebar" class="widget-area" role="complementary">
            <?php dynamic_sidebar( 'my-custom-sidebar' ); ?>
        </div>
    </aside>
<?php endif; ?>
```
