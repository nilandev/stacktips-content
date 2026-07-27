---
id: 44
title: Getting Started with Designable User Interface iOS 9
slug: designable-user-interface-ios-9
excerpt: This tutorial is a starter guide to designing cool User interface for iOS Application. In the recent OS updates Apple adds more accessibility…
difficulty: beginners
publishedDate: "2016-10-14T01:39:52.000Z"
updatedDate: "2025-09-16T23:05:22.210Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/68/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial is a starter guide to designing cool User interface for iOS Application. In the recent OS updates Apple adds more accessibility and API’s for designing Dynamic and Adaptive User Interface in iOS Apps, In this article we are going to cover **Designable User Interface**.

If you’re not familiar with the iOS design practices, Do’s and Don’ts, you can refer it from official [Apple design guidelines](https://developer.apple.com/design/tips/).

## Designable User Interface

Before discussing Designable User Interface, hope you are familiar with Layers. If not, no worries you can find it’s description below:

-   Every view has a backing layer that is used to manage visual content.
-   Layers can also be created independently as stand-alone objects and added as sublayers to other layers in code, much in the same way that you would add subviews.
-   Working with layers, you can manipulate properties of visual content such as a view to set its foreground and, or background colors, create a border and set its thickness, color, and corner radius, that is, the roundedness of the corners.
-   You can add and stylize a drop shadow effect, and you can mask the visual content, which is necessary when setting the corner radius to round the corners.
-   You can adjust a layer’s positioning along the x, y, and z-axes, that is x is horizontal, y is vertical, and z is the front-to-back ordering.
-   Like any other view, you can apply transform or animate layers.

In this tutorial we will take advantage of Layers to create visual content that can be stylized in the storyboard where the changes will be rendered in real time.

### Creating New Project

Let’s begin by creating a new single-view application project by selecting Create a new Xcode Project from the Xcode menu as show below:

![Creating a new Xcode Project](/media/articles/68/Screen-Shot-2016-08-27-at-9.14.20-PM-620x361.png)

Select Single View Application from the iOS Application section and click Next.

Enter “Designable User Interfaces” for the product name.

Enter an organization name and identifier, which is typically your website domain in reverse.

Select “Swift” for the language, “iPhone” for devices, and I won’t need core data or any tests, so I’ll leave those check boxes unchecked.

![Designable User Interface](/media/articles/68/Screen-Shot-2016-09-10-at-4.15.16-PM-620x372.png)

Click Next and save your project in the location of your choice.

### Designing User Interface

We will start with a custom view that fully renders on Interface Builder. We’ll go beyond that and create views that not only render in Interface Builder, but are also designable in Interface Builder. Swift extensions allow you to add new functionality to existing types.

We will take advantage of this, extend the base UIView class and make it designable.

-   From the Menu, select File, New File.

![Create new File](/media/articles/68/Screen-Shot-2016-09-10-at-4.27.40-PM-1-620x388.png)

-   Select Swift File from the iOS Source section and click Next. Enter UIView+Designable for the file name in the Save As: and click Create.

![Selecting Swift File](/media/articles/68/Screen-Shot-2016-09-10-at-4.27.44-PM-620x388.png)

-   The Swift File template by default import foundation framework. We want to extend the class from the UIKit framework, so I’ll change the import foundation to import UIKit. latter, I’ll create an extension on UIView.

![impoting UIKit and writing UIView extension ](/media/articles/68/Screen-Shot-2016-09-10-at-4.37.47-PM-620x388.png)

impoting UIKit and writing UIView extension

Now let us create a series of properties with the `@IBInspectable` attribute. Adding this attribute will make the properties inspectable attributes in Interface Builder. Extensions cannot contain storage properties, but they can contain computed ones.

We’ll now add observers to each property so that it can take some action when the property is set. Every view has a backing CA layer. The CA layer has border width and border color properties.

Let us declare an property and getter/setter methods to expose the layer’s borderWidth property. By marking this property with the `@IBInspectable` attribute, we’re exposing the view’s borderWidth property to Interface Builder.

```c
@IBInspectable
var borderWidth: CGFloat{
	get{
		return layer.borderWidth
	}
	set{
		layer.borderWidth = newValue
	}
}
```

Similarly, let us create two inspectable property to expose the view layer’s border color and corner radius.

```c
@IBInspectable
var borderColor: UIColor? {
	get{
		return layer.borderColor != nil ? UIColor(CGColor: layer.borderColor!): nil
	}
	set{
		layer.borderColor = newValue?.CGColor
	}
}

@IBInspectable
var cornerRadius: CGFloat{
	get{
		return layer.cornerRadius
	}
	set{
		layer.cornerRadius = newValue
		layer.masksToBounds = newValue != 0
	}
}
```

Notice that, The `borderColor` property is made optional. The masksToBounds property is set to true if cornerRadius is not zero.

Let’s do one more. How about a way to mask any view as a circle? Because extensions can only include computed properties, not stored ones. Let us make the makeCircular property optional.

In its setter, I’ll use optional binding with a where constraint to conditionally set the cornerRadius if makeCircular is not nil and is true.

```c
@IBInspectable
var makeCircle: Bool? {
	get{
		return nil
	}
	set{
		if let makeCircle = newValue where makeCircle {
			cornerRadius = min(bounds.width, bounds.height) / 2.0
		}
	}
}
```

We get the minimum of the width and height of the view’s Bounds property because the view may not be a perfect square. So this will make a rectangular shape as circular as possible.

For all this effort, I would not see any changes to these properties in Interface Builder yet. Why? Because UIView itself is not marked with the @IBDesignagble attribute, and you cannot add that attribute in an extension. So I’ll just create a few designable subclasses of UIView to use it. At the top of the file below _import UIKit_ and above _extension_, I’ll add a designable image view, UIImageView subclass, and make it designable. same for `UIButton` and UITextField as show below

```c
@IBDesignable class DesignableImageView: UIImageView {}
@IBDesignable class DesigbanbleButton: UIButton {}
@IBDesignable class DesignableTextField: UITextField {}
```

overall `UIView+Designable.swift` file looks like this

```c
import UIKit
@IBDesignable class DesignableImageView: UIImageView {}
@IBDesignable class DesigbanbleButton: UIButton {}
@IBDesignable class DesignableTextField: UITextField {}

extension UIView {

	@IBInspectable
	var borderWidth: CGFloat{
		get{
			return layer.borderWidth
		}
		set{
			layer.borderWidth = newValue
		}
	}
	
	@IBInspectable
	var borderColor: UIColor? {
		get{
			return layer.borderColor != nil ? UIColor(CGColor: layer.borderColor!): nil
		}
		set{
			layer.borderColor = newValue?.CGColor
		}
	}
	
	@IBInspectable
	var cornerRadius: CGFloat{
		get{
			return layer.cornerRadius
		}
		set{
			layer.cornerRadius = newValue
			layer.masksToBounds = newValue != 0
		}
	}
	
	@IBInspectable
	var makeCircle: Bool? {
		get{
			return nil
		}
		set{
			if let makeCircle = newValue where makeCircle{
			cornerRadius = min(bounds.width, bounds.height) / 2.0
		}
	}
	
}
```

We’ve now just taken a big step towards creating a fully designable user interface by creating inspectable and designable views that will render live in Interface Builder. Now we can lay out a user interface in order to put those custom views to work. Before we customize the design using the Inspectable and Designable Views, we should lay out the basic user interface that we can then customize.

This time we will use the Xcode’s Open Quickly dialogue by pressing the keyboard shortcut _Command + Shift + O_ and type story. That should return the Storyboard as the first search result.

Now let us create some Views by dragging them from the Object Library onto the canvas.  
![Story Board](/media/articles/68/Screen-Shot-2016-09-10-at-5.32.45-PM-620x388.png)

Select the Image View and click the third button from the left in the bottom right hand corner of the Storyboard Editor, the Pin tool. Set the Width and Height to 200 and click Add 2 Constraints. and also change the Background color form the Attribute inspector.  
![setting width and height for imageView](/media/articles/68/Screen-Shot-2016-09-10-at-5.35.54-PM-620x388.png)

Similarly add leading, top, bottom spacing and training constraints for UITextField and UIButton.

Now that we have laid out a UI, now it’s time to use the inspectable and designable views we have created to customize its design. Let us select select the image view and then in the Identity Inspector, set its Class to the DesignableImageView class.  
![Setting DesignableImageView in Attribute Inspector](/media/articles/68/Screen-Shot-2016-09-10-at-5.47.34-PM-620x388.png)

Next, in the Attributes inspector, where you will notice the inspectable properties created in the UIView extension, Let us set set the Border Width to 2, border color to black, and corner radius to 100 as shown in the following screenshot:

![Setting Properties in Attribute inspector](/media/articles/68/Screen-Shot-2016-09-10-at-5.50.35-PM-620x388.png)

Let us do the same thing for Textfield and UIButton. Set there Class to the DesignableTextfield class and DesignableButton class respectively and change the border width to 2, border color to black, and corner radius to 15 for both TextField and Button.

![Settting All Properties in StoryBoard](/media/articles/68/Screen-Shot-2016-09-10-at-5.58.51-PM-620x388.png)

Cheers..! we are done and now you can run the app and see the results in simulator.
