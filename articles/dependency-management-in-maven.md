---
id: 378
title: Dependency Management in Maven
slug: dependency-management-in-maven
excerpt: Chapter 4, Dependency Management in Maven, this chapter discusses one of the most important concepts of dependency management, direct and transitive dependencies, and discusses various maven scopes.
difficulty: beginner
publishedDate: "2024-01-08T13:35:57.000Z"
updatedDate: "2025-09-16T23:05:39.988Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - maven
tags:
  - maven-dependency-management
  - maven-transitive-dependency
  - maven-dependency-scope
  - maven-pom-properties
course: maven-for-beginners
displayOrder: 4
seo: 
  metaTitle: "Dependency Management in Maven: A Practical Guide"
  metaDescription: "Learn how Maven manages direct and transitive dependencies, resolves version conflicts, and understand dependency scopes like compile, test, and runtime."
  metaKeywords: null
---

💡

_**Chapter 4**_**,** _Dependency Management in Maven_, this chapter discusses one of the most important concepts of dependency management, direct and transitive dependencies, and discusses various maven scopes.

One of the key features of Maven is its dependency management system, which allows you to declare the external libraries and other projects that your project depends on. Maven just not support dependencies for a single project, but it can manage the dependencies for multi-module projects by maintaining a high degree of control and stability.

## 4.1 Dependency Management

In Maven, a project is a collection of source code, build scripts, configuration files, and resources that are organized into a standard directory structure. The project directory contains a file called pom.xml, which is the **Project Object Model (POM)** that defines the project's dependencies, build settings, and other configuration details.

Maven uses the `pom.xml` file to manage dependencies, and it provides several benefits, including:

-   **Automatic download** and caching of dependencies from remote repositories.

-   **Transitive dependency** resolution, which means that Maven can automatically download and include the dependencies of your dependencies.

-   **Dependency conflict resolution**, which means that Maven can automatically resolve conflicts when multiple dependencies require different versions of the same library.

-   **Consistent version management** means that you can specify a range of acceptable versions for a dependency, and Maven will automatically select the highest compatible version.

To declare a dependency in Maven, you simply add a dependency tag to the pom.xml file, specifying the group ID, Artifact ID, and version of the library that you want to use. For example, the following code declares a dependency on the Apache Commons Lang and jUnit library.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.stacktips</groupId>
  <artifactId>maven-hello-world</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>maven-hello-world</name>
  <url>http://maven.apache.org</url>
  <dependencies>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-lang3</artifactId>
      <version>3.12.0</version>
    </dependency>

  </dependencies>
</project>
```

When you build the project using Maven, it will automatically download the `commons-lang3-3.12.0.jar` file from the remote repository and include it in your project's **classpath**.

### 4.1.1 Transitive Dependency

There are primary two types of dependencies: direct dependency and transitive dependencies. Direct dependencies are the packages that are defined in your dependency descriptor or pom.xml file.

Transitive dependencies are the direct dependencies of your direct dependencies. For example, in the following figure, package A depends directly on B and D; they are called direct dependencies. However, package B depends on package C, and though you have not included it directly in your project, you will need that for package B to work correctly. The package C is considered a transitive dependency for package A.

[![](/media/summernote/Chapter_4-_Dependency_Management_in_Maven.png)](https://media.stacktips.com/media/uploads/summernote/Chapter_4-_Dependency_Management_in_Maven.png)

Figure 4.2 Direct and Transitive Dependencies Maven

**Automatic Transitive Dependencies resolution:** Maven has an inbuilt feature that automatically resolves the Transitive Dependencies for your project. What that means is that, if your project is dependent on some libraries and those libraries are dependent on other libraries, you only specify your project’s dependencies, and Maven takes care of other dependencies.

**Cyclic dependency:** There is no limit to the levels that dependencies can be gathered from and will only cause a problem if cyclic dependency is discovered. If your project depends on A and A depends on C, and C depends on B and B depends on A.

**Dependency Mediation:** When multiple versions of a package are encountered, you can always guarantee a version by declaring it explicitly in the project’s POM. If two dependency versions are at the same depth in the dependency tree, the order in the declaration that counts, the first declaration wins.

**Excluded Dependencies:** If Project X depends on project Y, and project Y depends on project Z, project X can explicitly exclude project Z as a dependency using the exclusion element.

Overall, Maven's project and dependency management features make it easy to create and manage complex Java projects, while minimising the amount of manual configuration and maintenance required.

### 4.1.2 Dependency Scope

The Dependency scope controls when and where a dependency is included in your project. It is used to restrict the transitivity of a dependency, whether a dependency's dependencies are also included or not. There are 6 scopes available:

-   `compile` - This is the default scope. The dependencies defined with this scope are available in all (compilation, testing, runtime) **classpaths** of a project.

-   `provided` - This is used when JDK or the runtime environment such as the servlet container is going to provide a dependency at runtime. These dependencies are not packaged with your application.

-   `runtime` - This scope indicates that the dependency is not required for compilation but is needed at runtime.

-   `test` - This scope indicates the dependency is required during the test compilation and execution phases.

-   `system` - This scope is like provided except that you must explicitly provide a JAR file and not looked up in the repository.

-   `import` - This is used inside a `dependencymanagement` It indicates that the specified POM should be replaced with the dependencies in that POM’s `dependencymanagement` section.

For specifying the scope in pom.xml file we can use the syntax as follows:

```xml
<dependencies>
  <dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.19.0</version>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
  </dependency>
</dependencies>
```

System dependencies are specified with systemPath under system scope, and they are always available and are not looked up in the repository. Here is how you can use system scope.

```xml
<dependencies>
  <dependency>
    <groupId>com.provider</groupId>
    <artifactId>artifact-id</artifactId>
    <version>1.0.0</version>
    <scope>system</scope>
    <systemPath>${home}/lib/external-lib-1.0.0.jar</systemPath>
  </dependency>
</dependencies>
```

## 4.2 Maven Properties

Properties in Maven can be used to simplify the configuration of your project, making it more maintainable, and reducing the amount of duplicated code.

For example, you can create a property defining the version of a commonly used library, and then use that property throughout your pom.xml file. If you need to update the library version in the future, you can simply change the property value, rather than updating it in multiple places all over the `pom.xml` file.

The properties in Maven are defined using the `<properties>` element and are referenced using the `${property}` syntax.

Here's an example of how to define and use a property in a pom.xml file:

```xml
<project>
  <groupId>com.stacktips</groupId>
  <artifactId>your-artifact-id</artifactId>
  <version>1.0.0</version>
  <properties>
    <junit.version>4.13.2</junit.version>
  </properties>
  <dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
        <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

In this example, the `junit.version` property is defined in the `<properties>` element, and is given the value 4.13.2. Later in the file, the `${junit.version}` syntax is used to reference the property value as the version number for the JUnit dependency.

## 4.3 Build Element in Maven

The build element in Maven is used to define the build process for a project. It contains a set of configuration options that control how the project is compiled, tested, and packaged. The Maven project we have generated in the previous chapter has a very straightforward structure and dependencies.

Maven uses default build configuration and provides a sensible default for simple Java projects. Hence, you don’t see the `<build>` element inside our pom.xml file.

However, as the complexity increases you will be required to customize your build configurations to maintain consistency in the build process for all developers working on the same project. Here are some of the common elements that can be defined within the build element in Maven:

-   `plugins`: Maven plugins are used to extend the build process with additional functionality. The plugins element is used to configure the plugins that should be used for this project.

-   The `sourceDirectory` and `testSourceDirectory`: These elements specify the location of the source code and test code directories for the project.

-   The resources and `testResources`, elements specify additional resources that should be included in the project, such as configuration files or data files.

-   The plugins element is used to configure the plugins that should be used for this project. Plugins can be used for a variety of tasks, such as running tests, generating documentation, or creating executable JAR files.

-   The extensions element is used to specify Maven extensions, which are used to modify or enhance the build process. Extensions are like plugins, but they are loaded before the plugins and can modify the behavior of the core Maven system.

Here's an example of a build element in a pom.xml file:

```xml
<build>
  <sourceDirectory>src/main/java</sourceDirectory>
  <testSourceDirectory>src/test/java</testSourceDirectory>
  <resources>
    <resource>
      <directory>src/main/resources</directory>
    </resource>
  </resources>
  <testResources>
    <testResource>
      <directory>src/test/resources</directory>
    </testResource>
  </testResources>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.8.1</version>
      <configuration>
        <source>1.8</source>
        <target>1.8</target>
      </configuration>
    </plugin>
  </plugins>
</build>
```

In this example, the build element is used to define the source code and test code directories, as well as the resources and test resources directories. Additionally, the maven-compiler-plugin is configured with a specific source and target version.
