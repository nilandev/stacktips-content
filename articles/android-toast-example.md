---
id: 335
title: Android Toast Example
slug: android-toast-example
excerpt: In this tutorial we will explain how to work with Android Toast with example. The example below demonstrates…
difficulty: beginner
publishedDate: "2013-05-12T13:44:20.000Z"
updatedDate: "2025-09-16T23:05:36.634Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/android-ui-tutorials/tree/master/android-simple-listview"
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

In this tutorial we will explain how to work with Android Toast with example. The example below demonstrates the usages of simple and customized toast in Android.

1.  Toast is a solution for android developer when required to notify user about an operation without expecting any user input.
2.  This provides a small popup that displays for a small period and fades out automatically after timeout. Sometimes developers use this for debugging.
3.  For example, some of the app shows “Press back once to Exit” message when pressed back button in home page. Another real-time example is Gmail app, It shows a Toast, when a mail message is saved to draft.

### How to Create a Toast

We can instantiate a `android.widget.Toast` object using static `makeText()` method. This method takes three parameters: the application `Context`, the text `message`, and the `duration` for the toast. You can display the toast notification by calling show() method.

Checkout below code snippet to show an simple toast in Android

```java
//display in short period of time
Toast.makeText(getApplicationContext(), "Your toast message.",
                      Toast.LENGTH_SHORT).show();
//display in long period of time
Toast.makeText(getApplicationContext(), "Your toast message",
                      Toast.LENGTH_LONG).show();
```

Toast notification in android always appears near the bottom of the screen, centered horizontally as shown in the image. However, it allows us to change its position with the `setGravity(int, int, int)` method. This accepts three parameters: a Gravity constant, an x-position offset, and a y-position offset.

For example, if you decide that the toast should appear in the top-left corner, you can set the gravity like this:

```java
Toast toast = Toast.makeText(getApplicationContext(), "Your toast message.", Toast.LENGTH_SHORT);
toast.setGravity(Gravity.TOP|Gravity.LEFT, 0, 0);
toast.show();
```

### Creating Custom Toast in Android

Sometimes a simple Toast may not be satisfactory, and then we can go for customizing the Toast. To create a custom layout, define a View layout, in XML and pass the root View object to the setView(View) method.

In my example, I have created an XML layout named as `custom_toast.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/toast_layout_root"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:layout_marginLeft="10dp"
    android:layout_marginRight="10dp"
    android:orientation="horizontal"
    android:paddingLeft="10dp"
    android:paddingRight="10dp" >

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:background="#00AAE9"
        android:orientation="horizontal"
        android:paddingBottom="5dp"
        android:paddingTop="5dp" >

    <ImageView
        android:id="@+id/toastImage"
        android:layout_width="wrap_content"
        android:layout_height="fill_parent"
        android:layout_marginRight="10dp"
        android:src="@drawable/ic_warning" />

    <TextView
        android:id="@+id/toastText"
        android:layout_width="wrap_content"
        android:layout_height="fill_parent"
        android:gravity="center_vertical"
        android:textColor="#FFFFFF"
        android:textSize="7pt"
        android:textStyle="italic" />
    </LinearLayout>
</LinearLayout>
```

Below is the code changes for the activity class

```java
public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button toastButton = (Button) this.findViewById(R.id.toastButton);
        toastButton.setOnClickListener(new OnClickListener() {
            public void onClick(View v) {
                //create the toast object, set display duration,
                Toast.makeText(getApplicationContext(), "This is a plain toast.", Toast.LENGTH_SHORT).show();
            }
        });

        Button customToastButton = (Button) this.findViewById(R.id.customToastButton);
        customToastButton.setOnClickListener(new OnClickListener() {
            public void onClick(View v) {

                //get the LayoutInflater and inflate the custom_toast layout
                LayoutInflater inflater = getLayoutInflater();
                View layout = inflater.inflate(R.layout.custom_toast, (ViewGroup)
                findViewById(R.id.toast_layout_root));

                //get the TextView from the custom_toast layout
                TextView text = (TextView) layout.findViewById(R.id.toastText);
                text.setText("This is my custom toast");

                //create the toast object, set display duration,
                //set the view as layout that's inflated above and then call show()
                Toast t = new Toast(getApplicationContext());
                t.setDuration(Toast.LENGTH_LONG);
                t.setView(layout);
                t.show();
            }
        });
    }
}
```

Below is the output of the above code

[![](/media/articles/429/thumb-toast-custom.png)](http://stacktips.com)
