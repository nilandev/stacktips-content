---
id: 376
title: "Python: Working with Mails"
slug: python-working-with-mails
excerpt: Learn how to send text and HTML mail dynamically in Python using its built-in mail module and functions.
difficulty: beginner
publishedDate: "2022-09-17T17:01:08.000Z"
updatedDate: "2025-09-16T23:05:38.887Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - python
tags:
  - python-smtplib
  - send-email-python
  - python-mime-html-email
course: getting-started-with-python
displayOrder: 18
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

To send email in Python using the smtplib module, you'll need to have a working SMTP server that you can connect to. You'll also need the email address of the sender and the recipient, as well as the message content. Here's an example of how to send an email using smtplib:

Python offers the `smtplib` module that allows us to use the Simple Mail Transfer Protocol (SMTP) to send mail between mail servers.

```python

import smtplib

# Set up the SMTP server
smtp_server = "smtp.gmail.com"
smtp_port = 587
smtp_username = "your_username@gmail.com"
smtp_password = "your_password"
server = smtplib.SMTP(smtp_server, smtp_port)
server.starttls()
server.login(smtp_username, smtp_password)

# Set up the email message
from_email = "your_username@gmail.com"
to_email = "recipient@example.com"
subject = "Test email"
body = "This is a test email sent from Python."
message = f"Subject: {subject}\n\n{body}"

# Send the email
server.sendmail(from_email, to_email, message)

# Close the connection
server.quit()
```

In this example, we're using Gmail as the SMTP server, but you can use any SMTP server that you have access to. Make sure to replace your\_username@gmail.com and your\_password with your actual Gmail email address and password. The starttls method enables encryption for the SMTP connection, and the login method authenticates the connection using the email address and password. The from\_email and to\_email variables specify the email addresses of the sender and recipient.

The subject variable specifies the subject of the email, and the body variable contains the text of the message.

The message variable combines the subject and body of the email into a single string that can be sent using the sendmail method.

The sendmail method takes three arguments: the sender's email address, the recipient's email address, and the message content.

After the email is sent, the quit method is called to close the connection to the SMTP server.

I hope this helps you get started with sending emails using smtplib in Python!

## Sending HTML Email

To send an HTML email in Python using smtplib, you can use the email.mime module to create a message with the MIMEMultipart and MIMEText classes. Here's an example of how to send an HTML email:

```python

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Set up the SMTP server
smtp_server = "smtp.gmail.com"
smtp_port = 587
smtp_username = "your_username@gmail.com"
smtp_password = "your_password"
server = smtplib.SMTP(smtp_server, smtp_port)
server.starttls()
server.login(smtp_username, smtp_password)

# Set up the email message
from_email = "your_username@gmail.com"
to_email = "recipient@example.com"
subject = "HTML email"
html = "This is a test HTML emailThis email was sent using Python."
message = MIMEMultipart("alternative")
message["Subject"] = subject
message["From"] = from_email
message["To"] = to_email
html_part = MIMEText(html, "html")
message.attach(html_part)

# Send the email
server.sendmail(from_email, to_email, message.as_string())

# Close the connection
server.quit()
```

In this example, we're creating an HTML message using the MIMEMultipart and MIMEText classes from the email.mime module. The html variable contains the HTML code for the email message.

We're then creating a MIMEMultipart message with the Subject, From, and To headers. The html\_part variable contains the HTML message as a MIME text object, which we then attach to the MIMEMultipart message using the attach method.

We then send the email using the sendmail method, passing the from\_email, to\_email, and message.as\_string() as arguments.

Finally, we close the connection to the SMTP server using the quit method.

I hope this helps you get started with sending HTML emails using smtplib in Python!
