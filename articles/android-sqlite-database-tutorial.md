---
id: 242
title: Android SQLite Database Tutorial
slug: android-sqlite-database-tutorial
excerpt: This tutorial describes how to use SQLite database in Android applications. It also demonstrates how to create new table, insert records, and modify records with example
difficulty: beginners
publishedDate: "2014-05-07T13:25:08.000Z"
updatedDate: "2025-09-16T23:05:32.053Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Over the course of this article, we will focus on Android SQLite database Tutorial. It also demonstrates how to create new table, insert records, and modify records with example.

## 1\. What is SQLite

SQLite is an Open-Source embedded SQL database engine. This provides relational database management structure for storing user defined records in the form of tables. SQLite is light weight when it comes to resource usage and it doesn’t need to have any server setup like other RDBMS systems. It is an cross platform and self-contained database.

Android is shipped with SQLite version 3.4.0.

## 2\. Sample TODO Application

In this tutorials we will make a simple TODO application that will store, manipulate the user created records. For the sake of simplicity we have only less number of columns in this application. You may like to extend this to make it an full-fledged application. In this example we will create a database `JAVATECHIG_TODOS.DB` and a table named `TODO` for storing all todo’s that user is creating. You can find a demo link to it on [Google play.](https://play.google.com/store/apps/details?id=com.javatechig.todo)

## 3\. Create New Database

Database names must be unique within an application, not across all applications. Let us have a look at the database structure from the below image. We have three columns in `TODO` table. `_id` is with INTEGER data type and a primary key with auto increment, subject is TEXT type and `description` is also TEXT type.

[![database design](/media/articles/312/database-design-620x208.png)](http://stacktips.com)

## 4\. Create a New Android project

Create a new android project named “TODOApp”. Here in this example we use minSdkVersion as 14, targetSdkVersion as 19 and package name is `com.javatechig.todo`

## 5\. Database Helper Class

Now let us have a look into database helper classes. Database helper `DBhelper.java` and `SQLController.java` class helps to perform all database CURD operations.

**DBhelper.java**

```java
package com.javatechig.todo;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DBhelper extends SQLiteOpenHelper {

	// Table Name
	public static final String TABLE_NAME = "TODOS";

	// Table columns
	public static final String _ID = "_id";
	public static final String TODO_SUBJECT = "subject";
	public static final String TODO_DESC = "description";
	// Database Information
	static final String DB_NAME = "JAVATECHIG_TODOS.DB";

	// database version
	static final int DB_VERSION = 1;

	// Creating table query
	private static final String CREATE_TABLE = "create table " + TABLE_NAME + "(" + _ID
			+ " INTEGER PRIMARY KEY AUTOINCREMENT, " + TODO_SUBJECT + " TEXT NOT NULL, " + TODO_DESC + " TEXT);";

	public DBhelper(Context context) {
		super(context, DB_NAME, null, DB_VERSION);
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		db.execSQL(CREATE_TABLE);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
		onCreate(db);
	}
}
```

In the above code we have declared various constants which are used as database name, table name and column names. DBhelper class extends `SQLiteOpenHelper` class and overrides `onCreate()` and `onUpgrade()` method.

### 5.1. Create Database

The `onCreate()` method will be called on first time use of the application. Here we will construct SQLite database. This method is called only if the database file is not created before. Once the database is successfully created, it creates .DB files in your `data/data/<your app package name>/databases/` folder. You can view this from DDMS from your emulator, but if you use your physical device you may not be able to browse this file unless your device is routed.

[![Database location](/media/articles/312/Database-location-620x350.png)](http://stacktips.com)

### 5.2. Upgrade Database

The `onUpgrade()` method is called only when the database version is changed. Database version is an integer value which is specified inside the DBhelper constructor.

## 6\. Create Database Controller

It is always a best practice to define an controller or separate class for all your database operations. Here in this example we are creating an new class that performs all database related operations like add, update, delete records into table.

Before performing any database operations like add, update, delete records in a table, first open the database by calling `getWritableDatabase()` method. Make sure to close database connection once it is opened.

### 6.1. Add New TODO Record

```java
public void insert(String name, String desc) {
	ContentValues contentValue = new ContentValues();
	contentValue.put(DBhelper.TODO_SUBJECT, name);
	contentValue.put(DBhelper.TODO_DESC, desc);
	database.insert(DBhelper.TABLE_NAME, null, contentValue);
}
```

### 6.2. Fetching All Records

```java
public Cursor fetch() {
	String[] columns = new String[] { DBhelper._ID, DBhelper.TODO_SUBJECT, DBhelper.TODO_DESC};
	Cursor cursor = database.query(DBhelper.TABLE_NAME, columns, null, null, null, null, null);
	if (cursor != null) {
		cursor.moveToFirst();
	}
	return cursor;
}
```

### 6.3. Modify Record

```java
public int update(long _id, String name, String desc) {
	ContentValues contentValues = new ContentValues();
	contentValues.put(DBhelper.TODO_SUBJECT, name);
	contentValues.put(DBhelper.TODO_DESC, desc);
	int i = database.update(DBhelper.TABLE_NAME, contentValues, DBhelper._ID + " = " + _id, null);
	return i;
}
```

### 6.4. Delete Record

Refer SQLiteController class.

### 6.5. Close Database Connection

Refer SQLiteController class.

## 7\. Controller Complete Code

**SQLController.java**

```java
package com.javatechig.todo;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;

public class SQLController {

	private DBhelper dbHelper;
	private Context ourcontext;
	private SQLiteDatabase database;

	public SQLController(Context c) {
		ourcontext = c;
	}

	public SQLController open() throws SQLException {
		dbHelper = new DBhelper(ourcontext);
		database = dbHelper.getWritableDatabase();
		return this;

	}

	public void close() {
		dbHelper.close();
	}

	public void insert(String name, String desc) {
		ContentValues contentValue = new ContentValues();
		contentValue.put(DBhelper.TODO_SUBJECT, name);
		contentValue.put(DBhelper.TODO_DESC, desc);
		database.insert(DBhelper.TABLE_NAME, null, contentValue);
	}

	public Cursor fetch() {
		String[] columns = new String[] { DBhelper._ID, DBhelper.TODO_SUBJECT,
				DBhelper.TODO_DESC };
		Cursor cursor = database.query(DBhelper.TABLE_NAME, columns, null,
				null, null, null, null);
		if (cursor != null) {
			cursor.moveToFirst();
		}
		return cursor;
	}

	public int update(long _id, String name, String desc) {
		ContentValues contentValues = new ContentValues();
		contentValues.put(DBhelper.TODO_SUBJECT, name);
		contentValues.put(DBhelper.TODO_DESC, desc);
		int i = database.update(DBhelper.TABLE_NAME, contentValues,
				DBhelper._ID + " = " + _id, null);
		return i;
	}

	public void delete(long _id) {
		database.delete(DBhelper.TABLE_NAME, DBhelper._ID + "=" + _id, null);
	}
}
```

## 8\. Application Activity Layout

In this example, we have three major layout files. One for listing all TODO items, second one is for adding all records and the third one is for update/deleting records.

**fragment\_todo\_list.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent" >

    <ListView
        android:id="@+id/list_view"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:dividerHeight="1dp"
        android:padding="10dp" >
    </ListView>

    <TextView
        android:id="@+id/empty"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="@string/empty_list_text" />

</RelativeLayout>
```

**activity\_add\_record.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp" >

    <EditText
        android:id="@+id/subject_edittext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:hint="@string/enter_title" >

        <requestFocus />
    </EditText>

    <EditText
        android:id="@+id/description_edittext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:hint="@string/enter_desc"
        android:inputType="textMultiLine"
        android:minLines="5" >
    </EditText>

    <Button
        android:id="@+id/add_record"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:text="@string/add_record" />
</LinearLayout>
```

**activity\_modify\_record.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="10dp" >

    <EditText
        android:id="@+id/subject_edittext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="10dp"
        android:ems="10"
        android:hint="@string/enter_title" />
    
       <EditText
        android:id="@+id/description_edittext"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:hint="@string/enter_desc"
        android:inputType="textMultiLine"
        android:minLines="5" >
    </EditText>
    
    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:weightSum="2"
        android:gravity="center_horizontal"
        android:orientation="horizontal" >

        <Button
            android:id="@+id/btn_update"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="@string/btn_update" />

        <Button
            android:id="@+id/btn_delete"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="@string/btn_delete" />
    </LinearLayout>
</LinearLayout>
```

## 9\. Application Activity Classes

Now let us see how are the activity classes look like. We have three activity classes that does three different works. One for listing all TODO items, second adds TODO item and other helps in update/delete records.

-   ContentValues is a name value pair, used to insert or update values into database tables. ContentValus object will be passed to SQLiteDatabase object `insert()` and `update()` method.
-   Cursor is a temporary buffer area which holds results from SQLiteDatabase query.

**TodoListActivity.java**

```java
package com.javatechig.todo;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.support.v4.widget.SimpleCursorAdapter;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;
import android.widget.TextView;

public class TodoListActivity extends ActionBarActivity {
	private SQLController dbcon;
	private ListView listView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.fragment_emp_list);

		dbcon = new SQLController(this);
		dbcon.open();
		listView = (ListView) findViewById(R.id.list_view);
		listView.setEmptyView(findViewById(R.id.empty));
		// Attach The Data From DataBase Into ListView Using Crusor Adapter
		Cursor cursor = dbcon.fetch();
		String[] from = new String[] { DBhelper._ID, DBhelper.TODO_SUBJECT,
				DBhelper.TODO_DESC };
		int[] to = new int[] { R.id.id, R.id.title, R.id.desc };

		SimpleCursorAdapter adapter = new SimpleCursorAdapter(this,
				R.layout.activity_view_record, cursor, from, to);

		adapter.notifyDataSetChanged();
		listView.setAdapter(adapter);

		// OnCLickListiner For List Items
		listView.setOnItemClickListener(new OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long viewId) {
				TextView id_tv = (TextView) view.findViewById(R.id.id);
				TextView title_tv = (TextView) view.findViewById(R.id.title);
				TextView desc_tv = (TextView) view.findViewById(R.id.desc);

				String id = id_tv.getText().toString();
				String title = title_tv.getText().toString();
				String desc = desc_tv.getText().toString();

				Intent modify_intent = new Intent(getApplicationContext(),
						ModifyTodoActivity.class);
				modify_intent.putExtra("title", title);
				modify_intent.putExtra("desc", desc);
				modify_intent.putExtra("id", id);
				startActivity(modify_intent);
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		int id = item.getItemId();
		if (id == R.id.add_record) {
			Intent add_mem = new Intent(this, AddTodoActivity.class);
			startActivity(add_mem);
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
}
```

**AddTodoActivity.java**

```java
package com.javatechig.todo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;

public class AddTodoActivity extends Activity implements OnClickListener {
	private Button addTodoBtn;
	private SQLController dbController;
	private EditText subjectEditText;
	private EditText descEditText;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setTitle("Add Record");

		setContentView(R.layout.activity_add_record);
		subjectEditText = (EditText) findViewById(R.id.subject_edittext);
		descEditText = (EditText) findViewById(R.id.description_edittext);
		addTodoBtn = (Button) findViewById(R.id.add_record);
		dbController = new SQLController(this);
		dbController.open();
		addTodoBtn.setOnClickListener(this);
	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.add_record:
			final String name = subjectEditText.getText().toString();
			final String desc = descEditText.getText().toString();
			dbController.insert(name, desc);

			Intent main = new Intent(AddTodoActivity.this,
					TodoListActivity.class)
					.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
			startActivity(main);
			break;
		default:
			break;
		}
	}
}
```

**ModifyTodoActivity.java**

```java
package com.javatechig.todo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;

public class ModifyTodoActivity extends Activity implements OnClickListener {
	private EditText titleText;
	private Button updateBtn, deleteBtn;
	private long _id;
	private SQLController dbController;
	private EditText descText;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setTitle("Modify Record");
		setContentView(R.layout.activity_modify_record);

		dbController = new SQLController(this);
		dbController.open();
		titleText = (EditText) findViewById(R.id.subject_edittext);
		descText = (EditText) findViewById(R.id.description_edittext);
		updateBtn = (Button) findViewById(R.id.btn_update);
		deleteBtn = (Button) findViewById(R.id.btn_delete);

		Intent intent = getIntent();
		String id = intent.getStringExtra("id");
		String name = intent.getStringExtra("title");
		String desc = intent.getStringExtra("desc");
		_id = Long.parseLong(id);
		titleText.setText(name);
		descText.setText(desc);

		updateBtn.setOnClickListener(this);
		deleteBtn.setOnClickListener(this);
	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.btn_update:
			String title = titleText.getText().toString();
			String desc = descText.getText().toString();
			dbController.update(_id, title, desc);
			this.returnHome();
			break;
		case R.id.btn_delete:
			dbController.delete(_id);
			this.returnHome();
			break;
		}
	}

	public void returnHome() {
		Intent home_intent = new Intent(getApplicationContext(),
				TodoListActivity.class)
				.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
		startActivity(home_intent);
	}
}
```

## 10\. Download Example Code

\[download url=”https://github.com/javatechig/Advance-Android-Tutorials/tree/master/TODO%20Android%20App”\]
