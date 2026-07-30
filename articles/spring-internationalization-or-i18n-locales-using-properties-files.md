---
id: 120
title: Spring Internationalization or i18n Locales Using Properties Files
slug: spring-internationalization-or-i18n-locales-using-properties-files
excerpt: The string message for different locale are stored in separate properties files. These properties files are also called as resource bundles. Spring application context can resolve text messages for target locales by keys.
difficulty: beginners
publishedDate: "2015-10-07T21:46:43.000Z"
updatedDate: "2025-09-16T23:05:25.939Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/154/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Most commercial websites are targeted for global users. This means that you need to make your application to support different languages. Spring provides built in support for localizing strings used across application.

The string message for different locale are stored in separate properties files. These properties files are also called as resource bundles. Spring application context can resolve text messages for target locales by keys. By convention the Java resource bundle files are named as `__.properties`.

Spring uses the `MessageSource` interface to resolve the resource bundles. The ApplicationContext interface extends MessageSource interface so that all application contexts are able to resolve text messages. An application context delegates the message resolution to a bean with the name `messageSource`. `ResourceBundleMessageSource` is the most common MessageSource implementation that resolves messages from resource bundles for different locales.

Create a properties file containing your static strings in your default locale i.e English. In our example we will create `message.properties` file.

**message.properties**

```text
message.hello = Hello
message.welcome = {0}. {1} {2} welcome to stacktips.com.
```

Next thing we will do is to add translated strings in a separate file. By convention the file names are append the name of the file with an “underscore” sign followed by the locale code of the language you are translating it to.

In this example, we will crate the French translation of the above strings. Create a new file named `message_fr.properties` and paste the following strings.

**message\_fr.properties**

```text
message.hello = Bonjour
message.welcome = {0}. {1} {2} Bienvenue a stacktips.com.
```

Please note that, I have used Google translator to translate the above messages in to French version.

Now we need to tell Spring to handle the localization by using the above two files. This can be done by adding the `ResourceBundleMessageSource` bean in `beans.xml` declaration.

Notice that in the above bean configuration, the basename is used to tell the Spring IoC controller, which file to look for for resolving the localized string.

Now, let us load the strings form different files based on the selected locale.

```java
public class Main {
    public static void main(String[] args) throws Exception {
        ApplicationContext context = new GenericXmlApplicationContext("beans.xml");

        String helloEn = context.getMessage("message.hello", null, Locale.ENGLISH);
        String welcomeEn = context.getMessage("message.welcome", new String[] { "Mrs", "Sally", "Peterson" }, Locale.ENGLISH);
        System.out.println(helloEn +  welcomeEn);

        String helloFr = context.getMessage("message.hello", null, Locale.FRENCH);
        String welcomeFr = context.getMessage("message.welcome", new String[] { "Mr", "Sally", "Peterson" }, Locale.FRENCH);
        System.out.println(helloFr  + welcomeFr);
    }
}
```
