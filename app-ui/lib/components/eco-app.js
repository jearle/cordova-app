

import app from '../app';


import './eco-header';
import './eco-main';


const template = `

  <eco-header></eco-header>
  <eco-main navigation="navigation"></eco-main>

`;


export default (store) =>

  app
    .directive('ecoApp', [

      function () {

        return {

          template,

          link ($scope) {

            $scope.navigation = store.navigation;

          }

        };

      }

    ]);