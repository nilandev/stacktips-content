---
id: 260
title: ActionBar with Custom View Example in Android
slug: actionbar-with-custom-view-example-in-android
excerpt: In this example we will see how to customize ActionBar with Custom View in Android.
difficulty: beginners
publishedDate: "2014-01-15T13:46:39.000Z"
updatedDate: "2025-09-16T23:05:33.420Z"
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

In this tutorial, we will create an example to customize `ActionBar` with a custom layout in Android. Before we begin, I assume you already have created an Android application.

\[box style=”2″\]

Toolbar is a new standard replacement for ActionBar, introduced in Android Lollipop. It supports whole bunch of customization as you wish along with no or less modification to ActionBar logic.  
\[/box\] I recommend using ToolBar. [Checkout our Android Lollipop ToolBar Example](http://stacktips.com/android/android-lollipop-toolbar-example "Android Lollipop Toolbar Example").

Now let us create a custom layout xml file for your ActionBar.

#### custom\_actionbar.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="50dp"
    android:background="@drawable/black_pattern" >

    <TextView
        android:id="@+id/title_text"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:textAllCaps="true"
        android:textAppearance="?android:attr/textAppearanceLarge"
        android:textColor="#fff"
        android:textStyle="bold" />

    <ImageView
        android:id="@+id/imageView1"
        android:layout_width="35dp"
        android:layout_height="35dp"
        android:layout_alignParentLeft="true"
        android:layout_centerVertical="true"
        android:layout_marginLeft="8dp"
        android:src="@drawable/ic_launcher" />

    <ImageButton
        android:id="@+id/imageButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:layout_centerVertical="true"
        android:layout_marginRight="8dp"
        android:background="@null"
        android:src="@android:drawable/ic_menu_rotate" />

</RelativeLayout>
```

### Activity Class (MainActivity.java)

The above declared layout will be used as custom layout for Activity `ActionBar`. You can inflate custom view to ActionBar `setCustomView()` method. Let us have a look at the code snippet below.

```java
public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		ActionBar mActionBar = getActionBar();
		mActionBar.setDisplayShowHomeEnabled(false);
		mActionBar.setDisplayShowTitleEnabled(false);
		LayoutInflater mInflater = LayoutInflater.from(this);

		View mCustomView = mInflater.inflate(R.layout.custom_actionbar, null);
		TextView mTitleTextView = (TextView) mCustomView.findViewById(R.id.title_text);
		mTitleTextView.setText("My Own Title");

		ImageButton imageButton = (ImageButton) mCustomView
				.findViewById(R.id.imageButton);
		imageButton.setOnClickListener(new OnClickListener() {

			@Override
			public void onClick(View view) {
				Toast.makeText(getApplicationContext(), "Refresh Clicked!",
						Toast.LENGTH_LONG).show();
			}
		});

		mActionBar.setCustomView(mCustomView);
		mActionBar.setDisplayShowCustomEnabled(true);
	}

}
```

### Output

[![ActionBar Custom View Example in Android](/media/articles/345/custom-actionbar.png)](http://stacktips.com)
