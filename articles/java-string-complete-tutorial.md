---
id: 68
title: Java String Complete Tutorial
slug: java-string-complete-tutorial
excerpt: Strings are sequence of characters. In the Java programming language, strings are objects. The Java platform provides the…
difficulty: beginners
publishedDate: "2013-08-15T12:18:44.000Z"
updatedDate: "2025-09-16T23:05:35.250Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-string-immutability
  - string-pool-java
  - string-comparison-java
  - string-format-java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Strings are sequence of characters. In the Java programming language, strings are objects. The Java platform provides the String class to create and manipulate strings.

# 1. How to creating new String?

A new String can be created using two approaches.

1.  String literal
2.  Using String class constructor

## 1.1. Creating a new String by literals

A string class object can be created by directly assigning values. Each time you create a string it checks for the string value in the String pool, if the reference exists inside pool then the reference to the existing string from the pool is returned. If the pool doesn’t, contain the reference, then a new String object is formed and dumped to the pool.

```java
 //creating string by using literals
  String string1 = "Raj";
  String string2 = "Raj";
  String string3 = "Adam";
```

[![Java String Complete Tutorial](/media/articles/394/Java-String-Complete-Tutorial.png)](http://stacktips.com)

## 1.2. Creating String using String class constructor

String class constructor new String() can be used to create a new String. We can initialize a newly created String by passing parameters to String class constructor. If we don’t pass any values to the constructor, it initializes a newly created String object so that it represents an empty character sequence. This way it always creates a new String and dumped into String pool.  
Note, that use of this constructor is unnecessary since Strings are immutable.

```java
 //creating a new String using String class constructor
  String string1 = new String("This is a sample String 1");
```

## 1.3. Creating String from Character Array

We can also create a String class from the sequence of characters. String class constructor takes a character array as parameter and it creates a new String. The contents of the character array are copied; subsequent modification of the character array does not affect the newly created string.

```java
  //creating String from character array
  char chars[] = {'T', 'h', 'i', 's', ' ' , 'i' , 's' , ' ' , 'S','t','r','i','n','g'};
  String string2 = new String(chars);
```

# 2. Why String is immutable in Java?

Immutable means that once an object of that Class has been created it can’t be altered. Main reason is too provide better performance. Creating a copy of existing java String is easier as there is no need to create a new instance but can be easily created by pointing to already existing String. This saves valuable primary memory. Using String as a key for Hashtable guarantees that there will be no need for re hashing because of object change. Using java String in multi-threaded environment is safe by itself and we need not take any precautionary measures.

```java
  String string1 = "Akshay";
  string1.concat("Kumar");
  System.out.println(string1);
```

The above code will print Akshay. Only reference for Akshay will be created in String pool, no reference will be created for “Akshay Kumar” But if we want to print Akshay Kumar then we need to do the following changes

```java
  String string1 = "Akshay";
  string1 = string1.concat("Kumar");
  System.out.println(string1);
```

[![Java String Complete Tutorial2](/media/articles/394/Java-String-Complete-Tutorial2.png)](http://stacktips.com)

# 3. String class methods

The String class provides various methods that appear to modify strings. Since strings are immutable, what these methods create and return a new string that contains the result of the operation.

## 3.1. Comparing string in java

There are three ways to compare two strings in java.

-   String compression using equals() method
-   String comparison using == method
-   Using compareTo() method

### 3.1.1. String compression using equals() method

equals() method compares the two string contents. It compares the value of String for equality. It has two varients of methods equals() and equalsIgnoreCase() method. equals() method compare one string with the specified string. equalsIgnoreCase() method compares one string with the specified String ignoring the case.  
String class equals() method uses three step process to compare two java String’s;

-   Compare references (if both String references are same return true else continue)
-   Compare length (if both String length are not same return false else continue)
-   Compare character by character sequentially.

```java
  String string1 = "Akshay";
  String string2 = new String("Akshay");
  System.out.println(string1.equals(string2)); //returns true

  String string3 = "rajesh";
  System.out.println(string1.equals(string3)); //returns false

  String string4 = "akshay";
  System.out.println(string1.equals(string4)); //returns false

  String string5 = "akshay";
  System.out.println(string1.equalsIgnoreCase(string5)); //returns true
```

### 3.1.2. String comparison using == method

This compares two String’s by reference. Let us look into the below code sample

```java
  String string1 = "Akshay";
  String string2 = "Akshay";
  System.out.println(string1 == string2); //returns true

  String string3 = new String("Akshay");
  System.out.println(string1 == string3); //returns false
```

The first method of string comparison, it retunes true as the same reference is shared by both string1 and string2. But in the second method, while creating string3 object, it force system to create a new string, even though the pool contains the same string literal. So it returns false.

Note: Do not use == operator to compare java String as it compares only the object references and not its contents. == Operator does not 100% guarantee the equality of java String.

### 3.1.3. Using compareTo() method

comparedTo() method compares values and returns an integer that says if the compared string2 is less then, equals or greater than string1.

-   If first string is equals to second string then it returns zero.
-   If first string is bigger than second then returns a positive integer
-   If first string is smaller than second then returns a negative integer

```java
  String string1 = "Akshay";
  String string2 = "akshay";
  String string3 = "Akshay";
  String string4 = "Ajay";
  System.out.println(string1.compareTo(string2)); // returns negative integer
  System.out.println(string1.compareToIgnoreCase(string2)); // returns 0
  System.out.println(string1.compareTo(string3)); // returns 0
  System.out.println(string1.compareTo(string4)); // returns positive integer
```

## 3.2. Concatenating strings in java

There are two way of concatenating strings in java. We can either use concatenation operator (+) or by using concat() method.

```java
  String string1 = "Akshay" + "Kumar";
  System.out.println(string1); // prints Akshay Kumar
```

String concatenation operator not just concatenates two strings. It can also concatenate a string and primitive types. But note that the primitive type should be

```java
  String string1 = "Akshay" + 25;
  System.out.println(string1); // prints Akshay250

  String string2 = 20+ "Akshay"+25+25;
  System.out.println(string2); // prints 20Akshay2525

  String string3 = 20+30+ "Akshay"+25+25;
  System.out.println(string3); // prints 50Akshay2525
```

In the above code snippet, string3 value is returned after addition of 20+30, because + operator works as concatenation, only if at least one operand is String type.

## 3.3. subString method in java

substring() method is used to split a string. It has two variant,

-   substring(startIndex): This method returns a new String object after splitting the original string from the specified index to the last index.
-   substring(startIndex, endIndex): This method returns a new String object after splitting the original string from the specified startIndex to the endIndex.

```java
  String string1 = "Akshay Kumar";
  System.out.println(string1.substring(2)); // prints shay Kumar
  System.out.println(string1.substring(3, 6)); //prints hay
```

## 3.4. Creating Format Strings

String class has a method called format() that is used to return a formatted string as specified prams and format. Format specifier supported by java are;

-   %d – signed decimal integer
-   %u – unsigned decimal integer
-   %o – unsigned octal integer
-   %f – real number, standard notation
-   %s – string
-   %c – character, etc.

```java
  String string1 = "Hello %s, isn't %s cool?";
  String formatted = String.format(string1, "Akshay", "Javatechig");
  System.out.println(formatted);
  // prints Hello Akshay, isn't Javatechig cool?
```

# 4. Other String utilities

## 4.1. How do you convert java String to Date

You can convert String to java date object using SimpleDateFormat class.

```java
  try {
    String dateInString = "March 28, 2013";
    SimpleDateFormat dateFormat = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
    Date formattedDate = dateFormat.parse(dateInString);
  } catch (ParseException e) {
    e.printStackTrace();
  }
```

## 4.2. Converting Strings to Numbers

Java provides wrapper classes that wrap primitive numeric types and used to convert primitive to String and string to primitive types. The wrapper classes are the subclasses of Number class, they are Byte, Integer, Double, Float, Long, and Short.

```java
  float a = Float.parseFloat("15.4");
  int b = Integer.parseInt("5");
  double c = Double.parseDouble("25.01");
```

## 4.3. Converting primitive numbers to String

Each of the wrapper classes provides a class method named valueOf that converts a string to an object of that type.

```java
  int num1 = 50;
  Integer number1 = Integer.valueOf(num1);
  String string1 = number1.toString();

  double num2 = 12.5;
  Double number2 = Double.valueOf(num2);
  String string2 = number2.toString();
```
