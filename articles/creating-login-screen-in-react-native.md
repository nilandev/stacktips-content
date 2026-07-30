---
id: 29
title: Creating Login Screen in React Native
slug: creating-login-screen-in-react-native
excerpt: React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting…
difficulty: beginners
publishedDate: "2017-06-06T16:07:40.000Z"
updatedDate: "2025-09-16T23:05:21.312Z"
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

React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

In this article, we will show you how to create a Login Screen using React-Native that will work for both iOS and Android Platform.

### Software Prerequisites

This example is developed in MacOS. Before you begin, make sure you have all the software prerequisites are installed on your development machine.

-   You need ‘Homebrew’ package management software to get all other dependency packages. Usually all modern macOS are preinstalled with home-brew. By any chance, if you don’t have it on your machine, install it using following command. Learn more from official Homebrew website [here](https://brew.sh/).

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

-   Install node.js if not installed already. To check if it is installed paste the following command in your terminal window.

```bash
$ node -v
```

If not installed, the following command will install the latest node version.

```bash
$ brew install node
```

-   Now we will install ‘Watchman’. Though it is strictly not required, this will make our development productive. Watchman is a tool by provided by Facebook, used for watching changes in the filesystem.

```bash
brew install watchman
```

-   Install React Native command line interface

```bash
$ npm install -g react-native-cli
```

-   Run the following command to cross check React-native version.

```bash
$ react-native -v
```

-   Check you have the latest SDK of [iOS](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) and [Android](https://developer.android.com/studio/index.html) available in your system.Download and install if you don’t have it already.
-   Make sure you have installed [Visual Studio Code](https://code.visualstudio.com/) IDE, and relevant Plugins for React-Naive. Refer our beginners guide for more information on the [Visual Studio Code IDE plugin](/articles/getting-starteded-with-react-native-ios-android) installation.

### Creating new React Native project

Now, we are ready to go by creating a new project by name DemoLogin via Terminal or [iTerm](https://www.iterm2.com/), where we are using iTerm throughout in this article.

Open Terminal/iTerm

```bash
$ ~ mkdir ReactNativeApp
$ ~ cd ReactNativeApp
$ ReactNativeApp react-native init DemoLogin
$ DemoLogin Code .
```

Command `Code .` should open the project in VS code, if it’s not opening we need to configure the _**Path**_ as below:

-   Launch VS Code.
-   Open the **Command Palette (⇧⌘P)** and type `shell command` to find the Shell Command: Install ‘code’ command in PATH command.

![](/media/articles/31/mac_shell-command.png)

-   Restart the terminal for the new **_$PATH_** value to take effect. You’ll be able to type `code .` in any folder to start editing files in that folder.
-   Open `index.ios.js` delete all the code inside `render` function, and also remove the snippet inside the `const styles`. Anyways we are going to create everything form scratch.

Now let’s create a proper folder structure by creating new folder’s of required components, as of now we need a Login component and logo image to display on login screen `src` -> components -> images and Login as shown below.

![](/media/articles/31/Screen-Shot-2017-06-04-at-10.04.52-PM-1.png)

### Creating Login Component

Let’s create Login Component by creating new file inside Login Folder which we have created and name it as Login.js. Open Login.js and press **Command Palette (⇧⌘P)** and type ‘Change Language Mode’ and press `'enter'`, next type `'JavaScript React'`

![](/media/articles/31/Screen-Shot-2017-06-04-at-10.16.59-PM-620x270.png)

![](/media/articles/31/Screen-Shot-2017-06-04-at-10.17.26-PM-620x263.png)

And type `rnc` for creating _‘React Native Class Component Template’_

![](/media/articles/31/Screen-Shot-2017-06-04-at-10.22.09-PM-620x278.png)

Replace `'MyClass'` with `'Login'` and save the file.

![](/media/articles/31/Screen-Shot-2017-06-04-at-10.32.18-PM-620x309.png)

Next, Let’s import logo image to the ‘images’ folder which we created initially, You can just right click and Reveal in finder, Copy Paste the logo image. In this article we are using our StackTip logo. the final UI should look similar to the below image:

![](/media/articles/31/Simulator-Screen-Shot-05-Jun-2017-10.48.58-PM-2.png)

Let’s start creating UI of the LoginScreen, open `'Login.js'` inside container view tag let’s add two more view containers and name them as `'loginContainer'` and `'formContainer'` and also set the styles as shown below

```js
<View style={styles.container}>
        <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} />
         </View>

            <View style={styles.formContainer}>
                   <LoginForm />
            </View>
       </View>

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
```

Now go to `index.ios.js` and import `Login` below `import statement from react-native`

```js
import Login from './src/components/Login/Login';
```

And initialise the `Login` component inside `render` function, overall it’s should look something like this

```js
import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text ,View} from 'react-native';
//import Login Component
import Login from './src/components/Login/Login';

export default class DemoLogin extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);
```

Let’s compile and check weather we have zero compilation error and logo image rendering properly as expected. We can compile in two ways one is via iTerm and another via VS Code Editor.

To compile via iTerm paste the following command, make sure your inside project folder.

```bash
react-native run-ios
```

To compile via VS Code Editor, open debug editor(⇧⌘D) and select `Debug iOS` in dropdown and click on run. If it compile successfully you should find something like

![](/media/articles/31/Simulator-Screen-Shot-06-Jun-2017-8.33.30-AM.png)

Next let’s create a `form component` for LoginScreen which contains two textfield(Email and Password) and Login Button. Create new file inside Login folder and name it as `LoginForm.js` and follow the same steps for creating component which we did for Login Component above and type `rnc`, replace MyClass with LoginForm.

![](/media/articles/31/Screen-Shot-2017-06-06-at-8.56.03-AM-620x225.png)

Let’s create a TextFiled’s for Email and Password and a LoginButton, we should import `TextInput` inside and `TouchableOpacity` for LoginButton inside `react-native`.

```js
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
```

Inside View container tag paste the following snippet, which contains properties for Textfield like keyboardType, returnKeyType, placeholder, placeholderTextColor ,onSubmitEditing, secureTextEntry for secure password. For Login button we can use either react-native Button component or TouchableOpacity, we will use TouchableOpacity in this article.

```js
<TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='Email or Mobile Num'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

<TextInput style = {styles.input}
              returnKeyType="go"
              ref={(input)=> this.passwordInput = input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry/>

<TouchableOpacity style={styles.buttonContainer}
                     onPress={onButtonPress}>
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>
// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
```

Now we will import this Loginform component in `Login.js`, open Login.js file and paste the following line above `class Login extends Component`

```js
import LoginForm from './LoginForm';
```

And initialise Loginform inside view formContainer tag,

```js
 <View style={styles.formContainer}>
             <LoginForm />
  </View>
```

Compile and check everything is working fine as expected, and should look like

![](/media/articles/31/Simulator-Screen-Shot-05-Jun-2017-10.48.58-PM-2.png)

One thing we haven’t taken care is when you tap on Email or Password, the keyboard will overlay on the TextField as below

![](/media/articles/31/Simulator-Screen-Shot-06-Jun-2017-9.27.38-AM.png)

People who are form iOS background will know the pain to handle this use case in Native UITextfield, this can be achieved easily in react native by [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview.html). Let’s replace the `view` tag of container with `keyboardavoidingview` and set the `behaviors as 'Padding'` as shown below

```js
class Login extends Component {
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} />

                   </View>
               <View style={styles.formContainer}>
                   <LoginForm />
               </View>
           </KeyboardAvoidingView>
        );
    }
}
```

Now compile and check the magic happening on your simulator ?

![](/media/articles/31/Simulator-Screen-Shot-06-Jun-2017-9.49.15-AM.png)

if you want to check in Android we need to copy paste the contents form index.ios.js to index.android.js, that’s it…! this will work as champ..!

Cheers we ready with Login module, and can find the source [here](https://github.com/satish25/Login_ReactNative.git)

Happy Coding..!
