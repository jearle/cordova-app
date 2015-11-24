

import app from '../app';


import './eco-nav';


const template = `

  <article>

    an article

  </article>
  
`;


export default

  app
    .directive('ecoArticle', [

      function () {

        return {

          replace: true,

          template,

          link: function ($scope) {

            // $scope.title = 'Eco SYS';

          }

        };

      }

    ]);