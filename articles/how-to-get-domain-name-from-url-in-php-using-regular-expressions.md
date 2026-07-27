---
id: 41
title: Get Domain Name from URL in PHP Using Regular Expressions
slug: how-to-get-domain-name-from-url-in-php-using-regular-expressions
excerpt: The following PHP code snippet extracts the domain name from long URL using regular expressions. For example, if…
difficulty: beginners
publishedDate: "2016-10-16T18:04:22.000Z"
updatedDate: "2025-09-16T23:05:22.047Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - ios
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following PHP code snippet extracts the domain name from long URL using regular expressions. For example, if you pass the following url, it will output stacktips.com.

http://stacktips.com/articles/drupal-vs-wordpress-which-one-to-choose

Snippet:

```php
//Custom method to get domain name from url
function get_domain_from_url($url)
{
  $pieces = parse_url($url);
  $domain = isset($pieces['host']) ? $pieces['host'] : '';
  if (preg_match('/(?P<domain>[a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})$/i', $domain, $regs)) {
    return $regs['domain'];
  }
  return '';
}

```
