---
id: 374
title: "Python: Working with Date and Times"
slug: python-working-with-date
excerpt: "Learn how to express and work with dates and moments in time using Python's built-in date and time functionality."
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.798Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-datetime-module
  - python-date-time-formatting
  - python-time-module
course: getting-started-with-css
displayOrder: 14
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Python offers us easy-to-use functions inside the `datetime` and `time` modules to manipulate, convert, and display dates and time.

## Getting the Date

We can use the `datetime` module to get the exact date and time at the point of running the program:

```python
import datetime

now = datetime.datetime.now()
print(now)
```

```bash
2019-12-01 00:00:00.000000
```

## Getting Information from the Date

Once you have a date project, you can get specific pieces of information out of it by accessing the properties, like so:

```python
import datetime

now = datetime.datetime.now()

day = now.day
month = now.month
year = now.year

print("Day: " + str(day))
print("Month: " + str(month))
print("Year: " + str(year))
```

```bash
Day: 1
Month: 12
Year: 2019
```

## Creating a Date

We can create a new date object by using the `datetime` function and passing in the values we want:

```python
import datetime

future = datetime.datetime(2030, 6, 18)

day = future.day
month = future.month
year = future.year

print("Day: " + str(day))
print("Month: " + str(month))
print("Year: " + str(year))
```

```bash
Day: 18
Month: 6
Year: 2030
```

## Formatting a Date

Once you get or create your date object, you can print it out in a readable format using the `strftime` function:

```python
import datetime

future = datetime.datetime(2030, 6, 18)

print(future.strftime("%A"))
```

```bash
Tuesday
```

Curious about that `%A`? Here are all the other symbols you can use to format your string:

-   `%a`: Weekday (short)
-   `%A`: Weekday (full)
-   `%w`: Weekday (number)
-   `%d`: Day of Month
-   `%b`: Month (short)
-   `%B`: Month (full)
-   `%m`: Month (number)
-   `%y`: Year (short)
-   `%Y`: Year (full)
-   `%H`: Hour (00-23)
-   `%I`: Hour (00-12)
-   `%p`: AM/PM
-   `%M`: Minute
-   `%S`: Second
-   `%f`: Microsecond
-   `%z`: UTC offset
-   `%Z`: Timezone
-   `%j`: Day of Year
-   `%U`: Week Number (starting from Sunday)
-   `%W`: Week Number (starting from Monday)
-   `%c`: Local date and time
-   `%x`: Local date
-   `%X`: Local time

[Python Docs - Datetime](https://docs.python.org/3/library/datetime.html)
