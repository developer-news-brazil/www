import loadDatabase from 'app/helpers/databaseLoader';

import factory from 'test/factory';

before(async (done) => {
  try {
    await loadDatabase();
    done();
  } catch(err) {
    done(err);
  }
});
