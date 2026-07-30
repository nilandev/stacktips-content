---
id: 324
title: Different Way to Handle Events in Android
slug: different-way-to-handle-events-in-android
excerpt: Typically events do responds to user interactions. Android platform supports multiple ways to handle the events on View’s.…
difficulty: beginners
publishedDate: "2013-06-24T12:45:04.000Z"
updatedDate: "2025-09-16T23:05:36.264Z"
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

Typically events do responds to user interactions. Android platform supports multiple ways to handle the events on View’s. When user clicks on an Android View, some method is getting called by the android framework and then passed the control to the application listeners.

For example, when a user clicks on a view such as a Button, the `onTouchEvent()` method is called on that Button object. In order to make our application to responds to the event we must extend the class and override the method. But extending every View object in order to handle such an event would not be practical. Each View classes in Android provide collection of nested interfaces called listeners with callbacks that you can much more easily define in order to handle event.

# 1\. Anonymus click listener

```java
button.setOnClickListener(new OnClickListener(){
    @Override
    public void onClick(View v) {
        //do stuff
    }
});
```

This way will create anonymous classes as much as you create buttons. This is recommended only if you have fewer listener in your class. But if we have a complex screen layout with many view’s then writing a listener programmatically for each view will make the code messy. Its less readable and costly

# 2\. Using android:OnClick layout attribute

```xml
<Button android:id="@+id/btnView"
    ...............
    ...............
    android:OnClick="btnViewOnClick"/>
```

Many people use this way of handling the click events by writing `OnClick` attribute in XML. But, usually it is not preferable as I because better to keep listeners inside code. Internally android is using java reflection concept behind the scene to handle this. It is less readable, and confuses other developers.

# 3\. Using OnClickListener interface on the Activity

```java
public class MainActivity extends Activity implements OnClickListener{
    @Override
    public void onClick(View v) {
        //do stuff
    }

    protected void onCreate(Bundle savedInstanceState) {
        ...
        button.setOnClickListener(this);
    }
}
```

Here we are implementing the `OnClickListener` interface on the Activity class and passing a self reference to the Button. This way the onclick listener will hold the reference to the activity object, and so it is a heavy operation to keep the whole activity’s object in it.

This way we can handle the click event for all views. However, we need to differentiate view’s using their id’s. We can use `view.getId()` method to see which button was clicked. Again, this is preferable only when we have fewer views to handle. This way all the click event handling codes are done at one place.

This way is hard to navigate through, because you can’t determine the type of the listener you are using with current button (I know eclipse will highlight the methods this are pointing at, but with huge code I think it will be hard to find).

# 4\. Creating the OnClickListener field

```java
private OnClickListener onClickHandler = new OnClickListener(){

    @Override
    public void onClick(View v) {
        //stuff
    }
};

protected void onCreate(Bundle savedInstanceState) {
    ...
    button.setOnClickListener(onClickHandler);
}
```

The best practice is the create a local variable with the `OnClickListener` type. This way it is easy to navigate and more readable. But it doesn’t stop you to implement the other three options provided above. Just that every one has different way of looking at the problem.
