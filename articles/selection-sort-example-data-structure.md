---
id: 228
title: Selection Sort Example In Data Structure
slug: selection-sort-example-data-structure
excerpt: A selection sort is slightly more complicated. but relatively easy to understand and to code. It is one of the slow sorting technique. Given an unsorted array of integer values, a selection sort visits each element of the array, in turn.
difficulty: beginners
publishedDate: "2014-05-22T11:19:28.000Z"
updatedDate: "2025-09-16T23:05:31.433Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/299/thumbnail.png
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example we explain selection sort in data structure. A selection sort is slightly more complicated. but relatively easy to understand and to code. It is one of the slow sorting technique. Given an unsorted array of integer values, a selection sort visits each element of the array, in turn. As it visits an element, it employs a second index to scan the array from the present location to the end while it identifies the least (smallest) value in that segment of the array. It then swaps that least value with the current value. Because one index scans the array once while another index scans part of the array each time, this sort algorithm is also O(n2).

Simple steps for selection sort. \[Assume we are sorted the n items in array A\] for i = 1 to n do

for j = j+1 to n do

if A\[i\] > A\[j\] then swap(A\[i\],A\[j\])

## Example: C program, Function to arrange number in ascending order using Selection sort technique.

```c
#include<stdio.h>
void selection_sort(int a[],int n);
{
    int i,j,pos,small,temp;
    for(i=0;i<n-1;i++)
    {
        small=a[i]; /* Initial small number in ith pass */
        pos=i; /* Position of smaller number */
        /* Find the minimum of remaining elements along with the position */
        for(j=i+1;j<n;j++)
        {
            if(a[i]<small)
            {
                small=a[j];
                pos=j;
            }
        }
        
        /* Exchange ith item with least item */
        temp=a[pos];
        a[pos] = a[i];
        a[i]=temp;
    }
}

void main()
{
    int i,n,a[20];
    printf("Enter the number of elements to sort");
    scanf("%d",&n);
    printf("Enter %d elements to sort ",n);
    for(i=0;i<n;i++)
    scanf("%d",&a[i]);
    selection_sort(a,n)
    printf("The sort elements are");
    for(i=0;i<n;i++)
    printf("%d",&a[i]);
}
```
