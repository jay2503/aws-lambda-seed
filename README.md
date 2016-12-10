# AWS Lambda Seed Project

## Overview
AWS Lambda Seed Project with Grunt automation.

For SO Solution,
http://stackoverflow.com/questions/30670957/creating-a-lambda-function-in-aws-from-zip-file#answer-41073847

## Setup

Install dependencies

```sh
npm install
```

Create AWS IAM User with custom policy and get `accessKeyId` and `secretAccessKey`.

Custom Policy should inlcude below list of permission.

* lambda:GetFunction
* lambda:UploadFunction
* lambda:UpdateFunctionCode
* lambda:UpdateFunctionConfiguration
* iam:PassRole

Copy `awsCredentials-sample.json` and create `awsCredentials.json` which is being used by `Gruntfile.js`

```sh
cp  awsCredentials-sample.json awsCredentials.json
```

Replace place holder values with actual values you got from AWS IAM.

## Invoke Lambda locally

```sh
grunt lambda-invoke:lambdaTest
```

## Package Lambda

Creates .zip file which you can deploy to AWS using console.

```sh
grunt lambda-package:lambdaTest
```

## Package Deploy

Creates .zip file and automatically deploy to AWS.

```sh
grunt lambda-deploy:lambdaTest
```