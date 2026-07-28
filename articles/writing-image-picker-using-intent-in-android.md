---
id: 322
title: Image Picker Using Intent.ACTION_PICK in Android
slug: writing-image-picker-using-intent-in-android
excerpt: Android supports seamless integration of applications and content providers. Lot many things are handy provided to developers, which…
difficulty: beginners
publishedDate: "2013-07-05T13:49:24.000Z"
updatedDate: "2025-09-16T23:05:36.213Z"
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

Android supports seamless integration of applications and content providers. Lot many things are handy provided to developers, which helps in reducing the code and consumes less time to integrate different features to app.

For example, if we have an application that allow user to change his profile picture. In this requirement user will be welling to browse his mobile gallery and pick a picture of his own to set his profile picture. Integrating this feature in traditional operating system, need lot of effort write code to integrate file browser. But in android we can use `Intent.ACTION_PICK` action to get this feature integrated in not more than five minutes.

# What is intent in android?

Intent is an abstract description of an operation to be performed. It can be used with `startActivity` to launch an Activity, broadcastIntent to send it to any interested BroadcastReceiver components, and `startService(Intent)` or `bindService(Intent, ServiceConnection, int)` to communicate with a background Service.

Intent provides a facility for performing late run-time binding between the codes in different applications. Its most significant use is in the launching of activities, where it can be thought of as the glue between activities. It is basically a passive data structure holding an abstract description of an action to be performed.

# Writing image picker using Intent.ACTION\_PICK in android

`Intent.ACTION_PICK` action is in buit in android and helps to pick an image item from a data source. We just need to provide the URI of the provider. Almost all core android applications (eg. Messaging, Gallery, Contacts etc) provide this facility. All you need is to set the intent action and the data.

**action** – tells what to perform, such as `ACTION_VIEW`, `ACTION_EDIT`, `ACTION_MAIN`, etc.  
**data**– data needed to operate the action. It is expressed as uri. Example such as a person record in the contacts database. Some examples of action/data pairs are:

ACTION\_VIEW content://contacts/people/1 — Display information about the person whose identifier is “1”.  
ACTION\_DIAL content://contacts/people/1 — Display the phone dialer with the person filled in.  
ACTION\_VIEW tel:123 — Display the phone dialer with the given number filled in. Note how the VIEW action does what what is considered the most reasonable thing for a particular URI.  
ACTION\_DIAL tel:123 — Display the phone dialer with the given number filled in.

There are also some more additional attributes. Visit the below llink for more details

**[http://developer.android.com/reference/android/content/Intent.html](http://developer.android.com/reference/android/content/Intent.html "developer.android.com")**

## Creating layout Code Snippet

As you can see in the screenshot below, my example is using simple LinearLayout with a ImageView and a button aligned to vertical orientation. You may have some complex layout as per your needs.

```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical"
    tools:context=".ImagePickerActivity" >

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:maxHeight="200dp"
        android:src="@drawable/ic_launcher" />

    <Button
        android:id="@+id/btn_pick"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_marginTop="20dp"
        android:text="@string/change_image" />

</LinearLayout>
```

## Activity class Code Snippet

Below is my activity class using `Intent.ACTION_PICK` action

```
package com.javatechig.filepicker;

import java.io.FileNotFoundException;
import java.io.InputStream;
import android.net.Uri;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ImageView;

public class ImagePickerActivity extends Activity {

	private final int SELECT_PHOTO = 1;
	private ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_image_picker);

        imageView = (ImageView)findViewById(R.id.imageView);

        Button pickImage = (Button) findViewById(R.id.btn_pick);
        pickImage.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View view) {				
				Intent photoPickerIntent = new Intent(Intent.ACTION_PICK);
				photoPickerIntent.setType("image/*");
				startActivityForResult(photoPickerIntent, SELECT_PHOTO);
			}
		});
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent imageReturnedIntent) { 
        super.onActivityResult(requestCode, resultCode, imageReturnedIntent); 

        switch(requestCode) { 
        case SELECT_PHOTO:
            if(resultCode == RESULT_OK){
				try {
					final Uri imageUri = imageReturnedIntent.getData();
					final InputStream imageStream = getContentResolver().openInputStream(imageUri);
					final Bitmap selectedImage = BitmapFactory.decodeStream(imageStream);
					imageView.setImageBitmap(selectedImage);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				}

            }
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        return true;
    }    
}
```

As you can see the code snippet used is pretty simple. Here in this example, I am handling button click event and their Image picker using `Intent.ACTION_PICK` has been called. `setType()` method is used to define the file filter criteria. This will invoke the default gallery and user will be able to select an image.

Once image is selected, the result will be back to our main activity, and the result will be returned to `onActivityResult()` method. Here we are receiving the selected image Uri. Once we have the uri, we can convert them to `Bitmap` and then display it on `ImageView`. Below coded snippet is used to get the image from the Uri and convert into bitmap.

```
InputStream imageStream = getContentResolver().openInputStream(imageUri);
Bitmap selectedImage = BitmapFactory.decodeStream(imageStream);
```

And now we are done.

## Output of the above code is below

[![image picker example in anroid](/media/articles/416/image-picker-example-in-anroid-javatechig.png)](http://stacktips.com)
