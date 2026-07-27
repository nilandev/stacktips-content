---
id: 274
title: Sencha Touch Sheet And ActionSheet Example
slug: sencha-touch-sheet-and-actionsheet-example
excerpt: Sheet is a floating model panel widget, what animates on top of the view. It is orientation aware; flipping the device causes the sheet to render in landscape mode. Sheet is a generic class for ActionSheet, Picker and MessageBox.
difficulty: beginners
publishedDate: "2013-09-08T07:48:06.000Z"
updatedDate: "2025-09-16T23:05:33.990Z"
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

[![Sencha Sheet in class diagram](/media/articles/361/Sencha-Sheet-in-class-diagram.png)](http://stacktips.com)

## Sencha Touch Sheet Example

```javascript
// Creating a Sheet Instance using Ext.Sheet Class constructor
var sheet = new Ext.Sheet({
		height  : 70,
		stretchX: true,
		stretchY: true,
		layout: { type: 'hbox', align: 'stretch'},
		items: [{html: "<img src='quote.png'>"}],
	dockedItems: [{
            dock : 'right',
            xtype: 'button',
            text : 'Close',
            iconCls : 'delete',
		iconMask : true,
            handler: function () {
	sheet.hide();             
            }
        }]
});
```

Here is the output of the above code.  
[![Sencha Sheet in action](/media/articles/361/Sheet-in-action.png)](http://stacktips.com)

## Sencha Touch ActionSheet Example

ActionSheet is a floating panel docked at the bottom of the screen, consists of stack of command buttons. ActionSheet is the way to allow user to choose one of the available buttons. It also has a title for providing a hint along with the Command buttons.

```javascript
// Creating a ActionSheet Instance using Ext.ActionSheet Class constructor
var actions = new Ext.ActionSheet({
		items: [{
			text: 'Option 1',
			scope : this,
			handler : function(){
				actions.hide();
				}
             },{
	text : 'Option 2',
	scope : this,
	handler : function(){
		actions.hide();
                    }
             },{
	text : 'Cancel',
	scope : this,
	handler : function(){
		actions.hide();
		}
             }]
 });
```

Here is the output of the above code  
[![Sencha ActionSheet Example](/media/articles/361/ActionSheet-in-action.png)](http://stacktips.com)
