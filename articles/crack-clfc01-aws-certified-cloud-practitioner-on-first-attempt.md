---
id: 416
title: Notes to Crack CLF-C01 AWS Certified Cloud Practitioner Exam on First Attempt
slug: crack-clfc01-aws-certified-cloud-practitioner-on-first-attempt
excerpt: Here are the notes that helped me to crack CLF-C01 AWS Certified Cloud Practitioner test in the first attempt.
difficulty: beginner
publishedDate: "2023-09-15T06:26:50.000Z"
updatedDate: "2025-09-16T23:05:40.222Z"
videoLink: null
githubLink: null
featured: false
thumbnail: /media/articles/crack-clfc01-aws-certified-cloud-practitioner-in-first-attempt.jpeg
topics: 
  - spring
course: null
displayOrder: 0
seo: 
  metaTitle: null
  metaDescription: null
  metaKeywords: null
---

Cloud computing technology allows companies to access and utilize computing resources and services over the internet, often referred to as “the cloud”.

Instead of owning and managing physical servers and data centres, cloud computing allows users to rent or lease computing resources, such as virtual machines, storage, databases, and more, from cloud service providers.

This model offers several benefits, including scalability, flexibility, cost-efficiency, and the ability to access resources from anywhere with an internet connection.

Some of the major cloud providers in the industry are:

1.  Amazon Web Services (AWS)  
    
2.  Microsoft Azure
3.  Google Cloud Platform (GCP)

This post is about the quick guide to CLF-C01 AWS Certified Cloud Practitioner Practice exam notes, hence we will cover the introduction to all the services provided by AWS.

AWS, a subsidiary of Amazon.com, is the largest and most widely adopted cloud provider. It offers a comprehensive suite of cloud computing services, including computing power, storage, databases, machine learning, analytics, and more.

## Advantages of Cloud Computing

-   **Variable vs. capital expenses:** AWS offers you the pay-as-you-go pricing model hence as a business there are no capital expenses to get started your business on the cloud.
-   **Economics of scale:** When the business expands, companies need to invest a huge amount of money to scale the on-premise setup. However, in the cloud, you can leverage economies of scale and benefit from having the shared Infrastructure, lower hardware costs, and efficient resource utilization which results in cost-effectiveness in scaling your application.
-   **Stop guessing capacity:** Cloud providers offer auto scaling, so you do not need to plan in advance and guess the resource/compute requirements for your business.
-   **Increase speed and Agility:** As the cloud requires less investment in the initial setup and other aspects such as maintenance, patching, security and compliance is taken care of by the cloud providers, business need to focus only on the business differentiators and application development without worrying about infrastructure.
-   **Go global in minutes:** Cloud providers have data centres in multiple geographic regions, allowing users to deploy applications and services closer to their target audience for reduced latency.
-   **Deployment Flexibility:** AWS offers different deployment models including all in-cloud and hybrid deployment.

## AWS Infrastructure

-   AWS provides a highly available technology infrastructure platform with multiple locations worldwide. These locations are composed of regions and Availability Zones.
-   Each region is a separate geographic area. Each region has multiple, isolated locations known as Availability Zones.
-   AWS enables the placement of resources and data in multiple locations. Resources aren’t replicated across regions unless organizations choose to do so.
-   Each region is completely independent and is designed to be completely isolated from the other regions. This achieves the greatest possible fault tolerance and stability.
-   Each Availability Zone is also isolated, but the Availability Zones in a region are connected through low-latency links.

**Accessing the Platform**

-   AWS Management Console
-   AWS Command Line Interface (CLI)
-   AWS Software Development Kits (SDKs)

## Compute and Networking Services

AWS offers a wide range of compute and networking services to support various computing workloads and networking requirements.  

### Amazon Elastic Compute Cloud (Amazon EC2)

-   Amazon EC2 is a web service that provides resizable **computing capacity** in the cloud. It allows organizations to obtain and configure virtual servers in Amazon’s data centres and to harness those resources to build and host software systems.
-   It allows selecting from a variety of operating systems and resource configurations (memory, CPU, storage, and so on) that are optimal for the application profile of each workload.
-   Amazon EC2 presents a true virtual computing environment, allowing organizations to launch compute resources with a variety of operating systems, load them with custom applications, and manage network access permissions while maintaining complete control.

### AWS Lambda

-   AWS Lambda is a zero-administration computing platform that runs your code for you on the AWS Cloud.
-   AWS Lambda runs your back-end code on its own AWS compute fleet of Amazon EC2 instances across multiple Availability Zones in a region, which provides the high availability, security, performance, and scalability of the AWS infrastructure.

### Auto Scaling

Auto Scaling is well suited both to applications that have stable demand patterns and to applications that experience hourly, daily, or weekly variability in usage.

### Elastic Load Balancing

Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances in the cloud.

It enables organizations to achieve greater levels of fault tolerance in their applications, seamlessly providing the required amount of load-balancing capacity needed to distribute application traffic.

### AWS Elastic Beanstalk

AWS Elastic Beanstalk is the fastest and simplest way to get a web application up and running on AWS. Developers can simply upload their application code, and the service automatically handles all the details, such as resource provisioning, load balancing, Auto Scaling, and monitoring.

It provides support for a variety of platforms, including PHP, Java, Python, Ruby, Node.js, .NET, and Go. With AWS Elastic Beanstalk, organizations retain full control over the AWS resources powering the application and can access the underlying resources at any time.

### Amazon Virtual Private Cloud (Amazon VPC)

Amazon Virtual Private Cloud (Amazon VPC) lets organizations provision a logically isolated section of the AWS Cloud where they can launch AWS resources in a virtual network that they define.

Organizations have complete control over the virtual environment, including selection of the IP address range, creation of subnets, and configuration of route tables and network gateways. In addition, organizations can extend their corporate data centre networks to AWS by using hardware or software virtual private network (VPN) connections or dedicated circuits by using AWS Direct Connect.

### AWS Direct Connect

AWS Direct Connect allows organizations to establish a dedicated network connection from their data centre to AWS. Using AWS Direct Connect, organizations can establish private connectivity between AWS and their data centre, office, or colocation environment, which in many cases can reduce network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based VPN connections.

### Amazon Route 53

Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. It provides a reliable and cost-effective way to route end users to Internet applications by translating human readable names, such as www.example.com, into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other.

Amazon Route 53 also serves as a domain registrar, allowing you to purchase and manage domains directly from AWS.

## Storage and Content Delivery

AWS provides a variety of services to meet your storage needs, such as Amazon Simple Storage Service, Amazon CloudFront, and Amazon Elastic Block Store.

### Amazon Simple Storage Service (Amazon S3)

-   Amazon Simple Storage Service (Amazon S3) provides developers and IT teams with highly durable and scalable object storage that **handles virtually unlimited amounts** of data and large numbers of concurrent users.
-   Can be used to store any number of objects of any type, such as HTML pages, source code files, image files, and encrypted data, and access them using HTTP-based protocols.
-   Amazon S3 provides cost-effective object storage for a wide variety of use cases, including backup and recovery, nearline archives, big data analytics, disaster recovery, cloud applications, and content distribution.

### Amazon Glacier

-   Amazon Glacier is a secure, durable, and extremely low-cost storage service for data archiving and long-term backup.
-   To keep costs low for customers, Amazon Glacier is optimized for infrequently accessed data where a retrieval time of several hours is suitable.
-   Amazon S3 integrates closely with Amazon Glacier to allow organisations to choose the right storage tier for their workloads.

### Amazon Elastic Block Store (Amazon EBS)

-   Amazon Elastic Block Store (Amazon EBS) provides persistent block-level storage volumes for use with Amazon EC2 instances.
-   Each Amazon EBS volume is automatically replicated within its Availability Zone to protect organizations from component failure, offering high availability and durability.
-   By delivering consistent and low-latency performance, Amazon EBS provides the disk storage needed to run a wide variety of workloads.

### AWS Storage Gateway

-   AWS Storage Gateway is a service connecting an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization’s on-premises IT environment and the AWS storage infrastructure.
-   The service supports industry-standard storage protocols that work with existing applications.
-   It provides low-latency performance by maintaining a cache of frequently accessed data on-premises while securely storing all of your data encrypted in Amazon S3 or Amazon Glacier.

### Amazon CloudFront

-   Amazon CloudFront is a content delivery web service.
-   It integrates with other AWS Cloud services to give developers and businesses an easy way to distribute content to users across the world with low latency, high data transfer speeds, and no minimum usage commitments.
-   Amazon CloudFront can be used to deliver your entire website, including dynamic, static, streaming, and interactive content, using a global network of edge locations. Requests for content are automatically routed to the nearest edge location, so content is delivered with the best possible performance to end users around the globe.

## Database Services

AWS provides a comprehensive set of database services to meet a wide range of application requirements, from simple web applications to complex, enterprise-level systems.  
  
These AWS database services are designed to be scalable, highly available, and fully managed, allowing you to focus on building and running your applications while AWS takes care of the database infrastructure.  
  
Here are some of the key AWS database services:  

### Amazon Relational Database Service (Amazon RDS)

-   A fully managed relational database with support for many popular open-source and commercial database engines.
-   It’s a cost-efficient service that allows organizations to launch secure, highly available, fault-tolerant, production-ready databases in minutes.
-   Because Amazon RDS manages time-consuming administration tasks, including backups, software patching, monitoring, scaling, and replication, organizational resources can focus on revenue-generating applications and business instead of mundane operational tasks.

### Amazon DynamoDB

-   Amazon DynamoDB is a fast and flexible **NoSQL databas**e service for all applications that need consistent, single-digit millisecond latency at any scale.
-   It is a fully managed database and supports both document and key/value data models.
-   Its flexible data model and reliable performance make it a great fit for mobile, web, gaming, ad-tech, Internet of Things, and many other applications.

### Amazon Redshift

-   Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to analyze structured data.
-   Amazon Redshift provides a standard SQL interface that lets organizations use existing business intelligence tools.
-   By leveraging columnar storage technology that improves I/O efficiency and parallelizing queries across multiple nodes, Amazon Redshift is able to deliver fast query performance.
-   The Amazon Redshift architecture allows organizations to automate most of the common administrative tasks associated with provisioning, configuring, and monitoring a cloud data warehouse.

### Amazon ElastiCache

-   Amazon ElastiCache is a web service that simplifies the deployment, operation, and scaling of **an in-memory cach**e in the cloud.
-   The service improves the performance of web applications by allowing organizations to retrieve information from fast, managed, in-memory caches, instead of relying entirely on slower, disk-based databases.
-   Amazon ElastiCache supports Memcached and Redis cache engines.

## Cloud Management Tools

AWS offers a variety of cloud management tools and services that help organizations efficiently manage their AWS resources, monitor performance, automate tasks, and ensure security and compliance.

Here are some key AWS cloud management tools and services:  

### AWS Management Console:

The AWS Management Console is a web-based interface that allows users to interact with and manage their AWS resources through a graphical user interface (GUI). It provides a user-friendly way to access and control AWS services.  

### AWS Command Line Interface (CLI):

The AWS CLI is a command-line tool that allows users to interact with AWS services through text commands. It provides a powerful and scriptable way to manage AWS resources and automate tasks.  

### AWS Organizations:

AWS Organizations is a service for managing multiple AWS accounts within an organization. It enables central management of billing, access control, and resource sharing across accounts.  

### AWS Systems Manager:

AWS Systems Manager provides a unified interface for managing AWS resources and applications. It offers features for inventory management, patch management, automation, and more.

### Amazon CloudWatch

-   Amazon CloudWatch is a **monitoring service** for AWS Cloud resources and the applications running on AWS.
-   It allows organizations to **collect and track metrics, collect and monitor log files, and set alarms**.
-   By leveraging Amazon CloudWatch, organizations can gain system-wide visibility into resource utilization, application performance, and operational health.

### AWS CloudFormation

-   AWS CloudFormation gives developers and systems administrators an effective way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.
-   AWS CloudFormation defines a JSON-based templating language that can be used to describe all the AWS resources that are necessary for a workload.
-   Templates can be submitted to AWS CloudFormation and the service will take care of provisioning and configuring those resources in appropriate order.

![](/media/summernote/aws-cloud-formation.png)

### AWS CloudTrail

-   AWS CloudTrail is a web service that records AWS API calls for an account and delivers log files for audit and review.
-   The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the service.

### AWS Config

-   AWS Config is a fully managed service that provides organizations with an AWS resource inventory, configuration history, and configuration change notifications to enable security and governance.
-   With AWS Config, organizations can discover existing AWS resources, export an inventory of their AWS resources with all configuration details, and determine how a resource was configured at any point in time.
-   These capabilities enable compliance auditing, security analysis, resource change tracking, and troubleshooting.

### AWS Service Catalog:

AWS Service Catalog allows organizations to create and manage catalogs of approved AWS resources and services for use within their organization. It helps enforce compliance and governance.  

## Security and Identity Management

AWS offers a robust set of security and identity management services to help users and organizations protect their AWS resources and data. These services are designed to enforce access control, enhance security, and ensure compliance with industry standards and regulations.  

### AWS Identity and Access Management (IAM)

-   AWS Identity and Access Management (IAM) enables organizations to securely control access to AWS Cloud services and resources for their users.
-   Using IAM, organizations can create and manage AWS users and groups and use permissions to allow and deny their access to AWS resources.

### AWS Key Management Service (KMS)

-   AWS Key Management Service (KMS) is a managed service that makes it easy for organizations to create and control the encryption keys used to encrypt their data and uses
-   Hardware Security Modules (HSMs) to protect the security of your keys. AWS KMS is integrated with several other AWS Cloud services to help protect data stored with these services.

### AWS Directory Service

-   AWS Directory Service allows organizations to set up and run Microsoft Active Directory on the AWS Cloud or connect their AWS resources with an existing on-premises Microsoft Active Directory.
-   Organizations can use it to manage users and groups, provide single sign-on to applications and services, create and apply Group Policies, domain join Amazon EC2 instances, and simplify the deployment and management of cloud-based Linux and Microsoft Windows workloads.

### AWS Certificate Manager

-   AWS Certificate Manager is a service that lets organizations easily provision, manage, and deploy Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS Cloud services. It removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certificates.
-   With AWS Certificate Manager, organizations can quickly request a certificate, deploy it on AWS resources such as Elastic Load Balancing or Amazon CloudFront distributions, and let AWS Certificate Manager handle certificate renewals.

### AWS Web Application Firewall (WAF)

-   AWS Web Application Firewall (WAF) helps protect web applications from common attacks and exploits that could affect application availability, compromise security, or consume excessive resources.
-   AWS WAF gives organizations control over which traffic to allow or block to their web applications by defining customizable web security rules.

## Application Services

AWS offers a variety of application services that enable developers to build, deploy, and scale applications quickly and easily.  

### Amazon API Gateway

-   Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
-   Organizations can create an API that acts as a “front door” for applications to access data, business logic, or functionality from back-end services, such as workloads running on Amazon EC2, code running on AWS Lambda, or any web application.
-   Amazon API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.

### Amazon Elastic Transcoder

-   Amazon Elastic Transcoder is media transcoding in the cloud.
-   It is designed to be a highly scalable and cost-effective way for developers and businesses to convert (or transcode) media files from their source formats into versions that will play back on devices like smartphones, tablets, and PCs.

### Amazon Simple Notification Service (Amazon SNS)

-   Amazon Simple Notification Service (Amazon SNS) is a web service that coordinates and manages the delivery or sending of messages to recipients.
-   In Amazon SNS, there are two types of clients—**publishers and subscribers—also referred to as producers and consumers**. Publishers communicate **asynchronously** with subscribers by producing and sending a message to a topic, which is a logical access point and communication channel.
-   Subscribers consume or receive the message or notification over one of the supported protocols when they are subscribed to the topic.

### Amazon Simple Email Service (Amazon SES)

-   Amazon Simple Email Service (Amazon SES) is a cost-effective email service that organizations can use to send transactional emails, marketing messages, or any other type of content to their customers.
-   Amazon SES can also be used to receive messages and deliver them to an Amazon S3 bucket, call custom code via an AWS Lambda function, or publish notifications to Amazon SNS.

### Amazon Simple Workflow Service (Amazon SWF)

-   Amazon Simple Workflow Service (Amazon SWF) helps developers build, run, and scale background jobs that have parallel or sequential steps.
-   Amazon SWF can be thought of as a fully managed state tracker and task coordinator on the cloud.
-   In common architectural patterns, if your application’s steps take more than 500 milliseconds to complete, it is vitally important to track the state of processing and to provide the ability to recover or retry if a task fails. Amazon SWF helps organizations achieve this reliability.

### Amazon Simple Queue Service (Amazon SQS)

-   Amazon Simple Queue Service (Amazon SQS) is a fast, reliable, scalable, fully managed **message queuing service.**
-   Amazon SQS makes it simple and cost-effective to decouple the components of a cloud application.
-   With Amazon SQS, organizations can transmit any volume of data, at any level of throughput, without losing messages or requiring other services to be always available.

## Cloud Object Storage - Amazon S3

Common use cases for Amazon S3 storage include:

-   Backup and archive for on-premises or cloud data
-   Content, media, and software storage and distribution Big data analytics
-   Static website hosting
-   Cloud-native mobile and Internet application hosting
-   Disaster recovery

S3 offers 3 storage classes

-   Standard
-   Infrequent Access
-   archive

Can use lifecycle policy to automatically migrate the data to the appropriate storage class.

Glacier is used for archived data storage or for storing cold data.

### s3 Bucket

A _bucket_ is a container (web folder) for objects (files) stored in Amazon S3. Every Amazon S3 the object is contained in a bucket.

Your bucket names must be unique across all AWS accounts, much like Domain Name System (DNS) domain names, not just within your own account.

Bucket names can contain up to 63 lowercase letters, numbers, hyphens, and periods.

You can create and use multiple buckets; you can have up to 100 per account by default.

Even though the namespace for Amazon S3 buckets is global, each Amazon S3 bucket is created in a specific region that you choose.

### Objects

_Objects_ are the entities or files stored in Amazon S3 buckets. An object can store virtually any kind of data in any format. Objects can range in size from 0 bytes up to 5TB, and a single bucket can store an unlimited number of objects. This means that Amazon S3 can store a virtually unlimited amount of data.

### Durability and Availability

Amazon S3 standard storage is designed for 99.999999999% durability and 99.99% availability of objects over a given year. Amazon S3 achieves high durability by automatically storing data redundantly on multiple devices in multiple facilities within a region.

If you need to store non-critical or easily reproducible derived data (such as image thumbnails) that doesn’t require this high level of durability, you can choose to use Reduced Redundancy Storage (RRS) at a lower cost. RRS offers 99.99% durability with a lower cost of storage than traditional Amazon S3 storage.
