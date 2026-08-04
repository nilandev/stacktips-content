---
id: 404
title: Working with Java Collections
slug: java-collections
excerpt: The Collections framework in Java defines numerous different data structures in which you can store, group, and retrieve objects.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.719Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-arraylist
  - java-linkedlist
  - java-hashmap-hashset
  - java-collections-framework
course: getting-started-with-java
displayOrder: 17
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The collections framework in Java defines numerous different data structures in which you can store, group, and retrieve objects. Located inside the `java.util` package, the collections framework contains numerous different classes and interfaces including `ArrayList`, `LinkedList`, `Queue`, `HashSet`, `HashMap`, amongst others.

All of these support adding, removing, getting the total size, clearing, checking if an item exists, whether or not it is empty, and many others. In this lesson, we'll dive into some of these collections and learn how to do the basic operations in each.

### ArrayList

An `ArrayList` is similar to a normal Java array except that the size here is dynamically and automatically adjusted as the size of the collection changes. Remember that normal arrays have a fixed size that cannot change. With `ArrayList`, you don't need to worry about the size. Import the class you're good to go:

```java
import java.util.ArrayList;
```

Let's look at how to use an `ArrayList`.

#### Creating an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
    }
}
```

Put the type of objects you want to collect inside the diamond operator like shown above and you're good to go.

#### Adding items to an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries);
    }
}
```

```bash
[United States of America, United Kingdom, Canada]
```

#### Accessing an Item in an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries.get(1));
    }
}
```

```bash
United Kingdom
```

#### Changing an Item in an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");
        countries.set(1, "Australia");
        System.out.println(countries.get(1));
    }
}
```

```bash
Australia
```

#### Removing an Item in an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        countries.remove(1);
        System.out.println(countries);
    }
}
```

```bash
[United States of America, Canada]
```

#### Get Size of an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries.size());
    }
}
```

```bash
3
```

#### Check if Item exists in ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        boolean contains = countries.contains("Canada");

        System.out.println(contains);
    }
}
```

```bash
true
```

#### Iterate over an ArrayList

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> countries = new ArrayList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        for (int i = 0; i < countries.size(); i++) {
          System.out.println(countries.get(i));
        }
    }
}
```

```bash
United States of America
United Kingdom
Canada
```

### LinkedList

A `LinkedList` is similar to an `ArrayList` except the way the data is stored in memory. Where an `ArrayList` uses a normal array to store elements, a `LinkedList` uses a doubly linked list to store elements. What this means is that each item knows where the next and previous items are, instead of in an array where you simply increment or decrement the index.

In general, a `LinkedList` is better when you're manipulating data, but an `ArrayList` is superior when it comes to simply storing and accessing that data. To start using a `LinkedList`, import the class you're good to go:

```java
import java.util.LinkedList;
```

#### Creating a LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
    }
}
```

#### Adding items to LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries);
    }
}
```

```bash
[United States of America, United Kingdom, Canada]
```

#### Removing an Item in an LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        countries.remove(1);

        System.out.println(countries);
    }
}
```

```bash
[United States of America, Canada]
```

#### Get Size of LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries.size());
    }
}
```

```bash
3
```

#### Check if Item exists in LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        boolean contains = countries.contains("Canada");

        System.out.println(contains);
    }
}
```

```bash
true
```

#### Iterate over an LinkedList

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> countries = new LinkedList<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        for (int i = 0; i < countries.size(); i++) {
          System.out.println(countries.get(i));
        }
    }
}
```

```bash
United States of America
United Kingdom
Canada
```

### HashSet

A Java `HashSet` is a collection that uses a hash table for storage. Elements are stored by hashing and as a result only supports unique elements only. Unlike most collections, a `HashSet` does not keep track of order. As a result, using a `HashSet` is best when you simply want to search data.

Import the class you're good to go:

```java
import java.util.HashSet;
```

#### Creating a HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
    }
}
```

#### Adding items to a HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries);
    }
}
```

```bash
[Canada, United States of America, United Kingdom]
```

Notice the order is different here? Items are inserted by their hashcode, not their order.

#### Removing an Item in a HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        countries.remove("United Kingdom");

        System.out.println(countries);
    }
}
```

```bash
[Canada, United States of America]
```

#### Get Size of HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        System.out.println(countries.size());
    }
}
```

```bash
3
```

#### Check if Item exists in HashSet

```java
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        boolean contains = countries.contains("Canada");

        System.out.println(contains);
    }
}
```

```bash
true
```

#### Iterate over a HashSet

```java
import java.util.HashSet;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        HashSet<String> countries = new HashSet<String>();
        countries.add("United States of America");
        countries.add("United Kingdom");
        countries.add("Canada");

        Iterator<String> iterator = countries.iterator();
        while(iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

```bash
Canada
United States of America
United Kingdom
```

All collections support iterators. We need to use an iterator when we use a `HashSet` to iterate since it doesn't support indexes.

### HashMap

A `HashMap` works fundamentally different than the other collections we've seen here. A `HashMap` uses key-value pairs to insert and access items. All keys must be unique and this, like a `HashSet` does not maintain order. HashMaps are great when you know the key of the item you want to access.

Import the class you're good to go:

```java
import java.util.HashMap;
```

#### Creating a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
    }
}
```

#### Adding items to a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        System.out.println(population);
    }
}
```

```bash
{Canada=37590000, United States of America=327200000, United Kingdom=66440000}
```

Note that like mentioned before, order is not preserved in a `HashMap`.

#### Accessing an Item in a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        System.out.println(population.get("United Kingdom"));
    }
}
```

```bash
66440000
```

#### Changing an Item in a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        population.replace("United States of America", 100000000); // uh oh

        System.out.println(population.get("United States of America"));
    }
}
```

```bash
100000000
```

#### Removing an Item in a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        population.remove("United States of America");

        System.out.println(population);
    }
}
```

```bash
{Canada=37590000, United Kingdom=66440000}
```

#### Get Size of a HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        System.out.println(population.size());
    }
}
```

```bash
3
```

#### Check if Item exists in HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        boolean contains = population.containsKey("Canada");

        System.out.println(contains);
    }
}
```

```bash
true
```

#### Iterate over a HashMap

```java
import java.util.Map;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        for (Map.Entry<String, Integer> country : population.entrySet()) {
            System.out.println("Name: " + country.getKey() + ", Population: " + country.getValue());
        }
    }
}
```

```bash
Name: Canada, Population: 37590000
Name: United States of America, Population: 327200000
Name: United Kingdom, Population: 66440000
```

Alternatively, you can iterate over either just the keys or just the values:

```java
import java.util.Map;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> population = new HashMap<String, Integer>();
        population.put("United States of America", 327200000);
        population.put("United Kingdom", 66440000);
        population.put("Canada", 37590000);

        // just keys
        for (String name : population.keySet()) {
            System.out.println(name);
        }

        // just values
        for (int pop : population.values()) {
            System.out.println(pop);
        }
    }
}
```

```bash
Canada
United States of America
United Kingdom
37590000
327200000
66440000
```
