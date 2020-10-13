
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewareToken = require('./middlewares/tokenRequest');
const middlewareChangeId = require('./middlewares/changeId');
const port = process.env.PORT || 3000;
const router = jsonServer.router(__dirname + '/db.json');
const routes = require(__dirname + '/routes.json');

server.use(jsonServer.bodyParser);
server.use(middlewareToken);
server.use(middlewareChangeId);
server.use(jsonServer.rewriter(routes));

// const router = jsonServer.router(generate_data);
// server.use(generate_data);
server.use(router);
server.listen(port);