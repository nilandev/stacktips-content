---
id: 250
title: How to Remove Duplicate in ArrayList using Comparator
slug: how-to-remove-duplicate-in-arraylist-using-comparator
excerpt: This example shows how to remove duplicate from ArrayList using Comparator. The easiest way to remove duplicate is by passing the List to an Set. We will use Comparator to remove duplicate elements. Once you have the Set you can again pass it back to ArrayList.
difficulty: beginners
publishedDate: "2014-03-11T12:03:36.000Z"
updatedDate: "2025-09-16T23:05:32.693Z"
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

This example shows how to remove duplicate from ArrayList using Comparator. The easiest way to remove duplicate is by passing the List to an Set. We will use Comparator to remove duplicate elements. Once you have the Set you can again pass it back to ArrayList.

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class RemoveDuplicate {

	public static void main(String[] args) {

		final ArrayList students = new ArrayList();
		students.add(new Student("Student1", "1000"));
		students.add(new Student("Student2", "1001"));
		students.add(new Student("Student3", "1002"));
		students.add(new Student("Student4", "1003"));
		students.add(new Student("Student5", "1001"));
		students.add(new Student("Student6", "1004"));

		/** Printing original list **/
		System.out.println(students);

		Set set = new TreeSet(new Comparator() {
			@Override
			public int compare(Student o1, Student o2) {
				if(o1.getId().equalsIgnoreCase(o2.getId())){
	        		return 0;
	        	}
	        	return 1;
			}
		});
		set.addAll(students);

		System.out.println("\n***** After removing duplicates *******\n");

	    final ArrayList newList = new ArrayList(set);

	    /** Printing original list **/
		System.out.println(newList);
	}

}

class Student {
	private String name;
	private String id;

	public Student(String name, String id) {
		this.name = name;
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "\n" +"Name=" + name + "   Id=" + id ;
	}
}
```

### Output

```
[
Name=Student1   Id=1000, 
Name=Student2   Id=1001, 
Name=Student3   Id=1002, 
Name=Student4   Id=1003, 
Name=Student5   Id=1001, 
Name=Student6   Id=1004]

***** After removing duplicates *******

[
Name=Student1   Id=1000, 
Name=Student2   Id=1001, 
Name=Student3   Id=1002, 
Name=Student4   Id=1003, 
Name=Student6   Id=1004]
```
