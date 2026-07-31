---
id: 248
title: Switch-Case statement in Java
slug: switch-case-statement-in-java
excerpt: Switch case is another alternative for if-else statements. Switch case statement compares value in the object in the expression with the expressions associated with each case. A switch works only with primitive types like byte, short, char, and int and enumerated data types
difficulty: beginners
publishedDate: "2014-03-20T01:11:21.000Z"
updatedDate: "2025-09-16T23:05:32.547Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/321/thumbnail.png
topics: 
  - java
tags:
  - java-switch-case-statement
  - switch-case-string-java
  - java-control-flow
  - jdk7-string-switch
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Switch case is another alternative for if-else statements. Switch case statement compares value in the object in the expression with the expressions associated with each case. A switch works only with primitive types like byte, short, char, and int and enumerated data types. But since Java SDK7, it also supports String type.

[![Switch-Case statement in Java](/media/articles/321/Switch-Case-statement-in-Java.png)](http://stacktips.com)

The following code example demonstrates switch case with example. An integer value day is passed as an parameter and the code will display the day of week.

```java

public class StringSwitch {

    public static void main(String[] args) {
        int day = 2;
        String dayOFWeek = "";
        switch (day) {
        case 1:
            dayOFWeek = "MON";
            break;
        case 2:
            dayOFWeek = "TUE";
            break;
        case 3:
            dayOFWeek = "WED";
            break;
        case 4:
            dayOFWeek = "THU";
            break;
        case 5:
            dayOFWeek = "FRI";
            break;
        case 6:
            dayOFWeek = "SAT";
            break;
        case 7:
            dayOFWeek = "SUN";
        default:
        }
        System.out.println(dayOFWeek);
    }
}
```

-   The older version of java supports switch case statement only with primitive types. It doesn’t supports String comparisons using switch case.
-   But since JDK 7 release, you can use a String object in the expression of a switch statement.
-   The switch statement compares the String object in its expression with the expressions associated with each case label as if it were using the String.equals method; consequently, the comparison of String objects in switch statements is case sensitive.
-   Java compiler generates generally more efficient byte code from switch statements that use String objects than from chained if-then-else statements.

The following code example demonstrates switch case with using String comparison example. Note that, you Java to compile with Java 7 and above.

```java

public class StringSwitch {
    public static void main(String[] args) {
        String key = "TWO";
        switch (key) {
        case "ONE":
            key = "One Selected!";
            break;
        case "TWO":
            key = "Two Selected!";
            break;
        case "THREE":
            key = "Three Selected!";
            break;
        case "FOUR":
            key = "Four Selected!";
            break;
        case "FIVE":
            key = "Five Selected!";
            break;
        case "SIX":
            key = "Six Selected!";
            break;
        default:

        }
        System.out.println(key);

    }
}
```
