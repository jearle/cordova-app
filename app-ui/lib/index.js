

import '../shims/window';
import app from './app';


import { setInjector } from './helpers/angular-get';


import getPeople from './services/people';
import getOtherPeople from './services/other-people';
import getNavigation from './services/navigation';
import getSchemas from './services/schemas';


import jseApp from './components/jse-app';


jseApp(app, {

  people: getPeople,
  otherPeople: getOtherPeople,
  navigation: getNavigation,
  schemas: getSchemas

});


const element = $(`
  <eco-app></eco-app>
`);


$('body')
  .append(element);


const $injector = angular
  .bootstrap(element, ['ecosys']);


setInjector($injector);