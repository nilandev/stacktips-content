---
id: 375
title: "Python: Serialising and Deserialising JSON"
slug: python-serialising-and-deserialising-json
excerpt: JSON is the language of data transfer. Learn how to encode and decode JSON in Python using the json module.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.836Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 17
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

JSON stands for JavaScript Object Notation and it is one of the most popular data formats to store and transfer data between two points. Python has a built-in module called `json` that we can use to work with JSON.

## Deserialising JSON in Python

We can parse a string of JSON into a Python dictionary using the `loads()` function in the `json` module:

```python
import json

json_str = '{ "name": "Timmy Turner", "age": 10, "show": "The Fairly OddParents"}'

parsed = json.loads(json_str)
print(parsed)
```

```json
{'name': 'Timmy Turner', 'age': 10, 'show': 'The Fairly OddParents'}
```

While it looks the same as the input, because it is a dictionary, you can access it like you would any dictionary:

```python
import json

json_str = '{ "name": "Timmy Turner", "age": 10, "show": "The Fairly OddParents"}'

parsed = json.loads(json_str)
print(parsed["name"])
print(parsed["age"])
print(parsed["show"])
```

```bash
Timmy Turner
10
The Fairly OddParents
```

## Serialising Object to JSON in Python

You can do the reverse and **convert** a Python object into a string of JSON using the `dumps()` function:

```python
import json

obj = {
    "name": "Timmy Turner",
    "age": 10,
    "show": "The Fairly OddParents"
}

converted = json.dumps(obj)

print(converted)
```

```json
{"name": "Timmy Turner", "age": 10, "show": "The Fairly OddParents"}
```

## Formatting JSON

When you are outputting to JSON, you can pass optional parameters to the `dumps()` function to format the output for us.

Here's how to indent the string to make it more readable:

```python
import json

obj = {
    "name": "Timmy Turner",
    "age": 10,
    "show": "The Fairly OddParents"
}

converted = json.dumps(obj, indent=4)

print(converted)
```

```json
{
    "name": "Timmy Turner",
    "age": 10,
    "show": "The Fairly OddParents"
}
```

It's a good show that we hope you have watched!

-   [Python Docs - JSON](https://docs.python.org/3/library/json.html)
