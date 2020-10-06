import express from 'express';
import 'express-async-errors'; // show errors even on async functions
import Youch from 'youch';
import * as Sentry from "@sentry/node";
import sentryConfig from './config/sentry';
import routes from './routes';
import './database';

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

        Sentry.init(sentryConfig);

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    middlewares() {
        this.server.use(Sentry.Handlers.requestHandler()); // error handler
        this.server.use(cors(corsOptions));
        this.server.options('*', cors());
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler()); // error handler
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const errors = await new Youch(err, req).toJSON();

            res.status(500).json(errors);
        });
    }
}

export default new App().server;