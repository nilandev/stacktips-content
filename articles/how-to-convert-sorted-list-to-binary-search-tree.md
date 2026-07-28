---
id: 424
title: How to Convert Sorted List to Binary Search Tree
slug: how-to-convert-sorted-list-to-binary-search-tree
excerpt: Given a singly linked list where elements are sorted in ascending order, write a java program to convert it to a height-balanced Binary Search Tree (BST).
difficulty: intermediate
publishedDate: "2024-01-23T07:53:21.000Z"
updatedDate: "2025-09-16T23:05:40.665Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/how-to-convert-sorted-list-to-binary-search-tree.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced Binary Search Tree (BST).

To convert a sorted singly linked list to a height-balanced Binary Search Tree (BST), we will use the recursive approach. The key idea is to find the middle element of the linked list, make it the root of the BST, and then recursively do the same for the left and right halves of the linked list.

#### Java implementation

```
class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class SortedListToBST {
    private TreeNode sortedListToBST(ListNode head) {
        if (head == null) {
            return null;
        }

        return sortedListToBST(head, null);
    }

    private TreeNode sortedListToBST(ListNode head, ListNode tail) {
        if (head == tail) {
            return null;
        }

        ListNode slow = head;
        ListNode fast = head;

        // Using the slow and fast pointers to find the middle element
        while (fast != tail && fast.next != tail) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // The root node with the middle element
        TreeNode root = new TreeNode(slow.val);

        // Recursively build the left and right subtrees
        root.left = sortedListToBST(head, slow);
        root.right = sortedListToBST(slow.next, tail);

        return root;
    }

    public static void main(String[] args) {
        // Example usage
        SortedListToBST converter = new SortedListToBST();

        // Create a sorted linked list
        ListNode head = new ListNode(-10);
        head.next = new ListNode(-3);
        head.next.next = new ListNode(0);
        head.next.next.next = new ListNode(5);
        head.next.next.next.next = new ListNode(9);

        // Convert the linked list to a balanced BST
        TreeNode result = converter.sortedListToBST(head);

        System.out.println("Inorder traversal of the resulted BST:");
        inorderTraversalBST(result);
    }

    private static void inorderTraversalBST(TreeNode result) {
        if (result != null) {
            inorderTraversalBST(result.left);
            System.out.print(result.val + " ");
            inorderTraversalBST(result.right);
        }
    }
}
```

**Output**

```
Inorder traversal of the resulted BST:
-10 -3 0 5 9
```

### Complexity Analysis

```
Time Complexity: O(n)
Space Complexity: O(log n) (call stack) + O(n) (additional space)
```

#### Time Complexity

-   The time complexity is mainly determined by the recursive method to convert the sorted linked list to a balanced BST. In each recursive call, we perform constant-time operations, such as creating nodes and updating pointers.
-   The number of recursive calls is proportional to the number of nodes in the linked list.
-   Therefore, the time complexity is **O(n)**, where **n** is the number of nodes in the linked list.

#### Space Complexity

-   The space complexity is influenced by the space required for the recursive calls on the call stack.
-   In the worst case, the maximum depth of the recursion is equal to the height of the balanced BST.
-   The height of a balanced BST constructed from a sorted linked list is approximately `log₂(n)`, where n is the number of nodes.
-   Therefore, the space complexity of the call stack is `O(log n)`.
-   There is additional space required for the linked list nodes and the BST nodes. However, these contribute at `most O(n)` to the space complexity.
