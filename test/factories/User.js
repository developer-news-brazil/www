import factory from 'test/factory';

import models from 'app/models';

const { User } = models;

export default factory.define('user', User, {
  username: factory.seq((n) => 'user_' + n ),
  email: factory.seq((n) => 'user_' + n + '@test.com' ),
  password: factory.sequence()
});
