const { Job } = require('../../shared/models');
const { from } = require('rxjs');

class JobRepository {

  create(jobs) {
    return from(Job.create(jobs));
  }

  findAll() {
    return from(Job.findAll());
  }

  deleteOne(id) {
    return from(Job.destroy(id));
  }
}

module.exports = JobRepository;
