import { config } from 'dotenv';

config();

export default {
    EXPRESS_PORT: process.env.EXPRESS_PORT,
    PG_DB: process.env.PG_DB,
    PG_HOST: process.env.PG_HOST,
    PG_LOGIN: process.env.PG_LOGIN,
    PG_PASSWORD: process.env.PG_PASSWORD,
    PG_PORT: process.env.PG_PORT
}