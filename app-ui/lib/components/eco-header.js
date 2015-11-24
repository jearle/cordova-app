

import app from '../app';


const template = `

  <header>

    <a href="#open">

      | | |

    </a>

    <h1>
      {{title}}
    </h1>

  </header>
  
`;


export default

  app
    .directive('ecoHeader', [

      function () {

        return {

          replace: true,

          template,

          link: function ($scope) {

            $scope.title = 'cordova';

          }

        };

      }

    ]);