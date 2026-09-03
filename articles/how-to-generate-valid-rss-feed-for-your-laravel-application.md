---
id: 11
title: How to Generate a Valid RSS Feed for Your Laravel Application?
slug: how-to-generate-valid-rss-feed-for-your-laravel-application
excerpt: Feeds are one of the traditional and most effective ways to distribute your content to a wider audience.…
difficulty: beginners
publishedDate: "2017-05-18T17:54:52.000Z"
updatedDate: "2025-09-16T23:05:21.443Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - blog
tags:
  - laravel
  - rss-feed
  - xml-feed
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Generate a Valid RSS Feed for Laravel"
  metaDescription: "Learn how to add RSS and Atom feeds to a Laravel application using the roumen/feed package, with routes, config, and a FeedBuilder service."
  metaKeywords: null
---

Feeds are one of the traditional and most effective ways to distribute your content to a wider audience. There are thousands of apps, such as Feedly, Apple News, and Google Newsstand, that allow people to follow and read your content whenever new content is published.

Feeds allow webmasters to drive traffic to their websites. Some feed delivery platforms, such as Google FeedBurner, allow you to monetize your feed content by serving ads.

## Generate an RSS Feed in Laravel

According to web standards, there are different feed formats that are widely accepted. RSS and Atom are the most popular ones. Feeds are XML-based; however, they differ in specifications.

To make our lives easier, we will generate valid RSS and Atom feeds using the [roumen/feed](https://github.com/RoumenDamianoff/laravel-feed) open-source Laravel library. In this article, we assume you have a basic knowledge of Laravel and have a project handy to integrate with.

### Adding roumen/feed via Composer

Laravel project dependencies are maintained using [Composer](/articles/intro-to-laravel-php-framework-and-features). We can add the roumen/feed dependency library using the following Artisan command:

```bash
composer require roumen/feed
```

Or add the following to your `composer.json` file:

```json
"roumen/feed": "~2.10"
```

Please note, after updating the `composer.json` file, run the `composer install` command to add the dependency to your project.

Now, register the `Roumen\Feed\FeedServiceProvider` service provider and class alias in your Laravel `config/app.php` file.

```php
<?php
return [
     //...
    'providers' => [
        //...
        Roumen\Feed\FeedServiceProvider::class,
    ],

    'aliases' => [
    //...
        'Feed'      => Roumen\Feed\Feed::class,
    ],
];
```

Optionally, if you want to alter the Blade layouts, you can publish vendor views using the following Artisan command:

```bash
artisan vendor:publish --provider="Roumen\Feed\FeedServiceProvider"
```

### Eloquent Models

This tutorial's scope is limited to generating an RSS feed, and hence we won't cover Eloquent models and database concepts.

The following code snippets of the Post and User models are illustrated just to give an idea of how the data in the database is stored.

```php
<?php
namespace App\Models;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    public $timestamps = TRUE;
    protected $fillable = [
        'id',
        'user_id',
        "title",
        'content',
        "excerpt",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Let us now see what the User model looks like.

```php
<?php
namespace App;
use App\Models\Post;

class User extends Authenticatable
{
    protected $table = 'users';
    use Notifiable;
    protected $fillable = [
        'id',
        'fname',
        'lname',
        'email',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function post()
    {
        return $this->hasMany(Post::class);
    }
}
```

Notice that in the above relationship, we have an inverse one-to-many relationship between Post and User. A user can have multiple posts, and a post can be associated with one user.

### Routes for Feed

Here is what our routes for posts look like:

```php
#Post archive
Route::get('posts/', ['as' => 'post.archive', 'uses' => 'PostController@archive']);
#Single
Route::get('post/{id}/{slug?}', ['as' => 'post.single', 'uses' => 'PostController@single']);
```

### Feed Configuration

We would like to have some of the feed configurations inside a config file. Create a new file named `feed.php` inside the `config/` directory and add the following snippet:

```php
<?php
return [
    'feed_title' => "Stacktips",
    'feed_description' => 'Your description',
    'feed_logo' => 'http://example.com/images/brand/logo.png',
    'use_cache' => FALSE,
    'cache_key' => 'laravel-feed-cache-key',
    'cache_duration' => 3600,
    'max_size' => 30,
];
```

In this example, we have configured the feed to serve 30 items. There is no strict rule on how many items you should serve, but it is recommended to keep your feed sleek. I believe between 20 and 30 is a good number.

### Laravel Routes for Feed

Let us now define routes for RSS feeds. Here, we will define two routes: one for accessing the Atom feed and the other for RSS.

```php
# Feeds
Route::get('feed/{type?}', ['as' => 'feed.atom', 'uses' => 'Feed\FeedsController@getFeed']);
```

I personally believe in simplicity, so let us define a `getFeed()` method in the controller and abstract most of the business logic into a service class.

### Feed Controller

```php
<?php

namespace App\Http\Controllers\Web\Feed;

use App\Http\Controllers\Controller;
use App\Services\Feed\FeedBuilder;

class FeedsController extends Controller
{
    private $builder;

    public function __construct(FeedBuilder $builder)
    {
        $this->builder = $builder;
    }

    //We're making atom default type
    public function getFeed($type = "atom")
    {
        if ($type === "rss" || $type === "atom") {
            return $this->builder->render($type);
        }

        //If invalid feed requested, redirect home
        return redirect()->home();
    }
}
```

Note that:

-   The feed route defines an optional parameter `type`. This is used to define what type of feed the user wants to access.
-   Currently, we will support only RSS and Atom, and make Atom the default choice.
-   If the user passes an invalid value for the feed type, instead of showing an error page, we will redirect to the home page.

### FeedBuilder Service

The next part is where the real fun is. Here, we make use of the roumen/feed library APIs to serve the latest content in the feed.

```php
<?php
namespace App\Services\Feed;

use Illuminate\Support\Facades\App;
use App\Models\Post;

class FeedBuilder
{
    private $config;

    public function __construct()
    {
        $this->config = config()->get('feed');
    }

    public function render($type)
    {
        $feed = App::make("feed");
        if ($this->config['use_cache']) {
            $feed->setCache($this->config['cache_duration'], $this->config['cache_key']);
        }

        if (!$feed->isCached()) {
            $posts = $this->getFeedData();
            $feed->title = $this->config['feed_title'];
            $feed->description = $this->config['feed_description'];
            $feed->logo = $this->config['feed_logo'];
            $feed->link = url('feed');
            $feed->setDateFormat('datetime');
            $feed->lang = 'en';
            $feed->setShortening(true);
            $feed->setTextLimit(250);

            if (!empty($posts)) {
                $feed->pubdate = $posts[0]->created_at;
                foreach ($posts as $post) {
                    $link = route('post.single', ["id" => $post->id, "slug" => $post->slug]);

                    $author = "";
                    if(!empty($post->user)){
                        $author = $post->user->name;
                    }
                    // set item's title, author, url, pubdate, description, content, enclosure (optional)*
                    $feed->add($post->title, $author, $link, $post->created_at, $post->pitch, $post->about);
                }
            }
        }

        return $feed->render($type);
    }

    /**
     * Creating an RSS feed with our most recent posts.
     * The size of the feed is defined in feed.php config.
     *
     * @return mixed
     */
    private function getFeedData()
    {
        $maxSize = $this->config['max_size'];
        $posts = Post::paginate($maxSize)->with['user'];
        return $posts;
    }
}
```

Notice that if you have multiple feeds for different content, you must have different cache keys.

Now visit any of the following URLs and test if your feeds are working:

http://localhost:8080/feed  
http://localhost:8080/feed/atom  
http://localhost:8080/feed/rss
