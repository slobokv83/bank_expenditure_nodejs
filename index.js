const parser = require('./parser/parser');
const operations = require('./operations/operations');

async function main() {
	const token = await operations.authenticate();
	console.log('token:', token);
	await operations.configUpdate(token);
	const userId = await operations.createUser();
	console.log('userId:', userId);
	const jobId = await operations.createConn(userId);
	console.log('jobId:', jobId);
	let jobStatus = await operations.getJobStatus(jobId);
	while (jobStatus !== 'success') {
		jobStatus = await operations.getJobStatus(jobId);
		console.log('jobStatus: ', jobStatus);
	}
	const result = await operations.getTrans(userId);
	parser.parser(result);
}

main();
