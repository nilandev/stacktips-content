---
id: 84
title: How to Include Custom Post in WordPress Author Archive Page
slug: how-to-include-custom-post-in-wordpress-author-archive-page
excerpt: Is your WordPress theme not showing custom post on Author Archive page? Add the following code snippet to functions.php file. This WordPress hook will include custom post types in WordPress Author archive page.
difficulty: beginners
publishedDate: "2016-07-04T09:00:34.000Z"
updatedDate: "2025-09-16T23:05:24.041Z"
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

Is your WordPress theme not showing custom post on Author Archive page? Add the following code snippet to `functions.php` file. This WordPress hook will include custom post types in WordPress Author archive page.

//include snippet in author archive template
function custom\_archive\_query( $query ) {
	if ( is\_author() && $query->is\_main\_query()) {
		$query->set( 'post\_type', array( 'post', 'deals' , 'books' ) );
	}
	return $query;
}
add\_filter( 'pre\_get\_posts', 'custom\_archive\_query' );
