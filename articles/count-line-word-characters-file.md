---
id: 184
title: Count line word and characters in file
slug: count-line-word-characters-file
excerpt: In this example we’ll see how to count line, word and characters in file. package com.javatechig; import java.io.BufferedReader;…
difficulty: beginners
publishedDate: "2014-09-11T02:43:45.000Z"
updatedDate: "2025-09-16T23:05:30.217Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - how-tos
  - code-snippet
course: null
displayOrder: 0
seo: 
  metaTitle: "Count Lines, Words, and Characters in a File Using Java"
  metaDescription: "A Java example using BufferedReader and LineNumberReader to count the total lines, words, and characters in a text file."
  metaKeywords: null
---

In this example we’ll see how to count line, word and characters in file.

```java
package com.javatechig;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;

public class FileCountExample {

    public static void main(String[] args) {
        File file = new File("file1.txt");

        if (file.exists()) {
            System.out.println("Total Lines=" + getLineCount(file));
            System.out.println("Total Words=" + getWordCount(file));
            System.out.println("Total Characters=" + getCharacterCount(file));
        } else {
            System.out.println("File does not exists!");
        }
    }

    /**
     * Use a BufferedReader to read the file line-by-line using readLine(). Then
     * split each line on whitespace using String.split("\s") and the size of
     * the resulting array is the total words count.
     */
    private static int getWordCount(File file) {
        int count = 0;
        try {
            FileReader fr = new FileReader(file);
            BufferedReader br = new BufferedReader(fr);

            String line = br.readLine();
            while (line != null) {
                String[] parts = line.split(" ");
                for (String w : parts) {
                    count++;
                }
                line = br.readLine();
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return count;

    }

    private static int getCharacterCount(File file) {
        FileReader fr = null;
        int charCount = 0;

        try {
                    fr = new FileReader(file);
            while (fr.read() > -1) {
               charCount++;
               }

        } catch (FileNotFoundException e1) {
            e1.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        finally {
                   if (null != fr)
                    try {
                           fr.close();
            } catch (IOException e) {
                 e.printStackTrace();
             }
        }
        return charCount;
    }

    private static int getLineCount(File file) {
        int linenumber = 0;
        FileReader fr = null;
        try {
            fr = new FileReader(file);

            /**
             * buffered character-input stream that keeps track of line numbers
             */
            LineNumberReader lnr = new LineNumberReader(fr);
            while (lnr.readLine() != null) {
                linenumber++;
            }
            lnr.close();

            return linenumber;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        finally {
            if (null != fr)
               try {
                r.close();
               } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return linenumber;
    }
}
```
