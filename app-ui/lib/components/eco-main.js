

import app from '../app';


import './eco-nav';
import './eco-article';


const template = `

  <main>

    <eco-nav navigation="navigation"></eco-nav>  

  </main>
  
`;

//    <eco-article></eco-article>

export default

  app
    .directive('ecoMain', [

      function () {

        return {

          replace: true,

          scope: {

            navigation: '='

          },

          template,

          // link: function ($scope) {

          //   $scope.things = [1, 3];

          // }

        };

      }

    ]);