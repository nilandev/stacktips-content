---
id: 190
title: Adapter Design Pattern In Java
slug: adapter-design-pattern-in-java
excerpt: Over the course of this article, we will examine Adapter design pattern in Java. Java Adapter design pattern allows two incompatible classes to work together by converting the interface of one class into an interface expected by the clients.
difficulty: beginners
publishedDate: "2014-10-28T19:07:04.000Z"
updatedDate: "2025-09-16T23:05:29.582Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/251/thumbnail.png
topics: 
  - design-pattern
tags:
  - adapter-design-pattern
  - java-structural-patterns
  - gang-of-four-patterns
course: null
displayOrder: 0
seo: 
  metaTitle: "Adapter Design Pattern in Java: Explained with Example"
  metaDescription: "Understand the Adapter design pattern in Java with real-world analogies and a complete object adapter code example using a bank account use case."
  metaKeywords: null
---

Over the course of this article, we will examine Adapter design pattern in Java. Adapter design pattern belongs to the structural family of pattern, that enables two incompatible interfaces to work together. The Adapter pattern allows two incompatible classes to work together by converting the interface of one class into an interface expected by the clients. This pattern is also known as Wrapper. The definition of Adapter pattern provided in the original Gang of Four book is,

> Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.

In order to understand this pattern, let us have a look into some of the real-time examples of adapter

1.  Suppose you have bought a laptop from India, and in recent past you have just moved to United Kingdom. The electric sockets used in UK is different from the indian electric sockets. And hence, your laptop charger wont work directly. You need to buy an adapter that can charge your indian charger on UK electric socket.
2.  When you have an legacy library interface to be integrated with new system. The new system is not directly accepting the way the legacy library works. As the library is intended to use is not longer on development, we need an adapter to make the two incompatible types to work.

In this pattern,

1.  The Client makes a request to the adapter by calling a method on it using the target interface.
2.  The Adapter translates that request into one or more calls on adaptee using adapter interface.
3.  The client receives the result of the call and never knows there is an adapter doing the translation.

Use the adapter design pattern when,

1.  You want to use the existing class and its interfaces that meet your interface requirements at your end.
2.  You want to create a reusable class that helps to interface between two incompatible classes.

## Adapter Design Pattern Example

Lloyds bank is an international bank offers services worldwide. For offshore account holders, the tax rate is 0.03%. And, in India it offers two types of accounts, Standard and Platinum. Tax rules are not applied to indian bank accounts. Now the offshore bank is incompatible to Indian account types. We need to design an AccountAdapter to make both the incompatible account types to work together.

In the above example, the interaction diagram will be represented as shown below. Here client is just calling the `getBalance()` method of adapter. Adapter calls `getOffshoreBalance()` on adaptee and returns the result that client is expecting. The getBalance() methods inside Adapter will calculate the account balance by deducing the taxes applied for the offshore account.

[![Adapter Design Pattern Sequence Diagram](/media/articles/251/Adapter-Design-Pattern-Sequence-Diagram-620x492.png)](http://stacktips.com)

In this example we are using object adapters. The object adapters uses composition to adapt one incompatible interface to another. The adapter inherits the target interface that the client expects to see, while it holds an instance of adaptee. This enables the client and the adaptee to be completely decoupled from each other. Only the adapter knows about both of them.

[![Adapter Design Pattern Class Diagram](/media/articles/251/Adapter-Design-Pattern-Class-Diagram-620x330.png)](http://stacktips.com)

### OffshoreAccount.java

```java
package com.javatechig.designpattern.adapter;

public class OffshoreAccount {
    private double balance;

    /** The tax for the country where the account is */
    private static final double TAX_RATE = 0.04;

    public OffshoreAccount(final double balance) {
        this.balance = balance;
    }

    public double getTaxRate() {
        return TAX_RATE;
    }

    public double getOffshoreBalance() {
        return balance;
    }

    public void debit(final double debit) {
        if (balance >= debit) {
            balance -= debit;
        }
    }

    public void credit(final double credit) {
        balance += balance;
    }
}
```

### Account.java

```java
package com.javatechig.designpattern.adapter;

public interface Account {
    public double getBalance();
    public boolean isOverdraftAvailable();
    public void credit(final double credit);
}
```

### AbstractAccount.java

```java
package com.javatechig.designpattern.adapter;

public class AbstractAccount implements Account {
    private double balance;
    private boolean isOverdraftAvailable;

    public AbstractAccount(final double size) {
        this.balance = size;
    }

    @Override
    public double getBalance() {
        return balance;
    }

    @Override
    public boolean isOverdraftAvailable() {
        return isOverdraftAvailable;
    }

    public void setOverdraftAvailable(boolean isOverdraftAvailable) {
        this.isOverdraftAvailable = isOverdraftAvailable;
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + " Balance=" + getBalance()
                + " Overdraft:" + isOverdraftAvailable();
    }

    @Override
    public void credit(final double credit) {
        balance += credit;
    }
}
```

### PlatinumAccount.java

```java
public class PlatinumAccount extends AbstractAccount {

    public PlatinumAccount(final double balance) {
        super(balance);
        setOverdraftAvailable(true);
    }
}
```

### StandardAccount.java

```java
public class StandardAccount extends AbstractAccount {

    public StandardAccount(final double balance) {
        super(balance);
        setOverdraftAvailable(false);
    }
}
```

### AccountAdapter.java

```java
public class AccountAdapter extends AbstractAccount {

    // Adaptee - The class we are adapting from
    private OffshoreAccount offshoreAccount;

    /**
     *
     * @param offshoreAccount
     *            the instance of OffshoreAccount we are going to adapt from.
     */
    public AccountAdapter(final OffshoreAccount offshoreAccount) {
        super(offshoreAccount.getOffshoreBalance());

        // holds adaptee reference
        this.offshoreAccount = offshoreAccount;
    }

    /**
     * Calculate offshore account balance after deducting the tax owed for
     * offshore account
     */
    @Override
    public double getBalance() {
        final double taxRate = offshoreAccount.getTaxRate();
        final double grossBalance = offshoreAccount.getOffshoreBalance();

        final double taxableBalance = grossBalance * taxRate;
        final double balanceAfterTax = grossBalance - taxableBalance;
        return balanceAfterTax;
    }
}
```

### Client.java

```java
public class AdapterTest {
    public static void main(String[] args) {

        StandardAccount sa = new StandardAccount(2000);
        System.out.println("Account Balance= " + sa.getBalance());

        //Calling getBalance() on Adapter
        AccountAdapter adapter = new AccountAdapter(new OffshoreAccount(2000));
        System.out.println("Account Balance= " + adapter.getBalance());
    }
}
```
