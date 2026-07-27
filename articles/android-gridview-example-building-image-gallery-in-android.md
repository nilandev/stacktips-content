---
id: 302
title: Android Gridview Example- Building Image Gallery in android
slug: android-gridview-example-building-image-gallery-in-android
excerpt: GridView is a ViewGroup that displays items in a two-dimensional, scrollable grid. In this tutorial, we’ll build an Image Gallery using a GridView in android. Each grid to display an image thumbnails and a text. While an item is selected, a toast message will display the position of the grid selected.
difficulty: beginners
publishedDate: "2013-08-20T14:21:30.000Z"
updatedDate: "2025-09-16T23:05:35.157Z"
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

## 1\. Introduction

GridView is a ViewGroup that displays items in a two-dimensional, scrollable grid. In this tutorial, we will build an image gallery using Android GridView. Each grid in our example will display an image and a text tile.

Checkout the advance version of this tutorial, that downloads the data from server and displays it on GridView.  
[Download and Display Image in Android GridView](/articles/download-and-display-image-in-android-gridview)

When user clicks on any grid item, it will navigate user to the details page. The output of the example we will build is depicted in following image.

[![Android GridView Example](/media/articles/391/Android-GridView-Example.jpg)](http://stacktips.com)

## 2\. Adding GridView layout

To begin with, let us create a layout for activity that contains a GridView. Let us create a new file named activity\_main.xml in your application layout folder.

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#f0f0f0">

    <GridView
        android:id="@+id/gridView"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:columnWidth="100dp"
        android:drawSelectorOnTop="true"
        android:gravity="center"
        android:numColumns="auto_fit"
        android:stretchMode="columnWidth"
        android:verticalSpacing="5dp"
        android:focusable="true"
        android:clickable="true"/>

</RelativeLayout>
```

Notice that in the above code, we have added a GridView with id gridView, and used some of the attributes such as numColumns, stretchMode, verticalSpacing, etc. Most of the android attributes are self explanatory.

## 3\. Define grid item layout

As you can notice from the above screenshot, each of the grid item contains an `ImageView` and an `TextView`. The following listing will show you the layout for each grid cell item. This layout will be used by the GridView adapter to render the items. Create a new layout inside your project layout directory and name it as `grid_item_layout.xml`.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_marginTop="5dp"
    android:background="@drawable/grid_color_selector"
    android:orientation="vertical"
    android:padding="5dp">

    <ImageView
        android:id="@+id/image"
        android:layout_width="100dp"
        android:layout_height="100dp" />

    <TextView
        android:id="@+id/text"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="5dp"
        android:gravity="center"
        android:textSize="12sp" />

</LinearLayout>
```

## 4\. Creating GridView adapter

Adapter is acts as a bridge between data source and adapter views such as ListView, GridView. Adapter iterates through the data set from beginning till the end and generate Views for each item in the list.

Android SDK provides three different Adapter implementation, that includes `ArrayAdapter`, `CursorAdapter`and `SimpleAdapter`. An ArrayAdapter expects an Array or an List as input, while CursorAdapter accepts the instance of Cursor and SimpleAdapter maps the static data defined in the resources. The type of adapter that suits your app need is purely based on the input data type.

The BaseAdapter is the generic implementation for all of the three adapter types and can be used for ListView, GridView or for Spinners. You may directly use ArrayAdapter by passing array as input or create your own customized class by extending BaseAdapter.

Let us not proceed with creating a custom adapter for grid view by extending ArrayAdapter. Create a new class GridViewAdapter.java in in your application src directory.

```java
public class GridViewAdapter extends ArrayAdapter {
	private Context context;
	private int layoutResourceId;
	private ArrayList data = new ArrayList();

	public GridViewAdapter(Context context, int layoutResourceId, ArrayList data) {
		super(context, layoutResourceId, data);
		this.layoutResourceId = layoutResourceId;
		this.context = context;
		this.data = data;
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		View row = convertView;
		ViewHolder holder = null;

		if (row == null) {
			LayoutInflater inflater = ((Activity) context).getLayoutInflater();
			row = inflater.inflate(layoutResourceId, parent, false);
			holder = new ViewHolder();
			holder.imageTitle = (TextView) row.findViewById(R.id.text);
			holder.image = (ImageView) row.findViewById(R.id.image);
			row.setTag(holder);
		} else {
			holder = (ViewHolder) row.getTag();
		}

		ImageItem item = data.get(position);
		holder.imageTitle.setText(item.getTitle());
		holder.image.setImageBitmap(item.getImage());
		return row;
	}

	static class ViewHolder {
		TextView imageTitle;
		ImageView image;
	}
}
```

The getView() method implementation is necessary, it is responsible for creating a new View for each grid item. When this is called, a View is passed in, which is normally a recycled object, so there’s a check to see if the object is null. If it is null, an ViewHolder is instantiated and configured for holding an ImageView and a TextView. ViewHolder design patterns are efficient while using composite layouts.

Notice that the above adapter is working on a ImageItem pojo Class. Create a new class for ImageItem and add the following code snippets.

```java
public class ImageItem {
	private Bitmap image;
	private String title;

	public ImageItem(Bitmap image, String title) {
		super();
		this.image = image;
		this.title = title;
	}

	public Bitmap getImage() {
		return image;
	}

	public void setImage(Bitmap image) {
		this.image = image;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
```

## 5\. Setting adapter to GridView

Now we are almost ready to hook up grid view on activity. In our activity we will initialize the GridView by calling `findViewById(int)` method. This method takes the same id as provided in the layout xml file. The `setAdapter()` method then sets a custom adapter (GridViewAdapter) as the source for all items to be displayed in the grid.

```java
public class MainActivity extends ActionBarActivity {
    private GridView gridView;
    private GridViewAdapter gridAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        gridView = (GridView) findViewById(R.id.gridView);
        gridAdapter = new GridViewAdapter(this, R.layout.grid_item_layout, getData());
        gridView.setAdapter(gridAdapter);
    }

    // Prepare some dummy data for gridview
    private ArrayList<ImageItem> getData() {
        final ArrayList<ImageItem> imageItems = new ArrayList<>();
        TypedArray imgs = getResources().obtainTypedArray(R.array.image_ids);
        for (int i = 0; i < imgs.length(); i++) {
            Bitmap bitmap = BitmapFactory.decodeResource(getResources(), imgs.getResourceId(i, -1));
            imageItems.add(new ImageItem(bitmap, "Image#" + i));
        }
        return imageItems;
    }
}
```

Note that in this example, we are using the static data and image defined in strings.xml file. All the images used in this example is available for download. Visit download section to get the complete project source code.

At this point we can run the application and and can see the grid view in action.

## 6\. Handling GridView click action

When user click on any grid item, we have to take user to details activity by passing the image and title of the grid item clicked. To do this we can call `setOnItemClickListener()` method by passing the instance of OnItemClickListener.

```java
gridView.setOnItemClickListener(new OnItemClickListener() {
public void onItemClick(AdapterView<?> parent, View v, int position, long id) {
	ImageItem item = (ImageItem) parent.getItemAtPosition(position);
	//Create intent
	Intent intent = new Intent(MainActivity.this, DetailsActivity.class);
	intent.putExtra("title", item.getTitle());
	intent.putExtra("image", item.getImage());

	//Start details activity
	startActivity(intent);
}
```

Learn  more about [passing data from one activity](/articles/pass-a-data-from-one-activity-to-another-in-android "How to pass a data from one Activity to another in Android") to another here.

## 7\. Customizing GridView style

We are pretty much good with the GridView gallery, let us do some customization such as changing the background color of a grid item while user is clicks.

For this, let us define a color selector `grid_color_selector.xml` and place it inside drawable folder. We can use a selector with `grid_row.xml` layout file by using `android:background` attribute.

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/blue" android:state_pressed="true"/>
    <item android:drawable="@color/blue" android:state_selected="true"/>
    <item android:drawable="@color/white"/>
</selector>
```

## 8\. Creating details activity

Create a new layout file named `details_activity.xml`. This will be used for the layout for my DetailsActivity.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#000">

    <ImageView
        android:id="@+id/image"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_gravity="center"
        android:scaleType="fitCenter" />

    <TextView
        android:id="@+id/title"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom"
        android:background="#00000c"
        android:padding="10dp"
        android:textColor="#fff"
        android:textSize="20dp" />
</FrameLayout>
```

The above layout is quite simple with an ImageView for displaying full sized image and TextView for displaying the title. Now let us crete DetailsActivity and use the above layout to display the selected image.

```java
public class DetailsActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.details_activity);

        String title = getIntent().getStringExtra("title");
        Bitmap bitmap = getIntent().getParcelableExtra("image");

        TextView titleTextView = (TextView) findViewById(R.id.title);
        titleTextView.setText(title);

        ImageView imageView = (ImageView) findViewById(R.id.image);
        imageView.setImageBitmap(bitmap);
    }
}
```

Well, we have now completed the whole exercise to build image gallery using Android GridView. If you find any problem, or something is missing, you can download code and compare your code with mine.

## 9\. Download Complete Example

\[download url=”https://github.com/javatechig/Android-GridView-Example”\]
