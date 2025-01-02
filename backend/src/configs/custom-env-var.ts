import dotenv from 'dotenv';

dotenv.config();

export const environmentConfig = {
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
    TEST_ENV_MONGODB_CONNECTION_STRING: process.env.TEST_ENV_MONGODB_CONNECTION_STRING,
    WEBSITE_URL: process.env.WEBSITE_URL,
    PORT: process.env.PORT || 8000
};

export default environmentConfig;
