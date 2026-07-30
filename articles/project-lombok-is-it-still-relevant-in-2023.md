---
id: 421
title: Project Lombok-Is it Still Relevant in 2023?
slug: project-lombok-is-it-still-relevant-in-2023
excerpt: "What is Project Lombok? Have you used this magical library? With the new Java Records feature, you might wonder if Lombok is still relevant. Let's weigh the pros and cons and see if this is suitable for you."
difficulty: intermediate
publishedDate: "2023-12-03T22:07:03.000Z"
updatedDate: "2025-09-16T23:05:40.532Z"
videoLink: null
githubLink: null
featured: true
thumbnail: /media/posts/project-lombok-is-it-still-relevant-in-2023.jpeg
topics: 
  - spring-boot
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

_What is Project Lombok? Have you used this magical library? With the new Java Records feature, you might wonder if Lombok is still relevant. Let's weigh the pros and cons and see if this is suitable for you._

## What is Project Lombok?

Project Lombok is a popular Java library, used to remove the boilerplate code with the intent to save development time.

It replaces the boilerplate code such as getters, setters, constructors, toString, equals, and builders with a set of annotations. This means less code, saves time, and reduces verbosity, making your codebase cleaner, readable, and more maintainable.

It also includes utilities such as `delombok` checking null values and `@Slf4j` for logging support.

For example, traditionally a class declaration looks something like this;

```java
public class Car {
    private String model;
    private int year;
    private String fuelType;

    public Car() {
    }

    public Car(String model, int year, String fuelType) {
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return year == car.year && Objects.equals(model, car.model) && Objects.equals(fuelType, car.fuelType);
    }

    @Override
    public String toString() {
        return "Car{" +
                "model='" + model + '\'' +
                ", year=" + year +
                ", fuelType='" + fuelType + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(model, year, fuelType);
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
}
```

But with Lombok, we can write the same code using a bunch of annotations.

```java
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Car {
    String model;
    int year;
    String fuelType;
}
```

Alternatively, you can also replace all the above annotations with just one `@Data` annotation.

### How Lombok Works?

It works by using an annotation processor to modify the abstract syntax tree (AST) of your code during compilation. The annotation processor reads annotations defined in your class and adds required methods to the AST.

The compiler then uses the modified AST to produce the bytecode.

### Lombok Annotations

| @Getter, @Setter | Generates getters and setter methods for the field. |
| --- | --- |
| @NoArgsConstructor, @AllArgsConstructor, @RequiredArgsConstructor | Generates constructors for your class |
| @Builder | Provides a builder pattern interface for the annotated class. |
| @Data | Equivalent to adding the annotations @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode to your class |
| @Value | Makes the class instances immutable |
| @NonNull | Null check |
| @SneakyThrows | Could be added to a method that throws a checked exception |
| @ToString | Generates a toString() method |
| @EqualsAndHashCode | Generates an .equals(..) and a .hashCode() methods |

Check out the official documentation for all Lombok annotations and their usage. [https://t.co/HoiMNzPm4k](https://t.co/HoiMNzPm4k)  

## Things to consider

While it promotes simplicity and clean code, it does too much magic in the background, and for newbie developers, it can be quite confusing.

### Find usage problem

When using Lombok you don't see the generated getter, setter, constructor, builder methods, etc. So, if you want to want to find out where these methods are being used in your project, you can't do this without being dependent on IDE plugins.

### Misuse of @Builder

With Lombok, a builder is so easy to create that even when a class has only two parameters the developers prefer to use @Builder instead of a constructor or a static constructor method. Doing so makes it more harm than good.

### The @Value annotation and final class

The `@Value` annotations make the class Final. It is basically the immutable variant of `@Data` annotation.

All fields are made private and final by default and this does not generate any setter methods. If you want to make your class extendable, then you cannot use the `@Value` annotation.

```java
@Value
public class Car {
    String model;
    int year;
    String fuelType;
}
```

The same behavior for a class can be achievable natively in Java using Java 16 records. With records, you can define the data fields in one line of code, instead of having to define a constructor and getter/setter methods for each field in a class.

Records also have a built-in `equals()` and `hashCode()` method and they are _**immutable**_ by default. It makes your code shorter, easier to read, and less prone to errors.

```java
public record Car(String model, int year, String fuelType) {

}
```

With the inclusion of records in Java, one would wonder if you need Lombok at all.

### Using @Data on Entities

You need to use the `@Data` annotation very cautiously. It can cause serious serialization issues with ORMs like Hibernate and serializer engines like Gson.

Do yourself a favor and read this article:

https://thorben-janssen.com/lombok-hibernate-how-to-avoid-common-pitfalls/  

## The Verdict

Lombok is just one tool in the toolbox. You need to understand the trade-offs and consider team expertise before considering this. Lombok makes a lot of sense in Greenfield and small projects to get off the ground. Introducing larger projects has mixed benefits at best.

If you using an IDE such as IntelliJ, it is pretty easy to generate these boilerplate codes, and enabling the code folding can help to make your code more readable.

Unless you know what you're doing, I suggest holding back on your temptation to use Lombok.
