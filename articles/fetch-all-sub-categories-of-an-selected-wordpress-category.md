---
id: 101
title: How to Fetch All Sub Categories of an Selected WordPress Category
slug: fetch-all-sub-categories-of-an-selected-wordpress-category
excerpt: The following code snippet will fetch all sub categories of selected category. Add the following code snippet to your themes archive.php/category.php page.
difficulty: beginners
publishedDate: "2016-06-12T10:18:32.000Z"
updatedDate: "2025-09-16T23:05:24.887Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet will fetch all sub categories of selected category. Add the following code snippet to your themes archive.php/category.php page.

```php
<section class="sub-category">
	<div class="container">
	<?php
		$cur_cat = get_query_var('cat');
		$args=array(
		    'child_of' => $cur_cat,
		    'hide_empty' => 0,
		    'orderby' => 'name',
		    'order' => 'ASC',
		    'depth' => '1'
		
		);
		$categories=get_categories($args);
		foreach($categories as $category) {
			echo '<a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' . $category->name.'</a>';  }
	?>
	<div>
</section>
```

Let us add some styling to it.

```css
section.sub-category {
    background: #ECF1F7;
}

.sub-category a {
    background: #1B9CE2;
    padding: 3px 10px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px;
    margin-right: 5px;
    border-radius: 3px;
    -webkit-transition: all .3s ease;
}

.sub-category a:hover {
    text-decoration: none;
    background: rgba(25, 128, 183, 0.79);
}
```
