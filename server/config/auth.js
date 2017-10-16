module.exports = {
	JWT: {
        secret: 'e3rwefsd'
    },
	facebookAuth: {
		clientID: '1227898667329148',
		clientSecret: 'f1aeb6eda1e3afafaf8be9aa5f4410e9',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://localhost:8080/users/auth/facebook/callback'
	},
	googleAuth: {
		clientID: '241052907365-7plusehb1ba1uaokuk0c530rri7pnnig.apps.googleusercontent.com',
		clientSecret: 'cnOj31vuFsAHQUvezOEM8OeF',
		profileFields: ['id', 'displayName', 'photos', 'profileUrl', 'email'],
		callbackURL: 'http://localhost:8080/users/auth/google/callback'
	}
};
