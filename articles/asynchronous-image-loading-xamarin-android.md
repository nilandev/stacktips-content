---
id: 180
title: Asynchronous Image Loading in Xamarin Android
slug: asynchronous-image-loading-xamarin-android
excerpt: This tutorial explains how to download image asynchronously in Xamarin.Android. In this example, we will downloading image using…
difficulty: beginners
publishedDate: "2014-12-11T13:37:33.000Z"
updatedDate: "2025-09-16T23:05:29.123Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - xamarin-android
  - async-image-download
  - webclient-download-async
course: null
displayOrder: 0
seo: 
  metaTitle: "Asynchronous Image Loading in Xamarin.Android"
  metaDescription: "Learn how to download and display images asynchronously in Xamarin.Android using System.Net.WebClient, with a progress indicator and cancel support."
  metaKeywords: null
---

This tutorial explains how to download image asynchronously in Xamarin.Android. In this example, we will downloading image using `System.Net.WebClient` and while downloading, the application will show a loading progress indicator.

**System.Net.WebClient** class provides ability to send and download data from remote location. Check out class reference from [Official MSDN](http://msdn.microsoft.com/en-us/library/system.net.webclient\(v=vs.110\).aspx) API documentation.

[![Asynchronous Image Loading in Xamarin Android](/media/articles/238/Asynchronous-Image-Loading-in-Xamarin-Android.png)](http://stacktips.com)

Let us create a layout as shown in the image above

### Main.axml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:minWidth="25px"
    android:minHeight="25px"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:gravity="center_horizontal"
    android:orientation="vertical">

    <Button
        android:text="Download Image"
        android:id="@+id/downloadButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

    <LinearLayout
        android:minWidth="25px"
        android:minHeight="25px"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:id="@+id/progressLayout"
        android:gravity="center">

        <ProgressBar
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:id="@+id/progressBar1" />
        <TextView
            android:text="Loading.."
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:id="@+id/textView1"
            android:gravity="center" />
    </LinearLayout>

    <ImageView
        android:src="@android:drawable/ic_menu_gallery"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:id="@+id/imageView1" />
</LinearLayout>
```

### ImageViewExample.cs

```cs
using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Android.Graphics;
using System.Threading.Tasks;
using System.IO;
using System.Net;

namespace ImageViewExample
{
    [Activity (Label = "ImageViewExample", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {

        Button downloadButton;
        ImageView imageView;
        LinearLayout progressLayout;

        //Instance of webclient for async processing
        WebClient webClient;

        protected override void OnCreate (Bundle bundle){
            base.OnCreate (bundle);

            // Set our view from the "main" layout resource
            SetContentView (Resource.Layout.Main);

            this.imageView = FindViewById<ImageView> (Resource.Id.imageView1);
            //Hide progressbar initially
            this.progressLayout = FindViewById<LinearLayout> (Resource.Id.progressLayout);
            this.progressLayout.Visibility = ViewStates.Gone;

            // Get views from the layout resource axml file
            this.downloadButton = FindViewById<Button> (Resource.Id.downloadButton);
            downloadButton.Click += downloadAsync;
        }

        async void downloadAsync(object sender, System.EventArgs ea){
                  //Logic to download image and display on ImageView
        }

        void cancelDownload(object sender, System.EventArgs ea){
                 // Logic to cancel downlaod
        }
    }
}
```

## Downloading Image

In our activity, we have a button labelled “Download Image” is added with `downloadAsync` delegate. The downloadAsync method will contain the logic of download using WebClient, display progress bar, resize and store image locally. When user hits download button, the download starts and the button turns into “Cancel Download”. Below is the code snippet for downloadAsync method.

```cs
async void downloadAsync(object sender, System.EventArgs ea){
    webClient = new WebClient ();
    var url = new Uri ("http://doubletreebyhiltonsanjose.com/wp-content/uploads/2014/08/Dog-Pictures-1024x698.jpg");
    byte[] imageBytes = null;

    //Show loading progress
    this.progressLayout.Visibility = ViewStates.Visible;

    //Toggle button click listener to cancel the task
    this.downloadButton.Text = "Cancel Download";
    this.downloadButton.Click -= downloadAsync;
    this.downloadButton.Click += cancelDownload;

    try{
        imageBytes = await webClient.DownloadDataTaskAsync(url);
    } catch(TaskCanceledException){
        this.progressLayout.Visibility = ViewStates.Gone;
        return;
    } catch(Exception e){
        this.progressLayout.Visibility = ViewStates.Gone;

        this.downloadButton.Click -= cancelDownload;
        this.downloadButton.Click += downloadAsync;
        this.downloadButton.Text = "Download Image";
        return;
    }

    //Saving bitmap locally
    string documentsPath = System.Environment.GetFolderPath (System.Environment.SpecialFolder.Personal);
    string localFilename = "image.png";
    string localPath = System.IO.Path.Combine (documentsPath, localFilename);

    //Save the Image using writeAsync
    FileStream fs = new FileStream (localPath, FileMode.OpenOrCreate);
    await fs.WriteAsync (imageBytes, 0, imageBytes.Length);
    Console.WriteLine("Saving image in local path: "+localPath);

    //Close file connection
    fs.Close ();

    BitmapFactory.Options options = new BitmapFactory.Options ();
    options.InJustDecodeBounds = true;
    await BitmapFactory.DecodeFileAsync (localPath, options);

    //Resizing bitmap image
    options.InSampleSize = options.OutWidth > options.OutHeight ? options.OutHeight / imageView.Height : options.OutWidth / imageView.Width;
    options.InJustDecodeBounds = false;

    Bitmap bitmap = await BitmapFactory.DecodeFileAsync (localPath, options);
    imageView.SetImageBitmap (bitmap);

    //Hide progress bar layout
    this.progressLayout.Visibility = ViewStates.Gone;

    //Toggle button click listener
    this.downloadButton.Click -= cancelDownload;
    this.downloadButton.Click += downloadAsync;
    this.downloadButton.Text = "Download Image";
}
```

## Cancel Image Download

The `cancelDownload` delegate is added to button, when the user clicks on download button. This method contains the logic to cancel the download process.

```cs
void cancelDownload(object sender, System.EventArgs ea){
    if(webClient!=null)
        webClient.CancelAsync ();

    //Hide progressbar layout
    this.progressLayout.Visibility = ViewStates.Gone;

    //Toggle button click listener
    this.downloadButton.Click -= cancelDownload;
    this.downloadButton.Click += downloadAsync;
    this.downloadButton.Text = "Download Image";
}
```
