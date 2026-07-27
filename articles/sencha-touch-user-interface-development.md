---
id: 281
title: Introduction Sencha Touch User Interface Development
slug: sencha-touch-user-interface-development
excerpt: The Sencha Touch UI provides mixture of interactive widgets that can be displayed on screen. Ext.Container is the base class that may contain and manage other Components. It handles the basic behavior of containing items, namely adding, inserting and removing items.
difficulty: beginners
publishedDate: "2013-09-08T05:22:29.000Z"
updatedDate: "2025-09-16T23:05:34.166Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - sencha-touch
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Sencha Touch UI provides mixture of interactive widgets that can be displayed on screen. Below image shows the class diagram of Sencha Touch container sub classes.

`Ext.Container` is the base class that may contain and manage other Components. It handles the basic behavior of containing items, namely adding, inserting and removing items. Child components can be added to Container, by specifying the layout configuration property. We can either specifying child items of a Container using items configuration property or dynamically adding Components to a Container.

By default, Containers use the `AutoContainerLayout` scheme which only renders child components, appending them one after the other inside the Container. An example of these types of widgets is the Toolbar. Valid layout type values are, `auto`, (default), `card`, `fit`, `hbox` and `vbox`.

[![Introduction to Sencha Touch User Interface](/media/articles/367/Introduction-to-Sencha-Touch-User-Interface.png)](http://stacktips.com)

Sencha provides a number of visual components out-of-the-box. Creating instances of these components can be done either by making calls to their constructors or declarative by `"xtype"`. The xtype is a key used for specifying the component class to be constructed. I’ve organized the following table to help us grasp the groups of UI components.

## Basic User Interface Components

\[table tablesorter=”0″ class=”table table-bordered” style=”width: 50%;”\] xtype, UI Component Classes  
button, Ext.Button  
component, Ext.Component  
panel, Ext.Panel  
toolbar, Ext.Toolbar  
spacer, Ext.Spacer  
tabpanel, Ext.TabPanel  
\[/table\]

# Sencha Touch Form Components

\[table tablesorter=”0″ style=”width: 50%;” class=”table table-bordered”\] xtype,UI Form Component Classes  
form,Ext.form.FormPanel  
checkbox,Ext.form.Checkbox  
select,Ext.form.Select  
fieldset,Ext.form.FieldSet  
numberfield,Ext.form.NumberField  
radio,Ext.form.Radio  
textarea,Ext.form.TextArea  
textfield,Ext.form.TextField  
\[/table\]

The scope of this tutorial includes the basic UI components and form components but not all of them. To determine the `“xtype”` to use for a particular class of component, refer the Sencha Touch API Documentation for that class.

**[http://docs.sencha.com/touch/2.0.2/](http://docs.sencha.com/touch/2.0.2/)**

## Sencha Touch UI Design tutorials

1. [Sencha Touch Button Example](http://stacktips.com/sencha-touch/sencha-touch-button-example/ "Sencha Touch Button Example")

2. [Sencha Touch ToolBar example](http://stacktips.com/sencha-touch/sencha-touch-toolbar-example/ "Sencha Touch ToolBar example")

3. [TabPanel example](http://stacktips.com/sencha-touch/sencha-touch-tabpanel-example/ "Sencha Touch TabPanel example")

4. [Basic Carousel Example](http://stacktips.com/sencha-touch/sencha-touch-and-basic-carousel-example/ "Sencha Touch and Basic Carousel Example")

5. [Sencha Touch Basic Form Control Example](http://stacktips.com/sencha-touch/sencha-touch-and-basic-form-control-example/ "Sencha Touch and Basic Form Control Example")

6. [Picker with Slots Example](http://stacktips.com/sencha-touch/sencha-touch-picker-with-slots-example/ "Sencha Touch Picker with Slots Example")

7. [Simple and Grouped List Example](http://stacktips.com/sencha-touch/sencha-touch-simple-and-grouped-list-example/ "Sencha Touch Simple and Grouped List Example")

8. [Sheet And ActionSheet Example](http://stacktips.com/sencha-touch/sencha-touch-sheet-and-actionsheet-example/ "Sencha Touch Sheet And ActionSheet Example")

9. [Confirm, Alert and Prompt MessageBox in Sencha Touch](http://stacktips.com/sencha-touch/confirm-alert-and-prompt-messagebox-in-sencha-touch/ "Confirm, Alert and Prompt MessageBox in Sencha Touch")
