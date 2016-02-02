import { expect } from 'chai';

import factory from 'test/factory';

describe('User', () => {
  let user;

  before((done) => {
    factory.build('user')
    .then((_user) => {
      user = _user;
      done();
    }).catch((error) => done(error));
  });

  it('should check user\'s email', () => {
    expect(user.email).to.contain('@');
  });
});
