---
id: 372
title: "Python: Classes and Objects, Inheritance and Super"
slug: python-classes-and-objects
excerpt: Class are blueprints to create objects which represent a collection of related properties and methods. Inheritance is an important concept of OOP. It is a process by which a class can inherit properties from another class.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.685Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
course: getting-started-with-css
displayOrder: 3
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Class are blueprints to create objects which represent a collection of related properties and methods

Python is an object-oriented programming language.

Objects are an encapsulation of variables and functions into a single entity. Objects get their variables and functions from classes.

## Creating a Class in Python

To define a class we can use class keyword and define the properties and methods inside it.

```python
class Vehicle:
    number_of_wheels = 2
    color = "red"
```

In the above code snippet, we have declared a class called `Vehicle` with two properties `color` and `number_of_wheels`with some default values.

Now that we have our class defined, let's create a object of the class `Vehicle`.

## Creating an Object

To create a new object, simply reference the class you want to build the object out of. In this case, we'll use our previously defined `Person` class.

```python
class Vehicle:
    number_of_wheels = 2
    color= "red"

vehicle1 = Vehicle() # Creating object of class Vehicle
print(vehicle1)
print("Vehicle1:", vehicle1.color)
```

**Output:**

```text
<__main__.Vehicle object at 0x10ae31ae0>
Vehicle1: red
```

Awesome, we created an object of class Vehicle and accessed the color property.

Let us now make our classes useful.

## **Python Class Constructor**

Constructors are special kind of method, used for instantiating an object.

-   The task of constructors is to initialize and assign values to the data members of the class when an object of the class is created.
-   In Python, the `__init__()`method is called the constructor and is always called when an object is created.
-   Python doesn?t support defining multiple constructors in a class. i.e constructor overloading is not supported by the language.
-   You can pass any number of parameters to the **init** method similar to how you can pass in parameters to functions. However, the first parameter should always be self.

Let us now define a constructor for Vehicle class:

```python
class Vehicle:

    def __init__(self, color, number_of_wheels):
        self.color = color
        self.number_of_wheels = number_of_wheels

vehicle1 = Vehicle("Red", 4)
print(vehicle1)
print("Vehicle1:", vehicle1.color)

vehicle2 = Vehicle("Blue", 2)
print(vehicle2)
print("Vehicle2", vehicle2.color)
```

**Output:**

```text
<__main__.Vehicle object at 0x114b0f3a0>
Vehicle1: Red
<__main__.Vehicle object at 0x114b0e470>
Vehicle2 Blue
```

## Python Class Methods

Strings and numbers aren't the only thing you can define in classes. Objects can also contain functions. Let's create one in our `Person` class.

```python
class Vehicle:

    def __init__(self, color, number_of_wheels):
        self.color = color
        self.number_of_wheels = number_of_wheels

    def drive(self):
        print("Drive mode on!")

    def stop(self):
        print("Drive mode off!")

vehicle1 = Vehicle("Red", 4)
vehicle1.drive()
vehicle1.stop()
```

**Output:**

```text
Drive mode on!
Drive mode off!
```

### Python-Inheritance and Super

Inheritance is an important concept of OOP (Object Oriented Programming). It is a process by which a class inherit the properties and methods from another class (parent class).

The classes which are derived from parent class are called child classes.

For example. let us examine class Vehicle.

```python
class Vehicle:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def drive(self):
        print(f"Starting {{0}}".format(self.brand))

    def stop(self):
        print(f"Stopping {{0}}".format(self.brand))
```

Now that we have our parent class defined, let's create our child class `Car` which inherits class `Vehicle`.

```python
class Car(Vehicle):
    def __init__(self, brand, color, fuel_type, number_of_seats):
        super().__init__(brand, color)
        self.fuel_type = fuel_type
        self.number_of_seats = number_of_seats

    def horn(self):
        print("Beep Beep!!")
```

A lot is going on here.

-   First, `class Car(Vehicle):` is used for inheriting a Car class from a parent class `Vehicle`.
-   We can use `super()` to call the parent class constructor by passing the required parameters.
-   As the Car is inheriting the Vehicle class, all the properties and methods defined in Vehicle are now available to Car class.

## Creating Objects

Now that we have defined the Car class, let us now create few car objects and see it in action.

```python
volkswagen = Car("Volkswagen", "Red", "Petrol", 5)
volkswagen.drive()
volkswagen.horn()
volkswagen.stop()

print("=======")
tesla = Car("Tesla", "White", "Electric", 5)
tesla.drive()
tesla.horn()
tesla.stop()
```

**Output:**

```text
Starting Volkswagen
Beep Beep!!
Stopping Volkswagen
=======
Starting Tesla
Beep Beep!!
Stopping Tesla
```

## Overriding Methods in Python

Method overriding is one of the object-oriented programming feature, that allows subclass to provide a specific implementation of a method that is already defined in its parent class.

When a method in a subclass has the same name, same parameters or signature, and same return type(or sub-type) as a method in its super-class, then the method in the subclass is said to override the method in the super-class.

One last cool feature of inheritance is the concept of **overriding** methods. This is creating

Let's see this in action:

```python
class Vehicle:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def drive(self):
        print(f"Starting {{0}}".format(self.brand))

    def stop(self):
        print(f"Stopping {{0}}".format(self.brand))

class Car(Vehicle):
    def __init__(self, brand, color, fuel_type, number_of_seats):
        super().__init__(brand, color)
        self.fuel_type = fuel_type
        self.number_of_seats = number_of_seats

    def drive(self):
        print(f"Starting {{0}}".format(self.brand))
        print("Activating auto-pilot mode")
        print("Engine rolling")

    def horn(self):
        print("Beep Beep!!")

volkswagen = Vehicle("Volkswagen", "Red")
volkswagen.drive()
volkswagen.stop()

print("=====")
tesla = Car("Tesla", "White", "Electric", 5)
tesla.drive()
tesla.horn()
tesla.stop()
```

**Output:**

```text
Starting Volkswagen
Stopping Volkswagen
=====
Starting Tesla
Activating auto-pilot mode
Engine rolling
Beep Beep!!
Stopping Tesla
```

Since we defined the `drive()` function with the same name as the parent class, Python automatically runs the one in the child.

Inheritance is a great way to organize your code and keep properties and functions where they belong.
