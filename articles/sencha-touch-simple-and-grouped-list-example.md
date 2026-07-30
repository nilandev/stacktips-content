---
id: 282
title: Sencha Touch Simple and Grouped List Example
slug: sencha-touch-simple-and-grouped-list-example
excerpt: Lists are most flexible and widely used User interface control for mobile applications.Sencha Touch supports various types of lists, including simple, grouped, and nested list.
difficulty: beginners
publishedDate: "2013-09-07T14:07:06.000Z"
updatedDate: "2025-09-16T23:05:34.204Z"
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

Lists are most flexible and widely used User interface control for mobile applications. List is a well suited UI control for mobile application development, as they are well-suited for limited real estate devices. Sencha Touch supports various types of lists, including simple, grouped, and nested list.

List object can be created either from the `Ext.List` class constructor or using “list” xtype. Object of `Ext.XTemplate` can be used for list layout template. List data is bound to a store object (instance of Ext.data.Store).

Store provides flexibility to manipulate the list element, like add, remove or rename, and updates the list in UI. Sencha touch list store elements can be manipulated using the `bindStore()`, `getRecord()`, `getRecords()`, `getSelectedRecords()`, `getSelectedNodes()` and `indexOf()` methods.

## Sencha Touch List Event Handling

List view provides different types of event handling, including `itemtap`, `onItemDisclosure`, `itemSwipe`, `itemdoubleTap` etc.

**onItemDisclosure** is an list configuration property used to handle event for list item. By default it is set to ‘false’. By setting this configuration property to a function, it displays a navigation icon to each of the list row, and triggers the event listener on click.

Sencha touch also provides the extended flexibility to created grouped list with index bar. This can done using the `grouped` and `indexBar` Boolean attributes.

```javascript
//registering model
Ext.regModel('Contact', {
        fields: ['name', 'number']
});

//declaring store which will be used by list
var store = new Ext.data.JsonStore({
    model  : 'Contact',
    sorters: 'name',

//registering model
    getGroupString : function(record) {
        return record.get('name')[0];
},

data: [{,
        {name: 'Robin', number: '+91-9538926202'},
        {name: 'Joy', number: '+91-9538926202'},
        {name: 'Adam',number: '+91-9538926202'},
        {name: 'Shyam', number: '+91-9538926202'},
        {name: 'James', number: '+91-9538926202'},
        {name: 'Jack', number: '+91-9538926202'},
        {name: 'Rajani', number: '+99-9999999999'},
        {name: 'Robin', number: '+91-9538926202'},
        {name: 'Robin', number: '+91-9538926202'},
        {name: 'Adam',number: '+91-9538926202'},
        {name: 'Shyam', number: '+91-9538926202'}]
    });

var list = new Ext.List({
fullscreen: true,
     itemTpl : '<div class="list-item-title">{name}</div>' +
' <div class="list-item-narrative">{number}</div>',
       width : '100%',
       scroll : 'vertical',
    grouped : true,
    indexBar: true,
    store:store,

onItemDisclosure : function(list, record, index){
    alert("Name: "  + list.store.data.items[index].data.name +
    "  Number:  " + list.store.data.items[index].data.number +
    " At Position "  + index);
    },

listeners: {
// Handler for the item tap event
        itemtap: function(list, index, e, event) {
alert("Name: "  + list.store.data.items[index].data.name+
"  Number:  " + list.store.data.items[index].data.number+
" At Position "  + index);
            }
     }
});
```

We can use CSS styling for list template for styling the list component. Create a file style.css and copy the below code, and then save it inside your resources directory. The CSS need to be loaded from the index.html, and then can be used for XTemplate. Below are the stylesheets used in this below code sample

```css
.list-item-title {
float: left;
width: 100%;
font-size: 90%;
white-space: nowrap;
overflow: hidden;
    text-overflow: ellipsis;
}

.list-item-narrative {
float: left;
width: 100%;
color: #666666;
font-size: 70%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
```

Below is the output of different Sencha touch list control.

[![Sencha Touch Simple and Grouped List Example](/media/articles/369/Sencha-Touch-Simple-and-Grouped-List-Example.png)](http://stacktips.com)

Key Points to Remember

1.  While using grouping in sencha list we much specify a method getGroupString on the store to maintain grouping
2.  By default sencha grouping, index bar and item disclosure item is disabled.
