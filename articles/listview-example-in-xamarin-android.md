---
id: 176
title: ListView Example in Xamarin.Android
slug: listview-example-in-xamarin-android
excerpt: This post will walk you through crating a custom ListView in Xamarin.Android using list adapter. ListView is one…
difficulty: beginners
publishedDate: "2014-12-23T05:21:17.000Z"
updatedDate: "2025-09-16T23:05:28.919Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - xamarin-android-listview
  - xamarin-baseadapter-example
  - custom-listview-adapter-xamarin
  - listview-itemclick-xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This post will walk you through crating a custom ListView in Xamarin.Android using list adapter.

ListView is one of the most common UI pattern, used extensively to display collection of data elements in rows. Android ListView is a view group that displays a list of scrollable items.

The list items are automatically inserted to the list using an Adapter that pulls content from a source such as an array. Find out more about android `ListView` and `ListAdapters` from Android ListView Tutorial.

Following are the steps involved in using ListView in your application

1.  Declare ListView layout
2.  Declare list row layout
3.  Define ListView Adapter
4.  Setting ListView Adapter
5.  Handle list click event

# 1. Declare ListView layout

Before using list in your application, you first need to declare its layout inside your activity or fragment. For the sake of simplicity, in the below code snippet, we have declared ListView inside activity layout file.

#### ListActivity.axml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent">
    <ListView
        android:minWidth="25px"
        android:minHeight="25px"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/ListView" />
</LinearLayout>
```

The property `android:id="@+id/IntentoryList"` in the above code snippet is the id assigned to ListView. This id will be used to initialize this from activity cs file.

# 2. Declare list row layout

In the above step we have declared ListView layout. Now it is the time to define the layout for list row item. This layout will be used by list adapter.

#### ListItemRow.axml

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:minHeight="50dp"
    android:orientation="horizontal">
    <ImageView
        android:id="@+id/Thumbnail"
        android:layout_width="70dp"
        android:layout_height="70dp"
        android:paddingLeft="10dp"
        android:layout_alignParentLeft="true"
        android:layout_centerVertical="true"
        android:src="@drawable/Placeholder" />
    <TextView
        android:id="@+id/Title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/Thumbnail"
        android:lineSpacingExtra="3dp"
        android:paddingLeft="10dp"
        android:paddingTop="5dp"
        android:textColor="#ffffff"
        android:textStyle="bold"
        android:typeface="sans" />
    <TextView
        android:id="@+id/Description"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/Title"
        android:layout_toRightOf="@id/Thumbnail"
        android:paddingLeft="10dp"
        android:paddingTop="5dp"
        android:textColor="#fff"
        android:textSize="11sp" />
</RelativeLayout>
```

# 3. Define ListView Adapter

Adapter is a tricky part while creating ListView. BaseAdapter is a common Adapter that can be used in both ListView, GridView or Spinners. An adapter takes list of data objects as input, and each object in the list is mapped to a list row. Adapter also inflates the layout to be rendered for each row items.

In our example, `CusotmListAdapter` takes list of Post objects. The structure of Post class as described below.

```csharp
public class Post
{
    public string url { get; set; }
    public string title { get; set; }
    public string description { get; set; }
}
```

The post class contains three fields; a url, title and a description. In this example we will not cover much on how to get the data source, you may hardcode or write some logic to download data form server. Now lets move to our list adapter implementation.

```csharp
public class CusotmListAdapter : BaseAdapter<Post>
{
    Activity context;
    List<Post> list;

    public CusotmListAdapter (Activity _context, List<Post> _list)
        :base()
    {
        this.context = _context;
        this.list = _list;
    }

    public override int Count {
        get { return list.Count; }
    }

    public override long GetItemId (int position)
    {
        return position;
    }

    public override Post this[int index] {
        get { return list [index]; }
    }

    public override View GetView (int position, View convertView, ViewGroup parent)
    {
        View view = convertView;

        // re-use an existing view, if one is available
        // otherwise create a new one
        if (view == null)
            view = context.LayoutInflater.Inflate (Resource.Layout.ListRowLayout, parent, false);

        Post item = this [position];
        view.FindViewById<TextView> (Resource.Id.Title).Text = item.title;
        view.FindViewById<TextView>(Resource.Id.Description).Text = item.description;

        using (var imageView = view.FindViewById<ImageView> (Resource.Id.Thumbnail)) {
            string url = Android.Text.Html.FromHtml (item.thumbnail).ToString ();

            //Download and display image
            Koush.UrlImageViewHelper.SetUrlDrawable (imageView,
                url, Resource.Drawable.Placeholder);
        }
        return view;
    }
}
```

1.  You must override the Count, GetItemId and GetView method in your BaseAdapter class implementation. The `Count` method indicates the total number of rows in the list, `GetItemId` represent a unique id for reach item in the list. `GetView` inflates layout for each list row and render on the screen.
2.  In this example, we have used [UrlImageViewHelper](http://components.xamarin.com/gettingstarted/urlimageviewhelper) component. You may download the same form component store and add to your project.

# 4. Setting ListView Adapter

Once your list adapter is ready, then you are almost done with your ListView implementation. Now all you need to do is to instantiate the adapter and setting to ListView.

```csharp
//Initializing listview
listView = FindViewById (Resource.Id.feedList);
listView.ItemClick += OnListItemClick;
listView.Adapter = new CusotmListAdapter(this, listData);
```

You can handle ListView click event by adding `ItemClick` callback.

```csharp
void OnListItemClick(object sender, AdapterView.ItemClickEventArgs e) {
    Post item = result.posts.ElementAt (e.Position);
    // Do whatever you like here
}
```
