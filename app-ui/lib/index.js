

import '../shims/window';
import './app';


import ecoApp from './components/eco-app';


ecoApp({});


const element = $(`
  <eco-app></eco-app>
`);


$('body')
  .append(element);


angular
  .bootstrap(element, ['ecosys']);