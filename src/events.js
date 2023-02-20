const { readFile } = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

async function dispatchEvent(event) {
	const requestType = event.body.requestType;
	console.log('request type: ' + requestType);
	console.log('bucketName: ' + event.body.bucketName)
	console.log('objectKey: ' + event.body.objectKey)

	const func = eventTypes[requestType];
	const res = func ? await func(event.body) : { 
		statusCode: 400,
		body: {
			requestBody: event.body
		}
	};
	return res;
}

module.exports = {
	dispatchEvent,
	eventTypes,
}