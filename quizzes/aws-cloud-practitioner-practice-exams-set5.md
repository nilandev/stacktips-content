---
id: 8
title: "CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Set5"
slug: "aws-cloud-practitioner-practice-exams-set5"
excerpt: "The test contains 30 questions and has a time limit of 30 minutes"
difficulty: beginner
duration: 15
thumbnail: "media/uploads/articles/AWS_Certified_Cloud_Practitioner_Practice_Exam_XlzUoOZ_m0sThUa.jpeg"
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
# CLF-C01 AWS Certified Cloud Practitioner Practice Exam - Set5

**Difficulty:** beginner  
**Duration:** 15 minutes  
**Questions:** 10

## Description

The test contains 30 questions and has a time limit of 30 minutes

---

## Questions

### Question 1
**What AWS service has built-in DDoS mitigation?**

- [ ] EC2
- [x] CloudFront
- [ ] CloudTrail
- [ ] CloudWatch

**Explanation:** With CloudFront, you cache content at Edge Locations, which shield your underlining application infrastructure from DDoS attacks.

---

### Question 2
**You have been tasked by your department head to upload a batch of files to an S3 bucket; however, when you select S3 on the AWS console, you see a notification stating that you do not have permission to access S3. What is the most probable cause of this error?**

- [ ] It takes 24 hours go get access to S3.
- [x] You do not have an S3 access policy attached to your IAM user.
- [ ] Your boss has not enabled proper bucket permission
- [ ] The S3 service is currently down for maintenance.

**Explanation:** If you get an error stating that you do not have proper permissions to access/use and AWS service, then most likely your IAM user does not have the proper permission policy attached.

---

### Question 3
**Under what circumstances would someone want to use ElastiCache?**

- [x] They need in-memory data store servic
- [ ] They need a NoSQL database option
- [ ] They need to use Edge Locations to cache content
- [x] The need improved improve the performance of their web application.

**Explanation:** ElastiCache is used as an in-memory data store or cache in the cloud. Benefits include improved performance for web applications (that rely on information stored in a database). Edge Locations are used for caching content with the CloudFront service, so that is not a answer here.

---

### Question 4
**Karen is building a website that is expected to have a minimum of 1000 users continually over the course of 24 hours. For 8 hours each day, traffic is expected to be at about 1800 users. What EC2 buying options should she use to handle all the traffic and be most cost-effective?**

- [ ] Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on spot instances for the 8 hour period of increased traffic each day.
- [ ] Karen should rely solely on spot instances since that will be the cheapest option.
- [ ] Karen should buy enough reserved instance capacity to handle all 1800 users and probably buy a little more capacity just in case it is needed.
- [x] Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on on-demand instances for the 8 hour period of increased traffic each day.

**Explanation:** Reserved instances should used use to handle the expected baseline traffic to the website. Reserved instances (in 1/3 year term) can be purchased as a significant discount over on-demand instances. Any varying traffic above the baseline should be handled with on-demand instance (since they can be added/removed at any time, based on current demand). Spot instances should not be used in this scenario.

---

### Question 5
**Jacky is creating a website using AWS infrastructure. She has a great idea for a domain name but needs to see if it's available and, if so, register it. What AWS service will allow her to do this?**

- [ ] CloudFront
- [ ] DomainServices
- [ ] CloudWatch
- [x] Route 53

**Explanation:** Route 53 is AWS's domain and DNS management service. (DomainServices does not exist).

---

### Question 6
**Kunal is logged into his company's AWS account. He tries to access EC2 but is getting an error. What is the most likely reason why he cannot access EC2?**

- [ ] He is not part of an IAM Group.
- [ ] He does not have multi-factor authentication (MFA) enabled.
- [x] There is not an IAM access policy attached to his IAM user.
- [ ] There is not an IAM access policy attached to his IAM rol

**Explanation:** When an IAM user is created, that user has NO access to any AWS services. To gain access to an AWS server, an IAM user must have permission granted to them. This is done by attached an IAM access policy to their IAM user (or through an attached group). However, just being in a group does not
grant access. A proper policy would need to be attached to that group.

---

### Question 7
**Donna needs to provision a Linux server to run a web application on. What AWS service should she use to create the Linux server?**

- [ ] IAM
- [x] EC2
- [ ] VPC
- [ ] Lambda

**Explanation:** Elastic Cloud Compute (EC2) is AWS server-based compute service platform. You can use it to provision and use Linux- and Windows-based servers.

---

### Question 8
**Consolidated billing is managed through what AWS service?**

- [ ] AWS Billing Manager
- [x] AWS Organizations
- [ ] AWS Consolidated Management
- [ ] AWS TCO

**Explanation:** AWS Organizations is where you can manage multiple AWS accounts in one place (including it's billing features, such as consolidated billing).

---

### Question 9
**What MUST you do before you do any penetration testing on your account?**

- [ ] None of the above
- [x] Contact AWS and let them know first.
- [ ] Nothing, you are free to do penetration testing whenever you like.
- [ ] Penetration testing is now allowed.

**Explanation:** You must contact AWS before doing any penetration testing on your account. If you do not notify AWS first, they may shut down your account.

---

### Question 10
**Which of the following are AWS Support Plans?**

- [ ] Expert
- [x] Enterprise
- [x] Basic
- [x] Business

**Explanation:** AWS has four support plan levels: Basic Developer Business Enterprise

---