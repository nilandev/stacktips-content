---
id: 62
title: How to Integrate Firebase Cloud Messaging for Android
slug: how-to-integrate-firebase-cloud-messaging-for-android
excerpt: In this tutorial, we will see how to configure and use Firebase Cloud Messaging platform in your Android application.
difficulty: beginners
publishedDate: "2016-08-15T03:20:48.000Z"
updatedDate: "2025-09-16T23:05:22.851Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/advance-android-tutorials/tree/master/firebase-messaging-exmaple"
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Mobile push notifications are used to send important messages to mobile devices when the user is not actively using your application. App developers use mobile push notifications to do a lot of things; for example, let the user know about a sale or let the user know about sports score updates.

In this tutorial, we will see how to configure and use Firebase Cloud Messaging platform in your Android application.  

## What is Firebase Cloud Messaging?

Firebase Cloud Messaging (FCM) is the new version of GCM. Built on top of the GCM infrastructure, it provides the ability to send messages to multiple platforms beyond Android: iOS and Mobile web.

-   Via Firebase dashboard, anyone (even nontechnical users) can now easily send and schedule messages directly to a segment of users or to a specific device.
-   Google recommend developers to upgrade to FCM and use it for all new App developments. And they have announced that all the new client-side features will be added to FCM SDKs only.
-   However, all the existing applications built on GCM will still continue to work.
-   FCM SDK makes it easy for developers to integrate the cloud messaging. Now you no longer have manually registered your device with GCM server. The FCM SDK will take care of itself.

Let us see how to integrate Firebase Cloud Messaging into your Android application.

## Configure the Firebase SDK.

Let us begin with creating a Firebase project in the [Firebase console](https://console.firebase.google.com). You will be asked to log in with your Google Mail account. Once you logged in, select **Add App** button to create a new project in Firebase Console.

1.  Select the **Android platform** to continue with Android Firebase configuration.

[![Create new project in Firebase console- Select Platform](/media/articles/83/Create-new-project-in-Firebase-console-Select-Platform.png)](http://stacktips.com)

2.  If you have not created any app before, you will be asked to select the **Project Name** and **Country Region**. Provide the details and Continue with the configuration.
3.  Enter your Android app package name. This should be same as defined in your android `AndroidMaifest.xml` file.

[![Firebase Android Configuration](/media/articles/83/Firebase-Android-Configuration-e1470927322754-620x466.png)](http://stacktips.com)

4.  You may provide the debug `keystore` SHA-1 certificate. However this is optional and hence you may leave it empty.
5.  Select **Add App** button. This will download the `google-services.json` configuration file for your app. Copy this file into your project’s module folder, typically inside app/ directory.

[![Project Structure](/media/articles/83/Project-Structure.png)](http://stacktips.com)

Screenshot depicts project structure after adding google-services.json file

7.  Now, add the required Firebase SDK dependencies to your project. Modify the project level build.gradle (<project>/build.gradle) file and add the google-services.

```java
buildscript {
  dependencies {
    // Add this line
    classpath 'com.google.gms:google-services:3.0.0'
  }
}
```

And, add the following to app module level `build.gradle` file.

```java
apply plugin: 'com.android.application'
android {
   ....
}
dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    ...
    //Add this
    compile 'com.google.firebase:firebase-messaging:9.4.0'
}

// Add to the bottom of the file
apply plugin: 'com.google.gms.google-services'
```

After the dependencies are added **Sync** your project with Gradle file changes. With this, we’re done with the project configuration.

## Integrating Firebase Cloud Messaging

Before push notification messages are delivered, each device is registered with GCM. The Firebase Cloud Messaging SDK takes care of the registration process. Upon successful registration it calls `onTokenRefresh()` callback where you can retrieve the token.

You can retrieve the token by extending `FirebaseInstanceIdService` class.

```java
public class FCMInitializationService extends FirebaseInstanceIdService {
    private static final String TAG = "FCMInitializationService";

    @Override
    public void onTokenRefresh() {
        String fcmToken = FirebaseInstanceId.getInstance().getToken();

        Log.d(TAG, "FCM Device Token:" + fcmToken);
        //Save or send FCM registration token
    }
}
```

Register the `FCMInitializationService` service in your `AndroidManifest.xml`:

```xml
<service android:name="com.stacktips.example.FCMInitializationService">
    <intent-filter>
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
    </intent-filter>
</service>
```

Please note, implementing FCM requires **android.permission.INTERNET** permission. Make sure it is declare in your **AndroidManifest.xml**.

The `FirebaseMessagingService` class is the base class for communicating with Firebase Messaging. It also provides functionality such as automatically displaying notifications.

The `onMessageReceived()` method is called when a message is received.

```java
public class FCMCallbackService extends FirebaseMessagingService {
    private static final String TAG = "FCMCallbackService";

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d(TAG, "From:" + remoteMessage.getFrom());
        Log.d(TAG, "Message Body:" + remoteMessage.getNotification().getBody());
        sendNotification(remoteMessage.getNotification());
    }

    private void sendNotification(RemoteMessage.Notification notification) {
        int color = getResources().getColor(R.color.notification_color);
        Uri defaultSoundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);

        Intent intent = new Intent(this, MainActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent,
                PendingIntent.FLAG_ONE_SHOT);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(this)
                .setContentTitle(notification.getTitle())
                .setContentText(notification.getBody())
                .setAutoCancel(true)
                .setSmallIcon(R.drawable.ic_offer)
                .setColor(color)
                .setStyle(new NotificationCompat.BigTextStyle().bigText(notification.getBody()))
                .setSound(defaultSoundUri)
                .setContentIntent(pendingIntent);

        NotificationManager notificationManager = (NotificationManager)
                getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(0, builder.build());
    }
}
```

Register the `FCMCallbackService` class in your `AndroidManifest.xml` file:

```xml
<service android:name="com.stacktips.example.FCMCallbackService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```

## Publishing Message from Firebase Console

Let us now visit Firebase Console to test if notifications are working. Open your app in Firebase Console. Click on Notifications tab in the left panel. If visiting this for the first time, click on Send Your First Message.

Enter details and click **Send Message** button.

[![Send Firebase Notification](/media/articles/83/Send-Firebase-Notification-620x388.png)](http://stacktips.com)

Now, You should receive a notification in your device.

![Firebase Cloud Messaging for Android Example](/media/articles/83/Firebase-Cloud-Messaging-for-Android-Example-620x507.png)
