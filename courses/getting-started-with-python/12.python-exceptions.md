---
id: 381
title: "Python: Exception Handling"
slug: python-exceptions
excerpt: Learn how to gracefully handle and recover from exceptions and errors in Python when they arise in your code.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.964Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-exception-handling
  - python-try-except-finally
  - python-raise-exception
  - python-else-block-exceptions
course: getting-started-with-python
displayOrder: 12
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Exceptions are errors in our program that causes Python to stop and display an error message. Exceptions are handled using the try-except-finally block.

## Exception Handling

As mentioned before, we handle exceptions using the try-except-finally block. The `try` block is where you put the code that could potentially throw an exception. The `except` block is where you can gracefully perform an action if an exception was indeed thrown. Lastly, the `finally` block allows you to run code no matter if an exception was thrown or not.

Let's look at a very simple exception:

```python
try:
    print(myVar)except:
    print("An exception occurred.")
```

```text
An exception occurred.
```

In our piece of code, the variable `myVar` was purposely not defined. This threw an exception which we handled inside our `except` block.

Notice how we didn't use a `finally` block because they are entirely optional. However, we could use one anyway like this:

```python
try:
    print(myVar)except:
    print("An exception occurred.")
finally:
    print("Moving on!")
```

```text
An exception occurred.
Moving on!
```

## Multiple Exceptions

You can handle multiple exceptions by chaining the `except` blocks and specifying what error you want to handle.

Here's how that looks:

```python
try:
    print(myVar)except OverflowError:
    print("An overflow occurred.")
except:
    print("An exception occurred.")
finally:
    print("Moving on!")
```

```text
An exception occurred.
Moving on!
```

## Else

You can use the `else` block to run code when no exceptions were thrown. This is similar to the `finally` block except that the `finally` block runs no matter what whereas the `else` block runs only when the code was exception-free.

```python
try:
    print("Hello!")
except OverflowError:
    print("An overflow occurred.")
except:
    print("An exception occurred.")
else:
    print("Great, no errors!")
finally:
    print("Moving on!")
```

```text
Hello!
Great, no errors!
Moving on!
```

## Raising Exceptions

When the situation arises, you might want to raise an exception yourself. This is done using the `raise` keyword:

```python
raise Exception("Sorry, this is an exception!")
```

```text
Traceback (most recent call last):
File "C:\Users\Nilan\example.py", line 1, in <module>
raise Exception("Sorry, this is an exception!")
Exception: Sorry, this is an exception!
```

This is useful especially if you're writing your own module because it allows users of your module to then handle your exceptions themselves and handle it however they want.

[Python Docs - Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
