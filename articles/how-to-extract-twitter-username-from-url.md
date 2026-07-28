---
id: 40
title: How to Extract Twitter Username from Url
slug: how-to-extract-twitter-username-from-url
excerpt: The following PHP code snippet extracts the twitter username from twitter URL using regular expressions. For example, if…
difficulty: beginners
publishedDate: "2016-10-16T18:08:21.000Z"
updatedDate: "2025-09-16T23:05:22.008Z"
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

The following PHP code snippet extracts the twitter username from twitter URL using regular expressions. For example, if you pass the following url, it will output ‘**Stacktips**‘.

```
twitter.com/Stacktips
```

Snippet:

```php
if ( !function_exists( 'get_twitter_id_from_url' ) ){
	function get_twitter_id_from_url($url)
	{	
  	  if (preg_match("/^https?:\/\/(www\.)?twitter\.com\/(#!\/)?(?<name>[^\/]+)(\/\w+)*$/", $url, $regs)) {
  	    return $regs['name'];
  	  }
  	  return false;	  
  }
}
```
