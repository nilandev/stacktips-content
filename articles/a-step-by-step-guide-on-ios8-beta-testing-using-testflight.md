---
id: 181
title: A Step-By-Step Guide On iOS8 Beta Testing Using TestFlight
slug: a-step-by-step-guide-on-ios8-beta-testing-using-testflight
excerpt: Building a fine quality mobile app is something that involves a great deal of dedication and hard work.…
difficulty: beginners
publishedDate: "2014-11-25T10:24:43.000Z"
updatedDate: "2025-09-16T23:05:29.151Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/242/thumbnail.png
topics: 
  - blog
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Building a fine quality mobile app is something that involves a great deal of dedication and hard work. In other words, prior to submitting your iOS app to the App Store, it is pivotal to beta test it for detection of any kind of bugs.

TestFlight is one of the best tools that are used for distributing iOS applications for beta testing. Having being acquired by Apple, TestFlight’s parent company Burstly has been quite confident about the success and acceptance of this Apple beta distribution platform. Getting started with TestFlight is as simple as taking a walk in the park. Through this blog, I’ll be offering you a definite guideline on iOS8 beta testing performed with the help of TestFlight.

# **iOS app beta testing- What is it exactly?**

Beta testing is basically a prominent step in the software development life cycle. Even after testing the app using the built-in simulator and real device, there are chance of missing the opportunity of uncovering some of the basic bugs. This is the point why, the significance of beta testing is realized. Generally open for a small group of real people, beta testing is an effective method of receiving feedback for a particular app that’s to be released soon. You can allow the beta testers to discover a wide range of bugs that might have entered into the app during the design and development stages.

## **TestFlight- An innovative tool for beta testing of iOS apps**

TestFlight helps you in streamlining the process of beta testing of your application. TestFlight is a tool that makes it quite easy for a developer/app owner to invite users for testing the pre-release version of iOS8 applications. With TestFlight, you can invite up to 1,000 beta testers via their email addresses.

Adjacent to the official release of iOS8 and Xcode 6, TestFlight can be easily integrated into iTunes Connect.

[![testflight-24-19](/media/articles/242/testflight-24-19-620x403.png)](http://stacktips.com)

## **Testing with external testers- Possible with TestFlight**

TestFlight allows you to arrange app testing with external testers and internal app users. Here, internal app users can be engineers from development team and other stakeholders. With new TestFlight, you can invite up to, 25 internal users and 1,000 external testers, who can download and test the app and can report bugs.

The only point that needs to be noted with the process of inviting external testers is that your app must be approved by Apple beforehand. This restriction isn’t there for the internal users as they can begin beta testing your app once its been uploaded to iTunes Connect.

## **And now, the steps involved in beta testing iOS apps using TestFlight**

In this post, we will drive through the process that involve the steps to distribute an app for beta testers using TestFlight.

If you are an Android developer looking for similar beta testing platform read through [TestFairy – Android app beta testing and deployment platform](http://stacktips.com/android/testfairy-android-app-beta-testing-platform "TestFairy – Android app beta testing and deployment platform").

### **Step 1- Create an app record on iTunes Connect**

In order to get started with beta testing, you need to create an app record on iTunes Connect. Simply go to the [iTunes Connect](https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa) official website and create an account.

Once your account is setup, sign in and select ‘My Apps’ and the + icon for creating a new Ios app. Here, you’ll also be asked to fill in values for fields including: App name, primary language, Bundle ID, version and SKU (Stock Keeping Unit).

### **Step 2- Update the Build String**

Now let us go back to Xcode IDE and make sure the version number matches with the one you entered in iTunes Connect.

Go to project navigator and select the project and target for displaying the project editor. After this, under the General Tab, ensure to review the version fields available under the identity section and set the Build field to 1.

### **Step 3- Archive and upload the application**

Prior to archiving the app, make it a point to include the app icon and launch the image in the Xcode project. Here, all the app icons will be managed by the asset catalog. In order to add an icon to the set, select the app icon in the Finder and drag the same to the appropriate image in the set viewer.

For archiving the app, simply review the Archive scheme settings and make sure the build configuration has been set to Release. Once you’re done with the app archiving process, the archive will appear within the Organizer and the app will be ready for upload to iTunes Connect.

### **Step 4- Manage the app’s beta testing in iTunes Connect**

Once the build is uploaded to iTunes Connect, select My Apps and then your app. You can easily spot your uploaded app archive under the PreRelease tab. Next, opt for enabling beta testing by flipping the TestFlight Beta Testing to ‘On’.

[![12TestingOff_2x](/media/articles/242/12TestingOff_2x.png)](http://stacktips.com)

The status of beta testing of app will be changed from Inactive to Invite Testers. After this, click on ‘Invite Testers’ and ‘Users and Roles’ for inviting the internal testers to check out the application. You can assign specific designations to users including: admin, legal etc. The specific users will receive an email regarding the invitation for performing the app’s TestFlight beta testing.

[![6AddExternalTesters_2x](/media/articles/242/6AddExternalTesters_2x.png)](http://stacktips.com)

# **Conclusion**

TestFlight has been one of the most powerful tools for beta testing of iOS applications. Once you’ve built an app after hiring a [Custom iPhone App Development Company](http://www.xicom.biz/offerings/iphone-development/), its quite crucial for you to beta test it before releasing it for the general public. With testing being a vital part of app development process, you can’t afford to skip it in any way.

Hope the steps mentioned will helped you gather a clear insight into beta testing your apps using TestFlight before public release.
