---
id: 51
title: Getting Started with iOS App Extension Widget
slug: ios-app-extension-widget-tutorial
excerpt: AppExtension in iOS let you to have addition functionality and contents for your app which is beyond the…
difficulty: beginners
publishedDate: "2016-09-09T07:01:42.000Z"
updatedDate: "2025-09-16T23:05:22.377Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/72/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

AppExtension in iOS let you to have addition functionality and contents for your app which is beyond the scope of your application and make it available to users when they are interacting with the other apps.

For example, to let users to catch up on there favorite item in the app to be accessible by getting updates on the same without accessing the app, you can provide a Today widget that displaying favorite item updates in Notification Center. Or, to let users post to your social service from a web browser, you can provide a Share extension.

There Are Several Types of App Extensions which is well explained in this [link](https://developer.apple.com/library/ios/documentation/General/Conceptual/ExtensibilityPG/).

## LifeCycle of AppExtension

LifeCycle and environment of App and AppExtension are totally different. Activity of the extension fires only after when a user chooses it from an app’s _UI_ or from a _presented view controller_. An app that enables user to choose an app extension is called a _host app_.

A _host app_ defines the context provided to the extension and initiate the extension life cycle when it sends a request in response to a user action. An extension typically terminates soon after it completes the request it received from the _host app_.

![The basic life cycle of an app extension](/media/articles/72/app_extensions_lifecycle_2x-620x272.png)

The basic life cycle of an app extension

For example, imagine that a user selects some content in an iOS host app, activates the Share button, and chooses an app extension from the sharing list to help them post that content to a social sharing website.

The host app responds to the user’s choice by issuing to the extension a request that contains the selected content. A generalized version of this situation is pictured in step 1 of above image.

In step 2 of above image, the system instantiates the app extension identified in the host app’s request and sets up a communication channel between them. The extension displays its view within the context of the host app and then uses the items it received in the host app’s request to perform its task (in this example, the extension receives the selected content).

In step 3 of above image, the user performs or cancels the task in the app extension and dismisses it. In response to this action, the extension completes the host app’s request by immediately performing the user’s task or, if necessary, initiating a background process to perform it.

The host app tears down the extension’s view and the user returns to their previous context within the host app. When the extension’s task is finished, whether immediately or later, a result may be returned to the host app.

Shortly after the app extension performs its task (or starts a background session to perform it), the system terminates the extension, as shown in step 4.

Some APIs Are Unavailable to App Extensions

-   Access a _sharedApplication_ object, and so cannot use any of the methods on that object.
-   Use any API marked in header files with the _NS\_EXTENSION\_UNAVAILABLE_ macro, or similar unavailability macro, or any API in an unavailable framework.  
    For example, in iOS 8.0, the HealthKit framework and EventKit UI framework are unavailable to app extensions.
-   Access the camera or microphone on an iOS device.
-   Perform long-running background tasks(An app extension can initiate uploads or downloads using an NSURLSession object, with results of those operations reported to the containing app.)

## Creating an Today’s Extension

As usual we are stating by _Creating a new Xcode Project_, In the welcome window as shown below.

![Creating a new Xcode Project](/media/articles/72/Screen-Shot-2016-08-27-at-9.14.20-PM-620x361.png)

Creating a new Xcode Project

Now Xcode opens a new window and displays a dialog in which you choose a template following these steps iOS > Application > Single View Application > next

![Single View Application](/media/articles/72/Screen-Shot-2016-08-19-at-12.16.26-AM-620x388.png)

Single View Application

In the dialog that appears, use the following values to name your app and choose additional options for your project:

-   Product Name: The name of your application. Lets keep it _TodaysExtension_. Xcode uses the product name you entered to name your project and the app.
-   Organization Name: The name of your organization or your own name. This is optional, hence you may leave this blank.
-   Organization Identifier: It is usually the reverse of your primary business domain. For example, if your business domain is stacktips.com then the organization identifier can be com.stacktips.  
    Bundle Identifier: This value is automatically generated based on your product name and organization identifier.
-   Select Swift from the language drop down.
-   Devices: Select Universal. A Universal app is one that runs on both iPhone and iPad.
-   Use Core Data: Unselected.
-   Include Unit Tests: Unselected.
-   Include UI Tests: Unselected.
-   Click Next

![Project Name Dialog ](/media/articles/72/Screen-Shot-2016-08-19-at-12.16.41-AM-620x388.png)

Project Name Dialog

Save the project into the desire location :

![location to save your project and click Create](/media/articles/72/Screen-Shot-2016-08-14-at-5.20.53-PM-e1471528405424-620x366.png)

location to save your project and click Create

Now it’s time to _create AppExtension_ by creating a new Target : File > New > Target

![Creating New Target ](/media/articles/72/Screen-Shot-2016-08-19-at-12.18.40-AM-620x388.png)

Creating New Target

Next , Application Extension > Today Extension > Next

![Selecting Today's Extension](/media/articles/72/Screen-Shot-2016-08-19-at-12.18.49-AM-620x388.png)

Selecting Today’s Extension

Can set the Project Name as _TodaysExtTarget_

![Setting Extension Target Project Name](/media/articles/72/Screen-Shot-2016-08-19-at-12.19.31-AM-620x388.png)

Setting Extension Target Project Name

Activate the Extension scheme as shown below:

![Activating Extension Scheme ](/media/articles/72/Screen-Shot-2016-08-19-at-12.19.38-AM-620x388.png)

Activating Extension Scheme

Enable the Todays Extension in Simulator by Clicking on **Edit** > **\+ Button** > **Done** as show below:

![Enabling Today's Extension in Simulator ](/media/articles/72/pjimage-620x620.jpg)

Enabling Today’s Extension in Simulator

Now , It’s time to Create a new URL Scheme by Selecting Project File > Selecting Target > Info > scroll down and select URL Types > Add Identifier and URL Schemes

![Creating URL Scheme](/media/articles/72/Screen-Shot-2016-08-27-at-10.07.45-PM-620x388.png)

Creating URL Scheme

Open _Maininterface.storyboard_ and Drag and drop a Label from Object Library to Storyboard as show below:

![Drag and Drop Label from Object Library to StoryBoard](/media/articles/72/Screen-Shot-2016-08-27-at-10.23.34-PM-620x388.png)

Drag and Drop Label from Object Library to StoryBoard

Create a Outlet of the Label by Opening Associate Inspector from Storyboard window and _control + Drag_ the Label , In _viewDidLoad_ paste following snippet

```c

 //Use tap gesture on label to launch app
labelText.userInteractionEnabled = true
let tapGesture = UITapGestureRecognizer(target: self, action: #selector(TodayViewController.doLaunchApp))
labelText.addGestureRecognizer(tapGesture)
```

Add _doLaunchApp_ function below the _viewDidLoad_ as show below

```c

func doLaunchApp(){
if let url = NSURL(string: "TodaysExtTarget://"){
self.extensionContext?.openURL(url, completionHandler: nil)
}
}
```

Uff finally we are done with the coding part, Run the app go to _HomeScreen(cmd + shift + H)_ Tap on the Widget and it will take you to your App Initial screen.

You can get the source in the following link.
