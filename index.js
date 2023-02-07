const { ResponseBody } = require('./src/ResponseBody');
const { dispatchEvent }= require('./src/events');


exports.handler = async (event, context) => {
	// console.log('Received event:', JSON.stringify(event, null, 2));
	const results = await dispatchEvent(event);
	// TODO: revisit ResponseBody signature. think about order, header vs statusCode.
	const response = new ResponseBody(results, {}, results.statusCode || null);
	return response;
};
