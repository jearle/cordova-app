

import app from '../app';


import './eco-header';


const template = `

  <eco-header></eco-header>

`;


export default (store) =>

  app
    .directive('ecoApp', [

      function () {

        return {

          template,

          // link: function ($scope) {

          //   console.log(store);
          //   $scope.title = 'My Title';

          // }

        };

      }

    ]);