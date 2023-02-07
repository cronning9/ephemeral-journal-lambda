const aws = require('aws-sdk');
const { ResponseBody } = require('./src/ResponseBody');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const dispatchEvent = require('./src/events').dispatchEvent;


exports.handler = async (event, context) => {
	// console.log('Received event:', JSON.stringify(event, null, 2));
	const results = await dispatchEvent(event);
	// TODO: revisit ResponseBody signature. think about order, header vs statusCode.
	const response = new ResponseBody(results, {}, results.statusCode || null);
	return response;
};
