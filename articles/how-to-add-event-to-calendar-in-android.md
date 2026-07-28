---
id: 94
title: How to Add an Event to Device Calendar in Android
slug: how-to-add-event-to-calendar-in-android
excerpt: In this post, we will learn how to add an event to your device calendar. Android allows us to invoke activities from other application using intent. Here in this example, we will be using the appropriate intent to invoke the default calendar application, and pre-filled with event details. User must must confirm to add the event, or can change, edit any of the details associated with a particular events.
difficulty: beginners
publishedDate: "2015-03-24T23:15:31.000Z"
updatedDate: "2025-09-16T23:05:27.899Z"
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

In this post, we will learn how to add an event to your device calendar in android.

Android allows us to invoke activities from other application using intent. Here in this example, we will be using the appropriate intent to invoke the default calendar application, and pre-filled with event details. The user must confirm to add the event, or can change, edit any of the details associated with particular events.

Use the following code snippet to invoke the default calendar event.

```java
Intent intent = new Intent(Intent.ACTION_INSERT_OR_EDIT);
intent.setType("vnd.android.cursor.item/event");
startActivity(intent);
```

The above snippet will invoke the calendar application with empty fields and allow user to enter the event details before adding. However, you can pre-fill the event details by passing the details in the form of intent extras. The Extras values describes the event details, such as event start time, event end time, event title, event description, etc.

The following two class are important to understanding for adding the events.

1.  `CalendarContract` : Defines the data model of calendar and event related information. This data is stored in a number of tables, listed below.
2.  `CalendarContract.Events`: This table holds the event-specific information. Each row in this table has the information for a single event—for example, event title, location, start time, end time, and so on. The event can occur one-time or can recur multiple times. Attendees, reminders, and extended properties are stored in separate tables. They each have an EVENT\_ID that references the \_ID in the Events table.

The following code bundle can be used to pass the information to calendar intent.

```cs
intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, startTime);
intent.putExtra(CalendarContract.EXTRA_EVENT_END_TIME,endTime);
intent.putExtra(CalendarContract.EXTRA_EVENT_ALL_DAY, true);
intent.putExtra(Events.TITLE, "Neel Birthday");
intent.putExtra(Events.DESCRIPTION, "This is a sample description");
intent.putExtra(Events.EVENT_LOCATION, "My Guest House");
intent.putExtra(Events.RRULE, "FREQ=YEARLY");
```

Most of the statements except the RRULE are self explanatory. The RRULE defines the repeat frequency for the events and follows the standard iCalendar recurrence rule format (see [RFC 5544](http://www.kanzaki.com/docs/ical/rrule.html) for details).

The output of the above code is as follows.

[![How to add event to calendar in Android](/media/articles/205/How-to-add-event-to-calendar-in-Android.png)](http://stacktips.com)

[Download source](https://github.com/javatechig/Add-Calendar-Event-Android)
