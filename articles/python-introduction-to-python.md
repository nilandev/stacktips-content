---
id: 361
title: "Python: Introduction to Python and Installation"
slug: python-introduction-to-python
excerpt: "This lesson will help you get started with all the tools you need to begin writing your very lines of Python! Python has an interesting and specific syntax. Learn all about it with this overview on the language."
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.021Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 1
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

**Python** is a general-purpose, dynamic, interpreted and object-oriented programming language. It is one of the most popular and fastest growing programming languages in the world. It is used in wide variety of applications including web development, data analysis, and running background tasks.

Python has a simple, easy to learn syntax, which emphasizes readability. Applications written in Python can run on almost any computer, including those running Windows, macOS, and all popular Linux distributions. The Python ecosystem has grown over the years and contains a wide range of development tools for writing, debugging, and publishing Python applications.

## Prerequisites

1.  A computer that can install and run Python.
2.  A desire to learn how to code!

With that being said, let's get started!

## Python Interpreter

Python is an interpreted language, which reduces the edit-test-debug cycle because there's no compilation step required. In order to run Python apps, you need a runtime interpreter to execute the code.

The python code is compiled into a lower-level, and platform-independent byte code. The byte code compilation happens internally and hidden from developer.

The byte code then gets picked up by the Virtual Machine and executes the **byte code** instructions step by step to carry out their operations.

![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/01_02.png)  

## Installing Python

If you already have Python installed, you can skip this section. Otherwise, install the latest version of **Python 3**.

Head over to the [downloads page](https://www.python.org/downloads/) to get your copy.

Please note that, Python comes bundled with Mac OS X. But the version that you have is quite likely an older version. [Download](http://www.python.org/download/mac/) and install the the latest binary version of Python that runs on both Power PC and Intel systems.

  
![](/media/https://sgp1.digitaloceanspaces.com/stacktips/media/uploads/summernote/01-python.png)

You can verify the installation by running the following command on your terminal.

Alternatively, you can type:

```bash
python3 -V
```

This command will simply print the Python version installed in your computer.

```bash
python -V
Python 3.10.6
```

## Writing Your First Python Program

Create a new file titled `helloworld.py`. Inside the file, put this code in::

```python
print("Hello world!")
```

To run the program, type `python3 helloworld.py` command and hit Return.

$ python3 helloworld.py
Hello World!

Congratulations! You just wrote your first program in Python. As you can see, this was a pretty easy task. This is the beauty of the Python programming language.

## Python Implementations

Python is licensed under OSI open source license and there are multiple implementations available depending upon your requirements.

-   **CPython:** Commonly used for web development, application development and scripting.
-   **Anaconada:** This distribution is used for scientific programming tasks such as data schience and machine learning.
-   **Iron Python:** Open source implementation built for .NET runtime
-   **Jupyter Notebook:** Jupyter Notebook is a web-based interactive programming environment that supports various programming languages, including Python. Used mainly for academic research and mathematical modeling, machine learning and for teaching.

You now have everything you need to begin this class on Python! Let's get started with Python!

## Python Syntax and Indentation

Indentation refers to the space used at the beginning of a code to improve readability. Unlike any other programming language, indentation in python is very important as it uses indentation to indicate a block of code.  

For example, if we're writing a conditional statement using if statement, here's how we use spaces to indent the code.

if True:
    print("True")
else:
    print("False")

True

If you're familiar with any other programming language like Java, or .NET, they use curly braces to indicate a code block. However, for Python you do not require curly braces, instead you're required to use indent your code adequately.

Here are examples of broken syntax in Python:

if True:
print("True")
else:
print("False")

if True:
    print("True")
        print("True")
            print("True")

For all the same reasons, code in Python needs to be perfectly indented or else it will not run.

## Comments in Python  

At some point down the road, you will want to leave comments in your code, either for yourself in the future, or for another developer working on the same project as you. Here is how comments in Python look like:

\# First comment
print("Hello world!") # second comment

Hello world!

Fairly straightforward! Comments in Python start with the # character and the following is the comment itself. Unlike most programming languages, Python does not support multi-line comments. However, nothing technically stops you from doing this:

\# This
# is
# a
# multi-line
# comment
print("Hello world!")

Hello world!

This works but keep in mind that comments in general should be short anyway, so using multi-line comments should be done sparingly, if at all.

## References

-   [Python Homepage](https://www.python.org/)
-   [Python Downloads Page](https://www.python.org/downloads/)
