---
id: 54
title: Validate Form Using JavaScript Regular Expressions Without jQuery
slug: validate-form-using-javascript-regular-expressions-without-jquery
excerpt: This code snippet shows how to use JavaScript Regular Expressions to validate a form. You will find many examples…
difficulty: beginners
publishedDate: "2016-08-25T11:38:15.000Z"
updatedDate: "2025-09-16T23:05:22.497Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/75/thumbnail.png
topics: 
  - wordpress
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This code snippet shows how to use JavaScript Regular Expressions to validate a form. You will find many examples in internet that uses jQuery or other frameworks to validate the form data but in this example we will use plan JavaScript.

[![Validate Form Using Javascript Regular Expressions Without jQuery](/media/articles/75/Validate-Form-Using-Javascript-Regular-Expressions-Without-jQuery.png)](http://stacktips.com)

```html
<html>
<head>
    <title>Form Validation Demo</title>
	<style>
	.my-form {
	    background: #efefef;
	    padding: 20px;
		width:400px;
		margin: 0 auto;
	}
	
	.error {
	    background: #e05022;
	    padding: 10px;
	    color: #fff;
		display:none;
		border-radius: 2px;
	}
	</style>
	
    <script type="text/javascript">
     // Script here..
    </script>
</head>
<body>
    <form method="get" action="./register.php" class="my-form"></
	<p id="error" class="error"></p>
    <table style="width:400px;">
        <tr>
            <td style="width: 35%;">
                Name:
            </td>
            <td style="width: 65%;">
                <input id="name" type="text" name="name" maxlength="52" />
            </td>
        </tr>
        <tr>
            <td style="width: 35%;">
                Password:
            </td>
            <td style="width: 65%;">
                <input id="password" type="password" name="password" maxlength="16" />
            </td>
        </tr>
        <tr>
            <td style="width: 35%;">
                Email:
            </td>
            <td style="width: 65%;">
                <input id="email" type="text" name="email" maxlength="2048" />
            </td>
        </tr>
        <tr>
            <td style="width: 35%;">
                Telephone:
            </td>
            <td style="width: 65%;">
                <input id="telephone" type="text" name="email" maxlength="16" />
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 100%;">
                <input type="submit" value="Submit" onclick="return ValidateForm()" />
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
```

Let us now write some JavaScript validation:

```javascript
function ValidateForm()
{
    var nameBox = document.getElementById ("name");
    if (nameBox.value.length == 0) {
        document.getElementById("error").innerHTML = "Error: Enter your full name.";
		document.getElementById("error").style.display = 'block';
        return false;
    }

    var pwBox = document.getElementById ("password");
    if (pwBox.value.length < 6){
        document.getElementById("error").innerHTML = "Error: Password is too short.";
		document.getElementById("error").style.display = 'block';
        return false;
    }

    // 6-16 non-white character
    re = /^\S{6,16}$/;
    if (!pwBox.value.match (re)){
         document.getElementById("error").innerHTML = "Error: Invalid password.";
		 document.getElementById("error").style.display = 'block';
        return false;
    }

    // Telephone may be empty or only 7-16 digits
    re = /^\d{7,16}$/;
    var telBox = document.getElementById ("telephone");
    if (telBox.value.length > 0){
        if (!telBox.value.match (re)){
            document.getElementById("error").innerHTML = "Error: Invalid telephone number.";
			document.getElementById("error").style.display = 'block';
            return false;
        }
    }

    // regular expression pattern of email
    re = /^\w+([\.\-\+]\w+)*@\w+(\-\w+)*\.\w+(\-\w+)*(\.\w+(\-\w+)*)*$/;
    var emailBox = document.getElementById ("email");
    if (!emailBox.value.match (re))
    {
        document.getElementById("error").innerHTML = "Error: Invalid email address: " + emailBox.value;
		document.getElementById("error").style.display = 'block';
        return false;
    }
	
	document.getElementById("error").style.display = 'none';
    return true;
}
```
