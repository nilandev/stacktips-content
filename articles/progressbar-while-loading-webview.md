---
id: 318
title: ProgressBar while Loading WebView in Android
slug: progressbar-while-loading-webview
excerpt: This tutorial demonstrate the usage of ProgressBar while Loading WebView contents in android. This example explains horizontal ProgressBar and ProgressBar dialog with WebView. Progressbar is a visual indicator of progress in some operation.
difficulty: beginners
publishedDate: "2013-07-24T06:28:44.000Z"
updatedDate: "2025-09-16T23:05:36.044Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - android-webview-progressbar
  - webchromeclient-example
  - android-webview-loading-indicator
  - indeterminate-progressbar-android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

This tutorial demonstrate the usage of ProgressBar while Loading [WebView](/articles/android-webview-example "Android WebView Example") contents in android. This example explains horizontal ProgressBar and ProgressBar dialog with WebView.

Progressbar is a visual indicator of progress in some operation. Displays a bar to the user representing how far the operation has progressed; the application can change the amount of progress (modifying the length of the bar) as it moves forward. There is also a secondary progress displayable on a progress bar which is useful for displaying intermediate progress, such as the buffer level during a streaming playback progress bar.

A progress bar can also be made indeterminate. In indeterminate mode, the progress bar shows a cyclic animation without an indication of progress. This mode is used by applications when the length of the task is unknown. The indeterminate progress bar can be either a spinning wheel or a horizontal bar

[![progressbar-android](/media/articles/410/progressbar-android.png)](http://stacktips.com)

## 1. Determinate Progress Bar Example

Here is my layout

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".WebViewActivity" >

    <LinearLayout
        android:id="@+id/urlContainer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal" >

        <EditText
            android:id="@+id/urlField"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="3"
            android:hint="Enter URL to open" />

        <Button
            android:id="@+id/goButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="Open" />
    </LinearLayout>

    <ProgressBar
        android:id="@+id/progressBar"
        style="?android:attr/progressBarStyleHorizontal"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/urlContainer" />

    <WebView
        android:id="@+id/webView"
        android:layout_width="fill_parent"
        android:layout_height="fill_parent"
        android:layout_below="@id/progressBar" />

</RelativeLayout>
```

Do the following changes in your java code

```java
import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;

public class WebViewActivity extends Activity {
    private WebView webView;
    private EditText urlEditText;
    private ProgressBar progress;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        urlEditText = (EditText) findViewById(R.id.urlField);
        webView = (WebView) findViewById(R.id.webView);
        webView.setWebChromeClient(new MyWebViewClient());

        progress = (ProgressBar) findViewById(R.id.progressBar);
        progress.setMax(100);

        Button openUrl = (Button) findViewById(R.id.goButton);
        openUrl.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                String url = urlEditText.getText().toString();
                if (validateUrl(url)) {
                    webView.getSettings().setJavaScriptEnabled(true);
                    webView.loadUrl(url);

                    WebViewActivity.this.progress.setProgress(0);
                }
            }

            private boolean validateUrl(String url) {
                return true;
            }
        });

    }

    private class MyWebViewClient extends WebChromeClient {
        @Override
        public void onProgressChanged(WebView view, int newProgress) {
            WebViewActivity.this.setValue(newProgress);
            super.onProgressChanged(view, newProgress);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.web_view, menu);
        return true;
    }

    public void setValue(int progress) {
        this.progress.setProgress(progress);
    }
}
```

Output of the above program is

[![progressbar1](/media/articles/410/progressbar1.png)](http://stacktips.com)

## 2. Indeterminate Progress Bar Example

In the above layout xml file, do the following changes

```xml
<ProgressBar
        android:id="@+id/progressBar"
        android:layout_width="wrap_content"
        android:layout_centerHorizontal="true"
        android:layout_height="wrap_content"
        android:layout_below="@id/urlContainer" />
```

Below is my activity java class

```java
import android.app.Activity;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;

public class WebViewActivity extends Activity {
    private WebView webView;
    private EditText urlEditText;
    private ProgressBar progress;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        urlEditText = (EditText) findViewById(R.id.urlField);
        webView = (WebView) findViewById(R.id.webView);
        webView.setWebViewClient(new MyWebViewClient());

        progress = (ProgressBar) findViewById(R.id.progressBar);
        progress.setVisibility(View.GONE);
        Button openUrl = (Button) findViewById(R.id.goButton);
        openUrl.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                String url = urlEditText.getText().toString();
                if (validateUrl(url)) {
                    webView.getSettings().setJavaScriptEnabled(true);
                    webView.loadUrl(url);

                }
            }

            private boolean validateUrl(String url) {
                return true;
            }
        });

    }

    private class MyWebViewClient extends WebViewClient {
         @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }

         @Override
        public void onPageFinished(WebView view, String url) {
             progress.setVisibility(View.GONE);
                WebViewActivity.this.progress.setProgress(100);
            super.onPageFinished(view, url);
        }

         @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
             progress.setVisibility(View.VISIBLE);
            WebViewActivity.this.progress.setProgress(0);
            super.onPageStarted(view, url, favicon);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.web_view, menu);
        return true;
    }

    public void setValue(int progress) {
        this.progress.setProgress(progress);
    }
}
```

Below is the Output of the above code

[![progressbar](/media/articles/410/progressbar2.png)](http://stacktips.com)
