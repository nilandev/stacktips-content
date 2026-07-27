---
id: 308
title: How to Programmatically Zip and Unzip File in Android
slug: how-to-programmatically-zip-and-unzip-file-in-android
excerpt: This tutorial explains “How to Programmatically Zip and Unzip File in Android”. Zipping means writting (compress) data into zip files. Below code snippet will help you to zip and unzip files using a generic wrapper class that allows you to easily zip files in Android.
difficulty: beginners
publishedDate: "2013-07-30T07:44:37.000Z"
updatedDate: "2025-09-16T23:05:35.710Z"
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

This tutorial explains “How to Programmatically Zip and Unzip File in Android”. Zipping means writing (compress) data into zip files. Below code snippet will help you to zip and unzip files using a generic wrapper class that allows you to easily zip files in Android.

# Why you need a Zip file?

1.  You couldn’t send multiple attachments using Intents to the Google Mail app. The quickest way around that was of course to compress all of the files into one (ZIP).
2.  For the applications that need to send multiple files to server, it is always easiest to create a zip file and send it across over network.

I have created both zip and unzip method inside a wrapper class called `**ZipManager**`. You may create the same way or you may like to use in your own way.

# How to Zip files

Crete a sample android activity and add the following permission to application Mainfest.xml file. These persmissions are required to store data to your device storage.

<uses-permission android:name="android.permission.WRITE\_INTERNAL\_STORAGE" />
<uses-permission android:name="android.permission.WRITE\_EXTERNAL\_STORAGE"/>

You can use below code to create zip file. Just copy paste to make it work in your activity

public void zip(String\[\] \_files, String zipFileName) {
		try {
			BufferedInputStream origin = null;
			FileOutputStream dest = new FileOutputStream(zipFileName);
			ZipOutputStream out = new ZipOutputStream(new BufferedOutputStream(
					dest));
			byte data\[\] = new byte\[BUFFER\];

			for (int i = 0; i < \_files.length; i++) {
				Log.v("Compress", "Adding: " + \_files\[i\]);
				FileInputStream fi = new FileInputStream(\_files\[i\]);
				origin = new BufferedInputStream(fi, BUFFER);

				ZipEntry entry = new ZipEntry(\_files\[i\].substring(\_files\[i\].lastIndexOf("/") + 1));
				out.putNextEntry(entry);
				int count;

				while ((count = origin.read(data, 0, BUFFER)) != -1) {
					out.write(data, 0, count);
				}
				origin.close();
			}

			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

**`BUFFER`** is used for limiting the buffer memory size while reading and writing data it to the zip stream

**`_files`** array holds all the file paths that you want to zip

**`zipFileName`** is the name of the zip file.

You can use this in your activity

// declare an array for storing the files i.e the path
// of your source files
String\[\] s = new String\[2\];

// Type the path of the files in here
s\[0\] = inputPath + "/image.jpg";
s\[1\] = inputPath + "/textfile.txt"; // /sdcard/ZipDemo/textfile.txt

// first parameter is d files second parameter is zip file name
ZipManager zipManager = new ZipManager();

// calling the zip function
zipManager.zip(s, inputPath + inputFile);

You can get complete working eclipse project to end of this tutorial.

# How to UnZip files

Now let us look into unzipping files. For unzipping you need to know the file path for .zip file and the path to the directory extract the files.

public void unzip(String \_zipFile, String \_targetLocation) {

		//create target location folder if not exist
		dirChecker(\_targetLocatioan);

		try {
			FileInputStream fin = new FileInputStream(\_zipFile);
			ZipInputStream zin = new ZipInputStream(fin);
			ZipEntry ze = null;
			while ((ze = zin.getNextEntry()) != null) {

				//create dir if required while unzipping
				if (ze.isDirectory()) {
					dirChecker(ze.getName());
				} else {
					FileOutputStream fout = new FileOutputStream(\_targetLocation + ze.getName());
					for (int c = zin.read(); c != -1; c = zin.read()) {
						fout.write(c);
					}

					zin.closeEntry();
					fout.close();
				}

			}
			zin.close();
		} catch (Exception e) {
			System.out.println(e);
		}
}

You can use this method in your activity

ZipManager zipManager = new ZipManager();
zipManager.unzip(inputPath + inputFile, outputPath);

# Download Complete Example

Here you can download complete eclipse project source code from GitHub.

[Download Complete Source Code from GitHub](https://github.com/javatechig/javatechig-android-advanced/tree/master/com.javatechig.androidzip)

[![How to Programmatically Zip and Unzip File in Android  (2)](/media/articles/401/How-to-Programmatically-Zip-and-Unzip-File-in-Android-2.png)](http://stacktips.com)

[![How to Programmatically Zip and Unzip File in Android](/media/articles/401/How-to-Programmatically-Zip-and-Unzip-File-in-Android-.png)](http://stacktips.com)
