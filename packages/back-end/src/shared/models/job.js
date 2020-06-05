const createGuts = require('../helpers/model-guts');
const name = 'Job';
const tableName = 'jobs';

module.exports = knex => createGuts({
  knex,
  name,
  tableName,
});

