---
id: 303
title: Login Application using Struts2 Tutorial
slug: creating-login-application-using-struts2
excerpt: This example explains step by step tutorials for building Login Application using Struts2 Java Framework. The login workflow…
difficulty: beginners
publishedDate: "2013-08-09T06:26:17.000Z"
updatedDate: "2025-09-16T23:05:35.412Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/396/thumbnail.png
topics: 
  - struts
tags:
  - struts2-login-application
  - struts2-actionsupport
  - struts-xml-configuration
  - struts2-interceptor
course: null
displayOrder: 0
seo: 
  metaTitle: "Struts2 Login Application Tutorial with Example"
  metaDescription: "Learn how to build a login application in Struts2, covering web.xml setup, ActionSupport validation, struts.xml configuration, and JSP login pages."
  metaKeywords: null
---

This example explains step by step tutorials for building Login Application using Struts2 Java Framework. The login workflow includes :

-   By default Login page will populate on running the project.
-   Show error message in case of invalid credentials without losing user enters text.
-   Redirect to welcome page on successful /valid credentials.

# 1\. Software and tool requirements

This example us using JAVA 1.6 for compilation and and deployed on Tomcat 6.x as application server. We use Eclipse IDE for all of our development purpose.

-   JAVA 1.6
-   Tomcat 6
-   Eclipse 3.6

# 2\. Struts 2 framework libraries

Download the latest version of struts 2 lib from [http://struts.apache.org/download.cgi](http://struts.apache.org/download.cgi "Download Struts 2") with respect to you platform such as Windows or Linux. We are using struts-2.3.15.1-lib(windows) for this example.

After downloading extract the struts-2.3.15.1-lib.zip file to some location e.g. [C:\\struts-2.3.15.1-lib](C:\struts-2.3.15.1-lib)

# 3\. Creating a new dynamic Web Project in eclipse as strutsweb

File -> New -> Dynamic Web Project.

Enter the Project Name as **struts2web**, select the target run-time as Apache Tomcat v6.0 and click on **Finish**.

[![New Dynamic Web Project](/media/articles/396/New-Dynamic-Web-Project.png)](http://stacktips.com)

Now copy following jars from `C:\struts-2.3.15.1-lib` to `\WEB-INF\libs`

[![Struts2 Login Application Libs](/media/articles/396/Struts2-Login-Application-Libs.png)](http://stacktips.com)

# 4\. Modify web.xml configuration to enable struts2 framework

Do the following changes in web.xml file to enable struts 2 framework features. You can locate `web.xml` file in `\WEB-INF\web.xml` in your project directory.

```xml
<?xmlversion="1.0"encoding="UTF-8"?>
<web-appxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns="http://java.sun.com/xml/ns/javaee"
xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
id="WebApp_ID" version="2.5">
<display-name>struts2web</display-name>
<filter>
    <filter-name>struts2</filter-name>
<filter-class>
       org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter
</filter-class>
</filter>

<filter-mapping>
    <filter-name>struts2</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>

<welcome-file-list>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
</web-app>
```

<filter/>- This is filter dispatcher class act as controller. All requests go through this filter. It looks at the request and determines the appropriate action by looking up the struts configuration file i.e. struts.xml.

<filter-mapping/> – It is used to map the request to filter. All request action map to filter dispatcher.

<welcome-file-list/> – It is used to populate the default page.

# 5\. Writing Java class to validate the login cridentials

Now, let us jump into validating login credenials from java class. Create `LoginAuthAction.java` inside the following package `com.javatechig.struts2web.actions.` Note, you may have your own package name

```java
public class LoginAuthAction extends ActionSupport {
    Private static final longserialVersionUID = 1L;
    private String userId;
    private String password;

    private Boolean error;

    public String execute() {
        if (userId.equals("")) {
            addActionError("Please Enter user id.");
            error = true;
        }
        else if(password.equals("")) {
            addActionError("Please Enter password.");
            error = true;
        }
        else if(!userId.equalsIgnoreCase(password)) {
            addActionError("Invalid userid or password.");
            error = true;
        } else {
            error = false;
        }

        if (error) {
            return ERROR;
        } else {
            return SUCCESS;
        }

    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        returnpassword;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

The `LoginAuthAction` extends `ActionSupport` to use core methods such as `addActionError` and static string `ERROR`, `SUCCESS`. The `execute()` is the default method which contains the logic for action class. In this example we are validating userId & password is empty or equals. If empty showing error “Please enter userId/password” else if equals then its validated.

# 6\. Configuring action class in Struts configuration file

Now it’s time to configure the action class in Struts configuration file. Create struts2 configuration file as struts.xml inside project src directory

```xml
<?xmlversion="1.0"encoding="UTF-8"?>
<!DOCTYPEstrutsPUBLIC
"-//Apache Software Foundation//DTD Struts Configuration 2.0//EN"
"http://struts.apache.org/dtds/struts-2.0.dtd">

<struts>
    <packagename="struts2web"namespace="/"extends="struts-default">
        <actionname="login">
            <result>pages/login.jsp</result>
        </action>
        <actionname="welcome">
            <result>pages/welcome.jsp</result>
        </action>
        <actionname="loginauth"class="com.javatechig.struts2web.actions.LoginAuthAction"
            <resultname="success"type="redirect">
        <paramname="location">/welcome</param>
        </result>
            <resultname="error">pages/login.jsp</result>
        </action>
    </package>
</struts>
```

**Package – name** – It can be any name but it is good practice to use project name.  
**Package** – namespace –Default it is root(/). It is used for package modularization if the project has more than one module.  
**Action** – It is for action class mapping with action name. I have three action name  
**login** – which is mapped to default struts action dispatcher which populate login.jsp  
**welcome** – which is mapped to default struts action dispatcher which populatewelcome.jsp  
**loginauth** – which is mapped to LoginAuthActionclass which returns ERROR & SUCCESS.  
**ERROR** – mapped to login.jsp to display the login errors with user entered credentials.  
**SUCCESS** – Its redirect to “welcome” action.

You can see at the bottom of class I have created getter and setter method of declared variable. This is used by the interceptor. The interceptor will look for setFieldName while on every action request. The FieldName is the element name in the html form. E.g.  
I am using text field in the login.jsp for userid . The name of textfield is userId.

When you click on login it request for loginauth action, which is goes through struts2 dispatcher filter which executes interceptor before/after the invoking of action class. The interceptor will convert the field name userId to setUserId and then pass the textfield value to setUserId(val). In the same way when dispatcher deliver the view i.e. jsp it uses getUserId(). E.g. when you enter wrong password and valid user id it throws the same page with error saying invalid password with existing user id values.

# 7\. Creating jsp pages

In this example we will be needing two jsp pages. Once for login form and other is welcome screen. Welcome screen will appear once user credentials are authenticated

## 7.1. Login form

```html
<%@pagecontentType="text/html; charset=UTF-8"%>
<%@taglibprefix="s"uri="/struts-tags"%>
<!DOCTYPEhtmlPUBLIC"-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<metahttp-equiv="Content-Type"content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<styletype="text/css">
body{
    font-family:Arial,Helvetica,sans-serif;
    font-size:12px;
}
.errors {
    background-color:#FFCCCC;
    border:1px solid #CC0000;
    width:220px;
    line-height:10px;
}
.errorsli{
    list-style: none;
}
</style>
</head>
<body>
<s:formaction="loginauth"theme="simple">
<center>
    <tablewidth="200">
        <trheight="30">
            <tdwidth="200"colspan="2">
                <s:iftest="hasActionErrors()">
                    <divclass="errors">
                        <s:actionerror/>
                    </div>
                </s:if>
            </td>
        </tr>
        <tr>
            <tdcolspan="2"width="200"align="left"style="background:#eee">Login Here</td>
        </tr>
        <tr>
            <tdalign="left">User ID:</td><tdalign="left"><s:textfieldname="userId"/></td>
        </tr>
        <tr>
            <tdalign="left">Password:</td><tdalign="left"><s:passwordtype="text"name="password"/></td>
        </tr>
        <tr>
            <tdalign="left"></td><tdalign="left"><inputtype="submit"name="login"value="Login"></td>
        </tr>
    </table>
</center>
</s:form>
</body>
</html>
```

<s:form/> – Struts form element which enhanced with html form. The action is the action class to invoke on click on Login button.

<s:textfield/> – Struts textfiled element which is enhanced to <input type=”text”/>  
<s:password/>- Struts textfiled element which is enhanced to <input type=”password”/>

The name attribute of textfield and password values are important. The value should be same as declared variable in the action class.  
private String userId;  
private String password;

## 7.2. Creating Welcome jsp page

This page contains the welcome text, and will be displayed, once user credentials are authenticated.

```html
<%@pagelanguage="java"contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPEhtmlPUBLIC"-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<metahttp-equiv="Content-Type"content="text/html; charset=ISO-8859-1">
<title>Javatechig :: Struts 2 Tutorial</title>
</head>
<body>
<h1>Welcome!</h1>
</body>
</html>
```

## 7.3. Create Index.jsp

I am using this page to redirect to login.action. You can see it is configured as welcome-file in web.xml that means it invokes when you run the project with web-context (project-name) name i.e. [http://localhost:8080/](<http://localhost:8080/ > "Testing Login App") and finally you will get login.jsp as default.

Now we are done with the sample and it is ready to run, before that pleas make sure all the created files in proper location as follows:

[![Struts2 Login Application Project Structure](/media/articles/396/Struts2-Login-Application-Project-Structure.png)](http://stacktips.com)

# 8\. Output

[![Struts2 Login Application Project Output](/media/articles/396/Struts2-Login-Application-Project-Output1.png)](http://stacktips.com)

[![Struts2 Login Application Project Output](/media/articles/396/Struts2-Login-Application-Project-Output2.png)](http://stacktips.com)

[![Struts2 Login Application Project Output](/media/articles/396/Struts2-Login-Application-Project-Output3.png)](http://stacktips.com)

\[author\_bio
