import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

import serverRenderingHandler from 'app/middlewares/serverRenderingHandler';

const server = express();

server.use('/public', express.static(path.join(__dirname, '../../build')));

server.use(compression());
server.use(bodyParser.json());

server.use(serverRenderingHandler);

export default server;
