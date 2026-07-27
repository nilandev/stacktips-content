---
id: 342
title: Android Interview Questions And Answers
slug: android-interview-questions-and-answers
excerpt: This post answers some of the common questions in android. The source code snippets are pretty simple to use. How to Make a call in Android, How to integrating sharing in Android, How to open link in Android Browser, etc.
difficulty: beginners
publishedDate: "2013-01-24T18:23:34.000Z"
updatedDate: "2025-09-16T23:05:36.994Z"
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

This post answers some of the common android interview questions and answers.

### How to send SMS in Android?

You may send sms either using SmsManager or by invoking Built-in SMS application

Sending SMS using SmsManager API

```java
SmsManager smsManager = SmsManager.getDefault();
smsManager.sendTextMessage("", null, "< message body>", null, null);
```

SmsManager require, SMS\_SEND permission in your android mainfeast.

Sending SMS by invoking Built-in SMS application

```java
Intent sendIntent = new Intent(Intent.ACTION_VIEW);
sendIntent.putExtra("sms_body", “"); 
sendIntent.setType("vnd.android-dir/mms-sms");
startActivity(sendIntent);
```

### How to Make a call in Android?

```java
Intent callIntent = new Intent(Intent.ACTION_CALL);
callIntent.setData(Uri.parse("tel:03777788"));
startActivity(callIntent);
```

### How to send Email in Android?

Android Intent is the handy way to send Email using your app.

```java
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
```

### How to integrating sharing in Android?

Android API made sharing feature handy. You don’t need to integrate the third party applications SDK’s like Facebook, twitter. Just a step to use share intent and it makes your application ready to share data to your social networks.

```java
Intent sendIntent = new Intent();
sendIntent.setAction(Intent.ACTION_SEND);
sendIntent.putExtra(Intent.EXTRA_TEXT, "This is my text to send.");
sendIntent.setType("text/plain");
startActivity(Intent.createChooser(sendIntent, getResources().getText(R.string.send_to)));
```

### How to open link in Android Browser?

```java
Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://stacktips.com"));
startActivity(browserIntent);
```

### How to Display HTML in Android TextView?

In android there is a lovely class `android.text.HTML` that processes HTML strings into displayable styled text. Currently android doesn’t support all HTML tags.

`Html.formHtml()` method takes an `Html.TagHandler` and an `Html.ImageGetter` as arguments as well as the text to parse. We can parse null as for the Html.TagHandler but you’d need to implement your own Html.ImageGetter as there isn’t a default implementation. The Html.ImageGetter needs to run synchronously and if you’re downloading images from the web you’ll probably want to do that asynchronously. But in my example I am using the images from resources to make my ImageGetter implementation simpler.

```java
String htmlText = "<html><body>....</body></html>";
TextView htmlTextView = (TextView)findViewById(R.id.html_text);
htmlTextView.setText(Html.fromHtml(htmlText, new ImageGetter(), null));
```

### How to display Android Toast?

Toast is a notification message that pop up, display a certain amount of time, and automatically fades in and out, most people just use it for debugging purpose. Below is the code snippets to create a Toast message

```java
//display in short period of time
Toast.makeText(getApplicationContext(), "msg msg", Toast.LENGTH_SHORT).show();

//display in long period of time
Toast.makeText(getApplicationContext(), "msg msg", Toast.LENGTH_LONG).show();
```

[Android custom toast example](/articles/android-toast-example/)

### How to Pass data between Activities in android

We an pass values between the activities, by using Bundles. Use below code to send data from ActivityA

```java
String name="StackTips";
String url="http://stacktips.com";
Intent intent=new Intent(ActivityA.this, ActivityB.class);
intent.putExtra("name", name);
intent.putExtra("url", url);
startActivity(intent);  
```

Now, you can retrieve the data in ActivityB using below code

```java
Bundle bundle = new Bundle();
bundle = getIntent().getExtras();
String name = bundle.getString("name");
String url = bundle.getString("url");
```
