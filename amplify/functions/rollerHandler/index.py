import json


def handler(event, context):
    return {
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
        },
        "statusCode": 200,
        "body": json.dumps({
            "message": "Hello World",
        }),
    }
