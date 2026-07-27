---
id: 28
title: Integrate Facebook Login into a React Native iOS App
slug: integrate-facebook-login-into-a-react-native-ios-app
excerpt: Hey folks, In this article we will show you how to create Facebook Login using React-Native that will…
difficulty: beginners
publishedDate: "2017-06-10T01:30:07.000Z"
updatedDate: "2025-09-16T23:05:21.245Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - laravel
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Hey folks, In this article we will show you how to create Facebook Login using React-Native that will work for both iOS and Android Platform.

As assume that you have a basic knowledge of React-Native and required Software prerequisites are already available in your development machine. If not, go back to our articles Getting Started with React-Native for iOS and Android and [Creating Login Screen in React Native](/articles/creating-login-screen-in-react-native).

## Creating new React Native project

To create a new React Native project, just open your Terminal/iTerm app and run the following command.

$ ~ mkdir ReactNativeApp
$ ~ cd ReactNativeApp
$ ReactNativeApp react-native init DemoFBLogin

Before integrating with Facebook to React app, we have to first create a Facebook app on the **[Facebook developer console.](https://developers.facebook.com/apps "https://developers.facebook.com/apps")**

Click on **Create App** and enter the display name which will be displayed publicly to the user. It is recommended to provide the contact email. While authenticating, if users have any questions they may contact you on this email.

![](/media/articles/29/Screen-Shot-2017-06-08-at-9.02.18-PM-620x406.png)

Once the App is created it will display the Product Setup page.

![](/media/articles/29/Screen-Shot-2017-06-08-at-9.03.13-PM-620x355.png)

Let’s click on **Get Started** with Facebook Login. First let’s start with the iOS platform, so select iOS and download the SDK and unzip the archive to **~/Documents/FacebookSDK**. .

![](/media/articles/29/Screen-Shot-2017-06-08-at-9.03.20-PM-620x359.png)

Now, Install and link the Facebook SDK for React Native packages and dependencies in the terminal and start npm server.

$ cd DemoFBLogin
$ DemoFBLogin react-native install react-native-fbsdk
$ DemoFBLogin react-native link react-native-fbsdk
$ DemoFBLogin npm start

![](/media/articles/29/Screen-Shot-2017-06-08-at-10.28.51-PM-620x267.png)

Open the ios project form the DemoFBLogin/ios folder and drag and drop the **FBSDKLoginKit.framework, FBSDKShareKit.framework, Bots.framework, FBSDKCoreKit.framework** inside your project.

![](/media/articles/29/Screen-Shot-2017-06-08-at-10.34.56-PM-620x388.png)

And make sure you have checked **copy items if needed** and click on **Finish**

![](/media/articles/29/Screen-Shot-2017-06-08-at-10.35.24-PM-620x388.png)

Now go to **Link Binary With Libraries** and check all this FBSDKs are linked properly.

![](/media/articles/29/Screen-Shot-2017-06-08-at-10.52.19-PM-620x388.png)

Let’s also set the Framework Search Path of the Facebook SDK which we downloaded and unzip the archive to **~/Documents/FacebookSDK**

![](/media/articles/29/Screen-Shot-2017-06-08-at-10.58.36-PM-620x388.png)

Go back to the developer.facebook.com where we created App prior and **Add your Bundle Identifier**

![](/media/articles/29/Screen-Shot-2017-06-08-at-11.05.23-PM-620x360.png)

Enable single sign-on, and Configure your info.plist follow the step by step instruction provide in developer.facebook.com.

![](/media/articles/29/Screen-Shot-2017-06-08-at-11.05.33-PM-620x318.png)

Connect App Delegate , Open your Xcode project go to **AppDelegate.m** and **import** and paste the following code inside **didFinishLaunchingWithOptions**

```c
[[FBSDKApplicationDelegate sharedInstance] application:application
didFinishLaunchingWithOptions:launchOptions];
Declare OpenUrl:sourceApplicaiton:annotation method below didFinishLaunchingWithOptions
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
BOOL handled = [[FBSDKApplicationDelegate sharedInstance] application:application
openURL:url
sourceApplication:sourceApplication
annotation:annotation
];
// Add any custom logic here.
return handled;
}
```

In case if you find any error as show below

![](/media/articles/29/Screen-Shot-2017-06-09-at-8.13.28-AM-620x249.png)

That is because we need to do **npm install** in our react-native project folder, open your terminal and navigate to your project folder and type `npm install or npm i` after installation clean (⇧⌘K) and build (⌘B) that error will go.

Now open the react-native project with VS Code IDE, directly by opening folder via VC Code or open your terminal and navigate to your project folder and code. Go to **Debug editor(⇧⌘D)** and Add Configuration by adding iOS platform.

Open `index.ios.js` **import FBSDK, { LoginManager } from ‘react-native-fbsdk’** and create a function called `_fbAuth` i start with **\_** to signify that it’s a private method inside this function call `logInWithReadPermissions` form FB loginManage and handled the success and cancel state snippet looks something like

```js
_fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
        function(result) {
            if (result.isCancelled) {
                alert('Login cancelled');
            } else {
                alert('Login success with permissions: ' +
                    result.grantedPermissions.toString());
            }
        },
        function(error) {
            alert('Login fail with error: ' + error);
        }
    );

}
```

Remove all the code inside **render()** function except container view and create a button by with saying **Login Via Facebook**, Later let’s assign the **\_fbAuth function** for a button. we do this by **onPress** in your opening tag of and supplying the function `{this._fbAuth}`. Over all code will look something like this:

```js
import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FBSDK, {
    LoginManager
} from 'react-native-fbsdk'

export default class DemoFBLogin extends Component {

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login success with permissions: ' +
                        result.grantedPermissions.toString());
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );

    }
    render() {
        return (
		<View style={styles.container}>
		<TouchableOpacity onPress={this._fbAuth}>
		<Text>Login Via FaceBook</Text>
		</TouchableOpacity>
		</View> 
        );
    }
}
```

Compile and run the project.

### Download Source code

\[download url=”https://github.com/satish25/FaceBook\_Login\_React-Native.git”\]
