---
id: 5
title: "CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Set2"
slug: "aws-certified-cloud-practitioner-clf-c01-practice-question-set-2"
excerpt: "CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Test your skills with our interactive quiz app."
difficulty: beginner
duration: 15
thumbnail: "media/uploads/articles/AWS_Certified_Cloud_Practitioner_Practice_Exam_XlzUoOZ_DC6Lhw6.jpeg"
topics: [aws]
description: |
  Description
  
  AWS Certification helps learners build credibility and confidence by validating their cloud expertise with an industry recognized credential and organisations identify skilled professionals to lead cloud initiatives using AWS.
  
  These AWS Certified Cloud Practitioner CLF-C01 practice tests are patterned after the latest exam format and were curated based on real test papers. Our AWS Cloud Practitioner certification practice tests are TOP-NOTCH and the CLOSEST to the actual exam.
  
  Each question has detailed explanations at the end of each set that will help you gain a deeper understanding of the AWS services. The explanation provides an overview of the topic, reference links to AWS documentation, and a rationale on why the option is correct or incorrect
  
  Instructions
  
  	
  	Each test contains 10 questions and has a time limit of 10 minutes
  	
  	
  	Each question carries 1 mark, no negative marks.
  	
  	
  	Click the 'Submit Test' button given at the bottom of this page to Submit your answers.
  	
  	
  	The test will be submitted automatically if the time expired
  	
  	
  	Do not refresh the page while taking the test.
  	
  	
  	Please note, this test is not official, it's just a nice way to see how ready you're with your AWS Certification.
---
# CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Set2

**Difficulty:** beginner  
**Duration:** 15 minutes  
**Questions:** 15

## Description

CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Test your skills with our interactive quiz app.

---

## Questions

### Question 1
**What best describes the difference between the TCO Calculator and the Cost Explorer?**

- [ ] The Cost Explorer is a price list for each AWS service; the TCO Calculator helps you calculate hourly EC2 Usage cost.
- [ ] The TCO Calculator help you analyze current AWS usage charges; the Cost Explorer helps you estimate the cost savings of using AWS.
- [x] The TCO Calculator helps you estimate the cost savings of using AWS; the Cost Explorer help you analyze current AWS usage charges.
- [ ] The Cost Explorer helps you calculate hourly EC2 Usage cost; the TCO Calculator is a price list for each AWS service.

**Explanation:** 
The TCO calculator is a free tool provided by AWS that allows you to estimate the cost savings of using AWS vs. using an on-premises data center. The Cost Explorer is a free tool that allows you to view charges of your cost (helps you analyze where you are spending money).

---

### Question 2
**When you create an S3 bucket, what rules must be followed regarding the bucket name?**

- [ ] Bucket names can be formatted as IP addresses
- [x] Bucket names must be unique across all of AWS.
- [ ] Bucket names must contain at least one uppercase letter
- [x] Bucket names must be between 3-63 characters in length.

**Explanation:** Although certain regions do allow for uppercase letters in the bucket name, uppercase letters are NOT required. Also, a bucket name cannot be formatted as an IP address.

---

### Question 3
**You have just set up a brand new AWS account. You want to keep monthly billing under $100, but you are worried about going over that limit. What can you set up in order to be notified when the
monthly bill approaches $100?**

- [ ] A SNS billing alarm that triggers a CloudWatch notification to your email address.
- [ ] A CloudTrail billing alarm that triggers an SNS notification to your email address.
- [ ] A CloudWatch billing alarm that triggers a CloudTrail notification to your email address
- [x] A CloudWatch billing alarm that triggers an SNS notification to your email address.

**Explanation:** In CloudWatch, you can set up a billing alarm that will trigger when your monthly bill hit the set threshold. That alarm can then be set up to trigger an SNS topic that will send you a notification that the alarm threshold as been met.

---

### Question 4
**What best describes the purpose of having many Availability Zones in each AWS region?**

- [ ] None of the above
- [ ] Multiple Availability Zones allow for fault tolerance but not high availability.
- [ ] Multiple Availability Zones allow for cheaper prices due to competition between them.
- [x] Multiple Availability Zones allow for duplicate and redundant compute, and data backups.

**Explanation:** Availability Zones work together within a region to provide users with the ability to easily setup and configure redundant architecture and backup solutions

---

### Question 5
**What TWO services/features are required to have highly available and fault tolerant architecture in AWS?**

- [ ] CloudFront
- [x] Elastic Load Balancer
- [ ] ElastiCache
- [x] Auto Scaling

---

### Question 6
**Big Cloud Jumbo Corp is beginning to explore migrating their entire on-premises data center to AWS. They are very concerned about how much it will cost once their entire I.T. infrastructure is running on AWS. What tool can you recommend so that they can estimate what the cost of using AWS may be?**

- [ ] AWS Cost Explorer
- [ ] AWS Migration Cost Calculator
- [x] AWS TCO Calculator
- [ ] AWS Estimate Calculator

**Explanation:** The AWS TCO (Total Cost of Ownership) Calculator is a free tool provided by AWS. It allows you to compare your current on-premises cost vs. estimated AWS cost.


---

### Question 7
**If you have a set of frequently accessed files that are used on a daily basis, what S3 storage class should you store them in?**

- [ ] Infrequent Access
- [x] Standard
- [ ] Fast Access
- [ ] Reduced Redundancy

**Explanation:** The Standard storage class should be used for files that you access on a daily or very frequent basis.

---

### Question 8
**What acts as an address (like a mailing address) for a web server located on a network?**

- [ ] DNS Server
- [x] IP Address
- [ ] None of the above
- [ ] Common language domain name

**Explanation:** An IP address is a severs address on a network. It is how traffic/request get routed to it (much like a piece of mail gets routed to your home).

---

### Question 9
**What AWS service uses Edge Locations for content caching?**

- [x] CloudFront
- [ ] ElastiCache
- [ ] Route 53
- [ ] CloudCache

**Explanation:** CloudFront is a content caching service provided by AWS that utilizes "Edge Locations," which are AWS data centers located all around the world.

---

### Question 10
**What is the purpose of AWS's Route 53 service? Select all that apply**

- [x] Domain Registration
- [x] Domain Name System (DNS) service
- [ ] Database Management
- [ ] Content Caching

**Explanation:** Route 53 is AWS's domain and DNS management service. You can use it to register new domain names, as well as manage DNS record sets.

---

### Question 11
**If you are using an on-demand EC2 instance, how are you being charged for it?**

- [ ] You are charged per second, based on an hourly rate, and there is a termination fee.
- [x] You are charged per second, based on an hourly rate, and there are no termination fees.
- [ ] You must commit to a one or three year term and pay upfront.
- [ ] You are charged by the hour and must pay a partial upfront fee.

**Explanation:** On-demand EC2 instances are exactly that, on-demand. There are no upfront or termination fees, and you are charged for each second of usage (based on an hourly rate).

---

### Question 12
**What are the four primary benefits of using the cloud/AWS?**

- [ ] Elasticity, scalability, easy access, limited storage.
- [x] Fault tolerance, scalability, elasticity, and high availability.
- [ ] Fault tolerance, scalability, sometimes available, unlimited storage
- [ ] Unlimited storage, limited compute capacity, fault tolerance, and high availability.

**Explanation:** Fault tolerance, scalability, elasticity, and high availability are the four primary benefits of AWS/the cloud.

---

### Question 13
**What is the purpose of a DNS server?**

- [x] To convert common language domain names to IP addresses.
- [ ] To serve web application content.
- [ ] To act as an internet search engine
- [ ] To convert IP addresses to common language domain names.

**Explanation:** Domain name system servers act as a "third party" that provides the service of converting common language domain names to IP addresses (which are required for a web browser to properly make a request for web content).

---

### Question 14
**
What is a main benefit of consolidated billing?**

- [x] Gain a volume discount for usage across all your AWS accounts.
- [ ] Access to a higher support plan level.
- [ ] None of the abov
- [ ] Faster response from AWS technical support.

**Explanation:** Consolidated billing allows you to view, manage, and pay bills for multiple AWS accounts in one user interface. Volume discounts can be earned by combining the usage from all accounts your own.


---

### Question 15
**What categories full under those analyzed by the AWS Trusted Advisor program?**

- [x] Cost optimization
- [x] Fault tolerance
- [ ] None of the above
- [ ] Scalability

**Explanation:** The AWS Trusted Advisor program will analyze your account with check in the following categories: Cost Optimization Performance Security Fault Tolerance

---