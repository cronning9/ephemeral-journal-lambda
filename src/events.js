const readFile = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

module.exports.eventTypes = eventTypes;

module.exports.dispatchEvent = (event) => {
	const requestType = event.Records[0].requestType;
	const func = eventTypes[requestType];
	return func ? func(event) : '404 Not Found'
};