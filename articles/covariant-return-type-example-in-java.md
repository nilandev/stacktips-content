---
id: 213
title: Covariant return type example in java
slug: covariant-return-type-example-in-java
excerpt: The covariant return type allows narrowing down return type of the overridden method. This feature will help to avoid down casting on the client side. It allows programmer to program without the need of type checking and down casting. The covariant return type always works only for non-primitive return types.
difficulty: beginners
publishedDate: "2014-07-03T10:41:48.000Z"
updatedDate: "2025-09-16T23:05:30.902Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - covariant-return-type-java
  - method-overriding-java
  - java-clone-method-override
course: null
displayOrder: 0
seo: 
  metaTitle: "Covariant Return Type in Java Explained with Example"
  metaDescription: "Understand how covariant return types in Java let overridden methods return a narrower subclass type, avoiding downcasting, with a clone() example."
  metaKeywords: null
---

In Java 5, we have feature called covariant return type. Prior to Java5, we could not change the return type of the overridden method. It means that if you override the method in the subclass you need to downcast it to the subclass type.

The covariant return type in java, allows narrowing down return type of the overridden method. This feature will help to avoid down casting on the client side. It allows programmer to program without the need of type checking and down casting. The covariant return type always works only for non-primitive return types.

The Clone method will return the object where we need to downcast the Object to the subclass type. After Java5, we can override the clone method to return the object of subclass type.

Consider the scenario, where we have two types of manufacturer Mobile Phone and Washing Machine. Based on the customer requirement if the user wants to purchase Mobile Phone the overridden method will return the Mobile Phone object. Here the method getProductType will return the Mobile Phone object instead of Product object (Mobile Phone implements the Product interface). I.e. returns the object of subclass instead of superclass. Similarly the clone method in the Mobile Phone class will return the object of Mobile Phone instead of object of the class Object. The same rule applies to the Washing Machine class too.

### Product.Java

```java
public interface Product {
    public void makeProduct(String productName, String ProductOwner, int IMEINo);
}
```

### MobilePhone.Java

```java
public class MobilePhone implements Product, Cloneable {

    String _productName;
    String _ownerName;
    int _IMEINo;
    MobilePhone _clonedProduct;

    @Override
    public void makeProduct(String productName, String ownerName, int IMEINo) {
        // TODO Auto-generated method stub
        _productName = productName;
        _ownerName = ownerName;
        _IMEINo = IMEINo;
    }

    protected MobilePhone clone() throws CloneNotSupportedException {
        _clonedProduct = (MobilePhone) super.clone();
        return _clonedProduct;
        // return super.clone();
    }
}
```

### WasingMachine.java

```java
public class WasingMachine implements Product {

    String _productName;
    String _ownerName;
    int _modelNo;

    @Override
    public void makeProduct(String productName, String ownerName, int modelNo) {
        // TODO Auto-generated method stub
        _productName = productName;
        _ownerName = ownerName;
        _modelNo = modelNo;
    }

}
```

### Manufacture.java

```java
public interface Manufacture {

    public Product getProductType();

}
```

### Apple.java

```java
public class Apple implements Manufacture {

    @Override
    public MobilePhone getProductType() {
        // TODO Auto-generated method stub
        return new MobilePhone();
    }

}
```

### Samsung.java

```java
public class Samsung implements Manufacture {

    @Override
    public WasingMachine getProductType() {
        // TODO Auto-generated method stub
        return new WasingMachine();
    }

}
```

### ManufactureImpl.java

```java
public class ManufactureImpl {

    /**
     * @param args
     * @throws CloneNotSupportedException
     */
    public static void main(String[] args) throws CloneNotSupportedException {
        // TODO Auto-generated method stub

        Apple s1 = new Apple();
        MobilePhone b1 = s1.getProductType();
        b1.makeProduct("Iphone5S", "XXXX", 1234);
        MobilePhone b2 = b1.clone();
        b2._IMEINo = 6789;
        System.out.println("IMEI Number Of Phone1->" + b1._IMEINo);
        System.out.println("IMEI Number Of Phone2->" + b2._IMEINo);
        Samsung f1=new Samsung();
        WasingMachine c1=f1.getProductType();
        c1.makeProduct("samsungWashingMachine","XYZ", 2014);
        System.out.println("Owner Name Of WasingMachine->" + c1._ownerName);
    }

}
```
