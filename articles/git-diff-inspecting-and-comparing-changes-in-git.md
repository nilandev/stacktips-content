---
id: 18
title: Git Diff – Inspecting and Comparing Changes in Git
slug: git-diff-inspecting-and-comparing-changes-in-git
excerpt: The git diff command helps you see, compare, and understand changes in your project before you can push your code to the server
difficulty: beginners
publishedDate: "2022-04-12T01:33:31.000Z"
updatedDate: "2025-09-16T23:05:20.133Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/9/thumbnail.png
topics: 
  - git
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The git `diff` command helps you see, compare, and understand changes in your project before you can push your code to the server. It can be used to look at current changes in your working copy, past changes in commits, or even to compare branches.

In this short article, we’ll talk about the most important use cases you need in your daily work.

## Look for what changed since I last committed?

Running the plain git diff command without any parameters can be pretty helpful: it will show you all of your local changes since you last committed.

```
$ git diff
```

When you want to do a git diff but do not care about the full diff and just want to know which files changed

```
$ git diff --name-only
```

To include some brief information about changed lines

```
$ git diff --stat
```

## View changes in staging area?

By adding the `--staged` option, Git will show which local changes you have already added to Staging Area, via “git add”:

\# Staged changes in a certain file…

```
$ git diff --staged index.html
```

\# Staged changes in all local files…

```
$ git diff --staged
```
