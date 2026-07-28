---
id: 55
title: Creating HelloWorld App in Swift 2.2 Using Xcode 7.3
slug: creating-helloworld-app-in-swift-using-xcode
excerpt: While learning a new technology or framework, it is a traditional practice for any developer to start with “Hello…
difficulty: beginners
publishedDate: "2016-08-18T09:19:52.000Z"
updatedDate: "2025-09-16T23:05:22.547Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/76/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

While learning a new technology or framework, it is a traditional practice for any developer to start with **“Hello World”** program. Since this is our first step towards learning Swift programming, let us get started with the same.

In Swift we can print “Hello, World” by simply writing the following snippet:

```c
Print("Hello, World")
```

But thats not all. In this tutorial, we will take you through the different steps for creating your first Swift application using Xcode.

## Prerequisites

Before we begin, we need the following stuffs in place:

-   Mac system running on Mac OS X version 10 or higher.
-   Xcode installed and running on the machine. If it is not installed, download it free from App Store.
-   Basic knowledge on Object orient programming like Objective-C and Swift is a bonus. Though it is not mandatory.

## What is Xcode IDE?

Xcode is it’s an powerful IDE (integrated development environment) provided by Apple. Xcode provides everything you need to kick start with app development. Following are some of the Xcode features.

-   Using Xcode we can build apps for Mac, iOS, and Watch OS.
-   Xcode IDE is bundled with a rich code editor, debugger, search tool, code refactoring, language syntax highlighting, intelligent code auto complete and many more.
-   Xcode supports Swift, Objective-C, C and C++, and other languages.
-   Xcode Storyboard and UI builder brings a drag-and-drop interface using which developers can rapidly build UI for different resolution devices.

There are many more features that Xcode supports which are intended for faster development and make developers productive. As you go along you will discover something new.

## Crating New Xcode Project

Time to get your hands dirty by launching Xcode Straight away, where you land up in the following screen short.

![Screen Shot 2016-08-14 at 5.00.16 PM](/media/articles/76/Screen-Shot-2016-08-14-at-5.00.16-PM-e1471211704331-620x527.png)

In the welcome window, click _“Create a new Xcode project”_ as shown below

![Screen Shot 2016-08-14 at 5.00.16 PM](/media/articles/76/Screen-Shot-2016-08-14-at-5.00.16-PM-1-e1471211659978-620x414.png)

Now Xcode opens a new window and displays a dialog in which you choose a template following these steps iOS > Application > Single View Application > next

![For Selecting the Application Templets ](/media/articles/76/Screen-Shot-2016-08-14-at-5.09.14-PM-e1471211793841-620x355.png)

For Selecting the Application Templets

In the dialog that appears, use the following values to name your app and choose additional options for your project:

-   Product Name: The name of your application. Lets keep it **HelloWorld.** Xcode uses the product name you entered to name your project and the app.
-   Organization Name: The name of your organization or your own name. This is optional, hence you may leave this blank.
-   Organization Identifier: It is usually the reverse of your primary business domain. For example, if your business domain is stacktips.com then the organization identifier can be `com.stacktips`.
-   Bundle Identifier: This value is automatically generated based on your product name and organization identifier.
-   Select Swift from the language drop down.
-   Devices: Select Universal. A Universal app is one that runs on both iPhone and iPad.
-   Use Core Data: Unselected.
-   Include Unit Tests: Unselected.
-   Include UI Tests: Unselected.
-   Click Next.

![Choose options for your new project](/media/articles/76/Screen-Shot-2016-08-14-at-5.20.42-PM-1-e1471211819681-620x370.png)

Choose options for your new project

In the dialog that appears, select a location to save your project and click **Create** button. Once your project is created, Xcode opens your new project in the workspace window.

![Xcode opens your new project in the workspace window](/media/articles/76/Screen-Shot-2016-08-14-at-5.21.02-PM-e1471528383299-620x364.png)

Xcode opens your new project in the workspace window

Open `Main.storyboard` file, drag a button from the object library and drop it on `ViewController` Scene , change the name of the button by double tapping the button or change in Attributes Inspector _Title_ value as shown below

![DragDrop Button form Object Library to Scene ](/media/articles/76/Screen-Shot-2016-08-15-at-12.21.59-AM-e1471528307716-620x369.png)

DragDrop Button form Object Library to Scene

Place the button centre of the Scene and add two following constraints _“Horizontal in container”_ and _“Vertical in container”_

![Adding Constraints ](/media/articles/76/Screen-Shot-2016-08-15-at-12.22.27-AM-e1471528329599-620x367.png)

Adding Constraints

Once done with adding constraints, click on Show assistant editor

![Show Assistant Editor ](/media/articles/76/Screen-Shot-2016-08-15-at-12.23.31-AM-e1471528282362-620x364.png)

Show Assistant Editor

Now Create Button Action by _control + Drag_ from Button to the ViewController.Swift

![Button Action-Target ](/media/articles/76/Screen-Shot-2016-08-15-at-12.24.33-AM-e1471528358998-620x368.png)

Button Action-Target

Later open `ViewController.swift` form Project Navigator of the XCode, and place the following code inside the Action-Target method created:

```c
let alert = UIAlertController(title: "StackTips Alert", message: "Hello, World",   preferredStyle: UIAlertControllerStyle.Alert)
alert.addAction(UIAlertAction(title: "Okay", style: UIAlertActionStyle.Default, handler: nil))
self.presentViewController(alert, animated: true, completion: nil)
```

Run the application, Click on HelloWorld Button. Bang, you will get the alert saying “Hello, World” you can find the source code in the following  
[Download source](https://github.com/StackTipsLab/Swift-Basic-Tutorials)

Happy Coding…!
