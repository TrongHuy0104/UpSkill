// Import all the dependencies
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import colors from 'colors';
import path from 'path';

// handle unhandled rejection error
import '@src/middlewares/errors/unhandledRejection';

// Import Routes
import api from '@src/api';

// Import Middleware
import { errorHandlerMiddleware, notFoundMiddleware } from '@src/middlewares';

// Import Api Docs
const swaggerDocument = YAML.load(path.resolve(__dirname, './swagger/swagger.yaml'));
// const swaggerDocument = YAML.load('./docs/swagger.yaml');

// Access Environment variables
dotenv.config();

colors.enable();

// Initialize app with express
const app: express.Application | undefined = express();

// Load App Middleware
app.use(morgan('dev'));

// Set security HTTP headers
app.use(helmet());

app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 1000 * 1000,
    message: 'Too many requests from this IP, please try again in one hour!'
});
app.use('/api', limiter);

app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    helmet({
        crossOriginResourcePolicy: false,
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: false
    })
);

// Serve all static files inside public directory.
app.use('/static', express.static('public'));

// Routes which Should handle the requests
app.use('/api', api);

app.use('/api/test', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        status: 'OK'
    });
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
