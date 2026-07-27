---
id: 279
title: Sencha Touch and Basic Form Control Example
slug: sencha-touch-and-basic-form-control-example
excerpt: The form is a visual container suite that contains all other UI elements like Textfield, Checkbox, Radio Button, etc. Apparently Sencha touch Form is making it easier to use the HTML5 specific functions and field types and attributes.
difficulty: beginners
publishedDate: "2013-09-08T07:46:23.000Z"
updatedDate: "2025-09-16T23:05:34.107Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The form is a visual container suite that contains all other UI elements like Textfield, Checkbox, Radio Button, etc. Apparently Sencha touch Form is making it easier to use the HTML5 specific functions and field types (such as e-mail, web addresses, and date pickers) and attributes (such as placeholder text). Form provides the configuration properties and methods to perform basic functionality and manipulations.

Sencha Touch offers all implement native HTML5 input elements, with the addition of styling. The basic input fields includes like **Text Field, Checkbox, URL, Email, Textarea,  Number Field,  Password and  Radio fields**, etc. Each of these input fields, except the Radio and Checkbox field slides the native keyboard to appear when focused and allow users to enter data into the fields. The Checkbox and Radio field functions similar as the native-web based UI component, except they are stylized via Sencha Touch’s own check icon to mimic iPhone style native application behavior.

In this example, all of the UI controls like Text Field, Email Field, Password Field, check boxes, etc. are grouped in a Fieldset. Fieldset is basically used to group related elements in a form. It draws a box around the related elements added to it. Sencha touch default theme provides the appearance similar as “UITableView” in native iPhone.

Date Picker field and Select fields give your users the ability to choose data from a set.  The Date Picker field implements a Sheet, which is an overlay panel that slides in from the bottom of the screen and allows user to select values.

The Select field, however, will display differently, based on the device. In smartphone devices it will appear as an overlay panel that slides in from the bottom, similar to Date Field. And iOS tablet it displays as the natively displayed dialogue-type of controls for selection. See the below image for the difference appearance of Select widget in a phone and tablet devices, (A) and (B) represents the Select field appearance in smartphone and tablet devices.

[![Sencha Touch Select Field Example](/media/articles/365/Sencha-Touch-Select-Field-Example.png)](http://stacktips.com)

Below example demonstrates the usage of FormPanel. The form panel is added with the form elements like Fieldset, Textfield, Password field, Text Area, Date Picker, Radio Button, and checkbox.

```javascript
Ext.setup({
	icon : 'icon.png',
	tabletStartupScreen : 'tablet_startup.png',
	phoneStartupScreen : 'phone_startup.png',
	glossOnIcon : false,

	onReady : function() {
		var formBase = new Ext.form.FormPanel({
			xtype:'form',
			pinHeaders: true,
			id: 'formbase',
			name: 'formBase',
			fullscreen : true,
			scroll: 'vertical',
			items: [{
				xtype: 'fieldset',
				title: 'Register User',
				instructions: 'Please enter the information below.',

	            items: [{
	                xtype: 'textfield',
	                name: 'name',
	                label: 'Name',
	                placeHolder: 'Enter Name',
	                autoCapitalize : true,
	                required: true,
	                useClearIcon: true
		        }, {
	                xtype: 'passwordfield',
	                name: 'password',
	                label: 'Password',
	                useClearIcon: true
	            }, {
	                xtype: 'emailfield',
	                name: 'email',
	                label: 'E-Mail',
	                placeHolder: 'test@test.com',
	                useClearIcon: true
	}, {
	                xtype: 'urlfield',
	                name: 'url',
	                label: 'URL',
	                placeHolder: 'http://stacktips.com',
	                useClearIcon: true
	},{
	                xtype: 'datepickerfield',
	                name: 'birthday',
	                label: 'D.O.B',
	                picker: { yearFrom: 1970 }
	}, {
	                xtype: 'selectfield',
	                name: 'rank',
	                label: 'Country',
	                options: [{
	                    text: 'India',
	                    value: 'india'
	                }, {
	                    text: 'Japan',
	                    value: 'japan'
	                }]
	},{
	                xtype: 'textareafield',
	                name: 'bio',
	                label: 'About'
	},{
	                xtype: 'checkboxfield',
	                name: 'suscribe',
	                label: 'Suscribe'
	}]
        }, {
            xtype: 'fieldset',
            defaults: {
                xtype: 'radiofield',
                labelWidth: '35%'
            },
            title: 'Select Gender',            
            items: [{
                name: 'gender',
                value: 'Male',
                label: 'Male'
            },{
                name: 'gender',
                label: 'Female',
                value: 'Female'
            }]
        },{
	xtype: 'fieldset',
            items: [{
                xtype: "button",
                ui: "submit",
                text: "Submit"
            }]
        }]
	});

	Ext.apply(formBase, {
		pinHeaders: true,
		fullscreen : true,
		autoRender : true,
		hideOnMaskTap : false		
	});

	formBase.show();
	}
});
```

Here is the output of the above program, displayed in two screens as more number of visual elements is added to screen.  
[![Sencha Touch and Basic Form Control Example](/media/articles/365/Sencha-Touch-and-Basic-Form-Control-Example.png)](http://stacktips.com)

All the elements used in the above program, the form elements are statically added to form. We can also add and manipulate the form elements dynamically using the form methods add, addDocked, remove, removeAll.

Key Points to Remember

1.  A call to this doLayout function is required after adding a new component to an already rendered container, or possibly after changing sizing/position properties of child components. It force container’s layout to be recalculated.
2.  By default, Containers use the AutoContainerLayout scheme which only renders child components, appending them one after the other inside the Container.

Note that, this example will work only on web-kit browser that supports Sencha touch. For best results you may use Google chrome browser or safari.

### SenchaTouch Form Example In Action

<iframe src="http://stacktips.com/examples/sencha/formpannel/index.html"></iframe>
