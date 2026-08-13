---
id: 411
title: Creating Java Project using Maven Command Line
slug: creating-java-project-using-maven-commandline
excerpt: Chapter 3, Creating Java Project using Maven, walks you through a step-by-step process to create a Maven project using the Maven command line utility and discusses building and running Java applications. It also discusses briefly about the maven build life cycle.
difficulty: beginner
publishedDate: "2024-01-08T13:35:43.000Z"
updatedDate: "2025-09-16T23:05:39.960Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - maven
tags:
  - maven-archetype-generate
  - maven-command-line-project
  - maven-build-lifecycle
  - maven-quickstart-archetype
course: maven-for-beginners
displayOrder: 3
seo: 
  metaTitle: "Creating a Java Project Using Maven Command Line"
  metaDescription: "Learn how to create, build, and run a Java project using the Maven command line with archetype:generate, and understand the Maven build lifecycle."
  metaKeywords: null
---

💡

_**Chapter 3**_**,** _Creating Java Project using Maven_, walks you through a step-by-step process to create a Maven project using the Maven command line utility and discusses building and running Java applications. It also discusses briefly about the maven build life cycle.

Maven has several archetypes predefined, you can use any of those archetypes and build a basic project in a few seconds. In this chapter, we will use the maven-archetype-quickstart, archetype to create a basic Java project with maven directories conventions.

## 3.1 Creating a Maven Project

Before you create a Java project using the maven command line, first create a new directory for your project. For example, create a directory called **"maven-hello-world”**

```bash
mkdir maven-hello-world
```

Navigate to the newly created directory in your terminal:

```bash
cd maven-hello-world
```

We can generate a maven project from the terminal using the `mvn archetype:generate` command. This command generates a new Maven project based on the template or archetype selected. For example, in this case we will use the `maven-archetype-quickstart` archetype to generate a simple Java project.

```bash
mvn archetype:generate
     -DgroupId=com.stacktips
     -DartifactId=maven-hello-world
     -DarchetypeArtifactId=maven-archetype-quickstart
     -DinteractiveMode=false
```

You don’t have to remember each of the parameters provided above. Just use the `interactiveMode=true`, so that Maven asks for all the required parameters.

[![](/media/summernote/creating-maven-project.png)](https://media.stacktips.com/media/uploads/summernote/creating-maven-project.png)

Figure 3.1 - creating java project using Maven command line

In this command, the groupId and `artifactId` are the unique identifiers for your project. The `archetypeArtifactId` specifies the archetype to use, which in this case is the `maven-archetype-quickstart` archetype, which creates a simple Java project with a main class.

## 3.2 Building the Maven Project

You can build your project in a shell environment but is better to work inside of a Java IDE such as IntelliJ, Eclipse, or VS Code. An Integrated **Development Environment (IDE)** is a tool that helps to streamline the coding, debugging, and project management for developers. It offers features like code editing, refactoring, debugging, integrated terminal, and many other features to support application development.

Eclipse and VS Code have good support for Java development, but IntelliJ is one of the strong contenders with a wide range of features to boost Java developer productivity. Throughout this book, we will use the IntelliJ code editor for working with the Maven project.

IntelliJ offers two versions of the IDE, IntelliJ IDEA Community (Free) and IntelliJ Ultimate (Licensed). A few of the features are limited only to the Ultimate edition, but the Free community version is sufficient for Java development.

If you haven’t installed it, you can follow the official installation guide to download and install for your Operating System: [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)

When the project is opened in IntelliJ, the project will be recognized by the IDE as a maven project and all the dependencies will be resolved and added to the **“classpath”** automatically. The following screenshot depicts the project structure created by the above command.

[![](/media/summernote/mave-java-project-structure.png)](https://media.stacktips.com/media/uploads/summernote/mave-java-project-structure.png)

Figure 3.2 Maven Java project structure

The dependencies and maven configuration are defined inside the maven configuration file pom.xml, pom means **Project Object Model**.

Navigate to the project directory and build the project using the `mvn package` command.

```bash
mvn package
```

This will compile the project, run the tests, package will generate JAR/WAR as per the build configuration defined in the POM file. You can see a console output as follows:

```text
[INFO] Scanning for projects...
[INFO] 
[INFO] ------------------< com.stacktips:maven-hello-world >-------------------
[INFO] Building maven-hello-world 1.0-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ maven-hello-world ---
[WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /Users/nilanchal.panigrahy/Documents/github/StackTipsLab/maven-beginners-guide/maven-hello-world/src/main/resources
[INFO] 
[INFO] --- compiler:3.11.0:compile (default-compile) @ maven-hello-world ---
[INFO] Nothing to compile - all classes are up to date
[INFO] 
[INFO] --- resources:3.3.1:testResources (default-testResources) @ maven-hello-world ---
[WARNING] Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory /Users/nilanchal.panigrahy/Documents/github/StackTipsLab/maven-beginners-guide/maven-hello-world/src/test/resources
[INFO] 
[INFO] --- compiler:3.11.0:testCompile (default-testCompile) @ maven-hello-world ---
[INFO] Nothing to compile - all classes are up to date
[INFO] 
[INFO] --- surefire:3.2.2:test (default-test) @ maven-hello-world ---
[INFO] Using auto detected provider org.apache.maven.surefire.junit.JUnit3Provider
[INFO] 
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.stacktips.AppTest
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.012 s -- in com.stacktips.AppTest
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] 
[INFO] --- jar:3.3.0:jar (default-jar) @ maven-hello-world ---
[INFO] Building jar: /Users/nilanchal.panigrahy/Documents/github/StackTipsLab/maven-beginners-guide/maven-hello-world/target/maven-hello-world-1.0-SNAPSHOT.jar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  1.629 s
[INFO] Finished at: 2024-01-06T20:02:48Z
[INFO] ------------------------------------------------------------------------
```

Run the project: You can run the project using the java -cp target/my-app-1.0-SNAPSHOT.jar com.example.app.App command. This will execute the main method in the App class.

```bash
java -cp target/maven-hello-world-1.0-SNAPSHOT.jar com.stacktips.App
```

Congratulations! You have created and built your first Java project using the Maven command line!

## 3.3 Maven Build Lifecycle

Maven build lifecycles are a series of phases that define the build process of a Maven project. There are three build lifecycles in Maven:

-   **default**: This is the main build lifecycle in Maven. It includes the following phases: `validate`, `compile`, `test`, `package`, `verify`, and install. These phases are executed in order when you run the maven command with no arguments.

-   **clean**: This lifecycle is used to clean the build directory of a project. It includes the following phases: `pre-clean`, `clean`, and `post-clean`.

-   **site**: This lifecycle is used to generate project documentation. It includes the following phases: `pre-site`, `site`, `post-site`, `site-deploy`. The site-deploy phase is optional and is used to deploy the generated documentation to a web server.

Each lifecycle consists of a set of phases, which are executed in order. When you run a specific phase, all previous phases in that lifecycle are also executed. For example, when you run the package phase in the default lifecycle, the validate, compile, and test phases are also executed.

[![](/media/summernote/dependencies-Page-2.drawio.png)](https://media.stacktips.com/media/uploads/summernote/dependencies-Page-2.drawio.png)

Figure 3.3 Maven build lifecycle

Here's a brief description of each phase in the default lifecycle:

-   **validate:** It validates the project is correct and all necessary information is available.

-   **compile:** It compiles the source code of the project.

-   **test:** It tests the compiled source code using a suitable unit testing framework.

-   **package:** It takes the compiled code and packages it in its distributable format, such as a JAR file.

-   **verify:** To run any checks to verify the package is valid and meets quality criteria.

-   **install:** To install the package into the local repository, for use as a dependency in other projects.

-   **deploy:** To copy the final package to the remote repository for sharing with other developers and projects.
