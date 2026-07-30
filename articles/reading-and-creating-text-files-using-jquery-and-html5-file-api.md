---
id: 104
title: Reading and Creating Text Files Using jQuery and HTML5 File API
slug: reading-and-creating-text-files-using-jquery-and-html5-file-api
excerpt: The following code snippet demonstrate how to read and create a text files using the jQuery and HTML5…
difficulty: beginners
publishedDate: "2016-06-03T12:23:32.000Z"
updatedDate: "2025-09-16T23:05:25.036Z"
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

The following code snippet demonstrate how to read and create a text files using the jQuery and HTML5 file API. For the sake of simplicity, in this example I am using Bootstrap CSS framework for building the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Your HTML, CSS, and JavaScript playground.">
    <title>HTML, CSS, JS Playground</title>
    <meta content="width=device-width, initialscale=1" name="viewport">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" type="text/javascript"></script>

    <script>
    $(document ).ready(function() {
        //Put your java script here
    });
    </script>
</head>
<body>
    <div class="container">
        <h1>Reading and Creating Text Files Using the HTML5 File API and jQuery</h1>
        <div class="form-group">
            <button type="button" class="btn btn-default" id="btnOpen">Open...</button>
            <button type="button" class="btn btn-default" id="btnSave">Save</button>
        </div>
        <input type="file" id="exampleInputFile" accept=".txt,.csv,.xml" class="hidden">
        <div class="form-group">
          <textarea class="form-control" rows="15" id="exampleTextarea"></textarea>
        </div>
    </div>
</body>
```

### Reading text file

```javascript
$('#btnOpen').click(function() {
  if ('FileReader' in window) {
        $('#exampleInputFile').click();
  } else {
    alert('Your browser does not support the HTML5 FileReader.');
  }
});

$('#exampleInputFile').change(function(event) {
  var fileToLoad = event.target.files[0];

  if (fileToLoad) {
    var reader = new FileReader();
    reader.onload = function(fileLoadedEvent) {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      console.log("loaded " + textFromFileLoaded);
      $('#exampleTextarea').val(textFromFileLoaded);
    };
    reader.readAsText(fileToLoad, 'UTF-8');
}
```

### Creating text file

```javascript
$('#btnSave').click(function() {
  if ('Blob' in window) {
    var fileName = prompt('Please enter file name to save', 'Untitled.txt');
    if (fileName) {
      var textToWrite = $('#exampleTextarea').val().replace(/n/g, 'rn');
      var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });

      if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
      } else {
        var downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        downloadLink.innerHTML = 'Download File';

        if ('webkitURL' in window) {
          // Chrome allows the link to be clicked without actually adding it to the DOM.
          downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
          // Firefox requires the link to be added to the DOM before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
          downloadLink.click(function(){
              document.body.removeChild(event.target);
          });

          downloadLink.style.display = 'none';
          document.body.appendChild(downloadLink);
        }
        downloadLink.click();
      }
    }
  } else {
    alert('Your browser does not support the HTML5 Blob.');
  }
});
```
