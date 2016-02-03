import q from 'q';

import factoryGirl from 'factory-girl';
import factorySequelize from 'factory-girl-sequelize';

import factoriesLoader from './factories/loader';

factorySequelize();

const factory = factoryGirl.promisify(q);

factoriesLoader(factory);

export default factory;
