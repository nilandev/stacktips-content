---
id: 95
title: Serializing .NET object using JSON.NET and ContractResolver example
slug: serializing-net-using-json-net-and-contractresolver-example
excerpt: JSON.NET is one of the popular, advanced and high-performance JSON framework for .NET. Here in this example we will look at following use cases for serializing .NET object into JSON String.
difficulty: beginners
publishedDate: "2015-03-17T00:41:30.000Z"
updatedDate: "2025-09-16T23:05:27.927Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - bootstrap
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

JSON.NET is one of the popular, advanced and high-performance JSON framework for .NET. Here in this example, we will look at following use cases for serializing the .NET object into JSON String.

# 1\. Declaring entity class

Before we begin with the example, let us take declare the entity class to be serialized. For the sake of simplicity, this example uses a simple entity class Employee with the following attributes.

```csharp
public class Employee
{
    public int EmpId { get; set; }
    public string Name { get; set; }
    public double Salary { get; set; }
    public string Department { get; set; }
    public bool IsSingle { get; set; }
}
```

# 2\. Serializing .NET object using JSON.NET

JSON.NET presents easy method of serializing .NET object into JSON string. All you have to do is include `Newtonsoft.Json` namespace and call `JsonConvert.SerializeObject` by passing the object for serialization.

```csharp
public static void Main (string[] args)
{
    //Creating a new emplyoee entity object
    Employee e = new Employee ();
    e.EmpId = 1001;
    e.Name= "Nilanchala";
    e.IsSingle = true;
    e.Department="Engineering";

    string json = JsonConvert.SerializeObject(e);
    Console.WriteLine(json);
}
```

The output of the above code is depicted in the following screenshot

[![Serializing .NET object using JSON.NET](/media/articles/207/Serializing-.NET-object-using-JSON.NET_.png)](http://stacktips.com)

# 3\. Serialize and indent JSON using JSON.NET

As you can see in the screenshot above, the JSON object is not readable. It can be formatted with indent using the `Formatting.Indented` parameter.

```csharp
string json = JsonConvert.SerializeObject(e, Formatting.Indented);
Console.WriteLine(json);
```

Output of the above code snippet is as shown in the screenshot below

[![Serialize and Indent using JSON.NET](/media/articles/207/Serialize-and-Indent-using-JSON.NET_.png)](http://stacktips.com)

# 4\. Skip attributes using annotation in JSON.NET

Notice that in the above two steps, we are serializing all of the attributes of the entity class. But in realtime, you may have to skip some of the attributes while converting .NET object into JSON string. The following two sections will show you how to achieve it.

There are two ways to achieve this. The simplest way is to do it by using annotation. All you have to do is to add some of the annotation fields to your entity class. In this method you don’t need to do any changes to the code for serialization.

```csharp
[JsonObject(MemberSerialization.OptIn)]
public class Employee
{
    [JsonProperty]
    public int EmpId { get; set; }
    [JsonProperty]
    public string Name { get; set; }
    [JsonProperty]
    public double Salary { get; set; }
    [JsonProperty]
    public string Department { get; set; }

    //Do not serialize this
    public bool IsSingle { get; set; }
}
```

As you can notice, we are skipping IsSingle attribute for deserializing. The following screenshot depicts the output.  
[![Skip attributes using annotation while serializing in JSON.NET](/media/articles/207/Skip-attributes-using-annotation-while-serializing-in-JSON.NET_.png)](http://stacktips.com)

# 5\. Skip attributes using ContractResolver

The above step is sweet easy step to skip the attributes. However, you can still do the same without changing your entity class and using ContentResolver.

Extend your DefaultContractResolver class and override `CreateProperties()` method. Notice that CreateProperties() method returns of `JsonProperty` to be serialized.

```csharp
public class SkipKeysContractResolver : DefaultContractResolver
{
    private IList<string> attributesList = null;
    public SkipKeysContractResolver(IList<string> propertiesToSerialize)
    {
        attributesList = propertiesToSerialize;
    }

    protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
    {
        IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);
        return properties.Where(p => attributesList.Contains(p.PropertyName)).ToList();
    }
}
```

Now use the following code

```csharp
//List properties to be seriliazed
List<string> propertiesToSerialize = new List<string>(new string[] {"EmpId", "Name", "Salary", "Department" });

// Create a contract resolver
SkipKeysContractResolver contractResolver = new SkipKeysContractResolver(propertiesToSerialize);
var settings = new JsonSerializerSettings ();
settings.ContractResolver = contractResolver;
string json = JsonConvert.SerializeObject(e, Formatting.Indented, settings);
Console.WriteLine(json);
```

The output of the above code is the same as the above screenshot.

# 6\. Lowercase all keys using ContractResolver

JSON.NET serializes the .NET objects into JSON by maintaining the case of each attribute. The following code snippet will help you to change all the keys to upper case or lower case.

```csharp
public class LowercaseContractResolver : DefaultContractResolver
{
    protected override string ResolvePropertyName(string key)
    {
        return key.ToLower();
    }
}
```

Now instantiate LowercaseContractResolver and add it to JsonSerializerSettings.

```csharp
var settings = new JsonSerializerSettings();
settings.ContractResolver = new LowercaseContractResolver();
string json = JsonConvert.SerializeObject(e, Formatting.Indented, settings);
Console.WriteLine(json);
```

Output of the above code is depicted below  
[![Lowercase all keys in serializing JSON.NET](/media/articles/207/Lowercase-all-keys-in-serializing-JSON.NET_.png)](http://stacktips.com)
