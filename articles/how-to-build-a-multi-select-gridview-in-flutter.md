---
id: 355
title: How to Build a Multi-Select GridView Layout in Flutter - A Step-by-Step Guide
slug: how-to-build-a-multi-select-gridview-in-flutter
excerpt: This article will walk you through the process of creating a multi-select grid view in Flutter. In this example, we will create a page that displays a list of products in a two-column layout and allows users to select or deselect items.
difficulty: intermediate
publishedDate: "2023-06-10T22:50:39.000Z"
updatedDate: "2025-09-16T23:05:37.614Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/How_to_Build_a_Multi-Select_GridView_Layout_in_Flutter.jpeg
topics: 
  - flutter
tags:
  - flutter-gridview
  - multi-select-gridview
  - flutter-gridview-builder
  - flutter-futurebuilder
course: null
displayOrder: 0
seo: 
  metaTitle: "Build a Multi-Select GridView Layout in Flutter"
  metaDescription: "Step-by-step guide to building a multi-select GridView in Flutter, fetching products from a REST API and toggling item selection with GestureDetector."
  metaKeywords: null
---

This article will walk you through the process of creating a multi-select grid view in Flutter. In this example, we will create a page that displays a list of products in a two-column layout and allows users to select or deselect items. The HTTP package will be used to retrieve the product list from the Restful API.

The list of products will be fetched from `https://fakestoreapi.com/products/category/electronics` API and here is how the JSON response is returned:

```json
[
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers ",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": "Easy upgrade for faster boot-up, shutdown...",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    }
]
```

## Step 1: Setting up the Project

Let’s get started! First, create a new Flutter project and add the following dependencies to the `pubspec.yaml` file

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.5
```

Note that, we have added the `http: ^0.13.5` dependency to the `pubspec.yaml` file. This package will be used to make HTTP API calls.

## Step 2: Defining the Model Classes

We need to create two models for this example. One to hold the product details returned from the API and the other to hold the selected state.

Here is what the `Product` model class looks like:

```dart
class Product {
  final int id;
  final String title;
  final num price;
  final String category;
  final String description;
  final String image;

  Product(
      {required this.id,
      required this.title,
      required this.price,
      required this.category,
      required this.description,
      required this.image});

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      title: json['title'],
      price: json['price'],
      category: json['category'],
      description: json['description'],
      image: json['image'],
    );
  }
}
```

The `fromJson()` function is a factory constructor that takes a JSON object and returns an object of the specified type. It is used to deserialise product JSON into a `Product` model object.

Now, let us create another model `MultiSelectItem` to represent a selectable item in a multi-select list. It has two properties: `value` and `selected`. The value property is the value of the item, and the selected property is a boolean value that indicates whether the item is selected.

```dart
class MultiSelectItem<T> {
  final T value;
  bool selected = false;

  MultiSelectItem(this.value);

}
```

## Step 3: Fetching Products from the API

Now that we have the models defined, let us now focus on fetching API data. For that, we have created a `ProductRepository` class that fetches products from a fake store API. It uses the `http` package to make a GET request to the API endpoint.

The response is then parsed into a list of `Product` objects using the `fromJson` factory constructor.

```dart
import 'package:http/http.dart' as http;

class ProductRepository {

  Future<List<Product>> fetchProducts() async {
    final response = await http.get(Uri.parse("https://fakestoreapi.com/products/category/electronics"));

    if (response.statusCode == 200) {
      final jsonList = json.decode(response.body) as List<dynamic>;
      List<Product> products = jsonList.map((json) => Product.fromJson(json)).toList();
      return products;
    } else {
      throw Exception('Failed to fetch products');
    }
  }
}
```

## Step 4: Building the Product Grid Page

The `ProductsPage` class is a stateful widget that represents the product grid page. It has an `AppBar` and a `GridView`.

The FutureBuilder widget displays a loading spinner while waiting for the products to be fetched. If an error occurs, an error message is shown. Otherwise, the grid view is displayed with the fetched products.

```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class ProductsPage extends StatefulWidget {
  const ProductsPage({super.key});

  @override
  State<ProductsPage> createState() => ProductsPageState();
}

class ProductsPageState extends State<ProductsPage> {
  List<MultiSelectItem<Product>> listItems = <MultiSelectItem<Product>>[];
  final ProductRepository productRepository = ProductRepository();
  late Future<List<Product>> _product
  get selectedCount => listItems.where((c) => c.selected == true).length;

  @override
  void initState() {
    super.initState();
    _products = productRepository.fetchProducts();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green.shade600,
        title: const Text('Electronics',
            style: TextStyle(
              color: Colors.white,
              fontFamily: "Outfit",
              fontWeight: FontWeight.normal,
            )),
      ),
      body: FutureBuilder<List<Product>>(
        future: _products,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return const Center(child: Text('An error occurred while fetching products list.'));
          } else {
            bool isListInitialized = listItems.isNotEmpty;
            if (!isListInitialized) {
              listItems = snapshot.data!.map((e) => MultiSelectItem(e)).toList();
            }

            return GridView.builder(
              itemCount: listItems.length,
              shrinkWrap: false,
              padding: const EdgeInsets.all(12),
              physics: const ScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                childAspectRatio: (150.0 / 150.0),
                crossAxisSpacing: 8,
                mainAxisSpacing: 8,
              ),
              itemBuilder: (context, index) {
                return GestureDetector(
                  onTap: () {
                    setState(() {
                      listItems[index].selected = !listItems[index].selected;
                    });
                  },
                  child: Container(
                    child: getGridItem(listItems[index], index),
                  ),
                );
              },
            );
          }
        },
      ),
      bottomNavigationBar: SizedBox(
          width: double.infinity,
          child: Container(
            alignment: Alignment.center,
            color: Colors.grey.shade300,
            height: 84,
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 16),
            child: Text("$selectedCount items in cart",
                style: const TextStyle(
                  color: Colors.black87,
                  fontFamily: "Outfit",
                  fontSize: 22,
                  fontWeight: FontWeight.w600,
                )),
          )),
    );
  }
}
```

## Step 6: Displaying Product Cards

Each item in the grid is displayed as a `Card` widget inside a `Container`. The `Container` has a colour that changes based on the selected state of the item. The `ListTile` widget inside the `Container` displays the product title and an icon indicating whether the product is selected or not.

```dart
Widget getGridItem(MultiSelectItem item, int index) {
    Product product = item.value;
    Color textColor = item.selected ? Colors.white : Colors.black87;
    Color bgColor = item.selected ? Colors.green.shade500 : Colors.yellow.shade400;
    Color borderColor = item.selected ? Colors.green.shade800 : Colors.yellow.shade800;
    Icon icon = item.selected
        ? const Icon(Icons.remove_shopping_cart_outlined, color: Colors.white)
        : Icon(Icons.add_shopping_cart_outlined, color: Colors.yellow.shade900);

    return Card(
      elevation: 3,
      shape: RoundedRectangleBorder(
        side: BorderSide(color: borderColor, width: 2),
      ),
      child: Container(
        padding: const EdgeInsets.all(6),
        color: bgColor,
        child: ListTile(
          trailing: icon,
          title: Text(
            product.title,
            maxLines: 6,
            style: TextStyle(
              color: textColor,
              fontFamily: "Outfit",
              fontSize: 18,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
    );
  }
```

That is all! Now we have a fully functional multi-selection grid view in Flutter. Feel free to enhance the page with additional features and customize the UI to match your app's design.
