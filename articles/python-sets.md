---
id: 370
title: "Python: Working with Sets"
slug: python-sets
excerpt: Learn about sets in Python which are a collections of elements that are unordered and unindexed with no duplicates.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.528Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 9
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Sets in Python are similar to list except that they do not allow for duplicate elements inside. Not only that but the collection is un-indexed, meaning there is no concept of indexes at all.

Sets are defined using curly braces.

## Creating a Set

**Creating** a set is similar to creating both a list and tuple:

```python
colors = {"red", "white", "blue"}
print(colors)
```

**Output:**

```text
{'white', 'red', 'blue'}
```

Notice that the order of items printed in the output is different from the order defined. Because sets are unordered and without indexes, the order in which items appear can be in any order.

## Adding Items to a Set

While you cannot change the items inside a set, you can still **add new items** to the set. To do this, use the `add()` method.

```python
colors = {"red", "white", "blue"}
colors.add("green")
print(colors)
```

**Output:**

```text
{'white', 'red', 'green', 'blue'}
```

If you want to add multiple items to a set at once, Python also offers this functionality using the `update()` method:

```python
colors = {"red", "white", "blue"}
colors.update(["orange", "black", "green"])
print(colors)
```

**Output:**

```text
{'red', 'green', 'orange', 'white', 'black', 'blue'}
```

## Looping through a Set

Here is how you iterate over a set:

```python
colors = {"red", "white", "blue", "orange"}

for color in colors:
    print(color)orange
white
red
blue
```

**Output:**

```text
    white
blue
red
```

## Delete an Item from a Set

In addition to adding an item to a set, you can also **remove items** from it using the `remove` function.

```python
colors = {"red", "white", "blue", "orange"}
colors.remove("blue")
print(colors)
```

**Output:**

```text
{'orange', 'white', 'red'}
```

If the item you're trying to remove doesn't exist, an error will be raised.

If you want to safely try to remove an item from a set that you're not sure exists in the set or not, use the `discard`:

```python
colors = {"red", "white", "blue", "orange"}
colors.discard("green")
print(colors)
```

```text
{'orange', 'white', 'red', 'blue'}
```

## Check if Item Exists in Set

You can check if an item exists in a set using the `in` keyword:

```python
colors = {"red", "white", "blue"}

print("red" in colors)
print("yellow" in colors)
```

**Output:**

```text
True
False
```

## Set Length

Get the number of items in your set using the `len()` function:

```python
colors = {"red", "white", "blue"}
print(len(colors))
```

**Output:**

```text
3
```

## Combining Multiple Sets

When you have two sets and you want to combine them, Python gives you two options. You can either make a new set or add the items to an existing set. To make a new set entirely, use the `union()` function:

```python
colors1 = {"red", "white", "blue"}
colors2 = {"red", "purple", "brown"}

colors3 = colors1.union(colors2)
print(colors3)
```

**Output:**

```text
{'white', 'brown', 'red', 'purple', 'blue'}
```

If you don't want to make a new set, and simply want to add the items from one set to another, use the `update()` function:

```python
colors1 = {"red", "white", "blue"}
colors2 = {"red", "purple", "brown"}

colors1.update(colors2)
print(colors1)
```

**Output:**

```text
{'blue', 'purple', 'brown', 'red', 'white'}
```
