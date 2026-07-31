---
id: 145
title: Linear / Sequential Search Example in Java
slug: linear-or-sequential-search-in-java
excerpt: Quick Java code snippet to show Linear / Sequential Search.
difficulty: beginners
publishedDate: "2015-06-16T22:25:29.000Z"
updatedDate: "2025-09-16T23:05:27.405Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/189/thumbnail.png
topics: 
  - java
tags:
  - linear-search-java
  - sequential-search-algorithm
  - java-array-search-example
  - java-scanner-input
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Quick Java code snippet to show Linear / Sequential Search.

```java
import java.util.Scanner;

public class LinearSearchExample {

    public static void main(String args[]) {
        int i, totalCount, search, inputArray[];

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number of elements");
        totalCount = scanner.nextInt();
        inputArray = new int[totalCount];

        System.out.println("Enter " + totalCount + " integers");

        for (i = 0; i < totalCount; i++) {
            inputArray[i] = scanner.nextInt();
        }

        System.out.println("Enter value to find");
        search = scanner.nextInt();

        for (i = 0; i < totalCount; i++) {
            // Element found
            if (inputArray[i] == search) {
                System.out.println(search + " is present at location "
                        + (i + 1) + ".");
                break;
            }
        }

        // Element not in the input array
        if (i == totalCount) {
            System.out.println(search + " is not present in array.");
        }
    }
}
```

## Output

[![Linear : Sequential Search Example in Java](/media/articles/189/Linear-Sequential-Search-Example-in-Java1.png)](http://stacktips.com)
