import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import config from 'app/helpers/configLoader';

const database = config('database');

const sequelize = new Sequelize(database.database,
                                database.username,
                                database.password,
                                database);

const models = {};

const modelsPath = path.resolve(__dirname, '..', 'models');

fs.readdirSync(modelsPath)
  .filter((file) => file.indexOf('.') !== 0 && file.indexOf('index.js') !== 0)
  .forEach((file) => {
    let model = sequelize.import(path.join(modelsPath, file));
    models[file.split('.')[0]] = model;
  });

Object.keys(models).forEach((modelName) => {
  if('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export { models };

export default () => {
  return sequelize.sync();
};
