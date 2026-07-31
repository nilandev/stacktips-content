---
id: 387
title: Loops in Java for, while and do-while
slug: java-loops
excerpt: Learn how to shorten and improve your code by utilizing loops like for loops, while loops, and do while loops.
difficulty: beginner
publishedDate: "2022-09-17T17:01:11.000Z"
updatedDate: "2025-09-16T23:05:39.225Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - java-for-loop
  - java-while-loop
  - do-while-loop-java
course: maven-for-beginners
displayOrder: 7
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Loops are a fundamental part of programming languages, and definitely for Java. Loops are extremely powerful, allowing you to condense blocks of code, and making things more readable. If you ever find yourself copy and pasting code because you need to repeat their execution, chances are you instead should be using a loop to accomplish that task.

Let's look at all the different kinds of loops we can use.

### For Loop

**The for loop is the classic loop, and probably the most commonly used one. It is made up of three different parts:**

-   **Initial Value**: This is the inital value set to the variable we will use to control the loop's progression, usually `i`.
-   **Condition**: This condition is checked before running the next iteration of the loop.
-   **Iteration**: This part is how you advance further in the loop.

Let's look at loops by showing how to print the numbers `1` to `10`:

```java
for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}
```

```bash
1
2
3
4
5
6
7
8
9
10
```

So first we initialize our variable `i` to be `1`. That way when the first print statement is executed, the value `1` is printed. Then we increment the value of it thanks to:

```java
i++
```

This will keep on going until `i` exceeds the value of `10`. When that happens, the loop stops executing and we finish our printing.

### While Loop

A while loop is a much simpler but equally as powerful loop when compared to a for loop. The structure of a while loop is just a single condition that if it evaluates to `true` will cause it it to execute. The condition is checked at the end of an iteration and will continue until the condition eventually results in a `false`.

Looks look at the same example as before but with a while loop instead:

```java
int i = 1;

while (i <= 10) {
    System.out.println(i);
    i++;
}
```

```bash
1
2
3
4
5
6
7
8
9
10
```

The functionality is exactly the same just using a different loop. We are defining the same variable and giving it the same initial value, `1`. From there we check that `i` is equal to or less than `10`. If so, we execute the print statement and increment the value of `i`. This repeats until the value of `i` reaches `11` and the loop terminates.

## Do While Loop

The do while is exactly the same as a normal while loop except that the code block in the loop is guaranteed to run at least once no matter what the condition results in. This can be useful for when you want the code to run once, then repeat it if the condition is `true`.

Let's look at an example:

```java
int cupcakes = 5;

do {
    System.out.println("Since there are still " + cupcakes + " cupcakes left, I'll eat one.");
    cupcakes--;
} while (cupcakes > 0);

System.out.println("All cupcakes gone!");
```

```bash
Since there are still 5 cupcakes left, I'll eat one.
Since there are still 4 cupcakes left, I'll eat one.
Since there are still 3 cupcakes left, I'll eat one.
Since there are still 2 cupcakes left, I'll eat one.
Since there are still 1 cupcakes left, I'll eat one.
All cupcakes gone!
```

On the first pass, the code is executed without checking the condition. We eat a cupcake, and then the condition is checked. Since cupcakes remained, the loop executed again. This process repeated itself until finally we ran out of cupcakes. When this happened, the code continued to execute to the final print statement letting us know that the cupcakes officially ran out.

### Break

The `break` statement is useful when you want to end a loop prematurely for any reason you want. Let's say counting to `10` like before but use a `break` to stop the loop for no reason:

```java
for (int i = 1; i <= 10; i++) {
    System.out.println(i);

    if (i == 5) {
        break;
    }
}
```

```bash
1
2
3
4
5
```

Even though this loop would have continued printing up until the number `10`, to demonstrate the power of `break` statements, we used it once the value of `i` was `5`. At that point, we exited the loop and no further print statements executed.

### Continue

The `continue` statement is similar to the `break` except that instead of ending the loop entirely, it continues to the next iteration of the loop. This is useful for when you don't want to run the rest of the loop's code block, but you also don't want to terminate the loop entirely.

Let's look at it in action:

```java
for (int i = 1; i <= 10; i++) {
    if (i == 2 || i == 6) {
        continue;
    }
    System.out.println(i);
}
```

```bash
1
3
4
5
7
8
9
10
```

For absolutely no particular reason, we have decided that when the value of `i` is either `2` or `6`, we will continue on to the next iteration of the loop, instead of printing the value out. 

Because of this, we still got the other values printed out as expected, but at the same time, the entire loop didn't terminate. Knowing when to use `break` and `continue` can make already powerful loops even more powerful!
