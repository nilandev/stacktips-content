---
id: 80
title: How to Trust All Certificates for HttpURLConnection in Android
slug: how-to-trust-all-certificates-for-httpurlconnection-in-android
excerpt: The following code snippet will help you to disables the SSL certificate checking for new instances of HttpsURLConnection in Android. You can use this code for testing purpose only and remove when moving to production.
difficulty: beginners
publishedDate: "2016-07-04T11:54:52.000Z"
updatedDate: "2025-09-16T23:05:23.930Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - httpsurlconnection-trust-all-certificates
  - android-ssl-certificate-bypass
  - x509trustmanager-android
  - disable-ssl-verification-android
course: null
displayOrder: 0
seo: 
  metaTitle: "Trust All Certificates for HttpsURLConnection in Android"
  metaDescription: "See how to disable SSL certificate checking for HttpsURLConnection in Android using a custom X509TrustManager, intended for testing environments only."
  metaKeywords: null
---

The following code snippet will help you to disables the SSL certificate checking for new instances of HttpsURLConnection in Android.

Note: You can use this code for testing purpose only and remove when moving to production. Trusting all certificate in production will expose your box for hackers.

```java
public void trustAllCertificates() {
    try {
        TrustManager[] trustAllCerts = new TrustManager[]{
                new X509TrustManager() {
                    public X509Certificate[] getAcceptedIssuers() {
                        X509Certificate[] myTrustedAnchors = new X509Certificate[0];
                        return myTrustedAnchors;
                    }

                    @Override
                    public void checkClientTrusted(X509Certificate[] certs, String authType) {
                    }

                    @Override
                    public void checkServerTrusted(X509Certificate[] certs, String authType) {
                    }
                }
        };

        SSLContext sc = SSLContext.getInstance("SSL");
        sc.init(null, trustAllCerts, new SecureRandom());
        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
            @Override
            public boolean verify(String arg0, SSLSession arg1) {
                return true;
            }
        });
    } catch (Exception e) {
    }
}

```
