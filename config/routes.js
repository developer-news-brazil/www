import HomeHandler from 'app/components/home';
import AboutHandler from 'app/components/about';

export default {
  home: {
    path: '/',
    method: 'get',
    page: 'home',
    title: 'Home',
    handler: HomeHandler
  },
  about: {
    path: '/about',
    method: 'get',
    page: 'about',
    title: 'About',
    handler: AboutHandler
  }
};
