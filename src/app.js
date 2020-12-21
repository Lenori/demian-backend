import express from 'express';
import 'express-async-errors'; // show errors even on async functions
import Youch from 'youch';
import * as Sentry from "@sentry/node";
import sentryConfig from './config/sentry';
import routes from './routes';
import './database';

import cors from 'cors';

const whitelist = ['localhost', 'http://localhost:3000', 'http://escolademianmaia.com.br']

const corsOptions = {
    credentials: true,
    allowedHeaders: '*',
    origin: function (origin, callback) {
        if (origin && whitelist.indexOf(origin) === -1) {
            let msg = `Blocked origin.`;
            return callback(new Error(msg), false);
        } else if (!origin) {
            if (process.env.NODE_ENV == 'development') {
                return callback(null, true)
            }

            let msg = `Request without origins are blocked.`;
            return callback(new Error(msg), false);
        }

        return callback(null, true)
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
        this.server.options('*', cors(corsOptions));

        this.server.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'https://escolademianmaia.com.br');
            next();
        });

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