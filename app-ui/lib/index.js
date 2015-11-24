

import Chance from 'chance';


import '../shims/window';
import './app';


import ecoApp from './components/eco-app';


const chance = Chance();


const people = [];


for (let i = 0 ; i <  20 ; i++) {
  
  people.push({

    name: chance.name(),
    email: chance.email(),
    phone: chance.phone()

  });

}


ecoApp({

  navigation: [

    { store: 'people', title: 'People' }

  ],

  schema: {
    
    people: [
      
      'name',
      'email',
      'phone'

    ]

  },

  people,

});


const element = $(`
  <eco-app></eco-app>
`);


$('body')
  .append(element);


angular
  .bootstrap(element, ['ecosys']);