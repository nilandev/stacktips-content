---
id: 320
title: Handler and AsyncTask in Android
slug: handler-and-asynctask-in-android
excerpt: Handler and AsyncTasks are way to implement multithreading in android with UI/Event Thread. Handler is available since Android…
difficulty: beginners
publishedDate: "2013-07-17T12:37:58.000Z"
updatedDate: "2025-09-16T23:05:36.139Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Handler and AsyncTasks are way to implement multithreading in android with UI/Event Thread. Handler is available since Android API level 1 & AsyncTask is available since API level 3.

# What is Handler?

1.  Handler allows to add messages to the thread which creates it and It also enables you to schedule some runnable to execute at some time in future.
2.  The Handler is associated with the application’s main thread. It handles and schedules messages and runnables sent from background threads to the app main thread.
3.  If you are doing multiple repeated tasks, for example downloading multiple images which are to be displayed in ImageViews (like downloading thumbnails) upon download, use a task queue with Handler.
4.  There are two main uses for a Handler. First is to schedule messages and runnables to be executed as some point in the future; and second Is to enqueue an action to be performed on a different thread than your own.
5.  Scheduling messages is accomplished with the the methods like `post(Runnable)`, `postAtTime(Runnable, long)`, `postDelayed(Runnable, long)`, `sendEmptyMessage(int)`, `sendMessage(Message)`, `sendMessageAtTime(Message, long)`, and `sendMessageDelayed(Message, long)` methods.
6.  When a process is created for your application, its main thread is dedicated to running a message queue that takes care of managing the top-level application objects (activities, broadcast receivers, etc) and any windows they create.
7.  You can create your own threads, and communicate back with the main application thread through a Handler.

# What is AsyncTask ?

1.  Async task enables you to implement multi threading without get hands dirty into threads. AsyncTask enables proper and easy use methods that allows performing background operations and passing the results back to the UI thread.
2.  If you are doing something isolated related to UI, for example downloading data to present in a list, go ahead and use `AsyncTask`.
3.  AsyncTasks should ideally be used for short operations (a few seconds at the most.)
4.  An asynchronous task is defined by 3 generic types, called Params, Progress and Result, and 4 steps, called onPreExecute, doInBackground, onProgressUpdate and onPostExecute.
5.  In onPreExecute you can define code, which need to be executed before background processing starts.
6.  `doInBackground` have code which needs to be executed in background, here in doInBackground we can send results to multiple times to event thread by `publishProgress()` method, to notify background processing has been completed we can return results simply.
7.  `onProgressUpdate()` method receives progress updates from doInBackground method, which is published via publishProgress method, and this method can use this progress update to update event thread
8.  `onPostExecute()` method handles results returned by doInBackground
9.  The generic types used are
    -   `Params`, the type of the parameters sent to the task upon execution,
    -   `Progress`, the type of the progress units published during the background computation.
    -   `Result`, the type of the result of the background computation.
10.  If an async task not using any types, then it can be marked as Void type.
11.  An running async task can be cancelled by calling cancel(boolean) method.
