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

/\*\*
 \* Disable the emoji's WordPress version 4.2 
 \*/
function disable\_emojis() {
	remove\_action( 'wp\_head', 'print\_emoji\_detection\_script', 7 );
	remove\_action( 'admin\_print\_scripts', 'print\_emoji\_detection\_script' );
	remove\_action( 'wp\_print\_styles', 'print\_emoji\_styles' );
	remove\_action( 'admin\_print\_styles', 'print\_emoji\_styles' );	
	remove\_filter( 'the\_content\_feed', 'wp\_staticize\_emoji' );
	remove\_filter( 'comment\_text\_rss', 'wp\_staticize\_emoji' );	
	remove\_filter( 'wp\_mail', 'wp\_staticize\_emoji\_for\_email' );
	add\_filter( 'tiny\_mce\_plugins', 'disable\_emojis\_tinymce' );
}
add\_action( 'init', 'disable\_emojis' );
