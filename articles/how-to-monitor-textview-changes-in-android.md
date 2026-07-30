---
id: 133
title: How to Monitor TextView Changes in Android
slug: how-to-monitor-textview-changes-in-android
excerpt: In this tutorial we will see how to monitor the text changes in Android TextView or EditText. Some form based applications needs to continuously monitor for the text changes to perform the front end form validations. This can be achieved by implementing the android.text.TextWatcher interface.
difficulty: beginners
publishedDate: "2015-07-31T09:14:36.000Z"
updatedDate: "2025-09-16T23:05:26.919Z"
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

In this tutorial, we will see how to monitor the text changes in Android TextView or EditText.

Some form based applications needs to continuously monitor for the text changes to perform the front end form validations. This can be achieved by implementing the `android.text.TextWatcher` interface. The TextWatcher interface provides the following three callback methods, that are called while the textview is being updated.

```java
public void beforeTextChanged(CharSequence s, int start, int count, int after);
public void onTextChanged(CharSequence s, int start, int before, int count);
public void afterTextChanged(Editable s);
```

The `beforeTextChanged()` and `onTextChanged()` methods are provided mainly as notifications, as shouldn’t make changes to the CharSequence in either of these methods. If you are attempting to intercept the text entered into the view, changes may be made when `afterTextChanged()` is called.

First, you need to register a TextWatcher instance with a TextView, call the `textView.addTextChangedListener()` method. Notice from the syntax that more than one TextWatcher can be registered with a TextView. Now that we understand the methods to be used, let us examine the sample for the usage.

##### Count Characters on TextView Changes

A simple use of TextWatcher is to create a live character counter that follows an EditText as the user types or deletes information.

```java
public class MyActivity extends Activity implements TextWatcher {
    private EditText text;
    private int textCount;
    private static final String TAG = "MyActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Create an EditText widget and add the watcher
        editText = new EditText(this);
        editText.addTextChangedListener(this);
        setContentView(editText);
    }

    /* TextWatcher Implementation Methods */
    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {

    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {
        textCount = editText.getText().length();
        setTitle(String.valueOf(textCount));
        Log.e(TAG, String.valueOf(textCount))
    }

    @Override
    public void afterTextChanged(Editable s) {

    }
}
```

Because our needs do not include modifying the text being inserted, we can read the count from `onTextChanged()`, which happens as soon as the text change occurs. The other methods are unused and left empty.
