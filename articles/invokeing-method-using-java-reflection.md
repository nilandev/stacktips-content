---
id: 211
title: Invoke Method Using Java Reflection
slug: invokeing-method-using-java-reflection
excerpt: Java provides reflection API to do introspection of an object and modify its behavior on the run time. The class Class in the Java API forms the basis to identify the object class and its internal structure of that particular Class. The below three functions are important to get the class behavior. In this articles we will see, how to invoke a method dynamically at runtime.
difficulty: beginners
publishedDate: "2014-07-09T02:46:04.000Z"
updatedDate: "2025-09-16T23:05:30.804Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Java provides reflection API to do introspection of an object and modify its behavior on the run time. The class Class in the Java API forms the basis to identify the object class and its internal structure of that particular Class. The below three functions are important to get the class behavior. In this articles we will see example invoke method using java reflection.

# Example: Invoking method runtime using reflection

In mobile manufacturing company, the company wants to perform the quality check for each functionality of the product before it goes into market. The functionality of the product can be added or removed for each release.

For the above scenario consider a validator class which contains all the methods to check the quality of the product. A product class which contains describes the attributes of the product. Quality check class which is invoked by the client to check the product quality before it is checked. In this approach only validator class needs to change if any criteria will be added in future. The client code need not be changed.

### Product.java

```java
public class Product {

    String productName;
    String category;
    String outgoingCallAbility;
    String ChargingCapability;

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getOutgoingCallAbility() {
        return outgoingCallAbility;
    }

    public void setOutgoingCallAbility(String outgoingCallAbility) {
        this.outgoingCallAbility = outgoingCallAbility;
    }

    public String getChargingCapability() {
        return ChargingCapability;
    }

    public void setChargingCapability(String chargingCapability) {
        ChargingCapability = chargingCapability;
    }

}
```

### ProductValidator.java

```java
public class ProductValidator {

    public boolean checkChargingCapability(Product p)
    {
        if("Y".equalsIgnoreCase(p.getChargingCapability()))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public boolean CheckOutgoingCallAbility(Product p)
    {
        if(p.getOutgoingCallAbility()!=null && p.getOutgoingCallAbility().equalsIgnoreCase("Y"))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
```

### QualityCheckClient.java

```java
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class QualityCheckClient {

    /**
     * @param args
     * @throws ClassNotFoundException
     * @throws IllegalAccessException
     * @throws InstantiationException
     * @throws InvocationTargetException
     * @throws IllegalArgumentException
     */
    public static void main(String[] args) throws ClassNotFoundException,
            InstantiationException, IllegalAccessException,
            IllegalArgumentException, InvocationTargetException {

        String dispatch = "proceed";

        Product p = new Product();
        p.setOutgoingCallAbility("N");
        p.setProductName("Nokia");
        p.setChargingCapability("Y");

        ProductValidator validate = (ProductValidator) Class.forName(
                "reflection.ProductValidator").newInstance();

        Method[] methods = Class.forName("reflection.ProductValidator")
                .getDeclaredMethods();

        for (Method m : methods) {
            boolean test = (Boolean) m.invoke(validate, p);
            if (test) {
                System.out.println("Successfully Executed " + m.getName() + " method");
            } else {
                System.out.println("Execution failed for" + m.getName());
                dispatch = "fail";
                break;
            }
        }

        if ("fail".equalsIgnoreCase(dispatch)) {
            System.out.println("Product cant be proceed for dispatching");
        }
    }

}
```

### Output

```text
Successfully Executed the method-->checkChargingCapability
Execution failed for-->CheckOutgoingCallAbility
Product can’t be proceed for dispatching
```
