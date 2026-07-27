---
id: 337
title: Android ListView Example
slug: android-listview-tutorial
excerpt: This post will walk you through building simple and customized ListView in Android using different Android adapters. ListView is a view group that, displays a list of scrollable items.
difficulty: beginners
publishedDate: "2013-05-06T13:16:04.000Z"
updatedDate: "2025-09-16T23:05:36.741Z"
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

## Introduction

This post will walk you through building simple and customized `ListView` in Android using different Android adapters.

Scrollview is ideal for screens where scrolling is required, but it is not efficient when scroll view is used to render a larger data set. Instead you can use specialized adapter views like [ListView](http://stacktips.com/articles/android-listview-tutorial "Android ListView Example"), [GridView](http://stacktips.com/articles/android-gridview-example-building-image-gallery-in-android "Android Gridview Example- Building Image Gallery in android") and [Recycler View](http://stacktips.com/articles/android-recyclerview-example "Android RecyclerView Example") (Introduced in Android Lollipop) for long lists.

1.  ListView is an Android ViewGroup, used extensively to display the collection of data in vertical scrollable rows.
2.  The list items are automatically inserted to the list using an Adapter and Adapter pulls data from data source source such as an array, cursor, etc.

## Android Adapter

Adapter is acts as a bridge between data source and adapter views such as ListView, GridView. Adapter iterates through the data set from beginning till the end and generate Views for each item in the list.

Android SDK provides three different Adapter implementation, that includes `ArrayAdapter`, `CursorAdapter` and `SimpleAdapter`. An ArrayAdapter expects an Array or an List as input, while CursorAdapter accepts the instance of Cursor and SimpleAdapter maps the static data defined in the resources. The type of adapter that suits your app need is purely based on the input data type.

The BaseAdapter is the generic implementation for all of the three adapter types and can be used for ListView, GridView or for Spinners.

You may directly use ArrayAdapter by passing array as input or create your own customized class by extending BaseAdapter.

[](http://stacktips.com)

The image above, provides idea of customizable list views can be done using adapters.

## ListView Using ArrayAdapter

The simplest way for building list view is by using ArrayAdapter. Following are some of the steps used to implement simple ListView using array adapter.

1.  First step towards building list view is to identify the input data, which you want to display in list. In this example, we will be using a static array of strings.
2.  Secondly, let us declare list view in activity layout. In our example, the activity layout contains a list view inside linear layout. Provide `android:id="@+id/months_list"` as ListView id.
3.  Now finally, let us instantiate the  the ArrayAdapter and set to ListView by calling `setAdapter()` method.

Following code snippet depicts the list view declaration inside activity layout

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
	xmlns:tools="http://schemas.android.com/tools"
	android:layout_width="match_parent"
	android:layout_height="match_parent"
	android:orientation="vertical">

	<ListView
		android:id="@+id/months_list"
		android:layout_width="match_parent"
		android:layout_height="wrap_content" >
	</ListView>
</LinearLayout>
```

Now instantiate the ListView and Array adapter. Following code snippet depicts the activity code.

**ListActivity.java**

```java
import android.os.Bundle;
import android.app.Activity;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class ListActivity extends Activity {
	private String[] monthsArray = { "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY",
 "AUG", "SEPT", "OCT", "NOV", "DEC" };

	private ListView monthsListView;
	private ArrayAdapter arrayAdapter;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_list);

		monthsListView = (ListView) findViewById(R.id.months_list);

		// this-The current activity context.
		// Second param is the resource Id for list layout row item
		// Third param is input array 
		arrayAdapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, monthsArray);
		monthsListView.setAdapter(arrayAdapter);
	}
}
```

## ListView Using Custom Adapter

So far we have created a simple list view using ArrayAdapter. Now it time to create something fancy custom a list by extending BaseAdapter. Following steps are used to implement customized ListView:

1.  First step towards building custom list is to identify the data model for each row. In our example we will display list of `NewsItem` objects.
2.  Secondly, let us declare list view in activity layout.
3.  Now declare the layout for each row item.
4.  Create your custom adapter class by extending `BaseAdapter` class.
5.  Finally, let us instantiate your custom adapter and set to ListView by calling setAdapter() method.

The NewsItem object will represent each row in list. Declare NewsItem.java class and add the following code snippets.

```java
public class NewsItem {
	private String headline;
	private String reporterName;
	private String date;
	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public String getReporterName() {
		return reporterName;
	}

	public void setReporterName(String reporterName) {
		this.reporterName = reporterName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
}
```

### Define List Row Layout

Let us create a new custom layout for list view row item containing headline, name and date TextView.

**list\_row\_layout.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    android:padding="5dip" >

    <TextView
        android:id="@+id/title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textStyle="bold"
        android:typeface="sans" />

    <TextView
        android:id="@+id/reporter"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/title"
        android:layout_marginTop="5dip"
        android:textColor="#343434"
        android:textSize="12sp" />

    <TextView
        android:id="@+id/date"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignBaseline="@+id/reporter"
        android:layout_alignBottom="@+id/reporter"
        android:layout_alignParentRight="true"
        android:textColor="#343434"
        android:textSize="12sp" />
</RelativeLayout>
```

### Custom List Adapter

Let us create a new class named `CustomListAdapter.java`, and extend it from BaseAdapter. You must override  the following methods form BaseAdpter class.

| getCount() | This method returns the total number of row counts for the listview. Typically this contains the size of the list you passing as input. |
| --- | --- |
| getItem() | Returns object representing data for each row. |
| getItemId() | This returns the unique integer id that represents each row item. Let us return the integer position value. |
| getView() | The getView() method returns a view instance that represents a single row in ListView item. Here you can inflate your own layout and update values on list row. |

Checkout the  following code snippets for CustomListAdapter class.

```java
public class CustomListAdapter extends BaseAdapter {
	private ArrayList<NewsItem> listData;
	private LayoutInflater layoutInflater;

	public CustomListAdapter(Context aContext, ArrayList<NewsItem> listData) {
		this.listData = listData;
		layoutInflater = LayoutInflater.from(aContext);
	}

	@Override
	public int getCount() {
		return listData.size();
	}

	@Override
	public Object getItem(int position) {
		return listData.get(position);
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	public View getView(int position, View convertView, ViewGroup parent) {
		ViewHolder holder;
		if (convertView == null) {
			convertView = layoutInflater.inflate(R.layout.list_row_layout, null);
			holder = new ViewHolder();
			holder.headlineView = (TextView) convertView.findViewById(R.id.title);
			holder.reporterNameView = (TextView) convertView.findViewById(R.id.reporter);
			holder.reportedDateView = (TextView) convertView.findViewById(R.id.date);
			convertView.setTag(holder);
		} else {
			holder = (ViewHolder) convertView.getTag();
		}

		holder.headlineView.setText(listData.get(position).getHeadline());
		holder.reporterNameView.setText("By, " + listData.get(position).getReporterName());
		holder.reportedDateView.setText(listData.get(position).getDate());
		return convertView;
	}

	static class ViewHolder {
		TextView headlineView;
		TextView reporterNameView;
		TextView reportedDateView;
	}
}
```

### Declaring ListView Layout

Declare ListView in your activity layout.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <ListView
        android:id="@+id/custom_list"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:dividerHeight="1dp" />

</LinearLayout>
```

### Hooking Up to Activity

Well, we are almost ready. Let us put all of them together and hook it up to the activity. Following code snippet depicts the activity class (MainActivity.java), where we initialize Adapter and hook it up to ListView.

```java
public class MainActivity extends Activity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		ArrayList image_details = getListData();
		final ListView lv1 = (ListView) findViewById(R.id.custom_list);
		lv1.setAdapter(new CustomListAdapter(this, image_details));
		lv1.setOnItemClickListener(new OnItemClickListener() {

			@Override
			public void onItemClick(AdapterView<?> a, View v, int position, long id) {
				Object o = lv1.getItemAtPosition(position);
				NewsItem newsData = (NewsItem) o;
				Toast.makeText(MainActivity.this, "Selected :" + " " + newsData, Toast.LENGTH_LONG).show();
			}
		});
	}

	private ArrayList getListData() {
		ArrayList<NewsItem> results = new ArrayList<NewsItem>();
		NewsItem newsData = new NewsItem();
		newsData.setHeadline("Dance of Democracy");
		newsData.setReporterName("Pankaj Gupta");
		newsData.setDate("May 26, 2013, 13:35");
		results.add(newsData);

                // Add some more dummy data for testing
		return results;
	}
}
```

[](http://stacktips.com)

### Styling Android ListView

Like any other view, ListView in Android can customized by color, background, selection color, etc. In this section of tutorial, we will learn how to customize an Android ListView.

### Changing ListView Selection Color

ListView default selection color can be changed using selectors. Selectors enables to decide how list row will visually be represented based on different states. Let us change the background and text color while list row is in pressed state.

Create a new file named list\_color\_selector.xml inside your drawable folder and paste the following code snippets. This selector style will be used to change the background color when list row is pressed.

```xml
<selector xmlns:android="http://schemas.android.com/apk/res/android">
     <!-- Normal state. -->
    <item android:drawable="@color/list_row_default_bg" 
        android:state_pressed="false" 
        android:state_selected="false"/>
    <!-- pressed state. -->
    <item android:drawable="@color/list_row_pressed_bg" 
        android:state_pressed="true"/>
    <!-- Selected state. -->
    <item android:drawable="@color/list_row_selected_bg" 
        android:state_pressed="false" 
        android:state_selected="true"/>

</selector>
```

Now, let us create file and named it as list\_item\_text\_selector.xml. This style will be used to change the text color while list row is pressed.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_pressed="true" android:color="@color/text_color_inverse" />
    <item android:state_focused="true" android:color="@color/text_color_inverse" />
    <item android:color="@color/text_color_default" />
</selector>
```

Define the following colors inside colors.xml file. If you don’t have colors.xml file already than create one inside values folder and paste the following code snippets.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="text_color_default">#00000C</color>
    <color name="text_color_inverse">#FFFFFF</color>
    <color name="white">#FFFFFF</color>
    <color name="list_row_default_bg">#ffffff</color>
    <color name="list_row_pressed_bg">#008cef</color>
    <color name="list_row_selected_bg">#86d3f6</color>
</resources>
```

Now let us apply the list selector styles to ListView inside activity\_main.xml file

```xml
 <ListView
        android:id="@+id/custom_list"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:listSelector="@drawable/list_color_selector"
        android:dividerHeight="1dp" />
```

Now, we can apply the styles to text in “list\_row\_layout.xml”. Change all TextView widget textColor attribute as shown below

```xml
<TextView
        android:id="@+id/title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text=""
        android:textColor="@drawable/list_item_text_selector"
        android:textStyle="bold"
        android:typeface="sans" />
```

### ListView Divider Style

You can use the following properties to change the list divider styles

1.  The `android:divider` property is used to set the list divider color. It accepts the color in `#RRGGBBAA` format. It also accepts reference to the drawable, which will be shown as list drawable.
2.  The `android:dividerHeight` property used to set the height of list divider. It can be defined in dp.

```xml
<ListView
        android:id="@+id/custom_list"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:divider="#FF0000"
        android:dividerHeight="1dp"
        android:listSelector="@drawable/list_selector_flatcolor" />
```

### Changing List Divider Pragmatically

You can also change the list view divider style programmatically form java code using `setDivider()` method.

```java
ListView listView = getListView();
ColorDrawable devidrColor = new ColorDrawable(
      this.getResources().getColor(R.color.devidrColor));
listView.setDivider(devidrColor);
listView.setDividerHeight(1);
```

[](http://stacktips.com)
