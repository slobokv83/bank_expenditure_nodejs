const axios = require('axios');
const header = require('./define/header');
const body = require('./define/body');
const url = 'https://au-api.basiq.io/';
const tokenEndPoint = 'token/';
const userEndPoint = 'users/';
const connectEndPoint = '/connections/';
const transactionEndPoint = '/transactions/';
const jobEndPoint = 'jobs/';

// Function which updates headers with new token
async function configUpdate(token) {
	header.configCreate.headers.Authorization = `Bearer ${token}`;
	header.configTrans.headers.Authorization = `Bearer ${token}`;
}

// Authenticate
async function authenticate() {
	let response = await axios.post(
		url + tokenEndPoint,
		body.dataAuth,
		header.configAuth
	);
	return response.data.access_token;
}

// Create User
async function createUser() {
	let response = await axios.post(
		url + userEndPoint,
		body.dataUser,
		header.configCreate
	);
	return response.data.id;
}

// Create Connection
async function createConn(userId) {
	let response = await axios.post(
		url + userEndPoint + userId + connectEndPoint,
		body.dataLogin,
		header.configCreate
	);
	return response.data.id;
}

// Get Job Status
async function getJobStatus(jobId) {
	let response = await axios.get(url + jobEndPoint + jobId, header.configTrans);
	return response.data.steps[2].status;
}

// Get Transactions
async function getTrans(userId) {
	let response = await axios.get(
		url + userEndPoint + userId + transactionEndPoint,
		header.configTrans
	);
	return response.data.data;
}

module.exports = {
	configUpdate,
	authenticate,
	createUser,
	createConn,
	getJobStatus,
	getTrans,
};
