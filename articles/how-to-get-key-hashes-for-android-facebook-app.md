---
id: 321
title: How to Get Key Hashes for Android App Facebook Integration
slug: how-to-get-key-hashes-for-android-facebook-app
excerpt: This section of the tutorial explains you how to get Key Hashes for Android Facebook app. Facebook SDK integration…
difficulty: beginners
publishedDate: "2013-07-10T14:18:58.000Z"
updatedDate: "2025-09-16T23:05:36.186Z"
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

This section of the tutorial explains you how to get Key Hashes for Android Facebook app. Facebook SDK integration to android require an key hash configuration.

While integrating Facebook SDK, we need to configure Facebook API console with Key Hash. If key hash is missing you will get `App mis-configured` error in Facebook dashboard.

Download the `facebook-android-sdk` and configured a new app. In the application settings enable “Native android app” and enable for Facebook login and deep linking. It asks for key hashes, and I’m stuck. After spending a generous amount of time, I have found two solutions to get the key hashes.

[](http://stacktips.com)

## Using OpenSSL and command

-   Download openssl from Google code (If you have a 64 bit machine you must download openssl-0.9.8e X64 not the latest version)
-   Extract it. Create a folder- OpenSSL in C: / and copy all files here
-   Find “debug.keystore” file path. Most likely it will be inside “C:\\Users\\.android” folder. However, if you still don’t find then perform a search. I am sure you are lucky enough to get it.
-   Find keytool.exe path. It will be inside your java/bin directory. In my system it is under “C:\\Program Files\\Java\\jdk1.6.0\_30\\bin”
-   Open command prompt (Run-> cmd->start) and go to java /bin folder (cd “C:\\Program Files\\Java\\jdk1.6.0\_30\\bin” command will do it for you)
-   Now you run the below command.

```
C:\Program Files\Java\jdk1.6.0_30\bin>keytool -exportcert -alias androiddebugkey -keystore "C:\Users\.android\debug.keystore" | "C:\OpenSSL\bin\openssl" sha1 -binary |"C:\OpenSSL\bin\openssl" base64
```

-   Provide password (android), as when you are prompted. You are done. It will generate you the key-hash

[](http://stacktips.com)

## Using a method call from Android

Using below code snippet, you can get the hash code.

```java
public static String printKeyHash(Activity context) {
	PackageInfo packageInfo;
	String key = null;
	try {
		//getting application package name, as defined in manifest
		String packageName = context.getApplicationContext().getPackageName();

		//Retriving package info
		packageInfo = context.getPackageManager().getPackageInfo(packageName,
				PackageManager.GET_SIGNATURES);
			
		Log.e("Package Name=", context.getApplicationContext().getPackageName());
		
		for (Signature signature : packageInfo.signatures) {
			MessageDigest md = MessageDigest.getInstance("SHA");
			md.update(signature.toByteArray());
			key = new String(Base64.encode(md.digest(), 0));
		
			// String key = new String(Base64.encodeBytes(md.digest()));
			Log.e("Key Hash=", key);
		}
	} catch (NameNotFoundException e1) {
		Log.e("Name not found", e1.toString());
	}
	catch (NoSuchAlgorithmException e) {
		Log.e("No such an algorithm", e.toString());
	} catch (Exception e) {
		Log.e("Exception", e.toString());
	}

	return key;
}
```

You may use any of the above methods to generate the key hash for your facebook app.
