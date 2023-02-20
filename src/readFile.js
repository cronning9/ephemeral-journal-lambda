const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

async function readFile(requestBody) {
	const bucket = requestBody.bucketName;
	const key = decodeURIComponent(requestBody.objectKey.replace(/\+/g, ' '));
	const params = {
		Bucket: bucket,
		Key: key,
	};
	try {
		const res = await s3.getObject(params).promise();
		const text = res.Body.toString();
		return {
			body: {
				size: text.length,
				content: text
			}
		};
	} catch (err) {
		console.error(err);
		const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
		console.error(message);
		return {
			statusCode: 500,
			body: {
				size: message.length,
				content: message,
				details: err,
			}
		}
	}
}

module.exports = {
	readFile,
};