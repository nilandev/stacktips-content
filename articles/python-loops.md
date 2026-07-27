---
id: 365
title: "Python: Working with Loops"
slug: python-loops
excerpt: Learn about the two loops in Python, the for and while loop. Plus learn about the break and continue statements.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.243Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 5
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Loops are integral part of any programming language. Loop can simply be described as a situation in which you may need to execute the same block of code over and over.

Python supports two looping constructs:

-   for loop
-   while loop

## For Loop

The basic syntax of the for loop in Python looks something similar to the one mentioned below.

```java
for itarator in sequence:
	Statements
	. . .
	Statements
```

-   The keyword **for** signifies the beginning of the for loop.
-   The **iterator** variable which iterates over the sequence and can be used within the loop to perform various functions
-   The **in** keyword in Python which tells the iterator variable to loop for elements within the sequence
-   And the **sequence variable** can be a list, a tuple or any other iterator types.
-   The statements part of the loop is where you can play around with the iterator variable and perform various function

Let us now examine some of the examples;

### Example 1: **Python for loop with range() function**

The range() function is one of the built in function in Python. This is used when you want a loop to run for a specified number of iterations. For example, printing a number from 1 to 10

When you want the for loop to run for a specific number of times, or you need to specify a range of objects to print out, the range function works really well. Consider the following example where I want to print the numbers 1, 2, and 3.

```python
for i in range(0, 5):
    print(i)
```

**Output:**

```python
0
1
2
3
4
```

### Example 2: **Print all letters of a string using the for loop**

```python
for letter in "stacktips.com":
    print(letter)
```

**Output:**

```
s
t
a
c
k
t
i
p
s
```

### Example 3: Using for loop to print all elements in List

Lists and Tuples in python are iterable objects. The following example explains how to loop over the elements with in an iterable object.

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]
for day in week:
	print(day)
```

**Output:**

```python
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
```

### Example 4: The break statement with for loop

The break statement is used to terminate the loop prematurely. It is used to exit the loop when a specific condition is met.

For example, let us write a method to search an item from the list. The following code will iterate over all individual list items and if the given item found, it will break the loop.

```python
numbers = [15, 30, 10, 6, 8, 12]

def search_item(numbers, search_key):
    found = False
    for number in numbers:        
        if (number == search_key):
            found = True
            break
    return found

print("List contains 10:" , search_item(numbers, 10))
print("List contains 40:", search_item(numbers, 40))
```

**Output:**

```
List contains 10: True
List contains 40: False
```

### Example 5: The continue statement with for loop

The continue statement in Python is used to skip the loop execution if a specific condition is satisfied.

For example, let us write a python function to add the sum of all positive numbers in the list.

```python
numbers = [5, -3, -6, 4, 2, 1]
sum=0;
for number in numbers:
    if(number < 0):
        continue
    sum+=number

print("Sum of Positive Numbers:", sum)
```

**Output:**

```
Sum of Positive Numbers: 12
```

### Example 6: Python for loop with else block

Unlike any other programming language, Python allows attaching an else block to the for loop.

When an else block is attached, it will executed the statement inside else block when the loop ends.

Else block is not executed, when a loop is terminated with `break` keyword.

In this example, we want to write a method to check if a string contains only alphabets and no other invalid characters.

```python
def validate_name(name):
    for letter in name:
        if (letter.isalpha()):
            continue
        else:
            print(name, "contains invalid characters")
            break
    else:
        print(name, "is a valid name")

validate_name("John")
validate_name("John007")
```

**Output:**

```
John is a valid name
John007 contains invalid characters
```

The above example, iterates through individual letters and checks for a valid alphabet, if it contains valid alphabets, the loop continuous. Otherwise it breaks the loop.

The else block gets executed at the end when the loops is completed successfully without the break clause being called

## While loop

A **while loop** is an even simpler loop. A while loop takes a conditional and if that condition is `true`, it will continue with another loop. The iterator variable is placed outside the while loop.

Let's look at looping from 1 to 5 again but this time using a while loop:

```python
count = 1

while count <= 5:
    print(count)
    count += 1
```

**Output:**

```
1
2
3
4
5
```

The for loop in Python is very similar to any other programming languages. We can use break and continue statements with for loop to alter the execution. However, in Python, we can have optional else block in for loop too.
