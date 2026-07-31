---
id: 152
title: A Quick Introduction to View, ViewGroups and Layout Managers in Xamarin Android
slug: a-quick-introduction-to-view-viewgroups-and-layout-managers-in-xamarin-android
excerpt: Views and ViewGroups Everything that you see in an Android app is a View; buttons, labels, text boxes,…
difficulty: beginners
publishedDate: "2015-06-08T21:52:51.000Z"
updatedDate: "2025-09-16T23:05:27.752Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-view-viewgroup
  - xamarin-android-layout
  - android-layout-managers
  - declarative-vs-programmatic-ui
course: null
displayOrder: 0
seo: 
  metaTitle: "Views, ViewGroups & Layout Managers in Xamarin Android"
  metaDescription: "Learn the basics of Views, ViewGroups, and layout managers in Xamarin.Android, including Linear, Relative, Table, Frame, and Grid layouts, with examples."
  metaKeywords: null
---

# Views and ViewGroups

Everything that you see in an Android app is a View; buttons, labels, text boxes, and radio buttons are all examples of Views. Views are organized in a hierarchy using various types of ViewGroups. A ViewGroup is a special kind of View which is used to arrange (layout) other Views on the screen.

## User Interface Widgets

Android provides a comprehensive set of user interface widgets that can be used to build a rich user experience. All of these widgets are subtypes of View and can be organized into sophisticated layouts using various types of ViewGroups. All of the user interface widgets can be found in the android.widget package within the Application Framework.

Some of the common UI widgets includes;

-   TextView
-   EditText
-   Radio Buttons and Radio button group
-   CheckBox
-   Adapter views such as [List View](/articles/listview-example-in-xamarin-android), GridView
-   [WebView](/articles/xamarin-android-webview-tutorial)
-   Spinners, etc.

# Declarative Versus Programmatic View Creation

Views and ViewGroups can be created using two different methods, programmatically or declaratively. When using a programmatic approach, a developer makes API calls to create and position each individual View on screen. When using a declarative approach, a developer creates XML layout files that specify how Views should be arranged. Visual layout designer embedded to Xamarin Studio and Visual Studio IDE provides extensive support for creating the layout using drag and drop approach. In case of XML declaration, you need to remember each element and property to control the view/layout behavior.

The declarative method enjoys several advantages stated as follows:

-   Provides better separation of the visual design of an application from the processing logic
-   Allows multiple layouts to be created to support multiple devices or device configurations with a single code base
-   Development tools, such as Android Studio, Android plugin for Eclipse and Xamarin Studio Android designer, allow you to view the user interface as you build it, without needing to compile and execute your application after each change

While most developers prefer the declarative method of view creation, in practice, some combination of programmatic and declarative methods are often required.

# Xamarin Android Layout Managers

Xamarin.Android offers a collection of view group classes that acts as container for views. These containers are refereed as layout managers. Each of the layout managers can contain one more child views and provides a specific strategy to manage the size and position of its children. For example, the Linear Layout class places its children either horizontally or vertically, one view adjacent to the other.

Following table lists the different types of layout managers available in Xamarin android.

| Layout Manager | Description |
| --- | --- |
| Linear Layout | Position its child views either horizontally or vertically |
| Relative Layout | Position its child view relative to others child or parent. |
| Table Layout | Position its child on tabular form |
| Frame Layout | Allows to change content dynamically |
| Grid Layout | Position child views in a grid format |
| Absolute Layout (Deprecated) | Allows absolute positioning of child. This layout manager is deprecated and strictly not recommended to use for your app. |

All the above layout managers are derived from the View class; therefore all the layout managers can be nested one inside of one another. You can also create a custom layout by extending ViewGroup classes for specific requirements for your project.
