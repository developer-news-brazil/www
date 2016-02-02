import loadDatabase from 'app/helpers/databaseLoader';

import factory from 'test/factory';

before((done) => {
  loadDatabase()
    .then(() => done())
    .catch((err) => done(err));
});
