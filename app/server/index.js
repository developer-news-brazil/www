import config from 'app/helpers/configLoader';
import loadDatabase from 'app/helpers/databaseLoader';

import server from './expressServer';

export default loadDatabase().then(() => {
  server.listen(config('port'), () => {
    /*eslint no-console: 0*/
    console.log('Application listening on port 3000');
  });
});
