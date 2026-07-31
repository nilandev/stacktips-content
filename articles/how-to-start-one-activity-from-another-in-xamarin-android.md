---
id: 256
title: How to Start One Activity From Another in Xamarin Android
slug: how-to-start-one-activity-from-another-in-xamarin-android
excerpt: In this example we’ll look at how to create multiple activities and communicate between them. In this example we will create two activities and pass data between them.
difficulty: beginners
publishedDate: "2014-02-21T23:56:56.000Z"
updatedDate: "2025-09-16T23:05:33.012Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - xamarin-android-startactivity
  - xamarin-intent-putextra
  - startactivityforresult-xamarin
  - passing-data-between-activities
course: null
displayOrder: 0
seo: 
  metaTitle: "Start One Activity From Another in Xamarin.Android"
  metaDescription: "Learn how to start an activity from another in Xamarin.Android, pass data with Intent extras, and receive results back using StartActivityForResult."
  metaKeywords: null
---

In this example we will examine how to multiple activities communicate each other.

Android application is composed of multiple activities and they often communicate with each other by passing data. For example, lets say your application contains two activity Activity1 and Activity2. Activity1 is marked as launcher activity, which means it will be invoked automatically when user taps on the application icon from applications list. Note that, there can be at most one launcher activity throughout application. When user clicks on a button in Activity1, it will invoke Activity2.

# Starting activity in Xamarin.Android

Xamarin Android provides easy to use startActivity method in activity context. The following code snippet will start Activity2 without passing any data

```csharp
 StartActivity(typeof(Activity2));
```

# Starting activity by passing arguments

The above code block starts Activity2 without passing any data. However Xamarin android allows you to pass data from one activity to another using Intent bundle. All you have to do is to pass the instance of Intent to `startActivity()` method.

The Intent describes the activity to start and carries the data bundle to be sent to target activity. Intent can carry data types as key-value pairs called extras. The `putExtra()` method takes the key name in the first parameter and the value in the second parameter. Passing data between activities is limited to primitive data types. For object type you must use Parceable or Serilizable. For more information on the data types and intent, you can refer to official android documentation from below links.

http://developer.android.com/reference/android/content/Intent.html

http://developer.android.com/reference/android/os/Bundle.html

```csharp
Intent intent = new Intent(this, typeof(MainActivity2));
intent.PutExtra("name", "Nilanchala");
intent.PutExtra("empid", 1001);
StartActivity(intent);
```

Retrieving data bundles received

We can receive the above passed data in “Activity2” using the below code snippet

```csharp
string name = Intent.GetStringExtra("name");
int roll = Intent.GetIntegerExtra("empid");
```

Note that you must use the same keys such as **“name”** and **“empid”** while retrieving the values from Activity2.

# Receiving result back from Activity

If you want to receive a result from the activity when it finishes, call `startActivityForResult()` instead of `startActivity()`. Your activity receives the result as a separate Intent object in your activity’s `onActivityResult()` callback.
