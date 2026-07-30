---
id: 243
title: Action Bar Tabs Example in Xamarin
slug: action-bar-tabs-example-in-xamarin
excerpt: This example explains “How to create Action Bar Tabs in Xamarin.Android”. This example uses Fragment in combination with…
difficulty: beginners
publishedDate: "2014-05-07T07:50:37.000Z"
updatedDate: "2025-09-16T23:05:32.121Z"
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

This example explains “How to create Action Bar Tabs in Xamarin.Android”.

This example uses Fragment in combination with the action bar for tab navigation. We can add a new tab to the action bar by calling newTab() method.

The following code shows an activity with two tabs “Audio” and “Video”. It uses dummy fragments as content. The Action Bar includes support for adding tabbed interfaces in Android 4.0.

## Activity Layout class (Main.xml)

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent">
    <FrameLayout
        android:id="@+id/fragmentContainer"
        android:layout_width="match_parent"
        android:layout_height="0dip"
        android:layout_weight="1" />
</LinearLayout>
```

## Your Activity class

```cs
using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace ActionBarTabsExample
{
    [Activity (Label = "ActionBar Tabs Example", MainLauncher = true)]
    public class Activity1 : Activity
    {
        protected override void OnCreate (Bundle bundle)
        {
            base.OnCreate (bundle);

            // Set our view from the "main" layout resource
            SetContentView (Resource.Layout.Main);

        //enable navigation mode to support tab layout
            this.ActionBar.NavigationMode = ActionBarNavigationMode.Tabs;

        //adding audio tab
        AddTab ("Audio", Resource.Drawable.Icon,  new AudioFragment());

        //adding video tab
            AddTab ("Video", Resource.Drawable.Icon,  new VideoFragment());
        }

        /*
         * This method is used to create and add dynamic tab view
         * @Param,
         *  tabText: title to be displayed in tab
         *  iconResourceId: image/resource id
         *  fragment: fragment reference
         *
        */
        void AddTab (string tabText, int iconResourceId, Fragment fragment)
        {
            var tab = this.ActionBar.NewTab ();
            tab.SetText (tabText);
            tab.SetIcon (iconResourceId);

            // must set event handler for replacing tabs tab
            tab.TabSelected += delegate(object sender, ActionBar.TabEventArgs e) {
                e.FragmentTransaction.Replace(Resource.Id.fragmentContainer, fragment);
            };

            this.ActionBar.AddTab (tab);
        }

    }
}
```

## Your fragment layout

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/textView"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:textStyle="bold"
    android:textSize="16dp"
    android:background="#ffe3e1e1"
    android:textColor="#ff393939" />
```

## AudioFragment class

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

namespace ActionBarTabsExample
{
    class AudioFragment: Fragment
    {
        public override View OnCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            base.OnCreateView (inflater, container, savedInstanceState);

            var view = inflater.Inflate (Resource.Layout.Tab, container, false);
            var sampleTextView = view.FindViewById<TextView> (Resource.Id.textView);
            sampleTextView.Text = "This is Audio Fragment Sample";
            return view;
        }
    }
}
```

## VideoFragment class

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Util;
using Android.Views;
using Android.Widget;

namespace ActionBarTabsExample
{
    class VideoFragment: Fragment
    {
        public override View OnCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            base.OnCreateView (inflater, container, savedInstanceState);

            var view = inflater.Inflate (Resource.Layout.Tab, container, false);
            var sampleTextView = view.FindViewById<TextView> (Resource.Id.textView);
            sampleTextView.Text = "This is Video Fragment Sample";

            return view;
        }
}
}
```

## Output

[![Action Bar Tabs example in Xamarin](/media/articles/313/Action-Bar-Tabs-example-in-Xamarin.png)](http://stacktips.com)
