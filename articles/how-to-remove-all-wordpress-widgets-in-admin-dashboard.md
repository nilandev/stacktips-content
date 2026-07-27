---
id: 69
title: How to Remove all WordPress Widgets in Admin Dashboard
slug: how-to-remove-all-wordpress-widgets-in-admin-dashboard
excerpt: In this video tutorial, we will see how to remove all widgets from WordPress Dashboard. When you logged into your WordPress dashboard, you will notice several widgets such as Activity Stream, WordPress News, Quick Draft and few others widgets based on user role.
difficulty: beginners
publishedDate: "2016-07-31T23:24:36.000Z"
updatedDate: "2025-09-16T23:05:23.226Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this video tutorial, we will see how to remove all widgets from your WordPress Dashboard. When you log in to your WordPress website admin dashboard, you will notice several widgets such as Activity Stream, WordPress News, Quick Draft and few others widgets based on user role.

Sometimes Widgets are very useful but, if you want to remove them, then this little hack will help you. You can remove those widgets either by using our [Smart Dashboard Extras](https://wordpress.org/plugins/smart-dashboard-extras/) WordPress Plugin or you can directly use the PHP code snippet.

### Using Smart Dashboard Extras WordPress Plugin

You may install the plugin directly via the built-in WordPress plugin installer or using the FTP method. If you use FTP method, you first need to download Plugin form WordPress plugin directory.

1.  Once downloaded, Unzip `st-smart-dashboard-extras.zip` inside the `/wp-content/plugins/`directory for your site
2.  Activate the plugin through the \\’Plugins\\’ admin menu in WordPress
3.  Click on the “Smart Dashboard Extra” menu item in your WordPress dashboard to customize the plugin settings.
4.  Select “Remove all WordPress Dashboard Widgets” from Dashboard Customisation settings tab and click “Save Changes” button.

### Remove all WordPress Widgets for non Admin

Or if you’re familiar with php code, you can directly add the following code snippets to your `functions.php` file.

```php
//Remove Dashboard Metabox Widgets for all users except Admin
add_action('wp_dashboard_setup', 'stsd_remove_dashboard_widget' );
function stsd_remove_dashboard_widget() {
	if (!current_user_can('manage_options')){
		global $wp_meta_boxes;
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);		
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
	}
} 
```

The above code snippet, removes all of the default WordPress widgets for users other then administrators.
