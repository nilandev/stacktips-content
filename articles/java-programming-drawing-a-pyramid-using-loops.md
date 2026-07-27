---
id: 239
title: Drawing a pyramid using loops in Java
slug: java-programming-drawing-a-pyramid-using-loops
excerpt: Below example prints star like pyramid structure using loop in java.
difficulty: beginners
publishedDate: "2014-02-17T14:51:34.000Z"
updatedDate: "2025-09-16T23:05:33.111Z"
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

Below example prints star like pyramid structure using loop in java.

```java
 public class Pyramid {
	// void main
	public static void main(String[] args) {
		int depth = 10;
		int s = depth, m;

		for (int i = 1; i < = depth; i++) {
			m = s;
			while (s > 0) {
				System.out.print(" ");
				s--;
			}
			for (int j = 1; j < = i; j++) {
				System.out.print("* ");
			}
			System.out.print("\n");
			s = m - 1;
		}
	}
}
```

Output

          \* 
         \* \* 
        \* \* \* 
       \* \* \* \* 
      \* \* \* \* \* 
     \* \* \* \* \* \* 
    \* \* \* \* \* \* \* 
   \* \* \* \* \* \* \* \* 
  \* \* \* \* \* \* \* \* \* 
 \* \* \* \* \* \* \* \* \* \*
