# Deploying an Express Server to EC2 Instances with ALB and Route 53

## Overview

In this lab, you will learn how to deploy an Express server to an Amazon EC2 instance, leverage Amazon Elastic Load Balancing (ELB) by creating an Application Load Balancer (ALB) that balances the load between multiple EC2 instances, and configure Amazon Route 53 to associate at least two Application Load Balancers (ALBs) with a custom domain name.

Upon completing this lab, you will have acquired practical knowledge in deploying and managing critical AWS services such as EC2, ALB, and Route 53. By leveraging these services, you'll ensure high availability and fault protection for your applications, bolstering their resilience against potential disruptions and enhancing their overall reliability.

## Prerequisites

- Set up an AWS Free Tier account to access AWS services at no cost within usage limits.
- Implement recommended IAM (Identity and Access Management) best practices to ensure secure management of user access and permissions.
- Review AWS Cost Management best practices to optimize resource utilization and monitor expenses effectively. For more information, refer to [AWS Cost Management](https://aws.amazon.com/cost-management/).
- *NOTE:* This lab requires the purchase of a custom domain name. If this poses a financial challenge, please contact your instructor to explore alternative options.

## Scope

The lab will develop the following skills:

- Deploying and managing EC2 instances
- Leveraging Amazon Elastic Load Balancing (ELB) by creating an ALB to ensure high availability
- Configuring Route 53 to associate multiple ALBs with a single domain name further bolstering high availability and fault protection.

## Lab Requirements

Complete the following features:

### Feature 1: Deploying an Express Server to EC2 Instances

- Set up an Amazon EC2 instance with the necessary security group(s), key pair if using SSH, and IAM role.
- Deploy your Express Server
- Under the `Advanced details` dropdown, in the `User data` field add a shell script  to automate the install and start tasks necessary for your express server deployment.
- Your deployed server should retrieve data from two APIs and make this data available through one or more routes.  See lab starter code for useable example. add your own API Gateway implementation

### Feature 2: Deploying EC2 Instances and Creating an ALB

- Launch at least two EC2 instances in the same region.
- Create a new ALB in that region.
- Register the EC2 instances with the ALB target group.

### Feature 3: Configuring Route 53 for Multi-Region ALBs

- Set up two ALBs in different regions.
- Create a hosted zone in Route 53 for your domain name.
- Configure alias records in Route 53 to point to the ALBs in each region.

### Stretch Goal: (Optional) - Setting Up API Gateway, Lambda, and RDS

- Set up an Amazon RDS database using a sql option of your choice with at least one endpoint of your choosing.
- Populate your RDS database with sample data.
- Leverage API Gateway as your serverless API.
- At a minimum, configure one AWS Lambda function to handle a GET request to your RDS database; adhere to the principle of least privilege while configuring a role for this Lambda.
- Attach a Lambda layer to your Lambda function to install any non AWS dependencies.

### Stretch Goal: (Optional) - Consider how you might leverage AWS CloudFormation

- Context: The hands on experience with EC2, ALB, and Route53 has been a valuable learning experience, but consider the agility of infrastructure as code by using AWS CloudFormation to approach most of these tasks
- to complete this stretch goal, write a 2 or 3 paragraph summary of how you might use AWS CloudFormation in the future and the benefit of doing so.

## Resources

- [Amazon EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [Amazon ALB Documentation](https://docs.aws.amazon.com/elasticloadbalancing/)
- [Amazon Route 53 Documentation](https://docs.aws.amazon.com/Route53/)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Amazon RDS Documentation](https://docs.aws.amazon.com/rds/)
