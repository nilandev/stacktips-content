---
id: 379
title: Local, Central, and Remote Repository in Maven
slug: local-central-remote-maven-repository
excerpt: Chapter 5, Local, Central, and Remote Maven Repository, walks you through the various repository types and how they can be configured in the settings.xml file. It also covers the order maven attempts to resolve the dependency from different repositories.
difficulty: beginner
publishedDate: "2024-01-08T13:36:10.000Z"
updatedDate: "2025-09-16T23:05:40.022Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - maven
tags:
  - maven-local-repository
  - maven-central-repository
  - maven-remote-repository-settings-xml
  - maven-dependency-resolution-order
course: maven-for-beginners
displayOrder: 5
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

💡

_**Chapter 5**_**,** _Local, Central, and Remote Maven Repository_, walks you through the various repository types and how they can be configured in the settings.xml file. It also covers the order maven attempts to resolve the dependency from different repositories.

Maven uses a centralised repository of software libraries called the Maven Repository to manage and download project dependencies. The Maven Repository is divided into three types: Local, Central, and Remote.

## 3.1 Local Maven Repository

The local repository is a directory on the developer's machine where all the dependencies for a specific project are stored. When a developer builds a project, Maven checks for the required dependencies in the local repository. If the dependency is not available, it is downloaded from a remote repository and stored in the local repository for future use. This reduces the build time when you build your project very often.

The local repository in Maven is usually located in the user's home directory under the .m2 folder.

### 3.1.1 Change the Local Maven Repository Path

However, you can change the path to the local repository by modifying the **settings.xml** file, which is in the **conf** directory of your Maven installation.

Here are the steps to change the Local Maven Repository path:

1.  Locate the XML file in the **conf** directory of your Maven installation.

2.  Open the XML file in a text editor.

3.  Search for the `<localRepository>` tag in the file. If the tag is not present, you can add it to the file.

4.  Modify the value of the <localRepository> tag to the desired location. For example, if you want to change the local repository to a folder named my-local-repo in the `D:\\drive`, the tag's value would be `<localRepository>D:\\my-local-repo</localRepository>`.

5.  Save the changes to the XML file.

Once you have saved the changes to the settings.xml file, the new location will be used for all future Maven builds. Any dependencies that were previously downloaded to the old local repository will not be automatically moved to the new location, so you may need to copy them manually if required.

## 3.2 Central Maven Repository

The Central Repository is the default remote repository used by Maven. It contains a vast collection of open-source libraries and dependencies, making it a one-stop shop for most projects. When Maven needs to download a dependency, it first looks in the local repository and then in the Central Repository.

The **central maven repository** is managed by the Apache community. There are almost all Java libraries that exist in it. You can browse it at [https://repo1.maven.org/maven2/](https://repo1.maven.org/maven2/).

When building a project, if it cannot find any dependent jars in the local Maven repository it will search in the central Maven repository and download those jars if found. You can also search for an artifact at [http://search.maven.org](http://search.maven.org/) if you want to download the artifact’s pom or jars.

## 3.3 Remote Maven Repository

A remote repository is a repository of dependencies located on a remote server, typically managed by a third-party organization. Maven can be configured to use multiple remote repositories, and dependencies can be downloaded from these repositories as needed. Developers can also publish their artifacts to a remote repository for use by other projects.

Here's an example of how to use a remote Maven repository in a Java project:

1.  Open your project's XML file in a text editor.

2.  Add a new `<repositories>` section to the file, if it doesn't exist already. For example:

```xml
<repositories>
    <repository>
        <id>central</id>
        <name>Central Repository</name>
        <url><https://repo.maven.apache.org/maven2></url>
    </repository>
    <repository>
        <id>jcenter</id>
        <name>JCenter</name>
        <url><https://jcenter.bintray.com></url>
    </repository>
</repositories>
```

In this example, we have added two remote repositories - the Central Repository and JCenter. These repositories are identified by a unique ID, which is used to reference them in the project's dependencies.

3.  Now you can add dependencies to your project that are hosted in these remote repositories. For example:

```xml
<dependencies>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>30.1.1-jre</version>
</dependency>
</dependencies>
```

In this example, we are adding two dependencies to the project - JUnit and Guava. JUnit is hosted in the Central Repository, while Guava is hosted in JCenter.

## 3.4 Order of Dependency Search in Maven

The order in which Maven searches for dependencies in the local and remote repositories is as follows:

1.  First, Maven looks for the dependency in the local repository. If the dependency is not found, it proceeds to the next step.

2.  Next, Maven looks at the remote repositories in the order they are defined in the XML file. If the dependency is found in a remote repository, it is downloaded and stored in the local repository for future use.

3.  If the dependency is not found in any of the remote repositories, Maven will report a build error.

So, in summary, the dependency search order in Maven is first the local repository, followed by the remote repositories in the order they are defined in the `pom.xml` file.

In summary, the local repository is where Maven stores project-specific dependencies, while the remote repository is where Maven can retrieve dependencies from third-party organizations. The central repository is the default remote repository used by Maven, which provides access to a vast collection of open-source libraries and dependencies.
