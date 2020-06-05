class JobController {
  constructor(jobService) {
    this._jobService = jobService;
  }

  findAll(req, res) {
    this._jobService.findAll().subscribe({
      next: data => res.status(200).json({ data }),
      error: err => res.status(err.statusCode || 400).json({ message: err.message }),
      });
  }

  deleteOne(req, res) {
    const id = req.params.id;
    this._jobService.deleteOne(id).subscribe({
      next: data => res.status(200).json({ data }),
      error: err => res.status(err.statusCode || 400).json({ message: err.message }),
    });
  }
}

module.exports = JobController;
