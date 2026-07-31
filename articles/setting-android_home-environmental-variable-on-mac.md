---
id: 220
title: Setting ANDROID_HOME Environmental Variable on Mac
slug: setting-android_home-environmental-variable-on-mac
excerpt: In this tutorial, we will show you how to set ANDROID_HOME Environmental Variable on Mac OS X. Setting ANDROID_HOME environmental variable on mavericks Mac OS X Lion (10.7.5)
difficulty: beginners
publishedDate: "2014-06-23T09:11:27.000Z"
updatedDate: "2025-09-16T23:05:31.102Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-home-mac
  - android-sdk-path-setup
  - bash-profile-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

In this tutorial, we will show you how to set ANDROID\_HOME Environmental Variable on Mac OS X.

## Setting ANDROID\_HOME environmental variable on Maverick Mac OS X Lion (10.7.5)

The ANDROID\_HOME environment variable can be used to tell maven where to find the Android SDK. In your home directory, add a file called `.bash_profile`

Set the ANDROID\_HOME variable to your SDK directory example,

```bash
export ANDROID_HOME=/Users/alebirke/apps/adt-bundle-mac-x86_64/sdk
```

## Setting ANDROID\_HOME environmental variable on Maverick Mac OS X (10.9.x)

Configure the ANDROID\_HOME environment variable based on the location of the Android SDK. Additionally, consider adding ANDROID\_HOME/tools, and ANDROID\_HOME/platform-tools to your PATH.

```bash
$  export ANDROID_HOME=/Users/Neel/Documents/Softwares/adt-bundle-mac-x86_64-20140321/sdk
$  export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

## Setting ANDROID\_HOME environment variable to .bash\_profile

Open the Terminal program present in your (this is in your Applications/Utilities folder by default). Follow the below steps.

### Step-1

Start up Terminal and go to your home folder.

```bash
cd ~/
```

### Step-2

Open and edit .bash\_profile file

```bash
$ open -e .bash_profile
```

If you don’t have .bash\_profile file in your computer path, then create one. Enter below command to create a new file. Once created follow Step-2.

```bash
touch .bash_profile
```

### Step-3

Save the below line)

```bash
export PATH=${PATH}:/Applications/adt-bundle-mac-x86_64-20140321/sdk/tools
export PATH=${PATH}:/Applications/adt-bundle-mac-x86_64-20140321/sdk/platform-tools
```

### Step-4

Refresh the file using below command

```bash
$ source .bash_profile
```

### Step-5

Check if the JAVA\_HOME is set properly

```bash
$ echo $PATH
```

You will see the result similar to below. Find for your path in there. If available, then you are good

```text
/Users/Neel/.rvm/gems/ruby-2.1.2/bin:/Users/Neel/.rvm/gems/ruby-2.1.2@global/bin:/Users/Neel/.rvm/rubies/ruby-2.1.2/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/Applications/adt-bundle-mac-x86_64-20140321/sdk/tools:/Applications/adt-bundle-mac-x86_64-20140321/sdk/platform-tools:/Users/Neel/.rvm/bin
```

Alternatively, You can run `android` command, it will start android SDK manager
