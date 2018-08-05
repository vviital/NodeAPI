var nconf = require('nconf');

nconf.use('memory')

nconf.set('port', +process.env.PORT || 1337);
nconf.set('security:tokenLife', +process.env.TOKEN_LIFE || 3600);
nconf.set('mongoose:uri', process.env.MONGOOSE_URI || 'mongodb://localhost/apiDB');
nconf.set('default:user:username', process.env.DEFAULT_USER_NAME || 'myapi');
nconf.set('default:user:password', process.env.DEFAULT_USER_PASSWORD || 'abc1234');
nconf.set('default:client:name', process.env.DEFAULT_CLIENT_NAME || 'Android API v1');
nconf.set('default:client:clientId', process.env.DEFAULT_CLIENT_ID || 'android');
nconf.set('default:client:clientSecret', process.env.DEFAULT_CLIENT_SECRET || 'SomeRandomCharsAndNumbers');

module.exports = nconf;
