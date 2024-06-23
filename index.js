import assert from 'assert';
import express from 'express';

import routes from './src/routes.js';
import config from './env.config.js';
import dbInit from './src/models/index.js';


// Check if each env var is defined
for (const item of Object.values(config)) {
    assert(item, 'Check your env configuration!');
}

const { EXPRESS_PORT } = config;



dbInit();
const app = express();

app.use(express.json());

app.use('/balance', routes);
app.use('*', (_req, res) => res.status(404).send({ error: 'page not found' }));




app.listen(EXPRESS_PORT, () => console.log(`App started on port ${EXPRESS_PORT}`));
