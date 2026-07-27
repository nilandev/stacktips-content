---
id: 43
title: How to List All the Categories for Custom Post Type
slug: how-to-list-all-the-categories-for-custom-post-type
excerpt: If you just want to list the custom post categories (taxonomies), then you can use the get_terms function.…
difficulty: beginners
publishedDate: "2016-10-16T17:46:06.000Z"
updatedDate: "2025-09-16T23:05:22.162Z"
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

If you just want to list the custom post categories (taxonomies), then you can use the get\_terms function.

The `get_the_terms` filter will be called when the cache has the term and will pass the found term along with the array of $taxonomies and array of $args.

```php
<?php $taxonomy = 'books'; ?>
<?php $terms = get_the_terms($post_id, $taxonomy);?>
<?php if ($terms && !is_wp_error($terms)) : ?>
    <div class="tagcloud">
        <?php foreach ($terms as $term): ?>
            <a href="<?php echo get_term_link($term->slug, $taxonomy) ?>"><?php echo $term->name ?></a>
        <?php endforeach; ?>
    </div>
<?php endif;?>
```
