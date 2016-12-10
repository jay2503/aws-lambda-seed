'use strict'
module.exports = function (grunt) {
	grunt.initConfig({
		lambda_invoke: {
			lambdaTest: {
				options: {
					file_name: "lambdaTest/lambdaTest.js",
					event: "lambdaTest/event.json",
				}
			}
		},
		lambda_package: {
			lambdaTest: {
				options: {
					package_folder: 'lambdaTest/'
				}
			}
		},
		lambda_deploy: {
			lambdaTest: {
				arn: 'arn:aws:lambda:eu-central-1:XXXXXXXX:function:lambdaTest',
				options: {
					credentialsJSON: 'awsCredentials.json',
					region: "eu-central-1"
				},
			}
		},
	});

	grunt.loadNpmTasks('grunt-aws-lambda');
	
	
	grunt.registerTask('ls-deploy', ['lambda_package:lambdaTest', 'lambda_deploy:lambdaTest']);
};