const { ResponseBody } = require('./src/ResponseBody');
const { dispatchEvent }= require('./src/events');


exports.readFile = async (event, context) => {
	// console.log('Received event:', JSON.stringify(event, null, 2));
	const res = await dispatchEvent(event);
	const response = new ResponseBody(res.body, {}, res.statusCode);
	return response.toObject();
};
