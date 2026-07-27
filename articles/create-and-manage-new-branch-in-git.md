---
id: 246
title: Create and Manage a New Branch in Git
slug: create-and-manage-new-branch-in-git
excerpt: Useful git commands for creating and managing new branch in git.
difficulty: beginners
publishedDate: "2014-04-08T12:42:14.000Z"
updatedDate: "2025-09-16T23:05:32.291Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/316/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Find some of the useful git commands for creating and managing a new branch in git.

## 1\. Create a New Branch in Git

You may need to create a branch anytime during development for keeping your clean to your master branch. Usually, we create a new branch by copying the master or current branch code. Branches can be merged to master or other branches.

Remember to keep your master clean before creating a new branch. Commit and sync your uncommitted changes, if any in your local repository. Open your Git Shell and follow the below git commands to create a new branch on your local machine:

$ git branch <name\_of\_your\_new\_branch>

Once your branch is created you will push the branch on GitHub remote by using the below commands

$ git push origin <name\_of\_your\_new\_branch>

## 2\. Switch to your new branch

$ git checkout <name\_of\_your\_new\_branch>

## 3\. List all branches created

$ git branch

## 4\. Adding files/folders to the branch

Now you may add some new files or folders to this branch. Either you may create a new file using your vim editor or you may paste the files and folders using your file explorer. When you want to commit something in your branch, be sure to be in your branch. Before committing you must all new files/folders using the below command.

$ git add-A

$ git push origin <new branchName>

## 5\. Delete a git branch

The first git command deletes the branch on your local file system and the second command deletes branch in Github

$ git branch -d <name\_of\_your\_new\_branch>
$ git push origin :<name\_of\_your\_new\_branch>
