---
id: 50
title: Java String Examples
slug: java-string-examples
excerpt: "1. String Length and Trim Code snippet explains the usage of String class length and trim() method. The…"
difficulty: beginners
publishedDate: "2016-09-11T18:31:05.000Z"
updatedDate: "2025-09-16T23:05:22.334Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/71/thumbnail.png
topics: 
  - java
tags:
  - java-string-reverse
  - string-equals-vs-equalsignorecase
  - string-concatenation-java
  - reverse-string-recursion
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

## 1\. String Length and Trim

Code snippet explains the usage of String class length and trim() method.

-   The `length()` method returns the length of this string.
-   The `trim()` method returns a copy of the string, with leading and trailing whitespace omitted.

```java
import java.util.Scanner;

public class StringExampleTwo {
    public static void main(String args[]) {

        Scanner scanner= new Scanner(System.in);
        System.out.println("Enter a string with space");

        String s1 = scanner.nextLine();
        System.out.println("s1 = " + s1);

        // Display String Length
        System.out.println("The length of s1 is: " + s1.length());

        // Removing extra spaces from s1
        String s2 = s1.trim();

        System.out.println("s2 = " + s2);
        System.out.println("The length of s2 is: " + s2.length());
    }

}
```

**Output**

[![String length and trim string in java](/media/articles/71/String-length-and-trim-string-in-java-620x359.png)](http://stacktips.com)

## 2\. String Equality Check

Sample program to test String Equality in Java using equals to () operator and String.equals() method.

```java
public class StringEqualsTest {
    public static void main(String[] args) {
        String str1 = "hello";
        String str2 = str1;
        String str3 = new String("hellp");
        String str4 = new String("hello 2");
        String str5 = "hello";

        System.out.println("Comparison using == : " + (str1 == str5));
        System.out.println("Comparison using == : " + (str1 == str2));
        System.out.println("Comparison Using equals() method : " + str1.equals(str2));
        System.out.println("Comparison using == : " + (str3 == str4));
        System.out.println("Comparison Using equals() method : " + str3.equals(str4));
    }
}
```

**Output**  
[![How to Test String Equality in Java](/media/articles/71/How-to-Test-String-Equality-in-Java.png)](http://stacktips.com)

## 3\. String Concatenation

Sample Java program to concatenate two strings using plus (+) concatenation operator.

```java
public class StringConcatination {
    public static void main(String args[]) {
        String str1 = "Hello";
        String str2 = "JavaTechig";

        // Concatenation
        String str3 = str1.concat(str2);

        System.out.println("str1 = " + str1);
        System.out.println("str2 = " + str2);
        System.out.println("str3 = " + str3);

        String str4 = "Hello";

        // checking equals
        if (str4.equals(str1)) {
            System.out.println("str4 is equal to str1");
        } else {
            System.out.println("str4 is not equal to str1");
        }

    }
}
```

**Output**

[![String Concatenation Test in Java](/media/articles/71/String-Concatenation-Test-in-Java.png)](http://stacktips.com)

## 4\. Change Uppercase to Lowercase

Quick Java code snippet to change the case of a String in Java. It uses `toUpperCase()` and `toLowerCase()` methods present in java.lang.String class to convert the case.

```java
public class StringCase {
    public static void main(String args[]) {
        String str = "This code snippet is brought you by Java Techhig";

        // toUpperCase() method converts the complete string in upper case
        String strUpper = str.toUpperCase();

        // toLowerCase() method converts the complete string in lower case
        String strLower = str.toLowerCase();

        // printing changed case string
        System.out.println("Upper Case: " + strUpper);
        System.out.println("Lower Case: " + strLower);
    }
}
```

**Output**  
[![Change Case of a String in Java](/media/articles/71/Change-Case-of-a-String-in-Java.png)](http://stacktips.com)

## 5\. Reverse String

```java
import java.util.Scanner;

class ReverseString
{
   public static void main(String args[])
   {
      String original, reverse = "";
      Scanner scanner = new Scanner(System.in);

      System.out.println("Enter a string to reverse");
      original = scanner.nextLine();
      int length = original.length();

      for ( int i = length - 1 ; i >= 0 ; i-- ){
         reverse = reverse + original.charAt(i);
      }

      System.out.println("Reverse of entered string is: "+reverse);
   }
}
```

**Output**  
[![Reverse String in java](/media/articles/71/Reverse-String-in-java.png)](http://stacktips.com)

## 6\. Reverse String using Recursion

```java
import java.util.Scanner;

public class StringRecursiveReverse {
    public String reverseString(String str) {
        String reverse = "";
        if (str.length() == 1) {
            return str;
        } else {
            reverse += str.charAt(str.length() - 1) + reverseString(str.substring(0, str.length() - 1));
            return reverse;
        }
    }

    public static void main(String args[]) {
        StringRecursiveReverse srr = new StringRecursiveReverse();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a string to reverse");
        String original = scanner.nextLine();

        System.out.println("Result: " + srr.reverseString(original));
    }
}
```

**Output**  
[![Reverse Java String using recursive method](/media/articles/71/Reverse-Java-String-using-recursive-method.png)](http://stacktips.com)

## 7\. Compare Strings

```java
import java.util.Scanner;

class CompareStrings {
     public static void main(String args[]) {
      String str1, str2;
      Scanner in = new Scanner(System.in);
      System.out.println("Enter the first string");
      str1 = in .nextLine();

      System.out.println("Enter the second string");
      str2 = in .nextLine();

      if (str1.compareTo(str2) > 0){
            System.out.println("First string is greater than second.");
      } else if (str1.compareTo(str2) < 0){
            System.out.println("First string is smaller than second.");
      } else{
            System.out.println("Both strings are equal.");
      }
    }
}
```
