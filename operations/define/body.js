//  Body of Authenticate
const dataAuth = {
	grant_type: 'client_credentials',
	scope: 'SERVER_ACCESS',
};

// Body of Create User
// Add errorhandling if email or mobile are not entered!!!
const dataUser = {
	email: 'slobo@gmail.com',
	mobile: '+38163333333',
	firstname: 'Slobodan',
	lastname: 'Todosijevic',
};

// Body of Create Connection
const dataLogin = {
	loginId: 'gavinBelson',
	password: 'hooli2016',
	institution: {
		id: 'AU00000',
	},
};

module.exports = { dataAuth, dataUser, dataLogin };
