import { expect } from 'chai';

import factory from 'test/factory';

describe('User', () => {
  let user;

  before(async (done) => {
    try {
      user = await factory.build('user');
      done();
    } catch(err) {
      done(err);
    }
  });

  it('should check user\'s email', () => {
    expect(user.email).to.contain('@');
  });
});
