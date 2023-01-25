const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = async (event, context) => {
	// console.log('Received event:', JSON.stringify(event, null, 2));

	const bucket = event.Records[0].s3.bucket.name;
	const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
	const params = {
		Bucket: bucket,
		Key: key,
	};
	try {
		const res = await s3.getObject(params).promise();
		const body = res.Body.toString();
		console.log(body);
		// body.split('\n').forEach(str => console.log(str));
	} catch (err) {
		console.error(err);
		const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
		console.error(message);
		throw new Error(message);
	}
};
