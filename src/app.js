import express from 'express';
import routes from './routes';

import cors from 'cors';

const whitelist = ['localhost', 'http://localhost:3000']
const corsOptions = {
    credentials: true,
    allowedHeaders: '*',
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
        } else {
        callback(null, true)
        }
    }
}

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors(corsOptions));
        this.server.options('*', cors());
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;