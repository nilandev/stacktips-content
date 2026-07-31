---
id: 154
title: SharedPreferences Example in Xamarin Android
slug: shared-preferences-example-in-xamarin-android
excerpt: Shared preferences are persistence key/value data pairs, used to store primitive data pairs such as bool, float, int, string and long. The data saved into android preference are persisted across different user sessions and is private to the application it is created. Any other application cannot access to it.
difficulty: beginners
publishedDate: "2015-05-29T00:11:14.000Z"
updatedDate: "2025-09-16T23:05:27.836Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - xamarin
tags:
  - sharedpreferences-xamarin
  - android-key-value-storage
  - isharedpreferenceseditor
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Shared preferences are persistence key/value data pairs, used to store primitive data pairs such as bool, float, int, string and long. The data saved into android preference are persisted across different user sessions and is private to the application it is created. Any other application cannot access it.

For using shared preference to saving data pairs, you need first get an instance of `ISharedPreferences` interface. A shared preference can be specific to an activity or made global to all activities in the application. If you want to create a single preference file specific to an activity you can use `Activity.GetPreferences` to initialize ISharedPreferences interface. For getting the application level preference, you can call `GetSharedPreferences` method passing the preference name and mode of operation.

```csharp
ISharedPreferences prefs = Application.Context.GetSharedPreferences ("PREF_NAME", FileCreationMode.Private);
```

Now let us call `Edit()` to get an instance of `ISharedPreferencesEditor`. This batches all of the changes made to value in shred preferences and saves only when there is a call to `Commit()` or `Apply()` is made.

```csharp
ISharedPreferencesEditor editor = prefs.Edit();
editor.PutInt("your_key1" ,10);
editor.PutString("your_key2", "Xamarin Example");
editor.Apply();
```

To read values from shared preferences, we can use methods such as `GetString()`, `GetInt()`, `GetFloat()` etc. by providing proper key. The following snippets retrieves the values stored in the above step.

```csharp
var value1 = prefs.GetInt ("your_key1", 0);
var value2 = prefs.GetString ("your_key2", null);
```
