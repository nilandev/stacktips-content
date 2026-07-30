---
id: 276
title: Confirm, Alert and Prompt MessageBox in Sencha Touch
slug: confirm-alert-and-prompt-messagebox-in-sencha-touch
excerpt: MessageBox widget is derived from Ext.Sheet class and allows the alert like functionality, with sencha default styles. MessageBox widget provides alert like functionality, with Sencha theming.
difficulty: beginners
publishedDate: "2013-09-08T07:47:42.000Z"
updatedDate: "2025-09-16T23:05:34.016Z"
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

Sheet is a floating model panel widget, what animates on top of the view. Below image shows the class diagram of `**Ext.Sheet**` class. Sheet is subclass of Panel, which extends the functionality and provides flexibility to developer to add stack of other widgets to it. It is orientation aware; flipping the device causes the sheet to render in landscape mode. Sheet is a generic class for `**ActionSheet**`, `**Picker**` and `**MessageBox**`.

[![Sencha Sheet in class diagram](/media/articles/362/Sencha-Sheet-in-class-diagram.png)](http://stacktips.com)

`MessageBox` widget is derived from Ext.Sheet class and allows the alert like functionality, with sencha default styles. MessageBox widget provides alert like functionality, with Sencha theming. There are three most commonly used MessageBox available in sencha touch, alert, confirm and prompt. Alert is used to display some information with one button. Confirm message allows user to take decision ‘yes’ or ‘no’ to execute set of functionality. And, prompt is used for allow user input data and process the result using a callback function.

Below example shows the usage of different MessageBox in action

```javascript

// For Alert type MessageBox
Ext.Msg.alert('Alert', 'Sencha Touch is Sexy ! Isn\'t it ?', Ext.emptyFn);

// For Confirm type MessageBox
Ext.Msg.prompt('Confirm', 'Please enter your name', function(text) {
     // text represents the user input value
});

// For Alert type MessageBox
Ext.Msg.confirm("Confirmation", "Are you sure you want to exit?", Ext.emptyFn);
```

Below is the output of the above code.  
[![Confirm, Alert and Prompt MessageBox in Sencha Touch](/media/articles/362/Confirm-Alert-and-Prompt-MessageBox-in-Sencha-Touch.png)](http://stacktips.com)
