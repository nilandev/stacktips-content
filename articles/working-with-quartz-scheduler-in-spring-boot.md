---
id: 430
title: Working with Quartz Scheduler in Spring Boot
slug: working-with-quartz-scheduler-in-spring-boot
excerpt: A step by step guide that covers different configuration of Quartz Scheduler and integration with Spring Boot application.
difficulty: beginner
publishedDate: "2024-02-22T22:43:58.000Z"
updatedDate: "2025-09-16T23:05:41.139Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/quartz-scheduler"
featured: true
thumbnail: /media/posts/working-with-quartz-scheduler-in-spring-boot.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Quartz Scheduler is an open-source job scheduling library that allows developers to schedule jobs to run at a certain time or based on specific events. This library eliminates the [limitations in the Spring scheduler](https://stacktips.com/articles/task-execution-and-scheduling-in-spring-boot#limitations-of-spring-scheduler).

Quartz allows developers to:

-   Schedule jobs to run at a specific time, or repeat at intervals - Store jobs and their triggers in a database, allowing scheduled jobs to persist between application restarts.
-   Run in a clustered environment, allowing jobs to be distributed across a cluster of servers for load balancing or redundancy.
-   Allows transaction management to ensure the jobs are only executed after transactions are successfully committed.

## Using Quartz Scheduler Spring Boot

In the course of this article, we will cover different aspects of the Quartz Scheduler and integrate it with Spring Boot application.

Let us first create a simple scheduler to import content from a CSV file using basic configurations. The [sample CSV file](https://github.com/StackTipsLab/spring-boot-tutorials/blob/main/quartz-scheduler/src/data/books.csv) containing list of books.

### Quartz Starter Dependency

Before we begin, we need to add the Quartz starter dependency to our Spring boot application. For Maven add the following dependency to your `pom.xml` file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

If you're using Gradle build tool, you can add the the following to your `build.gradle` file:

```groovy
implementation 'org.springframework.boot:spring-boot-starter-quartz'`
```

The CSV content maps to the following `Book` model. Please note, I am using [Java17 record](https://stacktips.com/articles/java-17-interview-questions-and-answers#1-what-is-the-records-in-java) for this purpose. If you're using lower version of Java, you can write a simple POJO class.

```java
public record Book(  
        String id,  
        String isbn,  
        String isbn13,  
        String authors,  
        String publicationYear,  
        String title,  
        String languageCode,  
        Double averageRating,  
        String imageUrl) {  
}
```

To keep the scope of this article limited to the task scheduler, we will not perform any database operations. Here is how our `ImportService` looks like:

```java
@Service  
public class ImportService {  

    private static final Logger log = LoggerFactory.getLogger(ImportService.class);  

    public void readBooks() throws IOException, CsvException {  
        File file = new File("src/data/books.csv");  
        log.info("Importer started!");  

        try (CSVReader csvReader = new CSVReader(new FileReader(file))) {  
            final List<String[]> rows = csvReader.readAll();  
            List<Book> books = rows.stream()  
                    .skip(1)  
                    .map(row -> new Book(row[0], row[1], row[2], row[3], row[4],  
                            row[5], row[6], Double.parseDouble(row[7]), row[8]))  
                    .toList();  
            log.info("Imported {} books", books.size());  
        }  

        log.info("Importer completed!");  
    }  
}
```

The `ImporterService` is responsible for reading the CSV file, you can extend this service to do whatever logic required for your application.

Let us now dive into Quartz scheduler.

### Creating Quartz Job

Define a job class that implements the Quartz `Job` interface. This class will contain the logic for reading the CSV file and loading its contents into the database.

```java
public class CsvImportJob implements Job {

    private static final Logger log = LoggerFactory.getLogger(CsvImportJob.class);
    private final ImportService importService;

    public CsvImportJob(ImportService importService) {
        this.importService = importService;
    }

    @Override  
    public void execute(JobExecutionContext context) throws JobExecutionException {
        try {
            JobDataMap dataMap = context.getJobDetail().getJobDataMap();
            String param = dataMap.getString("arg1");

            log.info("CsvImportJob started with param: {}", param);
            importService.readBooks();

        } catch (IOException e) {
            log.error("IOException thrown while running job", e);
            throw new RuntimeException(e);
        } catch (CsvException e) {
            log.error("CsvException thrown while running job", e);
            throw new RuntimeException(e);
        }
    }  
}
```

### Cron Based Trigger

Now that we have created the `CsvImportJob`, we can leverage the Spring's configuration and dependency injection capability to trigger the job.

The `spring-boot-starter-quartz` dependency automatically configures a `SchedulerFactoryBean`.

The `SchedulerFactoryBean` is a Quartz's standard factory implementation that is responsible for creating a `Scheduler` instance.

```java
@Configuration  
public class QuartzConfig {  

    @Bean
    public JobDetail csvImportJob() {
        return JobBuilder.newJob(CsvImportJob.class)
                .withIdentity("csvImportJob")          
                .build();
    }  

    @Bean
    public Trigger csvImportJobTrigger(JobDetail csvImportJob) {
        return TriggerBuilder.newTrigger()
                .forJob(csvImportJob)
                .withIdentity("cronTrigger")
                .withSchedule(CronScheduleBuilder.cronSchedule("0/5 * * * * ?"))
                .build();
    }
}
```

The Quartz `Scheduler` is aware of all `JobDetail` and `Trigger` beans defined in the Spring context and automatically schedules the jobs based on the triggers associated with them.

We have used cron expression that triggers the job every 5 seconds (`"0/5 * * * * ?"`).

### Interval Based Trigger

Along with the cron trigger, we can also schedule job to start at a specific moment in time, and optionally, repeat it at a specified interval a fixed number of times using the `SimpleScheduleBuilder`.

When defining a interval based trigger, we need to specify the start time, repeat interval, and optionally the number of repeats.

```java
@Bean  
    public Trigger csvImportJobTrigger(JobDetail csvImportJob) {  
        // Initial delay
        Date afterFiveSeconds = Date.from(LocalDateTime.now().plusSeconds(5)  
                .atZone(ZoneId.systemDefault()).toInstant());  

        return TriggerBuilder.newTrigger()  
                .forJob(csvImportJob)  
                .startAt(afterFiveSeconds) // Initial delay 
                .withIdentity("simpleTrigger") 
                .withSchedule(SimpleScheduleBuilder.simpleSchedule()  
                        .withIntervalInSeconds(60)  
                        .repeatForever())  
                .build();  
    }
```

> \[!NOTE\] If you're using the Job interface for tasks, these jobs cannot be interrupted before completion. Once started, these jobs will run to completion unless an unhandled exception occurs.

## Interruptable Jobs in Quartz

The `InterruptableJob` interface extends the `Job` interface and adds the ability for the job to be interrupted in the middle of execution. This is useful for long-running tasks that might need to be stopped before they complete normally.

To create an Interruptible Job, we need to implement the `InterruptableJob` interface and implement the `interrupt()` method. The `interrupt()` method is called by the Quartz Scheduler when a user interrupts the Job.

```java
public class CsvImportInterruptableJob implements InterruptableJob {  

    private static final Logger log = LoggerFactory.getLogger(CsvImportInterruptableJob.class);  

    private final ImportService importService;  

    public CsvImportInterruptableJob(ImportService importService) {  
        this.importService = importService;  
    }  

    private volatile boolean toStop = false;  

    @Override  
    public void execute(JobExecutionContext context) throws JobExecutionException {  
        while (!toStop) {  

            try {  
                JobDataMap dataMap = context.getJobDetail().getJobDataMap();  
                String param = dataMap.getString("param");  

                log.info("CsvImportInterruptableJob started with parameter: {}", param);  
                importService.readBooks();  

            } catch (IOException e) {  
                log.error("IOException thrown while running job", e);  
                throw new RuntimeException(e);  
            } catch (CsvException e) {  
                log.error("Exception thrown while running job", e);  
                throw new RuntimeException(e);  
            }  

            if (Thread.interrupted()) {  
                // Perform any cleanup tasks and terminate  
                toStop = true;  
            }  
        }  

    }  

    @Override  
    public void interrupt() throws UnableToInterruptJobException {  
        toStop = true;  
    }  
}
```

The `interrupt()` method allows the job to handle interruption requests, such as cleaning up resources or rolling back transactions, before the job stops.

This article covers the basics of Scheduler using Quartz. In the next article we will cover more advance configurations and dynamic scheduling using Spring Boot actuators.

For the complete project source code check out the download link.

If you have any questions, write down in the comment section below. Will be happy to respond, soon as I can.
