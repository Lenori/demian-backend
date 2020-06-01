import express from 'express';
import routes from './routes';

import cors from 'cors';

import './database';

const corsOptions = {
    allowedHeaders: ['X-Game-Authorization']
}

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors(corsOptions));
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;