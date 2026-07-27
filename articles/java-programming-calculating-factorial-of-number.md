---
id: 226
title: Calculating factorial of number in Java
slug: java-programming-calculating-factorial-of-number
excerpt: This example below accepts number from user and calculates factorial using while loop and prints it.
difficulty: beginners
publishedDate: "2014-02-17T14:59:49.000Z"
updatedDate: "2025-09-16T23:05:33.043Z"
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

This example below accepts number from user and calculates factorial using while loop and prints it.

```java
import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		int number;
                int factorial = 1;

		Scanner input = new Scanner(System.in);

		//accept input from user
		System.out.println("Enter A Number :");
		number = input.nextInt();

		int i = 1;

		// while loops
		while (i <= number) {
			factorial = factorial * i;
			i++;
		}

		System.out.println("Factorial is = " + factorial);
	}
}
```

### Output

Enter A Number :
6
Factorial is = 720
