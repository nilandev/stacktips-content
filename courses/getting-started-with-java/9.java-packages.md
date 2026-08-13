---
id: 403
title: Working with Packages in Java
slug: java-packages
excerpt: Packages are the namespace conventions that Java follows to avoid naming collisions and organize files.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.692Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-package-keyword
  - java-import-statement
  - java-namespace-organization
course: getting-started-with-java
displayOrder: 9
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java packages are used to organize our code and to avoid naming conflicts. Packages strongly resemble folders like the ones found in file directory. Every package has a unique name so that class names can still be duplicated and still be used properly if you import it from the right package. There are two kinds of packages, the built-in ones and the ones you can create yourself.

### Creating a Package

Create a package using the `package` keyword, and then the name of the package. Ensure that this is the top of the file.

```java
package devices;

public class Phone {
    private String name;

    public Phone(String name) {
        this.name = name;
    }

    public int getName() {
        return name;
    }
}
```

This class now lives inside the `devices` package.

### Importing Package

You can import a class of your choosing by using the `import` keyword and specifying the exact package and class name:

```java
import java.lang.Math;
```

That, for example, imports the `Math` class only. This makes everything from `Math` available in whatever class you imported it into.

If you find yourself using multiple classes from the same package, you can just import an entire package to get all the classes inside available:

```java
import java.lang.*;
```

This imports all the classes inside the `java.lang` package.
