---
id: 313
title: Sencha Touch Button Example
slug: sencha-touch-button-example
excerpt: This section of the tutorial explains Sencha Touch Button Example with different styles. Below you will find a live…
difficulty: beginner
publishedDate: "2013-02-18T13:08:15.000Z"
updatedDate: "2025-09-16T23:05:36.931Z"
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

This section of the tutorial explains Sencha Touch Button Example with different styles. Below you will find a live example, which demonstrates the code snippet shared below.

The buttons are styled based on the UI configuration option, determines the UI look and feel of the button. Supported button configuration types are `normal`, `back`, `round`, `action`, `forward`, `decline`, `confirm` and `small`. The `round` and `small`  UIs can also be appended to the other options – for example ‘confirm-small’, ‘action-round’, ‘forward-small’ etc. Defaults to ‘normal’

Here is the basic example of Sencha Touch UI controls.

```javascript
Ext.setup({
	icon : 'icon.png',
	tabletStartupScreen : 'tablet_startup.png',
	phoneStartupScreen : 'phone_startup.png',
	glossOnIcon : false,

	onReady : function() {
		var formBase = new Ext.form.FormPanel({
			fullscreen: true,
			layout: "vbox",			
			items: [
              {
                xtype: "button",
                ui: "normal",
                text: "Normal Button"  
              },
              {
                xtype: "button",
                ui: "back",
                text: "Backward  Button"  
              },{
                xtype: "button",
                ui: "forward",
                text: "Forward  Button"  
              },
              {
                xtype: "button",
                ui: "round",
                text: "Round  Button"  
              },
              {
                xtype: "button",
                ui: "action",
                text: "Action  Button"  
              },              
              {
              	xtype: "button",
                ui: "decline",
                text: "Decline  Button"  
              },
              {
              	xtype: "button",
                ui: "decline-round",
                text: "Decline Round"  
              }
            ]
		});

		Ext.apply(formBase, {
			fullscreen : true,
			autoRender : true,
			hideOnMaskTap : false
		});

		formBase.show();
	}
});
```

Below is how the output of the above code.

Note that, this example will work only on web-kit browser that supports Sencha touch. For best results you may use Google chrome browser or safari.

<iframe src="http://stacktips.com/examples/sencha/buttonexample/index.html"></iframe>

Now, let’s make it responsive. Here we will add some event handler function to the button, which will respond the user click on the button.

```javascript
{
  xtype: "button",
  ui: "decline",
  text: "Decline  Button" ,
  handler: function () {
     	alert("Decline Button Pressed!!");                
  }
}
```

Here, in this above code I am using handler for the button. On user click, it will just show the alert in the screen.

Here is the example for that makes use of Button components both by xtype as well as via their constructors. First create the object Button using Ext.Button Class Constructor and then add declineBtn to formPannel items.

```javascript
var declineBtn = new Ext.Button({
	id: 'sampleBtn',
      ui: "decline",
      text: "Decline  Button" ,
      handler: function () {
        	alert("Decline Button Pressed!!");                
      }
});
```

Sencha touch comes with an array of beautiful icons for almost every need of your app. You can use them using the iconMask and iconCls property. You can find those images inside the resources/picto directory of Sencha downloaded resource.

```json
{
   xtype: "button",
   ui: "decline-round",
   text: "Decline Round",     
   iconCls : 'add',
   iconMask : true
}
```

However, if you’ve made a few apps you’ll realize that not all the icons in the resources folder work in the iconCls.
