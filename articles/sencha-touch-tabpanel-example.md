---
id: 280
title: Sencha Touch TabPanel example
slug: sencha-touch-tabpanel-example
excerpt: This example will help you to create TabPanel in Sencha touch. TabPanel is another type of container used to automatically set a top-docked or bottom-docked toolbar with automatically generated buttons for every child item.
difficulty: beginners
publishedDate: "2013-09-08T07:46:01.000Z"
updatedDate: "2025-09-16T23:05:34.136Z"
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

This example will help you to create TabPanel in Sencha touch. TabPanel is another type of container used to automatically set a top-docked or bottom-docked toolbar with automatically generated buttons for every child item.

Tapping any of the button flips through items. Items added to TabPanel are known as “cards”. TabPanel can be created using either ways, using `Ext.TabPanel` class constructor or by using `tabpanel` xtype.

Below example shows the usages of Sencha Touch TabPanel

```javascript
Ext.setup({
	icon : 'icon.png',
	tabletStartupScreen : 'tablet_startup.png',
	phoneStartupScreen : 'phone_startup.png',
	glossOnIcon : false,

	onReady : function() {
		var toolbar = new Ext.Toolbar({
			dock : 'top',
			title : 'Toolbar Sample'
		});

		var tabPanel = new Ext.TabPanel({
			dock : 'bottom',
			styleHtmlContent : true,
			tabBar : {
				dock : 'bottom',
				layout : {
					pack : 'center'
				}
			},
			defaults : {
				scroll : 'vertical'
			},
			items : [{
				title : 'Home',
				html : '<h2>Home</h2>',
				iconCls : 'home'
			}, {
				title : 'Settings',
				html : '<h2>Settings</h2>',
				iconCls : 'settings'
			}, {
				title : 'Favourites',
				html : '<h2>Favourit</h2>',
				iconCls : 'favorites',
				badgeText : '2'
			}]
		});

		var panel = new Ext.Panel({
			fullscreen : true,
			dockedItems : [toolbar, tabPanel],
			layout : 'fit',
			scroll : 'vertical'
		});

		Ext.apply(panel, {
			fullscreen : true,
			autoRender : true,
			hideOnMaskTap : false
		});

		panel.show();
	}
});
```

Below is the output of the following program, Figure (A) displays the TabBar docked to bottom and (B) represents the TabBar docked to top. Sencha touch doesn’t display icon for top docked TabBar even it is it is configured with `iconCls` property. The `badgeText` configuration property used to display the notification icon to user, as shown in the image below.

[![Sencha Touch TabPanel example](/media/articles/366/Sencha-Touch-TabPanel-example.png)](http://stacktips.com)

Note that, this example will work only on web-kit browser that supports Sencha touch. For best results you may use Google chrome browser or safari.

### SenchaTouch TabPanel Example In Action

<iframe src="http://stacktips.com/examples/sencha/tabpannel/index.html"></iframe>
