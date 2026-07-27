---
id: 293
title: Sending SMS Message In Android
slug: sending-sms-message-in-android
excerpt: This tutorial explains to Sending SMS Message In Android using SMS intent method or by using using SmsManager class. SMS…
difficulty: beginners
publishedDate: "2013-08-28T13:51:05.000Z"
updatedDate: "2025-09-16T23:05:34.752Z"
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

This tutorial explains to Sending SMS Message In Android using SMS intent method or by using using SmsManager class. SMS intent method invokes pre-installed SMS apps.

In Android, we can send SMS from an application in two ways. One by using Intent method and other using SmsManager API. In intent method it uses device’s Built-in SMS application to send a SMS message.

### **1\. Sending SMS using SmsManager API**

```java

SmsManager smsManager = SmsManager.getDefault();
smsManager.sendTextMessage("", null, "< message body>", null, null);
```

SmsManager require, SMS\_SEND permission in your android mainfeast.  
**  
_<uses-permission android:name=”android.permission.SEND\_SMS” />_**

### 2\. Sending SMS by invoking Built-in SMS application

Intent sendIntent = new Intent(Intent.ACTION\_VIEW);

```java

	sendIntent.putExtra("sms_body", “"); 
	sendIntent.setType("vnd.android-dir/mms-sms");
	startActivity(sendIntent);
```

Follow the complete example for both the method’s  
**activity\_main.xml**

```xml

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/linearLayout1"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical"
    android:padding="5dp" >

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Phone Number : "
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <EditText
        android:id="@+id/mobileNumber"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:hint="Enter phone number"
        android:phoneNumber="true" >
    </EditText>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Message Body: "
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <EditText
        android:id="@+id/smsBody"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:gravity="top"
        android:hint="Enter message body"
        android:inputType="textMultiLine"
        android:lines="5" />

    <LinearLayout
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:weightSum="10" >

        <Button
            android:id="@+id/sendViaIntent"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_weight="5"
            android:text="SMS Intent" />

        <Button
            android:id="@+id/send"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_weight="5"
            android:text="Send" />
    </LinearLayout>

</LinearLayout>
```

**MainActivity.java**

```java

public class MainActivity extends Activity {

	private Button shareIntent;
	private Button send;
	private EditText phoneNo;
	private EditText messageBody;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		phoneNo = (EditText) findViewById(R.id.mobileNumber);
		messageBody = (EditText) findViewById(R.id.smsBody);

		send = (Button) findViewById(R.id.send);
		send.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				String number = phoneNo.getText().toString();
				String sms = messageBody.getText().toString();

				try {
					SmsManager smsManager = SmsManager.getDefault();
					smsManager.sendTextMessage(number, null, sms, null, null);
					Toast.makeText(getApplicationContext(), "SMS Sent!",
							Toast.LENGTH_LONG).show();
				} catch (Exception e) {
					Toast.makeText(getApplicationContext(),
							"SMS faild, please try again later!",
							Toast.LENGTH_LONG).show();
					e.printStackTrace();
				}
			}
		});

		shareIntent = (Button) findViewById(R.id.sendViaIntent);
		shareIntent.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				try {
					Intent sendIntent = new Intent(Intent.ACTION_VIEW);
					sendIntent.putExtra("sms_body", messageBody.getText().toString());
					sendIntent.setType("vnd.android-dir/mms-sms");
					startActivity(sendIntent);
				} catch (Exception e) {
					Toast.makeText(getApplicationContext(),
							"SMS faild, please try again later!",
							Toast.LENGTH_LONG).show();
					e.printStackTrace();
				}
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
}
```

### 3\. Output

[![Android SeekBar](/media/articles/382/2013-04-29_01-33-08.png)](http://stacktips.com)

Android SeekBar Example Screenshot

### 4\. Download Complete Source code from GitHub

Download Complete Source From [Github](https://github.com/javatechig/javatechig-android-advanced/tree/master/AndroidSMS)
