---
id: 405
title: Working with Date, Time in Java
slug: java-date-work-with-moments-in-time
excerpt: "Learn how to express dates and moments in time using Java's built-in date and time functions and variables."
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.748Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-date-class
  - java-time-package
  - java-localdate-localdatetime
course: maven-for-beginners
displayOrder: 19
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java provides a useful and versatile `Date` class in its `java.time` package. This class allows us to represent moments in time and dates, and manipulate them however we want with just a few lines of code.

### Creating a Date

Creating a date is pretty easy. Simply create a `Date` object and print it out:

```java
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date now = new Date();
        System.out.println(now.toString());
    }
}
```

```bash
Sun Dec 15 00:00:00 UTC 2019
```

### Date Formatting

You can format a date object using the `SimpleDateFormat` class and calling its `format()` method:

```java
import java.util.Date;
import java.text.SimpleDateFormat;

public class Main {
    public static void main(String[] args) {
        Date now = new Date();
        SimpleDateFormat format =
 new SimpleDateFormat ("E yyyy-MM-dd 'at' hh:mm:ss a zzz");

        System.out.println(format.format(now));
    }
}
```

```bash
Sun 2019-12-15 at 00:00:00 AM UTC
```

If you're curious about what those characters do and if there are any others, here are all the characters that you can use when formatting your dates:

-   `G`: Era (AD/BC)
-   `y`: Year in four digits (2020)
-   `M`: Month (June)
-   `d`: Day in month (17)
-   `h`: Hour from 1-12
-   `H`: Hour from 0-23
-   `m`: Minute
-   `s`: Second
-   `S`: Millisecond
-   `E`: Day in week (Friday)
-   `D`: Day in year (100)
-   `F`: Day of week in month (2nd Friday in June)
-   `w`: Week in year (23)
-   `W`: Week in month (3)
-   `a`: AM/PM
-   `k`: Hour in day from 1-24
-   `K`: Hour from 0-11
-   `Z`: Timezone

### Unix Time

Unix time is a concept in computer science that refers to the number of milliseconds that have elapsed since the arbitrarily decided midnight on January 1st, 1970. Here's how to get that value in Java:

```java
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date now = new Date();
        System.out.println(now.getTime());
    }
}
```

```bash
1576146483561
```

### Parsing Strings into Dates

When you have a string that represents a date, you can try and parse it into one:

```java
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Main {
    public static void main(String[] args) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String input = "1990-01-01";

        try {
            Date parsed = format.parse(input);
            System.out.println(parsed.toString());
        } catch (ParseException e) {
            // error parsing
        }
    }
}
```

```bash
Mon Jan 01 00:00:00 UTC 1990
```
