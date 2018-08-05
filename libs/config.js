var nconf = require('nconf');

nconf.use('memory')

if (process.env.NODE_ENV === 'travis-test') {
    nconf.set('port', 1337);
    nconf.set('security:tokenLife', 3600);
    nconf.set('mongoose:uri', 'mongodb://localhost/apiDB');
    nconf.set('default:user:username', 'myapi');
    nconf.set('default:user:password', 'abc1234');
    nconf.set('default:client:name', 'Android API v1');
    nconf.set('default:client:clientId', 'android');
    nconf.set('default:client:clientSecret', 'SomeRandomCharsAndNumbers');
} else {
    nconf.set('port', +process.env.PORT);
    nconf.set('security:tokenLife', +process.env.TOKEN_LIFE);
    nconf.set('mongoose:uri', process.env.MONGOOSE_URI);
    nconf.set('default:user:username', process.env.DEFAULT_USER_NAME);
    nconf.set('default:user:password', process.env.DEFAULT_USER_PASSWORD);
    nconf.set('default:client:name', process.env.DEFAULT_CLIENT_NAME);
    nconf.set('default:client:clientId', process.env.DEFAULT_CLIENT_ID);
    nconf.set('default:client:clientSecret', process.env.DEFAULT_CLIENT_SECRET);
}

console.log('--- nconf.get ---', nconf.get('mongoose:uri'));

module.exports = nconf;
