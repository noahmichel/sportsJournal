export type AmplifyDependentResourcesAttributes = {
    "api": {
        "sportsJournal": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "reactSportsJournalAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "sportsJournal": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3sportsjournalstoraged1w0q268rnrb6n": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "analytics": {
        "sportsjournal": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    },
    "function": {
        "sportsjournal8ee27c12": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}