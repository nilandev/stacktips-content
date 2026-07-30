---
id: 83
title: Sample env.rb File for Setting up Android Testing Using Appium and Ruby
slug: sample-env-rb-file-for-setting-up-android-testing-using-appium-and-ruby
excerpt: This env.rb file provides setup and common functionality across all features. It’s included first before every test run, and the methods provided here can be used in any of the step definitions used in a test. This is a great place to put shared data like the location of your app, the capabilities you want to test with, and the setup of selenium.
difficulty: beginners
publishedDate: "2016-07-04T11:45:52.000Z"
updatedDate: "2025-09-16T23:05:24.002Z"
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

This `env.rb` file provides setup and common functionality across all features. It’s included first before every test run, and the methods provided here can be used in any of the step definitions used in a test.

This is a great place to put shared data like the location of your app, the capabilities you want to test with, and the setup of selenium.

```ruby
require 'appium_lib'
require 'cucumber'
require 'require_all'

require_all 'lib'
class AppiumWorld
end

caps = {
  caps: {
    'platformName' => ENV['PLATFORM'],
    'platformVersion' => ENV['VERSION'],
    'deviceName' => ENV['DEVICE'],
    ENV['METHOD'] => ENV['METHOD'],
    'app' => ENV['APP_PATH'],
    'newCommandTimeout' => '200'
  }
}

Appium::Driver.new(caps)
Appium.promote_appium_methods AppiumWorld

World { AppiumWorld.new }

def app
  @app = AppBase.new($driver)
end

Before { $driver.start_driver }
After { $driver.driver_quit }
```
