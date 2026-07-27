---
id: 134
title: How to create a background service in Android
slug: how-to-create-a-background-service-in-android
excerpt: To create a background service, first you need to add the service into your manifest file. Then, create a class that extends service. Finally, in your activity start the service.
difficulty: beginners
publishedDate: "2015-07-30T22:14:07.000Z"
updatedDate: "2025-09-16T23:05:26.954Z"
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

To create a background service, first you need to add the service into your manifest file. Then, create a class that extends service. Finally, in your activity start the service.

1\. First add the following service declaration in your application manifest file.

```xml
<service android:enabled="true" android:name=".MyService">
</service>
```

2\. Create a new class MyService that extends Service class.

```java
public class MyService extends Service {
  @Override
  public void onCreate() {
  }
 
  @Override
  public void onStart(Intent intent, int startId) {
    //do something
  }
 
  @Override
  public IBinder onBind(Intent intent) {
    return null;
  }
}
```

3\. To start the service and stop the service:

```java
 
public class MyActivity extends Activity {
  @Override
  public void onCreate() {
    …
    startService(new Intent(this, MyService.class);
  }
 
  @Override
  public void onStop() {
    …
    stopService(new Intent(this, MyService.class));
  }
}
```
