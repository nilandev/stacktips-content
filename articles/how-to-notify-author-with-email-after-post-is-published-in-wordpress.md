---
id: 60
title: How to Notify Author with Email after Post Is Published in WordPress
slug: how-to-notify-author-with-email-after-post-is-published-in-wordpress
excerpt: If you have an multi-author Wordpress blog and you allow guest blogging, then your often need require to send an email notification when their post is reviewed and published. The following code snippet will help you to send an email to the post author after post is live. Just add the following to your theme function.php
difficulty: beginners
publishedDate: "2016-08-15T14:28:54.000Z"
updatedDate: "2025-09-16T23:05:22.757Z"
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

If you have a multi-author WordPress blog and you allow guest blogging, then your often need to send an email notification after you review and publish their post.

The following code snippet will help you to send an email to the post author after post is live. Just add the following snippets to your theme `function.php` file.

```php
add_action( 'transition_post_status', 'post_published_notification' , 10, 3 );
function post_published_notification($new_status, $old_status, $post ) {
    if ( 'publish' !== $new_status or 'publish' === $old_status)return;
	   
	   $author = $post->post_author;
	   $name = get_the_author_meta( 'display_name', $author );
	   $email = get_the_author_meta( 'user_email', $author );
	   
	   $post_title = $post->post_title;
	   $permalink = get_post_permalink($post);

	   $admin_email = get_option('admin_email');
	   $subject = 'Congratulations! Your article has been published!';
	   
	   $headers = "MIME-Version: 1.0" . "\r\n";
	   $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
	   $headers .= 'From: Stacktips <'. $admin_email . ">\r\n" . 'Reply-To: Stacktips <' . $admin_email . ">\r\n";
	   $message = <<<MESSAGE
<html><body>
<p>Dear {$name}!</p>
<p>Congratulations! Your article titled <strong>{$post_title}</strong> has been published on {$site_name}</p>
</body></html>
MESSAGE;
	wp_mail($email, $subject, $message, $headers);
}
```
