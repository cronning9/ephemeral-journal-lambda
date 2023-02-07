const { readFile } = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

async function dispatchEvent(event) {
	const requestType = event.body.requestType;
	console.log(requestType)
	const func = eventTypes[requestType];
	const res = func ? await func(event.body) : { statusCode: 400 };
	return res;
}

module.exports = {
	dispatchEvent,
	eventTypes,
}