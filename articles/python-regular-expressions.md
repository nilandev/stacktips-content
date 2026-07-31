---
id: 377
title: "Python: Regular Expressions"
slug: python-regular-expressions
excerpt: Learn how to use regular expressions search patterns in Python to match text and do advanced find and replace operations.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.929Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-re-module
  - regex-python
  - python-findall-search-split-sub
course: getting-started-with-css
displayOrder: 15
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Regular expressions are a formatted sequence or pattern of characters that can be used in a search operation. They are written in a specific syntax and then are usually used to search for patterns in other text, or returning whether or not that text has met the pattern.

Python has a built-in module just for this, the `re` module.

## Using Regular Expressions Functions

Here are the functions that the `re` module offers to us:

-   `findall`: Returns a list with all the matches
-   `search`: Returns a Match object if a match was found
-   `split`: Returns a list of the string split at every match
-   `sub`: Substitutes all the matches with a string

Let's see these all in action.

## findall Function

Use the `findall()` function when you want to find all the matches you have described:

```python
import re

example = "I pledge allegiance."
results = re.findall("le", example)
print(results)
```

```bash
['le', 'le']
```

Python found `le` twice. If nothing was found, the list returned will be empty. You can take the length of this list to the number of results found.

## search Function

The `search()` function searches the string for a match. It returns back a `re.Match` object.

```python
import re

example = "I pledge allegiance."

results = re.search("le", example)
print(results)
```

```bash
<re.Match object; span=(18, 20), match='le'>
```

Using this `re.Match` object, you can get the index of the first match, like this:

```python
import re

example = "I pledge allegiance."

results = re.search("le", example)
print(results.start())
```

```bash
3
```

## split Function

The `split()` function returns the string split at every match.

```python
import re

example = "I pledge allegiance."

results = re.split("le", example)
print(results)
```

```bash
['I p', 'dge al', 'giance.']
```

Pretty straightforward, it cuts out all the string passed in when matched, and splits the string at that point.

## sub Function

The `sub()` function substitutes a match with a string of your choice:

```python
import re

example = "I pledge allegiance."

results = re.sub("le", "ABC", example)
print(results)
```

```bash
I pABCdge alABCgiance.
```

## Special Sequences

In addition to string literals, you can use **special sequences** in your regular expressions to make them more powerful.

Here is a list of the special sequences you can use:

-   `.`: Matches any character
-   `\w`: Matches an alphanumeric character (includes underscores)
-   `\W`: Matches a non-alphanumeric character (excludes underscores)
-   `\b`: Space between word and non-word characters
-   `\s`: Matches a single whitespace character
-   `\S`: Matches a non-whitespace character
-   `\t`: Matches a tab
-   `\n`: Matches a newline
-   `\r`: Matches a return
-   `\d`: Matches a numeric character
-   `\^`: Matches the start of a string
-   `\$`: Matches the end of a string
