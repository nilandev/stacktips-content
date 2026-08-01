---
id: 332
title: Creating Frame by Frame Animations in Android
slug: creating-frame-animations-in-android
excerpt: This example explains step by step process to create Frame Animations in Android. An animation created by moving an object little-by-little over several consecutive frames.
difficulty: beginners
publishedDate: "2013-05-19T07:25:36.000Z"
updatedDate: "2025-09-16T23:05:36.515Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-frame-by-frame-animation
  - animationdrawable-android
  - android-animation-list-xml
course: null
displayOrder: 0
seo: 
  metaTitle: "Creating Frame-by-Frame Animations in Android"
  metaDescription: "Step-by-step guide to building frame-by-frame animations in Android using AnimationDrawable, an animation-list XML, and start/stop controls."
  metaKeywords: null
---

A frame animation created by moving an object little-by-little over several consecutive frames. In Android, we can create Frame Animation by swapping frames repeatedly, so that it appears continuous to the human eye and we feel that it is animated.

Frame is referred to an image. So to implement frame by frame animation in android, we needs to have set of images, which describes a motion. Now let’s move on and see how to implement frame by frame animation in Android

The following steps will guide you through step by step approach to create frame animation in Android.

## 1. Identifying the Image Frames

First step towards creating frame animation is to prepare a series of images with the individual frames of your animation. Add the images to your project’s drawable folder. In this example, I have used the following sequence of images.

![](/media/articles/426/frame1.png)![](/media/articles/426/frame2.png)![](/media/articles/426/frame3.png)![](/media/articles/426/frame4.png)![](/media/articles/426/frame5.png)![](/media/articles/426/frame6.png)![](/media/articles/426/frame7.png)![](/media/articles/426/frame8.png)![](/media/articles/426/frame9.png)![](/media/articles/426/frame10.png)

## 2. Define Animation Sequence

Declare a XML file that defines the animation sequence that holds the list of drawables. Create a new file named `frame_animation_list.xml` and paste it to your project resource `res/anim` or `res/drawable` folder.

```xml
<?xml version="1.0" encoding="utf-8"?>
<animation-list xmlns:android="http://schemas.android.com/apk/res/android" android:oneshot="false">
        <item android:drawable="@drawable/frame1" android:duration="210" />
    <item android:drawable="@drawable/frame2" android:duration="210" />
    <item android:drawable="@drawable/frame3" android:duration="210" />
    <item android:drawable="@drawable/frame4" android:duration="210" />
    <item android:drawable="@drawable/frame5" android:duration="210" />
    <item android:drawable="@drawable/frame6" android:duration="210" />
    <item android:drawable="@drawable/frame7" android:duration="210" />
    <item android:drawable="@drawable/frame8" android:duration="210" />
    <item android:drawable="@drawable/frame9" android:duration="210" />
    <item android:drawable="@drawable/frame10" android:duration="210" />

</animation-list>
```

-   Notice that in the above layout declaration, we are using `AnimationDrawable` class. This takes the list of `Drawable` resources and render them at specified intervals.
-   Note that the AnimationDrawable class, loads all the images into memory before it starts animation.
-   You must be careful about using this for images of larger size. Depending on the size of the images, you have to restrict the number of frames for making animation smoother.

## 3. Declare Activity Layout

Now declare an image view to your activity layout where the animation will be shown. In my example, I have declared an image view and two buttons Start and Stop to control the animation. Add the following snippet to your `activity_main.xml` file.

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:adjustViewBounds="true" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_marginBottom="20dp"
        android:orientation="horizontal">

        <Button
            android:id="@+id/start"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="0.5"
            android:text="Start" />

        <Button
            android:id="@+id/stop"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="0.5"
            android:text="Stop" />
    </LinearLayout>
</RelativeLayout>
```

## 4. Control the Animation Behaviour

Now that we are ready with the animation sequence, we need to add this Drawable as a background resource for our ImageView. Use the following code snippet to set the AnimationDrawable as the background of the ImageView.

```java
// Setting animation_list.xml as the background of the image view
view.setBackgroundResource(R.drawable.frame_animation_list);
```

Once this is set, you can access this AnimationDrawable object by doing a get on the view object like this:

```java
// Type casting the Animation drawable
frameAnimation = (AnimationDrawable) view.getBackground();
```

-   Now we can control the behaviour of animation by using `start()` and `stop()` methods to start and stop the animation.
-   You may use `setOneShot()` method runs the animation once and then stops.
-   The `addFrame(drawable, duration)` method can be used to add a new frame by passing a Drawable object and sets its display duration.

## 5. Completing Example Code

Now that we understand the concepts, let us complete the example. Here is the complete code that goes inside `MainActivity.java`.

```java
import android.graphics.drawable.AnimationDrawable;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.ImageView;

public class MainActivity extends ActionBarActivity implements OnClickListener {

    private ImageView view;
    private AnimationDrawable frameAnimation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Type casting the Image View
        view = (ImageView) findViewById(R.id.imageView);

        // Setting animation_list.xml as the background of the image view
        view.setBackgroundResource(R.drawable.frame_animation_list);

        // Type casting the Animation drawable
        frameAnimation = (AnimationDrawable) view.getBackground();

        //set true if you want to animate only once
        frameAnimation.setOneShot(true);

        findViewById(R.id.start).setOnClickListener(this);
        findViewById(R.id.stop).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if(id == R.id.start){
            frameAnimation.start();
        }else if(id==R.id.stop){
            frameAnimation.stop();
        }
    }
}
```
