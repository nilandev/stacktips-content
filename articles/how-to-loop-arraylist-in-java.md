---
id: 331
title: How To Loop ArrayList In Java
slug: how-to-loop-arraylist-in-java
excerpt: In this tutorial we will see How To Loop ArrayList In Java in different ways. Below example will loop through ArrayList and…
difficulty: beginners
publishedDate: "2013-05-22T20:21:59.000Z"
updatedDate: "2025-09-16T23:05:36.463Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-arraylist-loop
  - java-iterator
  - for-loop-vs-iterator-java
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Loop Through an ArrayList in Java (4 Ways)"
  metaDescription: "Learn four ways to loop through an ArrayList in Java: regular for loop, enhanced for loop, while loop, and Iterator, with a complete code example."
  metaKeywords: null
---

In this tutorial we will see How To Loop ArrayList In Java in different ways. Below example will loop through ArrayList and print its content.

1.  Using regular for loop
2.  Using advance for loop
3.  Using While Loop
4.  Using Iterator

Iterator is an interface in the collection framework. ArrayList is a collection class and implements the List Inteface. All the elements of the ArrayList can be traversed by the Iterator. Iterator has methods hasNext() and next()

```java
package com.test;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ArrayListDemo {

    public static void main(String[] args) {

        // adding items to list
        // in real time you might get this data from a db or from other sources
        // We are hard-coding the values here to simplify this example
        List list = new ArrayList();
        list.add(new NewsObject(1001,
                "Soldier beheaded in suspected terror attack in London",
                "en_in"));
        list.add(new NewsObject(1002,
                "Passive smoking can make kids aggressive", "en_in"));
        list.add(new NewsObject(
                1003,
                "Police prepare to question BCCI chief's son-in-law for betting links",
                "en_in"));
        list.add(new NewsObject(1004,
                "Shun body tattoos if you wish to join armed forces", "en_in"));
        list.add(new NewsObject(1005,
                "Man linked to Boston bombings killed by FBI agent", "en_in"));

        System.out.println("#1. Looping using regular for loop");
        for (int i = 0; i < list.size(); i++) {
            NewsObject news = (NewsObject) list.get(i);
            System.out.println(news);
        }

        System.out.println("#2.  Looping using advance for loop");
        for (NewsObject news : list) {
            System.out.println(news);
        }

        System.out.println("#3. Looping using while loop");
        int j = 0; // initilisation
        while (list.size() > j) { // condition checking
            NewsObject news = (NewsObject) list.get(j);
            System.out.println(news);
            j++; // iteration
        }

        System.out.println("#4. Looping using iterator");
        Iterator iterator = (Iterator) list.iterator();
        while (iterator.hasNext()) {
            NewsObject news = (NewsObject) iterator.next();
            System.out.println(news);
        }
    }

}
```

Here in my above example, I am storing NewsObject object in my ArrayList.

```java
public class NewsObject {
    int id;
    String headline;
    String edition;

    NewsObject(int id, String headline, String edition) {
        this.id = id;
        this.headline = headline;
        this.edition = edition;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    @Override
    public String toString() {
        return "NewsObject : " + "Id = " + id + ", Headline=" + headline
                + ", Editon=" + edition;
    }

}
```
