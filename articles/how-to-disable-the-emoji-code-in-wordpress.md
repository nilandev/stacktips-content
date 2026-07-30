---
id: 61
title: How to Disable the Emoji Code in WordPress
slug: how-to-disable-the-emoji-code-in-wordpress
excerpt: Since version 4.2 release, WordPress natively adds supports Emoji characters. Because if this WordPress loads some extra java…
difficulty: beginners
publishedDate: "2016-08-15T11:56:46.000Z"
updatedDate: "2025-09-16T23:05:22.805Z"
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

Since version 4.2 release, WordPress natively adds supports Emoji characters. Because if this WordPress loads some extra java scripts and CSS files in the header.

If you don’t use Emoji and want to remove them, just add the following code snippets to your theme `functions.php` file.

```php
/**
 * Disable the emoji's
 */
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );
```
