---
id: 301
title: Struts2 Localization and Internationalization Example
slug: struts2-localization-example
excerpt: This tutorial will explain Struts2 Localization, internationalization (i18n) with Example. We will build a sample internationalized web application with support for English, French and Japanese.
difficulty: beginners
publishedDate: "2013-08-21T08:26:39.000Z"
updatedDate: "2025-09-16T23:05:35.116Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/390/thumbnail.png
topics: 
  - struts2
tags:
  - struts2-internationalization
  - struts2-localization-i18n
  - resource-bundle-properties
  - multilingual-web-application
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial will explain Struts2 Localization, internationalization (i18n) with Example. We will build a sample internationalized web application with support for English, French and Japanese.

# Introduction to Internationalization

Internationalization is the process designing a software application so that it can be adapted to various languages and regions without engineering changes. Localization helps to build internationalized software for a specific region or language by adding locale-specific components and translating text. You can call internationalization as translation or localization. Internationalization is abbreviated i18n because the word starts with i and ends with an n, and there are 18 characters between the first i and the last n.

For example, while making a search in Google, the expected results appear in different languages based on region. Not just the search result, you will find the Google page menus display as selected language.

# Internationalizing (i18n) / Localization (i10n)

Struts2 provides localization i.e. internationalization (i18n) support through resource bundles, interceptors and tag libraries. Here in this tutorial we will learn to build internationalized application using resource bundle. Resource bundle is a flat file that contains key-value pairs.

**English Resource Bundle**

| Key | Value |
| --- | --- |
| key_name | value_value |
| key_name | value_value |

**French Resource Bundle**

| Key | Value |
| --- | --- |
| key_name | value_value |
| key_name | value_value |

Here the key-value plays major role to adapting the locale language. The key values resource bundle files need to be developed for each of the supporting locale.

# Internationalizing uses in following places:

-   UI Tags
-   Messages & Errors from validation interface
-   getText() method

# Retrieve message from resource bundle:

**1\. getText()**

<s:property value=”getText(‘msg.key’)” />

**2\. Key attribute**

<s:textfield key=”msg.key” />

# Resource Bundle:

The resource bundle is used to keep the key and value pairs for respective languages such as English Resource Bundle can have value as English Text and France Resource Bundle can have value as France Text but the keys are same across.

Resource Bundle can be place in the following places

1.  ActionClass.properties
2.  Interface.properties
3.  BaseClass.properties
4.  ModelDriven’s Model
5.  Package.properties
6.  I18n message key
7.  Global resource properties

The resource properties are being searched in the above order. At first it looks the resource properties with action class name.properties, if does not found then it looks for interface.properties else goes on till Global resource properties.

**UTF-8:** It represents characters in the Unicode character set.

**Call Flow:** On selecting language the UI will render with respective language.

**Software and tools required**

1.  JAVA 1.6
2.  Tomcat 6
3.  Eclipse 3.6

# Steps to create Web Application to support multi-language

1.  Create dynamic web application in eclipse named as **struts2localization**.
2.  Configure the project with Struts2Framework (refer previous example)
3.  Modify the **struts.xml** as follows to enable the framework to use resource bundle

Add the following line just above the package element.

**<constant name=”struts.custom.i18n.resources” value=”global” />**

**Value:** Prefix name of resource bundle. I am using global.

```xml
<struts>
    <constant name="struts.custom.i18n.resources" value="global" />
<package name="struts2web" namespace="/" extends="struts-default">
<action name="login">
    <result>pages/login.jsp</result>
</action>
<action name="changelang"
        class="com.javatechig.struts2web.actions.ChangeLocaleAction">
<result name="success">pages/login.jsp</result>
</action>
</package>
</struts>
```

**4\. Create resource properties file as follows under src folder**

Naming Conventions – **prefix\_lang.properties**

**a. English**

global.properties  
key : login.here value: Login Here  
key : login.user value: User  
key : login.password value: Password  
key: login.submit value: Login

**b. French**

global\_fr.properties  
key : login.here value: Connectez-vous ici  
key : login.user value: utilisateur  
key : login.password value: mot de passé  
key: login.submit value: Connexion

**c. Japanese**

global\_ja.properties  
key : login.here value: ここにログイン  
key : login.user value: ユーザー  
key : login.password value: パスワード  
key: login.submit value: ログイン

Here you can observe that keys are same across all file but the value changes as per the language. The language which contains non-English alphabet like Japanese should use Unicode instead of actual characters.

**global\_ja.properties**

```text
  key: login.here      value: \u3053\u3053\u306B\u30ED\u30B0\u30A4\u30F3
  key: login.user      value: \u30E6\u30FC\u30B6\u30FC
  key: login.password  value: \u30D1\u30B9\u30EF\u30FC\u30C9
  key: login.submit    value: \u30ED\u30B0\u30A4\u30F3
```

**5\. Create Login.jsp with language options as follows**

```html
<%@ page contentType="text/html; charset=UTF-8"%>

<s:form action="loginauth" theme="simple">
<center>
    <table width="300">
        <tr height="30">
            <td width="300" colspan="2">
                <s:a href="changelang?lang=en" >English</s:a>
                <s:a href="changelang?lang=fr" >France</s:a>
                <s:a href="changelang?lang=ja_JP" >Japanese</s:a>
            </td>
        </tr>
        <tr>
            <td colspan="2" width="300" align="left" style="background:#eee"><s:property value="getText('login.here')" /></td>
        </tr>
        <tr>
            <td align="left" width="100"><s:property value="getText('login.user')" />:</td><td align="left"><s:textfield name="userId"/></td>
        </tr>
        <tr>
            <td align="left"><s:property value="getText('login.password')" />:</td><td align="left"><s:password type="text" name="password"/></td>
        </tr>
        <tr>
            <td align="left"></td><td align="right"><s:submit key="login.submit" name="submit" /></td>
        </tr>
    </table>
</center>
</s:form>
```

Here I have added three language options i.e. English, France and Japanese.

```html
<s:a href="changelang?lang=en" >English</s:a>
<s:a href="changelang?lang=fr" >France</s:a>
<s:a href="changelang?lang=ja" >Japanese</s:a>
```

**changelang** – is the action name which is mapped with ChangeLocaleAction in struts.xml.  
lang – is the parameter to get selected language.

Here is the code to display text in different language in JSP  
**<%@ page contentType=”text/html; charset=UTF-8″%>** : This tag should be include in all pages where Multilanguage is required to display.

Get Message from resource bundle:

```html
<s:property value="getText('login.user')" />
<s:submit key="login.submit" name="submit" />
```

The above are used to get the message from resource bundle.  
getText(String s) : It searches the key(‘login.user’) in the resource bundle and returns the respective value or null if none is found. This can be used as label in the UI.  
Key : This helps to retrieve the value from resource bundle using key (‘login.submit’). This is used in html field element like TextField and button etc.

**6\. Create ChangeLocaleAction.java in com.javatechig.struts2web.actions**

```java
Locale locale = new Locale(lang);
ActionContext.getContext().setLocale(locale);
```

**lang** : It is the parameter to get the language  
**Locale** : It is from java util package.  
setLocale : It set the locale object to actionContext which is accessible by resource throughout the context.

**7\. Output of the code sample**

**Finally the eclipse project structures looks as follows**

[![Struts2 Localization and Internationalization Example](/media/articles/390/Struts2-Localization-and-Internationalization-Example.png)](http://stacktips.com)

**Output in English by default**  
[![Struts2 Localization and Internationalization Example output](/media/articles/390/Struts2-Localization-and-Internationalization-Example-output1.png)](http://stacktips.com)

**Output in**France

[![Struts2 Localization and Internationalization Example output French](/media/articles/390/Struts2-Localization-and-Internationalization-Example-output-French.png)](http://stacktips.com)

**Output in Japanese**

[![Struts2 Localization and Internationalization Example japnese](/media/articles/390/Struts2-Localization-and-Internationalization-Example-japnese1.png)](http://stacktips.com)
