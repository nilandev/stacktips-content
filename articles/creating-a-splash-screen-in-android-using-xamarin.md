---
id: 183
title: Creating a Splash Screen in Android Using Xamarin
slug: creating-a-splash-screen-in-android-using-xamarin
excerpt: In this article, we take a look into creating a splash screen in Android using Xamarin. A splash…
difficulty: beginners
publishedDate: "2014-11-12T09:02:17.000Z"
updatedDate: "2025-09-16T23:05:29.298Z"
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

In this article, we take a look into creating a splash screen in Android using Xamarin. A splash screen is non different than other screens, that indicates the loading of resources/data for application. Usually most of the real time application have a splash screen as the first screen to show when application starts, and it is automatically goes off once app is fully loaded.

All you have to do is to define your activity theme style inside `Resources/values/Styles.xml` file. If you take a look into below style attributes, they are self explanatory. The `android:windowBackground` attributes takes the link to splash image.

### Styles.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<resources>
  <style name="Theme.SplashActivity" parent="android:Theme.Holo.Light.NoActionBar">
    <item name="android:windowBackground">@drawable/ic_splash_logo</item>
  </style>
</resources>
```

### SplashActivity.cs

Now let us create a new Activity for splash screen. In this example, we have named it as SplashActivity, and paste the below code.

```vb
namespace MyApplication
{
    using System.Threading;
    using Android.App;
    using Android.OS;

    [Activity (Label = "SplashScreen", MainLauncher=true, NoHistory=true, Theme="@style/Theme.SplashActivity")]
    public class SplashActivity : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Wait for 2 seconds
            Thread.Sleep(2000); 

            //Moving to next activity
            StartActivity(typeof(MainActivity));
        }
    }
}
```

In the above code we have specified `[Activity]` attribute with following properties

1.  **MainLauncher** – This specifies that the activity is a launcher activity and will start automatically when application is launched
2.  **Theme** – This specifies the custom theme to android activity
3.  **NoHistory** – By default Android application maintain back stack of all activities. When user moves from ActivityA to ActivityB, and presses device back button from ActivityB, android system automatically shows to ActivityA. In case of splash screen, once application is loaded, we are not welling to display splash screen again at any point of time. Hence, we must ask android system to explicitely, not to add SplashActivity into backstack. This can be done by using `NoHistory = true` argument. .

A typical android application Splash screen will perform the loading activity. As this is an example we are just using `Thread.Sleep(milliseconds)` to create a delay.
