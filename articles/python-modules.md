---
id: 367
title: "Python: Modules and Packages"
slug: python-modules
excerpt: Modules in Python are a way to import external code for you to use in your own code like third-party libraries.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.352Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 7
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In Python, a file containing statements and definitions is referred as a module.

All the methods and variables defined in a Python module can be imported and accessed from another modules.

Let us create a module for performing the `math.py`.

```python
# Python Module example
def add(a, b):
   return a + b

def subtract(a, b):
   return a - b

def multiply(a, b):
   return a * b
```

Here, we have defined three functions inside the `math` module.

## How to Import a Module in Python?

To import a module you need to use `import` statement

```python
import math

sum = math.add(5, 10)
print("Sum is:", sum)

sum = math.subtract(15, 10)
print("Sub is:", sum)
```

**Output:**

```
Sum is: 15
Sub is: 5
```

You can also import the module by renaming as follows:

```python
import math as m

sum = m.add(5, 10)
print("Sum is:", sum)

sum = m.subtract(15, 10)
print("Sub is:", sum)
```

Notice that in the above example, we have imported the entire module. Let's say you only wanted a specific function inside the module. We can do that too, like so:

```python
from math import add
from math import subtract

sum = add(5, 10)
print("Sum is:", sum)

sub = subtract(15, 10)
print("Sub is:", sub)
```

## Python Built-in Modules

Python has many built-in modules, and we've already used one extensively in this class, namely the `math` module.

Here are some other popular useful built-in modules that might be familiar to you:

| array | copy | html | http |
| --- | --- | --- | --- |
| email | fileinput | io | json |
| gc | gzip | ipaddress | numbers |
| pip | pipes | random | ssl |
| string | symbol | sys | time |

Definitely check out the documentation for these modules if you're curious about what functionality any of them offer!

## References

-   [Python Docs - Modules](https://docs.python.org/3/tutorial/modules.html)
