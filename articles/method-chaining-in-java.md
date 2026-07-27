---
id: 24
title: Java Method Chaining with Example
slug: method-chaining-in-java
excerpt: The term method chaining refers to both a design and a convention. Each method returns an object, allowing…
difficulty: beginners
publishedDate: "2018-09-11T18:17:20.000Z"
updatedDate: "2025-09-16T23:05:20.934Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/21/thumbnail.png
topics: 
  - react
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The term method chaining refers to both a design and a convention. Each method returns an object, allowing the calls to be chained together in a single statement. Chaining is syntactic sugar which eliminates the need for intermediate variables.

A method chain is also known as a train wreck due to the increase in the number of methods that come one after another in the same line that occurs as more methods are chained together even though line breaks are often added between methods.

It applies to classes and methods where:

-   Multiple methods are potentially going to be called on the same object;
-   The methods in question need no return value.

The idea of method chaining is that if the methods need no “useful” return value, then the method can return this

### Method Chaining:

```java
class User {

    private String name;
    private int age;

    // In addition to having the side-effect of setting the attributes in question,
    // the setters return "this" (the current Person object) to allow for further chained method calls.
    public User setName(String name) {
        this.name = name;
        return this;
    }
     
    public User setAge(int age) {
        this.age = age;
        return this;
    }
    
    public void getUserDetails() {
        System.out.println("User name is " + name + " and " + age + " years old.");
    }
    
    public static void main(String[] args) {
         User user= new User(); 
         user.setName("skptricks").setAge(22).getUserDetails();
    }
}
```

**Output :** Username is skptricks and 22 years old.

### Without Method Chaining:

```java
class User {
    
    private String name;
    private int age;

    // In addition to having the side-effect of setting the attributes in question,
    // the setters return "this" (the current Person object) to allow for further chained method calls.
    public User setName(String name) {
        this.name = name;
        return this;
    }
     
    public User setAge(int age) {
        this.age = age;
        return this;
    }
    
    public void getUserDetails() {
        System.out.println("User name is " + name + " and " + age + " years old.");
    }
    
    public static void main(String[] args) {
         User user= new User(); 
         user.setName("skptricks").setAge(22).getUserDetails();
    }
}
```

**Output :** Username is skptricks and 22 years old.

Hope you like this simple example of method chaining. Thank you for reading this article, and if you have any problem, have another better useful solution for this article, please write in the comment section.

_This story was first published at SKPTRICKS. See the original article [Method chaining in Java](<\<a href=>). Opinions expressed by Stacktips contributors are their own._
