class ResponseBody {
	headers = {
		'Content-Type': 'application/json'
	};

	constructor(body, headers={}, statusCode=200) {
		this.body = body;
		this.headers = { ...this.headers, ...headers };
		this.statusCode = statusCode;
	}
}

module.exports = {
	ResponseBody,
};