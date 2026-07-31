---
id: 257
title: CountDownLatch and Java Concurrency Example
slug: countdownlatch-and-java-concurrency-example
excerpt: CountDownLatch is one of the most usesful Java concept that helps tracking multiple threads execution. This is useful when you want one or more threads to wait until a set of operations being performed in other threads completes.
difficulty: beginners
publishedDate: "2014-02-16T23:18:18.000Z"
updatedDate: "2025-09-16T23:05:33.170Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - java
tags:
  - countdownlatch-example
  - java-concurrency-threads
  - multithreading-synchronization-java
course: null
displayOrder: 0
seo: 
  metaTitle: "CountDownLatch in Java: Concurrency Example Explained"
  metaDescription: "Learn how Java's CountDownLatch coordinates multiple threads, letting a main thread wait until worker threads finish, with a practical example."
  metaKeywords: null
---

CountDownLatch is one of the most useful Java concept that helps tracking multiple threads execution. This is useful when you want one or more threads to wait until a set of operations being performed in other threads completes.

CountDownLatch helps in achieving maximum parallelism between multiple threads. Lets take a case here; sometimes you want to start multiple threads at the same time in parallel to main thread and once all the threads complete, you have to perform some actions on your main thread. This can be done easily if we create a CountDownLatch.

## How it works?

A CountDownLatch is initialized with a given N count. The await methods block the current thread execution until the count reaches zero. Once a task/thread completes the countDown() method will be called which results N– for every call. Once N size reaches zero, the thread which was awaiting returns immediately. CountDownLatch doesn't allow to change the count at runtime. i.e. once initialized it cannot be increased or reset.

Create `CountDownLatch` and initialize with the count N. Other worker threads must have reference of latch object, because they will need to notify the CountDownLatch object that they have completed their task.

This notification is done by countDown() method. Each time we call countDown() method, it decreases count of N. When all N threads have called this method, count reaches to zero and main thread is allowed to resume its execution.

### CountDownLatch Example

In this example, we will download multiple images using worker thread. Once all the download complete, I expect my main thread to resume its execution. This example is a more simplified version just for your easy understanding.

First lets solve this problem without using CountDownLatch

**CountDownLatchTest.java**

```java
import java.util.concurrent.CountDownLatch;

public class CountDownLatchTest {
    private static int N = 6;

    public static void main(String[] args) {
        try {
            for (int i = 0; i < N; i++) {
                new Thread(new MyWorker()).start();
            }

            System.out.println("*** Main Thread in Action ***");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

**MyWorker.java**

```java
import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.concurrent.CountDownLatch;

public class MyWorker implements Runnable {

    public MyWorker() {
    }

    @Override
    public void run() {
        try {
            URL url = new URL(
                    "http://3rdbillion.net/wp-content/uploads/2013/11/35e7e6728456fed40f4f1b27d5d41c8513.jpg");
            InputStream in = new BufferedInputStream(url.openStream());
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            int n = 0;
            while (-1 != (n = in.read(buf))) {
                out.write(buf, 0, n);
            }
            out.close();
            in.close();
            byte[] response = out.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("*** Worker Thread ****");

    }
}
```

In the above code snippet we have used multiple threads to download an image. (In this example, the downloaded image is only for demonstration, not being used for anything). Execute the above program, you will notice that it will results the output something similar as below

**Output**

```text
*** Main Thread in Action ***
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
```

### Using CountDownLatch Example

**CountDownLatchTest.java**

```java
import java.util.concurrent.CountDownLatch;

public class CountDownLatchTest {

    private static CountDownLatch _latch;
    private static int N = 6;

    public static void main(String[] args) {
        _latch = new CountDownLatch(N);

        try {
            for (int i = 0; i < N; i++) {
                new Thread(new MyWorker(_latch)).start();
            }

            _latch.await();

            System.out.println("*** Main Thread in Action ***");

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

**MyWorker.java**

```java
import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.concurrent.CountDownLatch;

public class MyWorker implements Runnable {
    private CountDownLatch _latch = null;

    public MyWorker(CountDownLatch _latch) {
        this._latch = _latch;
    }

    @Override
    public void run() {
        try {

            URL url = new URL(
                    "http://3rdbillion.net/wp-content/uploads/2013/11/35e7e6728456fed40f4f1b27d5d41c8513.jpg");
            InputStream in = new BufferedInputStream(url.openStream());
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[1024];
            int n = 0;
            while (-1 != (n = in.read(buf))) {
                out.write(buf, 0, n);
            }

            out.close();
            in.close();

            byte[] response = out.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("*** Worker Thread ****");

        _latch.countDown();
    }
}
```

**Output**

```text
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Worker Thread ****
*** Main Thread in Action ***
```

Notice the output above, the main thread was awaiting until all other worker threads completes their execution.  
If you like reading this post, please don’t forget to hit like or share with your friends!
