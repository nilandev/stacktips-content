---
id: 236
title: Basic Structure of an HTML Document
slug: basic-structure-of-an-html-document
excerpt: Here in this section of tutorial we will see the essential parts of a well-structured HTML document. A well-structured HTML document will have below three sections.
difficulty: beginners
publishedDate: "2014-05-15T08:28:38.000Z"
updatedDate: "2025-09-16T23:05:31.823Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/307/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Here in this section of tutorial we will see the essential parts of a well-structured HTML document. A well-structured HTML document will have below three sections.

1.  A head that identifies a document as HTML and establishes its title.
2.  A body that contains the content for a Web page. This part holds all displayed text on a page, as well as most links to graphics, multimedia, locations inside the same file, and to other Web documents.
3.  A footer that labels a page by identifying its author, date of creation, and version number, etc.

## Introduction to basic HTML element

HTML file optionally can start with an `<!DOCTYPE>` declaration. It is highly recommended to add this element to make user understand the version of html your webpage is using. `<!DOCTYPE>` is not an html tag. `<!DOCTYPE>` doesn’t require and closing tag and also it is not case sensitive.

### <HTML> Element

HTML document starts and ends with an `<HTML>` tag. Once you open an `<HTML>` tag you are expected to close it by calling </HTML> tag.

### <HEAD> Element

1.  This element defines certain information about an HTML document, such as what its title is, who the author is, and reference information about the document, etc.
2.  To create a head element, start with `< HEAD>` tag, then include all of the elements you want in your head section, then end the head element with a `</HEAD>` tag.
3.  If your website is using some scripts or styles of your own or third party library, they are declared in this section.
4.  The titles for a webpage is displayed are displayed by browsers on the top of the page, usually in the title bar (Refer below image). Every HTML document must have a title contained in a `<TITLE>` start tag and a `</TITLE>` end tag.

### <BODY> Element

The real content for any HTML document occurs in the body section, which is enclosed between `<BODY>` and `</BODY>` tags. **Two Categories of Body Elements** There are two basic categories of HTML elements used in the body section:

-   Block-Level Elements
-   Text-Level Elements

#### Block level elements

Block-level elements are used to define groups of text for a specific role. They include tags that position text on the page, begin new paragraphs, set heading levels and create lists. Some commonly used block-level elements and their tags are:

-   Paragraph: < P> and </P>
-   Heading, level one: < H1 > and </H1 >
-   Heading, level two: <H2> and </H2>
-   Horizontal rule: <HR>
-   Centering: <CENTER>

#### Text level Elements

Text-level elements are for markup bits of text, including creating links, inserting things like images or sounds, and changing the appearance of text. Some commonly used text-level elements are:

-   Bold: <B> and </B>
-   Italic: <I> and </I>
-   Line-break: < BR>
-   Link anchor: <A HREF = “URL”> and </A>
-   Image: <IMG SRC = “URL”>

## HTML Footer

Technically speaking, HTML does not include a separate tag to denote a page footer. But it is recommended because a good footer helps to identify a document’s vintage and contents and let interested readers contact the author if they spot errors or want to provide feedback.

<HTML>
   <HEAD>
      <TITLE> Javatechig | Resources for Developers. </TITLE>
   </HEAD>
   <BODY>
      <H1>
         Welcome to Javatechig!
      </H1>
      <H2> Fabulous development tutorials </H2>
      Our website, <A HREF = ''http://javetechig.com/"> stacktips.com</A> provides some of the finest tutorials on <B> Android </B>, <B> Java</B>, <B> Web Technologies (<I>HTML</I>, <I>Sencha Touch</I>, etc.)</B> and related mobile technlogies. 
      <HR>
      <CENTER> Why not visit <A HREF = http://stacktips.com/> stacktips.com </A> </CENTER>
   </BODY>
</HTML>

### Output of the above code

[![structure of an HTML program](/media/articles/307/structure-of-an-HTML-program-620x379.png)](http://stacktips.com)
