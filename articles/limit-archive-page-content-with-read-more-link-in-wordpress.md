---
id: 42
title: Limit Archive Page Content with Read More Link in WordPress
slug: limit-archive-page-content-with-read-more-link-in-wordpress
excerpt: Most of the classic WordPress blog themes display full content in archive page. If you want to limit…
difficulty: beginners
publishedDate: "2016-10-16T17:57:12.000Z"
updatedDate: "2025-09-16T23:05:22.131Z"
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

Most of the classic WordPress blog themes display full content in archive page. If you want to limit the archive post content with a read more button, then add the following snippet to your theme `function.php` file.

**Example:**  
[![Limit Archive Page Content and Add Read More Link in WordPress](/media/articles/66/Limit-Archive-Page-Content-and-Add-Read-More-Link-in-WordPress-940x529.png)](http://stacktips.com)

```php

add_filter("the_content", "break_text");
function break_text($text){
  if(is_front_page() || is_archive() || is_search())
  {
    $length = 400; // limited to 400 characters
    if(strlen($text)<$length+10) return $text; //don't cut if too short
    $break_pos = strpos($text, ' ', $length); //find next space after desired length
    $visible = substr($text, 0, $break_pos);
    $read_more = "... <br><center><a href='".get_permalink()."' class='wp-btn'>Read more..</a></center>";
    return balanceTags($visible) . $read_more;
  } else {
    return $text;
  }
}
```
