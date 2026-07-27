---
id: 129
title: Custom Calendar View Library in Android
slug: custom-calendar-view-library-in-android
excerpt: The CustomCalendarView provides an easy and customizable option to create a Calendar. It displays the days of a month in a grid layout and allows navigating between months.
difficulty: beginners
publishedDate: "2015-09-15T00:31:06.000Z"
updatedDate: "2025-09-16T23:05:26.787Z"
videoLink: null
githubLink: null
featured: true
thumbnail: null
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The **CustomCalendarView** is an open source library that provides ability to create a calendar view in Android. It displays the days of a month in a grid layout and allows navigating between months and is highly customizable.

## Custom Calendar View Features

Currently it allows the following features:

-   Next and previous month navigation
-   Allow various customization including background color for day, week and title
-   Set custom typeface using setCustomTypeFace() method.
-   Show hide next previous month overflow days
-   Set custom day options for start day of week. By default it is set to `Calendar.SUNDAY`
-   Unlimited customizations for day of the month using custom Decorators.
-   Allow you to handle event when user changes month and day selection.

[![Custom Calendar View Android](/media/articles/168/Custom-Calendar-View-Android.png)](http://stacktips.com)

## Library Compatibility

This library is compatible from API 14.

## Add CustomCalendarView Library

To use the **CustomCalendarView** in your application, you first need to add the library to your application. You can do this by either from Gradle, Maven or by directly downloading the source code form [GitHub](https://github.com/npanigrahy/Custom-Calendar-View).

#### Gradle

**Step 1.** Add the JitPack repository to your build file

Step-1 Add it in your build.gradle at the end of repositories:

```java
repositories {
    maven { url "https://jitpack.io" }
}
```

Step-2 Add the dependency in the form

```java
dependencies {
    compile 'com.github.npanigrahy:Custom-Calendar-View:v1.1'
}
```

#### Maven

```xml
<repository>
     <id>jitpack.io</id>
     <url>https://jitpack.io</url>
</repository>
```

Step 2. Add the dependency in the form

```xml
<dependency>
     <groupId>com.github.npanigrahy</groupId>
     <artifactId>Custom-Calendar-View</artifactId>
     <version>v1.1</version>
</dependency>
```

#### Sbt

Step-1 Add it in your build.sbt at the end of resolvers:

```java
resolvers += "jitpack" at "https://jitpack.io"
```

Step-2 Add the dependency in the form

```java
libraryDependencies += "com.github.npanigrahy" % "Custom-Calendar-View" % "v1.1"
```

## Using CustomCalendarView Library

The GitHub project source includes a sample application, that is used for demonstrating the various features currently supported by this library. Once the library is added to your project, you can include the CustomCalendarView into your activity/fragment layout using the following code snippets.

```xml
<com.stacktips.view.CustomCalendarView
	android:id="@+id/calendar_view"
	android:layout_width="match_parent"
	android:layout_height="wrap_content"
	android:background="@color/off_white">
</com.stacktips.view.CustomCalendarView>
```

The above code snippet will show the simple Calendar View with default design. Now, you can use the following attributes, to customize the appearance of calendar.

```xml
<com.stacktips.view.CustomCalendarView
	android:id="@+id/calendar_view"
	android:layout_width="match_parent"
	android:layout_height="wrap_content"
	android:background="@color/off_white"
	app:calendarBackgroundColor="@color/off_white"
	app:calendarTitleTextColor="@color/black"
	app:currentDayOfMonthColor="@color/blue"
	app:dayOfMonthTextColor="@color/black"
	app:dayOfWeekTextColor="@color/black"
	app:disabledDayBackgroundColor="@color/off_white"
	app:disabledDayTextColor="@color/grey"
	app:selectedDayBackgroundColor="@color/blue"
	app:titleLayoutBackgroundColor="@color/white"
	app:weekLayoutBackgroundColor="@color/white">
</com.stacktips.view.CustomCalendarView>
```

Let us now, initialize the calendar view to control the various other appearance and behavior of calendar using the following methods.

```java
//Initialize CustomCalendarView from layout
calendarView = (CustomCalendarView) findViewById(R.id.calendar_view);

//Initialize calendar with date
Calendar currentCalendar = Calendar.getInstance(Locale.getDefault());

//Show Monday as first date of week
calendarView.setFirstDayOfWeek(Calendar.MONDAY);

//Show/hide overflow days of a month
calendarView.setShowOverflowDate(false);

//call refreshCalendar to update calendar the view
calendarView.refreshCalendar(currentCalendar);

//Handling custom calendar events
calendarView.setCalendarListener(new CalendarListener() {
    @Override
    public void onDateSelected(Date date) {
        SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy");
        Toast.makeText(MainActivity.this, df.format(date), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onMonthChanged(Date date) {
        SimpleDateFormat df = new SimpleDateFormat("MM-yyyy");
        Toast.makeText(MainActivity.this, df.format(date), Toast.LENGTH_SHORT).show();
    }
});
```

## Using Custom TypeFace

```java
//Setting custom font
final Typeface typeface = Typeface.createFromAsset(getAssets(), "fonts/Arch_Rival_Bold.ttf");
if (null != typeface) {
    calendarView.setCustomTypeface(typeface);
    calendarView.refreshCalendar(currentCalendar);
}
```

[![Custom Calendar View Library in Android Custom Font](/media/articles/168/Custom-Calendar-View-Library-in-Android-Custom-Font-300x507.png)](http://stacktips.com)

## Using Day Decorators

**Example2:** How to Disable Past Dates in CustomCalendarView [using Decorators](/articles/disable-past-dates-in-custom-calendar-view-android).

```java
//adding calendar day decorators
List decorators = new ArrayList<>();
decorators.add(new ColorDecorator());
calendarView.setDecorators(decorators);
calendarView.refreshCalendar(currentCalendar);
```

[![Custom Calendar View Library in Android Decorator](/media/articles/168/Custom-Calendar-View-Library-in-Android-Decorator-300x507.png)](http://stacktips.com)

_If you enjoy this library, don’t forget to like our [Facebook](http://facebook.com/stacktips) page or follow us on twitter [@Stacktips](http://twitter.com/stacktips)._
