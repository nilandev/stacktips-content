---
id: 338
title: Normalize all whites paces from string
slug: normalize-white-spaces-from-string
excerpt: Java provides the StringBuffer and String classes, and the String class is used to manipulate character strings that…
difficulty: beginners
publishedDate: "2013-05-02T04:09:00.000Z"
updatedDate: "2025-09-16T23:05:36.811Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java provides the StringBuffer and String classes, and the String class is used to manipulate character strings that cannot be changed. Simply stated, objects of type String are read only and immutable. The StringBuffer class is used to represent characters that can be modified.

The significant performance difference between these two classes is that StringBuffer is faster than String when performing simple concatenations. In String manipulation code, character strings are routinely concatenated. Using the StringBuffer Class we can remove the White spaces from a string.

```java
String normalizeWhitespaces(String s) {
		StringBuffer res = new StringBuffer();
		int prevIndex = 0;
		int currIndex = -1;
		int stringLength = s.length();
		String searchString = " ";
		while ((currIndex = s.indexOf(searchString, currIndex + 1)) >= 0) {
			res.append(s.substring(prevIndex, currIndex + 1));

			while (currIndex < stringLength && s.charAt(currIndex) == ' ') {
				currIndex++;
			}

			prevIndex = currIndex;
		}
		res.append(s.substring(prevIndex));

		return res.toString();
	}
```
