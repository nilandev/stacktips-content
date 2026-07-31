---
id: 72
title: How to Send an Email with Attachment in Android
slug: how-to-send-an-email-with-attachment-in-android
excerpt: The following code snippet shows to send an email with image attachment in Android using Intent method.
difficulty: beginners
publishedDate: "2016-07-06T06:43:33.000Z"
updatedDate: "2025-09-16T23:05:23.463Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-send-email-intent
  - email-attachment-android
  - android-intent-action-send
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Send an Email with Attachment in Android"
  metaDescription: "Learn how to send an email with an image attachment in Android using an Intent, with a simple sendEmail() code snippet you can drop into your app."
  metaKeywords: null
---

The following code snippet shows to send an email with image attachment in Android using the Intent method.

```java
public static void sendEmail(Context context, String subject, String message, String imagePath) {
    Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND);
    emailIntent.setType("plain/text");
    emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
    emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, message);

    if (imagePath != null && imagePath.length() > 0) {
        File file = urlToFile(imagePath);
        if (file != null && file.getAbsolutePath() != null)
            emailIntent.putExtra(Intent.EXTRA_STREAM, file.getAbsolutePath());
    }

    context.startActivity(emailIntent);
}
```
