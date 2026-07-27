---
id: 39
title: WordPress Page Not Found 404 Page Template Sample
slug: wordpress-page-not-found-404-page-template-sample
excerpt: While you work hard to make sure that every link actually goes to a specific web page on…
difficulty: beginners
publishedDate: "2016-10-16T18:15:44.000Z"
updatedDate: "2025-09-16T23:05:21.929Z"
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

While you work hard to make sure that every link actually goes to a specific web page on your site, there is always a chance that a link clicked will slam dunk and become a famous 404 ERROR PAGE NOT FOUND.

All is not lost. If your visitors encounter an error, why not be a helpful WordPress site administrator and present them with a message more useful than “NOT FOUND”

### [![wordpress-404-error-page-template](/media/articles/63/WordPRess-404-error-page-template.png)](http://stacktips.com)  
404.php

```php
<?php get_header(); ?>

<div id="content-wrapper">
    <div class="container">

        <main role="main" class="primary no-sidebar">
            <!-- section -->
            <section id="content-inner">

                <!-- article -->
                <article id="post-404" class="post-404">
                    <div class="post-404">
                        <h1 class="errorCode"><?php _e('404', THEME_SLUG); ?></h1>
                        <h3 class="errorMsg"><?php _e('It seems we can&rsquo;t find the page you&rsquo;re looking for.<br> Perhaps searching can help.', THEME_SLUG); ?></h3>
                        <?php get_search_form(); ?>
                    </div>

                </article>
                <!-- /article -->

            </section>
            <!-- /section -->
        </main>

        <?php //get_sidebar(); ?>
    </div>
    <?php get_footer(); ?>
</div>
```
