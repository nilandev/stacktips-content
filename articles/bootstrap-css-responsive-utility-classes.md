---
id: 99
title: Bootstrap CSS Responsive Utility Classes
slug: bootstrap-css-responsive-utility-classes
excerpt: Bootstrap provides a number of utility classes that are designed to reduce the effort of repetitive declarations in…
difficulty: beginners
publishedDate: "2016-06-13T09:53:33.000Z"
updatedDate: "2025-09-16T23:05:24.749Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Bootstrap provides a number of utility classes that are designed to reduce the effort of repetitive declarations in CSS and allow quick and easy development.

### Spacing

`margin` or `padding` are assigned to an element or a subset of it’s sides with shorthand classes. Includes supports for individual properties, all properties, vertical and horizontal properties.

### Text alignment

You can easily realign the text to components with text alignment classes.  
For example,

```html
<p class="text-left"> Provide your text here to see the left alignment. </p>
<p class="text-center"> Provide your text here to see the centre alignment. </p>
<p class="text-right"> Provide your text here to see the right alignment. </p>
```

Text Transform: Transform text in components with text capitalization classes such as  
`text-lowercase`, `text-uppercase` and `text-capitalize`.

For Example

```html
<p class="text-lowercase">text in lowercase. </p>
<p class="text-uppercase">text in uppercased. </p>
<p class="text-capitalize">text in capitalized. </p>
```

Contextual colors and backgrounds: Bootstrap provides many different color classes for foreground such as, `.text-primary`, `.text-danger`, `.text-warning`, `.text-info` , `.text-success` and `text-muted`. These can also be applied to links and will darken on hover just like our default link styles.

For Example,

```html
<p class="text-warning"> this text shown as a warning text. </p>
<p class="text-danger"> this test shown as a danger text. </p>
```

Similarly for background you have .bg-primary, .bg-danger, .bg-warning, .bg-info and .bg-success.

For example,  
`<div class="bg-warning">`The background color reflects as warning. </div>  
`<div class="bg-danger">`The background color reflects danger.</div>

### Close icon

Use a generic close icon for dismissing content like modals and alerts. Be sure to include screen reader text when you can as we’ve done with `.sr-only`.

For Example,

```html
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
</button>
```

Float: For horizontal alignment of content, available classes are `.pull-left` and `.pull-right`. Float an element to the left or right with a class !important is included to avoid specificity issues.

For Example,

```html
<div class="pull-left">Float left</div>
<div class="pull-right">Float right</div>

.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
}
```

Center content: Set an element to display: block; and center via margin.

For example,

```html
<div class="center-block">Centered block</div>

// Class
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

Hidden Content: Hide any HTML element with the `[hidden]` attribute. `.hidden` class that forced toggled content.  
For example,

```html
<input type="text" hidden>
```

Furthermore, `.invisible` can be used to toggle the visibility of an element, meaning its display is not modified and the element can still affect the flow of the document.  
For example,

```html
<div class="invisible">...</div>

// Class
.invisible {
  visibility: hidden;
}
```

### Screen readers

Hide an element to all devices other than screen reader with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it is focused.

### Image replacement

Utilize the .text-hide class to help replace an element’s text content with a background image.

```html
<h1 class="text-hide">Hide this heading</h1>
```

### Responsive table

In order to create responsive tables, you should use the `.table-responsive` class. This class only affects the display on devices less than 768px, for larger devices there would be no effect. For creating tables, you would use a standard `<table>` tag; however, along with this we should also use .table class for the element.

For rendering borders around the tables and cells, the class is `.table-bordered`; and for displaying alternate colored rows you should use `.table-striped` class. Similarly, for changing colors of the rows while mouse hovering, you would use the .table-hover class.

### Responsive embeds

Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device. Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.  
For Example,

```html
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```

Aspect ratios can be customised with modifier classes.
