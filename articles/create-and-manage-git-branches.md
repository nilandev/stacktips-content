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
  - git
tags:
  - git-branch-commands
  - git-checkout-branch
  - git-branch-from-terminal
  - delete-git-branch
course: null
displayOrder: 0
seo: 
  metaTitle: "Create and Manage Git Branches from the Command Line"
  metaDescription: "A handy list of git commands for creating, switching, pushing, and deleting branches straight from your terminal."
  metaKeywords: null
---

Whenever you want to commit a bug or a new feature, you need to create a branch for it, which will be a copy of your master branch. Once your fixes are ready to merge, you typically create a pull request on your new branch. The reason for this is to keep your master branch clean all the time.

## 1. Create a New Git Branch

Here is a list of some useful commands to help you create and manage a new branch. Please note, that before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

Create the branch on your local machine and switch to this branch:

```bash
$ git checkout -b <new branch name>
```

Change working branch:

```bash
$ git checkout <new branch name>
```

Push the branch to remote git:

```bash
$ git push origin <new branch name>
```

When you want to commit something in your branch, be sure to be in your branch. Add -u parameter to set-upstream.

## 2. View Git Branches

You can see all the local branches by using:

```bash
$ git branch
```

View list of all branches, including remote branches:

```bash
$ git branch -a
```

View list of only remote branches:

```bash
$ git branch -r
```

## 3. Push Branch to Remote

Add a new remote for your branch:

```bash
$ git remote add <remote branch name>
```

Push changes from your commit into your branch:

```bash
$ git push <new branch remote name>  <new branch name>
```

Update your branch when the original branch from the official repository has been updated:

```bash
$ git fetch <remote branch name>
```

Then you need to apply to merge changes if your branch is derivated from the develop you need to do:

```bash
$ git merge <name of remote branch>/develop
```

## 4. Delete Git Branch

Delete local branch: -d option stands for –delete

```bash
$ git branch -d <branch_name>
```

Git local branch force: -D option stands for –delete –force

```bash
$ git branch -D <branch_name>
```

Delete a remote Git branch

```bash
$ git push origin --delete <branch_name>
```
