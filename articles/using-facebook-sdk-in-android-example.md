---
id: 82
title: Using Facebook SDK in Android Example
slug: using-facebook-sdk-in-android-example
excerpt: This tutorial explains how to how to use Facebook SDK APIs in Android. This tutorial explains Login to Facebook, Share status message to Facebook wall and Share Image to Facebook wall using Facebook SDK.
difficulty: beginners
publishedDate: "2014-01-19T22:12:03.000Z"
updatedDate: "2025-09-16T23:05:33.197Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - bootstrap
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial explains how to how to use Facebook SDK APIs in Android. This tutorial allows user to login to Facebook first and then allows to do following things

1.  Login to Facebook
2.  Share status message to Facebook wall
3.  Share Image to Facebook wall

This example using Facebook SDK 3.0 for Android which is available for free download from the Facebook’s developer console. This Facebook SDK comes with almost all the functionality of the native Facebook app to your own Android app. Follow the below steps

## Creating an App on Facebook

Before integrating Facebook SDK to your android app you have to create a Facebook app on your Facebook developer console. Visit **[Facebook developer console](https://developers.facebook.com/apps "https://developers.facebook.com/apps")** and create a new Facebook application. Once you create the application you will get an app id, which is used to uniquely distinguish your application from others. This AppID will be used along with each of the request we make to Facebook server. Don’t get panic, sometime it takes some time to make your application go live.

## Using Facebook SDK in Android

1.  Now you have created an Facebook app in developer console and you are ready to start with our Android app. You may create a new project or import an existing one.
2.  Import Facebook SDK to your eclipse workspace and make sure it builds successfully. Once it builds we have to attach the Facebook library project to your Android project. The easiest way to attach the SDK is to add it as an Android library by going to the project’s properties.
3.  Now do the following changes to your application manifest file. Put the following code before </application> tag. Make sure you are using your own AppID obtained from Facebook developer console.

```xml
<activity android:name="com.facebook.LoginActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar" />

<meta-data android:name="com.facebook.sdk.ApplicationId"
            android:value="@string/app_id" />
```

Note: Make sure that you have give android.permission.INTERNET permission in your application manifest file.

### Activity Layout

Now define layout for your activity class. In this example, We have three sample buttons.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:facebook="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center_horizontal"
    android:orientation="vertical"
    android:padding="20dp" >

    <com.facebook.widget.LoginButton
        android:id="@+id/fb_login_button"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="5dp"
        facebook:confirm_logout="false"
        facebook:fetch_user_info="true" />

    <TextView
        android:id="@+id/user_name"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:layout_margin="10dp"
        android:textSize="18sp" />

    <Button
        android:id="@+id/update_status"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/update_status" />

    <Button
        android:id="@+id/post_image"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/post_image" />

</LinearLayout>
```

### Activity Java Class

```java

public class FBActivity extends FragmentActivity {
    private LoginButton loginBtn;
    private Button postImageBtn;
    private Button updateStatusBtn;

    private TextView userName;
    private UiLifecycleHelper uiHelper;
    private static final List<String> PERMISSIONS = Arrays.asList("publish_actions");
    private static String message = "Sample status posted from android app";

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        uiHelper = new UiLifecycleHelper(this, statusCallback);
        uiHelper.onCreate(savedInstanceState);
        setContentView(R.layout.activity_facebook);

        userName = (TextView) findViewById(R.id.user_name);
        loginBtn = (LoginButton) findViewById(R.id.fb_login_button);
        loginBtn.setUserInfoChangedCallback(new UserInfoChangedCallback() {
            @Override
            public void onUserInfoFetched(GraphUser user) {
                if (user != null) {
                    userName.setText("Hello, " + user.getName());
                } else {
                    userName.setText("You are not logged");
                }
            }
        });

        postImageBtn = (Button) findViewById(R.id.post_image);
        postImageBtn.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                postImage();
            }
        });

        updateStatusBtn = (Button) findViewById(R.id.update_status);
        updateStatusBtn.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
            }
        });
        buttonsEnabled(false);
    }

    private Session.StatusCallback statusCallback = new Session.StatusCallback() {
        @Override
        public void call(Session session, SessionState state, Exception exception) {
            if (state.isOpened()) {
                buttonsEnabled(true);
                Log.d("FacebookSampleActivity", "Facebook session opened");
            } else if (state.isClosed()) {
                buttonsEnabled(false);
                Log.d("FacebookSampleActivity", "Facebook session closed");
            }
        }
    };

    public void buttonsEnabled(boolean isEnabled) {
        postImageBtn.setEnabled(isEnabled);
        updateStatusBtn.setEnabled(isEnabled);
    }

    public void postImage() {
        if (checkPermissions()) {
            Bitmap img = BitmapFactory.decodeResource(getResources(), R.drawable.ic_launcher);
            Request uploadRequest = Request.newUploadPhotoRequest(
                    Session.getActiveSession(), img, new Request.Callback() {
                        @Override
                        public void onCompleted(Response response) {
                            Toast.makeText(FBActivity.this,
                                    "Photo uploaded successfully",
                                    Toast.LENGTH_LONG).show();
                        }
                    });
            uploadRequest.executeAsync();
        } else {
            requestPermissions();
        }
    }

    public void postStatusMessage() {
        if (checkPermissions()) {
            Request request = Request.newStatusUpdateRequest(
                    Session.getActiveSession(), message,
                    new Request.Callback() {
                        @Override
                        public void onCompleted(Response response) {
                            if (response.getError() == null)
                                Toast.makeText(FBActivity.this,
                                        "Status updated successfully",
                                        Toast.LENGTH_LONG).show();
                        }
                    });
            request.executeAsync();
        } else {
            requestPermissions();
        }
    }

    public boolean checkPermissions() {
        Session s = Session.getActiveSession();
        if (s != null) {
            return s.getPermissions().contains("publish_actions");
        } else
            return false;
    }

    public void requestPermissions() {
        Session s = Session.getActiveSession();
        if (s != null)
            s.requestNewPublishPermissions(new Session.NewPermissionsRequest(
                    this, PERMISSIONS));
    }

    @Override
    public void onResume() {
        super.onResume();
        uiHelper.onResume();
        buttonsEnabled(Session.getActiveSession().isOpened());
    }

    @Override
    public void onPause() {
        super.onPause();
        uiHelper.onPause();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        uiHelper.onDestroy();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        uiHelper.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onSaveInstanceState(Bundle savedState) {
        super.onSaveInstanceState(savedState);
        uiHelper.onSaveInstanceState(savedState);
    }

}
```

### Output

[![Facebook Android Example](/media/articles/339/Facebook-Android-Example-620x450.png)](http://stacktips.com)
