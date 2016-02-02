import q from 'q';

import requireDir from 'require-dir';

import factoryGirl from 'factory-girl';
import factorySequelize from 'factory-girl-sequelize';

const factory = factoryGirl.promisify(q);

factorySequelize();

requireDir('./factories');

export default factory;
