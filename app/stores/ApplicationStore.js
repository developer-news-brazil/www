import BaseStore from 'fluxible/addons/BaseStore';
import RouteStore from 'app/stores/RouteStore';

class ApplicationStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.pageTitle = '';
  }
  handlePageTitle(currentRoute) {
    this.dispatcher.waitFor(RouteStore, () => {
      if (currentRoute && currentRoute.get('title')) {
        this.pageTitle = currentRoute.get('title');
        this.emitChange();
      }
    });
  }
  getPageTitle() {
    return this.pageTitle;
  }
  dehydrate() {
    return {
      pageTitle: this.pageTitle
    };
  }
  rehydrate(state) {
    this.pageTitle = state.pageTitle;
  }
}

ApplicationStore.storeName = 'ApplicationStore';
ApplicationStore.handlers = {
  'NAVIGATE_SUCCESS': 'handlePageTitle'
};

export default ApplicationStore;
