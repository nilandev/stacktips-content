---
id: 373
title: "Python: Working with Files and Directories"
slug: python-working-with-files-in-python
excerpt: Learn how to work with files in Python files and Directories including how to open, read, append, overwrite, write, and close a file.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.724Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 13
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Directories in a file system are just as important as files, and Python makes working with both pretty easy using the `os` module.

## Creating a new Directory

You can create a new directory using the `mkdir` function, which is short for "make directory":

```python
import os
os.mkdir("new_folder")
```

Your new folder has been created!

## Getting your Current Working Directory

Just like when you're using the command line, sometimes you just want to know what directory you are currently working off of so you know how to get to where you want to go.

There is a function you can run to print that out for you, the `getcwd()` function which stands for "get current working directory".

```python
import os

print(os.getcwd())
```

```bash
C:\Users\Nilan\Desktop
```

Easy enough!

## Changing your Current Working Directory

Now that you know where you are, you might want to change it to work from another directory. You can do this using the `chdir()` function which stands for "change directory":

```python
import os

print(os.getcwd())

os.chdir("C:\Users\")

print(os.getcwd())
```

```bash
C:\Users\Nilan\Desktop
C:\Users
```

Keep in mind that the double slashes are so that we can use slash literals, which is what we want in this case.

## Deleting a Directory

You can delete a directory using the `rmdir()` function, which stands for "remove directory", and passing in the path to the directory you want removed:

```python
import os

os.rmdir("test")
```

There goes the `test` directory!

Keep in mind that you can only remove empty folders!

Python allows you to work with the file system, which includes both files and directories. Using the built-in system functions, you can access, manipulate, open, read, write, append, and close files.

## Opening a File

In Python, you can open a file using the built-in open function. This function accepts two required arguments: the name of the file you want to open and the mode in which you want to open it.

Here's an example:

```python
file = open("example.txt", "r")
```

In the above code, "example.txt" is the name of the file you want to open and "r" is the mode. The mode "r" stands for "read" and it opens the file for reading. There are several other modes you can use:  

-   "r": Read mode (default) - used for reading the contents of an existing file "w": Write mode - used for creating a new file or overwriting an existing file
-   "a": Append mode - used for appending data to an existing file
-   "x": Exclusive creation mode - used for creating a new file, but will raise an error if the file already exists
-   "b": Binary mode - used for reading or writing binary data You can combine the modes with "b" to open a file in binary mode.

For example, "rb" means to open the file in binary read mode, and "wb" means to open the file in binary write mode.

## Reading a File

Here's an example of how you can read the contents of a file:  

```python

file = open("example.txt", "r")
contents = file.read()
print(contents)
file.close()
```

In this example, the read method is used to read the contents of the file, and then the close method is used to close the file after you're done with it. It's a good idea to always close your files when you're done with them, to ensure that the resources they use are properly released.

You can also use the with statement to automatically close the file for you, like this:

```
with open("example.txt", "r") as file:
    contents = file.read()
    print(contents)
```

In this example, the file is automatically closed after the with block is exited, even if an exception is raised.

## Read File Line by Line

Maybe instead of getting the entire file, you want to read it line by line. Thankfully, there is already a built-in function for this. The `readline()` function reads a file line by line each time. If you use it twice, the second time will return the second line.

```python
file = open("file.txt", "r")
print(file.readline())
print(file.readline())
```

```markup
Hello!
Welcome to StackTips!
```

Alternatively, you can just loop over the lines, like so:

```python
file = open("file.txt", "r")
for line in file:
    print(line)
```

```markup
Hello!
Welcome to StackTips!
Have fun!
```

## Closing a File

**Closing** a file is important because it is sometimes needed to ensure any changes to a file are propagated in the file system.

This is how to close a file once you're finished with it:

```python
file = open("file.txt", "r")
for line in file:
    print(line)
file.close()
```

Our file is now closed!

## Appending to Existing File

You can append text to an existing file pretty easily. Simply switch the mode when you open and use the `write()` function:

```python
file = open("file.txt", "a")
file.write("Coding is fun!")
file.close()

file = open("file.txt", "r")
print(file.read())
```

```markup
Hello!
Welcome to StackTips!
Have fun!
Coding is fun!
```

## Overwriting an Existing File

The only difference between appending and **overwriting** an existing file is the mode. Here is how you overwrite a file entirely:

```
	file = open("file.txt", "w")
file.write("Coding is fun!")
file.close()

file = open("file.txt", "r")
print(file.read())
```

```
	Coding is fun!
```

Keep in mind that if the file does not exist, a new one will be created.

## Creating new Empty Files

You can create a brand new file without any content in it by changing the mode to `x`:

```python
file = open("file.txt", "x")
file.close()
```

A new blank file has been created!

## Renaming a File

To **rename** a file using Python, we must import the `os` module, then use its `rename()` function.

Here's how that looks:

```python
import os
os.rename("old_name.txt", "new_name.txt")
```

Pretty simple!

## Deleting a File

**Deleting** a file also requires the use of the `os` module.

Here's how you do it:

```python
import os

os.remove("file.txt")
```

Keep in mind that this will throw an error if the file doesn't exist.

## Check if a File Exists

To avoid an error with trying to remove a file that does not exist, you should check if the file exists before trying to remove it.

This is how you do it:

```python
import os

path = "file.txt"

if os.path.exists(path):
    os.remove(path)
else:
    print("This path does not exist: " + path)
```
