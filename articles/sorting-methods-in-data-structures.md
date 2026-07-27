---
id: 231
title: Sorting Methods In Data Structures
slug: sorting-methods-in-data-structures
excerpt: Sorting is the problem of taking an arbitrary permutation of n items and rearranging them into the total order. Sorting algorithms are used in all kinds of applications and are necessary for instance, if we plan to use efficient searching algorithms like Binary Search or Interpolation Search since these require their data to be sorted.
difficulty: beginners
publishedDate: "2014-05-22T05:18:42.000Z"
updatedDate: "2025-09-16T23:05:31.564Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/302/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Retrieval of information is made easier when it is stored in some predefined order. Sorting is, therefore, a very important computer application activity. Many sorting algorithms are available. Differing environments require differing sorting methods.

Sorting algorithms can be characterized in the two ways

1.  Simple algorithms which require the order of n2 (written as O (n2) comparisons to sort n items.
2.  Sophisticated algorithms that require the O(nlog2n) comparisons to sort items.

The difference lies in the fact that the first method move data only over small distances in the process of sorting, whereas the second method method large distances, so that items settle into the proper order sooner, thus resulting in fewer comparisons. Performance of a sorting algorithm can also depend on the degree of order a heady present in the data.

There are two basic categories of sorting methods:

1.  Internal Sorting
2.  External Sorting

Internal sorting are applied when the entire collection of data to be sorted is small enough that the sorting can take place within main memory. The time required to read or write is not considered to be significant in evaluating the performance of internal sorting methods. External sorting methods are applied to larger collection of data which reside on secondary devices read and write access time are major concern in determine sort performances.

## Overview of Sorting Methods

In my previous post on Binary search, searching data was efficient when the array was sorted. Indeed, sorting method is one of the most common operation in computing. The general sorting problem is simple enough to describe; Given an initially un-ordered array of N records, with one field distinguished as the key, rearrange the records so they are sorted into increasing (or decreasing) order according to each record’s key.

Sorting is the problem of taking an arbitrary permutation of n items and rearranging them into the total order.

-   **Increasing or Decreasing Order?** The same algorithm can be used by both all we need do is change condition in the comparison function as we desire.
-   **What about equal keys?** Does the order matter or not? May be we need to sort on secondary keys or leave in the same order as the original permutations.
-   **What about non-numerical data?** Alphabetizing is sorting text strings and libraries have very complicated rules concerning punctuation etc. Is Brown-Williams before or after Brown America before or after Brown John?

Sorting algorithms are used in all kinds of applications and are necessary for instance, if we plan to use efficient searching algorithms like Binary Search or Interpolation Search since these require their data to be sorted.

There are dozens of algorithms, the choice of which depends on factors such as the number of items relative to working memory, knowledge of the orderliness of the items or the range of the keys, the cost of comparing keys vs. the cost of moving items, etc.

To choose an algorithm we attempt to characterize the performance of the algorithm with respect to an array of size N. We then determine which operations are critical for each type of problem. There is an memory overhead need to be taken into consideration, before opting for an efficient sorting algorithm.

Following are several points you must think before choosing an algorithm.

1.  Number of times it compares an element in the array to another value (comparisons) or
2.  Number of times it moves an element from or to a position in the array (swaps).
3.  Amount of extra memory used by a sort is important.
4.  Sometimes, when sorting an extremely large data set such as Census Data, there are simply, too many records for them to all fit in memory at once. In this case, we have to resort to external sorting algorithms that don’t assume we have random access to the data. Instead, these algorithms assume the data is stored on magnetic tapes or disks and only portions of the data will fit in memory. These algorithms use “sequential access” to the data and proceed by reading in, processing, and writing out blocks of records at a time. These partially sorted blocks need to be combined or merged in some manner to eventually sort the entire list.
5.  One final Issue to keep in mind when Implementing a sorting algorithm is the size of the records themselves. Many sorting algorithms move and interchange records in memory several times before they are moved into their final sorted position, For large records, this can add up to lots of execution time spent simply copying data. A popular solution to this problem is called “indirect sorting”. The Idea is to sort the indices of the records, rather than the records themselves.

## How do you sort?

There are several different ideas using which you can write sorting algorithms.

1.  [**Insertion**](http://stacktips.com/c/insertion-sort-example-in-data-structure "Insertion Sort Example In Data Structure") – putting an element in the appropriate place in a sorted list yields a larger sorted list.
2.  **Exchange** – rearrange pairs of elements which are out of order, until no such pairs remain.
3.  **[Selection](http://stacktips.com/c/selection-sort-example-data-structure "Selection Sort Example In Data Structure")** – extract the largest element form the list, remove it, and repeat.
4.  **Distribution** – separate into piles based on the first letter, then sort each pile.
5.  **Merging** -Two sorted lists can be easily combined to form a sorted list.

There are many different methods used for sorting. Quite frequently, a combination of these above methods are used to perform a sort operation. The four common sorting methods are selection, insertion, comparison, and divide and conquer.

1.  **Priority queue sorting methods**: Example: Selection Sort and Heap Sort
2.  **Divided-and-conquer method:** Example: MergeSort and Quicksort
3.  **Insertion based sort:** Example: InsertionSort
4.  **Other methods:Example:** [BubbleSort](http://stacktips.com/c/bubble-sort-example-data-structure "Bubble Sort Example In Data Structure") and ShellSort
