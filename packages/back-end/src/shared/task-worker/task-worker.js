const { timer, from, Subscription } = require('rxjs');
const { mergeMap, map, tap } = require('rxjs/operators');
const JobRepository = require('../../features/job/job.repository');
const jobRepository = new JobRepository();
const configService = require('../helpers/config.service');
const Parser = require('rss-parser');
const parser = new Parser();

class TaskWorker {

  constructor(jobRepository) {
    this._jobRepository = jobRepository;
    this.url = 'https://www.upwork.com/ab/feed/jobs/rss';
    this.subscription = new Subscription();
  }

  runTasks() {
    this.runUpworkJob();
  }

  runUpworkJob() {
    this.subscription.add(from(parser.parseURL(this.url)).pipe(
      map(response => this.mapResponse(response.items)),
      mergeMap(jobs => this._jobRepository.create(jobs)),
      mergeMap(() => timer(configService.searchRequestInterval()).pipe(
        // schedule the callback to be run asynchronously
        tap(() => setTimeout(() => this.runUpworkJob(), 0))
      )),
    ).subscribe());
  }


  stopTasks() {
    this.subscription.unsubscribe();
  }

  mapResponse(items) {
    return items.map(i => ({
      guid: i.guid,
      title: i.title,
      link: i.link,
      isoDate: i.isoDate,
    }))
  }
}

const taskWorker = new TaskWorker(jobRepository);
module.exports = taskWorker;
