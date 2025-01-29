import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import campersRouter from './routers/campersRouter.js';
import notFoundHundler from './middlewares/notFoundHandler.js';
import env from './utils/env.js';
import errorHandler from './middlewares/errorHandler.js';

const PORT = env('PORT', 4000);

const startServer = () => {
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.use('/api/campers', campersRouter);

  app.use('*', notFoundHundler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
