---
id: 292
title: How To Send Email In Android
slug: how-to-send-email-in-android
excerpt: The code sample below will help you understand “How To Send Email In Android” using EmailIntent in android. In…
difficulty: beginners
publishedDate: "2013-08-29T12:09:38.000Z"
updatedDate: "2025-09-16T23:05:34.720Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-email-intent
  - intent-action-send-android
  - android-email-client-chooser
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Send Email in Android Using Intent"
  metaDescription: "Learn how to send an email in Android with Intent.ACTION_SEND, build a simple compose UI, and launch an email client chooser with working code."
  metaKeywords: null
---

The code sample below will help you understand “How To Send Email In Android” using EmailIntent in android. In android we can use Intent.ACTION\_SEND to call an existing email client to send an Email. If no email clients are configured then,android system displays **“No application can perform this action”** error.

## Sending Email In Android example

Here is my layout as shown in the screenshots below

[![sending email in android](/media/articles/381/sending-email-in-android.png)](http://stacktips.com)

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
        android:text="To:"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <EditText
        android:id="@+id/toEmail"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:hint="Enter email" >
    </EditText>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Subject:"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <EditText
        android:id="@+id/subject"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:hint="Enter Subject" >
    </EditText>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Message:"
        android:textAppearance="?android:attr/textAppearanceLarge" />

    <EditText
        android:id="@+id/emailBody"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:gravity="top"
        android:hint="Enter mail body"
        android:inputType="textMultiLine"
        android:lines="5" />

</LinearLayout>
```

In my code example, I have used ActionBar commands for send and clear option.

**main\_menu.xml**

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

     <item
        android:id="@+id/menu_clear"
        android:icon="@android:drawable/ic_menu_close_clear_cancel"
        android:showAsAction="ifRoom|withText"
        android:title="Clear"/>

    <item
        android:id="@+id/menu_send"
        android:icon="@android:drawable/ic_menu_send"
        android:showAsAction="ifRoom|withText"
        android:title="Send"/>

</menu>
```

Now, check out the activity code

**MainActivity.java**

```java
public class MainActivity extends Activity {

    private EditText toEmail = null;
    private EditText emailSubject = null;
    private EditText emailBody = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        toEmail = (EditText) findViewById(R.id.toEmail);
        emailSubject = (EditText) findViewById(R.id.subject);
        emailBody = (EditText) findViewById(R.id.emailBody);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
        case R.id.menu_clear:
            toEmail.setText("");
            emailBody.setText("");
            emailSubject.setText("");
            break;
        case R.id.menu_send:
            String to = toEmail.getText().toString();
            String subject = emailSubject.getText().toString();
            String message = emailBody.getText().toString();

            Intent email = new Intent(Intent.ACTION_SEND);
            email.putExtra(Intent.EXTRA_EMAIL, new String[] { to });
            email.putExtra(Intent.EXTRA_SUBJECT, subject);
            email.putExtra(Intent.EXTRA_TEXT, message);

            // need this to prompts email client only
            email.setType("message/rfc822");

            startActivity(Intent.createChooser(email, "Choose an Email client"));

            break;
        }
        return true;
    }
}
```
