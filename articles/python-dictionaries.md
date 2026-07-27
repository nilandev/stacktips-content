---
id: 371
title: "Python: Working with Dictionaries"
slug: python-dictionaries
excerpt: Learn about dictionaries in Python, which are key-value pair collections that are unordered, indexed and changable.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.605Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 8
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Unlike all other collection types, dictionaries strictly contain key-value pairs.

**Dictionaries** are collections that are unordered, changeable, and are indexed.

They are similar to lists but instead of the index being a number, you can instead use the key to access the element.

## Creating a Dictionary

Here's how you **create** a dictionary:

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}

print(queens)   
```

**Output:**

```
{'city': 'New York City', 'state': 'New York', 'country': 'United States'}
```

## Accessing Items

Items in a dictionary can be accessed using the key.

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}

print(queens["city"])
```

**Output:**

```
New York
```

## Adding Items to Python Dictionary

You can **add** items to a dictionary by setting a new key-value pair, like this:

```python
company = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}
company["name"] = "ABC Inc"
print(company)
```

**Output:**

```
{'city': 'New York City', 'state': 'New York', 'country': 'United States', 'name': 'ABC Inc'}
```

## Update Items in Python Dictionary

Dictionaries allow you to **change** the value of an item if you refer to it directly:

```python
company = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}
company["city"] = "London"
company["country"] = "GB"
print(company)
```

```
{'city': 'London', 'state': 'New York', 'country': 'GB'}
```

## Looping through a Dictionary

You can **iterate** through the keys of a dictionary, and then use that key to get the value. Here's how:

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}
for key in queens:
    value = queens[key]
    print("Key: " + key + " Value: " + value)
```

**Output:**

```
Key: city Value: New York City
Key: state Value: New York
Key: country Value: United Statess
```

## Checking if a Key Exists

You can check if a **key exists** inside a dictionary like this:

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}
print("city" in queens)
```

**Output:**

```
True
```

## Removing Items

You can **remove** items from a dictionary by using the `pop()` function and providing the key. Here's how that looks:

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}

queens.pop("city")
print(queens)
```

```
{'state': 'New York', 'country': 'United States'}
```

## Dictionary Length

You can get the number of items that exist in your dictionary by using the `len()` function:

```python
queens = {
    "city": "New York City",
    "state": "New York",
    "country": "United States"
}
print(queens)
print(len(queens))
```

**Output:**

```
{'city': 'New York City', 'state': 'New York', 'country': 'United States'}
3
```
