
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewareToken = require('./middlewares/tokenRequest');
const port = process.env.PORT || 3000;
const router = jsonServer.router(__dirname + '/db.json');
const routes = require(__dirname + '/routes.json');

router.db._.id = 'Key';

server.use(jsonServer.bodyParser);
server.use(middlewareToken);
server.use(jsonServer.rewriter(routes));

server.use(router);
server.listen(port);