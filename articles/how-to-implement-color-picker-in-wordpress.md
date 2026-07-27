---
id: 165
title: How to Implement Color Picker in WordPress?
slug: how-to-implement-color-picker-in-wordpress
excerpt: WordPress has been offering a great platform to its users. It’s a clean and easy-to-use back end always…
difficulty: beginners
publishedDate: "2015-01-23T13:17:15.000Z"
updatedDate: "2025-09-16T23:05:28.509Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

WordPress has been offering a great platform to its users. It’s a clean and easy-to-use back end always kept it on top in the list of CMSs. The simple reason behind WordPress popularity is the ease it provides to manage the website in your own way. Also, you will be amazed to see the customization options that WordPress offers.

Most of the WordPress website owners often prefer adding custom features to add personal touches to their dashboard. For users, who spend a substantial amount of time in the admin area, changing colors can bring a refreshing experience to the way they work.

Changing colors for different admin areas like the posts categories, front-end background etc., isn’t a new concept. Of course, you can do so by simply adding a custom CSS field. But, let’s face it! Not all of us are good at CSS. Fortunately, WordPress 3.5 introduced a new “Color Picker”, making it easy for you to change the color scheme with just a click of a button.

This post is about using a color picker to implement the option for changing the background color (in the form of CSS3 gradients) of your posts on the front end.

## How to Create a Custom MetaBox With Color Picker?

In the course of this tutorial, we will take a look into step by step approach to implement color picker in a meta box. Follow the steps given below and add the following code snippets to your functions files that will add meta box in your WordPress post screen with color picker field.

### Step 1 – Register Custom Metabox

```php
function wdm_add_meta_box() {
	add_meta_box('wdm_sectionid', 'Post Background', 'wdm_meta_box_callback', 'post');
}
```

This code will register our custom meta box. It contains a default WordPress function: add\_meta\_box() that takes some parameters to tell WordPress about the meta box:

1.  wdm\_sectionid: HTML ‘id’ attribute of the edit screen
2.  Post Background: Title of the edit screen
3.  wdm\_meta\_box\_callback: This is a function that prints out the HTML for the edit screen.
4.  post: This argument determines that the meta box will appear on your post editor screen. You can use replace it with ‘page’ if you want to use the meta box on the page screen.

### Step 2 – Creating Custom Metabox

```php
add_action( 'add_meta_boxes', 'wdm_add_meta_box' );

function wdm_meta_box_callback( $post ) {
	wp_nonce_field( 'wdm_meta_box', 'wdm_meta_box_nonce' );
	$color = get_post_meta( $post->ID, 'post_bg', true );
	<div class="custom_meta_box">
	<p>
	<label>Select Post Background Color: </label>
	<input class="color-field" type="text" name="post_bg" value="<?php echo '#'.$color; ?>"/>
	</p>
	<div class="clear"></div> 
	</div> 
}
```

This part of the code will create a custom function wdm\_meta\_box\_callback( $post ) that helps to generate the output of the metabox. And the add\_action( ‘add\_meta\_boxes’, ‘wdm\_add\_meta\_box’ ) function is a WordPress action hook that tells WordPress to add metabox.

### Step 3 – Saving Metabox Values

```php
function wdm_save_meta_box_data( $post_id ) {
	if ( !isset( $_POST['wdm_meta_box_nonce'] ) ) {
		return;
	}

	if ( !wp_verify_nonce( $_POST['wdm_meta_box_nonce'], 'wdm_meta_box' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( !current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	
	$post_bg = ( isset( $_POST['post_bg'] ) ? sanitize_html_class( $_POST['post_bg'] ) : '' );
	update_post_meta( $post_id, 'post_bg', $post_bg );
}
add_action( 'save_post', 'wdm_save_meta_box_data' );
```

The wdm\_save\_meta\_box\_data($posy\_id) function is used to save the metabox value to WordPress database.

For doing so, it requires ‘post id’ that save that meta box field value on the particular post meta session in the database. The add\_action (‘save\_post’, ‘wdm\_save\_meta\_box\_data’ ) is a hook that tells WordPress to save the post with meta value.

Now that you’ve come to know how the code works, you would like to see the outcome. The above code generates the input filed with the name “Post background color”, as you can see in the below screenshot.

## How to Use Color Picker?

Although the meta box with the color picker is created, you still can’t use the color picker. In order to use it, copy and paste the below code in your theme’s functions.php file:

```php
function wpse_80236_Colorpicker(){
	wp_enqueue_style( 'wp-color-picker');
	//
	wp_enqueue_script( 'wp-color-picker');
}
add_action('admin_enqueue_scripts', 'wpse_80236_Colorpicker');
```

**Note**: As we had discussed previously, Color Picker API was introduced with WordPress version 3.5, and so if you want to use this function then make sure that your website is running on WordPress version 3.5 or later.

Next, paste the below script code inside your wdm\_meta\_box\_callback( $post ) function to generate the metabox.

```php
<script>
(function( $ ) {
	// Add Color Picker to all inputs that have 'color-field' class
	$(function() {
	$('.color-field').wpColorPicker();
	});
})( jQuery );
</script>
```

Once this script is executed, the “Color Picker” will be visible in your WordPress website admin panel.

If you need to get color code ID’s, simply add the following line of code in your functions.php file.

```php
$post_background = get_post_meta( get_the_ID(), 'post_bg', true );
echo $post_background // here is your color code
```

That’s it! The color picker will be implemented into your meta box in your website backend. You can add the color picker to any other area in your admin panel following the same approach as we had discussed above.
