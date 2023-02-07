const readFile = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

module.exports.eventTypes = eventTypes;

module.exports.dispatchEvent = async (event) => {
	const requestType = event.body.requestType;
	const func = eventTypes[requestType];
	const res = func ? await func(event.body) : { statusCode: 400}
	return res;
};