const readFile = require('./readFile');

const eventTypes = {
	'readFile': readFile
};

module.exports.eventTypes = eventTypes;

module.exports.dispatchEvent = (event) => {
	const requestType = event.body.requestType;
	const func = eventTypes[requestType];
	return func ? func(event.body) : '404 Not Found'
};