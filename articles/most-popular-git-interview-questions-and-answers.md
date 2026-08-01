---
id: 351
title: Most Popular Git Interview Questions and Answers
slug: most-popular-git-interview-questions-and-answers
excerpt: A comprehensive list of the most important and commonly asked Git interview questions and answers with detailed explanations.
difficulty: intermediate
publishedDate: "2023-04-02T07:16:32.000Z"
updatedDate: "2025-09-16T23:05:37.412Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - git
tags:
  - git-interview-questions
  - git-fetch-vs-pull
  - git-merge-conflict
  - git-stash
  - git-cherry-pick
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

### 1. What is Git?

Git is the most popular, open-source, widely used, and an example of a distributed version control system (DVCS) used for handling the development of small and large projects more efficiently and neatly.

It is most suitable when multiple people are working on projects as a team and is used for tracking the project changes and efficiently supports the collaboration of the development process.

Git is a version control system for tracking changes in computer files and is used to help coordinate work among several people on a project while tracking progress over time. In other words, it’s a tool that facilitates source code management in software development. In case of any unforeseen circumstances, the code can be reverted to any of the previously working versions thereby saving huge efforts.

### 2. What is a Git repository?

A Git repository refers to a place where all the Git files are stored. These files can either be stored on the local repository or on the remote repository.

### 3. How can you initialize a repository in Git?

If you want to initialize an empty repository to a directory in Git, you need to enter the git init command. After this command, a hidden .git folder will appear.

```bash
test$ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m
Initialized empty Git repository in /Users/npangirahy/Documents/test/.git/
```

### 4. How is Git different from Subversion (SVN)?

|  |  |
| --- | --- |
| GIT | SVN |
| Git is a distributed decentralized version control system | SVN is a centralized version control system. |
| Git stores content in the form of metadata. | SVN stored data in the form of files. |
| The master contains the latest stable release. | In SVN, the trunk directory has the latest stable release |
| The contents of Git are hashed using the SHA-1 hash algorithm. | SVN doesn?t support hashed contents. |

### 5. Name a few Git commands with their function.

-   Git config - Configure the username and email address
-   Git add - Add one or more files to the staging area
-   Git diff - View the changes made to the file
-   Git init - Initialize an empty Git repository
-   Git commit - Commit changes to the head but not to the remote repository

### 6. Difference between git fetch and git pull.

| Git Fetch | Git Pull |
| --- | --- |
| The Git fetch command only downloads new data from a remote repository. | Git pull updates the current HEAD branch with the latest changes from the remote server. |
| It does not integrate any of these new data into your working files. | Downloads new data and integrate it with the current working files. |
| Command - git fetch origingit fetch --all | Tries to merge remote changes with your local ones.Command - git pull origin master |

### 7. What do you understand about the Git merge conflict?

A Git merge conflict is an event that occurs when Git is unable to resolve the differences in code between the two commits automatically.

Git is capable of automatically merging the changes only if the commits are on different lines or branches.

### 8. What is the process to revert a commit that has already been pushed and made public?

There are two processes through which you can revert a commit: Remove or fix the bad file in a new commit and push it to the remote repository. Then commit it to the remote repository using:

```bash
git commit –m “commit message”
```

Create a new commit to undo all the changes that were made in the bad commit. Use the following command:

```bash
git revert
```

### 9. What is Git stash?

Let’s say you're developing a module for software and you want to switch branches to work on something else. The issue is you don’t want to make commits in uncompleted work, so you just want to get back to this point later. The solution here is the Git stash.

Git stash takes your modified tracked files and saves them on a stack of unfinished changes that you can reapply at any time. To go back to the work you can use the stash pop.

### 10. What is the difference between fork, branch, and clone?

**Fork** The fork is the process when a copy of the repository is made. It's usually experimentation in the project without affecting the original project. They’re used to advise changes or take inspiration from someone else’s project.

**Branch** Git branches refer to individual projects within a git repository. If there are several branches in a repository, then each branch can have entirely different files and folders.

**Clone** Git clone refers to creating a clone or a copy of an existing git repository in a new directory. Cloning automatically creates a connection that points back to the original repository, which makes it very easy to interact with the central repository.

### 11. What is git cherry-pick??

The command `git cherry-pick` enables you to pick up commits from a branch within a repository and apply it to another branch. This command is useful to undo changes when any commit is accidentally made to the wrong branch. Then, you can switch to the correct branch and use this command to cherry-pick the commit.

### 12. What is the command used to delete a branch?

-   To delete a branch we can simply use the command `git branch –d [head]`.
-   To delete a branch locally, we can simply run the command: `git branch -d <local_branch_name>`
-   To delete a branch remotely, run the command: `git push origin --delete <remote_branch_name>`
-   Deleting a branching scenario occurs for multiple reasons. One such reason is to get rid of the feature branches once it has been merged into the development branch.
