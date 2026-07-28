---
id: 138
title: Performing Stress Test in Android Using  Monkey Application Exerciser
slug: performing-stress-test-in-android-using-monkey-application-exerciser
excerpt: The Monkey is a tool you run on your device to generate a random system level userr events. It generates the specified number of events without any user interaction. This is generally helpful for performing stress test. This tool generates the random events from set of commands and collect the crashes or memory reports.
difficulty: beginners
publishedDate: "2015-07-24T08:28:00.000Z"
updatedDate: "2025-09-16T23:05:27.074Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A Monkey is a tool you run on your device to generate a random system level user events. It generates the specified number of events without any user interaction. This is generally helpful for performing the stress test. This tool generates the random events from a set of commands and collects the crashes or memory reports.

Note that this tool is not used for automation testing. This only helps to find the crashes that may not appear during regular use of the application.

This tool uses an Android Device Bridge ADB toolkit. To run this command you need to provide the application package name and a total number of random events that you want to generate. The following command shows how to start monkey tool.

```
$ adb shell monkey -p com.javatechig.myapp 5000
```

When you run this test, you can watch your device or emulator. You will notice random events on UI elements are being generated. When the application crashes, it will stop the exerciser and prints the report on the terminal window. The following screenshot depicts a crash report while testing my application.  
[![Performing Stress Test in Android Using  Monkey Application Exerciser](/media/articles/181/Performing-Stress-Test-in-Android-Using-Monkey-Application-Exerciser.png)](http://stacktips.com)

There are a variety of ways to control the behavior of Monkey tool by passing different arguments. Let us go through some of the important ones.

You can see a complete list of all options by typing:

```
$ adb shell monkey --help
```

You must have noticed in the previous command, when the Monkey starts, it always starts the default application of the package specified. However, in some cases, your application may depend on some other third party apps such as device native camera to capture the photo or integrating with Google Maps. For such cases, an event that launches something external will be dropped by default by Monkey tool.

This behavior can be controlled by providing an additional package -p argument to the Monkey command.

```
$ adb shell monkey -p com.javatechig.myapp -p com.google.map 5000
```

Now let us run the Monkey tool more intelligently by controlling the type of events that are triggered. For example, if you want to ensure that 30 percent of the events are touch events, you need to specify the –pct-touch argument as follows.

```
$ adb shell monkey --pct-touch 30 -p com.javatechig.myapp 5000
```
