---
id: 417
title: How to Install Java for MacOS and Windows?
slug: how-to-install-java-for-macos-and-windows
excerpt: This post explains how to install Java on MacOS and Windows OS using SDKMan, Homebrew, and using the Windows installer.
difficulty: beginner
publishedDate: "2022-09-24T22:44:07.000Z"
updatedDate: "2025-09-16T23:05:40.304Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - install-java-macos
  - sdkman-java
  - install-openjdk-homebrew
  - java-windows-installer
course: null
displayOrder: 0
seo: 
  metaTitle: "How to Install Java on macOS and Windows"
  metaDescription: "Step-by-step guide to installing Java on macOS using SDKMAN and Homebrew, and on Windows using the official installer, with version-check commands."
  metaKeywords: null
---

You have two choices when it comes to installing Java. You either use the Oracle JDK or OpenJDK. Oracle JDK offers all the features of Open JDK, plus some proprietary features and commercial support from Oracle.

Open JDK is the open source version of Java and it is free to use for both personal and commercial projects.

There are many different distributions of OpenJDK available, some of the popular distributions are Amazon Corretto, Microsoft JDK, Azul Zulu, and Red Hat OpenJDK.

In this article, we show you how to install Java on Mac using **SDKMan** and **Homebrew** and using windows installer.

## Install Java Using SDKMan

SDKMan is a command line utility used for managing multiple versions of SDKs. This works for MacOS and Linux, Windows WSL.  SDKMan simplifies the installation, management, and switching between different versions of Java SDK effortlessly.

To get the list of available java SDK's using SDKMan, use

```bash
sdk list java
```

This will return a list of all available Java versions

![](/media/summernote/install_java_in_mac_using_homebrew.png)  

You can filter a specific Java version using \`grep\` command.  

```bash
sdk list java | grep 17
```

Now to install a specific version, you need to use the distribution identifier

```bash
sdk install java 21-amzn
```

To check the list of installed Java versions

```bash
sdk list java | grep installed
```

Use specific versions of Java

```bash
sdk use java 21-amzn
```

## Install Java in Windows OS

For instructions on how to install using the graphical `PKG` and `MSI` installers, or through package managers `WinGet`, `Homebrew`, `apt`, and `yum`, see the [Install](https://learn.microsoft.com/en-us/java/openjdk/install) page.

To ensure that Java is installed correctly, open a Command Prompt or PowerShell window and enter the following command.

```bash
java -version
```

## Install Java using Homebrew

-   Install and upgrade [Homebrew](https://brew.sh/).

-   Type `brew search openjdk` to find all available Java-related formulas.

```bash
$ brew search openjdk
==> Formulae
openjdk ✔           openjdk@11          openjdk@17 ✔        openjdk@8

==> Casks
adoptopenjdk       homebrew/cask-versions/adoptopenjdk8
microsoft-openjdk  homebrew/cask-versions/microsoft-openjdk11
openkey
```

To show the formula details, you can use the `brew info` command. The Java formula always contains the latest OpenJDK version; at the time of writing, the latest is JDK 17.

The `openjdk@17` formula contains the Java 17LTS version

```bash
$ brew info openjdk@17
==> openjdk@17: stable 17.0.4.1 (bottled) [keg-only]
Development kit for the Java programming language
https://openjdk.java.net/
/usr/local/Cellar/openjdk@17/17.0.4.1_1 (639 files, 305.6MB)
  Poured from bottle on 2023-09-25 at 00:00:57
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/openjdk@17.rb
License: GPL-2.0-only with Classpath-exception-2.0
==> Dependencies
Build: autoconf ✘
==> Requirements
Build: Xcode ✔
==> Caveats
For the system Java wrappers to find this JDK, symlink it with
  sudo ln -sfn /usr/local/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk

openjdk@17 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have openjdk@17 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc

For compilers to find openjdk@17 you may need to set:
  export CPPFLAGS="-I/usr/local/opt/openjdk@17/include"

==> Analytics
install: 30,649 (30 days), 82,462 (90 days), 154,946 (365 days)
install-on-request: 20,080 (30 days), 52,615 (90 days), 88,978 (365 days)
build-error: 65 (30 days)
```

Now install the Open JDK 17:

```bash
brew install openjdk@17
```
