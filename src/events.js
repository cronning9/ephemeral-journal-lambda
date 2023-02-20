const { readFile } = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

async function dispatchEvent(event) {
	// this handles a weird discrepancy between API Gateway requests and local invocations.
	// API gateway requests come in as strings that must be parsed, whereas local invocations 
	// using api-event.json comes in as a pre-parsed object
	const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
	const requestType = body.requestType;

	const func = eventTypes[requestType];
	const res = func ? await func(body) : { 
		statusCode: 400,
		body: {
			requestBody: body
		}
	};
	return res;
}

module.exports = {
	dispatchEvent,
	eventTypes,
}