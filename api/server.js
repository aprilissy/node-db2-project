const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

module.exports = server;
