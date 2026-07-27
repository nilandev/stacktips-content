---
id: 235
title: Unordered and Ordered List Example in HTML
slug: unordered-and-ordered-list-example-in-html
excerpt: List provides methods to layout item or elements sequences in a HTML document. HTML provides unordered, ordered, and definition list types.
difficulty: beginners
publishedDate: "2014-05-16T12:21:10.000Z"
updatedDate: "2025-09-16T23:05:31.745Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/306/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

List provides methods to layout item or elements sequences in a HTML document. HTML provides unordered, ordered, and definition list types.

-   Ordered lists are numbered in some fashion, while unordered lists are bulleted.
-   Definition lists consist of a term followed by its definition.
-   Both ordered and unordered lists require start and end tags as well as the use of a special element to indicate where each list item begins (the <LI> tag).

**<LI> Tag:** List Item <LI> is a singleton tag. It is a child element that is used to create a list item in an ordered list, unordered list, menu list, or directory list.

When an ordered list <OL> is used, the <LI> element will be rendered with a number. One can control that number’s appearance with the <TYPE> Attribute

## <UL> Tag : Unordered List

Similarly, inside an unordered list < UL>, one can control the type of bullet; displayed with <TYPE>. VALUE = number changes the count of ordered lists as they progress.

To create an **unordered list, you can put your content inside <UL> and </UL>** tag. This creates an unordered list with bullets preceding each list item. Unordered lists can be preceded by anyone of several bullet styles; a closed circle, an open circle, or a square.

**Attributes:** Renders the list as compactly as possible by reducing line leading and spacing. TYPE (DISC | SQUARE | CIRCLE)

-   The type of bullet can be suggested with the <TYPE> attribute. The CIRCLE attribute value is used for a hollow bullet, the DISC type creates a solid bullet, and the SQUARE attribute value renders a solid block.
-   The default appearance for a list is with a disc.
-   You can use an optional </LI> end tag at the end of each list item.

The following example generates two separate lists;

```html

<HTML>
   <HEAD>
      <TITLE> Javatechig | List Example </TITLE>
   </HEAD>
   <BODY>
      <H1> Mobile Operating System</h1>
      <UL>
         <LI> Android 
         <LI> Blckberry
         <LI> iPhone
         <LI> Windows Phone
      </UL>
      <H1>Mobile Manufacturers</h1>
      <UL TYPE = "SQUARE">
         <LI> Samsung 
         <LI> HTC 
         <LI TYPE = "DISC"> Micromax 
         <LI TYPE = "CIRCLE"> Apple 
      </UL>
   </BODY>
</HTML>
```

One important aspect of lists is that you can nest one list inside another to create a sub-list. The default appearance of the sub- lists will vary from the main list, with the first sub-list using circle bullets, and the next nested list using squares. For the value “disc” for the value “circle” for the value “square”

### Output of the above code is

[![Unordered List Example](/media/articles/306/Unordered-List-Example-620x332.png)](http://stacktips.com)

## <OL> Ordered List

<OL> tag is used to create ordered lists. Ordered lists are identical in behavior to unordered lists except they use numbers instead of bullets, and you can use an attribute to start numbering at a number other than one.

#### Attribute TYPE: (1 | a | A | i | I )

-   Changes the style of the list.
-   TYPE = “1” (Arabic Numbers)
-   TYPE = “a” (Lowercase alphanumeric)
-   TYPE = “A” (Uppercase alphanumeric)
-   TYPE = “i” (Lowercase Roman numbers)
-   TYPE = .1″ (Uppercase Roman numbers)

### Example

```html

<HTML>
   <HEAD>
      <TITLE> Javatechig | List Example </TITLE>
   </HEAD>
   <BODY>
      <H1> Mobile Operating System</h1>
      <OL>
         <LI> Android 
         <LI> Blckberry
         <LI> iPhone
         <LI> Windows Phone
      </OL>
      <H1>Mobile Manufacturers</h1>
      <OL TYPE = "A">
         <LI> Samsung 
         <LI> HTC 
         <LI> Micromax 
         <LI> Apple 
      </OL>
   </BODY>
</HTML>
```

### Output

[![Ordered List Example](/media/articles/306/Ordered-List-Example-620x330.png)](http://stacktips.com)

Ordered List Example
