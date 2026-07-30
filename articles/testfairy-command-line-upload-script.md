---
id: 192
title: How to Use TestFairy Command Line Upload Script
slug: testfairy-command-line-upload-script
excerpt: TestFairy is an android application beta testing and deployment platform. Read TestFairy platform features and detailed description here.…
difficulty: beginners
publishedDate: "2014-10-02T02:30:37.000Z"
updatedDate: "2025-09-16T23:05:29.671Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/256/thumbnail.png
topics: 
  - java
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

TestFairy is an android application beta testing and deployment platform. Read TestFairy platform features and detailed description [**here**.](http://stacktips.com/android/testfairy-android-app-beta-testing-platform)

As you upload a build to TestFairy, its process on the uploaded build and do some dynamic code injection. During the process, it forgets that the build was signed with a keystore. Before the build is made available for beta testers to download, TestFairy sign your build with a keystore key of its own. This will result in your application not working properly for the services that like Facebook, Google Map, In-App Purchases, Google Cloud Messaging (GCM) etc.

Here is the workaround!! Instead of you just uploading your build to TestFairy, you can use the command line uploader script mentioning your keystore details. In this post, we’ll see the configurations and how to execute test fairy command line uploader script. This will be helpful for integrating bamboo, Jenkins or other CI build automation tools.

### 1\. Download TestFairy Command Line Upload Script

Let us download the TestFairy command line upload script from **[GitHub](https://github.com/testfairy/command-line-uploader).** Once you have the `testfairy-upload.sh` the file you can change the following parameters as per your project configurations.

```bash
# Put your TestFairy API_KEY here. Find it in your TestFairy account settings.
TESTFAIRY_API_KEY="Put your TestFairy API key here"

# Your Keystore, Store pass and Alias, the ones you use to sign your app.
KEYSTORE=build-dir/MyProject/keystore/myapp.keystore
STOREPASS=android
ALIAS=myapp

# Tester Groups that will be notified when the app is ready. Setup groups in your TestFairy account testers page.
# This parameter is optional, leave empty if not required
TESTER_GROUPS="Distribution Group Name"

# Comment text will be included in the email sent to testers
COMMENT="Put your update comment here"

# locations of various tools
CURL=/usr/bin/curl
ZIP=/usr/bin/zip
KEYTOOL=/usr/bin/keytool
ZIPALIGN=/Applications/adt-bundle-mac-x86_64-20130917/sdk/build-tools/19.1.0/zipalign
JARSIGNER=/usr/bin/jarsigner
```

### 2\. Executing Command Line Upload Script

```bash
$ chmod a+x testfairy-upload.sh

$ ./testfairy-upload.sh bin/MyApp.apk
```

If the script execute successfully, you will see the output in the code

```text
Uploading bin/MyApp.apk to TestFairy.. OK!
Downloading instrumented APK.. OK!
Re-signing APK file.. jar signed.

Warning:
No -tsa or -tsacert is provided and this jar is not timestamped. Without a timestamp, users may not be able to validate this jar after the signer certificate's expiration date (2283-11-17) or after any future revocation date.
OK!
Uploading signed APK to TestFairy.. OK!

The build was successfully uploaded to TestFairy and is available at:
https://app.testfairy.com/projects/6521-myapp/builds/142823
```

The above code works fine and build getting uploaded to TestFairy. But there is one problem, if you are uploading build from CI tool, you would like to see the comments from developers for each build. In such case, you have to pass another command line parameter containing the release comment. This release comment will be sent over invitation email.

```bash
#!/bin/sh

UPLOADER_VERSION=1.09

# Put your TestFairy API_KEY here. Find it in your TestFairy account settings.
TESTFAIRY_API_KEY="Put your TestFairy API key here"

# Your Keystore, Storepass and Alias, the ones you use to sign your app.
KEYSTORE=build-dir/MyProject/keystore/myapp.keystore
STOREPASS=android
ALIAS=myapp

# Tester Groups that will be notified when the app is ready. Setup groups in your TestFairy account testers page.
# This parameter is optional, leave empty if not required
TESTER_GROUPS="Distribution Group Name"

# Should email testers about new version. Set to "off" to disable email notifications.
NOTIFY="on"

# If AUTO_UPDATE is "on" all users will be prompt to update to this build next time they run the app
AUTO_UPDATE="off"

# The maximum recording duration for every test.
MAX_DURATION="10m"

# Is video recording enabled for this build
VIDEO="on"

# Add a TestFairy watermark to the application icon?
ICON_WATERMARK="on"

# Comment text will be included in the email sent to testers
COMMENT="New Build"

# locations of various tools
CURL=/usr/bin/curl
ZIP=/usr/bin/zip
KEYTOOL=/usr/bin/keytool
ZIPALIGN=/Applications/adt-bundle-mac-x86_64-20130917/sdk/build-tools/19.1.0/zipalign
JARSIGNER=/usr/bin/jarsigner

SERVER_ENDPOINT=http://app.testfairy.com

usage() {
    echo "Usage: testfairy-upload.sh bin/TennisTV.apk"
    echo
}

verify_tools() {

    # Windows users: this script requires zip, curl, and sed. If not installed please get from http://cygwin.com/

    # Check 'zip' tool
    ${ZIP} -h >/dev/null
    if [ $? -ne 0 ]; then
        echo "Could not run zip tool, please check settings"
        exit 1
    fi

    # Check 'curl' tool
    ${CURL} --help >/dev/null
    if [ $? -ne 0 ]; then
        echo "Could not run curl tool, please check settings"
        exit 1
    fi

    OUTPUT=$( ${JARSIGNER} -help 2>&1 | grep "verify" )
    if [ $? -ne 0 ]; then
        echo "Could not run jarsigner tool, please check settings"
        exit 1
    fi

    # Check 'zipalign' tool
    OUTPUT=$( ${ZIPALIGN} 2>&1 | grep -i "Zip alignment" )
    if [ $? -ne 0 ]; then
        echo "Could not run zipalign tool, please check settings"
        exit 1
    fi

    OUTPUT=$( ${KEYTOOL} -help 2>&1 | grep "keypasswd" )
    if [ $? -ne 0 ]; then
        echo "Could not run keytool tool, please check settings"
        exit 1
    fi
}

verify_settings() {
    if [ -z "${TESTFAIRY_API_KEY}" ]; then
        usage
        echo "Please update API_KEY with your private API key, as noted in the Settings page"
        exit 1
    fi

    if [ -z "${KEYSTORE}" -o -z "${STOREPASS}" -o -z "{$ALIAS}" ]; then
        usage
        echo "Please update KEYSTORE, STOREPASS and ALIAS with your jar signing credentials"
        exit 1
    fi

    # verify KEYSTORE, STOREPASS and ALIAS at once
    OUTPUT=$( ${KEYTOOL} -list -keystore "${KEYSTORE}" -storepass "${STOREPASS}" -alias "${ALIAS}" 2>&1 )
    if [ $? -ne 0 ]; then
        usage
        echo "Please check keystore credentials; keytool failed to verify storepass and alias"
        exit 1
    fi
}

if [ $# -ne 2 ]; then
    usage
    exit 1
fi

# before even going on, make sure all tools work
verify_tools
verify_settings

APK_FILENAME=$1
if [ ! -f "${APK_FILENAME}" ]; then
    usage
    echo "Can't find file: ${APK_FILENAME}"
    exit 2
fi

COMMENT=$2

# temporary file paths
DATE=`date`
TMP_FILENAME=.testfairy.upload.apk
ZIPALIGNED_FILENAME=.testfairy.zipalign.apk
rm -f "${TMP_FILENAME}" "${ZIPALIGNED_FILENAME}"

/bin/echo -n "Uploading ${APK_FILENAME} to TestFairy.. "
JSON=$( ${CURL} -s ${SERVER_ENDPOINT}/api/upload -F api_key=${TESTFAIRY_API_KEY} -F apk_file="@${APK_FILENAME}" -F icon-watermark="${ICON_WATERMARK}" -F video="${VIDEO}" -F max-duration="${MAX_DURATION}" -F comment="${COMMENT}" -A "TestFairy Command Line Uploader ${UPLOADER_VERSION}" )

URL=$( echo ${JSON} | sed 's/\\//\//g' | sed -n 's/.*"instrumented_url"\s*:\s*"\([^"]*\)".*/\1/p' )
if [ -z "${URL}" ]; then
    echo "FAILED!"
    echo
    echo "Upload failed, please check your settings"
    exit 1
fi

URL="${URL}?api_key=${TESTFAIRY_API_KEY}"

echo "OK!"
/bin/echo -n "Downloading instrumented APK.. "
${CURL} -L -o ${TMP_FILENAME} -s ${URL}

if [ ! -f "${TMP_FILENAME}" ]; then
    echo "FAILED!"
    echo
    echo "Could not download APK back from the server, please contact support@testfairy.com"
    exit 1
fi

echo "OK!"

/bin/echo -n "Re-signing APK file.. "
${ZIP} -qd ${TMP_FILENAME} 'META-INF/*'
${JARSIGNER} -keystore "${KEYSTORE}" -storepass "${STOREPASS}" -digestalg SHA1 -sigalg MD5withRSA ${TMP_FILENAME} "${ALIAS}"
${JARSIGNER} -verify ${TMP_FILENAME} >/dev/null
if [ $? -ne 0 ]; then
    echo "FAILED!"
    echo
    echo "Jarsigner failed to verify, please check parameters and try again"
    exit 1
fi

${ZIPALIGN} -f 4 ${TMP_FILENAME} ${ZIPALIGNED_FILENAME}
rm -f ${TMP_FILENAME}
echo "OK!"

/bin/echo -n "Uploading signed APK to TestFairy.. "
JSON=$( ${CURL} -s ${SERVER_ENDPOINT}/api/upload-signed -F api_key=${TESTFAIRY_API_KEY} -F apk_file=@${ZIPALIGNED_FILENAME} -F testers-groups="${TESTER_GROUPS}" -F auto-update="${AUTO_UPDATE}" -F notify="${NOTIFY}")
rm -f ${ZIPALIGNED_FILENAME}

URL=$( echo ${JSON} | sed 's/\\//\//g' | sed -n 's/.*"build_url"\s*:\s*"\([^"]*\)".*/\1/p' )
if [ -z "$URL" ]; then
    echo "FAILED!"
    echo
    echo "Build uploaded, but no reply from the server. Please contact support@testfairy.com"
    exit 1
fi

echo "OK!"
echo
echo "Build was successfully uploaded to TestFairy and is available at:"
echo ${URL}
```

Now, we can run the above script by passing two arguments. One for the APK path and other is for comment for your build. This comment will be sent to the tester over email.

```bash
$ chmod a+x testfairy-upload.sh

$ ./testfairy-upload.sh bin/MyApp.apk "$@Your build update comment here"
```
