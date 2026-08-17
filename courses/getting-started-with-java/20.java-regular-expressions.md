---
id: 407
title: Regular Expressions in Java
slug: java-regular-expressions
excerpt: Learn how to use regular expressions search patterns to match text and do advanced find and replace operations.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.805Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - maven
tags:
  - java-regex-pattern-matcher
  - regular-expressions-java
  - find-replace-regex-java
course: getting-started-with-java
displayOrder: 20
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Regular expressions in Java are a special sequence of characters used to define a search pattern or manipulate strings. Regular expressions are extremely powerful and are used in a wide variety of applications like searching and replacing, finding numerous occurrences of a string, and for validation.

Java offers us the `java.util.regex` package just for regular expressions.

### Matching a Single Character

You can match a single character in a bigger string. To do so, we'll need to use the `Matcher` and `Pattern` classes:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloWorld {
    public static void main(String[] args) {
        String line = "I pledge allegiance to the Flag of the United States of America.";
        String pattern = "F";

        Pattern regex = Pattern.compile(pattern);
        Matcher match = regex.matcher(line);

        if (match.find()) {
            System.out.println(match.group(0));
        } else {
            // no matches found
        }
    }
}
```

```bash
F
```

Our regular pattern was looking for any instance of the character `F`. It found a match in the word `Flag`. Calling `match.group` returned the first instance (and only instance).

### Using Meta Characters

With regular expressions, we aren't limited simply to plain text for our search patterns. We can use **meta character** to enhance our patterns.

Let's use a meta character to match a more complex string:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloWorld {
    public static void main(String[] args) {
        String line = "I pledge allegiance to the Flag of the United States of America.";
        String pattern = "St.tes";

        Pattern regex = Pattern.compile(pattern);
        Matcher match = regex.matcher(line);

        if (match.find()) {
            System.out.println(match.group(0));
        } else {
            // no matches found
        }
    }
}
```

```bash
States
```

In this case, we are searching for any string that starts with `St`, ends with `tes`, with any character in the middle. In this case, the `.` matches any character. Of course, the string `States` fits the bill.

Here are all the meta characters that you can use:

-   `.`: Matches any character
-   `\d`: Matches any digit
-   `\D`: Matches and non-digit
-   `\s`: Matches any whitespace character
-   `\S`: Matches any non-whitespace character
-   `\w`: Matches any alpha character
-   `\W`: Matches any non-alpha character
-   `\b`: Matches a word boundary
-   `\B`: Matches a non word boundary

### Replacing the first occurrence

You can use regular expressions to replace the first occurrence in a string:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloWorld {
    public static void main(String[] args) {
        String line = "I pledge allegiance to the Flag of the United States of America.";
        String pattern = "United States of America";
        String replace = "Canada";

        Pattern regex = Pattern.compile(pattern);
        Matcher match = regex.matcher(line);
        line = match.replaceFirst(replace);

        System.out.println(line);
    }
}
```

```bash
I pledge allegiance to the Flag of the Canada.
```

## Replacing all occurrences

You can use regular expressions to **replace all occurrence** in a string:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloWorld {
    public static void main(String[] args) {
        String line = "I pledge allegiance to the Flag of the United States of America.";
        String pattern = "a";
        String replace = "X";

        Pattern regex = Pattern.compile(pattern);
        Matcher match = regex.matcher(line);
        line = match.replaceAll(replace);

        System.out.println(line);
    }
}
```

```bash
I pledge XllegiXnce to the FlXg of the United StXtes of AmericX.
```

### Finding all occurrences

You can find all occurrences of a string, and the index in which they appear:

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloWorld {
    public static void main(String[] args) {
        String line = "I pledge allegiance to the Flag of the United States of America.";
        String pattern = "of";

        Pattern regex = Pattern.compile(pattern);
        Matcher match = regex.matcher(line);

        while (match.find()) {
            System.out.println("Match found (" + match.group() + ") starting at index " +
match.start() + " and ending at index " + match.end());
        }
    }
}
```

```bash
Match found (of) starting at index 32 and ending at index 34
Match found (of) starting at index 53 and ending at index 55
```

And just like that, we were able to get the starting and ending index of every occurrence of that search pattern in our search string.
