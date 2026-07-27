---
id: 356
title: How to Create and Customize the Floating Action Button in Flutter
slug: creating-floating-action-button-in-flutter
excerpt: The Floating Action Button represents the critical user action on that screen. In this article, we will discuss creating a Floating Action Button and various customization options available in flutter.
difficulty: beginner
publishedDate: "2023-06-18T18:13:40.000Z"
updatedDate: "2025-09-16T23:05:37.689Z"
videoLink: Kb7XLH6KYMI
githubLink: null
featured: false
thumbnail: /media/articles/Copy_of_Building_Multi-Select_GridView_in_Flutter_3.jpg
topics: 
  - flutter
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The Floating Action Button (FAB) represents the critical user action on that screen. This widget looks like a round button floating in the bottom right corner of the screen and hence it is very accessible and within the reach of the users.

### Creating a Floating Action Button

The `FloatingActionButton` widget class in Flutter can be used to create a floating button. The following code shows how to create a simple floating button in Flutter.

```
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        floatingActionButton: FloatingActionButton(
          child: const Icon(Icons.format_size_sharp, color: Colors.white),
          onPressed: () {
            // Do something
          },
        ),
      ),

    );
  }
}
```

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/regular-floating-action-button.png)  

### Customize the Floating Action Button

The `FloatingActionButton` widget has a number of properties that can be used to customize its appearance and behavior. For example, we can use the `backgroundColor` property to set the button background colour and the `onPressed` property to set a callback that is executed when the button is pressed.

```
floatingActionButton: FloatingActionButton(
  tooltip: "Settings",
  backgroundColor: Colors.cyan.shade800,
  foregroundColor: Colors.white,
  elevation: 5,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(18),
  ),
  onPressed: () {
    // Do something here.
  },
  child: const Icon(Icons.format_size_sharp, color: Colors.white),
),
```

### Displaying Icon and label on the floating action button

```
floatingActionButton: FloatingActionButton.extended(
  tooltip: "Settings",
  backgroundColor: Colors.cyan.shade800,
  foregroundColor: Colors.white,
  elevation: 5,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(18),
  ),
  onPressed: () {
    // Do something here.
  },
  icon: const Icon(Icons.format_size_sharp, color: Colors.white),
  label: const Text("Settings"),
),
```

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/floating-action-button-with-label.png)  

### Small Floating Action Button

```
floatingActionButton: FloatingActionButton.small(
  tooltip: "Settings",
  backgroundColor: Colors.cyan.shade800,
  foregroundColor: Colors.white,
  elevation: 5,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(18),
  ),
  onPressed: () {
    // Do something here.
  },
  child: const Icon(Icons.format_size_sharp, color: Colors.white),
),
```

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/small-floating-action-button.png)

### Large Floating Action Button

```
floatingActionButton: FloatingActionButton.large(
  tooltip: "Settings",
  backgroundColor: Colors.cyan.shade800,
  foregroundColor: Colors.white,
  elevation: 5,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(18),
  ),
  onPressed: () {
    // Do something here.
  },
  child: const Icon(Icons.format_size_sharp, color: Colors.white),
),
```

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/large-floating-action-button.png)
