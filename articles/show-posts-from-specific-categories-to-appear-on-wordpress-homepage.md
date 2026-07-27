---
id: 150
title: Show Posts from Specific Categories to Appear on WordPress HomePage
slug: show-posts-from-specific-categories-to-appear-on-wordpress-homepage
excerpt: Quick WordPress code snippet to show only the the posts from specific categories to appear on home page recent posts.
difficulty: beginners
publishedDate: "2015-06-15T23:34:53.000Z"
updatedDate: "2025-09-16T23:05:27.629Z"
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

Quick WordPress code snippet to show only the posts from specific categories to appear on homepage recent posts. The landing page of most of the news or personal blogging sites usually display the recent posts achieve of the blog unless the front page is set to a static HTML page.

Your blog might have many different categories, but could be annoying to users who just want to show the recent posts from specific categories to appear on homepage recent posts. The following code snippet will help you to do that.

Add the following snippets to your WordPress theme `functions.php` file:

```php
function filter_home_post_categories($query) {
    if ($query->is_main_query() && is_home()) {
        $query->set('category_name','cat_slug1, cat_slug2, cat_slug3');
    }
}
add_action('pre_get_posts', 'filter_home_post_categories');
```

Save the changed and`functions.php` file and visit your WordPress site home page. Notice that you will see only the posts from the categories as specified in the above function.
