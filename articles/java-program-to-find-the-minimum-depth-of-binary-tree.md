---
id: 425
title: Java Program to Find the Minimum Depth of Binary Tree
slug: java-program-to-find-the-minimum-depth-of-binary-tree
excerpt: Given a binary search tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
difficulty: beginner
publishedDate: "2024-01-23T09:16:16.000Z"
updatedDate: "2025-09-16T23:05:40.699Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/java-program-to-find-the-minimum-depth-of-binary-tree.jpeg
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Given a binary search tree, find its minimum depth.

In a Binary Search Tree(BST), each node has at most two children, and the left child of a node contains values less than the node's value, and the right child contains values greater than the node's value. The depth of a node in a tree is the length of the path from the root node to that particular node. The depth of the root node is always 0, and the depth increases by 1 as you move down the tree towards the leaves.

Following example depicts the representation of BST.

![](/media/summernote/Binary_search_tree_example.png)  

In the above BST:

-   The depth of the node with value 8 is 0.
-   The depth of the node with value 3 is 1.
-   The depth of the node with value 10 is 1.
-   The depth of the node with value 1 is 2.
-   The depth of the node with value 6 is 2.
-   The depth of the node with value 14 is 2.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

### Java implementation

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class BinarySearchTreeDepth {
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        LinkedList<TreeNode> nodes = new LinkedList<>();
        LinkedList<Integer> counts = new LinkedList<>();
        nodes.add(root);
        counts.add(1);
        while (!nodes.isEmpty()) {
            TreeNode curr = nodes.remove();
            int count = counts.remove();
            if (curr.left != null) {
                nodes.add(curr.left);
                counts.add(count + 1);
            }
            if (curr.right != null) {
                nodes.add(curr.right);
                counts.add(count + 1);
            }
            if (curr.left == null && curr.right == null) {
                return count;
            }
        }
        return 0;
    }
}

Let us now write some unit tests to cover all scenarios like empty tree, tree with single node and a tree with depth 2.

```java
@Test
public void testMinDepth() {
    // Create a binary tree: 1 -> 2 -> 4 (leaf)
    //                         \
    //                          3 (leaf)
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);

    // Create an instance of BSTDepth
    BinarySearchTreeDepth bstDepth = new BinarySearchTreeDepth();

    // Test the minDepth method
    int result = bstDepth.minDepth(root);

    // The minimum depth in this case is 2
    assertEquals(2, result);
}

@Test
public void testMinDepthEmptyTree() {
    BinarySearchTreeDepth bstDepth = new BinarySearchTreeDepth();
    int result = bstDepth.minDepth(null);

    // The minimum depth of an empty tree is 0
    assertEquals(0, result);
}

@Test
public void testMinDepthSingleNodeTree() {
    TreeNode root = new TreeNode(1);
    BinarySearchTreeDepth bstDepth = new BinarySearchTreeDepth();
    int result = bstDepth.minDepth(root);

    // The minimum depth of a single-node tree is 1
    assertEquals(1, result);
}
```
