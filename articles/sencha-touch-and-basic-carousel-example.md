---
id: 278
title: Sencha Touch and Basic Carousel Example
slug: sencha-touch-and-basic-carousel-example
excerpt: Carousel is a customized Panel, provides the ability to slide back and forth between different child items. It usually adds the items as in card layout and on slide it flips through the items.
difficulty: beginners
publishedDate: "2013-09-08T07:46:47.000Z"
updatedDate: "2025-09-16T23:05:34.069Z"
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

Carousel is a customized Panel, provides the ability to slide back and forth between different child items. It usually adds the items as in card layout and on slide it flips through the items. Carousel can be created using either ways, using Ext.Carousel class constructor or by using `**carousel**` xtype.

Provides an indicator while toggling between items to notify the user to know where they are in the card stack. You can also disable the indicator by setting the **`indicator`**configuration property to false. The **`direction`** configuration property allows user to set the direction of the Carousel. Default is ‘horizontal’.

Below is the example demonstrating the usage of Carousel.

```javascript
Ext.setup({
    icon : 'icon.png',
    tabletStartupScreen : 'tablet_startup.png',
    phoneStartupScreen : 'phone_startup.png',
    glossOnIcon : false,

    onReady : function() {

        var title = new Ext.Toolbar({
             title: 'Carousel Example'
        });

        var actionBar = new Ext.Toolbar({
            id: 'mytoolbar',
            dock: 'bottom',
            ui: 'light',
             items: [{
                xtype: "button",
                ui: "back",
                text: "Previous",
                handler: function(){
    carousel.prev();
    }
              },{
    xtype:'spacer'
              },{
                xtype: "button",
                ui: "forward",
                text: "Next",
                handler: function(){
    carousel.next();
    }
              }]
         });

        var carousel = new Ext.Carousel({
                direction: 'horizontal',
                items: [{
                    title: 'Tab 1',
                    html: 'Carousel Tab 1'
                },{
                    title: 'Tab 2',
                    html: 'Carousel Tab 2'
                },{
                    title: 'Tab 3',
                    html: 'Carousel Tab  3'
                }]
            });

        var formBase = new Ext.Panel({
            layout : 'fit',
            pinHeaders: true,
            id: 'formbase',
            name: 'formBase',
            fullscreen : true,
            items: [carousel],
            dockedItems: [title, actionBar]
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

\[box type=”note” border=”full”\]**Note that, this example will work only on web-kit browser that supports Sencha touch. For best results you may use Google chrome browser or safari.**\[/box\]

### SenchaTouch Carousel Example In Action

<iframe src="http://stacktips.com/examples/sencha/carousel/index.html"></iframe>
