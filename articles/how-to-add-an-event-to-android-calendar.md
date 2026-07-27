---
id: 78
title: How to Add an Event to Android Calendar
slug: how-to-add-an-event-to-android-calendar
excerpt: The following code snippet shows how to add event in Android calendar using intent method.
difficulty: beginners
publishedDate: "2016-07-04T12:39:52.000Z"
updatedDate: "2025-09-16T23:05:23.813Z"
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

The following code snippet shows how to add event in Android calendar using intent method.

```java
Intent intent = new Intent(Intent.ACTION_INSERT);
intent.setData(CalendarContract.Events.CONTENT_URI)
intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, eventDate.getTimeInMillis())
intent.putExtra(CalendarContract.EXTRA_EVENT_END_TIME, eventDate.getTimeInMillis() + 60 * 60 * 1000)
intent.putExtra(CalendarContract.Events.TITLE, title)
intent.putExtra(CalendarContract.Events.DESCRIPTION, description)
intent.putExtra(CalendarContract.Events.AVAILABILITY, CalendarContract.Events.AVAILABILITY_BUSY);
context.startActivity(intent);

Toast.makeText(context, "Event added to calendar, Toast.LENGTH_SHORT).show(); 
```
