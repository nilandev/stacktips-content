---
id: 395
title: Encapsulation in Java
slug: java-encapsulation
excerpt: Encapsulation is the principle of wrapping data inside an object to protect it from unwanted accesses or manipulation.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.474Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-encapsulation-example
  - getter-setter-methods-java
  - java-private-fields
  - java-oop-principles
course: getting-started-with-java
displayOrder: 10
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Encapsulation is the principle of wrapping data inside an object to protect it from unwanted accesses or manipulation. The point of encapsulating the data inside an object is to ensure that the data inside is properly read and written to.  

Encapsulation is achieved by setting the data inside a class to `private`. This makes the fields inaccessible directly from outside the class. Then we define getter and setter methods whose job it is to ensure data is read and written to in a safe and valid way.

### Getter Methods

Here is an example showing the usefulness of controlling how data is accessed as well using **getter** methods:

```java
public class Length {
    private int millimeters;

    public Length(int millimeters) {
        this.millimeters = millimeters;
    }

    public int getMillimeters() {
        return millimeters;
    }

    public int getCentimeters() {
        return millimeters / 100;
    }

    public int getMeters() {
        return millimeters / 1000;
    }
}
```

Now instead of having to remember conversions, like this:

```java
Length length = new Length(345964);
int centimeters = length.millimeters / 100;

System.out.println(centimeters);
```

You can just write the conversion method once, and call it anytime you want, completely skipping direct access of `millimeters`:

```java
Length length = new Length(345964);
int centimeters = length.getCentimeters();

System.out.println(centimeters);
```

### Setter Methods

Here is an example of encapsulation using a **setter** method:

```java
public class BankAccount {
    private int balance;

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        if (amount < 0) {
            // show error
            return;
        }
        this.balance += amount;
    }
}
```

In this example, our class just has a single field, `balance` that was set to `private`. Now, instead of allowing this:

```java
BankAccount account = new BankAccount();
int depositAmount = 5;

account.balance += depositAmount;
```

Users of this class must use the internal method to manipulate the `balance`:

```java
BankAccount account = new BankAccount();
int depositAmount = 5;

account.deposit(depositAmount);
```

Using setter methods prevents negative amount deposits from happening:

```java
BankAccount account = new BankAccount();
int depositAmount = -5;

account += depositAmount;
```

Because we can have additional checks and improved data integrity by forcing all desired changes to use setter methods. This is ultimately the beauty and point of utilizing encapsulation. You can have more control over your data and ensure that only valid operations are performed with it.
