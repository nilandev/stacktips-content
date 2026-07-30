---
id: 244
title: ShareActionProvider Example in Xamarin.Android
slug: shareactionprovider-example-in-xamarin-android
excerpt: This example explains how to implement “share action in your action bar using ShareActionProvider class”. ActionProvider is made available since Android 4.0 (API Level 14). An ActionProvider, once attached to a menu item in the action bar, handles both the appearance and behavior of that item
difficulty: beginners
publishedDate: "2014-05-05T08:24:29.000Z"
updatedDate: "2025-09-16T23:05:32.187Z"
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

This example explains how to implement “share action in your action bar using ShareActionProvider class”. `ActionProvider` is made available since Android 4.0 (API Level 14). An ActionProvider, once attached to a menu item in the action bar, handles both the appearance and behavior of that item. In the case of ShareActionProvider, you provide a share intent and it does the rest.

## Specifying the action Provider Class

To use the ShareActionProvider, set the `android:actionProviderClass` attribute on a menu item in the XML for the Action Bar’s menu.

```xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:id="@+id/shareMenu"
      android:showAsAction="always"
      android:title="Share"
      android:actionProviderClass="android.widget.ShareActionProvider" />
</menu>
```

## Your activity class

```csharp
using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace ShareActionProviderExample
{
    [Activity (Label = "ShareActionProviderExample", MainLauncher = true)]
    public class MainActivity : Activity
    {
        protected override void OnCreate (Bundle bundle)
        {
            base.OnCreate (bundle);

            TextView tv = new TextView (this);
            tv.Text = "This is an ShareActionProvider Example";
            tv.SetPadding (20, 20, 20, 20);

            // Set our view from the "main" layout resource
            SetContentView (tv);
        }

        public override bool OnCreateOptionsMenu (IMenu menu) {

            MenuInflater.Inflate (Resource.Menu.MainMenu, menu);

            var shareMenuItem = menu.FindItem (Resource.Id.shareMenu);
            var shareActionProvider =
                (ShareActionProvider)shareMenuItem.ActionProvider;
            shareActionProvider.SetShareIntent (CreateIntent ());

            return true;
        }

        Intent CreateIntent () {
            var sendPictureIntent = new Intent (Intent.ActionSend);
            sendPictureIntent.SetType ("image/*");
            var uri = Android.Net.Uri.FromFile (GetFileStreamPath ("image.png"));
            sendPictureIntent.PutExtra (Intent.ExtraStream, uri);
            return sendPictureIntent;
        }
    }
}
```

## Output

[![ShareActionProvider Example in Xamarin](/media/articles/314/ShareActionProvider-Example-in-Xamarin-620x435.png)](http://stacktips.com)
