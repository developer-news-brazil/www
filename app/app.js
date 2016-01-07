import Fluxible from 'fluxible';
import Application from 'app/components/Application';
import ApplicationStore from 'app/stores/ApplicationStore';
import RouteStore from 'app/stores/RouteStore';

// create new fluxible instance
const app = new Fluxible({
  component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);

export default app;
