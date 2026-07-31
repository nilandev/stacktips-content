---
id: 380
title: Task Execution and Scheduling in Spring Boot
slug: task-execution-and-scheduling-in-spring-boot
excerpt: Article covers everything you need to know about Spring Scheduler – including the annotations, examples, and other things to consider.
difficulty: beginner
publishedDate: "2024-02-14T17:05:32.000Z"
updatedDate: "2025-09-16T23:05:41.026Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/posts/Task_Scheduler_Spring_Boot.jpeg
topics: 
  - spring-boot
tags:
  - spring-scheduled-annotation
  - spring-boot-cron-expression
  - fixedrate-vs-fixeddelay
  - spring-task-scheduler
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Spring Scheduler is used for running repetitive tasks or to automate tasks that need to run at specific times or at specific intervals. For example such as sending our email newsletters to your customers, generating daily reports, or updating a database.  

In this crash course, we will cover everything you need to know about Spring Scheduler – including the annotations, examples, and other things to consider.

## Enable Scheduling

To enable Spring's scheduled task execution capability, just annotate any of your `@Configuration` classes with `@EnableScheduling` annotation.

**Example:**

```java
@Configuration
@EnableScheduling
public class SchedulerConfig {
    // Here it goes your configuration
}
```

### Cron expression

A Cron expression consists of six sequential fields and is declared as `second, minute, hour, day of month, month, day(s) of week`.

```text
┌───────────── second (0-59)
│ ┌───────────── minute (0 - 59)
│ │ ┌───────────── hour (0 - 23)
│ │ │ ┌───────────── day of the month (1 - 31)
│ │ │ │ ┌───────────── month (1 - 12) (or JAN-DEC)
│ │ │ │ │ ┌───────────── day of the week (0 - 7)
│ │ │ │ │ │              (0 or 7 is Sunday or MON-SUN)
│ │ │ │ │ │
* * * * * *
```

Ref: [https://crontab.guru/](https://crontab.guru/)

And is declared as follows:

```java
@Slf4j
@Component
public class MyScheduler {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(cron = "*/5 * * * * *")
    public void currentTime() {
        log.info("Current Time = {}", dateFormat.format(new Date()));
    }

}
```

We can also set the timezone as: [https://docs.oracle.com/cd/B13866\_04/webconf.904/b10877/timezone.htm](https://docs.oracle.com/cd/B13866_04/webconf.904/b10877/timezone.htm)

```java
@Scheduled(cron="* * * * * *", zone="Europe/London")
```

### Fixed delay

The `fixedDelay` property makes sure that there is a delay of n millisecond between the finish time of an execution of a task and the start time of the next execution of the task.

```java
@Component
public class MyScheduler {

    @Scheduled(fixedDelay=5000)
    public void doSomething() {
       //This will execute periodically, after the one before finishes
    }

}
```

By default, milliseconds will be used as the time unit for fixed delay, fixed rate, and initial delay values. If you would like to use a different time unit such as seconds or minutes, you can configure this via the `timeUnit` attribute in `@Scheduled`.

For example, the previous example can also be written as follows.

```java
@Component
public class MyScheduler {

    @Scheduled(fixedDelay=5, timeUnit = TimeUnit.SECONDS)
    public void doSomething() {
       //This will execute periodically, after the one before finishes
    }

}
```

### Fixed Rate

The `fixedRate` is used when we want to execute a task periodically at every n millisecond without checking for any previous executions of the task.

```java
@Component
public class MyScheduler {

    @Scheduled(fixedRate=5000)
    public void doSomething() {
       //This will execute periodically
    }
}
```

For both `fixedDelay` and `fixedRate` tasks, you can specify an `intialDelay` by indicating the amount of time to wait before the first execution of the method.

```java
@Component
public class MyScheduler {

    @Scheduled(initailDelay=1000, fixedRate=5000)
    public void doSomething() {
      //This will execute periodically
    }
}
```

### Schedule Tasks and Concurrency

Spring Boot uses a `ThreadPoolTaskScheduler` to execute scheduled tasks. By default, this thread pool has a single thread. This means that only one scheduled task can be executed at a time.

If you need to execute multiple tasks concurrently, then you need to configure the `ThreadPoolTaskScheduler` to have the required thread pool size.

```java
@Bean
public ThreadPoolTaskScheduler threadPoolTaskScheduler() {
    ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
    threadPoolTaskScheduler.setPoolSize(5);
    return threadPoolTaskScheduler;
}
```

Also, we need to use the `@Async` annotation to mark the scheduled task as asynchronous. This will make Spring Boot execute the tasks in separate threads.

```java
@Async
    @Scheduled(fixedDelay = 1000)
    public void startUsingFixedDelay() {
        log.info("startUsingFixedDelay:: Task started at {}", DATE_FORMAT.format(new Date()));
    }
```

### Aggregate Scheduled annotations

The `@Schedules` annotation is a container annotation that aggregates several Scheduled annotations.

```java
@Schedules({
   @Scheduled(fixedRate = 10000),
   @Scheduled(cron = "0 * * * * MON-FRI")
})
public void doSomething() {
    //This will execute periodically
}
```

Prior to Java 8, a wrapper/container annotation was required to use multiple instances of the same annotation. But Java 8 supports repeatable annotations so wrapper annotation is no longer necessary. Multiple annotations can be used without a wrapper.

```java
@Scheduled(fixedRate = 10000)
@Scheduled(cron = "0 * * * * MON-FRI")
public void doSomethingElse4() {
    //This will execute periodically
}
```

This rule is automatically disabled when the project’s sonar.java.source is lower than 8 as repeating annotations were introduced in Java 8.

## Testing the Scheduler using Awaitility

Testing the scheduler can be a little tricky. We can test this by manually waiting for `x` number of minutes using `Thread.sleep()` , but for complex scenarios, this will be hard to scale.

This is where we can use a framework like **Awaitility** to wait for a certain condition to be met while running your test. In this case, we want to wait for `1000` milliseconds before we assess the test results.

Let's first add the `awaitility` test dependency on your `build.gradle` file.

```groovy
testImplementation 'org.awaitility:awaitility:3.1.2'
```

Now,

```java
@SpringJUnitConfig(SchedulerConfig.class)
class MySchedulerTest {

    @SpyBean
    MyScheduler scheduler;

    @Test
    void givenSleepBy1000ms_whenStartTask1() {

        Awaitility.await()
                .atMost(1000, TimeUnit.MILLISECONDS)
                .untilAsserted(() -> {
                    verify(scheduler, atLeast(1)).startUsingFixedDelay();
                });
    }

}
```

## Task Monitoring:

Spring boot [actuators](https://stacktips.com/courses/spring-boot-for-beginners/working-with-spring-boot-actuators) provides the `/scheduledtasks` endpoint to monitor the list of tasks scheduled and their configurations. To enable this we need to add the actuator starter dependencies.

```groovy
implementation 'org.springframework.boot:spring-boot-starter-actuator'
```

Once Actuator dependencies is added, we need to explicitly include the `scheduledtasks` endpoint by using the following property

```text
management.endpoints.web.exposure.include=scheduledtasks
```

## Did you know?

**What happens if a scheduled task throws an exception?** If any exception is encountered during the scheduled task execution and if it is not handled gracefully using a try-catch block then the Spring Logging Error Handler will handle the exception and log the error details.

The next instances of that task will continue to execute as per the schedule.

**What happens if a scheduled task takes longer than its scheduled interval?** In the case of a fixed rate, if a scheduled task takes longer than its scheduled interval, the Spring Scheduler will start the next execution of the task immediately after the previous one is completed.

This can cause tasks to overlap, which may impact performance.

## Limitations of Spring Scheduler

-   **No support for dynamic Scheduling**: The `@Scheduled` annotations are typically configured at application startup and do not support [dynamic scheduling](https://stacktips.com/articles/dynamic-scheduling-in-quartz-with-spring-boot-actuators) without redeploying the application.
-   **No support for Job Persistence**: It does not offer built-in support for Job persistence, as a result, job recovery in the event of an application restart is not possible.
-   **No clustering, load balancing**: It does not support clustering and load balancing, The tasks are typically run on a single node.
-   **Limited control**: It does not allow fine-grained control over managing the tasks. For example, we cannot pause, resume, and unscheduled jobs individually.

Spring Scheduler is sufficient for many simple scheduling tasks, but if you have complex scheduling requirements, job management, and monitoring, then you would need another framework like [Quartz](https://stacktips.com/articles/working-with-quartz-scheduler-in-spring-boot).
