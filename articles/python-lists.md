---
id: 368
title: "Python: Working with Lists"
slug: python-lists
excerpt: Learn about lists in Python which are collections that are ordered and changeable whenever you want.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.416Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-list-methods
  - python-arrays
  - python-data-structures
  - python-list-operations
course: getting-started-with-python
displayOrder: 10
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Lists are used to store collection of items in a single variable. They are very similar to what other programming languages call Arrays.

Items stored in the list are ordered and changeable and can contain duplicates. List can contain any number of items and of any type.

Lists are created using square brackets:

## Creating a List

Let us define a list to store all the days in a week:

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]
print(week)
```

**Output:**

```text
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
```

## Accessing List Items

The syntax for **accessing** an item is also pretty standard, simply provide the **index** of the item you want to access. Note that the first item has an index of `0`:

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]

print(week[0])   # prints Sunday
print(week[1])   # prints Monday
```

You can use the negative index to access the items from the end of the list. For example.

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]
print(week[-1])    # prints Saturday
```

## Changing Items

Lists defined in python are mutable. This means, we can update the values for a given index.

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]

week[1] = "MONDAY"
print(week)
```

**Output:**

```text
['Sunday', 'MONDAY', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
```

## Appending Items to List

You can append item to list using the built in `append()` function. This method will add the new item to the end of the list.

```python
animals = ["elephant", "tiger", "lion"]
print(animals)

animals.append("bear")
print(animals)
```

**Output:**

```text
['elephant', 'tiger', 'lion']
['elephant', 'tiger', 'lion', 'bear']
```

## Deleting Items from List

If you want to remove an item from the list, you can do that using the built in `del` function and passing in the index.

```python
animals = ["elephant", "tiger", "lion", "bear"]
print(animals)

del(animals[1])
print(animals)
```

**Output:**

```text
['elephant', 'tiger', 'lion', 'bear']
['elephant', 'lion', 'bear']
```

Alternatively, you can use the delete the item form list using the item value using the `remove` method:

```python
animals = ["elephant", "tiger", "lion", "bear"]
print(animals)

animals.remove("tiger")
print(animals)
```

**Output:**

```text
['elephant', 'tiger', 'lion', 'bear']
['elephant', 'lion', 'bear']
```

## Looping through a List

Looping through a list is a very common operation and Python luckily makes this easy to do:

```python
week = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]
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

## Checking if an Item Exists in List

Sometimes you might be working with huge lists or not even know what is inside the list, in the case of lists being returned from methods.

You can very easily check if a list contains a value you want, like this:

```python
week = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"]

print("Monday" in week)
```

**Output:**

```text
True
```

## How to Check Length of a List?

You can check the length of the list by using the `len()` function:

```python
week = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"]

print(len(week))
```

**Output:**

```text
7
```

## How to Join Two Lists?

Python has a simple syntax for combining lists, use the `+` operator

```python
na = ["USA", "Canada", "Mexico"]
eu = ["UK", "France", "Germany"]

countries = na + eu
print(countries)
```

**Output:**

```text
['USA', 'Canada', 'Mexico', 'UK', 'France', 'Germany']
```

## Reverse a List

**Reverse** the order of the items in a list using the `reverse` function:

```python
week = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"]

print(week)
week.reverse()
print(week)
```

**Output:**

```text
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']
```

## Sort a list

You can easily **sort** a list using the built-in `sort` function:

```python
week = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"]

print(week)
week.sort()
print(week)
```

**Output:**

```text
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'Wednesday']
```
