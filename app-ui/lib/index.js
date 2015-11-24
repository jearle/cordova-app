

import '../shims/window';
import './app';


import ecoApp from './components/eco-app';


ecoApp({

  navigation: [

    { store: 'people', title: 'People' }

  ],

  people: [

    { name: 'jesse earle', email: 'earle.jesse@gmail.com', location: 'new york'}

  ]

});


const element = $(`
  <eco-app></eco-app>
`);


$('body')
  .append(element);


angular
  .bootstrap(element, ['ecosys']);