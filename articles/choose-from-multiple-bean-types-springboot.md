---
id: 432
title: Choosing from Multiple Bean Implementations in Spring Boot
slug: choose-from-multiple-bean-types-springboot
excerpt: In this article we will explore what are the different approaches to inject beans conditionally when you have multiple implantation of an component or service.
difficulty: intermediate
publishedDate: "2024-03-09T14:48:26.000Z"
updatedDate: "2025-09-16T23:05:41.209Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/spring-boot-tutorials/tree/main/spring-boot-conditional-bean"
featured: false
thumbnail: /media/posts/choose-bean-from-multiple-bean-types-spring-boot.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

If you have multiple implementations of the same interface, Spring needs to know which bean to inject into a class.

In this article we will explore what are the different approaches to inject beans conditionally when you have multiple implantation of an component or service.

Let's us explore this example, we have 2 mail sender implementation, one using SES and other using default mail sender. For sake of simplicity, we have skipped the sending the actual mail, instead it logs which sender service is invoked.

```java
public interface MailSender {

    void sendMail(String from, String to, String subject);
}

@Service
public class DefaultMailSender implements MailSender {
    private final Logger logger = LoggerFactory.getLogger(DefaultMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using DefaultMailSender");
    }
}

@Service
public class SesMailSender implements MailSender {
    private final Logger logger = LoggerFactory.getLogger(HttpMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using SesMailSender");
    }
}
```

And in our MainApplication class, we have injected bean of `MailSender` class using constructor injection.

```java
@SpringBootApplication
public class MyApplication implements CommandLineRunner {

    private final MailSender mailSender;

    public MyApplication(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void run(String... args) throws Exception {
        mailSender.sendMail("hello@test.com", "john.doe@gmail.com", "Test mail");
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

When you run the application, it will return the following error;

```text
***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in com.stacktips.app.MyApplication required a single bean, but 2 were found:
    - defaultMailSender: defined in file [/Users/nilanchala/Documents/spring-boot-conditional-bean/build/classes/java/main/com/stacktips/app/service/DefaultMailSender.class]
    - sesMailSender: defined in file [/Users/nilanchala/Documents/spring-boot-conditional-bean/build/classes/java/main/com/stacktips/app/service/SesMailSender.class]

This may be due to missing parameter name information

Action:

Consider marking one of the beans as @Primary, updating the consumer to accept multiple beans, or using @Qualifier to identify the bean that should be consumed
```

It is because, as we have two implementations of the `EmailSender`, spring cannot determine which implementation to inject for `sendMail()` method invocation.

We have different options available to let spring know which implementation to choose. Let's explore.

### Option-1: Using @Primary Bean Annotation

When there are several bean implementations available, we can choose the primary bean candidate using the `@Primary` annotation.

For example;

```java
@Primary
@Service
public class DefaultMailSender implements MailSender {

    private final Logger logger = LoggerFactory.getLogger(DefaultMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using DefaultMailSender");
    }
}
```

With this, Spring will inject the bean of `DefaultMailSender`.

### Option-2: Autowiring using @Qualifier

The `@Primary` annotation provides limited control over the bean type selection. When you need more control over the selection process, we can use the `@Qualifier` annotation.

You can associate qualifier values with specific arguments, narrowing the set of type matches so that a specific bean is chosen for each argument.

For example;

```java
@SpringBootApplication
public class MyApplication implements CommandLineRunner {

    private final MailSender mailSender;

    public MyApplication(@Qualifier("sesMailSender") MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void run(String... args) throws Exception {
        mailSender.sendMail("hello@test.com", "john.doe@gmail.com", "Test mail");
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

```

As we are specifying `@Qualifier("sesMailSender")`, Spring will now inject the `sesMailSender` bean.

### Option-3: Using ApplicationContext to Dynamically Select Beans

Both approaches defined above uses static approach to inject bean types. To achieve dynamic bean selection based on certain conditions, we can use `@Autowired` in combination with `ApplicationContext`.

Let us create a factory class `EmailService`:

```java
@Component
public class MailService {

    private final ApplicationContext context;

    public MailService(ApplicationContext context) {
        this.context = context;
    }

    public MailSender getMailSender(String type) {
        if ("ses".equals(type)) {
            return context.getBean("sesMailSender", SesMailSender.class);
        }

        return context.getBean("defaultMailSender", DefaultMailSender.class);
    }

    public void sendMail(String from, String to, String subject) {
        getMailSender("ses").sendMail(from, to, subject);
    }
}
```

Now in our `MainApplication` class, instead of injecting `MailSender` bean, we can use `MailService` type instead.

```java
@SpringBootApplication
public class MyApplication implements CommandLineRunner {

    private final MailService mailService;

    public MyApplication(MailService mailService) {
        this.mailService = mailService;
    }

    @Override
    public void run(String... args) throws Exception {
        mailService.sendMail("hello@test.com", "john.doe@gmail.com", "Test mail");
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

### Option-4: Custom Annotation and Bean Factory

Another approach is to create a custom annotation and a factory that uses this annotation to decide which bean to inject dynamically based on certain conditions.

This is similar to Option-4, but using the custom annotation. This approach offers greater flexibility and keeps your code clean.

Let us first define a custom annotation:

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface MailSenderSelector {

    String value();
}
```

Now use the annotation in your `MailSender` services

```java
@Service
@MailSenderSelector("default")
public class DefaultMailSender implements MailSender {

    private final Logger logger = LoggerFactory.getLogger(DefaultMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using DefaultMailSender");
    }
}

@Service
@MailSenderSelector("ses")
public class SesMailSender implements MailSender {

    private final Logger logger = LoggerFactory.getLogger(SesMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using SesMailSender");
    }
}
```

Now we will implement a bean factory that checks this condition at runtime and selects the appropriate bean types based on the argument passed to the annotation.

```java
@Component
public class MailService {

    private final ApplicationContext context;

    public MailService(ApplicationContext context) {
        this.context = context;
    }

    public MailSender getMailSender(String type) {
        Map<String, Object> beansWithAnnotation = context.getBeansWithAnnotation(MailSenderSelector.class);
        Optional<Object> matchingBean = beansWithAnnotation.values().stream()
                .filter(bean -> bean.getClass().getAnnotation(MailSenderSelector.class).value().equals(type))
                .findFirst();

        if (matchingBean.isEmpty()) {
            throw new IllegalArgumentException("No bean found for type: " + type);
        }

        return (MailSender) matchingBean.get();
    }

    public void sendMail(String from, String to, String subject) {
        getMailSender("ses").sendMail(from, to, subject);
    }
}
```

### Option-5: Bean Selection Using Custom Conditions

Another approach is to define custom conditions to match the bean types to inject. This method determines whether a condition is met based on the application context and metadata.

```java
import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;
import org.springframework.stereotype.Component;

@Component
public class DefaultMailSenderCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        String mailSender = context.getEnvironment().getProperty("email.mail-sender");
        return null== mailSender || mailSender.trim().equals("default");
    }
}

@Component
public class SesMailSenderCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        String mailSender = context.getEnvironment().getProperty("email.mail-sender");
        return null != mailSender && mailSender.trim().equals("ses");
    }
}
```

The two conditions above uses the `email.mail-sender` application property value to determine the bean type to inject.

**application.properties**

```properties
#default or ses
email.mail-sender=ses
```

In this case, the condition for `SesMailSender` will be true, and thus, `SesMailSender` will be the active implementation of `MailSender` in the application context.

Now from mail sender implementations, we can use `@Conditional` annotation by passing the corresponding condition that dictates which bean should be registered.

```java
public interface MailSender {
    void sendMail(String from, String to, String subject);
}

@Primary
@Component
@Conditional(DefaultMailSenderCondition.class)
public class DefaultMailSender implements MailSender {

    private final Logger logger = LoggerFactory.getLogger(DefaultMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using DefaultMailSender");
    }
}

@Service
@Conditional(SesMailSenderCondition.class)
public class SesMailSender implements MailSender {

    private final Logger logger = LoggerFactory.getLogger(SesMailSender.class);

    @Override
    public void sendMail(String from, String to, String subject) {
        logger.info("Sending email using SesMailSender");
    }
}
```

There is no change in the main application class, we inject the `MailSender` instance using the constructor based injection.

```java
@SpringBootApplication
public class MyApplication implements CommandLineRunner {

    private final MailSender mailSender;

    public MyApplication(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void run(String... args) throws Exception {
        mailSender.sendMail("hello@test.com", "john.doe@gmail.com", "Test mail");
    }

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

For the complete project source code check out the download link.

If you have any questions, write down in the comment section below. Will be happy to respond, soon as I can.
