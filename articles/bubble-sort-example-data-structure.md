---
id: 229
title: Bubble Sort Example In Data Structure
slug: bubble-sort-example-data-structure
excerpt: In this example, we will see Bubble sort algorithm with example. In bubble sort we’ll compare each element of list to the element that follows it. If the current element is greater than the element at next location, then they are in the wrong order, and we’ll swap them.
difficulty: beginners
publishedDate: "2014-05-22T11:09:32.000Z"
updatedDate: "2025-09-16T23:05:31.472Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/300/thumbnail.png
topics: 
  - xamarin
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this example, we will see bubble sort example In data structure .

1.  In bubble sort we’ll compare each element of list to the element that follows it. If the current element is greater than the element at next location, then they are in the wrong order, and we’ll swap them. In this way, the element with large value will be percolate upward. Now the last element in the array is guaranteed to be where it belongs. In the next step we do exactly the same thing. Repeating the above step will result a sorted array.
2.  The bubble sort can be made to work in the opposite direction. moving the least value to the beginning of the array on each pass. This is sometimes referred to as a stone sort.
3.  In this sorting algorithm, multiple Swapping take place in one pass. Smaller elements move or ‘bubble’ up to the top of the list, hence the name given to the algorithm.
4.  In this method adjacent members of the list to be sorted are compared. If the item on top is greater than the item immediately below it, they are swapped. This process is carried on till the list is sorted.
5.  **Note:** At least one pass is required to check whether the items are sorted. So, the best case time complexity is O(1).

## Algorithm for Bubble Sort

INPUT: LIST \[\] of N items in random order
O UTPUT: LIST \[\] of N items sorted in ascending order.
1. SWAP = TRUE
PASS = 0/

2. WHILE SWAP = TRUE DO
BEGIN.

2.1 FOR I = 0 TO (N-PASS) DO
BEGIN

2.1.1 IFA\[I\] >A \[I+1\]
BEGIN
TMP = A\[I\]
A\[I\] = A\[I + 1\]
A\[I + 1\] = TMP
SWAP = TRUE
END
ELSE
SWAP = FALSE

2.1.2 PASS = PASS + 1
END
END

## Example : C program, Function to arrange numbers in ascending order using bubble sort technique.

#include<stdio.h>

void bubble\_sort(int a\[\], int n)
{
    int i; /\* To access subsequent item while comparing\*/
    int j; /\* Keep track of the passes \*/
    int temp; /\* Used to exchange the item \*/
    int sum; /\* Holds the total number of exchanges \*/
    int pass; /\*Holds the number of passes required \*/
    int exchag; /\* Holds the number of exchanges in each pass \*/
    int flag; /\* Indicate any exchange has been done or not \*/
    sum = 0;
    pass = 0;
    
    for(j=1;j<n;j++)
    {
        exchg = 0; /\* number of exchanges just before the pass \*/
        flage = 0; /\* No exchange been done \*/
        for(i=0;i<n-j;i++)
        {
            if(a\[i\]>=a\[i+1\])
            {
                
                /\* Exchange and update the number of exchange in the current pass\*/
                temp=a\[i\];
                a\[i\]=a\[i+1\];
                a\[i+1=temp;
                exchg++;
                sum++ /\* Update the total number of exchanges \*/
                flag=1; /\* Exchange has been done \*/
            }
        }
        
        pass++; /\* update the number of passes \*/
        printf("Number of exchanges in pass : %d=%dn",j,exchg);
        print("Total number of exchanges = %dn",sum);
    }
    
    void main()
    {
        int i,n,a\[20\];
        printf("Enter the number of items to sort");
        scanf("%d",&n);
        print("Enter the items to sort");
        for(i=0;i<n;i++)
        scanf("%d",&a\[i\]);
        bubble\_sort(a,n);
        printf("The sorted items are");
        for(i=0;i<n;i++)
        {
            printf("%dn",a\[i\]);
        }
    }
