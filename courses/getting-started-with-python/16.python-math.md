---
id: 363
title: "Python: Math Functions"
slug: python-math
excerpt: Learn about how to do arithmetic and work with the basic math operators and functions provided by Python.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.139Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-arithmetic-operators
  - python-math-module
  - python-number-operations
course: getting-started-with-python
displayOrder: 16
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Python is used extensively in finance, simulation, data science, statistical analysis, and in many other mathematically-intensive fields of work. The reason being is that Python makes working with numbers very easy.

## Arithmetic Operators

Here are the most common **arithmetic operators** that allow you to manipulate numbers in Python.

### Addition

You can add numbers in Python using the `+` operator.

```python
x = 2
y = 5

total = x + y
print(total)
```

```bash
7
```

### Subtraction

You can subtract numbers in Python using the `-` operator.

```python
x = 8
y = 3

total = x - y
print(total)
```

```bash
5
```

### Multiplication

You can multiply numbers in Python using the `*` operator.

```python
x = 4
y = 6

total = x * y
print(total)
```

```bash
24
```

### Division

You can divide numbers in Python using the `/` operator.

```python
x = 54
y = 2

total = x / y
print(total)
```

```bash
27.0
```

### Modulus

You can find the remainder of a division in Python using the `%` operator.

```python
x = 64
y = 23

total = x % y
print(total)
```

```bash
18.0
```

### Exponents

You can find the **power** of a number in Python using the `**` operator.

```python
x = 2
y = 4

total = x ** y
print(total)
```

```bash
16
```

### Order of Operations

**Order of Operations**, also known as **PEMDAS**, is at play here, including with the use of parentheses.

```python
x = (4 * 5) + 20 / 4
print(x)
```

```bash
25
```

## Python Number Types

There are three kinds of numbers in Python, and they are as followed:

-   int
-   float
-   complex

```python
a = 1337  # int
b = 13.37 # float
c = 1337j # complex

print(type(a))
print(type(b))
print(type(c))
```

```bash
<class 'int'>
<class 'float'>
<class 'complex'>
```

### int

**Integers** are whole numbers like `4` or `532`. They can be positive or negative, and they don't contain any decimals.

```python
a = 423
b = 74
c = 87937595
```

These are all valid integers.

### Float

**Floating point numbers** are numbers containing a decimal, and can also be positive or negative. Here are some examples:

```python
a = 1.53
b = 3.1
c = -95.23
```

### Complex

**Complex** numbers are Python's representation of imaginary numbers, and they use a `j` to represent the `i`.

```python
a = 4+2j
b = 9j
c = -3j
```

## Number Type Conversion

Python offers built-in methods to convert between these types using the `float()`, `int()`, and `complex()` methods.

```python
a = 5   # int
b = 3.3 # float
c = 7j  # complex

float = float(a)
int = int(b)
complex = complex(a)

print(float)
print(int)
print(complex)

print(type(float))
print(type(int))
print(type(complex))
```

```bash
5.0
3
(5+0j)
<class 'float'>
<class 'int'>
<class 'complex'>
```

Keep in mind that you cannot convert complex numbers into anything else.

## Math Methods

We mentioned before that Python is used heavily in any field that utilizes math. The built-in methods that Python provides is a large reason why. Here are some of the most common ones:

### Absolute Value

Get the **absolute value** of a number by using the `abs()` method:

```python
number = -34
print(abs(number))
```

```bash
34
```

### Floor

Use the `floor()` method to get the number passed in rounded down to the nearest integer if it is not already an integer.

For this and other math methods, you'll need to import the `math` module.

```python
import math

number = 6.21
print(math.min(number))
```

```bash
6
```

### Ceiling

Use the `ceil()` method to get the number passed in rounded up to the next highest integer if it is not already an integer.

```python
import math

number = 6.21
print(math.ceil(number))
```

```bash
7
```

### Natural Logarithm

You can get the **natural logarithms** of a number using `log()`.

```python
import math

number = 123
print(math.log(number))
```

```bash
4.812184355372417
```

### Base-10 Logarithm

Alternatively, you can also get the **base-10 logarithm** of a number using `log10()`.

```python
import math

number = 123
print(math.log10(number))
```

```bash
2.089905111439398
```

### Maximum

You can get the **maximum** of two or more numbers using the `max()` method:

```python
number1 = 123
number2 = 456
number3 = 789
print(max(number1, number2, number3))
```

```bash
789
```

### Minimum

You can get the **minimum** of two or more numbers using the `min()` method:

```python
number1 = 123
number2 = 456
number3 = 789
print(min(number1, number2, number3))
```

```bash
123
```

### Power

You can take the **power** of a number using `pow`.

```python
base = 3
exponent = 4
print(pow(base, exponent))
```

```bash
81
```

### Round

You can **round** off any number to the nearest integer using `round()`.

```python
number = 3.1459
places = 3
print(round(number, places))
```

```bash
3.146
```

### Square Root

You can take the **square root** of a number using `sqrt()`.

```python
import math

number = 81
print(math.sqrt(number))
```

```bash
9
```

### Random

Generating random numbers in Python is easy. There's a module named `random` that has all we need. Call the `randrange()` method to get a number in between two other numbers you define:

```python
import random

start = 1
end = 10
print(random.randrange(start, end))
```

```bash
6
```

Keep in mind that it does NOT include the second parameter. In other words, because our second parameter was a 10, this is effectively only going to ever return a number between and including 1 and 9.

## Math Constants

One last cool to point out is that Python's `math` module also comes with some predefined constants for us.

### Euler's Number

One of the constants that the `math` module comes with is **Euler's Number**:

```python
import math

e = math.e
print(e)
```

```bash
2.718281828459045
```

### Pi

Python's `math` module also comes with a value for **Pi**, the ratio of the circumference of a circle relative to its diameter.

```python
import math

pi = math.pi
print(pi)
```

```bash
3.141592653589793
```
