---
id: 23
title: Create and Manage Git Branches from Command Line
slug: create-and-manage-git-branches
excerpt: "List of useful git commands to help you create and manage git branches from your terminal. Be Smart!! Never go away from your terminal."
difficulty: beginners
publishedDate: "2018-09-14T17:15:10.000Z"
updatedDate: "2025-09-16T23:05:20.847Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/20/thumbnail.png
topics: 
  - react
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Whenever you want to commit a bug or a new feature, you need to create a branch for it, which will be a copy of your master branch. Once your fixes are ready to merge, you typically create a pull request on your new branch. The reason for this is to keep your master branch clean all the time.

## 1\. Create a New Git Branch

Here is a list of some useful commands to help you create and manage a new branch. Please note, that before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

Create the branch on your local machine and switch to this branch:

```c
$ git checkout -b <new branch name>
```

Change working branch:

```c
$ git checkout <new branch name>
```

Push the branch to remote git:

```c
$ git push origin <new branch name>
```

When you want to commit something in your branch, be sure to be in your branch. Add -u parameter to set-upstream.

## 2\. View Git Branches

You can see all the local branches by using:

```c
$ git branch
```

View list of all branches, including remote branches:

```c
$ git branch -a
```

View list of only remote branches:

```c
$ git branch -r
```

## 3\. Push Branch to Remote

Add a new remote for your branch:

```c
$ git remote add <remote branch name>
```

Push changes from your commit into your branch:

```c
$ git push <new branch remote name>  <new branch name>
```

Update your branch when the original branch from the official repository has been updated:

```c
$ git fetch <remote branch name>
```

Then you need to apply to merge changes if your branch is derivated from the develop you need to do:

```c
$ git merge <name of remote branch>/develop
```

## 4\. Delete Git Branch

Delete local branch: -d option stands for –delete

```c
$ git branch -d <branch_name>
```

Git local branch force: -D option stands for –delete –force

```c
$ git branch -D <branch_name>
```

Delete a remote Git branch

```c
$ git push origin --delete <branch_name>
```
