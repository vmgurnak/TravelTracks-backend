import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import env from './utils/env.js';

const PORT = env('PORT', 3000);

const startServer = () => {
  const app = express();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(express.json());
  app.use(cors());

  app.get('/campers', (req, res) => {
    res.json({ message: 'Response from server route /campers' });
  });

  app.get('/campers/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Response from server route /campers/${id}` });
  });

  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
