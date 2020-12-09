const express = require('express');
const server = express();
const morgan = require('morgan');
const helmet = require('helmet');

const carsRouter = require('./cars/cars-router');


server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;
