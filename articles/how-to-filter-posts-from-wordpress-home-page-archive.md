---
id: 128
title: How to filter posts from WordPress home page archive
slug: how-to-filter-posts-from-wordpress-home-page-archive
excerpt: Add the following snippet to your WordPress theme functions.php file to exclude the posts from selected category to appear on Wordpress home page archive.
difficulty: beginners
publishedDate: "2015-09-15T10:08:24.000Z"
updatedDate: "2025-09-16T23:05:26.703Z"
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

The landing page of most of the news or personal blogging sites usually display the recent posts achieve of the blog unless the front page is set to a static html page. Your blog might have many different categories, but could be annoying to users who just want to show the recent posts from specific categories to appear on home page recent posts. The following code snippet will help you to do that.

Add the following snippet to your WordPress theme `functions.php` file to exclude the posts from selected category to appear on WordPress home page archive.

```php
//filter homepage categories
add_action('pre_get_posts', 'ad_filter_categories');
function ad_filter_categories($query) {
    if ($query->is_main_query() && is_home()) {
        $query->set('category_name','slug1, slug2, slug3');
    }
}
```
