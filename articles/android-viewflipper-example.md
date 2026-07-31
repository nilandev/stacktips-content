---
id: 317
title: Android ViewFlipper Example- Creating Image Slideshow Using ViewFlipper
slug: android-viewflipper-example
excerpt: ViewFlipper is and user interface widget available in android since android API level 1. It can hold two more views, but only one child can be shown at a time. Using this we can implement functionality similar to android gallery item, swiping allows to navigate between images.
difficulty: beginners
publishedDate: "2013-07-25T06:23:07.000Z"
updatedDate: "2025-09-16T23:05:36.003Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-viewflipper
  - image-slideshow-android
  - swipe-gesture-detector
  - viewflipper-auto-flip
course: null
displayOrder: 0
seo: 
  metaTitle: "Android ViewFlipper Example: Build an Image Slideshow"
  metaDescription: "Learn how to use Android ViewFlipper to build a swipeable image slideshow with auto-flip, custom animations, and gesture detection, complete with code."
  metaKeywords: null
---

# 1\. Introduction to Android ViewFlipper

ViewFlipper is and user interface widget available in android since android API level 1. It can hold two more views, but only one child can be shown at a time. Using this we can implement functionality similar to android gallery item, swiping allows to navigate between images. It also support to auto flip between child at a regular interval.

The ViewFlipper class has derived from ViewAnimator. It supports the methods to set the animation for the in and out actions using `setInAnimation()` and `setOutAnimation()`. You can either use some of the default animation that are available in android system or you can write your own animation class.

# 2\. Defining ViewFlipper Example Layout

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical">

    <ViewFlipper
        android:id="@+id/view_flipper"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent">

        <RelativeLayout
            android:layout_width="fill_parent"
            android:layout_height="fill_parent">

            <ImageView
                android:layout_width="fill_parent"
                android:layout_height="fill_parent"
                android:layout_gravity="center"
                android:adjustViewBounds="true"
                android:scaleType="centerCrop"
                android:src="@drawable/lightning" />

            <TextView
                style="@style/ImageTitle"
                android:text="@string/lightning" />
        </RelativeLayout>

        <RelativeLayout
            android:layout_width="fill_parent"
            android:layout_height="fill_parent">

            <ImageView
                android:layout_width="fill_parent"
                android:layout_height="fill_parent"
                android:layout_gravity="center"
                android:adjustViewBounds="true"
                android:scaleType="centerCrop"
                android:src="@drawable/color_baloons" />

            <TextView
                style="@style/ImageTitle"
                android:text="@string/color_baloons" />
        </RelativeLayout>

        <RelativeLayout
            android:layout_width="fill_parent"
            android:layout_height="fill_parent">

            <ImageView
                android:layout_width="fill_parent"
                android:layout_height="fill_parent"
                android:layout_gravity="center"
                android:adjustViewBounds="true"
                android:scaleType="centerCrop"
                android:src="@drawable/natural_wall" />

            <TextView
                style="@style/ImageTitle"
                android:text="@string/natural_wall" />
        </RelativeLayout>
    </ViewFlipper>

    <ImageView
        android:id="@+id/swipe_left"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentLeft="true"
        android:layout_centerVertical="true"
        android:src="@drawable/swipe_left" />

    <ImageView
        android:id="@+id/swipe_right"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:layout_centerVertical="true"
        android:src="@drawable/swipe_right" />

</RelativeLayout>
```

Here in the above xml layout, I am using three `LinearLayout`. Each layout has an image and image caption. All image caption is using the same style. You can see the screenshot’s below for the style. Now, let us create a `style.xml` file in values folder and then add the following style code

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="ImageTitle">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">50dp</item>
        <item name="android:layout_alignParentBottom">true</item>
        <item name="android:background">#99000000</item>
        <item name="android:gravity">center</item>
        <item name="android:maxLines">2</item>
        <item name="android:textColor">#fff</item>
        <item name="android:textStyle">bold</item>
        <item name="android:textSize">18dp</item>
        <item name="android:typeface">sans</item>
    </style>
</resources>
```

I admit the fact that, the style file used here can be more improvised. The color can be placed in `colors.xml` file. But, for the sake of simplicity it is using the colors right inside the styles. Now we are done with the layout design and we will move to controlling the `ViewFlipper` from java code.

[![Android ViewFlipper example](/media/articles/409/ViewFlipper-example-javatechig.png)](http://stacktips.com)

# 3\. Using ViewFlipper in Activity

Android ViewFlipper can anytime display only one immoderate child at a time. So you can only see the first image in your eclipse graphical layout view. We need to pragmatically move to different child or we can setup an auto timer. Setting an auto flip timer will create a slideshow and can be controlled by `startFlipping()` and `stopFlipping()` method. Later in this example we will see more in detail.

```java
public class ViewFlipperSampleActivity extends Activity {
    private static final int SWIPE_MIN_DISTANCE = 120;
    private static final int SWIPE_THRESHOLD_VELOCITY = 200;
    private ViewFlipper mViewFlipper;
    private Context mContext;
    private final GestureDetector detector = new GestureDetector(new SwipeGestureDetector());

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        mContext = this;
        mViewFlipper = (ViewFlipper) this.findViewById(R.id.view_flipper);
        mViewFlipper.setOnTouchListener(new OnTouchListener() {
            @Override
            public boolean onTouch(final View view, final MotionEvent event) {
                detector.onTouchEvent(event);
                return true;
            }
        });
    }

    class SwipeGestureDetector extends SimpleOnGestureListener {
        @Override
        public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
            try {
                // right to left swipe
                if (e1.getX() - e2.getX() > SWIPE_MIN_DISTANCE && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    mViewFlipper.setInAnimation(AnimationUtils.loadAnimation(mContext, R.anim.left_in));
                    mViewFlipper.setOutAnimation(AnimationUtils.loadAnimation(mContext, R.anim.left_out));
                    mViewFlipper.showNext();
                    return true;
                } else if (e2.getX() - e1.getX() > SWIPE_MIN_DISTANCE && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    mViewFlipper.setInAnimation(AnimationUtils.loadAnimation(mContext, R.anim.right_in));
                    mViewFlipper.setOutAnimation(AnimationUtils.loadAnimation(mContext,R.anim.right_out));
                    mViewFlipper.showPrevious();
                    return true;
                }

            } catch (Exception e) {
                e.printStackTrace();
            }

            return false;
        }
    }
}
```

In the above code, we are using `GestureListener` to identify the swipe gesture and rotate between ViewFlipper child view’s. `showNext()` and `showPrevious()` method’s are used to show the next and previous ViewFlipper child items. All the ViewFlipper items are added statically inside the layout xml file. However you can also add ViewFlipper child items using `addView()` method.

```java
ImageView imageView = new ImageView(this);
imageView.setImageResource(R.drawable.color_baloons);
mViewFlipper.addView(imageView);
```

# 4\. Image Slideshow in ViewFlipper

So far, our example is supporting swipe gesture. But what if we want to implement a slideshow?  
Android `ViewFlipper` support auto flip which can be controlled with `startFlipping()` and `stopFlipping()` method. We can set the auto flip interval using `setFlipInterval(period)`. Note that the interval period is in milliseconds.

To control the auto flip we will add play and stop buttons. I have inserted the following code right after `ViewFlipper` in my original layout xml file.

```xml
<LinearLayout
        style="@style/ButtonContainer"
        android:orientation="horizontal" >

        <Button
            android:id="@+id/play"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginRight="10dp"
            android:background="@android:drawable/ic_media_play" />

        <Button
            android:id="@+id/stop"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:background="@android:drawable/ic_media_pause" />
    </LinearLayout>
```

Added the following style

```xml
<style name="ButtonContainer">
        <item name="android:layout_width">fill_parent</item>
        <item name="android:layout_height">50dp</item>
        <item name="android:layout_alignParentTop">true</item>
        <item name="android:background">#99000000</item>
        <item name="android:gravity">center</item>
    </style>
```

ViewFlipper auto flip can be controlled from java code. add following code in your java class

```java
findViewById(R.id.play).setOnClickListener(new OnClickListener() {
    @Override
    public void onClick(View view) {
        //sets auto flipping
        mViewFlipper.setAutoStart(true);
        mViewFlipper.setFlipInterval(4000);
        mViewFlipper.startFlipping();
    }
});

findViewById(R.id.stop).setOnClickListener(new OnClickListener() {
    @Override
    public void onClick(View view) {
        //stop auto flipping
        mViewFlipper.stopFlipping();
    }
});
```

[![Android ViewFlipper example](/media/articles/409/ViewFlipper-example.png)](http://stacktips.com)

# 5\. ViewFlipper Animation and Events

The ViewFlipper class has derived from `ViewAnimator`. It supports the methods to set the animation for the in and out actions using `setInAnimation()` and `setOutAnimation()`. You can either use some of the default animation that are available in android system or you can write your own animation class.

Sometimes we may need to control our screen while animation is started or completed. AnimationListener enables to handle animation events using `onAnimationStart()`, `onAnimationRepeat()` and `onAnimationEnd()` methods.

```java
//animation listener
AnimationListener mAnimationListener = new Animation.AnimationListener() {
    public void onAnimationStart(Animation animation) {
        //animation started event
    }

    public void onAnimationRepeat(Animation animation) {
    }

    public void onAnimationEnd(Animation animation) {
        //TODO animation stopped event
    }
};
```

Now add the animation listener to `ViewFlipper`.

```java
mViewFlipper.getInAnimation().setAnimationListener(mAnimationListener);
```

# 6\. Download source code

[Download source](https://github.com/javatechig/Android-UI-Tutorials/tree/master/ViewFlipperExample)
