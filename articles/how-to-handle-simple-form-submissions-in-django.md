---
id: 348
title: How to Handle Simple Form Submissions in Django?
slug: how-to-handle-simple-form-submissions-in-django
excerpt: This post explains how to create and handle forms in Django. It covers creating and handling standard forms and model forms.
difficulty: beginner
publishedDate: "2023-03-17T23:32:42.000Z"
updatedDate: "2025-09-16T23:05:37.234Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/Django.jpg
topics: 
  - django
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Forms are the key component of building any web applications. Forms provide an easy and efficient way to handle user input and process form data.

In Django a form is a Python class that defines the fields of a form and their behavior, including how data is validated and processed. Django provide a convenient way to render forms in HTML templates. Form fields can be customized with labels, help text, and error messages. They can also be styled with CSS to match the look and feel of the web application.

Django provides two main types of forms:

-   Standard forms
-   Model forms.

Standard forms are used for creating custom forms that are not tied to any specific database model.

Model forms, on the other hand, are used for creating forms that are tied to a specific database model. Model forms automatically generate form fields based on the fields of the model, which can save a lot of time and effort in creating and managing forms.

## Handling Standard forms in Django

Here is a basic example of how to handle form submissions in Django:

First, let us define a Django form in `forms.py` file.

```python
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)
```

Secondly, define a view that renders the form and handles form submissions in `views.py`

```python
from django.shortcuts import render
from .forms import ContactForm

def contact_form_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            return render(request, 'success_page.html')
    else:
        form = ContactForm()
    return render(request, 'contact_page.html', {'form': form})
```

If the request method is not `POST`, we create a new instance of the `ContactForm` class and render the form using a template `contact_page.html`. We pass the form object to the template context using a dictionary.

Lastly, define a template `contact_page.html` that renders the form

```html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Submit</button>
</form>
```

The `form.as_p` method outputs each form field as a separate HTML paragraph element. We also include a CSRF token using the `{% csrf_token %}` template tag and a submit button to submit the form.

When the user submits the form, the data is sent to the server using a `POST` request. The view code above will then validate and process the data, and return an appropriate response to the user.

## Handling Model Forms in Django

Creating Model Forms in Django is pretty straightforward.

### Define Model

First we need to define a model class. A model class represents the database table, that the form with interact with.

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
```

### Create a form class:

Next, create a form class that is based on your model. This can be done by using Django's built-in ModelForm class.

The ModelForm class automatically creates form fields based on the fields in your model.

```python
from django import forms
from .models import Person

class PersonForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = ('name', 'email')
        labels = {
            'name': 'Name',
            'email': 'Email Address',
        }
        help_texts = {
            'name': 'Enter your name',
            'email': 'Enter your email address',
        }
```

In this example, we have defined a `Person` model with two fields: `name` and `email`. Then, we have created a `PersonForm` form class that is based on the `Person` model.

The form fields can be customized by specifying additional attributes such as labels, help texts, and validation rules.

### Define Form template

Lastly, define a template `person_form.html` that renders the form

```html
{% extends "base.html" %}

{% block content %}
  <h1>Create a new person</h1>
  <form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit" value="Save">
  </form>
{% endblock %}
```

### Create the form in a view:

Create an instance of the form class in a view function that is responsible for rendering the form to the user.

```python
from django.shortcuts import render, redirect
from .forms import PersonForm

def create_person(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            person = form.save()
            return redirect('person_detail', pk=person.pk)
    else:
        form = PersonForm()
    return render(request, 'person_form.html', {'form': form})

def person_detail(request, pk):
    person = Person.objects.get(pk=pk)
    return render(request, 'person_detail.html', {'person': person})
```

When the user submits the form, the `create_person` view function will validate the form data and save it to the database. If the data is valid, we redirect the user to the `person_detail` view.
