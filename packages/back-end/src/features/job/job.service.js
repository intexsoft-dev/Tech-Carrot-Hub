class JobService {
  constructor(jobRepository) {
    this._jobRepository = jobRepository;
  }

  findAll() {
    return this._jobRepository.findAll();
  }

  deleteOne(id) {
    return this._jobRepository.deleteOne(id);
  }
}

module.exports = JobService;
