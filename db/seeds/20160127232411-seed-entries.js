'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var faker   = require('faker'),
      entries = [],
      i       = 0;

    for(i; i < 40; i++) {
      entries.push({
        title: faker.company.companyName(),
        url: 'http://' + faker.internet.domainName(),
        description: faker.lorem.sentences(2),
        userId: faker.random.arrayElement([1, 2]),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('entries', entries, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('entries', null, {});
  }
};
