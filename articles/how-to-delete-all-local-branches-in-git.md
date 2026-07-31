---
id: 19
title: How to Delete all Local Branches in Git?
slug: how-to-delete-all-local-branches-in-git
excerpt: "Code snippet to delete all other local branches except master, develop or release/* in your local machine."
difficulty: beginners
publishedDate: "2022-04-12T01:14:26.000Z"
updatedDate: "2025-09-16T23:05:20.212Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/10/thumbnail.png
topics: 
  - git
tags:
  - git-delete-local-branches
  - git-branch-cleanup-script
  - git-for-each-ref
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Delete All Local Branches in Git"
  metaDescription: "A ready-to-use shell script to bulk delete local Git branches while keeping master, develop, and release/* branches intact."
  metaKeywords: null
---

When working with a larger team and with a proper Git flow process, the number of local feature branches are grows in your local machine. Not that they do any harm to your project, but they can get quite confusing at times. This little code snippet will be able to delete all other local branches except master, develop or release/\*.

Create a file named, `deleteLocalGitBranches.sh` and add the following code snippet.

```bash
#!/bin/bash
# Move to master branch. Delete all other local branches except master, develop, release/* or project/*

# Move to master branch
git checkout master

# Collect branches
branches=()
eval "$(git for-each-ref --shell --format='branches+=(%(refname))' refs/heads/)"

for branch in "${branches[@]}"; do
  old="refs/heads/"
  branchName=${branch/$old/}
  if [[ "$branchName" != "master" && "$branchName" != "develop" &&  "$branchName" != "release/"* ]]; then
    git branch -D $branchName
  fi
done
```

Now run the shell script

```bash
$ ./deleteLocalGitBranches.sh
```
