---
id: 283
title: Sencha Touch Picker with Slots Example
slug: sencha-touch-picker-with-slots-example
excerpt: Picker is an overlay panel, slides from the bottom and allows user to choose value from given set. It also allows the swipe gesture input event. Picker can have the slots configuration property used to define the number of sections.
difficulty: beginners
publishedDate: "2013-09-07T13:50:18.000Z"
updatedDate: "2025-09-16T23:05:34.234Z"
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

Picker is an overlay panel, slides from the bottom and allows user to choose value from given set. It also allows the swipe gesture input event. Picker can have the `**slots**` configuration property used to define the number of sections.

Here in the below example we have used two sections. One is for specifying the time in hours and other to define the am/pm. DatePicker is a specialized Picker, derived from **`Ext.Picker`** class, designed to provide user flexibility to select date.

Below example shows the Sencha Touch Picker in action

```javascript
var picker = new Ext.Picker({
	ui: 'light',
	slots: [{
      name : 'hours',
      title: 'Hours',
       data : [
                {text: '01:00', value: 1},
                {text: '02:00', value: 2},
                {text: '03:00', value: 3},
                {text: '04:00', value: 4},
                {text: '05:00', value: 5},
                {text: '06:00', value: 6},
                {text: '07:00', value: 7},
                {text: '08:00', value: 8},
                {text: '09:00', value: 9},
                {text: '10:00', value: 10},
                {text: '11:00', value: 11},
                {text: '12:00', value: 12}
            ]
        },{
            name : 'ampm',
            title: 'AM/PM',
            data : [
                {text: 'AM', value: 'am'},
                {text: 'PM', value: 'pm'}
            ]
        }]
});
```

In the above example, we are creating the instance of the picker widget, using the Ext.Picker class constructor. **`show`** and `**hide**` method is used to display and remove the picker from the view.

Below is the output of the above code.  
[![Sencha Touch Picker with Slots Example](/media/articles/370/Sencha-Touch-Picker-with-Slots-Example.png)](http://stacktips.com)
