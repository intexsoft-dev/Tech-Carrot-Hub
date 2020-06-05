const JobRepository = require('./job.repository');
const jobRepository = new JobRepository();

const JobService = require('./job.service');
const jobService = new JobService(jobRepository);

const JobController = require('./job.controller');
const jobController = new JobController(jobService);

module.exports = (router, authenticate) => {
  router.get('', authenticate, (req, res) => jobController.findAll(req, res));
  router.delete('/:id', authenticate, (req, res) => jobController.deleteOne(req, res));

  return router;
}
