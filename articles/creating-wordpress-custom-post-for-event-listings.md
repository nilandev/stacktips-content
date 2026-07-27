---
id: 156
title: Creating WordPress Custom Post for Event Listings
slug: creating-wordpress-custom-post-for-event-listings
excerpt: In the course of this tutorial, we will take a drive into building custom event calendar post type. Having an events calendar on your website is a way to publish all event specific information. Instead of tying your events to the post or page types, It is wise to create a custom post type “events” for all event listings.
difficulty: beginners
publishedDate: "2015-02-02T17:16:31.000Z"
updatedDate: "2025-09-16T23:05:28.087Z"
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

Of all the amazing virtues of WordPress, its amazing scalability stands right up there. A standard WordPress setup can be integrated with the most versatile and powerful features that give a website’s complete rein in the hands of the webmasters. The custom post types are among such customizations that go a long way in extending a website’s inbuilt features beyond their specifications.

## Why Custom Post Types?

The default WordPress CMS supports two types of post types, i.e. post or a page. Which means you are quite limited while publishing the dynamically changing content such as events, reviews etc.

So, you would need custom post type when you need a content structure on your website that facilitates posting very specific information about, let’s say, events, or images or for that matter, any other dynamic information.

Let’s say your business is selling mobile phones. You would require a CMS system that enables you to add new phone types, reviews, and other details specific to each phone. The default WordPress CMS is limited to provide such customization over your data. This is quite possible with custom post types, you can create a custom post type called “Phones” that allows you to include a specific content type for phones, without mixing it up with posts and pages.

In the course of this tutorial, we will take a drive into building custom event calendar post type. Having an events calendar on your website is a way to publish all event specific information. Instead of tying your events to the post or page types, It is wise to create a custom post type “events” for all event listings.

Let’s first begin by creating a post type by the name of the event, and this post type will occupy its own section in the admin panel:

## Create a Custom Post Type In WordPress

The following code snippet is used for a typical custom post type setup in WordPress. Now paste the following code snippet in your functions.php file, at the tail-end of the file, but before the closing PHP tag.

```php
add_action('init', 'events_init');

function events_init() {
	$args = array(
	'labels' => array(
	'name' => __('Events'),
	'singular_name' => __('Event'),
 ),

	'public' => true,
	'rewrite' => array("slug" => "events"),
	'supports' => array('thumbnail','editor','title','custom-fields')
);

	register_post_type( 'events' , $args );
}
```

### How it works:

1.  Creating custom post type needs some alterations to the core theme files of your WordPress setup. More precisely, we need to edit the functions.php file by adding the above code snippets.
2.  This code is basically instantiating certain properties and charting out rules for how URLs are managed and what are the features that the post-type is supporting.
3.  Once the above code is pasted in your `functions.php` file, you can reload the dashboard’s page and now, the event section will appear on the sidebar. The following screenshot depicts the same

[![Custom Event Post Type WordPress](/media/articles/212/Custom-Event-Post-Type-Wordpress-620x351.png)](http://stacktips.com)

## Create a New Event

Now, we can proceed with adding some events custom post types. A custom field by the name of ‘date’ can be created.

Let it be absolutely clear that the date we mention here should be specified through the custom fields otherwise, the default date will be taken, which happens to be the date at which the post is published. Also, make the necessary changes in the permalinks section of your admin panel since your theme needs to reconstruct the Permalink structure to accommodate the new custom post type.

[![Create New Event Type](/media/articles/212/Create-New-Event-Type.jpg)](http://stacktips.com)

## Create Events Listings Page

In the previous step, we have added events to our website and the next step is to create a page for listing these events. For this, we need to create a new page template that can be further added to the standard menu items of our theme.

To begin with, this, let us copy the `page.php` file of our theme, and rename it to `custom-events-template.php`.

Now, open this file and add the following code at the very beginning (basically, this code will intimate your WordPress setup that the template you are adding is exclusive and it will also select it from the drop-down list:

```php
<?php
/**
* Template Name: Events Page
*/
?>
```

Next, find the line that’s similar to this:

```php
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
```

and just before it, add this:

```php
<?php query_posts( 'post_type=events'); ?>
```

We have basically created a new query and put attributes on to it that make it our new event post type.

In order to use this new template, we will create a new page by any preferred name and then select the template from the page attributes box. Once the post is published, it will display the events list archive.

Now, let’s make another custom change via which the events can be displayed in the order of the date they are happening on, instead of the data on which the event got published. For the same, we can get our query replaced by the following code:

```php
<?php query_posts ( ' post_type=events&meta_key=date&orderby=meta_value&order=ASC'); ?>
```

It will also serve us well if we can get the date displayed within the post itself. For this, we can add the following code after the `the_content();` function in our template:

```php
<?php
$date = get_post_meta($post->ID, 'date', true);
if ($date){
  echo 'This event will be held on: '.$date;
}
?>
```

The following screenshot shows, how the events page will look like. Notice that the events are sorted by date order

[![Events List WordPress](/media/articles/212/Events-List-Wordpress.jpg)](http://stacktips.com)

So, that’s how easy the whole exercise is. You can enrich your WordPress features and take them beyond their default specifications with some minor tweaks to your theme files. Hope you find the above tutorial useful and if you have anything to add, do let us know in the comments below.
