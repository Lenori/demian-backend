import express from 'express';
import routes from './routes';

import cors from 'cors';

import './database';

const corsOptions = {
    allowedHeaders: '*'
}

class App {
    constructor() {
        this.server = express(corsOptions);

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.options('*', cors());
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;