import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import env from './utils/env.js';
import campersRouter from './routers/campersRouter.js';

const PORT = env('PORT', 3000);

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

  app.use('*', (req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });

  app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
