---
id: 6
title: Getting Started with React-Native for iOS and Android
slug: getting-starteded-with-react-native-ios-android
excerpt: Hey folks, React-Native is happening Framework for Mobility in recent times due to it’s tremendous success which was…
difficulty: beginners
publishedDate: "2017-05-28T05:33:22.000Z"
updatedDate: "2025-09-16T23:05:21.405Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Hey folks, [React-Native](https://facebook.github.io/react-native/releases/next/) is happening Framework for Mobility in recent times due to it’s tremendous success which was developed by Facebook. Overall it’s a new way of developing native iOS and Android applications, primarily using a single codebase on [React](https://facebook.github.io/react/) framework for web.

The idea is to write the core application in Javascript and React-Native will compile native iOS and Android applications. Companies like Facebook, Instagram, Netflix, Airbnb use React-Native.

## Advantages of using React-Native

-   Building native mobile apps using JavaScript and React
-   No need to recompile every-time to check the changes
-   Use native code when you need
-   Maximum code reuse between platforms
-   Reduces cost of development
-   Better performance for mobile environment

The following tutorials will guide you through developing your first React-Native application for both iOS and Android, React-Native 0.44 is the version used.

## Getting Started

For setting up the environment, install React-Native and required dependencies i.e home brew, node, watchman, Xcode and Android development environment refer [installation link](https://facebook.github.io/react-native/releases/next/docs/getting-started.html#content).

There are so many IDEs out there for development and it’s difficult for us to choose the right editor for a particular programming language. While working with React Native, I did some digging and found below IDEs which are suitable for mobile app development:

-   SubLime
-   Atom
-   Visual Studio Code

I use “Visual Studio Code” in my macOS as IDE of my choice.

## Creating a new React Native app

Create a new folder in any specific location you wish using terminal with the following command

$ mkdir ReactProject
$ cd ReactProject
$ ReactProject~ react-native init HelloWorld

[![](/media/articles/33/Creating-React-Native-Application-620x481.png)](http://stacktips.com)

### Running your React Native application

Let’s check if the application created works fine by compiling and building it on either iOS Simulator or Android emulator. There are two ways we can proceed as listed below:  
By React CLI in Terminal using commands.

#### By React CLI in Terminal using commands.

$ cd HelloWorld

To run the iOS app, execute following command in your terminal.

$ HelloWorld~ react-native run-ios

[![Running React native iOS](/media/articles/33/Running-React-native-iOS.png)](http://stacktips.com)

To run the Android app, execute following command in your terminal.

$ HelloWorld~ react-native run-android

#### Using Visual Studio Code IDE

Let’s import code folder in VS code IDE and make sure you have installed React-Native plugins in Extension Window **(⌘ + ⇧ + x)** before building the app.

[![](/media/articles/33/Import-React-Native-App-in-VS-620x445.png)](http://stacktips.com)

After importing go to Debug window **(⌘ + ⇧ + d)** and select the Environment as React-Native which will create configuration file named `launch.json`.  
[![](/media/articles/33/Selecting-Environment-in-VS-Code-IDE-620x450.png)](http://stacktips.com)

Finally, we are done with the configuration setup in VS code IDE. Now, select the required platform from the Debug drop-down and click on Run.

[![](/media/articles/33/Configuration-file-created-by-VS-Code-IDE-620x448.png)](http://stacktips.com)

[![](/media/articles/33/Running-Application-via-VS-Code-IDE-620x444.png)](http://stacktips.com)

### Modifying your app

Now that you have successfully run the app, let’s modify it.

Note: main root file for iOS will be `index.ios.js` and for Android `index.android.js` in the project structure.

That’s it! We’ve successfully built and modified the first React Native app.
