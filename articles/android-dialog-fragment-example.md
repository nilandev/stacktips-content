---
id: 155
title: Android Dialog Fragment Example
slug: android-dialog-fragment-example
excerpt: Dialog is like any other window that pops up in front of current window, used to show some short message, taking user input or to accept users decision. Unlike Toast, a dialog is generally used where user attention is mandate.
difficulty: beginners
publishedDate: "2015-03-27T23:40:03.000Z"
updatedDate: "2025-09-16T23:05:27.867Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - android
tags:
  - dialogfragment
  - oncreatedialog
  - android-alertdialog
course: null
displayOrder: 0
seo: 
  metaTitle: "Android DialogFragment Example: Create and Dismiss"
  metaDescription: "Learn how to create an Android DialogFragment using onCreateView and onCreateDialog, display it from an Activity, and dismiss it on button click."
  metaKeywords: null
---

## Dialogs in Android

The dialog is like any other window that pops up in front of the current window, used to show some short message, taking user input or to accept users decision. Unlike Toast, a dialog is generally used where user attention is mandated.

Android supports several different ways to create a dialog such as `AlertDialog` and `FragmentDialog`. This example will widely cover all the aspect of DialogFragment.

Since the release of Android 3.0 (API level 11), the fragment can show as a dialog and call as `DialogFragment`. If you’re supporting older android versions, you can make use of fragment-compatibility support library.

To create a dialog fragment, we will be using `android.app.DialogFragment` class. This class is derived from the Fragment and behaves much like a fragment with all available fragment lifecycle methods.

In the following sections, you learn how to use dialog fragment to show a simple alert dialog from activity.

## Creating Dialog Fragment

First step towards creating dialog fragment is to create a new class and extend it from DialogFragment. In the following code snippet, I am creating a new class named `MyDialogFragment`.

```java
public class MyDialogFragment extends DialogFragment {

}
```

As a DialogFragment is much like any other fragment, the same lifecycle rules are applied. Now we have to override `onCreateView` or `onCreateDialog` method to provide the view hierarchy and construct the dialog fragment.

```java
public class MyDialogFragment extends DialogFragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_sample_dialog, container, false);
        getDialog().setTitle("Simple Dialog");
        return rootView;
    }
}
```

In the above code, the `onCreateView()` method is expected to return the instance of view that represent the view hierarchy for your dialog. The instance of layout inflater can be used to inflate the layout for the fragment. ViewGroup represents the parent view where the fragment to be attached, and the Bundle param is the saved bundle data if available to restore the fragment to previous state.

## Defining Dialog Fragment Layout

Notice that, we are using `fragment_sample_dialog` layout form `onCreateView()` method, which is not declared anywhere. Let us create a simple layout that displays an ImageView and TextView as shown in the following screenshot.

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:gravity="center"
    android:padding="10dp"
    android:orientation="vertical">

    <ImageView
        android:id="@+id/image"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:src="@drawable/image" />

    <TextView
        android:id="@+id/title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Lorem ipsum dolor sit amet..."
        android:textSize="20dp" />

    <Button
        android:id="@+id/dismiss"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Dismiss" />
</LinearLayout>
```

## Displaying Dialog Fragment

We are pretty much done with creating dialog fragment. Put the following code snippet in Activity to show the dialog when user clicks on the button.

```java
FragmentManager fm = getFragmentManager();
MyDialogFragment dialogFragment = new MyDialogFragment ();
dialogFragment.show(fm, "Sample Fragment");
```

At this point we can run the application and it will produce the output as shown in the following screenshot.  
[![Android DialogFragment Example](/media/articles/203/Android-DialogFragment-Example.png)](http://stacktips.com)

## Dismiss Dialog Fragment

Dialog fragment can be dismissed by calling `dismiss()` method from `MyDialogFragment` class. Place the following code snippet in MyDialogFragment `onCreateView()` method before return statement to dismiss the dialog when user clicks on Dismiss button.

```java
Button dismiss = (Button) rootView.findViewById(R.id.dismiss);
dismiss.setOnClickListener(new View.OnClickListener() {

    @Override
    public void onClick(View v) {
          dismiss();
    }
});
```

The fragment dialog dismiss() method dismiss the dialog by removes the fragment from fragment manager, and then commit the fragment transaction.

## Dialog Fragment using onCreateDialog()

There are two approaches to attach view group hierarchy to a dialog. Either we can override `onCreateView()` method and inflate layout as we have done in the step, or alternatively we can override `onCreateDialog()` method and supply a dialog instance. The following code hows how to create dialog fragment using onCreateDialog method.

```java
@Override
public Dialog onCreateDialog(Bundle savedInstanceState) {
    AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
    builder.setTitle("Simple Dialog");
    builder.setMessage("Some message here");

    builder.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
        @Override
        public void onClick(DialogInterface dialog, int which) {
            dismiss();
        }
    });

    builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
        @Override
        public void onClick(DialogInterface dialog, int which) {
            dismiss();
        }
    });

    return builder.create();
}
```
