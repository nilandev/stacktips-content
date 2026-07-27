---
id: 70
title: How to Limit Authors and Contributors to their Own Post in WordPress
slug: limit-authors-and-contributors-to-their-own-post-in-wordpress
excerpt: This little code hack will help you to limit your authors and contributors to their own posts in WordPress admin. Copy and past the following code in you function.php file.
difficulty: beginners
publishedDate: "2016-07-24T19:52:36.000Z"
updatedDate: "2025-09-16T23:05:23.306Z"
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

If you running a multi-author site, you will notice that all authors and contributors are able to see the posts from other users. Although they cannot edit or modify, you may not want them to see the posts which are under review or in the draft.

You can do this by installing third-party WordPress plugin such as [View Own Post Media Only](https://wordpress.org/plugins/view-own-posts-media-only/). But for this little job, I personally do not recommend to use any plugins.

This little code hack will help you to limit your authors and contributors to their own posts in WordPress admin. Copy and past the following code in you function.php file.

if (current\_user\_can('contributor') || current\_user\_can('author')){
	add\_filter('parse\_query', 'filter\_my\_own\_posts\_query' );
}

function filter\_my\_own\_posts\_query( $wp\_query ) {
    if ( strpos( $\_SERVER\[ 'REQUEST\_URI' \], '/wp-admin/edit.php' ) !== false ) {
      global $current\_user;
      $wp\_query->set( 'author', $current\_user->id );
     }
}
