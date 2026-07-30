---
id: 366
title: "Python: Introduction to Functions"
slug: python-functions
excerpt: Functions in Python are a great way to group together lines of code that aim to do a single task and make them reusable.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.315Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 6
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Function in Python is group of related statements that performs a specific task.

Functions are a great way to group related statements that is aimed to break a complex program into smaller and reusable chunks.

In Python a function is defined using the def keyword.

```python
def function_name(parameter1, parameter2):
    print("Hello from a function")
```

You can pass data, known as parameters, into a function. A function can return data as a result.

As you have noticed above, we have defined a function but it was never invoked. Here is how we invoke a method.

```python
def print_hello():
    print("Hello from a function!")

print_hello()
```

**Output:**

```text
Hello from a function!
```

## Arguments

We can pass in pieces of data to the function so that it can perform different tasks. For example, in the following method definition greet, we are require to pass two arguments when invoking the function.

```python
def greet(name, message):
    print("Hello", name + ', ' + message)

greet("Adam", "Good morning!") # Positional arguments
greet(message="Good morning!", name="John") # Named arguments
```

**Output:**

```text
Hello Adam, Good morning!
Hello John, Good morning!
```

-   Notice that, in the first function call, the arguments are passed based on the **position defined** in the function definition.
-   However, Python also allows passing the **named arguments**. When arguments are passed by their names, the orders are ignored.

**Output:**

```text
Result: 300
```

Note that the above function two numbers as parameters and returns the sum of two numbers.

## Default Parameter Values

Python allows you to set a default values for the function parameters. If a function is defined with default parameter values, you don?t have to pass the parameters when invoking the function.

Let's apply this using our previous example:

```python
def add_num(number1 = 0, number2 = 0):
    return number1 + number2

result = add_num(100, 200)
print("Result:", result)

result = add_num()
print("Result:", result)
```

**Output:**

```text
Result: 300
Result: 0
```

Because we set the default value for parameters to be 0, when we invoke the method `add_num` without passing the parameters, the values defaulted to 0.

## Arbitrary Arguments (\*args)

If the number of arguments that will be passed to a function is not known upfront, you can define a function with arbitrary arguments. Just add a `* (asterisks)` before the argument name in your function definition.

For example:

```python
def my_function(*args):
  print("The third arg is:", args[2])

my_function("John", "Adam", "Prakash")
```

Output:

```text
The third arg is: Prakash
```

## Arbitrary Keyword Arguments (\*\*kwargs)

If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.

This way the function will receive a dictionary of arguments, and can access the items by their keys.

For example:

```python
def my_function(**args):
  print("The name2 arg is:", args["name2"])

my_function(name1="John", name2="Adam", name3="Prakash")
```

**Output:**

```text
The name2 arg is: Adam
```

## The pass keyword

A function defined in Python cannot have be empty. But for some reason if you don?t have a function definition, you can use the `pass` statement to avoid the compilation error.

```python
def my_function():
    pass
```

## Function Recursion

Python also accepts function recursion, which means a defined function can call itself.

Let us now define a method to calculate factorial for a given number.

?? Factorial is the process of multiplying all the integers less than or equal to a given number. So, 5! is equivalent to 5\*4\*3\*2\*1 which is 120. We can use a recursive function to do this work for us.

```python
def factorial(num):
    if (num == 0):
        return 1
    else:
        return num * factorial(num - 1)

print('{}! is {}'.format(4, factorial(4)))
print('{}! is {}'.format(3, factorial(3)))
```

**Output:**

```text
4! is 24
3! is 6
```
