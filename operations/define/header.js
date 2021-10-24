const apiKey =
	'M2E0MDgzZDUtOTc3YS00ZWZhLWI0YzAtYWQ5NmM0N2U2NWY1OjgwODgyYWNhLWJiZTgtNDk1NS05ZjNjLWM0MDIzMDY2ZWViMA==';

//  Headers of Authenticate
const configAuth = {
	headers: {
		Authorization: `Basic ${apiKey}`,
		'Content-Type': 'application/x-www-form-urlencoded',
		'basiq-version': '2.0',
	},
};

//  Headers of Create User and Create Connection
const configCreate = {
	headers: {
		Authorization: `Bearer`, // ${token}
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
};

// Headers of Get Transactions and Check Job Status
const configTrans = {
	headers: {
		Authorization: `Bearer`,
		Accept: 'application/json',
	},
};

module.exports = { configAuth, configCreate, configTrans };
