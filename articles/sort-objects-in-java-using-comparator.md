---
id: 148
title: Sort Array Ascending or Descending using Comparator in Java
slug: sort-objects-in-java-using-comparator
excerpt: Quick Java code snippet to sort Array ascending or descending using comparator in Java.
difficulty: beginners
publishedDate: "2015-06-16T22:25:29.000Z"
updatedDate: "2025-09-16T23:05:27.485Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/190/thumbnail.png
topics: 
  - json
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Quick Java code snippet to sort Array ascending or descending using comparator in Java.

```java
import java.util.Arrays;
import java.util.Comparator;

public class SortFruitObject {

    public static void main(String args[]) {
        Fruit pineappale = new Fruit("Pineapple", "Pineapple description", 70);
        Fruit apple = new Fruit("Apple", "Apple description", 100);
        Fruit orange = new Fruit("Orange", "Orange description", 80);
        Fruit banana = new Fruit("Banana", "Banana description", 90);

        Fruit[] fruits = new Fruit[4];
        fruits[0] = pineappale;
        fruits[1] = apple;
        fruits[2] = orange;
        fruits[3] = banana;

        Arrays.sort(fruits, FruitNameComparator);
        System.out.println("Sort by Fruit Name");
        for (Fruit temp : fruits) {
            System.out.println(temp.toString());
        }

        System.out.println("=======================");
        Arrays.sort(fruits, fruitQuantityComparator);
        System.out.println("Sort by Fruit Quantity");
        for (Fruit temp : fruits) {
            System.out.println(temp.toString());
        }
    }

    public static Comparator<Fruit> FruitNameComparator = new Comparator<Fruit>() {
        public int compare(Fruit fruit1, Fruit fruit2) {
            String fruitName1 = fruit1.getFruitName().toUpperCase();
            String fruitName2 = fruit2.getFruitName().toUpperCase();

            // ascending order
            return fruitName1.compareTo(fruitName2);

            // descending order
            // return fruitName2.compareTo(fruitName1);
        }

    };

    public static Comparator<Fruit> fruitQuantityComparator = new Comparator<Fruit>() {
        public int compare(Fruit fruit1, Fruit fruit2) {

            // ascending order
            return fruit2.getQuantity() - fruit1.getQuantity();

            // descending order
            // return fruit1.getQuantity() - fruit2.getQuantity()
        }

    };
}

class Fruit {
    private String fruitName;
    private String fruitDesc;
    private int quantity;

    public Fruit(String fruitName, String fruitDesc, int quantity) {
        super();
        this.fruitName = fruitName;
        this.fruitDesc = fruitDesc;
        this.quantity = quantity;
    }

    public String getFruitName() {
        return fruitName;
    }

    public void setFruitName(String fruitName) {
        this.fruitName = fruitName;
    }

    public String getFruitDesc() {
        return fruitDesc;
    }

    public void setFruitDesc(String fruitDesc) {
        this.fruitDesc = fruitDesc;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Name=" + getFruitName() + ", Quantity=" + getQuantity();
    }
}
```

**Output**  
[![sort Array ascending or descending using comparator in Java.](/media/articles/190/sort-Array-ascending-or-descending-using-comparator-in-Java..png)](http://stacktips.com)
