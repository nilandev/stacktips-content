---
id: 364
title: "Python: Conditional Statements Ifs, Elifs, Elses"
slug: python-ifs-elifs-elses
excerpt: Logic and conditionals are a fundamental part of programming and is how your program can make decisions.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.207Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 4
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Decision making is one of the core feature of any programming language. Python uses If keyword to take execution decisions based upon conditions known only during run time.

Here is the general form of the if statement:

```python
if(condition1):
    # statemnt 1
else:
    # statemnt 2
```

Here a statement can be a single statement or multiple statements. The statements inside the if condition needs to be indented properly for python to understand the code block. In the above statement: If the condition1 is True, then statement1 is executed. Otherwise, statement2 is executed. In no case will both statements be executed. At any point, if your program requires more then two conditional checks, you can use elif keyword. For example:

```python
if(condition1):
    # statemnt 1
elif(condition2):
    # statemnt 2
else:
    # statemnt 3
```

## Comparison Operators

To use logic in our program, we'll need to learn about the comparison operates that Python offers.

### Equality Operator

The most basic comparison operators we have is the equality operator. This simply checks if two values are equivalent or not. If they are the same, the result will be `True`, and if they are not equal, the result will be `False`.

To use the equality operator, simply use two equal signs.

```python
number1 = 3
number2 = 3
number3 = 6
print(number1 == number2)
print(number1 == number3)
```

**Output**

True
False

### Inequality Operator

The **inequality operator** functions exactly like the equality operator we just saw but in reverse. If the two values are the same, it will result in `false`, and if they are different, it will result in `true`.

To use this operator, put an **exclamation point** in front of the equal sign, like so:

```python
number1 = 3
number2 = 3
print(number1 != number2)
```

False

### Greater Than and Less Than Operators

You can compare the values of two variables using the **greater than** and **less than** operators. Here is how to use them:

```python
number1 = 3
number2 = 6
print(number1 > number2) # greater than
```

**Output**

```bash
False
```

```python
number1 = 3
number2 = 6
print(number1 < number2) # less than
```

**Output**

```bash
True
```

### Or Equal To Operators

In the case where you need to check if a value is **either** less than/greater than or equal to another value, Python also has an operator for that. It looks like a combination of the operators we saw before:

```python
print(3 <= 5)
print(3 >= 5)
print(7 <= 8)
print(7 >= 9)
```

**Output**

```bash
True
False
True
False
```

## Conditionals

Now that are able to compare two values, we can now do something with that result. Using **conditionals** we can now take different paths of code depending on if the value inside it is `true` or `false`.

### If

Using the **if** keyword is very straightforward. If whatever you are checking is `true`, then whatever is inside the next block of code will run.

Let's see an example of this:

```python
burritos = 6

if (burritos > 5):
    print("You ordered too many burritos.")
```

**Output**

```bash
You ordered too many burritos.
```

Now let's order a correct number of burritos and see what happens:

```python
burritos = 3

if (burritos > 5):
    print("You ordered too many burritos.")
```

**Output**

Nothing happened! The code block did not execute because the value of `burrito` was not greater than `5`.

## Logical Operators

So far we've seen how logic works when we only have a single conditional to work with. Eventually, you will need to use multiple conditionals to finally make the decision about what path of code you want to take. When you want to use multiple conditionals at once, you use a **logical operator**.

### And Operator

By using the **and** operator, the block of code will only execute if both sides of the operator are true:

```python
isHungry = True
foodAvailable = True

if (isHungry and foodAvailable):
    print("Since I am hungry and there is food, I shall eat.")
```

**Output**

```bash
Since I am hungry and there is food, I shall eat.
```

Since in this case both variables were `true`, the resulting code block was ran, and the print statement was displayed.

### Or Operator

While using the `and` operator, both conditionals needed to be `true`, but with the `or` operator, only a **single one** needs to be `true`.

Consider this example:

```python
sunny = False
bored = True

if (sunny or bored):
    print("Since it is either sunny outside or I'm bored, I will go play basketball.")
```

**Output**

```bash
Since it is either sunny outside or I'm bored, I will go play basketball.
```

Even though it is not sunny outside, because you are bored, you decided to play basketball anyway.

### Not Operator

In our final logical operator, you can invert the results of a conditional entirely but using the **not** operator.

Let's look at an example:

```python
temperature = 50
hot = temperature > 70

if not (hot):
    print("Since it isn't hot, I will wear boots today!")
```

**Output**

```bash
Since it isn't hot, I will wear boots today!
```
