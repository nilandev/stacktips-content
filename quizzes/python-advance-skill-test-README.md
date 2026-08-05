---
id: 1
title: "Advanced Python Quiz to Test Your Knowledge"
slug: "python-advance-skill-test"
excerpt: "Here is an advanced quiz on Python covering various topics for practice. It contains 50 MCQs with both theoretical and coding questions."
difficulty: beginner
duration: 30
thumbnail: "media/uploads/articles/python-advance-quiz_1.jpg"
topics: [html]
description: |
  The test contains 50 questions and has a time imit of 30 minutes
  
  The test is not official, it's just a nice way to see how much you know, or don't know, about Python.
---
# Advanced Python Quiz to Test Your Knowledge

**Difficulty:** beginner  
**Duration:** 30 minutes  
**Questions:** 50

## Description

Here is an advanced quiz on Python covering various topics for practice. It contains 50 MCQs with both theoretical and coding questions.

---

## Questions

### Question 1
**What is the term to describe this code?**

count, fruit, price = (2, 'apple', 3.5)

- [ ]  tuple matching
- [x]  tuple unpacking
- [ ] tuple duplication
- [ ]  tuple assignment


---

### Question 2
**What built-in list method would you use to remove items from a list?**

- [ ] del(list)
- [x] .pop() method
- [ ] .delete() method
- [ ] pop(list)

---

### Question 3
**What is one of the most common use of Python's sys library?**

- [x] to capture command-line arguments given at a file's runtime
- [ ] to take a snapshot of all the packages and libraries in your virtual environment
- [ ] to scan the health of your Python ecosystem while inside a virtual environment
- [ ] to connect various systems, such as connecting a web front end, an API service, a database, and a mobile app

---

### Question 4
**What is the runtime of accessing a value in a dictionary by using its key?**

- [ ]  O(n), also called linear time.
- [ ]  O(log n), also called logarithmic time.
- [x]  O(1), also called constant time.
- [ ] O(n^2), also called quadratic time.

---

### Question 5
**What is the correct syntax for defining a class called Game, if it inherits from a parent class called LogicGame?**

- [x]  class Game(LogicGame): pass
- [ ]  def Game.LogicGame(): pass

- [ ]  class Game.LogicGame(): pass

- [ ]  def Game(LogicGame): pass


**Explanation:** The parent class which is inherited is passed as an argument to the child class. Therefore, here the first option is the right answer.

---

### Question 6
**What built-in Python data type is commonly used to represent a stack?**

- [ ] None
- [ ] set
- [ ]  You can only build a stack from scratch.
- [x] list
- [ ] dictionary

---

### Question 7
**What is the purpose of the "self" keyword when defining or calling instance methods?**

- [ ]  self refers to the class that was inherited from to create the object using self.
- [ ]  self means that no other arguments are required to be passed into the method.

- [ ]  There is no real purpose for the self method; it's just historic computer science jargon that Python keeps to stay consistent with other programming languages.

- [x]  self refers to the instance whose method was called.


---

### Question 8
**Which of these is NOT a characteristic of namedtuples?**

- [ ]  You can assign a name to each of the namedtuple members and refer to them that way, similarly to how you would access keys in dictionary.

- [ ]  Each member of a namedtuple object can be indexed to directly, just like in a regular tuple.
- [x] No import is needed to use namedtuples because they are available in the standard library.
- [ ]  namedtuples are just as memory efficient as regular tuples.

---

### Question 9
**What is an instance method?**

- [ ]  An instance method is any class method that doesn't take any arguments.

- [ ] An instance method is a regular function that belongs to a class, but it must return None.
- [x]  Instance methods can modify the state of an instance or the state of its parent class.

- [ ]  Instance methods hold data related to the instance.


---

### Question 10
** Which statement does NOT describe the object-oriented programming concept of encapsulation?**

- [ ]  It protects the data from outside interference.
- [x] It only allows the data to be changed by methods.
- [ ] A parent class is encapsulated and no data from the parent class passes on to the child class.
- [ ] It keeps data and the methods that can manipulate that data in one place.

---

### Question 11
**What is the purpose of an if/else statement?**

- [ ] It runs one chunk of code if all the imports were successful, and another chunk of code if the imports were not successful.
- [ ] It tells the computer which chunk of code to run if the is enough memory to handle it, and which chunk of code to run if there is not enough memory to handle it.
- [x] It executes one chunk of code if a condition is true, but a different chunk of code if the condition is false.
- [ ] It tells the computer which chunk of code to run if the instructions you coded are incorrect.

---

### Question 12
**What built-in Python data type is best suited for implementing a queue?**

- [ ] dictionary
- [x] list
- [ ] set
- [ ] None, You can only build a queue from scratch

---

### Question 13
**What is the correct syntax for instantiating a new object of the type Game?**

- [x] my_game = Game()
- [ ] my_game = class(Game)
- [ ] my_game = class.Game()
- [ ] my_game = Game.create()

---

### Question 14
**What does the built-in map() function do?**

- [x] It applies a function to each item in an iterable and returns the value of that function.
- [ ] It converts a complex value type into simpler value types.
- [ ] It creates a path from multiple values in an iterable to a single value.
- [ ] It creates a mapping between two different elements of different iterables.

---

### Question 15
**If you don't explicitly return a value from a function, what happens?**

- [ ] If the return keyword is absent, the function will return True.
- [ ]  The function will return a RuntimeError if you don't return a value.

- [ ] The function will enter an infinite loop because it won't know when to stop executing its code.
- [x] If the return keyword is absent, the function will return None.

---

### Question 16
**What is the purpose of the pass statement in Python?**

- [ ]  It is used to skip the yield statement of a generator and return a value of None.

- [ ] It is used to skip the rest of a while or for loop and return to the start of the loop.
- [ ]  It is used to pass control from one statement block to another.

- [x] It is a null operation used mainly as a placeholder in functions, classes, etc.

---

### Question 17
**What is the term used to describe items that may be passed into a function?**

- [x] arguments
- [ ] attributes
- [ ] decorators
- [ ] paradigms

---

### Question 18
**Which collection type is used to associate values with unique keys?**

- [ ] queue
- [x] dictionary
- [ ] slot
- [ ] sorted list

---

### Question 19
**When does a for loop stop iterating?**

- [ ]  when it encounters an if/else statement that contains a break keyword

- [ ] when it encounters an infinite loop
- [x]  when it has assessed each item in the iterable it is working on or a break keyword is encountered
- [ ]  when the runtime for the loop exceeds O(n^2)


---

### Question 20
**Assuming the node is in a singly linked list, what is the runtime complexity of searching for a specific node within a singly linked list?**

- [ ]  The runtime is O(1) because you can index directly to a node in a singly linked list.
- [x]  The runtime is O(n) because in the worst case, the node you are searching for is the last node, and every node in the linked list must be visited.
- [ ]  The runtime is O(nk), with n representing the number of nodes and k representing the amount of time it takes to access each node in memory.
- [ ]  The runtime cannot be determined unless you know how many nodes are in the singly linked list.

---

### Question 21
**What happens when you use the built-in function all() on a list?**

- [ ]  The all() function will return all the values in the list.

- [x]  The all() function returns True if all items in the list evaluate to True. Otherwise, it returns False.
- [ ] The all() function returns a Boolean value that answers the question "Are all the items in this list the same?
- [ ] The all() function returns True if all the items in the list can be converted to strings. Otherwise, it returns False.

---

### Question 22
**What is the algorithmic paradigm of quick sort?**

- [ ]  decrease and conquer

- [ ] backtracking
- [x]  divide and conquer

- [ ]  dynamic programming


---

### Question 23
**What is runtime complexity of the list's built-in .append() method?**

- [x]  O(1), also called constant time
- [ ]  O(n), also called linear time

- [ ] O(log n), also called logarithmic time
- [ ]  O(n^2), also called quadratic time

---

### Question 24
**What is key difference between a set and a list?**

- [ ]  A set is an ordered collection unique items. A list is an unordered collection of non-unique items.

- [ ]  Elements can be retrieved from a list but they cannot be retrieved from a set.

- [x]  A set is an unordered collection unique items. A list is an ordered collection of non-unique items.
- [ ]  A set is an ordered collection of non-unique items. A list is an unordered collection of unique items.

---

### Question 25
**What is the definition of abstraction as applied to object-oriented Python?**

- [ ]  Abstraction means that the data and the functionality of a class are combined into one entity.
- [x]  Abstraction means the implementation is hidden from the user, and only the relevant data or information is shown.

- [ ]  Abstraction means that a different style of code can be used, since many details are already known to the program behind the scenes.

- [ ]  Abstraction means that a class can inherit from more than one parent class.

---

### Question 26
**Suppose a Game class inherits from two parent classes: BoardGame and LogicGame. Which statement is true about the methods of an object instantiated from the Game class?**

- [ ]  When instantiating an object, the object doesn't inherit any of the parent class's methods.

- [ ] When instantiating an object, the object will inherit the methods of whichever parent class has more methods.
- [ ]  When instantiating an object, the programmer must specify which parent class to inherit methods from.
- [x]  An instance of the Game class will inherit whatever methods the BoardGame and LogicGame classes have.


---

### Question 27
**What does calling namedtuple on a collection type return?**

- [ ]  a generic object class with non-iterable named fields
- [ ]  a generic object class with iterable parameter fields

- [x]  a tuple subclass with iterable named fields
- [ ]  a tuple subclass with non-iterable parameter fields


---

### Question 28
**What symbol(s) do you use to assess equality between two elements?**

- [ ] &&
- [ ] ==
- [ ] ||
- [x] =

---

### Question 29
**What does a class's __init__() method do?**

- [ ]  It makes classes aware of each other if more than one class is defined in a single code file.

- [ ]  It initializes any imports you may have included at the top of your file.
- [ ]  It is included to preserve backwards compatibility from Python 3 to Python 2, but no longer needs to be used in Python 3.
- [x]  It is a method that acts as a constructor and is called automatically whenever a new object is created from a class. It sets the initial state of a new object.


---

### Question 30
**What is meant by the phrase "space complexity"?**

- [ ]  How many copies of the code file could fit in 1 GB of memory
- [ ]  How many microprocessors it would take to run your code in less than one second

- [ ]  How many lines of code are in your code file

- [x]  The amount of space taken up in memory as a function of the input size


---

### Question 31
**What is the correct syntax for creating a variable that is bound to a dictionary?**

- [ ]  fruit_info =('fruit': 'apple', 'count': 2,'price': 3.5 ).dict()

- [ ]  fruit_info = ['fruit': 'apple', 'count': 2,'price': 3.5 ].dict()
- [x]  fruit_info = {'fruit': 'apple', 'count': 2, 'price': 3.5}

- [ ]  fruit_info = to_dict('fruit': 'apple', 'count': 2, 'price': 3.5)


---

### Question 32
**What is the purpose of the self keyword when defining or calling methods on an instance of an object?**

- [x]  self refers to the instance whose method was called.
- [ ]  self refers to the class that was inherited from to create the object using self.

- [ ]  There is no real purpose for the self method. It's just legacy computer science jargon that Python keeps to stay consistent with other programming languages.

- [ ]  self means that no other arguments are required to be passed into the method.


---

### Question 33
**What statement about the class methods is true?**

- [ ] A class method hold all of the data for a particular class.
- [ ]  A class method is a regular function that belongs to a class, but it must return None.
- [x]  A class method can modify the state of the class, but they can't directly modify the state of an instance that inherits from that class.

- [ ] A class method is similar to a regular function, but a class method doesn't take any arguments.

---

### Question 34
**What does it mean for a function to have linear runtime?**

- [ ]  The difficulty level your code is written at is not that high.

- [ ]  You did not use very many advanced computer programming concepts in your code.

- [ ]  It will take your program less than half a second to run.

- [x]  The amount of time it takes the function to complete grows linearly as the input size increases.

---

### Question 35
**According to the PEP 8 coding style guidelines, how should constant values be named in Python?**

- [ ]  in camel case without using underscores to separate words -- e.g. maxValue = 255

- [ ]  in mixed case without using underscores to separate words -- e.g. MaxValue = 255
- [ ]  in lowercase with underscores to separate words -- e.g. max_value = 255
- [x]  in all caps with underscores separating words -- e.g. MAX_VALUE = 255


---

### Question 36
**Describe the functionality of a deque.**

- [ ]  A deque adds items only to the top, but remove from either or both sides.
- [ ]  A deque adds items to either or both sides, but only removes items from the top.
- [ ]  A deque adds items to one side and remove items from the other side.

- [x]  A deque adds items at either or both ends, and remove items at either or both ends.


**Explanation:** deque is used to create block chanin and in that there is first in first out approch, which means the last element to enter will be the first to leave.

---

### Question 37
**Why is it considered good practice to open a file from within a Python script by using the with keyword?**

- [x]  When you open a file using the with keyword in Python, Python will make sure the file gets closed, even if an exception or error is thrown.

- [ ] There is no benefit to using the with keyword for opening a file in Python.
- [ ]  The with keyword acts like a for loop, and lets you access each line in the file one by one.
- [ ]  The with keyword lets you choose which application to open the file in.


---

### Question 38
**Why would you use a virtual environment?**

- [ ] Virtual environments were common in Python 2 because they augmented missing features in the language. Virtual environments are not necessary in Python 3 due to advancements in the language.
- [x]  Virtual environments create a "bubble" around your project so that any libraries or packages you install within it don't affect your entire machine.

- [ ] Teams with remote employees use virtual environments so they can share code, do code reviews, and collaborate remotely.
- [ ] Virtual environments are tied to your GitHub or Bitbucket account, allowing you to access any of your repos virtually from any machine.

---

### Question 39
**What is a lambda function ?**

- [x]  a small, anonymous function that can take any number of arguments but has only expression to evaluate
- [ ]  a function that get executed when decorators are used

- [ ]  any function that makes use of scientific or mathematical constants, often represented by Greek letters in academic writing

- [ ]  any function whose definition is contained within five lines of code or fewer


**Explanation:** The lambda notation is basically an anonymous function that can take any number of arguments with only single expression (i.e, cannot be overloaded). It has been introducted in other programming languages, such as C++ and Java. The lambda notation allows programmers to "bypass" function declaration.

---

### Question 40
**What is the primary difference between lists and tuples?
**

- [x]  Lists are mutable, meaning you can change the data that is inside them at any time. Tuples are immutable, meaning you cannot change the data that is inside them once you have created the tuple.

- [ ]  Lists are immutable, meaning you cannot change the data that is inside them once you have created the list. Tuples are mutable, meaning you can change the data that is inside them at any time.

- [ ]  Lists can hold several data types inside them at once, but tuples can only hold the same data type if multiple elements are present.
- [ ]  You can access a specific element in a list by indexing to its position, but you cannot access a specific element in a tuple unless you iterate through the tuple


---

### Question 41
**What does the // operator in Python 3 allow you to do?**

- [ ] Perform operations on exponents
- [ ]  Find the remainder of a division operation
- [x]  Perform integer division

- [ ]  Perform floating point division


---

### Question 42
**What file is imported to use dates in python?**

- [ ] imedate
- [ ] daytime
- [x] datetime
- [ ] dateday

---

### Question 43
**Elements surrounded by [] are _, {} are _, and () are ___.**

- [x] dictionaries or sets
- [x] lists
- [ ] None of the above
- [x] tuples

---

### Question 44
**When would you use a try/except block in code?**

- [ ]  You use try/except blocks inside of unit tests so that the unit testes will always pass.

- [x]  You use try/except blocks when you want to run some code, but need a way to execute different code if an exception is raised.

- [ ]  You use try/except blocks so that you can demonstrate to your code reviewers that you tried a new approach, but if the new approach is not what they were looking for, they can leave comments under the except keyword.
- [ ]  You use try/except blocks so that none of your functions or methods return None.

---

### Question 45
**it is often the case that the pandas library is used for _ data and NumPy for _ data.**

- [ ]  unstructured; structured
- [ ]  tabular; numerical
- [ ]  numerical; tabular
- [x]  string; numerical

---

### Question 46
**What do you need to do to install additional packages into Python?**

- [ ]  Use an IDE like Notepad++ or Idle.

- [ ]  Use a C compiler like gcc or clang.

- [ ]  Use a package manager like NPM or NuGet.

- [x]  Use a package manager like pip or conda.

---

### Question 47
**Suppose you need to use the sin function from the math library. What is the correct syntax for importing only that function?**

- [x]  from math import sin

- [ ]  import sin from math
- [ ]  import math.sin
- [ ] using math.sin

---

### Question 48
**What do you get if you apply numpy.sum() to a list that contains only Boolean values?**

- [ ] a type error
- [ ] 0
- [ ] None
- [x]  the count of all True values

---

### Question 49
**What is the correct syntax for defining an init() method that takes no parameters?**

- [ ] class init(self): pass
- [ ] def init():pass
- [x] def init(): pass
- [ ] def init(self): pass

**Explanation:** The () -empty parameter self -refers to all instances within a class init -a reserved method, aka a constructor init() -always executed when the class is being initiated

---

### Question 50
**Which choice is not a native numerical type in Python?**

- [ ] Long
- [ ] Float
- [x] Double
- [ ] Int

---