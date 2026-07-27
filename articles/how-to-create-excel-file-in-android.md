---
id: 197
title: How To Create Excel File In Android
slug: how-to-create-excel-file-in-android
excerpt: In this tutorial, we will explain how to create an Excel file in Android using Java for the Excel library.
difficulty: intermediate
publishedDate: "2014-09-16T05:35:39.000Z"
updatedDate: "2025-09-16T23:05:29.923Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - blog
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Excel is a widely used software for creating and managing data. In this tutorial, we will show you how to create an Excel file in Android using Java for Excel library. The Java for Excel library provides a simple and easy-to-use API for working with Excel files in Java.

[android SQLite database tutorial](/articles/android-sqlite-database-tutorial "Android SQLite Database Tutorial"). We recommend you to have a glance at it before going through this example.  

In our previous example, we have explained you how to create an TODO application in android using SQLite database. Now in this post we will export the data saved in database to an excel file and will store it on SDCard.

### Step-1

Download Java for Excel library from below path.  
[http://jexcelapi.sourceforge.net/](http://jexcelapi.sourceforge.net/)  
[http://sourceforge.net/projects/jexcelapi/files/](http://sourceforge.net/projects/jexcelapi/files/)

### Step-2

Export and save data from cursor into excel spreadsheet and saves the spreadsheet into external storage directory.

```java
private void exportToExcel(Cursor cursor) {		
	final String fileName = "TodoList.xls";
	
	//Saving file in external storage
	File sdCard = Environment.getExternalStorageDirectory();	
	File directory = new File(sdCard.getAbsolutePath() + "/javatechig.todo");
		
	//create directory if not exist
	if(!directory.isDirectory()){
		directory.mkdirs();	
	}
		
	//file path
	File file = new File(directory, fileName);
	
	WorkbookSettings wbSettings = new WorkbookSettings();
	wbSettings.setLocale(new Locale("en", "EN"));		
	WritableWorkbook workbook;
		
	try {
		workbook = Workbook.createWorkbook(file, wbSettings);			
		//Excel sheet name. 0 represents first sheet
		WritableSheet sheet = workbook.createSheet("MyShoppingList", 0);

		try {
			sheet.addCell(new Label(0, 0, "Subject")); // column and row
			sheet.addCell(new Label(1, 0, "Description"));				
			if (cursor.moveToFirst()) {
				do {
					String title = cursor.getString(cursor.getColumnIndex(DatabaseHelper.TODO_SUBJECT));
					String desc = cursor.getString(cursor.getColumnIndex(DatabaseHelper.TODO_DESC));

					int i = cursor.getPosition() + 1;						
					sheet.addCell(new Label(0, i, title));
					sheet.addCell(new Label(1, i, desc));						
				} while (cursor.moveToNext());
			}				
			//closing cursor
			cursor.close();					
		} catch (RowsExceededException e) {
			e.printStackTrace();
		} catch (WriteException e) {
			e.printStackTrace();
		}			
		workbook.write();		
		try {
			workbook.close();
		} catch (WriteException e) {
			e.printStackTrace();
		}
	} catch (IOException e) {
		e.printStackTrace();
	}
}
```

This code exports the contents of a Cursor object to an Excel file in the external storage of an Android device.

The method exportToExcel takes a Cursor object as a parameter, which contains the data to be exported. It first creates a file with the name "TodoList.xls" in a directory named "javatechig.todo" in the external storage of the device.  

After creating the file, it creates a new Workbook object using the jxl library to create a new Excel workbook. It then creates a new sheet called "MyShoppingList" in the workbook.  

The code then loops through each row in the Cursor object, retrieves the data from the columns, and adds the data to the cells in the Excel sheet using the addCell method. The first row of the sheet contains the column headers "Subject" and "Description".  

Finally, the workbook is written to the file, and the workbook and cursor objects are closed to release resources.
