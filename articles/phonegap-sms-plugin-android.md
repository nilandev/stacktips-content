---
id: 306
title: Sending SMS from JavaScript using Phonegap SMS plugin
slug: phonegap-sms-plugin-android
excerpt: This Android Phonegap plugin allows you to easily send SMS in android using both native SMS Manager or by invoking the default android SMS app. This plugin works with PhoneGap 2.9.x version.
difficulty: beginners
publishedDate: "2013-08-03T04:05:50.000Z"
updatedDate: "2025-09-16T23:05:35.603Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - cordova
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

# 1\. Introduction

This Android Phonegap plugin allows you to easily send SMS in android using both native SMS Manager or by invoking the default android SMS app. This plugin works with PhoneGap 2.9.x version. The sample example is tested with Phonegap 2.9.0 and Android 4.1.x on a Samsung Galaxy S III device.

# 2\. Plugin Download Link

[**https://github.com/javatechig/phonegap-sms-plugin**](https://github.com/javatechig/phonegap-sms-plugin "https://github.com/javatechig/phonegap-sms-plugin")

# 3\. Features supported

1.  Send SMS using default SMS app using android intent method
2.  Sends SMS using SMS manager

The plugin source code is hosted over GitHub. You can grab a copy from below link

[![Sending SMS Using PhoneGap Plugin](/media/articles/399/Sending-SMS-Using-PhoneGap-Plugin.png)](http://stacktips.com)

# 4\. How to integrate the SMS plugin

-   Make sure you are using Phonegap plugin 2.9.x. If you are using a older versiion of Codova/PhoneGap plugin, you may grab a new copy from [http://www.phonegap.com](http://www.phonegap.com "phonegap.com")
-   Place smsplugin.js file in your project’s www folder and include a reference to it in your html files. You can include reference by using

```html
<!-- for codova plugins -->
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="smsplugin.js"></script>
```

-   Add the SmsPlugin.java file from src to your project’s src hierarchy. and then reference the plugin in your res/config.xml file

```xml
 <feature name="SmsPlugin">
      <param name="android-package" value="org.apache.cordova.plugin.SmsPlugin"/>
 </feature>
```

-   Ensure that your manifest contains the necessary permissions to send SMS messages.

```xml
 <uses-permission android:name="android.permission.SEND_SMS"
```

-   Now let us call the plugin method by passing appropriate parameters to send SMS.

# 5.Sending SMS using Intent method

```javascript
// intent param is needed to send sms using sms intent
              $("#btnSmsIntent").click(function(){
                SmsPlugin.prototype.send('9731563021', 'Your Message Here!', 'INTENT'
                    function () {
                       alert('Message sent successfully');
                    },
                    function (e) {
                        alert('Message Failed:' + e);
                    }
                );
             });
```

# 6\. Sending SMS using SMS manager

```javascript
// intent param is needed to send sms using sms intent
              $("#btnSmsIntent").click(function(){
                SmsPlugin.prototype.send('9731563021', 'Your Message Here!', ' '
                    function () {
                       alert('Message sent successfully');
                    },
                    function (e) {
                        alert('Message Failed:' + e);
                    }
                );
             });
```

# 7\. Complete Example

## 7.1. How to integrate the SMS plugin

Create a new android project using File-> New android application using your eclipse. Follow the new app wizard steps to create an new android app. Make sure to add your android targets. In my example, I have used android 4.x as my build target for my android app.

## 7.2. Creating html and JavaScript files

Create a folder `'www'` under your project assets folder. The `www` folder will contain all of the JavaScript and html pages and library’s. If you look at the screen above, I have used `jQueery` framework for building such a simple user interface. Now I term it as simple, as I got this html from one of my JavaScript expert friend. However this simple example will be enough for demonstration.

Now take a look at my index.html files

```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <title></title>
      <link rel="stylesheet" href="jquery.mobile-1.3.1.min.css">
      <!-- Extra Codiqa features -->
      <link rel="stylesheet" href="codiqa.ext.css">
      <!-- jQuery and jQuery Mobile -->
      <script src="jquery-1.9.1.min.js"></script>
      <script src="jquery.mobile-1.3.1.min.js"></script>
      <!-- Extra Codiqa features -->
      <script src="codiqa.ext.js"></script>
      <!-- for codova plugins -->
      <script type="text/javascript" src="cordova.js"></script>
      <script type="text/javascript" src="smsplugin.js"></script>
      <script type="text/javascript">
         $(document).ready(function() {

         //leave empty for sending sms using default intent
             $("#btnDefaultSMS").click(function(){

                var number = $("#numberTxt").val();
                var message = $("#messageTxt").val();
             SmsPlugin.prototype.send(number, message, '',
         function () {
           alert('Message sent successfully');
         },
         function (e) {
            alert('Message Failed:' + e);
         }
         );
             });
         });

      </script>
   </head>
   <body>
      <!-- Home -->
      <div data-role="page" id="page1">
         <div data-theme="a" data-role="header">
            <h4>
               SMS Example
            </h4>
         </div>
         <div data-role="content">
            <div data-role="fieldcontain">
               <input name="" id="numberTxt" placeholder="Enter mobile number" value=""
                  type="tel" data-mini="true"><br>
               <textarea name="" id="messageTxt" placeholder="Enter message" data-mini="false"></textarea>
               <br>
               <input id="btnDefaultSMS" type="submit" data-theme="e"
                  value="Send SMS" data-mini="false">
            </div>
         </div>
      </div>
   </body>
</html>
```

In the ‘index.html’ file, you need the add the reference of ‘smsplugin.js’ file.

## 7.3. Adding plugin source to project

```java
import org.json.JSONArray;
import org.json.JSONException;
import android.app.PendingIntent;
import android.content.Intent;
import android.telephony.SmsManager;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;

public class SmsPlugin extends CordovaPlugin {
    public final String ACTION_SEND_SMS = "SendSMS";

    @Override
    public boolean execute(String action, JSONArray args,
            final CallbackContext callbackContext) throws JSONException {
        if (action.equals(ACTION_SEND_SMS)) {
            try {
                String phoneNumber = args.getString(0);
                String message = args.getString(1);
                String method = args.getString(2);

                if (method.equalsIgnoreCase("INTENT")) {
                    invokeSMSIntent(phoneNumber, message);
                    callbackContext.sendPluginResult(new PluginResult(
                            PluginResult.Status.NO_RESULT));
                } else {
                    sendSMS(phoneNumber, message);
                }

                callbackContext.sendPluginResult(new PluginResult(
                        PluginResult.Status.OK));
                return true;
            } catch (JSONException ex) {
                callbackContext.sendPluginResult(new PluginResult(
                        PluginResult.Status.JSON_EXCEPTION));
            }
        }
        return false;
    }

    private void invokeSMSIntent(String phoneNumber, String message) {
        Intent sendIntent = new Intent(Intent.ACTION_VIEW);
        sendIntent.putExtra("sms_body", message);
        sendIntent.setType("vnd.android-dir/mms-sms");
        this.cordova.getActivity().startActivity(sendIntent);
    }

    private void sendSMS(String phoneNumber, String message) {
        SmsManager manager = SmsManager.getDefault();
        PendingIntent sentIntent = PendingIntent.getActivity(
                this.cordova.getActivity(), 0, new Intent(), 0);
        manager.sendTextMessage(phoneNumber, null, message, sentIntent, null);
    }

}
```

## 7.4. Configuring SMS plugin

Add the `SmsPlugin.java` file from src to your project’s src hierarchy. and then reference the plugin in your res/config.xml file

```xml
 <feature name="SmsPlugin">
      <param name="android-package" value="org.apache.cordova.plugin.SmsPlugin"/>
 </feature>
```

Ensure that your manifest contains the necessary permissions to send SMS messages.

```xml
 <uses-permission android:name="android.permission.SEND_SMS"
```


Now let us call the plugin method by passing appropriate parameters to send SMS.
