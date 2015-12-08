

import '../shims/window';
import app from './app';


import { setInjector } from './helpers/angular-get';


import services from './services';


import jseApp from './components/jse-app';


jseApp(app, services());


const element = $(`
  <jse-app></jse-app>
`);


$('body')
  .append(element);


const $injector = angular
  .bootstrap(element, ['ecosys']);


setInjector($injector);