'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'john_doe',
        email: 'john@doe.com',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        username: 'jane_doe',
        email: 'jane@doe.com',
        password: '54321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
