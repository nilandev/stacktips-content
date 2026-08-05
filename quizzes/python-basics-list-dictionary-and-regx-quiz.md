---
id: 3
title: "Python Basics List, Dictionary and Regx Practice"
slug: "python-basics-list-dictionary-and-regx-quiz"
excerpt: "The test contains 40 questions and has a time imit of 20 minutes"
difficulty: beginner
duration: 30
thumbnail: "media/uploads/articles/python-basics-quiz-02.jpg"
topics: [python]
description: |
  The test contains 40 questions and has a time imit of 20 minutes
  
  The test is not official, it's just a nice way to see how much you know, or don't know, about Python.
---
# Python Basics List, Dictionary and Regx Practice

**Difficulty:** beginner  
**Duration:** 30 minutes  
**Questions:** 40

## Description

The test contains 40 questions and has a time imit of 20 minutes

---

## Questions

### Question 1
**Which one of these is NOT true about recursion?**

- [ ] The process of recursion makes it easier for users to understand a program
- [ ] We can replace a recursive function by a non-recursive function
- [ ] The memory space taken by the recursive functions is more than that of non-recursive function
- [x] Running a recursive function is faster as compared to a non-recursive function

**Explanation:** Running a recursive function is faster as compared to a non-recursive function

---

### Question 2
**Is Python case sensitive when dealing with identifiers?**

- [x] Yes
- [ ] No

**Explanation:** Yes Python case sensitive when dealing with identifiers.

---

### Question 3
**Which of the following commands will create a list?**

- [x] all of the above
- [ ] list1 = list([1, 2, 3])
- [ ] list1 = list()
- [ ] list1 = [] 

**Explanation:** Execute in the shell to verify

---

### Question 4
**What is the output when we execute list("hello")?**

- [x] ['h', 'e', 'l', 'l', 'o'] 
- [ ] ['olleh']
- [ ] ['llo']
- [ ] ['hello'] 

---

### Question 5
**What is the output of len(list("hello"))?**

- [x] 5
- [ ] 4
- [ ] Error
- [ ] None

---

### Question 6
**Suppose list1 is [2445,133,12454,123], what is max(list1)?**

- [x] 12454
- [ ] 133
- [ ] 2445
- [ ] 123

**Explanation:** Max returns the maximum element in the list.

---

### Question 7
**Suppose list1 is [3, 5, 25, 1, 3], what is min(list1)?**

- [x] 1
- [ ] 5
- [ ] 3
- [ ] 25

**Explanation:** Python list min() method returns the elements from the list with minimum value.

---

### Question 8
**Suppose list1 is [1, 5, 9], what is sum(list1)?**

- [ ] 9
- [ ] Error
- [x] 15
- [ ] 1

**Explanation:** The sum() returns the sum of all elements in the list.

---

### Question 9
**What function do we use to shuffle the list?**

- [ ] shuffle(list1)
- [ ] random.shuffleList(list1)
- [x] random.shuffle(list1)
- [ ] list1.shuffle()

---

### Question 10
**Suppose list is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation?**

- [ ] print(list[:2])
- [x] all of the mentioned
- [ ] print(list[2:])
- [ ] print(list[:-2])

**Explanation:** Slicing is allowed in lists just as in the case of strings.

---

### Question 11
**Suppose list is [2, 33, 222, 14, 25], What is list[-1]?**

- [ ] 2
- [x] 25
- [ ] Error
- [ ] None

**Explanation:** -1 corresponds to the last index in the list.

---

### Question 12
**Suppose list1 is [2, 33, 222, 14, 25], What is list[:-1]?**

- [ ] 25
- [x] [2, 33, 222, 14] 
- [ ] Error
- [ ] 2

---

### Question 13
**Suppose list is [3, 4, 5, 20, 5, 25, 1, 3], what is list after list.reverse()?**

- [ ] [1, 3, 3, 4, 5, 5, 20, 25] 
- [x] [3, 1, 25, 5, 20, 5, 4, 3]
- [ ] [3, 4, 5, 20, 5, 25, 1, 3] 
- [ ] [25, 20, 5, 5, 4, 3, 3, 1] 

---

### Question 14
**Suppose list is [3, 4, 5, 20, 5, 25, 1, 3], what is list after list.extend([34, 5])?**

- [x] [3, 4, 5, 20, 5, 25, 1, 3, 34, 5] 
- [ ] [1, 3, 4, 5, 20, 5, 25, 3, 34, 5]
- [ ] [1, 3, 3, 4, 5, 5, 20, 25, 34, 5]
- [ ] [25, 20, 5, 5, 4, 3, 3, 1, 34, 5] 

---

### Question 15
**Suppose list is [3, 4, 5, 20, 5, 25, 1, 3], what is list after list.pop(1)?**

- [ ] [1, 3, 3, 4, 5, 5, 20, 25] 
- [ ] [3, 4, 5, 20, 5, 25, 1, 3]
- [x] [3, 5, 20, 5, 25, 1, 3] 
- [ ] [1, 3, 4, 5, 20, 5, 25]

**Explanation:** pop() removes the element at the position specified in the parameter. 

---

### Question 16
**What will be the output of the following Python code?**


"Welcome to Python".split()


- [ ] {"Welcome", "to", "Python"}
- [ ] ("Welcome", "to", "Python")
- [x] ["Welcome", "to", "Python"]
- [ ] "Welcome", "to", "Python"

---

### Question 17
**What will be the output of the following Python code?**

 list("a#b#c#d".split('#')) 

- [ ] ['abcd']
- [ ] ['a#b#c#d']
- [x] ['a', 'b', 'c', 'd'] 
- [ ] ['a b c d'] 

---

### Question 18
**What will be the output of the following Python code?**


weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
if 'monday' in weekdays:
   print(1)
else:
   print(2)


- [x] 2
- [ ] None
- [ ] Error
- [ ] 1

---

### Question 19
**What will be the output of the following Python code?**


def f(i, values=[]):
   values.append(i)
   return values
   
f(1)
f(2)
v = f(3)
print(v)


- [ ] None of the above
- [x] [1, 2, 3]
- [ ] [1] [2] [3]
- [ ] [1] [1, 2] [1, 2, 3] 

---

### Question 20
**What will be the output of the following Python code?**


names1 = ['Amir', 'Bala', 'Charlie']
names2 = [name.lower() for name in names1]
print(names2[2][0])


- [ ] b
- [x] c
- [ ] None
- [ ] a

---

### Question 21
**To which of the following the "in" operator can be used to check if an item is in it?**

- [ ] Set
- [ ] List
- [ ] Dictionary
- [x] All of the above

---

### Question 22
**What will be the output of the following Python code?**


veggies = ['carrot', 'broccoli', 'potato', 'asparagus']
veggies.insert(veggies.index('broccoli'), 'celery')
print(veggies)


- [x] ['carrot', 'celery', 'broccoli', 'potato', 'asparagus'

- [ ] ['celery', 'carrot', 'broccoli', 'potato', 'asparagus']
- [ ] ['carrot', 'celery', 'potato', 'asparagus']
- [ ] ['carrot', 'broccoli', 'celery', 'potato', 'asparagus']

---

### Question 23
**Which module in Python supports regular expressions?**

- [ ] regex
- [ ] pyregex
- [x] re
- [ ] None of the above

**Explanation:** re is a part of the standard library and can be imported using: import re.

---

### Question 24
**Which of the following creates a pattern object?**

- [ ] re.assemble(str)
- [ ] re.create(str)
- [x] re.compile(str)
- [ ] re.regex(str)

**Explanation:** It converts a given string into a pattern object.

---

### Question 25
**What does the function re.match do?**

- [x] matches a pattern at the start of the string
- [ ] None of the above
- [ ] such a function does not exist
- [ ] matches a pattern at any position in the string

**Explanation:** It will look for the pattern at the beginning and return None if it isn't found.

---

### Question 26
**What does the function re.search do?**

- [ ] none of the mentioned
- [x] matches a pattern at any position in the string
- [ ] such a function does not exist
- [ ] matches a pattern at the start of the string

**Explanation:** It will look for the pattern at any position in the string.

---

### Question 27
**What will be the output of the following Python code?**


import re
sentence = 'we are humans'
matched = re.match(r'(.*) (.*?) (.*)', sentence)
print(matched.groups())


- [x] ('we', 'are', 'humans')
- [ ] (?we?, ?humans?)
- [ ] (we, are, humans)
- [ ] ?we are humans?

**Explanation:** This function returns all the subgroups that have been matched.

---

### Question 28
**The difference between the functions re.sub and re.subn is that re.sub returns a _____ whereas re.subn returns a _______**

- [x] string, tuple
- [ ] string, list
- [ ] list, tuple
- [ ] tuple, list

**Explanation:** The difference the functions re.sub and re.subn is that re.sub returns a string whereas re.subn returns a tuple.

---

### Question 29
**The function of re.search is ______**

- [x] Matches a pattern from any part of a string
- [ ] Matches a pattern at the end of the string
- [ ] Such a function does not exist
- [ ] Matches a pattern at the start of the string

**Explanation:** The re module of Python consists of a function re.search. It?s function is to match a pattern from anywhere in a string.

---

### Question 30
**Which of the following functions creates a Python object?**

- [ ] re.create(str)
- [x] re.compile(str)
- [ ] re.assemble(str)
- [ ] re.regex(str)

**Explanation:** The function re.compile(srt) compiles a pattern of regular expression into an object of regular expression. Hence re.compile(str) is the only function from the above options which creates an object.

---

### Question 31
**The function of re.match is _______**

- [ ] Matches a pattern at the end of the string
- [ ] Error
- [ ] Matches a pattern anywhere in the string
- [x] Matches a pattern at the start of the string

**Explanation:** The function of re.match matches a pattern at the start of the string.

---

### Question 32
**The special character \B matches the empty string, but only when it is _______**

- [ ] at the end of the word
- [x] not at the beginning or end of a word
- [ ] at the beginning or end of a word
- [ ] at the beginning of the word

**Explanation:** The special character \B matches the empty string, but only when it is not at the beginning or end of a word.

---

### Question 33
**What will be the output of the following Python code?**


def test():
        x, y = 4, 5
        y, x = x, y
        print(x)
        print(y)

test()


- [x] 5 4
- [ ] Error
- [ ] 4 5

---

### Question 34
**What is an abstract class?**

- [ ] Abstract classes must inherit from concrete classes.
- [x]  An abstract class exists only so that other "concrete" classes can inherit from the abstract class.
- [ ] An abstract class is the name for any class from which you can instantiate an object.
- [ ] Abstract classes must be redefined any time an object is instantiated from them.

---

### Question 35
**What happens when you use the build-in function any() on a list?**

- [ ]  The any() function takes as arguments the list to check inside, and the item to check for. If "any" of the items in the list match the item to check for, the function returns True.
- [ ]  The any() function will randomly return any item from the list.
- [ ] The any() function returns a Boolean value that answers the question "Are there any items in this list?"
- [x]  The any() function returns True if any item in the list evaluates to True. Otherwise, it returns False.

---

### Question 36
**What data structure does a binary tree degenerate to if it isn't balanced properly?
**

- [ ] ququq
- [x] linked list
- [ ] orderedDict
- [ ] set

---

### Question 37
**What statement about static methods is true?**

- [x]  Static methods serve mostly as utility methods or helper methods, since they can't access or modify a class's state.
- [ ]  Static methods are called static because they always return None.

- [ ] Static methods can be bound to either a class or an instance of a class.
- [ ] Static methods can access and modify the state of a class or an instance of a class.

---

### Question 38
**What are attributes?**

- [ ]  Attributes are long-form version of an if/else statement, used when testing for equality between objects.

- [x]  Attributes are a way to hold data or describe a state for a class or an instance of a class.
- [ ]  Function arguments are called "attributes" in the context of class methods and instance methods.
- [ ]  Attributes are strings that describe characteristics of a class.

**Explanation:** Attributes defined under the class, arguments goes under the functions. arguments usually refer as parameter, whereas attributes are the constructor of the class or an instance of a class.

---

### Question 39
**Which statement about strings in Python is true?**

- [x]  Strings can be enclosed by double quotes (") or single quotes (').

- [ ]  Single character strings must be enclosed in single quotes ('), and the rest must be enclosed in double quotes (").

- [ ]  Strings can only be enclosed in double quotes (").

- [ ]  Strings can only be enclosed in single quotes (').

---

### Question 40
**If you do not explicitly return a value from a function, what happens?**

- [ ]  If the return keyword is absent, the function will return True.

- [ ]  The function will enter an infinite loop because it will not know when to stop executing its code.

- [x]  If the return keyword is absent the function will return None.
- [ ]  The function will return a RuntimeError if you do not return a value.


---