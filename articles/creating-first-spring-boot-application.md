---
id: 444
title: Creating First Spring Boot Application
slug: creating-first-spring-boot-application
excerpt: This chapter explains the pre-requisites to start with the Spring boot development, understand the build tool options such as Maven and Gradle and covers how to build and run your project.
difficulty: beginner
publishedDate: "2024-10-24T21:23:19.000Z"
updatedDate: "2025-09-16T23:05:42.175Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/post/None_creating-first-spring-boot-application.jpeg
topics: 
  - java
course: getting-started-with-javascript
displayOrder: 3
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

There are several ways we can bootstrap a Spring Boot project: 1. Using Spring Initializr 2. Using the Spring Boot CLI 3. From IntelliJ IDE

### Create Spring Boot Project using Spring Initializr

Spring Initializr is a web-based tool that helps you configure and generate the Spring boot project template. To bootstrap a Spring Boot project using Spring Initializr, visit [https://start.spring.io](https://start.spring.io).

![](/media/media/attachments/2024/10/24/32-spring-initializer.jpg)

Let us now configure our Spring boot project:

-   **Project Type:** Select the Maven or Gradle build type and select the language. Let’s select Gradle with Java.
-   **Language:** You can write Spring Boot code using Java, Kotlin, or Groovy. We will use Java throughout this course.
-   **Spring Boot Version:** Select the Spring Boot version out of all available versions. At the time of creating this video Spring Boot 3.2.0 is the latest release version. Let’s select that

Let us now configure our Spring Boot project:

-   **Project Type:** Select either the Maven or Gradle build type and choose the programming language of your choice.
-   **Language:** Spring Boot code can be written in Java, Kotlin, or Groovy. In this course, we will use Java exclusively.
-   **Spring Boot Version:** Choose the Spring Boot version from the available options. Currently, the latest Spring Boot release version is 3.3.4.

Now, provide the basic project details like the group, artefact, and name of your project.

-   **Group:** Usually the reverse of your domain. If your domain is [stacktips.com](http://stacktips.com), your group name will be `com.stacktips`
-   **Artifact Id:** The artifact name is the name of the jar without a version. For example, if your artifact name is `hello-spring`, then the jar will be `hello-spring-[version].jar`.
-   **App Name:** Provide a name for your application. Let’s call it a `hello-spring`.
-   **Description:** You may additionally describe your project.
-   **Package name:** This is the base package name for your project. Let’s use `com.stacktips.app` as our package name.
-   **Package type:** We have two choices for the package type, Jar and WAR. Both JAR (Java Archive) and WAR (Web Archive) are formats used in the Java ecosystem for packaging and distributing applications. But they have a completely different purpose.

| JAR (Java Archive) | WAR (Web Archive) |
| --- | --- |
| Jar files are used to package and distribute standalone Java applications. They contain a set of classes, resources, and other files that are required to run the application. | WAR files are a specific type of JAR file that is used to package and distribute web applications.They contain all of the files that are required to run the web application, including the Java classes, web pages, static resources, and deployment descriptor files. |
| JAR files are typically self-contained, meaning that they do not require any additional dependencies to be installed on the system where they are run. | WAR files are typically deployed to a web server, where they are run in a servlet container. |

We will build a self-contained Spring boot application, so let's select **Jar** for the package type.

-   **Java Version:** Spring Boot 3 requires a minimum of Java 17.
-   **Select Starter Dependencies:** Now, select the **Add Dependency** button to choose the Spring boot starter dependencies for your project. Let us choose **Spring Boot Starter Web** and **Spring Boot Actuator**.
-   **Explore and Generate:** Explore button allows you to review the project structure beforehand. Once everything is okay, you can click on the **Generate** button.

This will download the new Spring Boot project as a zip file. Now, extract the zip file and open the project in your IntelliJ IDEA.

### Creating Spring Boot Project using Spring CLI

The Spring Boot CLI (Command Line Interface) offers an alternative method for bootstrapping a Spring Boot project. With CLI, we can configure everything that Spring Initializr provides directly through the command line.

Before we begin using the Spring Boot CLI, we must ensure that it is installed. To verify the installation of the Spring Boot CLI, simply enter the following command:

```jsx

spring --version
```

If it is installed, you will see the Spring Boot version printed as follows;

```jsx

Spring CLI v3.2.0
```

If it is not installed, there are several ways we can install the Spring CLI. We can install using SDKMAN, OSX Homebrew, MacPorts, or using manual installation methods.

In this article, we will install using SDKMAN, but if you prefer other installation methods, then you may refer to the official [Spring CLI installation guide]([https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started.installing.cli)

**Install Spring Boot CLI using SDKMAN**

Before we install, let us first get the list of available Spring Boot releases using the following command.

```bash

sdk ls springboot
```

It will print all the list of available Spring Boot releases.

To install Spring Boot CLI enter the following command;

```bash

sdk install springboot
```

Once Spring Boot CLI is installed, You can list the capabilities of the service by using the `--list` flag:

```bash

spring init --list
```

Once Spring CLI is installed, we can continue creating the Spring Boot project. To create a Boot project from the command line use the following command;

```bash

spring init --type=gradle-project
     --java-version=17
     --language=java
     --name=hello-spring
     --artifact-id=hello-spring
     --group-id=com.stacktips
     --packaging=jar
     --dependencies=web,actuator
     hello-spring
```

It will create a new Spring Boot project with all the folders and files similar to the Spring Initializr inside the `hello-spring` directory.

You do not need to use the Spring CLI to work with Spring Boot, but it is a quick way to get a Spring application off the ground without using Spring Initializr.

### Creating Spring Boot Project Using IntelliJ IDE

You can also create a Spring Boot project from IntelliJ, but for that, you will need the IntelliJ Ultimate edition, which requires a commercial license.

-   To create a new Spring Boot project from the IntelliJ Ultimate edition, click **File** | **New** | **Project.**
-   This will open the new project dialog, and the Spring Initializr generator can be found in the left side pane.

![](/media/media/attachments/2024/10/24/33-create-spring-project-using-intellij-idea.jpg)

From there on, all the configurations are similar to the Spring Initializr and Spring CLI.

## Build and Run Spring Boot Project

Before we build and run our code, let us first open the IntelliJ IDE and import the project we have created. To import the project:

1.  Go to **File | Open**.
2.  Browse the downloaded folder and click on the **Open** button.

When the project is loaded for the very first time in your IDE, it may take a while as it has to download all the direct and transitive dependencies for your project. The load time will be based on your internet speed.

There are several different ways we can build and run a Spring Boot project. Some of the most common methods are:

-   Running from IDE
-   Using Gradle or Maven build tools
-   Run as a Fat JAR

### Running from an IDE

Running a Spring Boot project from an IDE is the most straightforward approach. Each IDE provides features that enable developers to build and execute the Spring Boot application with just a single click.

To get started, open the **HelloSpringApplication** class, which contains the `main()` method (typically marked with the `@SpringBootApplication` annotation). Then, click in the gutter and choose the **Play** option to run the spring boot application.

![](/media/media/attachments/2024/10/24/34-running-spring-boot-from-intellij.jpg)

### Build and Run using Gradle Command

To run the application from the command line, follow these two steps: first, build the project, and then Run it. For Gradle projects, you can build the project using the following command:

```bash

./gradlew build
```

Now, you can run the app using the `bootRun` gradle command.

```bash

./gradlew bootRun
```

### Build and Run using Maven Command

For Maven projects, you can build the Spring boot project using the following command:

```bash

./mvnw clean package
```

To run the app use the `spring-boot:run` gradle command.

```bash

./mvnw spring-boot:run
```

### Running Application as a FatJar

To run the application as a **FatJar** we first need to package the Spring Boot application into an executable JAR file.

To generate a JAR file we can use the following Maven command:

```bash

./mvnw clean package
```

To generate a JAR file we can use the following Gradle command:

```bash

./gradlew clean build
```

Once the JAR is generated, we can run the fat JAR using the `java -jar` command.

```bash

java -jar build/libs/hello-spring-0.0.1-SNAPSHOT.jar
```

When you run your Spring Boot application, you will see a log message like this: !\[\[3.5. running-spring-boot-as-fat-jar.png\]\]

> Notice that we are using `mvnw` and `gradlew` wrapper utilities to build and package our Spring boot application. We will learn more about them in the next chapter.
