---
id: 423
title: Java program to Reverse Words in a String
slug: java-program-to-reverse-words-in-a-string
excerpt: "Java program to Reverse Words in a String. Given an input string, reverse the string word by word. For example, given=s \"the sky is blue\", the program should return \"blue is sky the\". Leetcode problem in Java."
difficulty: beginner
publishedDate: "2024-01-23T07:25:24.000Z"
updatedDate: "2025-09-16T23:05:40.627Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/java-program-to-reverse-words-in-a-string.jpeg
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Given an input string, reverse the string word by word. For example, for the given string "the sky is blue", the program should return "blue is sky the".

We first split the string into a word array, and then iterate through the array and add each element of a new string.

**Note:** String Builder should be used to avoid creating too many Strings. If the string is very long, using String is not scalable since String is immutable and too many objects will be created and garbage collected.

```java
public class ReverseWords {

    public static void main(String[] args) {
        String input = "the sky is blue";
        String result = reverseWords(input);
        System.out.println("Original string: " + input);
        System.out.println("Reversed words: " + result);
    }

    private static String reverseWords(String str) {
        if (str == null || str.isEmpty()) {
            return "";
        }

        String[] arr = str.split(" ");
        StringBuilder reversed = new StringBuilder();
        for (int i = arr.length - 1; i >= 0; --i) {
            if (!arr[i].isEmpty()) {
                reversed.append(arr[i]).append(" ");
            }
        }
        return reversed.isEmpty() ? "" : reversed.substring(0, reversed.length() - 1);
    }
}
```

**Output**

Original string: the sky is blue
Reversed words: blue is sky the

### Complexity Analysis:

Time Complexity: O(n + m)
Space Complexity: O(m + n)

#### Time Complexity:

-   The `split()` method splits the input string into an array of words based on the space character `(' ')`. It has a time complexity of `O(n)`, where n is the length of the input string.
-   The subsequent loop that iterates over the array and appends non-empty words to the `StringBuilder` has a time complexity of O(m), where m is the total number of words in the array.
-   Overall, the time complexity of the reverseWords function is **O(n + m)**, where n is the length of the input string and m is the number of words.

#### Space Complexity:

-   The space complexity is determined by the additional space required to store the array of words (arr) and the StringBuilder (reversed). The space required for the array of words is **O(m)**, where m is the number of words in the input string.
-   The space required for the `StringBuilder` is proportional to the length of the reversed string, which can be up to `O(n)`, where n is the length of the input string.
-   Therefore, the overall space complexity is O(m + n), where m is the number of words and n is the length of the input string.
