---
id: 249
title: YouTubePlayerView Example in Android Using YouTube API
slug: youtubeplayerview-example-in-android-using-youtube-api
excerpt: In this tutorial we’ll see how to use YouTube Player API in android. YouTube player API provided and embedded view that supports with various playback controls.
difficulty: beginners
publishedDate: "2014-03-12T22:37:45.000Z"
updatedDate: "2025-09-16T23:05:32.621Z"
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

Jack and Jill says this tutorial is retired. And we agree! This tutorial was published back in May 2014, since then lot has been changed; YouTubePlayerAPI is updated and Eclipse for Android development is history. Checkout our new [YouTube Android Player API Example](/articles/youtube-android-player-api-example) here.

In this tutorial we’ll see how to use YouTube Player API in android. YouTube player API provides an embedded view that supports with various playback controls.

## 1\. Downloading YouTube Player API

Before you start writing some code, you’ll have to first download the YouTube Android Player API. Once downloaded import the jar into your project lib folder and add the jar to your build path.

**Download [YouTube Player API here](https://developers.google.com/youtube/android/player/downloads/)**

[![YouTube Android Player API](/media/articles/323/YouTube-Android-Player-API-620x380.png)](http://stacktips.com)

## 2\. Register your app in Google developer console

-   Before you start using the Youtube player API for android, you have to register your application with Google developer console and get and API key, The API key is a unique value for your application. Do not disclose this to others.
-   Visit [**Google APIs Console**](https://console.developers.google.com) and login with your Google account and create a new project
-   Once your project is created, got to API’s and enable **YouTube data API V3**
-   And then Select **API Access** in your API Console. You’ll find API key. This API key will be used to access YouTube Android Player APIs.

[![YouTube Android Player API2](/media/articles/323/YouTube-Android-Player-API2-620x301.png)](http://stacktips.com)

## 3\. Create a new Android Application project

Now you are ready to create Android project to play YouTube videos using YouTube player API. You may use IDE of your choice, here I am using Eclipse.

You need `INTERNET` permission to play video over internet. Add below permission in your application `AndroidManifest.xml` file.

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## 4\. Define your activity layout

In this example, we will create an simple layout that uses YouTubePlayerView inside an LinearLayout.

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical" >

    <com.google.android.youtube.player.YouTubePlayerView
        android:id="@+id/youtube_player"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#fff"
        android:padding="5dp" />

</LinearLayout>
```

## 5\. Initialize YouTubePlayerView in your Activity

Initializing YouTube player view by calling initialize methood. Once the initialize is successful, you will get the `onInitializationSuccess()` callback with `YouTubePlayer` instance. You can add additional listeners to handle the playback control events.

```java
package com.javatechig.youtubeapp;

import android.os.Bundle;
import android.widget.Toast;
import com.google.android.youtube.player.YouTubeBaseActivity;
import com.google.android.youtube.player.YouTubeInitializationResult;
import com.google.android.youtube.player.YouTubePlayer;
import com.google.android.youtube.player.YouTubePlayer.ErrorReason;
import com.google.android.youtube.player.YouTubePlayer.PlaybackEventListener;
import com.google.android.youtube.player.YouTubePlayer.PlayerStateChangeListener;
import com.google.android.youtube.player.YouTubePlayer.Provider;
import com.google.android.youtube.player.YouTubePlayerView;
import com.javatechig.youtubeandroid.R;

public class MainActivity extends YouTubeBaseActivity implements YouTubePlayer.OnInitializedListener {
	public static final String API_KEY = "YOUR API KEY";

	//http://youtu.be/<VIDEO_ID>
	public static final String VIDEO_ID = "dKLftgvYsVU";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		/** attaching layout xml **/
		setContentView(R.layout.activity_main);

		/** Initializing YouTube player view **/
		YouTubePlayerView youTubePlayerView = (YouTubePlayerView) findViewById(R.id.youtube_player);
		youTubePlayerView.initialize(API_KEY, this);
	}

	@Override
	public void onInitializationFailure(Provider provider, YouTubeInitializationResult result) {
		Toast.makeText(this, "Failured to Initialize!", Toast.LENGTH_LONG).show();
	}

	@Override
	public void onInitializationSuccess(Provider provider, YouTubePlayer player, boolean wasRestored) {
		/** add listeners to YouTubePlayer instance **/
		player.setPlayerStateChangeListener(playerStateChangeListener);
		player.setPlaybackEventListener(playbackEventListener);

		/** Start buffering **/
		if (!wasRestored) {
			player.cueVideo(VIDEO_ID);
		}
	}

	private PlaybackEventListener playbackEventListener = new PlaybackEventListener() {

		@Override
		public void onBuffering(boolean arg0) {
		}

		@Override
		public void onPaused() {
		}

		@Override
		public void onPlaying() {
		}

		@Override
		public void onSeekTo(int arg0) {
		}

		@Override
		public void onStopped() {
		}

	};

	private PlayerStateChangeListener playerStateChangeListener = new PlayerStateChangeListener() {

		@Override
		public void onAdStarted() {
		}

		@Override
		public void onError(ErrorReason arg0) {
		}

		@Override
		public void onLoaded(String arg0) {
		}

		@Override
		public void onLoading() {
		}

		@Override
		public void onVideoEnded() {
		}

		@Override
		public void onVideoStarted() {
		}
	};
}
```

## 6\. Output  
[![YouTube Android Player API Example - Javatechig](/media/articles/323/YouTube-Android-Player-API-Example-Javatechig-620x390.png)](http://stacktips.com)
