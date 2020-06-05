const { Job } = require('../../shared/models');
const JobRepository = require('./job.repository');
const jobRepository = new JobRepository();

const JobService = require('./job.service');
const jobService = new JobService(jobRepository);

const JobController = require('./job.controller');
const jobController = new JobController(jobService);

describe(('JobController'), () => {

    it('deleteOne',  async (done) => {
      const job = {
        title: 'test',
        guid: 'test',
        isoDate: new Date().toString(),
        link: 'test'
      }
      const createdJob = await Job.create(job);
      const req = { params: { id: createdJob.rows[0].id }};
      const res = {
        status: (status) => {
          expect(status).toBe(200);
          return {
            json: (data) => {
              expect(data).toEqual({ data: 1 });
              done();
            },
          };
        },
      };
      jobController.deleteOne(req ,res);
    });

  it(`should return zero deleted records`,  async (done) => {
    const req = { params: { id: 999 }};
    const res = {
      status: (status) => {
        expect(status).toBe(200);
        return {
          json: (data) => {
            expect(data).toEqual({ data: 0 });
            done();
          },
        };
      },
    };
    jobController.deleteOne(req ,res);
  });

  it(`should throw invalid input syntax error`,  async (done) => {
    const id = Math.random();
    const req = { params: { id }};
    const res = {
      status: (status) => {
        expect(status).toBe(400);
        return {
          json: (data) => {
            expect(data).toEqual({
              message: `delete from "jobs" where "id" = $1 - invalid input syntax for type integer: "${id}"`
            });
            done();
          },
        };
      },
    };
    jobController.deleteOne(req ,res);
  });

});
