---
id: 63
title: How to Add Subscribers to a List Using MailChimp REST Api V3
slug: how-to-add-subscribers-to-a-list-using-mailchimp-rest-api-v3
excerpt: MailChimp REST Api V3 exposes methods that allows you to add, manage members of a specific MailChimp list. The following code snippet help you to add a new subscriber to Mailchimp List.
difficulty: beginners
publishedDate: "2016-08-14T12:12:36.000Z"
updatedDate: "2025-09-16T23:05:22.898Z"
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

MailChimp REST API V3 exposes methods that allow you to add, manage members of a specific MailChimp list. The following code snippet helps you to add a new subscriber to MailChimp List.

```php
<?php
class ST_Newsletter_Plugin {
	public function __construct(){ 
	
	} 
	
	function subscribe($user_id, $user_email){
		//get api_key and list id from admin settings
		$api_key = "c8d8c17ae54aui8ujnj43343-us9";
		$list_id = "2d9e113i8hm";
		
		require_once('MailChimp.php');
		$mailChimp = new MailChimp($api_key);
		
		$result = $mailChimp->post("lists/$list_id/members", [
			'email_address' => $user_email,
			'status'=> 'subscribed'
		]);

		if ($mailChimp->success()) {
		    echo "success";
		} else {
		   echo "fail";
		}
	}
}

?>
```

You can download “MailChimp.php” from [GitHub](https://github.com/drewm/mailchimp-api).
