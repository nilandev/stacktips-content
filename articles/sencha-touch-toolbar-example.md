---
id: 277
title: Sencha Touch ToolBar example
slug: sencha-touch-toolbar-example
excerpt: This example will help you to create ToolBar in Sencha touch. ToolBar is an special kind of pannel that is docked to the either side of the screen. The most commonly used panels are Panel, TabPanel, Toolbar and FormPanel.
difficulty: beginners
publishedDate: "2013-09-08T07:47:09.000Z"
updatedDate: "2025-09-16T23:05:34.042Z"
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

This example will help you to create ToolBar in Sencha touch. ToolBar is an special kind of pannel that is docked to the either side of the screen.  The most commonly used panels are Panel, TabPanel, Toolbar and FormPanel. 

Panel provides the highest level of configuration and flexibility features. Panel provides ability to add items to either side, and they are called dock.  We can create toolbar by calling the constructor of `Ext.Toolbar` class or by using xtype `toolbar`. Toolbar also provides the flexibility to contain the buttons, while docked to a container.

[![Sencha Touch ToolBar example](/media/articles/363/Sencha-Touch-ToolBar-example.png)](http://stacktips.com)

Below example shows the usages of toolbar and docked items.

```javascript
Ext.setup({
    icon : 'icon.png',
    tabletStartupScreen : 'tablet_startup.png',
    phoneStartupScreen : 'phone_startup.png',
    glossOnIcon : false,

    onReady : function() {
        var panel = new Ext.Panel({
            fullscreen : true,
            html : "Example demonstrates the usage of Sencha Touch Ext.Toolbar class",
            dockedItems : [{
                xtype : 'toolbar',
                dock : 'top',
                title : 'Docked Top',
                items : [{
                    text : 'Back',
                    iconCls : 'arrow_left',
                    iconMask : true
                }, {
                    xtype : 'spacer'
                }, {
                    text : 'Home',
                    iconCls : 'home',
                    iconMask : true
                }]
            }, {
                xtype : 'toolbar',
                dock : 'bottom',
                ui : 'light',
                title : 'Docked Bottom',
                items : [{
                    text : 'Exit',
                    ui : "decline"
                }]
            }]
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

\[box type=”note” border=”full”\]Note that, this example will work only on web-kit browser that supports Sencha touch. For best results you may use Google chrome browser or safari.\[/box\] Below is how the output of the above code.

<iframe src="http://stacktips.com/examples/sencha/toolbar/index.html"></iframe>

The above example is using xtype to crate the toolbar, and both toolbar’s are docked to the top and bottom of the Panel. The `dockedItems` configuration option is used to specify one or more components to be added as docked items to the panel. Components can be docked to the top, right, bottom or left of the panel.

We can also create the toolbar objects using the `Ext.Toolbar` class constructor. Below is the code sample to crate the Toolbar using Ext.Toolbar class.

```javascript
var toolBar = new Ext.Toolbar({
            id: 'mytoolbar',
            ui: 'light',
            title: 'Docked Bottom',
             items: [{
                text: 'Exit',
                ui: "decline"
            }]
 });
```

`Ext.Panel` also provides the high end flexibility to manipulate docked items using a number of functions. We can use the `addDocked()` and `removeDocked()` functions to add or remove docked items, and onDockedAdd() or onDockedRemove() to perform actions upon addition or removal of docked items. The `getDockedItems()` method returns an array of the currently docked components.

The above example uses the “items” configuration option to add the items to Panel. However, we can also use add(), `insert()` and `delete()` methods available in `Ext.Panel` class to manipulate the Panel items.
