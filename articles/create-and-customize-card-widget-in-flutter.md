---
id: 357
title: How to Create and Customize Card Widget in Flutter
slug: create-and-customize-card-widget-in-flutter
excerpt: This article will explore how to create and customize a CardView in Flutter. In this tutorial, we will dive into the basics of creating a CardView and explore various customization options available in Flutter.
difficulty: beginner
publishedDate: "2023-07-03T20:43:38.000Z"
updatedDate: "2025-09-16T23:05:37.746Z"
videoLink: FfsddfvzH7E
githubLink: null
featured: false
thumbnail: /media/articles/thumbnail.002-small.jpeg
topics: 
  - flutter
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This article will explore how to create and customize a CardView in Flutter. In this tutorial, we will dive into the basics of creating a CardView and explore various customization options available in Flutter.

A `CardView` is a rectangular panel with slightly rounded corners, usually containing the content and the action about a single subject.

To learn more about the CardView UX guidelines and design principles, you can visit the official Google material design 3 website [https://m3.material.io/](https://m3.material.io/).

Now without further delay, let us jump straight into the implementation.

## **Creating a Basic Flutter App**

Let us start by creating a simple Flutter project.

```dart
import 'package:flutter/material.dart';

class CardViewExample extends StatefulWidget {
 const CardViewExample({super.key});

 @override
 State<CardViewExample> createState() {
   return CardViewExampleState();
 }
}

class CardViewExampleState extends State<CardViewExample> {

 @override
 Widget build(BuildContext context) {

   return Scaffold(
       appBar: AppBar(
         backgroundColor: Colors.green.shade600,
         title: const Text('CardView',
             style: TextStyle(
               color: Colors.white,
               fontWeight: FontWeight.normal,
             )),
       ),

       body: const Center(
         child: Text("Hello World!"),
       ));
 }
}
```

In Flutter, a Scaffold is a widget that provides a basic Material Design layout structure. It is a container that can contain other widgets, such as an AppBar, a body, and a floating action button. The Scaffold also provides APIs for showing drawers, snack bars, and bottom sheets.

In the code snippet above the page body contains a Text widget aligned to the centre of page.

## **Creating a CardView**

Let us now add a basic CardView widget.

```dart
body: const Card(
  margin: EdgeInsets.all(20),
  child: Text('Apple iPhone 14 Pro Max, 2021 128 GB',
    style: TextStyle(
      fontSize: 24,
      color: Colors.black87,
      height: 1.3,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

The above code creates a Card widget with a margin of 20 pixels and a Text widget as its child. The text content displays "Apple iPhone 14 Pro Max, 2021 128 GB" with specific visual styles applied, including font size, color, line height, and font weight.

Let us now add another text view ‘subtitle’ to the card.

The CardView in Flutter can contain only one direct child. Hence, If we want to have multiple child views, we need to wrap them inside a Column widget.

```dart
Column(
  mainAxisSize: MainAxisSize.min,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    Text(
      "Apple iPhone 14 Pro Max",
      maxLines: 3,
      style: TextStyle(
        fontSize: 24,
        color: Colors.white,
        height: 1.3,
        fontWeight: FontWeight.bold,
      ),
    ),
    Text(
        'Powerful A14 Bionic chip, 5G capability, and a stunning Super',
        maxLines: 3,
        style: TextStyle(
          fontSize: 20,
          color: Colors.white70,
          height: 1.3,
          fontWeight: FontWeight.w500,
        ))
  ])
```

* * *

The CardView now has two text fields, one for the title and another for the subtitle. However, it still doesn’t look great as there is no inner padding around the CardView and also no padding between the title and subtitle.

## **Apply Padding to CardView Elements**

To add the padding around the CardView, we need to wrap the `Column` widget inside a `Padding` widget.

```dart
Padding(
    padding: EdgeInsets.all(20),
    child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            "Apple iPhone 14 Pro Max",
            maxLines: 3,
            style: TextStyle(
              fontSize: 24,
              color: Colors.white,
              height: 1.3,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Text(
              'Powerful A14 Bionic chip, 5G capability, and a stunning Super Retina XDR display.',
              maxLines: 3,
              style: TextStyle(
                fontSize: 20,
                color: Colors.white70,
                height: 1.3,
                fontWeight: FontWeight.w500,
              ))
        ])
)
```

You may notice another thing in the code snippet above. We have added a `SizedBox` widget between two Text components to allow some space between them.

## **Adding Image to CardView**

Let us use the `FadeInImage` widget to load the image from the URL into the Flutter card widget.

The `FadeInImage` is a Flutter widget that displays an image with a placeholder while the image is loading. Once the image is loaded, the placeholder is faded out and the image is faded in.

This is quite a nice and handy feature for images that take a long time to load.

```dart
FadeInImage(
  fit: BoxFit.cover,
  height: 180,
  width: double.infinity,
  placeholder: AssetImage('assets/images/loading.gif'),
  image: NetworkImage(
      'https://images.unsplash.com/photo-1556656793-08538906a9f8'),
),
```

## **Styling Card Widget in Flutter**

The Card widget in Flutter provides a number of customizations out of the box. Here are some of the properties that allow different customization options

-   **elevation:** This property controls the amount of shadow that is cast by the card. The higher the elevation, the darker the shadow will be.

-   **shape:** This property determines the shape of the card. The default shape is a rounded rectangle, but you can also use a square, circle, or other shape.

-   **color:** This property sets the background color of the card.

-   **border:** This property allows you to add a border to the card. You can specify the color, width, and style of the border.

-   **clipBehavior:** This property controls how the card is clipped when it is overflowed by its content. The default `clipBehavior` is Clip.antiAlias, which means that the card will be clipped smoothly. You can also use Clip.hardEdge to clip the card with a sharp edge.

-   **child:** This property is used to set the child widget that will be displayed inside the card.

Here is an example of how to customize a Card widget in Flutter:

```dart
import 'package:flutter/material.dart';

class CardViewExample extends StatefulWidget {
  const CardViewExample({super.key});

  @override
  State<CardViewExample> createState() {
    return CardViewExampleState();
  }
}

class CardViewExampleState extends State<CardViewExample> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.green.shade600,
          title: const Text('CardView',
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.normal,
              )),
        ),
        body: Card(
            elevation: 30,
            margin: const EdgeInsets.all(20),
            color: Colors.green.shade600,
            shape: RoundedRectangleBorder(
              borderRadius: const BorderRadius.all(Radius.circular(30)),
              side: BorderSide(color: Colors.yellow.shade800, width: 2)
            ),
            clipBehavior: Clip.antiAlias,
            child: const Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  FadeInImage(
                    fit: BoxFit.cover,
                    height: 180,
                    width: double.infinity,
                    placeholder: AssetImage('assets/images/loading.gif'),
                    image: NetworkImage(
                        'https://images.unsplash.com/photo-1556656793-08538906a9f8'),
                  ),
                  Padding(
                      padding: EdgeInsets.all(20),
                      child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Text(
                              "Apple iPhone 14 Pro Max",
                              maxLines: 3,
                              style: TextStyle(
                                fontSize: 24,
                                color: Colors.white,
                                height: 1.3,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                                'Powerful A14 Bionic chip, 5G capability, and a stunning Super Retina XDR display.',
                                maxLines: 3,
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.white70,
                                  height: 1.3,
                                  fontWeight: FontWeight.w500,
                                ))
                          ]))
                ])));
  }
}
```
