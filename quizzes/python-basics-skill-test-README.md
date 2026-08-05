---
id: 2
title: "Python Basics Quiz Practice Test"
slug: "python-basics-skill-test"
excerpt: "The test contains 50 questions and has a time imit of 30 minutes"
difficulty: beginner
duration: 30
thumbnail: "media/uploads/articles/python-basics-quiz.jpg"
topics: [html]
description: |
  The test contains 50 questions and has a time imit of 25 minutes
  
  The test is not official, it's just a nice way to see how much you know, or don't know, about Python.
---
# Python Basics Quiz Practice Test

**Difficulty:** beginner  
**Duration:** 30 minutes  
**Questions:** 50

## Description

The test contains 50 questions and has a time imit of 30 minutes

---

## Questions

### Question 1
**Who developed Python Programming Language?**

- [ ] Wick van Rossum
- [x] Rasmus Lerdorf
- [ ] Rasmus Lerdorf
- [ ] Niene Stom

**Explanation:** Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands. 

---

### Question 2
**Which type of Programming does Python support?**

- [ ] structured programming
- [x] all of the mentioned
- [ ] object-oriented programming
- [ ] functional programming

**Explanation:** Python is an interpreted programming language, which supports object-oriented, structured, and functional programming.

---

### Question 3
**Is Python case sensitive when dealing with identifiers?**

- [ ] yes
- [ ] machine dependent
- [ ] None of the above
- [x] no

**Explanation:** Case is always significant.

---

### Question 4
**Which of the following is the correct extension of the Python file?**

- [ ] .python
- [x] .py
- [ ] .pl
- [ ] .p

**Explanation:** .py is the correct extension of the Python file. Python programs can be written in any text editor. To save these programs we need to save in files with file extension ?.py?.

---

### Question 5
**Is Python code compiled or interpreted?**

- [ ] Python code is both compiled and interpreted
- [ ] Python code is only compiled
- [x] Python code is neither compiled nor interpreted
- [ ] Python code is only interpreted

**Explanation:** Many languages have been implemented using both compilers and interpreters, including C, Pascal, and Python.

---

### Question 6
**All keywords in Python are in _________**

- [ ] lower case
- [ ] UPPER CASE
- [x] None of the above
- [ ] Capitalized

**Explanation:** True, False and None are capitalized while the others are in lower case.

---

### Question 7
**What will be the value of the following Python expression?**

4 + 3 % 5

- [ ] 2
- [ ] 1
- [x] 7
- [ ] 4

**Explanation:** The order of precedence is: %, +. Hence the expression above, on simplification results in   4 + 3 = 7. Hence the result is 7.

---

### Question 8
**Which of the following is used to define a block of code in Python language?**

- [ ] Key
- [ ] All of the mentioned
- [ ] Indentation
- [ ] Brackets

**Explanation:**  In Python, to define a block of code we use indentation. Indentation refers to whitespaces at the beginning of the line.

---

### Question 9
**Which keyword is used for function in Python language?**

- [x] def
- [ ] fun
- [ ] define
- [ ] function

---

### Question 10
**Which of the following character is used to give single-line comments in Python?**

- [ ] //
- [ ] /*
- [ ] !
- [x] #

**Explanation:** To write single-line comments in Python use the Numero sign (#) at the beginning of the line. To write multi-line comments, close the text between triple quotes.

---

### Question 11
**What will be the output of the following Python code?**


i = 1
while True:
    if i%3 == 0:
        break
    print(i)
    i += 1


- [x] 1
2
- [ ] error
- [ ] none of the above
- [ ] 1
2
3

---

### Question 12
**Python supports the creation of anonymous functions at runtime, using a construct called __________**

- [x] lambda
- [ ] pi
- [ ] none of the above
- [ ] anonymous

**Explanation:** Python supports the creation of anonymous functions (i.e. functions that are not bound to a name) at runtime, using a construct called lambda. Lambda functions are restricted to a single expression. They can be used wherever normal functions can be used. 

---

### Question 13
**What is the order of precedence in python?**

- [x] Parentheses, Exponential, Multiplication, Division, Addition, Subtraction
- [ ] Exponential, Parentheses, Multiplication, Division, Addition, Subtraction
- [ ] Parentheses, Exponential, Multiplication, Division, Subtraction, Addition
- [ ] Exponential, Parentheses, Division, Multiplication, Addition, Subtraction

**Explanation:** For order of precedence, just remember this PEMDAS (similar to BODMAS).

---

### Question 14
**What will be the output for statement 'x<<2' if x=1?**

- [x] 4
- [ ] 1
- [ ] 2
- [ ] 8

**Explanation:** The binary form of 1 is 0001. The expression x<<2 implies we are performing bitwise left shift on x. This shift yields the value: 0100, which is the binary form of the number 4.

---

### Question 15
**Which of the following is true for variable names in Python?**

- [ ] none of the above
- [ ] underscore and ampersand are the only two special characters allowed
- [ ] all private members must have leading and trailing underscores
- [x] unlimited length

**Explanation:** Variable names can be of any length.

---

### Question 16
**Which of the following is the truncation division operator in Python?**

- [ ] |
- [x] //
- [ ] /
- [ ] %

**Explanation:** // is the operator for truncation division. It is called so because it returns only the integer part of the quotient, truncating the decimal part. For example: 20//3 = 6.

---

### Question 17
**What will be the output of the following Python code?**


l=[1, 0, 2, 0, 'hello', '', []]
list(filter(bool, l))


- [ ] [1, 0, 2, 0, 'hello'] 
- [ ] [1, 0, 2, 'hello', []] 
- [x] [1, 2, 'hello'] 
- [ ] Error

**Explanation:** The code shown above returns a new list containing only those elements of the list l which do not amount to zero. Hence the output is: [1, 2, 'hello'].

---

### Question 18
**Which of the following functions is a built-in function in python?**

- [ ] print()
- [ ] factorial()
- [x] seed()
- [ ] sqrt()

**Explanation:** The seed() method is used to initialize the random number generator. The random number generator needs a number to start with (a seed value), to be able to generate a random number. By default the random number generator uses the current system time.

---

### Question 19
**Which of the following is the use of id() function in python?**

- [ ] Every object doesn?t have a unique id
- [ ] All of the mentioned
- [x] Id  returns the identity of the object
- [ ] None of the mentioned

**Explanation:** Each object in Python has a unique id. The id() function returns the object?s id. 

---

### Question 20
**Which of the following is not a core data type in Python programming?**

- [x] Class
- [ ] Dictionary
- [ ] List
- [ ] Tuples

**Explanation:** Class is a user-defined data type. 

---

### Question 21
**What will be the output of the following Python expression if x=56.236?**


x = 56.236
print("%.2f" % x)


- [ ] 56
- [ ] 56.236
- [x] 56.24
- [ ] 56.23

**Explanation:** The expression shown above rounds off the given number to the number of decimal places specified. Since the expression given specifies rounding off to two decimal places, the output of this expression will be 56.24. Had the value been x=56.234 (last digit being any number less than 5), the output would have been 56.23.

---

### Question 22
**Which of these is the definition for packages in Python?**

- [ ] A set of main modules
- [ ] A number of files containing Python definitions and statements
- [x] A folder of python modules
- [ ] A set of programs making use of Python modules

**Explanation:** A folder of python programs is called as a package of modules.

---

### Question 23
**What will be the output of the following Python function?**


len(["hello",2, 4, 6])


- [x] 4
- [ ] 3
- [ ] 6
- [ ] Error

**Explanation:** The function len() returns the length of the number of elements in the iterable. Therefore the output of the function shown above is 4.

---

### Question 24
**Which one of the following is not a keyword in Python language?**

- [ ] pass
- [ ] nonlocal
- [ ] assert
- [x] eval

**Explanation:** eval can be used as a variable

---

### Question 25
**Which module in the python standard library parses options received from the command line?**

- [ ] os
- [ ] main
- [ ] getarg

- [x] getopt

**Explanation:** getopt parses options received from the command line.

---

### Question 26
**Which of the following statements is used to create an empty set in Python?**

- [x] set()
- [ ] { }
- [ ] ( )
- [ ] [ ]

**Explanation:** { } creates a dictionary not a set. Only set() creates an empty set. 

---

### Question 27
**To add a new element to a list we use which Python command?**

- [ ] list1.addLast(5)
- [x] list1.append(5)
- [ ] list1.addEnd(5)
- [ ] list1.add(5)

**Explanation:**  We use the append() function to add an element to the list. 

---

### Question 28
** Which one of the following is the use of function in python?**

- [ ] you can?t also create your own functions
- [x] Functions are reusable pieces of programs
- [ ] Functions don?t provide better modularity for your application
- [ ] All of the mentioned

**Explanation:** Functions are reusable pieces of programs. They allow you to give a name to a block of statements, allowing you to run that block using the specified name anywhere in your program and any number of times. 

---

### Question 29
**What will be the output of the following Python program?**


i = 0
while i 

- [ ] error
- [x] 0 1 2
- [ ] 0 1 2 0
- [ ] None of the above

**Explanation:** The else part is not executed if control breaks out of the loop.

---

### Question 30
**What will be the output of the following Python code?**


x = 'abcd'
for i in range(len(x)):
    print(i)


- [ ] error
- [x] 0 1 2 3
- [ ] 1 2 3 4
- [ ] a b c d

**Explanation:** i takes values 0, 1, 2 and 3.

---

### Question 31
**What are the two main types of functions in Python?**

- [ ] User function
- [x] Built-in function & User defined function
- [ ] Custom function
- [ ] System function

**Explanation:** Built-in functions and user defined ones. The built-in functions are part of the Python language. Examples are: dir(), len() or abs(). The user defined functions are functions created with the def keyword. 

---

### Question 32
**Which of the following is a Python tuple?**

- [ ] {}
- [x] (1,2,3)
- [ ] [1,2,3]
- [ ] {1, 2, 3}

**Explanation:** Tuples are represented with round brackets.

---

### Question 33
**What will be the output of the following Python code snippet?**


z=set('abc$de')
'a' in z


- [ ] No output
- [ ] False
- [x] True
- [ ] Error

**Explanation:** The code shown above is used to check whether a particular item is a part of a given set or not. Since ?a? is a part of the set z, the output is true. Note that this code would result in an error in the absence of the quotes.

---

### Question 34
**What will be the output of the following Python expression?**


round(4.576)


- [ ] 4.5
- [ ] 4.6
- [ ] 4
- [x] 5

**Explanation:** This is a built-in function which rounds a number to give precision in decimal digits. In the above case, since the number of decimal places has not been specified, the decimal number is rounded off to a whole number. Hence the output will be 5.

---

### Question 35
**Which of the following is a feature of Python DocString?**

- [x] Docstrings can be accessed by the __doc__ attribute on objects
- [x] It provides a convenient way of associating documentation with Python modules, functions, classes, and methods
- [x] In Python all functions should have a docstring
- [ ] DocString is not a concept of Python

**Explanation:** Python has a nifty feature called documentation strings, usually referred to by its shorter name docstrings. DocStrings are an important tool that you should make use of since it helps to document the program better and makes it easier to understand.

---

### Question 36
**What will be the output of the following Python code?**


print("Hello {0[0]} and {0[1]}".format(('foo', 'bin')))


- [x] Hello foo and bin
- [ ] Hello (?foo?, ?bin?) and (?foo?, ?bin?)
- [ ] None of the above
- [ ] Error

**Explanation:** The elements of the tuple are accessed by their indices.

---

### Question 37
**What is output of print(math.pow(3, 2))?**

- [ ] None
- [ ] None of the above
- [ ] 9
- [x] 9.0

**Explanation:** math.pow() returns a floating point number.

---

### Question 38
**The process of pickling in Python includes ____________**

- [ ] conversion of a byte stream into Python object hierarchy
- [ ] conversion of a datatable into a list
- [ ] conversion of a list into a datatable
- [x] conversion of a Python object hierarchy into byte stream

**Explanation:** Pickling is the process of sterilizing a Python object, that is, conversion of a byte stream into Python object hierarchy. The reverse of this process is known as unpickling.

---

### Question 39
**What will be the output of the following Python code?**

- [ ] error, there is more than one return statement in a single try-finally block
- [x] 2
- [ ] 1
- [ ] 3

**Explanation:** The finally block is executed even there is a return statement in the try block.

---

### Question 40
**What will be the output of the following Python statement?**

 "a"+"bc" 

- [ ] bca
- [ ] a
- [x] abc
- [ ] bc

**Explanation:** The + operator is concatenation operator. 

---

### Question 41
**What will be the output of the following Python statement?**


abcd"[2:]


- [ ] ab
- [ ] dc
- [ ] a
- [x] cd

**Explanation:** Slice operation is performed on string. 

---

### Question 42
**The output of executing string.ascii_letters can also be achieved by:**

- [x] string.ascii_lowercase+string.ascii_uppercase
- [ ] string.lowercase_string.uppercase
- [ ] string.letters
- [ ] string.ascii_lowercase_string.digits

---

### Question 43
**What arithmetic operators cannot be used with strings?**

- [ ] All of the above
- [ ] +
- [x] -
- [ ] *

**Explanation:** + is used to concatenate and * is used to multiply strings.

---

### Question 44
**What will be the output of the following Python code?**

 print(r"\nhello") 

- [ ] the letter r and then hello
- [ ] a new line and hello
- [ ] Error
- [x] \nhello

**Explanation:** When prefixed with the letter ?r? or ?R? a string literal becomes a raw string and the escape sequences such as \n are not converted. 

---

### Question 45
**To concatenate two strings to a third what statements are applicable?**

- [ ] s3 = s1 . s2
- [ ] s3 = s1.add(s2)
- [ ] s3 = s1 * s2
- [x] s3 = s1.__add__(s2)

**Explanation:**  __add__ is another method that can be used for concatenation.

---

### Question 46
**What will be the datatype of the var in the below code snippet?**


var = 10
print(type(var))
var = "Hello"
print(type(var))


- [ ] str and str
- [ ] str and int
- [x] int and str
- [ ] int and int

**Explanation:** Initially var stores 10, and so is of type int. After that it stores ?Hello? which is of type string.


---

### Question 47
**What will be the output of the following code snippet?**


count = 0
while (True):
   if count % 3 == 0:
       print(count, end=" ")
   if (count > 15):
       break
   count += 1


- [ ] 0 1 2 ... 15
- [ ] Infinite loop
- [x] 0 3 6 9 12 15
- [ ] 0 3 6 9 12

**Explanation:** The above code prints the multiples of 3 not greater than 15, and then breaks off.



---

### Question 48
**What will be the output of the following code snippet?**


def solve(a, b):
   return b if a == 0 else solve(b % a, a)

print(solve(20, 50))


- [ ] 1
- [x] 10
- [ ] 20
- [ ] 50

**Explanation:** The above function basically calculates the gcd of 2 numbers recursively. The gcd of 20 and 50 is 10, so the answer is A.


---

### Question 49
**What will be the output of the following code snippet?**


weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

result = weekdays[-4:-1]
print(result)


- [ ] ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
- [ ] ['Tuesday', 'Wednesday']
- [ ] ['Sunday', 'Monday']
- [x] ['Tuesday', 'Wednesday', 'Thursday']

---

### Question 50
**What will be the type of the variable sorted_numbers in the below code snippet?
**


numbers = (4, 7, 19, 2, 89, 45, 72, 22)
sorted_numbers = sorted(numbers)
print(type(sorted_numbers))


- [ ] String
- [x] List
- [ ] int
- [ ] Tuple

**Explanation:** sorted() function returns a list that contains all the elements in parameters in sorted order.


---