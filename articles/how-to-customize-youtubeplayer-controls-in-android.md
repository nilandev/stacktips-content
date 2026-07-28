---
id: 71
title: How to Customize YouTubePlayer Controls in Android
slug: how-to-customize-youtubeplayer-controls-in-android
excerpt: The Android YouTubePlayer allows you to customize the playback control by setting one of the style defined in YouTubePlayer.PlayerStyle enum. You can apply style to YouTubePlayer by calling setPlayerStyle method.
difficulty: beginners
publishedDate: "2016-07-09T14:01:30.000Z"
updatedDate: "2025-09-16T23:05:23.350Z"
videoLink: null
githubLink: "https://github.com/StackTipsLab/android-ui-tutorials/tree/master/android-youtube-playerview-demo"
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

The YouTube Android Player allows you to customize the playback control by setting one of the style defined in YouTubePlayer.PlayerStyle enumeration. It currently support three styles `DEFAULT`, `MINIMAL` or `CHROMELESS`;

-   _YouTubePlayer.PlayerStyle.DEFAULT_ – The default style, showing all interactive player controls.
-   _YouTubePlayer.PlayerStyle.MINIMAL_ – The minimal style displays only a time bar and play/pause controls.
-   _YouTubePlayer.PlayerStyle.CHROMELESS_ – A style that shows no interactive player controls. When you use CHROMELESS, you need to write your own controls for play, pause or seek operation.

You can apply style to YouTubePlayer by calling `setPlayerStyle(PlayerStyle style)` method.

```
player.setPlayerStyle(PlayerStyle.CHROMELESS);
```

In our previous example, we saw How to use [YouTube Android Player API and YouTubePlayerView](/articles/youtube-android-player-api-example). In this example, we will customize the YouTubePlayer with custom player controls.

![Customize YouTubePlayer Controls in Android](/media/articles/97/Customize-YouTubePlayer-Controls-in-Android.png)

### Add YouTubePlayerView to View Hierarchy

Let us first add the YouTubePlayerView view in your activity or fragment view hierarchy.

activity\_custom\_player.xml

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context="com.stacktips.youtube.MainActivity">

    <com.google.android.youtube.player.YouTubePlayerView
        android:id="@+id/youtube_player_view"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#ebeff2" />

</LinearLayout>
```

Let us now add the player controls right below `YouTubePlayerView` in `activity_custom_player.xml` layout.

```
<LinearLayout
    android:id="@+id/video_control"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#444"
    android:gravity="center_vertical"
    android:orientation="horizontal"
    android:visibility="gone"
    android:weightSum="10">

    <ImageButton
        android:id="@+id/play_video"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:layout_weight="1"
        android:background="@null"
        android:src="@drawable/ic_play" />

    <ImageButton
        android:id="@+id/pause_video"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:layout_weight="1"
        android:background="@null"
        android:src="@drawable/ic_pause" />

    <SeekBar
        android:id="@+id/video_seekbar"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_margin="10dp"
        android:layout_weight="6"
        android:max="100"
        android:progress="0" />

    <TextView
        android:id="@+id/play_time"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_margin="5dp"
        android:layout_weight="2"
        android:text="--:--"
        android:textColor="@android:color/white" />
</LinearLayout>
```

### 2\. Add INTERNET Permission in AndroidManifest

INTERNET permission is required to play video over internet. Add the following permission in your application `AndroidManifest.xml` file.

```
<uses-permission android:name="android.permission.INTERNET" />
```

### Initialize YouTubePlayerView

When using YouTubePlayerView, your activity needs to extend `[YouTubeBaseActivity](https://developers.google.com/youtube/android/player/reference/com/google/android/youtube/player/YouTubeBaseActivity.html)`. Now let us create an Activity that extends YouTubeBaseActivity and initialize the YouTubePlayerView. We will add our own Play, Pause and Seek playback control.

```
public class CustomPlayerControlActivity extends YouTubeBaseActivity 
        implements OnInitializedListener, View.OnClickListener {
    private static final String TAG = "CustomPlayerControlActivity";

    public static final String API_KEY = "AIzaSyBx7v0YOb140fDO732fMx4l87raxezDWFw";

    //https://www.youtube.com/watch?v=<VIDEO_ID>
    public static final String VIDEO_ID = "-m3V8w_7vhk";

    private YouTubePlayer mPlayer;

    private View mPlayButtonLayout;
    private TextView mPlayTimeTextView;

    private Handler mHandler = null;
    private SeekBar mSeekBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // attaching layout xml
        setContentView(R.layout.activity_custom_player);

        // Initializing YouTube player view
        YouTubePlayerView youTubePlayerView = (YouTubePlayerView) findViewById(R.id.youtube_player_view);
        youTubePlayerView.initialize(API_KEY, this);

        //Add play button to explicitly play video in YouTubePlayerView
        mPlayButtonLayout = findViewById(R.id.video_control);
        findViewById(R.id.play_video).setOnClickListener(this);
        findViewById(R.id.pause_video).setOnClickListener(this);

        mPlayTimeTextView = (TextView) findViewById(R.id.play_time);
        mSeekBar = (SeekBar) findViewById(R.id.video_seekbar);
        mSeekBar.setOnSeekBarChangeListener(mVideoSeekBarChangeListener);

        mHandler = new Handler();
    }

    @Override
    public void onInitializationFailure(Provider provider, YouTubeInitializationResult result) {
        Toast.makeText(this, "Failed to initialize.", Toast.LENGTH_LONG).show();
    }

    @Override
    public void onInitializationSuccess(Provider provider, YouTubePlayer player, boolean wasRestored) {
        if (null == player) return;
        mPlayer = player;

        displayCurrentTime();

        // Start buffering
        if (!wasRestored) {
            player.cueVideo(VIDEO_ID);
        }

        player.setPlayerStyle(PlayerStyle.CHROMELESS);
        mPlayButtonLayout.setVisibility(View.VISIBLE);

        // Add listeners to YouTubePlayer instance
        player.setPlayerStateChangeListener(mPlayerStateChangeListener);
        player.setPlaybackEventListener(mPlaybackEventListener);
    }

    PlaybackEventListener mPlaybackEventListener = new PlaybackEventListener() {
        @Override
        public void onBuffering(boolean arg0) {
        }

        @Override
        public void onPaused() {
            mHandler.removeCallbacks(runnable);
        }

        @Override
        public void onPlaying() {
            mHandler.postDelayed(runnable, 100);
            displayCurrentTime();
        }

        @Override
        public void onSeekTo(int arg0) {
            mHandler.postDelayed(runnable, 100);
        }

        @Override
        public void onStopped() {
            mHandler.removeCallbacks(runnable);
        }
    };

    PlayerStateChangeListener mPlayerStateChangeListener = new PlayerStateChangeListener() {
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
            displayCurrentTime();
        }
    };

    SeekBar.OnSeekBarChangeListener mVideoSeekBarChangeListener = new SeekBar.OnSeekBarChangeListener() {
        @Override
        public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
            long lengthPlayed = (mPlayer.getDurationMillis() * progress) / 100;
            mPlayer.seekToMillis((int) lengthPlayed);
        }

        @Override
        public void onStartTrackingTouch(SeekBar seekBar) {

        }

        @Override
        public void onStopTrackingTouch(SeekBar seekBar) {

        }
    };

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.play_video:
                if (null != mPlayer && !mPlayer.isPlaying())
                    mPlayer.play();
                break;
            case R.id.pause_video:
                if (null != mPlayer && mPlayer.isPlaying())
                    mPlayer.pause();
                break;
        }
    }

    private void displayCurrentTime() {
        if (null == mPlayer) return;
        String formattedTime = formatTime(mPlayer.getDurationMillis() - mPlayer.getCurrentTimeMillis());
        mPlayTimeTextView.setText(formattedTime);
    }

    private String formatTime(int millis) {
        int seconds = millis / 1000;
        int minutes = seconds / 60;
        int hours = minutes / 60;

        return (hours == 0 ? "--:" : hours + ":") + String.format("%02d:%02d", minutes % 60, seconds % 60);
    }

    private Runnable runnable = new Runnable() {
        @Override
        public void run() {
            displayCurrentTime();
            mHandler.postDelayed(this, 100);
        }
    };
}
```
