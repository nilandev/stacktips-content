---
id: 262
title: How to convert UNIX date to String
slug: how-to-convert-unix-date-to-string
excerpt: In this post we will see how to convert unix date to human readable format, how to use SimpleDateFormat class for date conversion.
difficulty: beginners
publishedDate: "2014-01-14T08:27:53.000Z"
updatedDate: "2025-09-16T23:05:33.497Z"
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

In this post we will see how to convert unix date to human readable format, how to use SimpleDateFormat class for date conversion.

-   `System.currentTimeMillis()` will give date/time as a single numeric value, expressed as the number of milliseconds after the UNIX epoch. Unix epoch is always an long value. You can convert this time to get your time as per your local time zone.
-   You can use util.Date class object to get the date. Using this you can extract the year, month and day value numerically.
-   `Calendar.getInstance()` gives you a Calendar object initialized with the current date / time, using the default Locale and TimeZone. You can overload the time zone and locale to get specific time zone time.
-   `SimpleDateFormat` class is used for parsing and formatting date as text string. We just have to specify the pattern for parsing.

# How to get current date

```xml
DateFormat dateFormat = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
//getting current date using util.Date class
Date date = new Date();
System.out.println("Current Date:" + dateFormat.format(date));

//or use calendar instance
//Calendar cal = Calendar.getInstance();
//return dateFormat.format(cal.getTime());
```

# Convert UNIX date to String

```xml
long unixdate = 1389705117;
DateFormat formatter = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss");
Calendar calendar = Calendar.getInstance();
calendar.setTimeInMillis(unixdate * 1000);
System.out.println("Formatted Date:" + formatter.format(calendar.getTime()));
```
