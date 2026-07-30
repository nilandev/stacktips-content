---
id: 131
title: How to Get Device Information in Android
slug: how-to-get-device-information-in-android
excerpt: The following code snippet will get the device detailed information in Android.
difficulty: beginners
publishedDate: "2015-08-03T16:42:36.000Z"
updatedDate: "2025-09-16T23:05:26.852Z"
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

The following code snippet will get the device detailed information in Android.

```java
public class DashboardActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        String  details =  "VERSION.RELEASE : "+Build.VERSION.RELEASE
            +"nVERSION.INCREMENTAL : "+Build.VERSION.INCREMENTAL
            +"nVERSION.SDK.NUMBER : "+Build.VERSION.SDK_INT
            +"nBOARD : "+Build.BOARD
            +"nBOOTLOADER : "+Build.BOOTLOADER
            +"nBRAND : "+Build.BRAND
            +"nCPU_ABI : "+Build.CPU_ABI
            +"nCPU_ABI2 : "+Build.CPU_ABI2
            +"nDISPLAY : "+Build.DISPLAY
            +"nFINGERPRINT : "+Build.FINGERPRINT
            +"nHARDWARE : "+Build.HARDWARE
            +"nHOST : "+Build.HOST
            +"nID : "+Build.ID
            +"nMANUFACTURER : "+Build.MANUFACTURER
            +"nMODEL : "+Build.MODEL
            +"nPRODUCT : "+Build.PRODUCT
            +"nSERIAL : "+Build.SERIAL
            +"nTAGS : "+Build.TAGS
            +"nTIME : "+Build.TIME
            +"nTYPE : "+Build.TYPE
            +"nUNKNOWN : "+Build.UNKNOWN
            +"nUSER : "+Build.USER;

           TextView textView = new TextView();

           textView.setText(details);
           setContentView(textView);
        }
}

```
