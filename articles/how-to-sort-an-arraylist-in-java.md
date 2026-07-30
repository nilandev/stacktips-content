---
id: 330
title: How to sort an ArrayList in java
slug: how-to-sort-an-arraylist-in-java
excerpt: ArrayList are also called as dynamic arrays that can grow as needed. In Java ArrayList class extends AbstractList…
difficulty: beginners
publishedDate: "2013-05-24T06:20:13.000Z"
updatedDate: "2025-09-16T23:05:36.433Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

ArrayList are also called as dynamic arrays that can grow as needed. In Java ArrayList class extends AbstractList and implements List interface. In Java ArrayList’s are created with an initial size. The size of the collection is changes dynamically as the items are exceeded the size or deleted. This example will explain sorting of ArrayList using `Comparator`, `Comparable` and `Collectiolns.sort()` method.

\[box style=”1″\]Note: Typically standard Array in java is fixed sized in nature. Once created, they cannot grow or shrink, which means that you must know in advance how many elements an array will hold.\[/box\]

At times, you may need to sort the ArrayList to make it alphabetically order. In this below example, it shows the use of Collections.sort and comparator to sort an ArrayList.

# 1\. Sorting using Collections.sort method:

```java
public class SortArrayList {

    public static void main(String[] args) {
        ArrayList unsortList = new ArrayList();
        unsortList.add("1011");
        unsortList.add("5460");
        unsortList.add("1000");
        unsortList.add("Abdul");
        unsortList.add("1012");
        unsortList.add("Adam");

        System.out.println("********** Value before sorting **************");
        for (String str : unsortList) {
            System.out.println(str);
        }

        Collections.sort(unsortList);

        System.out.println("********** Value after sorting **************");
        for (String str : unsortList) {
            System.out.println(str);
        }

    }
}
```

Here in this above example the sorting happens according to ASCII.

##### Output:

[![sorting-array-list-using-collections.sort](/media/articles/424/sorting-array-list-using-collections.sort_.png)](http://stacktips.com)

# 2\. Sorting objects in an ArrayList using Comparable interface

In my example I want to sort the employees list as per their salary in descending order. My Employee class implements Comparable interface and overridden compareTo method. In Compare to method add your logic, weather to sort ascending or descending order.

```java
public class Employee implements Comparable {
    private String name;
    private String id;
    private double salary;

    public Employee(String id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public int compareTo(Employee employee) {
        double compareSalary = ((Employee) employee).getSalary();

        // ascending order
        // return (int) (this.salary - compareSalary);

        // descending order
        return (int) (compareSalary - this.salary);
    }

    @Override
    public String toString() {
        return "[ id=" + id + ", name=" + name + ", salary=" + salary + "]";
    }

}
```

# 3\. Sorting Objects in an ArrayList using Comparator

Check out the below code snippet, I am sorting Employees list using Anonymous Comparator

```java
//Sorting using Anonymous inner class type
        Collections.sort(emplyoees, new Comparator() {
            @Override
            public int compare(Employee e1, Employee e2) {
                String id1 = ((Employee) e1).getId();
                String id2 = ((Employee) e2).getId();

                // ascending order
                 return id1.compareTo(id2);

                // descending order
                //return id2.compareTo(id1);
            }
        });
```

##### Complete Code

```java
public class SortArrayListObjects {

    public static void main(String[] args) {

        ArrayList employees = new ArrayList();
        employees.add(new Employee("1001", "Adam", 5000));
        employees.add(new Employee("1006", "Rajan", 8400));
        employees.add(new Employee("1040", "Keay", 2500));
        employees.add(new Employee("1056", "Ashok", 12000));

        System.out.println("**** Value before sorting ***");
        for(Employee employee: employees){
            System.out.println(employee);
        }

        Collections.sort(employees);

        System.out.println("**** After sorting salary descending ***");
        for(Employee employee: employees){
            System.out.println(employee);
        }

        //Sorting using Anonymous inner class type
        Collections.sort(employees, new Comparator() {
            @Override
            public int compare(Employee e1, Employee e2) {
                String id1 = ((Employee) e1).getId();
                String id2 = ((Employee) e2).getId();

                // ascending order
                 return id1.compareTo(id2);

                // descending order
                //return id2.compareTo(id1);
            }
        });

        System.out.println("**** After sorting id ascending ***");
        for(Employee employee: employees){
            System.out.println(employee);
        }

    }
}
```

##### Output[![sorting-array-list-using-Comparator](/media/articles/424/sorting-array-list-using-Comparator.png)](http://stacktips.com)
