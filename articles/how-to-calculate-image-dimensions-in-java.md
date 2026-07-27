---
id: 77
title: How to Calculate Image Dimensions in Java
slug: how-to-calculate-image-dimensions-in-java
excerpt: The following code snippet shows how to calculate image dimension in java by reading the file from specified path.
difficulty: beginners
publishedDate: "2016-07-06T05:36:25.000Z"
updatedDate: "2025-09-16T23:05:23.764Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/104/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet shows how to calculate image dimension in java by reading the file from specified path.

```java
public static Dimension getImageDimension(final File path) {
    if (path == null) return null;

    Dimension result = null;
    String suffix = getFileExtension(path.toString());
    if (suffix.startsWith(".")) {
        suffix = suffix.substring(1);
    }

    final Iterator iterator = ImageIO.getImageReadersBySuffix(suffix);
    if (iterator.hasNext()) {
        final ImageReader reader = iterator.next();
        try {
            final ImageInputStream stream = new FileImageInputStream(path);
            reader.setInput(stream);
            int width = reader.getWidth(reader.getMinIndex());
            int height = reader.getHeight(reader.getMinIndex());
            result = new Dimension(width, height);
        } catch (IOException e) {
        } finally {
            reader.dispose();
        }
    } else {
        logger.error("No reader found for given format: " + suffix);
    }
    return result;
}
```
