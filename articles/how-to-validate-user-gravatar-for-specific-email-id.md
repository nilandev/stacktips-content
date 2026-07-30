---
id: 89
title: How to validate user Gravatar for specific email id
slug: how-to-validate-user-gravatar-for-specific-email-id
excerpt: The following PHP snippet can be used to determine if Gravatar is available for specified email. It returns TRUE for valid gravatar otherwise it returns false.
difficulty: beginners
publishedDate: "2015-09-15T10:19:21.000Z"
updatedDate: "2025-09-16T23:05:26.627Z"
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

Gravatar is one of the most common service used widely on WordPress blogging platform. Gravatar is used for providing globally unique avatar for a specific email. During advance WordPress development, you may want to check if Gravatar is available for a users email, to display image or avatar from alternative source.

The following PHP snippet can be used to determine if Gravatar is available for specified email. It returns TRUE for valid gravatar otherwise it returns false.

```php
function validateGravatar($email) {
    $hash = md5(strtolower(trim($email)));
    $uri = 'http://www.gravatar.com/avatar/' . $hash . '?d=404';
    $headers = @get_headers($uri);
    if (!preg_match("|200|", $headers[0])) {
        $has_valid_avatar = FALSE;
    } else {
        $has_valid_avatar = TRUE;
    }
    return $has_valid_avatar;
}
```
