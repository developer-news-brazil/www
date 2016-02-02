'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var Faker = require('faker');

    var entries = [];

    for(var i = 0; i < 40; i++) {
      entries.push({
        title: Faker.Company.companyName(),
        url: 'http://' + Faker.Internet.domainName(),
        description: Faker.Lorem.sentences(2),
        userId: Faker.random.array_element([1, 2]),
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
