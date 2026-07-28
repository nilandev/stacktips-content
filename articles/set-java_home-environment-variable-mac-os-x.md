---
id: 216
title: How to set JAVA_HOME Environment Variable MacOS
slug: set-java_home-environment-variable-mac-os-x
excerpt: In this tutorial, we show you how to set $JAVA_HOME environment variable on your Mac OS X
difficulty: beginners
publishedDate: "2014-06-23T09:30:35.000Z"
updatedDate: "2025-09-16T23:05:31.061Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/287/thumbnail.png
topics: 
  - c
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this tutorial, we show you how to set $JAVA\_HOME environment variable on your Mac OS X.

## Mac OSX 10.5.x or later

Open the Terminal program present in your (this is in your Applications/Utilities folder by default). Follow the below steps.

### Step-1 Open and edit .bash\_profile file

```
open -e .bash_profile
```

### Step-2 Save the below line

```
export JAVA_HOME=$(/usr/libexec/java_home
```

### Step-3 Refresh the file using below command

```
$ source .bash_profile
```

### Step-4 Check if the JAVA\_HOME is set properly

```
$ echo$JAVA_HOME
/Library/Java/JavaVirtualMachines/1.7.0.jdk/Contents/Home
```

## **For Older Mac OS X**

For older Mac OS X, you have to use the full path of installation directory as it /usr/libexec/java\_home doesn’t exists.

```
$ open -e .bash_profile
$ exportJAVA_HOME=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
$ source .bash_profile

$ echo$JAVA_HOME
/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
```
