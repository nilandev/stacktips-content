---
id: 362
title: "Python: Variables and Basic Data Types"
slug: python-variables-and-types
excerpt: This lesson will go over variables and types, including how to declare them, initialize them, and what each kind is.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.098Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 2
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Variables are the one of the fundamental building blocks of Python that are used to hold data in memory.

Variables have two components, name and type. The data in the variables can be referenced by their names. Type defines what type of data it stores.

Let's start by creating one.

## Declaration

Declaring a variable is incredibly simple in Python. Unlike in other programming languages, you do not need to specify the type of variable, it is done automatically for you.

Example of variable declaration looks like this:

name = "John Doe"
x = 777
print(name)
print(x)

The above code block prints

```python
John Doe
777
```

-   A variable is declared and assigned a value using the assignment operator =  
    
-   Python treats bool as a special type of integer. Technically, True has a value of 1 and False has a value of 0.  
    
-   A string is a collection of zero or more characters. Strings are commonly declared using single quotation marks, but you can also use double quotation marks.  
    
-   Python treats integer numbers and decimal numbers differently.

## Variable Naming Rules

Here are the rules for what are valid Python variable names:

-   The variable name must begin with a letter or underscore
-   The variable name cannot begin with a number or symbol
-   Throughout the entire variable name, it can only contain alpha-numeric characters with the only exception being underscores

With that in mind, here are some examples of valid Python variable names:

```python
apples
_apples
_apples_
```

And here are examples of invalid Python variable names:

```python
1apples
app les
$apples
%apples
```

Keep in mind that variable names are case-sensitive!

## Data Types

Python supports five standard data types. We've already seen two of them already, **Numbers** and **String**. Here is the entire list:

-   Numbers
-   String
-   List
-   Tuple
-   Dictionary

It is useful to know that you can get the type of a variable by using the `type` method, like so:

```python
name = "John Doe"
print(type(name))
print(name)

pi = 3.1415926
print(type(pi))
print(pi)

x = 777
print(type(x))
print(x)

isSuccess = True
print(type(
```

Output of the code prints:

```python
<class 'str'>
John Doe
<class 'float'>
3.1415926
<class 'int'>
777
<class 'bool'>
True
```

We'll get into **lists**, **tuples**, and **dictionaries** in later lessons.
