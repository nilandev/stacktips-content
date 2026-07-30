---
id: 86
title: How to Remove Emoji from WordPress 4.2 Website
slug: how-to-remove-emoji-from-wordpress-4-2-website
excerpt: How to Remove Emoji from WordPress 4.2+ Website
difficulty: beginners
publishedDate: "2016-07-04T08:37:58.000Z"
updatedDate: "2025-09-16T23:05:24.153Z"
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

Emojis are the smileys used on the internet. Emojis are originated from Japan, Emoji have made their way into the unicode character set, iOS, Android, and even on desktop computers.

WordPress version 4.2 introduced emojis (smileys) unicode characters to add native support for Chinese, Japanese, and Korean language character sets. For native support, WordPress loads JavaScript’s and css Emojis files even if you not willing to use them on your website. This could potentially slow down your website.

Add the following code snippet to your theme function.php to remove WordPress emoji support in WordPress version 4.2.

Emoticons will still work and emojis will still work in browsers which have built in support for them. This plugin simply removes the extra code bloat used to add support for emojis in older browsers.

```php
/**
 * Disable the emoji's WordPress version 4.2
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
