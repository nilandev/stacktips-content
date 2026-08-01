---
id: 234
title: Searching Methods in Data Structure
slug: searching-methods-in-data-structure
excerpt: Searching methods are designed to take advantage of the file organisation and optimize the search for a particular record or to establish its absence. The file organisation and searching method chosen can make a substantial difference to an application’s performance.
difficulty: beginners
publishedDate: "2014-05-21T20:07:38.000Z"
updatedDate: "2025-09-16T23:05:31.700Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/305/thumbnail.png
topics: 
  - data-structures
tags:
  - linear-search-algorithm
  - binary-search-algorithm
  - hash-table-search
  - big-o-notation
  - data-structure-searching
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

# Introduction

Information retrieval is one of the most important applications of computers. It usually involves giving a piece of information called the key, and ask to find a record that contains other associated information. This is achieved by first going through the list to find if the given key exists or not, a process called searching. Computer systems are often used to store large amounts of data from which individual records must be retrieved according to some search criterion. The process of searching for an item in a data structure can be quit straightforward or very complex.

Searching can be done on internal data structures or on external data structures. Information retrieval in the required format is the central activity in all computer applications. This involves searching. This block deals with searching techniques. Searching methods are designed to take advantage of the file organisation and optimize the search for a particular record or to establish its absence. The file organisation and searching method chosen can make a substantial difference to an application’s performance.

# Objectives

In this series of tutorial, you’ll be able to understand the following

1.  Brief discussion on Basics Searching Techniques.
2.  Algorithmic Notation such as The average time, The worst-case time and, The best possible time.

# Basics Searching Techniques

Consider a list of n elements or can represent a file of n records, where each element is a key / number. The task is to find a particular key in the list in the shortest possible time. If you know you are going to search for an item in a set, you will need to think carefully about what type of data structure you will use for that set. At low level, the only searches that get mentioned are for sorted and unsorted arrays. However, these are not the only data types that are useful for searching.

## [1. Linear search](http://stacktips.com/c/sequential-search-or-linear-search-data-structure)

Start at the beginning of the list and check every element of the list. Very slow \[order O(n) \] but works on an unsorted list. [Read Linear Search more in detailed](http://stacktips.com/c/sequential-search-or-linear-search-data-structure).

## [2. Binary Search](http://stacktips.com/c/binary-search-algorithm-data-structure)

This is used for searching in a sorted array. Test the middle element of the array. If it is too big. Repeat the process in the left half of the array, and the right half if it’s too small. In this way, the amount of space that needs to be searched is halved every time, so the time is O(log n). [Read Binary Search more in detailed](http://stacktips.com/c/binary-search-algorithm-data-structure).

## 3. Hash Search

Searching a hash table is easy and extremely fast, just find the hash value for the item you’re looking for then go to that index and start searching the array until you find what you are looking for or you hit a blank spot. The order is pretty close to o(1), depending on how full your hash table is.

## 4. Binary Tree search

Search a binary tree is just as easy as searching a hash table, but it is usually slower (especially if the tree is badly unbalanced). Just start at the root. Then go down the left subtree if the root is too big and the right subtree if is too small. Repeat until you find what you want or the sub-tree you want isn’t there. The running time is O(log n) on average and O(n) in the worst case.

# Algorithmic Notation

Let’s examine how long it will take to find an item matching a key in the collections. We are interested in:

1.  The average time
2.  The worst-case time and
3.  The best possible time.

However, we will generally be most concerned with the worst-case time as calculations based on worst-case time can lead to guaranteed performance predictions. Conveniently, the worst-case time are generally easier to calculate than average time. If there are n items in our collection whether it is stored as an array or as linked list-then it is obvious that in the worst case, when there is no item in the collection with the desired key, then n comparisons of the key with keys of the items in the collection will have to be made. To simplify analysis and comparison of algorithms, we look for a dominated operation and count the number of times that dominant operation has to be performed. In the case of searching, the dominant operation is the comparison, since the search requires n comparisons in the worst case, we say this is O(n), (pronounced as big-Oh-n or Oh-n) algorithm.

**The best case-in which the first comparison returns a match-requires a single comparison and is O(1).** The average time depends on the probability that the key will be found in the collection-this is something that we would not expected to know in the majority of cases. Thus in this case, as in most others, estimation of the average time is of little utility. If the performance of the system is vital, i.e. it’s part of a life-critical system, then we must use the worst case in our design calculations as it represents the best guaranteed performance.
