---
id: 27
title: Dynamic UIButton on UIScrollView Swift 3.0
slug: how-to-create-dynamic-uibutton-on-uiscrollview-swift-3-0
excerpt: The following code snippet shows how to create dynamic UIbutton in UIScrollView using Swift 3.0. Before we begin,…
difficulty: beginners
publishedDate: "2017-07-05T01:16:21.000Z"
updatedDate: "2025-09-16T23:05:21.190Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/26/thumbnail.png
topics: 
  - laravel
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

The following code snippet shows how to create dynamic UIbutton in UIScrollView using Swift 3.0.

Before we begin, let us create a new project by selecting Single View Application template and provide ProjectName, Team, Organization Name, Organization Identifier, Bundle Identifier details.

Open `Main.storyboard` file, drag and drop `UIScrollview` from the object library.  
Add the AutoLayout constraints for UIScrollView by selecting ScrollView and clicking on Add New Alignment Constraints pin and checking Horizontal in Container and Vertically in Container click on Add Constraints.

Create Outlet for the scroll view by opening Assistant **Editor(⌘ + ⌥ + return)** holding control drag and drop form Scrollview to the ViewController.Swift file above viewDidLoad method and name it as mScrollView.

Let us now open ViewController.swift and create a new function by name dynamicButtonCreation.

Initially let’s set isScrollEnabled , isUserInteractionEnabled properties to true and let’s set the number of buttons and number of rows which has to be displayed in our case we have 16 buttons which are displayed in 2 rows. Let’s divide numberOfButtons into 2 and equally spread the buttons in 2 rows as shown in below snippet. let’s create a button programmatically and set the frame, tag values, title and `addTarget(Button Action)` for each of the buttons as shown below.

```c
func dynamicButtonCreation() {
        
        mScrollView.isScrollEnabled = true
        mScrollView.isUserInteractionEnabled = true
        
        let numberOfButtons = 16
        let numberofRows = 2
        
        var count = 0
        var px = 0
        var py = 0
        
        for _ in 1...numberofRows {
            px = 0
            
            if count < numberOfButtons/2 {
                for j in 1...numberOfButtons/2 {
                    count += 1
                    
                    let Button = UIButton()
                    Button.tag = count
                    Button.frame = CGRect(x: px+10, y: py+10, width: 100, height: 45)
                    Button.backgroundColor = UIColor.black
                    Button.setTitle("Hello \(j) ", for: .normal)
                    Button.addTarget(self, action: #selector(scrollButtonAction), for: .touchUpInside)
                    mScrollView.addSubview(Button)
                    px = px + Int(mScrollView.frame.width)/2 - 30
                }
            }else{
                
                for j in numberOfButtons/2+1...numberOfButtons {
                    count += 1
                    
                    let Button = UIButton()
                    Button.tag = count
                    Button.frame = CGRect(x: px+10, y: py+10, width: 100, height: 45)
                    Button.backgroundColor = UIColor.black
                    Button.setTitle("Hello \(j) ", for: .normal)
                    Button.addTarget(self, action: #selector(scrollButtonAction), for: .touchUpInside)
                    mScrollView.addSubview(Button)
                    px = px + Int(mScrollView.frame.width)/2 - 30
                }
                
                
            }
            
            py =  Int(mScrollView.frame.height)-70
        }
        
        mScrollView.contentSize = CGSize(width: px, height: py)
        
    }

```

Let’s add the Action method for the buttons created above

  func scrollButtonAction(sender: UIButton) {
        print("Hello \\(sender.tag) is Selected")
    }
    

At last call `dynamicButtonCreation` inside `ViewDidLoad` as show below

    override func viewDidLoad() {
        super.viewDidLoad()
  
        //Calling dynamicButtonCreation
         self.dynamicButtonCreation()
    }

Cheers…! We are done, let’s Build and Run the application to see the dynamic buttons created on the UIScrollView. Find the source below.

\[download src=”https://github.com/satish25/DynamicButtons\_ScrollView”\]
