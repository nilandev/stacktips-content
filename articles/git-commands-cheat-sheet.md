---
id: 8
title: Git Commands Cheat Sheet
slug: git-commands-cheat-sheet
excerpt: A list of some commonly used Git commands to get you going with Git. 1. Configuring Git To…
difficulty: beginners
publishedDate: "2018-10-24T08:47:27.000Z"
updatedDate: "2025-09-16T23:05:20.500Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/articles/15/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

A list of some commonly used Git commands to get you going with Git.

## 1\. Configuring Git

To tell Git who you are, run the following two commands:

```bsh
$ git config --global user.name "King Kong"
$ git config --global user.email "king-kong@gmail.com"
```

Pretty colours for the git outputs in terminal:

```bsh
$ git config --global color.ui true
```

Get the list of configurations:

```bsh
$ git config --list
```

## 2\. Checkout Remote Project

Create a local copy of a remote repository  
git clone ssh://git@github.com/\[username\]/\[repository-name\].git

## 3\. Adding Local Project to Git

Initialize the local directory as a Git repository.

```bsh
$ git init
```

Add the files to your new local repository. This stages them for the first commit.

```bsh
$ git add .
```

Or, alternatively, you can add one by one file

```bsh
$ git add file1.txt file2.txt
```

To unstage a file:

```bsh
$ git reset HEAD file1.txt 
```

Commit the files that you’ve staged in your local repository

```bsh
$ git commit -m "Initial commit"
```

In Terminal, add the URL for the remote repository where your local repository will be pushed. Sets the new remote

```bsh
$ git remote add origin [REMOTE REPO URL]
```

Verifies the new remote URL

```bsh
$ git remote -v
```

Push the changes in your local repository to GitHub.

```bsh
$ git push -u origin master
```

## 4\. Git Difference

To view file diff in git before commit:

```bsh
$ git diff 
```

When you want to do a git diff but do not care about the full diff and just want to know which files changed

```bsh
$ git diff --name-only
```

To include some brief information about changed lines

```bsh
$ git diff --stat
```

The output of –stat is nicely coloured. If you want a more machine-readable output

```bsh
$ git diff --numstat
```

## 5\. Read Previous Git Commit

Show full log of the last commit:

```bsh
$ git show
```

Show log of last commit (summary only):

```bsh
git log -1
```

If you need just the commit message and nothing else.  
More elegantly – if you want a quick overview of your commits

```bsh
$ git log -1 --pretty=%B
```

Show log of last N commit:

```bsh
$ git log --oneline -5
```

## 6\. Working with Git Branches

View list local branches

```bsh
$ git branch
```

View list of all

```bsh
$ git branch -a
```

View list of remote branches

```bsh
$ git branch -r
```

## 7\. Sharing & Updating Projects

Push a branch to your remote repository

```bsh
$ git push origin <branch_name>
```

Push changes to the remote repository (and remember the branch)

```bsh
$ git push -u origin <branch_name>
```

Push changes to the remote repository (remembered branch)

```bsh
$ git push  
```

Delete a remote branch

```bsh
$ git push origin --delete <branch_name>
```

Update local repository to the newest commit

```bsh
$ git pull
```

Pull changes from the remote repository

```bsh
$ git pull origin <branch_name>
```

## 8\. Create and Manage Branches

If you’re a developer you probably have used it and are familiar with git workflow. Whenever you want to commit a bug or a new feature, you need to create a branch for it, which will be a copy of your master branch. Once your fixes are ready to merge, you typically create a pull request on your new branch. The reason for this is to keep your master branch clean all the time.

Here is the list of some useful commands to help you create and manage a new branch. Please note, before creating a new branch, pull the changes from upstream. Your master needs to be up to date.  
Create a git branch.

```bsh
$ git branch <new branch name>
```

Switch to a branch

```bsh
$ git checkout <branch name>
```

Create the branch on your local machine and switch in this branch:

```bsh
$ git checkout -b <new branch name>
```

Change the working branch:

```bsh
$ git checkout <new branch name>
```

Push the branch to remote git:

```bsh
$ git push origin <new branch name>
```

When you want to commit something in your branch, be sure to be in your branch. Add -u parameter to set upstream.

You can see all the branches created by using :

```bsh
$ git branch
```

Add a new remote for your branch:

```bsh
$ git remote add <remote branch name> 
```

Push changes from your commit into your branch :

```bsh
$ git push <new branch remote name>  <new branch name>
```

Update your branch when the original branch from the official repository has been updated:

```bsh
$ git fetch <remote branch name>
```

Then you need to apply to merge changes if your branch is derivated from develop you need to do:

```bsh
$ git merge <name of remote branch>/develop
```

## 9\. Delete Branch

Delete local branch: -d option stands for –delete

```bsh
git branch -d <branch_name>
```

Git local branch force: -D option stands for –delete –force

```bsh
git branch -D <branch_name>
```

Delete a remote GIT branch

```bsh
git push origin --delete <branch_name>
```

## 10\. Git Stashing

If you run git status, you can see your dirty state:

```bsh
$ git status
```

Now you want to switch branches, but you don’t want to commit what you’ve been working on yet; so you’ll stash the changes. To push a new stash onto your stack, run git stash or git stash save:

```bsh
$ git stash

$ git stash save "Stash message"
```

At this point, you can switch branches and do work elsewhere; your changes are stored on your stack. To see which stashes you’ve stored, you can use git stash list:

```bsh
$ git stash list

Outputs:
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

In this case, two stashes were done previously, so you have access to three different stashed works. You can reapply the one you just stashed by using the command shown in the help output of the original stash command: git stash apply.

If you want to apply one of the older stashes, you can specify it by naming it, like this: git stash apply stash@{2}. If you don’t specify a stash, Git assumes the most recent stash and tries to apply it:

```bsh
$ git stash apply

$ git stash apply stash@{1}
```

Delete a particular stash.

```bsh
$ git stash drop

$ git stash drop stash@{0}
```
