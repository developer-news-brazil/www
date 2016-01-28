import databaseConfig from 'config/database';
import testConfig from 'config/test';
import productionConfig from 'config/production';
import developmentConfig from 'config/development';

const env = process.env.NODE_ENV || 'development';

const envConfigs = {
  test: testConfig,
  production: productionConfig,
  development: developmentConfig
};

const config = envConfigs[env];

config.database = databaseConfig[env];

export default (key) => config[key];
