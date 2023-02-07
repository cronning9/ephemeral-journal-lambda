const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

module.exports = async (requestBody) => {
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
			size: text.length,
			content: text
		};
	} catch (err) {
		console.error(err);
		const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
		console.error(message);
		throw new Error(message);
	}
};
