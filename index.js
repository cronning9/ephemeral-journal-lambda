require('dotenv').config();

const { ResponseBody } = require('./src/ResponseBody');
const { readFile } = require('./src/readFile');


exports.readFile = async (event) => {
	const fileRes = await readFile(event.pathParameters.entryId);
	const response = new ResponseBody(fileRes.body, {}, await fileRes.statusCode);
	return response.toObject();
};
