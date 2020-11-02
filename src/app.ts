import express from "express";
import config from "./config";
import apiRoutes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(apiRoutes);

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.info('Server started');
});
