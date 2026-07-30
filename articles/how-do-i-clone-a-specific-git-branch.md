---
id: 17
title: How Do I Clone a Specific Git Branch?
slug: how-do-i-clone-a-specific-git-branch
excerpt: The git clone is a command-line utility which is used to make a local copy of a remote repository. It accesses the repository through a remote URL.
difficulty: beginners
publishedDate: "2022-04-13T04:29:26.000Z"
updatedDate: "2025-09-16T23:05:20.091Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/8/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The git clone is a command-line utility that is used to make a local copy of a remote repository. It accesses the repository through a remote URL. Usually, the original repository is located on a remote server, often from a Git service like GitHub, Bitbucket, or GitLab.

##### To clone a repository

```bash
git clone <remote_repo>
```

The above command fetches all the branches and checking out one (default master). That may, for instance, mean that your repository has a 5kB documentation or wiki branch and 5GB data branch. And whenever you want to edit your front page, you may end up cloning 5GB of data.

##### To clone a specific branch from repository

With Git 1.7.10 and later, add –single-branch to prevent fetching of all branches. Example:

```bash
git clone -b feature-001-branch --single-branch <remote_repo>
```
