---
id: 127
title: How to Convert POJO to XML in Android
slug: how-to-convert-pojo-to-xml-in-android
excerpt: POJO is an acronym for Plain Old Java Object, basically a class with attributes and it’s getters and…
difficulty: beginners
publishedDate: "2013-08-11T09:20:32.000Z"
updatedDate: "2025-09-16T23:05:35.322Z"
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

POJO is an acronym for Plain Old Java Object, basically a class with attributes and it’s getters and setters. The name is used to emphasize that a given object is an ordinary Java Object, not a special object. The term “POJO” is mainly used to denote a Java object which does not follow any of the major Java object models, conventions, or frameworks.

Below example reads the pojo object instance variable and generates xml tags and values in the order of variable declaration in the given pojo class. You can assign tag names for each element.

#### Student.java

```java
public class Student {
    String name;
    String section;
    String id;

    public Student(String name, String id, String section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
```

#### MainActivity.java

```java
import java.io.IOException;
import java.io.StringWriter;
import org.xmlpull.v1.XmlSerializer;
import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.util.Xml;
import android.widget.TextView;

public class MainActivity extends Activity {
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = (TextView) findViewById(R.id.textView);

        Student pojo = new Student("Adam" , "100120", "Grade 6");
        // Serialization begins:
        XmlSerializer serializer = Xml.newSerializer();
        StringWriter writer = new StringWriter();
        try {
            serializer.setOutput(writer);
            // start document
            serializer.startDocument("UTF-8", true);
            serializer.setFeature("http://xmlpull.org/v1/doc/features.html#indent-output", true);

            serializer.startTag("", "students");
            serializer.startTag("", "student");
            serializer.attribute("", "ID", pojo.getId());
            serializer.startTag("", "name");
            serializer.text(pojo.getName());
            serializer.endTag("", "name");
            serializer.startTag("", "section");
            serializer.text(pojo.getSection());
            serializer.endTag("", "section");
            serializer.endTag("", "student");
            serializer.endTag("", "students");

            serializer.endDocument();
            // end document.

            Log.i("Pojo to xml", writer.toString());
            textView.setText("" + writer.toString());
            // Toast.makeText(getApplicationContext(), ""+ writer.toString(), 0).show();
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
```

#### Output XML

```xml
<students>
<student ID="100120">
<name>Adam</name>
<section>Grade 6</section>
</student>
</students>

```
