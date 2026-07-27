---
id: 309
title: Convert String to Long in Java
slug: convert-string-to-long-in-java
excerpt: The java.lang.Long class wraps a value of the primitive type long in an object. This class provides several…
difficulty: beginners
publishedDate: "2013-07-29T08:16:35.000Z"
updatedDate: "2025-09-16T23:05:35.744Z"
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

The `java.lang.Long` class wraps a value of the primitive type long in an object. This class provides several methods to convert a long to a String and a String to a long, as well as other utility methods.

```java
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Locale;

public class StringToLong {

	public static void main(String[] args) {

		// converting to long
		String number1 = "543210";
		long result = Long.valueOf(number1);
		System.out.println("Result=" + result);

		// remove all commas and then converting to long
		String bumber2 = "5,43,210";
		long result2 = Long.valueOf(bumber2.replaceAll(",", "").toString());
		System.out.println("Result=" + result2);

		// converting using Locale
		String number3 = "5,43,210";
		NumberFormat format = NumberFormat.getInstance(Locale.US);
		Number number = 0;
		try {
			number = format.parse(number3);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		long result3 = number.longValue();
		System.out.println("Result=" + result3);
	}

}
```

Mixing `NumberFormat` and `Long.parseLong()` isn’t a good idea always. `NumberFormat` can be locale-aware (in your example it uses the default locale for your computer) or you can explicitly specify format patterns, whereas the parseXXX() methods of Number subclasses only read “plain” numbers (optional minus sign+digits).

If you formatted it with `NumberFormat`, you should use `NumberFormat.parse()` to parse it back. However you shouldn’t depend on the default locale, try to specify one instead. Here in my above example, I am using `Locale.US` local.

If you don’t care about the format, consider using Long.toString() to convert a long value into string and `Long.parseLong()` to convert it back. It’s easier to use and works the same everywhere.
