const express = require('express');
const cors = require('cors');
const passport = require('passport');
const initBearerStrategy = require('./src/features/auth/auth.init');
const jobRouter = require('./src/features/job');
const taskWorker = require('./src/shared/task-worker/task-worker');

const bootstrap = async () => {
  const app = express();
  const router = express.Router();

  const port = process.env.PORT ? +process.env.PORT : 3000;
  await app.listen(port, () => console.log(`App listening on port ${port}`));

  app.use(cors());
  app.use(passport.initialize());
  initBearerStrategy();

  const authenticate = passport.authenticate('bearer', { session: false });
  app.use('/job', jobRouter(router, authenticate));

  taskWorker.runTasks();

  process.on('exit', () => taskWorker.stopTasks());
}

bootstrap();

