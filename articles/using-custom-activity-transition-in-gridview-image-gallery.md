---
id: 141
title: Using Custom Activity Transition in GridView Image Gallery
slug: using-custom-activity-transition-in-gridview-image-gallery
excerpt: In this example, we will see how to create custom window animation that makes sense to user. We will extend our previous GridView example, to create custom bitmap scale animation when user clicks on a thumbnail in GridView.
difficulty: beginners
publishedDate: "2015-06-27T09:34:15.000Z"
updatedDate: "2025-09-16T23:05:27.198Z"
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

In this example, we will see how to create custom window animation that makes sense to the user. We will extend our previous [GridView example,](/article/download-and-display-image-in-android-gridview) to create custom bitmap scale animation when user clicks on a thumbnail in GridView.

Let us now take a look at the following demo. Notice that when we click on the thumbnail on GridView, it opens the sub-activity that displays an `ImageView` and `TextView`. The thumbnail image gets zoomed up and scales to full view in details activity. When the user clicks the back button to return to `GridView`, it again scales down to the original position.

{{< youtube smIWHeXZmFU >}}

To achieve this kind of animation, we need to follow the following steps

-   Override the default window animation with our own custom animation for both enter and exit transitions.
-   When user clicks on a GridView item, capture the details of thumbnail such as top and left distance, width, height, title and the url of the image to display. Package all the details and pass the extra information to `DetailsActivity`.
-   Launch activity transparently so that we see the thumbnail gets zoomed. We can control the background alpha animation to set the image background.
-   Write your own enter and exit transition on DetailsActivity.

## 1\. Capture and send the thumbnail details

Let us implement mGridView.setOnItemClickListener to handle click event on GridView. When user clicks on any grid items, get the image thumbnail at that position. Extract the information such as position, width and height and pass to DetailsActivity `intent` bundle.

```java
mGridView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    public void onItemClick(AdapterView<?> parent, View v, int position, long id) {
        GridItem item = (GridItem) parent.getItemAtPosition(position);
        ImageView imageView = (ImageView) v.findViewById(R.id.grid_item_image);

        Intent intent = new Intent(GridViewActivity.this, DetailsActivity.class);
        int[] screenLocation = new int[2];
        imageView.getLocationOnScreen(screenLocation);

        //Pass the image title and url to DetailsActivity
        intent.putExtra("left", screenLocation[0]).
                putExtra("top", screenLocation[1]).
                putExtra("width", imageView.getWidth()).
                putExtra("height", imageView.getHeight()).
                putExtra("title", item.getTitle()).
                putExtra("image", item.getImage());

        startActivity(intent);
    }
});
```

## 2\. Read bundle data passed form intent

This is straight forward. Just read all the bundle data passed form GridView activity.

```java
//retrieves the thumbnail data
Bundle bundle = getIntent().getExtras();
thumbnailTop = bundle.getInt("top");
thumbnailLeft = bundle.getInt("left");
thumbnailWidth = bundle.getInt("width");
thumbnailHeight = bundle.getInt("height");

String title = bundle.getString("title");
String image = bundle.getString("image");
```

## 3\. Make DetailsActivity window transparent

Make the DetailsActivity background as transparent by adding the `android:windowBackground` color as transparent. This can be done using custom themes to your activity.

```xml
<style name="Transparent" parent="AppTheme">
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowIsTranslucent">true</item>
        <item name="android:windowBackground">@android:color/transparent</item>
</style>
```

Now, set the above theme to your activity in AndroidManifest.xml file.

```xml
<activity android:name=".DetailsActivity"
            android:theme="@style/Transparent" />
```

## 4\. Set color drawable to main background

We have made the activity default background as transparent. Now let us set the main parent view background as follows.

```java
//Set the background color to black
 frameLayout = (FrameLayout) findViewById(R.id.main_background);
colorDrawable = new ColorDrawable(Color.BLACK);
frameLayout.setBackground(colorDrawable);
```

## 5\. Implement .addOnPreDrawListener

Register `ViewTreeObserver.addOnPreDrawListener` callback in DetailsActivity. This callback will be invoked when the view tree is about to be drawn. This is the best place to run our window enter animation.

```java
// Only run the animation if we're coming from the parent activity, not if
// we're recreated automatically by the window manager (e.g., device rotation)
if (savedInstanceState == null) {
    ViewTreeObserver observer = imageView.getViewTreeObserver();
    observer.addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {

        @Override
        public boolean onPreDraw() {
            imageView.getViewTreeObserver().removeOnPreDrawListener(this);

            int[] screenLocation = new int[2];
            imageView.getLocationOnScreen(screenLocation);
            mLeftDelta = thumbnailLeft - screenLocation[0];
            mTopDelta = thumbnailTop - screenLocation[1];

            // Scale factors to make the large version the same size as the thumbnail
            mWidthScale = (float) thumbnailWidth / imageView.getWidth();
            mHeightScale = (float) thumbnailHeight / imageView.getHeight();

            enterAnimation();
            return true;
        }
    });
}
```

## 6\. Create custom enter and exit animation

The enter animation scales the picture in from its previous thumbnail size/location. In parallel, the background of the activity is fading in.

```java
public void enterAnimation() {
    imageView.setPivotX(0);
    imageView.setPivotY(0);
    imageView.setScaleX(mWidthScale);
    imageView.setScaleY(mHeightScale);
    imageView.setTranslationX(mLeftDelta);
    imageView.setTranslationY(mTopDelta);

    // interpolator where the rate of change starts out quickly and then decelerates.
    TimeInterpolator sDecelerator = new DecelerateInterpolator();

    // Animate scale and translation to go from thumbnail to full size
    imageView.animate().setDuration(ANIM_DURATION).scaleX(1).scaleY(1).
            translationX(0).translationY(0).setInterpolator(sDecelerator);

    // Fade in the black background
    ObjectAnimator bgAnim = ObjectAnimator.ofInt(colorDrawable, "alpha", 0, 255);
    bgAnim.setDuration(ANIM_DURATION);
    bgAnim.start();
}
```

The exit animation is basically a reverse of the enter animation. This Animate image back to thumbnail size/location as relieved from bundle. The endAction param, indicates the action gets run after the animation completes.

```java
public void exitAnimation(final Runnable endAction) {
    TimeInterpolator sInterpolator = new AccelerateInterpolator();
    imageView.animate().setDuration(ANIM_DURATION).scaleX(mWidthScale).scaleY(mHeightScale).
        translationX(mLeftDelta).translationY(mTopDelta)
        .setInterpolator(sInterpolator).withEndAction(endAction);

    // Fade out background
    ObjectAnimator bgAnim = ObjectAnimator.ofInt(colorDrawable, "alpha", 0);
    bgAnim.setDuration(ANIM_DURATION);
    bgAnim.start();
}
```

## 7\. Override onBackPressed() method

Override `onBackPressed()` method to run our exit animation first, then exiting the activity when it is complete.

```java
@Override
public void onBackPressed() {
    exitAnimation(new Runnable() {
        public void run() {
            finish();
        }
    });
}
```

## 8\. Download Complete Source

\[download url=”https://github.com/javatechig/Android-GridView-Advance-Tutorial”\]
