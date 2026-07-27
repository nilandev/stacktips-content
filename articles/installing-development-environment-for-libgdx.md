---
id: 210
title: Installing Development Environment for Libgdx
slug: installing-development-environment-for-libgdx
excerpt: As we know Libgdx is a Java based, cross platform game development framework. This means that, once we write the code for one platform, we can port the game to other platforms with no or minimal changes. Currently it is supporting Windows, Linux, Mac OS X, Android, iOS and HTML5 platforms.
difficulty: beginners
publishedDate: "2014-07-28T16:17:39.000Z"
updatedDate: "2025-09-16T23:05:30.741Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/278/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Before you getting into details of this tutorial, I would recommend you to go through my first post of “Introduction to Libgdx”, if you have not read already.

As we know Libgdx is a Java based, cross platform game development framework. This means that, once we write the code for one platform, we can port the game to other platforms with no or minimal changes. Currently it is supporting Windows, Linux, Mac OS X, Android, iOS and HTML5 platforms. And hence, you have to install the required softwares and do the required setup before you can start development. In this tutorial we will see setting up Libgdx development environment for different targets.

# 1\. Installing Java Development Kit (JDK)

As discussed earlier, Libgdx is a Java based framework. It need Java runtime to compile any of your game irrespective of your build target. So before you begin with anything you need to install Java in your system. If you already have Java installed in your system, you can skip this step.

1.  Download the latest JDK pack from [Oracle official website](http://www.oracle.com/technetwork/java/javase/downloads/index.html). We recommend you install Java SDK 6.x version.
2.  Once downloaded, you can just double click to install. The installation process may differ depending upon your development machine operating system. You can refer the [official documentation from Oracle](https://www.java.com/en/download/help/download_options.xml) for Java installation process.
3.  Once you are done with the above steps, we recommend you to add Java to your system path (Environment variable). If you are a windows user, you can refer [Oracle documentation](http://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html) and Mac OS x users can follow my tutorial on [setting JAVA\_HOME environment variable in mac](http://stacktips.com/mac-os-x/how-to-set-java_home-environment-variable-on-mac-os-x).

# 2\. Installing Eclipse IDE

**What Is Eclipse?**

Eclipse is an integrated development environment (IDE). It contains a base workspace and an extensible plug-in system for customizing the environment. Written mostly in Java, Eclipse can be used to develop applications. By means of various plug-ins, Eclipse may also be used to develop applications in other programming languages: Ada, ABAP, C, C++, COBOL, Fortran, Haskell, JavaScript, Lasso, Natural, Perl, PHP, Prolog, Python, R, Ruby (including Ruby on Rails framework), Scala, Clojure, Groovy, Scheme, and Erlang.

_— Definition taken from Wikipedia_

Eclipse is an open source IDE and freely available for download. Download a copy of eclipse from [eclipse.org](https://www.eclipse.org/downloads/). Once it is downloaded, you can extract the .zip or .tar folder and place in the location of your choice.

# 3\. Downloading Libgdx

Libgdx development process is changed a bit since its evolution. Earlier process was to download the Libgdx library and using it for Libgdx project. The official document of Libgdx, highly recommend to to use the latest Gradle based build process. However in this tutorial we will show you the both steps.

## 3.1. Older Libgdx downloads (Deprecated)

Download the latest copy of Libgdx library from [Google Code](https://code.google.com/p/libgdx/downloads/list). Once it is downloaded, extract the content of the zip file and paste it to a folder “c:/libgdx”. gdx-setup-ui.jar file will be used to create a project setup. In the later tutorials, we will see how to use the downloaded Libgdx files.

[![Download Libgdx from Google Code](/media/articles/278/Download-Libgdx-from-Google-Code-620x312.png)](http://stacktips.com)

## 3.2. Gradle based Libgdx Project (Recommended)

**What is Gradle?**

Gradle is a dependency management and build system. A dependency management system is an easy way to pull in 3rd party libraries into your project, without having to store the libraries in your source tree. Instead, the dependency management system relies on a file in your source tree that specifies the names and versions of the libraries you need to be included in your application. Adding, removing and changing the version of a 3rd party library is as easy as changing a few lines in that configuration file. The dependency management system will pull in the libraries you specified from a central repository (in our case Maven Central) and store them in a directory outside of your project.

A build system helps with building and packaging your application, without being tied to a specific IDE. This is especially useful if you use a build or continuous integration server, where IDE’s aren’t readily available. Instead, the build server can call the build system, providing it with a build configuration so it knows how to build your application for different platforms.

_— Definition taken form_ [_https://github.com/libgdx/libgdx/wiki/Project-Setup-Gradle_](https://github.com/libgdx/libgdx/wiki/Project-Setup-Gradle)

1.  We have already downloaded the eclipse in the above step and now we need to install Gradle. Gradle is used to build Libgdx projects. Now in this step you can download the Gradle plugins to your eclipse from Help-> Install new softwares. To do this, we will copy the below link and paste in your new installation window. We only need the Gradle IDE! [http://dist.springsource.com/release/TOOLS/gradle](http://dist.springsource.com/release/TOOLS/gradle)
2.  Now [download LibGDX project setup application](http://libgdx.badlogicgames.com/download.html). This application is the .Jar file and will help you to set up Gradle based application.

# 4\. Installing Android Environment

As we already have the Eclipse, IDE, you may just download the eclipse ADT plugin and Android SDK separately. Alternatively, You can download the whole ADT bundle, that comes with latest SDK and eclipse. Follow simple steps provided in [official Android developer portal.](http://developer.android.com/sdk/index.html)

Note: Please don’t use Android emulators for your game testing purpose. It really Sucks!! I recommend to use real device for development and testing purpose.

# 5\. Installing GWT Plugin

The Google Plugin for Eclipse is a set of software development tools that enables Java developers to quickly design, build, optimize, and deploy cloud-based applications. The Google Plugin for Eclipse allows you to easily create and deploy App Engine applications.

This plugin is necessary, if you want to develop and run the application for HTML5/GWT with eclipse. You can install the GWT plugin from the eclipse update site

[https://dl.google.com/eclipse/plugin/4.3](https://dl.google.com/eclipse/plugin/4.3)

[![Installing GWT Plugin](/media/articles/278/Installing-GWT-Plugin-620x521.png)](http://stacktips.com)

# 6\. Installing iOS Environment

Libgdx developed game can also run on iOS platform. You must be surprises, how is this possible to run Java code in iOS. This is possible by using RoboVM. RoboVM allows you to create, truly native iOS apps using native UIs and with full hardware access. Install RoboVM eclipse plugin from the below update site

[http://download.robovm.org/eclipse/](http://download.robovm.org/eclipse/)

**Note**: You cannot develop iOS application using windows platform. You must use MacOSX for development, if you are looking for iOS as your target.

[![Installing RoboVM eclipse plugin](/media/articles/278/Installing-RoboVM-eclipse-plugin-620x520.png)](http://stacktips.com)

Make sure you accept the license agreement for each third party software vendor to install them. Once you have finished the above installation, you will be ready for developing and executing Libgdx games in Android, HTML5 and in iOS.

# 7\. References

[http://www.toxsickproductions.com/](http://www.toxsickproductions.com/)  
[http://developer.android.com/](http://developer.android.com/)  
[http://libgdx.badlogicgames.com/](http://libgdx.badlogicgames.com/)
