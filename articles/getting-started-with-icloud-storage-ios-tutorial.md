---
id: 66
title: Getting Started with iCloud Storage – iOS Tutorial
slug: getting-started-with-icloud-storage-ios-tutorial
excerpt: iCloud make use of Apple ID to access their personally content on all their devices wirelessly and automatically,…
difficulty: beginners
publishedDate: "2016-08-11T05:50:47.000Z"
updatedDate: "2025-09-16T23:05:23.048Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/87/thumbnail.png
topics: 
  - android
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

iCloud make use of Apple ID to access their personally content on all their devices wirelessly and automatically, this service is free of cost. iCloud Storage API is available for both iOS and MacOS X platform. It’s important to note that iCloud applications cannot be tested on the iOS Simulator it should be tested on the two iOS devices.

Every iOS Application run on it’s own sandbox environment which has it’s own restriction. Some of the restriction affect where and how your application store data. Each Application given a directory on the device file’s system. The content of this directory is private to the application and cannot be read by the other applications on the device.

In iOS we make use of Document directory for storing application data. iCloud Storage conceptually extends this model and allows your application to upload your data for its directory to Apple’s server. This data is accessible from other iCloud-compatible devices on which copies of your applications are running. Your Application also receives notifications when data is created or updated by other copy of the application. This synchronisation is achieved by a background process that runs on all iCloud compatible devices.

## 1\. Setting up iCloud Storage APIs

-   Enabling iCloud services in App ID on Apples Developer Portal.
-   Creating relevant provisioning profile.
-   Enabling relevant entitlements in Xcode project.

### 1.1. Enabling iCloud Service for App ID

To Create an relevant App ID, log in to Apple developer account at [https://developer.apple.com](https://developer.apple.com). Click the Certificates, Identifiers & Profiles link.

[![Enabling iCloud service in App ID](/media/articles/87/Enabling-iCloud-service-in-App-ID-e1470690453298-620x361.png)](/articles/getting-started-with-icloud-storage-ios-tutorial/attachment/enabling-icloud-service-in-app-id)

To create new App ID, click the New App ID button on the top-right side.

[![Apple Developer- Create new App identifier](/media/articles/87/Apple-Developer-Create-new-App-identifier-620x314.png)](/articles/getting-started-with-icloud-storage-ios-tutorial/attachment/apple-developer-create-new-app-identifier)

Provide a descriptive name of the new App ID in the Name field and select Team ID in the App ID prefix drop-down. Select the Explicit App ID radio button under the App ID suffix section and provide a unique identifier in the Bundle ID field that ends in the name of the Xcode project you are going to create (or have created).

Typically, you create this identifier by combining the reverse-domain name of your website and the name of your Xcode project. For example, the project created in this lesson is called `SwiftDemoiCloudTest` and the bundle identifier specified is `com..CloudTest`. Your browser window should resemble.

[![Apple Developer- Registring App Indentifier](/media/articles/87/Apple-Developer-Registring-App-Indentifier-620x626.png)](/articles/getting-started-with-icloud-storage-ios-tutorial/attachment/apple-developer-registring-app-indentifier)

Scroll down to reveal the App Services section and ensure the iCloud checkbox is selected and the Compatible with Xcode 5 option is selected.

[![Apple Developer- Select iCloud App Services](/media/articles/87/Apple-Developer-Select-iCloud-App-Services-620x682.png)](/articles/getting-started-with-icloud-storage-ios-tutorial/attachment/apple-developer-select-icloud-app-services)

Click the Continue button to proceed. You will be presented with a registration confirmation summary page that displays App ID and other activated services information. Verify the details and click on Submit to finish the process.

### 1.2. Creating Relevant Provisioning Profile

To create a provisioning profile for an iCloud-enabled App ID, click the All link (under the Provisioning category) in the menu on the left side of the iOS Provisioning Portal window.

[![Creating Relevant Provisioning Profile](/media/articles/87/Creating-Relevant-Provisioning-Profile-620x423.png)](http://stacktips.com)

Click the “**New Profile”** button on the top-right corner of the iOS Provisioning Portal window.

You will be asked to choose between a development or distribution provisioning profile. A distribution provisioning profile is used to submit applications to iTunes Connect. For the moment, select the iOS App Development option and click **Continue**.

[![Type of provisining profile iOS](/media/articles/87/Type-of-provisining-profile-iOS-620x411.png)](http://stacktips.com)

A development provisioning profile ties together three pieces of information:

-   A single App ID
-   One or more public keys
-   A list of test device IDs

The next step requires you to select an App ID that will be associated with this provisioning profile. Select the iCloud-enabled App ID you have created and click **Continue**.

[![Select AppId iOS](/media/articles/87/Select-AppId-iOS-620x414.png)](https://stacktips.com)

Select one or more development certificates that will be included in the profile. You must make sure to sign the app in Xcode using one of the certificates you select here. Select a suitable certificate and click **Continue**.

[![Select Certificate](/media/articles/87/Select-Certificate-620x443.png)](https://stacktips.com)

Next, you must select one or more devices that will be included in this provisioning profile. The corresponding identifiers for these devices must be registered with your development account. Your app will only be testable on these devices.

[![Device Selection for Provisioning profile](/media/articles/87/Device-Selection-for-Provisioning-profile-620x438.png)](http://stacktips.com)

The final step involves providing a suitable name for the profile and clicking the Generate button. When the profile is created, you will be provided an option to download it onto your computer.

[![Download iOS Provising Profile](/media/articles/87/Download-iOS-Provising-Profile-620x436.png)](http://stacktips.com)

If you were to now click the All link under the Provisioning section on the left side menu, you should see an entry for the new profile in the list of available profiles. You can also download a provision- ing profile from this list.

Once the profile has been downloaded, simply locate it in the Downloads folder on your Mac and double-click it to install it in Xcode.

### 1.3. Enabling Xcode Project Entitlements

Create a new project in Xcode using one of the standard iOS application templates. In the Project Options dialog box, make sure you provide the correct value for the Product Name and Organization Identifier fields so as to create the same App ID that was registered on the iOS Provisioning Portal. For instance, the App ID you registered was `com.satish.swiftcloud- test`, use `swifticloudtest` for the Product Name field and `com.satish` for the Company Identifier field.

Applications that use iCloud must be signed with iCloud-specific entitlements. These entitlements ensure that only your applications can access the documents that they create. To enable entitlements, select the project’s root node in the project navigator and the appropriate build target. Ensure the Capabilities tab is selected.

Locate the iCloud node and enable it. You may be asked to provide your iOS developer accounts credentials when you enable the iCloud entitlement. Because this article is about iCloud document storage, ensure the iCloud Documents checkbox is checked.

[![nabling Relevant Entitlements in Xcode Project](/media/articles/87/nabling-Relevant-Entitlements-in-Xcode-Project-620x369.png)](http://stacktips.com)

## 2\. Checking iCould Service Availablity

If your application intends to make use of the iCloud Storage APIs, you must ensure that the service is available to the application. This may not necessarily be the case if, for example, the user has not set up iCloud on the device.

To check for service availability, use the `URLForUbiquityContainerIdentifier()` method of the `NSFileManager` class. This method requires one String parameter that specifies a container identifier that your application uses.

If this method succeeds, the return value is an NSURL instance that identifies the container directory. If the method fails, the return value is nil.

If your application uses only one container identifier, or you want to use the main container identifier for the application, pass nil for the parameter. If your application accesses multiple containers, you must call this method for each container identifier to ensure you have access to each container. The following code snippet shows how to use this method for the main container identifier:

```c
let folderURL = NSFileManager.defaultManager().URLForUbiquityContainerIdentifier(nil)
if let unwrappedFolderURL = folderURL {
       //cloud access is available
}
else {
      //cloud access is not available.
}
```

## 3\. Using iCloud Document Storage

Any file stored by your application on iCloud must be managed by a file presenter object. A file presenter is an object that implements the NSFilePresenter protocol. Essentially, a file presenter acts as an agent for a file. Before an external source can change the file, the file presenter for the file is notified. When your app wants to change the file, it must lock the file by making its changes through a file coordinator object. A file coordinator object is an instance of the NSFileCoordinator class.

The simplest way to incorporate file presenters and coordinators in your application is to have your data classes (also known as model classes) subclass `UIDocument`. The UIDocument class implements the methods of the `NSFilePresenter` protocol and handles all of the file-related management. At the most basic level, you will need to override two UIDocument methods:

```c
public func loadFromContents(contents: AnyObject, ofType typeName: String?) throws

public func contentsForType(typeName: String) throws -> AnyObject
```

The `loadFromContents(contents, ofType)` method is overridden by your `UIDocument` subclass and is called when the application needs to read data into its data model.

The first parameter of this method, contents, encapsulates the document data to be read. In the case of at files, contents is an instance of an NSData object. It can also be an NSFileWrapper instance if the data being read corresponds to a file package. The typeName parameter indicates the file type of the document.

If you cannot load the document for some reason, you should throw an exception encapsulating the reason for failure.

The `contentsForType()` method is also overridden by your UIDocument subclass and is called when the application saves data to a file. This method must return an NSData instance that will be written to the file. If you cannot return an NSData instance for some reason, you throw an exception that encapsulates the reason for failure.

The following code presents a simple UIDocument subclass called `SwiftiCloudTest`. The example assumes that the application where this class is used has a rather simple data model consist- ing of a single String instance.

```c
import UIKit
enum DocumentReadError: ErrorType { 
	case InvalidInput 
} 

enum DocumentWriteError: ErrorType { 
	case NoContentToSave 
}

class SwiftCloudTestDocument: UIDocument { 
	var documentContents:String? 
	override init(fileURL url: NSURL) {
	 	super.init(fileURL: url) 
	} 
	
	override func loadFromContents(contents: AnyObject, ofType typeName: String?) throws { 
		if let castedContents = contents as? NSData { 
			documentContents = NSString(data: castedContents, encoding: NSUTF8StringEncoding) as? String 
		}else { 
			documentContents = nil 
			throw DocumentReadError.InvalidInput
		} 
	}

	override func contentsForType(typeName: String) throws -> AnyObject { 
		if documentContents == nil {
			throw DocumentWriteError.NoContentToSave 
		} 
		return 	documentContents!.dataUsingEncoding(NSUTF8StringEncoding)! 
	} 
}
```

### 3.1. Creating a New iCloud Document

To create a new document, initialize an instance of your UIDocument subclass by using the `init(fileURL url: NSURL)` initializer and then call `saveToURL(url, saveOperation, completionHandler)` on the instance.

The initializer requires a single `NSURL` parameter that identifies the location where document data is to be written. This URL is usually composed by appending a filename in the Documents subdirectory to the path to an iCloud container. For instance, to create a new document on iCloud called `phoneNumber.txt`, you could use the following snippet:

```c
let containerURL = NSFileManager.defaultManager().URLForUbiquityContainerIdentifier(nil)
let documentDirectoryURL = containerURL!.URLByAppendingPathComponent("Documents")
let documentURL = documentDirectoryURL.URLByAppendingPathComponent("phoneNumber.txt")
let cloudDocument:SwiftCloudTestDocument = SwiftCloudTestDocument(fileURL: documentURL)
cloudDocument.saveToURL(cloudDocument.fileURL, forSaveOperation: UIDocumentSaveOperation.ForCreating) {
(Bool success) -> Void in if (success) {
	// document was created successfully. 
	}

}
```

The `saveToURL(url, saveOperation, completionHandler)` method is described below in this article

### 3.2. Saving a Document to iCloud

Once you have an instance of a `UIDocument` subclass, saving it to iCloud is simply a matter of call- ing the `saveToURL(url, saveOperation, completionHandler)` method on it. The first parameter to this method is an `NSURL` instance that contains the target URL. You can compose this URL in the same manner as when you instantiated your UIDocument subclass.

If, however, you want to retrieve the URL corresponding to an existing UIDocument subclass, simply use the fileURL property of the subclass. Thus, if `cloudDocument` is an instance of a `UIDocument` subclass, you can retrieve the URL used when it was instantiated using the following code:

```c
Let documentURL = cloudDocument.fileURL
```

The second parameter is a constant that is used to indicate whether the document contents are being saved for the first time, or overwritten. It can be either of:

-   UIDocumentSaveOperation.ForCreating
-   UIDocumentSaveOperation.ForOverwriting

### 3.3. Opening an Existing iCloud Document

To open an existing document, allocate and initialize an instance of your UIDocument subclass and call `openWithCompletionHandler()` on the instance. For example, you could open a le called `phoneNumbers.txt` from iCloud using the following snippet:

```c
let containerURL = NSFileManager.defaultManager().URLForUbiquityContainerIdentifier(nil)
let documentDirectoryURL = containerURL!.URLByAppendingPathComponent("Documents")
let documentURL = documentDirectoryURL.URLByAppendingPathComponent("phoneNumber.txt")
let cloudDocument:SwiftCloudTestDocument = SwiftCloudTestDocument(fileURL: documentURL)
cloudDocument.openWithCompletionHandler { (BOOL success) -> Void in
if (success) {
    // cloud document opened successfully!

}
}
```

### 3.4. Searching for Documents on iCloud

Often, you will need to search iCloud container directories for documents. To do this, you need to create a search query using an NSMetadataQuery instance, set up an appropriate search filter, and execute the query.

Queries have two phases: an initial search phase and a second live-update phase. During the live- update phase, updated results are typically available once every second. The following code snippet builds a search query:

```c
let searchQuery:NSMetadataQuery = NSMetadataQuery() searchQuery.searchScopes = [NSMetadataQueryUbiquitousDocumentsScope];
```

The searchScopes property allows you to specify an array of directory strings over which the search should execute. To specify the iCloud container folder as the search target, you provide an Array instance with a single object:

```c
NSMetadataQueryUbiquitousDocumentsScope
```

Before you can execute the query, you need to specify a search filter. Search filters are also known as predicates and are instances of the NSPredicate class. The following code snippet creates an NSPredicate instance that filters out a file with a specific name:

```c
let documentFileName = "cloudDocument.txt"
let predicate = NSPredicate(format: "%K == %@", argumentArray: [NSMetadataItemFSNameKey, documentFileName])
```

To apply the predicate to the search query, use the predicate property on the NSMetadataQuery instance:

```c
searchQuery.predicate = predicate
```

Search queries execute asynchronously. When the query has finished gathering results, your application will receive the NSMetadataQueryDidFinishGatheringNotification notification message. Use the following code snippet to set up a method in your code called `queryDidFinish()` to be called when this notification is received:

```c
NSNotificationCenter.defaultCenter().addObserver(self, selector: "queryDidFinish:",
name: NSMetadataQueryDidFinishGatheringNotification , object: searchQuery)
```

Finally, to start the query, call the startQuery method of the `NSMetadataQuery` instance:

```c
searchQuery.startQuery()
```

When you receive the notification message, you can find out the number of results returned by the search by querying the resultCount property of the `NSMetadataQuery` instance:

```c
let numResults = searchQuery.resultCount
```

To retrieve an NSURL instance for each result returned by the search query, you can use a simple for loop:

```c
for (var resultIndex = 0; resultIndex < numResults; resultIndex++) {
	let item:NSMetadataItem? = searchQuery.results[resultIndex] as? NSMetadataItem
	if let unwrappedItem = item {
		let url = unwrappedItem.valueForAttribute(NSMetadataItemURLKey)
	}
}
```

If you do not want the search query to continue returning results, use the following code snippet to stop it:

```c
searchQuery.disableUpdates()
searchQuery.stopQuery()
```
