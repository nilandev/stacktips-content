---
id: 369
title: "Python: Working with Tuples"
slug: python-tuples
excerpt: Learn how to use tuples in Python which are collections that are ordered, unchangeable, and immutable.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.487Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 11
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A tuple represents a sequence of any objects separated by commas and enclosed in parentheses. A tuple is an **immutable** object, which means it cannot be changed, and we use it to represent fixed collections of items.

## Creating a Tuple

**Creating** a tuple is very similar to creating a list, unlike the lists where the values are enclosed with in the brackets, tuples use parenthesis.

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print(week)
```

**Output:**

```text
('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
```

## Accessing items in a Tuple

You can access an item in a tuple in the same way you do with lists:

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print(week[1]) # Prints Monday
```

Similar to list, we can also use negative indexes for accessing the elements from reverse order.

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print(week[-1])  # Prints Saturday
```

## Looping through a Tuple

Here is how to iterate through a tuple:

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

for day in week:
    print(day)
```

**Output:**

```text
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
```

## Check if Item Exists in Tuple

You can check if an item exists in a tuple like this:

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print("Monday" in week)
print("Sat" in week)
```

**Output:**

```text
True
False
```

## Tuple Length

Get the length of a tuple using the built-in `len` function:

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print(len(week))
```

**Output:**

```text
7
```

## Combine Multiple Tuples

Even though tuples are immutable, you can still combine them to create a third entirely new tuple. This is how:

```python
na = ("USA", "Canada", "Mexico")
eu = ("UK", "France", "Germany")

countries = na + eu
print(countries)
```

**Output:**

```text
('USA', 'Canada', 'Mexico', 'UK', 'France', 'Germany')
```

## Converting a Tuple into a List

When the situation arises that you indeed must make changes to the tuple, Python gives you the option to convert it to a list instead. Use the `list()` function to do just that:

```python
week = ("Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday")

print(week)
week_list = list(week)
print(week_list)
```

**Output:**

```text
('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
```

The second output enclosed with in the brackets indicate that it is a list and not a tuple!
