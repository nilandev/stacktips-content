---
id: 102
title: Restrict EditText Min and Max Value Input Range in Android
slug: restrict-edittext-min-and-max-value-input-range-using-android-inputfilter
excerpt: Using Android LengthFilter, AllCaps and CustomInputFilter example. This tutorial explains how to restrict min max input range using custom InputFilter.
difficulty: beginners
publishedDate: "2016-06-08T20:38:54.000Z"
updatedDate: "2025-09-16T23:05:24.921Z"
videoLink: null
githubLink: null
featured: false
thumbnail: null
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

EditText in Android is one of the basic UI widget used for user data input. An `InputFilter` can be attached to an EditText to constrain the changes that can be made to them. For example, you want to allow the maximum of 10 characters to be entered, or you want to allow only uppercase characters.

Android SDK comes handy with set of basic filters such as `AllCaps` and `LengthFilter`. However, you can always write your own filter implementation using `InputFilter` interface.

You can use attach a filter to Editables by calling `setFilters()` method.

```java
//Set Length filter. Restricting to 10 characters only
editText.setFilters(new InputFilter[]{new InputFilter.LengthFilter(MAX_LENGTH)});

//Allowing only upper case characters
editText.setFilters(new InputFilter[]{new InputFilter.AllCaps()});

//Attaching multiple filters
editText.setFilters(new InputFilter[]{new InputFilter.LengthFilter(MAX_LENGTH), new InputFilter.AllCaps()});
```

### Min and Max Value Range Filter Example

For defining your own custom filter, you need to implements `InputFilter` interface and override the `filter()` method.

-   The filter() method is called when the buffer is going to replace the range dStart to dEnd of dest with the new text from the range start to end of the source.
-   Return the CharSequence that you would like to have placed there instead, including an empty string if appropriate, or null to accept the original replacement.
-   Be careful to not to reject 0-length replacements, as this is what happens when you delete text.
-   Also beware that you should not attempt to make any changes to dest from this method; you may only examine it for context.

Let us now create a custom filter to define the Min and Max value range. The min max range can be set by setting values to constructor initialization.

```java
import android.text.InputFilter;
import android.text.Spanned;

public class CustomRangeInputFilter implements InputFilter {
    private double minValue;
    private double maxValue;

    public CustomRangeInputFilter(double minVal, double maxVal) {
        this.minValue = minVal;
        this.maxValue = maxVal;
    }

    @Override
    public CharSequence filter(CharSequence source, int start, int end, Spanned dest, int dStart, int dEnd) {
        try {
            // Remove the string out of destination that is to be replaced
            String newVal = dest.toString().substring(0, dStart) + dest.toString().substring(dEnd, dest.toString().length());
            newVal = newVal.substring(0, dStart) + source.toString() + newVal.substring(dStart, newVal.length());
            double input = Double.parseDouble(newVal);

            if (isInRange(minValue, maxValue, input)) {
                return null;
            }
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return "";
    }

    private boolean isInRange(double a, double b, double c) {
        return b > a ? c >= a && c <= b : c >= b && c <= a;
    }
}
```

You can use this filter using;

```java
//Define Min, Max range value using custom input filter
editText.setFilters(new InputFilter[]{new CustomRangeInputFilter(0f, 10.0f)});
```

Welcome to EditPad.org – your online plain text editor. Enter or paste your text here. To download and save it, click on the button below.

more » Edit Pad – Free Online Text EditorEdit Pad © 2018
