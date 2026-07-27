---
id: 431
title: Dynamic Scheduling in Quartz with Spring Boot Actuators
slug: dynamic-scheduling-in-quartz-with-spring-boot-actuators
excerpt: A step by step guide explains how to do the dynamic scheduling in quartz using custom spring boot actuators.
difficulty: intermediate
publishedDate: "2024-02-26T22:43:54.000Z"
updatedDate: "2025-09-16T23:05:41.172Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/quartz-scheduler"
featured: false
thumbnail: /media/posts/dynamic-scheduling-in-quartz-with-spring-boot-actuators.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In the previous article, we integrated the [Quartz Scheduler](/articles/working-with-quartz-scheduler-in-spring-boot) in Spring boot and covered some of the basic configurations.

In this second part, we will dive into some of the advance Quartz configurations and we will create a [custom actuator](/articles/working-with-spring-boot-actuators) to manage the Quartz Job using actuator endpoints.

### Actuator Dependency

To enable the Actuator endpoints, we need include the `spring-boot-starter-actuator` starter dependency to your project. If you have Gradle based project, you can add the following dependency to your `build.gradle` file.

```groovy
dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-actuator
}
```

If you’re using maven, you can include the following dependency on your `pom.xml` file.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Once you have the dependency added to your application, Spring Boot’s auto-configuration will kick in when the application is running and Actuator will be enabled.

### Custom Actuator Endpoint

Let us now create a custom actuator to start, and stop scheduled jobs using actuator endpoints. To learn more about [Spring Boot actuator](https://stacktips.com/articles/working-with-spring-boot-actuators) basics, please can refer to the linked article.

In this example, we have `actuator/manage-jobs` actuator endpoint with `@WriteOperation` that accepts an `action`, `jobName` and `jobGroup` as a input parameter.

```java
@Component  
@Endpoint(id = "manage-jobs")  
public class QuartzJobEndpoint {  

    private static final Logger log = LoggerFactory.getLogger(QuartzJobEndpoint.class);  
    private final QuartzJobService quartzJobService;  

    public QuartzJobEndpoint(QuartzJobService quartzJobService) {  
        this.quartzJobService = quartzJobService;  
    }  

    @WriteOperation
    public void manageJob(String action, String jobName, String jobGroup) {
        try {
            if ("start".equals(action)) {
                String triggerName = "csvImportInterruptableJobTrigger";
                quartzJobService.startJob(jobName, jobGroup, triggerName);
            } else if ("stop".equals(action)) {
                quartzJobService.stopJob(jobName, jobGroup);
            }
        } catch (SchedulerException e) {
            log.error("Error while managing job", e);
        }
    }
}
```

By default, only the `health` endpoint is exposed over HTTP. To allow `manage-job` accessible we need to `include` the following property.

```properties
management.endpoints.web.exposure.include=health,manage-jobs
```

### Service to Manage Dynamic Scheduling

The custom uses `QuartzJobService` to manage the Jobs. The service class contains following methods:

-   `scheduleJob()`: Schedules a new job with the given name, group, and trigger name. It uses the `CsvImportInterruptableJob.class` for the job detail, indicating that this specific job class will be executed.
-   `startJob()`: Starts a job if it does not already exist; otherwise, it triggers the existing job. It uses the job and group names to check for the job's existence and to trigger it.
-   `stopJob()`: Stops and deletes a job based on its name and group. It first interrupts the job and then deletes it from the scheduler.
-   `updateJob()`: It replaces the old trigger with a new one for the specified job based on the new cron expression.

In this example, we are using hardcoded CRON expression, the endpoint can be extended to pass the cron expression as a input.

```java
import com.stacktips.app.tasks.CsvImportInterruptableJob;
import org.quartz.*;  
import org.springframework.stereotype.Service;

@Service
public class QuartzJobService {

    private static final String CRON_EXPRESSION = "0/5 * * * * ?";
    private final Scheduler scheduler;

    public QuartzJobService(Scheduler scheduler) {
        this.scheduler = scheduler;
    }

    public void scheduleJob(String jobName, String jobGroup, String triggerName) throws SchedulerException {
        JobDetail job = JobBuilder.newJob(CsvImportInterruptableJob.class)
                .withIdentity(jobName, jobGroup)
                .build();

        Trigger trigger = TriggerBuilder.newTrigger()
                .withIdentity(triggerName, jobGroup)
                .startNow()
                .withSchedule(CronScheduleBuilder.cronSchedule(CRON_EXPRESSION))
                .build();

        scheduler.scheduleJob(job, trigger);
        if (!scheduler.isStarted()) {
            scheduler.start();
        }
    }

    public void startJob(String jobName, String jobGroup, String triggerName) throws SchedulerException {
        JobKey jobKey = new JobKey(jobName, jobGroup);
        if (!scheduler.checkExists(jobKey)) {
            scheduleJob(jobName, jobGroup, triggerName);
        } else {
            scheduler.triggerJob(jobKey);
        }
    }

    public void stopJob(String jobName, String jobGroup) throws SchedulerException {
        JobKey jobKey = new JobKey(jobName, jobGroup);
        scheduler.interrupt(jobKey);
        scheduler.deleteJob(jobKey);
    }

    public void updateJob(String triggerName, String newTriggerName, String jobName, String jobGroup) throws SchedulerException {

        Trigger newTrigger = TriggerBuilder.newTrigger()
                .withIdentity(triggerName, jobGroup)
                .startNow()
                .withSchedule(CronScheduleBuilder.cronSchedule(CRON_EXPRESSION))
                .build();

        scheduler.rescheduleJob(TriggerKey.triggerKey(newTriggerName, jobGroup), newTrigger);
        scheduler.deleteJob(JobKey.jobKey(jobName, jobGroup));
    }  

}
```

### Using Actuator to Manage Quartz Jobs

With this we are ready to dynamically schedule our Quartz job.

**To Start a Job**

```shell
curl --location 'http://localhost:8080/actuator/manage-jobs' \
--header 'Content-Type: application/json' \
--data '{
    "action":"start",
    "jobName":"csvjob",
    "jobGroup":"gbgroup1"
}'
```

**To Stop a Job**

```shell
curl --location 'http://localhost:8080/actuator/manage-jobs' \
--header 'Content-Type: application/json' \
--data '{
    "action":"stop",
    "jobName":"csvjob",
    "jobGroup":"gbgroup1"
}'
```

**To Update an Existing Job**

```shell
curl --location 'http://localhost:8080/actuator/manage-jobs' \
--header 'Content-Type: application/json' \
--data '{
    "action":"start",
    "jobName":"csvjob",
    "jobGroup":"gbgroup1"
}'
```
