class ResponseBody {
	headers = {
		'Content-Type': 'application/json'
	};

	constructor(body, headers={}, statusCode=200, isBase64Encoded=false) {
		this.body = body;
		this.headers = { ...this.headers, ...headers };
		this.statusCode = statusCode;
		this.isBase64Encoded = isBase64Encoded;
	}
}

module.exports = {
	ResponseBody,
};